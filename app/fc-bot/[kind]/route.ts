import axios from "axios";
import { NextResponse } from "next/server";
import { kv } from "@vercel/kv";
import { createHmac } from "crypto";
import GraphemeSplitter from "grapheme-splitter";

type Params = {
  kind: string;
};

interface WebhookData {
  created_at: number;
  type: string;
  data: {
    object: string;
    hash: string;
    thread_hash: string;
    parent_hash?: string;
    parent_url: string;
    root_parent_url: string;
    parent_author: {
      fid: null;
    };
    author: {
      object: string;
      fid: number;
      custody_address: string;
      username: string;
      display_name: string;
      pfp_url: string;
      profile: [];
      follower_count: number;
      following_count: number;
      verifications: string[];
      active_status: string;
    };
    text: string;
    timestamp: string;
    embeds: [];
    reactions: {
      likes: [];
      recasts: [];
    };
    replies: {
      count: number;
    };
    mentioned_profiles: [];
  };
}

async function getValidatedBody(
  req: Request,
  kind: string,
): Promise<WebhookData> {
  // console.log("validating webhook signature");

  // @ts-ignore
  const body = await req.json();

  console.log("got body", body);

  const sig = req.headers.get("X-Neynar-Signature");

  if (!sig) {
    console.log("Neynar signature missing from request headers", {
      body,
    });
    throw new Error("Neynar signature missing from request headers");
  }

  // console.log("got x-neynar-signature", sig);

  const webhookSecret = process.env["NEYNAR_WEBHOOK_SECRET_" + kind];
  if (!webhookSecret) {
    throw new Error(
      "Make sure you set NEYNAR_WEBHOOK_SECRET in your .env file",
    );
  }

  // console.log("create hmac with webhook secret");

  const hmac = createHmac("sha512", webhookSecret);

  // console.log("add text body to hmac");

  hmac.update(JSON.stringify(body));

  // console.log("digest hmac hex");

  const generatedSignature = hmac.digest("hex");

  // console.log("compare sigs", { sig, generatedSignature });

  const isValid = generatedSignature === sig;
  if (!isValid) {
    console.log("Invalid webhook signature", { sig, generatedSignature });
    throw new Error("Invalid webhook signature");
  }

  // console.log("sig valid, parse text body as json");

  return body;
}

async function cast(data: { text: string; parent: string }) {
  const options = {
    method: "POST",
    url: "https://api.neynar.com/v2/farcaster/cast",
    data: {
      signer_uuid: process.env.NEYNAR_SIGNER_UUID,
      text: data.text,
      parent: data.parent,
    },
    headers: {
      accept: "application/json",
      api_key: process.env.NEYNAR_API_KEY,
      "content-type": "application/json",
    },
  };

  // console.log("reply casting");

  try {
    const response = await axios.request(options);
    console.log("cast success", response.data);
    return response.data;
  } catch (error) {
    console.error("cast error", error);
  }
}

async function handleFarcastles(body: WebhookData) {
  const cast_hash: string = body.data.hash;
  const cast_author_fid: number = body.data.author.fid;
  const text: string = body.data.text;
  const root_parent_url: string = body.data.root_parent_url;

  // console.log("test if !attack", { cast_hash, cast_author_fid, text });

  // whitelisted channels
  if (!root_parent_url?.endsWith("channel/farcastles")) {
    console.log("not whitelisted channel", {
      cast_hash,
      cast_author_fid,
      text,
      root_parent_url,
    });
    return new NextResponse("not whitelisted channel");
  }

  if (!text?.includes("!attack south") && !text?.includes("!attack north")) {
    console.log("not !attack", { cast_hash, cast_author_fid, text });
    return new NextResponse("not !attack");
  }

  const kvId = "farcastles-attack-fid-" + cast_author_fid;
  const replied = (await kv.get<boolean>(kvId)) ?? false;

  console.log(`replied to user before?`, { cast_author_fid, replied, kvId });

  if (!replied) {
    const replyCastText = text?.includes("!attack south")
      ? "Thank you for support the /northern-army 🫡\n18 $DEGEN by /ak"
      : "no $DEGEN for you\n💩💩💩";

    await cast({ text: replyCastText, parent: cast_hash });

    // cache replied for 12h
    const result = await kv.set<boolean>(kvId, true, { ex: 60 * 60 * 12 });

    console.log("set replied", { result, kvId });
  } else {
    console.log("skip replying", { cast_author_fid, replied });
  }

  return new NextResponse("done");
}

async function handleGame(body: WebhookData) {
  const AK_GAME_CAST_HASH = process.env.AK_GAME_CAST_HASH;
  if (
    AK_GAME_CAST_HASH === null &&
    !body.data.parent_hash?.startsWith(AK_GAME_CAST_HASH)
  ) {
    console.log("not the game cast", {
      AK_GAME_CAST_HASH,
    });
    return new NextResponse("not the game cast");
  }

  const text = body.data.text;
  const cast_hash = body.data.hash;
  const cast_author_fid = body.data.author.fid;

  const kvId = "ak-game-" + cast_author_fid;
  const replied = (await kv.get<boolean>(kvId)) ?? false;
  const foundEmojiId = "ak-game-emoji-found";
  const foundEmoji = (await kv.get<boolean>(foundEmojiId)) ?? false;

  const splitter = new GraphemeSplitter();
  const [firstEmoji] = splitter.splitGraphemes(text);
  const secretEmoji = process.env.AK_GAME_SECRET_EMOJI;

  if (foundEmoji) {
    console.log(`already found emoji`, { cast_author_fid, replied, kvId });
    return new NextResponse("emoji already found");
  }

  console.log(`replied to user before?`, { cast_author_fid, replied, kvId });

  if (replied) {
    console.log("skip replying", { cast_author_fid, replied });
    return new NextResponse("already replied to user");
  }

  let replyCastText: string;
  if (firstEmoji === secretEmoji) {
    replyCastText =
      "You found the secret emoji! Quote cast & tag @alexk to claim your prize.";

    // cache replied for 1h
    const result = await kv.set<boolean>(foundEmojiId, true);
    console.log("set found emoji in cache", { result, foundEmojiId });
  } else {
    replyCastText =
      "Not the secret emoji! Try again in 1 hour. 10 $DEGEN by /ak NAKAMA ◕ ◡ ◕";
  }

  await cast({ text: replyCastText, parent: cast_hash });

  // cache replied for 1h
  const result = await kv.set<boolean>(kvId, true, { ex: 60 * 60 });

  console.log("set replied", { result, kvId });

  return new NextResponse("done");
}

export async function POST(req: Request, context: { params: Params }) {
  console.log("entered /fc-bot POST route", { params: context.params });

  let body: WebhookData;
  try {
    body = await getValidatedBody(req, context.params.kind);
  } catch (error) {
    return new NextResponse("error validating body");
  }

  let res: NextResponse;
  switch (context.params.kind) {
    case "FARCASTLES":
      res = await handleFarcastles(body);
      break;
    case "AK_GAME":
      res = await handleGame(body);
      break;
    default:
      res = new NextResponse("invalid kind");
  }

  return res;
}

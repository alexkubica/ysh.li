import { authOptions } from "@/app/auth";
import { getServerSession } from "next-auth/next";
import { NextRequest, NextResponse } from "next/server";

require("dotenv").config({
  path: [".env.local", ".env", ".env.development.local"],
});
const _ = require("lodash");
const axios = require("axios");

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
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

  try {
    const response = await axios.request(options);
    console.log("cast success", response.data);
    return response.data;
  } catch (error) {
    console.error("cast error", error);
  }
}

export async function POST(req: NextRequest, res: NextResponse) {
  console.log("entered /tip/api POST route");

  const session = (await getServerSession(authOptions)) as {
    user: {
      fid: string;
      fname: string;
      avatar: string;
    };
  };

  console.log("got session", session);

  if (!session || session.user?.fid !== "14879") {
    throw new Error("Only @alexk is authorized to use this page");
  }

  // @ts-ignore
  const body = (await req.json()) as {
    cast: string | null;
    amount: number | null;
    tipType: "degen" | "ham" | null;
  };

  if (!body?.cast) {
    throw new Error("no cast url provided");
  }

  if (!body?.amount) {
    throw new Error("no amount provided");
  }

  if (!body?.tipType) {
    throw new Error("no tipType provided");
  }

  const options = {
    method: "GET",
    url: `https://api.neynar.com/v2/farcaster/cast/conversation?identifier=${encodeURIComponent(body.cast)}&type=url&reply_depth=1&include_chronological_parent_casts=true`,
    headers: { accept: "application/json", api_key: "NEYNAR_API_DOCS" },
  };

  try {
    const response = await axios.request(options);
    console.log("response", response.data.conversation.cast.direct_replies);
    let directReplies = response.data.conversation.cast.direct_replies.filter(
      (r: any) => {
        const shouldTip = r.author.fid !== 14879 && r.replies.count === 0;

        const replyUrl = `https://warpcast.com/${r.author.username}/${r.hash.slice(0, 10)}`;
        console.log("should tip?", {
          replyUrl,
          fid: r.author.fid,
          shouldTip,
        });

        return shouldTip;
      },
    );

    directReplies = _.uniqBy(directReplies, "author.fid");
    console.log(directReplies.length);

    const tipAmount = Math.floor(body.amount! / directReplies.length);

    if (tipAmount < 1) {
      throw new Error("tip amount too low");
    }

    let text = "";
    if (body.tipType === "degen") {
      text = `Have a degenful day 🎩
You're receiving ${tipAmount} $DEGEN out of ${body.amount} split among ${directReplies.length} repliers in this cast.
Sponsored by /ak ⚡️ 
🔔 Follow & turn notifications ON 🔔`;
    } else {
      text = `Have a hamful day!
You're receiving 🍖 x ${tipAmount} out of ${body.amount} split among ${directReplies.length} repliers in this cast.
Sponsored by /ak ⚡️ 
🔔 Follow & turn notifications ON 🔔`;
    }
    console.log(text);

    for (let i = 0; i < directReplies.length; i++) {
      const r = directReplies[i];
      const replyUrl = `https://warpcast.com/${r.author.username}/${r.hash.slice(0, 10)}`;
      console.log("tipping user", { fid: r.author.fid, replyUrl });

      await cast({
        text,
        parent: r.hash,
      });
    }

    if (body.tipType === "degen") {
      return new NextResponse(
        `split ${body.amount} among ${directReplies.length} users
each got ${tipAmount} $DEGEN`,
      );
    } else {
      return new NextResponse(
        `split ${body.amount} among ${directReplies.length} users
each got 🍖 x ${tipAmount}`,
      );
    }
  } catch (error) {
    console.error(error);
  }

  return new NextResponse("error");
}

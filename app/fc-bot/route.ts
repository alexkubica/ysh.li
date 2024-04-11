import axios from "axios";
import { NextResponse } from "next/server";
import { kv } from "@vercel/kv";
import { createHmac } from "crypto";

export async function POST(req: Request) {
  // console.log("entered /fc-bot POST route", req.headers);

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

  const webhookSecret = process.env.NEYNAR_WEBHOOK_SECRET;
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
    // throw new Error("Invalid webhook signature");
    return new NextResponse("Invalid webhook signature");
  }

  // console.log("sig valid, parse text body as json");

  const cast_hash = body?.data?.hash;
  const cast_author_fid = body?.data?.author?.fid;
  const text = body?.data?.text;

  // console.log("test if !attack", { cast_hash, cast_author_fid, text });

  if (!text?.includes("!attack south") && !text?.includes("!attack north")) {
    console.log("not !attack", { cast_hash, cast_author_fid, text });
    return new NextResponse("not !attack");
  }

  const kvId = "replied-" + cast_author_fid;
  const replied = (await kv.get<boolean>(kvId)) ?? false;

  console.log(`replied to user before?`, { cast_author_fid, replied, kvId });

  if (!replied) {
    const replyCastText = text?.includes("!attack south")
      ? "Thank you for support the /northern-army 🫡\n18 $DEGEN by /ak"
      : "no $DEGEN for you\n💩💩💩";

    const options = {
      method: "POST",
      url: "https://api.neynar.com/v2/farcaster/cast",
      data: {
        signer_uuid: process.env.NEYNAR_SIGNER_UUID,
        text: replyCastText,
        parent: cast_hash,
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
    } catch (error) {
      console.error("cast error", error);
    }

    // console.log("axios done, set replied");

    // cache replied for 12h
    const result = await kv.set<boolean>(kvId, true, { ex: 60 * 60 * 12 });

    console.log("set replied", { result, kvId });
  } else {
    console.log("skip replying", { cast_author_fid, replied });
  }

  return new NextResponse("done");
}

import axios from "axios";
import { NextResponse } from "next/server";
import { kv } from "@vercel/kv";
import { createHmac } from "crypto";

export async function POST(req: Request) {
  console.log("entered /fc-bot POST route", req.headers);

  // todo fix this to only allow neynar webhook

  /*
  console.log("request url", req.url);

  if (!req.url.startsWith("https://dev.neynar.com")) {
    console.log("not neynar webhook", req.url);
    return new NextResponse("not neynar webhook", { status: 403 });
  }
  */

  console.log("validating webhook signature");

  // @ts-ignore
  const textBody = await req.text();

  console.log("got text body", textBody);

  const sig = req.headers.get("X-Neynar-Signature");

  if (!sig) {
    console.log("Neynar signature missing from request headers", { textBody });
    throw new Error("Neynar signature missing from request headers");
  }

  console.log("got x-neynar-signature", sig);

  const webhookSecret = process.env.NEYNAR_WEBHOOK_SECRET;
  if (!webhookSecret) {
    throw new Error(
      "Make sure you set NEYNAR_WEBHOOK_SECRET in your .env file",
    );
  }

  console.log("create hmac with webhook secret");

  const hmac = createHmac("sha512", webhookSecret);

  console.log("add text body to hmac");

  hmac.update(textBody);

  console.log("digest hmac hex");

  const generatedSignature = hmac.digest("hex");

  console.log("compare sigs", { sig, generatedSignature });

  const isValid = generatedSignature === sig;
  if (!isValid) {
    console.log("Invalid webhook signature", { sig, generatedSignature });
    throw new Error("Invalid webhook signature");
  }

  console.log("sig valid, parse text body as json");

  const body = JSON.parse(textBody);

  console.log("webhook parsed body", body);

  const cast_hash = body?.data?.hash;
  const cast_author_fid = body?.data?.author?.fid;
  const text = body?.data?.text;

  console.log("test if !attack south", { cast_hash, cast_author_fid, text });

  if (!text?.includes("!attack south") && !text?.includes("!attack north")) {
    console.log("not !attack south", { cast_hash, cast_author_fid, text });
    return new NextResponse("not !attack south or !attack north");
  }

  const kvId = "replied-" + cast_author_fid;
  const replied = (await kv.get<boolean>(kvId)) ?? false;

  console.log(`replied?`, { cast_author_fid, replied, kvId });

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

    console.log("reply casting to: ", cast_hash);

    try {
      const response = await axios.request(options);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }

    console.log("axios done, set replied");

    // cache replied for 12h
    const result = await kv.set<boolean>(kvId, true, { ex: 60 * 60 * 12 });

    console.log("set replied", { result, kvId });
  } else {
    console.log("skip replying", { cast_author_fid, replied });
  }

  return new NextResponse("done");
}

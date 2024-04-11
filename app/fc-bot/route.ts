import axios from "axios";
import { NextResponse } from "next/server";
import { kv } from "@vercel/kv";

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

  // @ts-ignore
  const body = await req.json();

  console.log("webhook body:", body);

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

  console.log(`replied?`, { cast_author_fid, tipped: replied });

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

    // set tipped for 12h
    const result = await kv.set<boolean>(kvId, true, { ex: 60 * 60 * 12 });

    console.log("set replied", { result, kvId });
  } else {
    console.log("skip replying", { cast_author_fid, tipped: replied });
  }

  return new NextResponse("done");
}

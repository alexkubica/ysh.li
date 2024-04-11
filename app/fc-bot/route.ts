import axios from "axios";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  console.log("entered /fc-bot POST route");

  // @ts-ignore
  const body = await req.json();

  console.log("webhook body:", body);

  const parent_url = body?.data?.parent_url;

  const options = {
    method: "POST",
    url: "https://api.neynar.com/v2/farcaster/cast",
    data: {
      signer_uuid: process.env.NEYNAR_SIGNER_UUID,
      text: "hi! i'm a bot 🫡",
      parent: parent_url,
    },
    headers: {
      accept: "application/json",
      api_key: process.env.NEYNAR_API_KEY,
      "content-type": "application/json",
    },
  };

  console.log("reply casting to: ", parent_url);

  try {
    const response = await axios.request(options);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }

  console.log("axios done");

  return new NextResponse("done");
}

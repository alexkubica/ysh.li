import axios from "axios";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  console.log("entered /fc-bot POST route");

  // @ts-ignore
  const body = await req.json();

  console.log("webhook body:", body);

  const options = {
    method: "POST",
    url: "https://api.neynar.com/v2/farcaster/cast",
    data: {
      signer_uuid: process.env.NEYNAR_SIGNER_UUID,
      text: "hi! i'm a bot 🫡",
      parent: body?.data?.parent_url,
    },
    headers: {
      accept: "application/json",
      api_key: process.env.NEYNAR_API_KEY,
      "content-type": "application/json",
    },
  };

  axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });

  return new NextResponse("done");
}

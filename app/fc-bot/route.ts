import axios from "axios";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  // @ts-ignore
  const body = await req.json();

  console.log("webhook body:", body);

  const options = {
    method: "POST",
    url: "https://api.neynar.com/v2/farcaster/cast",
    data: {
      signer_uuid: "a66fb991-9261-424f-b521-c3f6847f300d",
      text: "hi! i'm a bot 🫡",
      parent: body?.data?.parent_url,
    },
    headers: {
      accept: "application/json",
      api_key: "54A2E250-288E-4090-A888-4668DC442AD7",
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

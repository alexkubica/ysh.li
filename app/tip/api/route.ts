import { getServerSession } from "next-auth/next";
import { NextRequest, NextResponse } from "next/server";
import { authOptions } from "../../api/auth/[...nextauth]/route";

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

function roundToTwo(num: number) {
  // @ts-ignore
  return +(Math.round(num + "e+2") + "e-2");
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
  };

  if (!body?.cast) {
    throw new Error("no cast url provided");
  }

  if (!body?.amount) {
    throw new Error("no amount provided");
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
        console.log("check tip?", {
          replyUrl,
          fid: r.author.fid,
          shouldTip,
        });

        return shouldTip;
      },
    );

    directReplies = _.uniqBy(directReplies, "author.fid");
    console.log(directReplies.length);

    const tipAmount = roundToTwo(body.amount! / directReplies.length);

    for (let i = 0; i < directReplies.length; i++) {
      const r = directReplies[i];
      const replyUrl = `https://warpcast.com/${r.author.username}/${r.hash.slice(0, 10)}`;
      console.log("tipping user", { fid: r.author.fid, replyUrl });
      const text = `Have a degenful day 🎩
You're receiving ${tipAmount} $DEGEN out of ${body.amount} tip pool split among ${directReplies.length} repliers in this cast.
Sponsored by /ak ⚡️ 
🔔 Notifications ON 🔔`;

      console.log(text);

      await cast({
        text,
        parent: r.hash,
      });
    }

    return new NextResponse(
      `done, split ${body.amount} among ${directReplies.length} users`,
    );
  } catch (error) {
    console.error(error);
  }

  return new NextResponse("error");
}

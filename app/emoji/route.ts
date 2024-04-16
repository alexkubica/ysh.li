import { NextResponse } from "next/server";
import * as emojiSDK from "node-emoji";

export async function GET(req: Request) {
  return NextResponse.json({
    name: "Random Emoji Generator 🎲",
    icon: "smiley",
    description: "Get a random emoji. By /ak.",
    aboutUrl: "https://alexkubica.com",
    postUrl: "https://ysh.li/emoji",
    action: {
      type: "post",
      url: "https://ysh.li/emoji",
    },
  });
}

export async function POST(req: Request) {
  const emoji = emojiSDK.random();
  console.log("generating random emoji", { emoji });

  return NextResponse.json({
    message: "Your random emoji is: " + emoji + ". /ak",
  });
}

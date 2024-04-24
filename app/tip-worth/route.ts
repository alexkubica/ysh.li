import { NextResponse } from "next/server";
import Moralis from "moralis";
import axios from "axios";

export async function GET(req: Request) {
  return NextResponse.json({
    name: "$DEGEN tip worth 🤔?",
    icon: "question",
    description: "GET $DEGEN tip worth in the cast. By /ak.",
    aboutUrl: "https://alexkubica.com",
    postUrl: "https://ysh.li/degen",
    action: {
      type: "post",
      url: "https://ysh.li/degen",
    },
  });
}

async function getCast(castId: string): Promise<{ text: string }> {
  const options = {
    method: "GET",
    url: `https://api.neynar.com/v2/farcaster/cast?identifier=${castId}&type=hash`,
    headers: {
      accept: "application/json",
      api_key: process.env.NEYNAR_API_KEY,
    },
  };

  // console.log("reply casting");

  try {
    const response = await axios.request(options);
    console.log("cast fetched", response.data);
    return response.data;
  } catch (error) {
    throw error;
  }
}

function extractNumberFromText(text: string): number | null {
  const pattern = /(\d+)\s+\$degen/i; // \d+ matches one or more digits, \s+ matches one or more spaces, $degen matches "$degen" case-insensitively
  const match = text.match(pattern);

  if (match) {
    return parseInt(match[1], 10); // match[1] is the first capture group (the number)
  } else {
    return null; // Return null if no match is found
  }
}

export async function POST(req: Request) {
  // @ts-ignore
  const body = await req.json();

  // console.log("got body", body);

  const castId = body.cast_id;

  console.log("got cast", { castId });

  const cast = await getCast(castId);

  const degenTip = extractNumberFromText(cast.text);

  if (!degenTip) {
    return NextResponse.json({
      message: `🛑 Couldn't find a $DEGEN tip in the cast. By /ak`,
    });
  }

  if (!Moralis.Core.isStarted) {
    console.log("starting moralis");
    await Moralis.start({
      apiKey: process.env.MORALIS_API_KEY,
    });
  }

  const response = await Moralis.EvmApi.token.getTokenPrice({
    chain: "0x2105",
    address: "0x4ed4E862860beD51a9570b96d89aF5E1B0Efefed",
  });

  const price = Number.parseFloat(
    Number.parseFloat(response?.raw?.usdPriceFormatted ?? "99999").toFixed(3),
  );

  const degenTipWorth = degenTip * price;

  console.log({ degenTipWorth, degenTip, price });

  return NextResponse.json({
    message: `${degenTip} $DEGEN tip is worth $${degenTipWorth}, 1 $DEGEN = $${price}. By /ak`,
  });
}

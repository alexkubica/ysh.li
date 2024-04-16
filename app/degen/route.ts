import { NextResponse } from "next/server";
import Moralis from "moralis";

export async function GET(req: Request) {
  return NextResponse.json({
    name: "$DEGEN price",
    icon: "pulse",
    description: "Get $DEGEN's current price in USD",
    aboutUrl: "https://alexkubica.com",
    postUrl: "https://ysh.li/degen",
    action: {
      type: "post",
      url: "https://ysh.li/degen",
    },
  });
}

export async function POST(req: Request) {
  await Moralis.start({
    apiKey: process.env.MORALIS_API_KEY,
  });

  const response = await Moralis.EvmApi.token.getTokenPrice({
    chain: "0x2105",
    address: "0x4ed4E862860beD51a9570b96d89aF5E1B0Efefed",
  });

  const price = Number.parseFloat(response.raw.usdPriceFormatted).toFixed(3);

  return NextResponse.json({
    message: "$DEGEN price is $" + price,
  });
}

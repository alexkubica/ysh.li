import { NextRequest, NextResponse } from "next/server";
import { SHARE_URL } from "../constants";

type Params = {
  page: number;
};

export async function POST(request: NextRequest, context: { params: Params }) {
  // @ts-ignore
  const { fid } = request.body?.untrustedData ?? {};

  return new NextResponse(`
    <!DOCTYPE html>
        <html>
            <head>
                <title>What is my fid page #${context.params.page}</title>
                <meta property="og:image" content="${process.env.NEXT_PUBLIC_URL}/images/fc-avatar.png" />
                <meta property="fc:frame" content="vNext" />
                <meta property="fc:frame:image:aspect_ratio" content="1:1" />
                <meta property="fc:frame:image" content="${process.env.NEXT_PUBLIC_URL}/images/fc-avatar.png" />
                <meta property="fc:frame:button:1" content="Made by @alexk 👨🏻‍💻" />
                <meta property="fc:frame:button:1:action" content="link" />
                <meta property="fc:frame:button:1:target" content="https://alexkubica.com" />
                <meta property="fc:frame:button:2" content="Share Frame 🖼️" />
                <meta property="fc:frame:button:2:action" content="link" />
                <meta property="fc:frame:button:2:target" content="${SHARE_URL}" />
                <meta property="fc:frame:button:3" content="${fid} 😮!" />
            </head>
        </html>
    `);
}

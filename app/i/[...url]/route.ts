import { NextResponse } from "next/server";

type Params = {
  url: string[];
};

export async function GET(
  request: Request,
  context: { params: Promise<Params> },
) {
  const params = await context.params;
  if (params.url[0] === "http:" || params.url[0] === "https:") {
    params.url[0] = params.url[0] + "/";
  }

  const url = params.url.join("/");

  console.log(url);

  return new NextResponse(`
    <!DOCTYPE html>
        <html>
            <head>
                <title>Image Proxy Frame</title>
                <meta property="fc:frame:post_url" content="${process.env.NEXT_PUBLIC_URL}/alex/fc/0" />
                <meta property="og:image" content="${url}" />
                <meta property="fc:frame:image" content="${url}" />
                <meta property="fc:frame" content="vNext" />

                <meta property="fc:frame:button:1" content="To use cast: https://ysh.li/i/IMAGE_URL, made by @alexk" />
                <meta property="fc:frame:button:1:action" content="link" />
                <meta property="fc:frame:button:1:target" content="https://alexkubica.com" />
            </head>
        </html>
    `);
}

import { NextResponse } from "next/server";

type Params = {
  url: string[];
};

export async function GET(request: Request, context: { params: Params }) {
  console.log(context);
  if (context.params.url[0] === "http:" || context.params.url[0] === "https:") {
    // @ts-ignore
    context.params.url[0] = context.params.url[0] + "/";
  }

  const url = context.params.url.join("/");

  console.log(url);

  return new NextResponse(`
    <!DOCTYPE html>
        <html>
            <head>
                <meta property="og:image" content="${url}" />
                <meta property="fc:frame" content="vNext" />
                <meta property="fc:frame:image" content="${url}" />

                <meta property="fc:frame:button:1" content="To use cast: https://ysh.li/i/IMAGE_URL, made by @alexk" />
                <meta property="fc:frame:button:1:action" content="link" />
                <meta property="fc:frame:button:1:target" content="https://alexkubica.com" />
            </head>
        </html>
    `);
}

import { Metadata } from "next";
import Footer from "../components/Footer";
import LinkButton from "../components/LinkButton";
import { SHARE_URL } from "./constants";

function getBaseUrl() {
  return process.env.NEXT_PUBLIC_URL;
}

const SITE_URL = getBaseUrl();

export const metadata: Metadata = {
  title: "What's my fid?",
  openGraph: {
    images: [`${SITE_URL}/images/fc-avatar.png`],
  },
  other: {
    "fc:frame:image:aspect_ratio": "1:1",
    "fc:frame": "vNext",
    "fc:frame:image": `${SITE_URL}/images/fc-avatar.png`,
    "og:image": `${SITE_URL}/images/fc-avatar.png`,
    "fc:frame:post_url": `${SITE_URL}/fid/0`,
    "fc:frame:button:1": "Made by @alexk 👨🏻‍💻",
    "fc:frame:button:1:action": "link",
    "fc:frame:button:1:target": "https://alexkubica.com",
    "fc:frame:button:2": "Share Frame 🖼️",
    "fc:frame:button:2:action": "link",
    "fc:frame:button:2:target": SHARE_URL,
    "fc:frame:button:3": "What's my fid 🤔?",
  },
};

export default function HomePage() {
  return (
    <div
      dir="ltr"
      data-theme="alex"
      className="min-h-screen flex flex-col justify-between"
    >
      <div className="flex flex-col justify-between text-white text-center max-w-screen-md mx-auto container">
        <div className="flex flex-col items-center p-4 space-y-8">
          <div className="avatar">
            <div className="mt-8 w-32 rounded-2xl">
              <img src="/images/fc-avatar.png" alt={"avatar"} />
            </div>
          </div>
          <div className="prose text-center">
            <h2>What&apos;s my fid?</h2>
            <div className="prose text-center">
              A frame to display your fid in a Warpcast post.
            </div>
            <div className="prose text-center pt-8">
              <LinkButton dir="ltr" url={SHARE_URL}>
                Try it 🖼️ !
              </LinkButton>
            </div>
            <div className="prose text-center pt-8">
              <LinkButton dir="ltr" url="https://alexkubica.com">
                Made by Alex Kubica 👨🏻‍💻
              </LinkButton>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

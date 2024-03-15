import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandTelegram,
  IconBrandThreads,
  IconBrandTiktok,
  IconBrandWhatsapp,
  IconBrandX,
  IconBrandYoutube,
  IconMail,
} from "@tabler/icons-react";
import IconButton from "../../components/IconButton";
import LinkButton from "../../components/LinkButton";
import Footer from "../../components/Footer";
import { Metadata } from "next";

export function getBaseUrl() {
  return process.env.NEXT_PUBLIC_URL;
}

const SITE_URL = getBaseUrl();

export const metadata: Metadata = {
  title: "Alex Kubica",
  openGraph: {
    images: [`${SITE_URL}/images/alex-avatar.png`],
  },
  other: {
    "fc:frame:image:aspect_ratio": "1:1",
    "fc:frame": "vNext",
    "fc:frame:image": `${SITE_URL}/images/alex-avatar.png`,
    "og:image": `${SITE_URL}/images/alex-avatar.png`,
    "fc:frame:post_url": `${SITE_URL}/alex/fc/0`,
    "fc:frame:button:1": "🔗 My Links",
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
              <img src="/images/alex-avatar.png" alt={"avatar"} />
            </div>
          </div>
          <div className="prose text-center">
            <h2>Alex Kubica 🇮🇱🎩🏰🔮</h2>
            <div className="prose text-center">
              🚀 Learning to BUIDL
              <br />
              👨🏻‍💻 Dev at monday.com, prev- Wix, IDF
              <br />
              🏛️ FID 14879
            </div>
            <div className="prose text-center pt-4">
              <LinkButton url="https://warpcast.com/alexk">Warpcast</LinkButton>
            </div>
            <div className="prose text-center pt-4">
              <LinkButton url="/alex">קישורים בעברית</LinkButton>
            </div>
          </div>
          <div className="flex flex-wrap gap-4 justify-center pb-4">
            <IconButton
              icon={<IconBrandTelegram />}
              url="https://t.me/alexkubica"
            />
            <IconButton icon={<IconMail />} url="mailto:me@alexkubica.com" />
            <IconButton icon={<IconBrandX />} url="https://x.com/alexkubica_" />
            <IconButton
              icon={<IconBrandLinkedin />}
              url="https://www.linkedin.com/in/alexkubica/"
            />
            <IconButton
              icon={<IconBrandThreads />}
              url="https://www.threads.net/@alex_kubica"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

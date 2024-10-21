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
import IconButton from "../components/IconButton";
import LinkButton from "../components/LinkButton";
import Footer from "../components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "יש.לי - אלכס קוביצה",
};

export default function HomePage() {
  return (
    <div
      data-theme="alex"
      className="min-h-screen flex flex-col justify-between"
    >
      <div className="flex flex-col justify-between text-white text-center max-w-screen-md mx-auto container">
        <div className="flex flex-col items-center p-4 space-y-8">
          <div className="avatar">
            <div className="mt-8 w-32 rounded-2xl">
              <img src="images/alex-avatar.png" alt={"avatar"} />
            </div>
          </div>
          <div className="prose text-center">
            <h2>אלכס קוביצה</h2>
            <div className="prose text-center">
              תקנו את הכסף, תקנו את העולם - ביטקוין.
            </div>
            <div className="prose text-center">מתכנת בסטארטאפ.</div>
          </div>
          <div className="flex flex-wrap gap-4 justify-center pb-4">
            <IconButton
              icon={<IconBrandWhatsapp />}
              url="https://api.whatsapp.com/send?phone=972526350655"
            />
            <IconButton
              icon={<IconBrandTelegram />}
              url="https://t.me/alexkubica"
            />
            <IconButton icon={<IconMail />} url="mailto:me@alexkubica.com" />
            <IconButton
              icon={<IconBrandX />}
              url="https://x.com/alexkubicail"
            />
            <IconButton
              icon={<IconBrandLinkedin />}
              url="https://www.linkedin.com/in/alexkubica/"
            />
            {/*<IconButton
              icon={<IconBrandThreads />}
              url="https://www.threads.net/@alex_kubica"
            />*/}
            <IconButton
              icon={<IconBrandFacebook />}
              url="https://www.facebook.com/mralexkubica"
            />
            <IconButton
              icon={<IconBrandInstagram />}
              url="https://instagram.com/alex_kubica"
            />
            <IconButton
              icon={<IconBrandTiktok />}
              url="https://tiktok.com/@alexkubica"
            />
            {/*<IconButton
              icon={<IconBrandYoutube />}
              url="https://www.youtube.com/@alexkubica"
            />*/}
          </div>
          <div className="animate-bounce w-full">
            <LinkButton
              type="accent"
              url="https://api.whatsapp.com/send/?phone=972526350655&text=%D7%94%D7%99%D7%99%20%D7%90%D7%A0%D7%99%20%D7%9E%D7%A2%D7%95%D7%A0%D7%99%D7%99%D7%A0/%D7%AA%20%D7%9C%D7%A7%D7%91%D7%9C%20%D7%94%D7%A6%D7%A2%D7%AA%20%D7%9E%D7%97%D7%99%D7%A8%20%D7%9C%D7%90%D7%AA%D7%A8%20%F0%9F%99%82&type=phone_number&app_absent=0"
            >
              קבלו בווטסאפ הצעת מחיר לפרויקט
            </LinkButton>
          </div>

          <LinkButton url="https://www.authentix.co.il/">
            אותנטיקס ישראל | הבית שלך בדיגיטל
            <br />
            צילום | תוכן | סושיאל | תדמית
          </LinkButton>

          <LinkButton url="/nextjs">קהילת Next.js</LinkButton>

          <div className="prose text-center pt-4">
            <h4>פוסטים</h4>
          </div>

          <LinkButton url="https://www.facebook.com/mralexkubica/posts/pfbid02WSQASx9Mz7iVHtXh3rdQ2TPWSFZ96XvF5TjAM9hsLmhv8BmHbQnCGdCkruQuARxol?__cft__[0]=AZW8O4TvGUMplsC1raVNN-vJel0CwZiDIn3igZwl5Df9r0vZhezX_qkEaI16pf2YGBWSZd3rmBJuFcqwWy7jVkZi1bvDwuKUbGH7sQVc7fY-cScQYhhXEKHTYqnj6WSEnrqx6JtrxsEKN2JarzqxwxlWAxBy6rzDjE5kqEHRDNDVI8f2IeW-CBf0H-bISBZdkjI&__tn__=%2CO%2CP-R">
            Not your keys, not your coins
          </LinkButton>

          <LinkButton url="https://www.facebook.com/mralexkubica/posts/pfbid02MhfWoLXzWcC4AdMZT8fJncMWXSoHTTXFDyHLHsJeVvezTZshCSuaSTezDKcPDespl">
            מהו ארנק קר ומה כדאי לדעת לדעת לפני שקונים אחד?
          </LinkButton>

          <LinkButton url="https://www.facebook.com/mralexkubica/posts/pfbid033Q2q5yrgQDVcUUiCSVLk7DHeYSNHJ1zBJJ5yimV2cB35XtkUpxVSVzrE4PNMmcMxl?__cft__[0]=AZWALhijl_ESvuq30QTPNdPL1siDQvvvMJvVnb8Pe-IdmXjl3ZXGL2ZA1biRS2OAgxTZMxNuuqiSky1F7hrmlGYPepMSw4-laKZG5E3Oe23ZB1CCMhCOUmKjYZj3qFzk25DdFr4unxsEHgHUS0WjMG6qljmfXQitVwBZDjz5VC59HahKWKcZmqNDb_KeELAiAn8&__tn__=%2CO%2CP-R">
            מהן עמלות גז בבלוקצ׳יין ולמה הן נחוצות?
          </LinkButton>

          <LinkButton url="https://www.facebook.com/mralexkubica/posts/pfbid024SePSvGrv683Hmt9j9bRAXsoq7nEmbWSkebmXLFS4ihsE6yXmER6PpLwhwPUPk4Kl?__cft__[0]=AZXrs0Ig-ii8TvrqhHXTxmHYWFuq6zV7HxSayRafTHz650n4JOJ03HCae0l6LOZUwUXugUbbS5baEXJfcmwyptfuY_QkKImeEVrHdr2kH3ngu4LZ7g7FH0062hpE3TMCJphqWMfaQsgwKN5xdN-1qsOd5QrqnfFISl34xz1j21T15DwHfYOWr23VQPoiueulps0&__tn__=%2CO%2CP-R">
            איך חסכתי לאמא שלי 2,040₪ על דף נחיתה
          </LinkButton>

          <LinkButton url="https://www.linkedin.com/posts/alexkubica_the-30-most-common-software-engineer-behavioral-activity-7042481956399292419-ufyY?utm_source=share&utm_medium=member_desktop">
            איך להתראיין למשרות פיתוח
          </LinkButton>

          <div className="prose text-center pt-4">
            <h4>קבוצות פייסבוק</h4>
          </div>
          <LinkButton url="/snc-fb">
            startupnation.co הייטק | סטארטאפים | יזמות | עסקים | משרות
          </LinkButton>
          <LinkButton url="https://www.facebook.com/groups/182109844949250/">
            חיפוש קבוצות לווטסאפ
          </LinkButton>
          <LinkButton dir="ltr" url="/tailwind-fb">
            Tailwind CSS Israel 🇮🇱 קהילת הטיילווינד הגדולה בישראל
          </LinkButton>
          <LinkButton url="https://www.facebook.com/groups/hagapetot">
            הג׳פטות - יוצרים ובונים עם בינה מלאכותית
          </LinkButton>
          <LinkButton url="https://www.facebook.com/groups/894999355278314/">
            Beat Saber Israel | ביט סייבר ישראל | VR | משחקי קצב
          </LinkButton>

          <div className="prose text-center pt-4">
            <h4>קבוצות ווטסאפ</h4>
          </div>

          <LinkButton url="/founders">חיפוש שותפים לסטארטאפ</LinkButton>

          <LinkButton url="https://chat.whatsapp.com/Krydq44nLVW7eLresa2eer">
            Next.js
          </LinkButton>

          <LinkButton url="/dev-memes">מימז למתכנתים</LinkButton>

          <LinkButton url="/tailwind">Tailwind CSS</LinkButton>

          <LinkButton url="/vim">Vim :wq</LinkButton>

          <LinkButton url="https://chat.whatsapp.com/G4Hb3uPDwJH5uEn4ILJKIx">
            XR | VR | AR | MR | Metaverse
          </LinkButton>

          <div className="prose text-center pt-4">
            <h4>פרויקטים ומיזמים</h4>
          </div>

          <LinkButton url="https://ysh.li">יש.לי</LinkButton>
          <LinkButton url="https://www.authentix.co.il/">
            אתר וויקס לאותנטיקס ישראל
          </LinkButton>
          <LinkButton url="https://www.spatial.io/s/Art-Gallery-by-Diana-Later-63e951b0de17b1be4948ef18?share=4910015432438267508">
            גלריית מטאברס ל-DL`Art
          </LinkButton>
          {/* <LinkButton url="http://wemakegpts.live/">
            wemakegpts.live - הזמנת GPT מותאמת אישית
          </LinkButton> */}
          <LinkButton url="https://linktr.ee/cherevotbarzel">
            מוקד חרבות ברזל
          </LinkButton>
          <LinkButton url="https://rnd3.spread.name/">
            R&D3 - אתר דמו למגזין web3
          </LinkButton>

          <div className="prose text-center pt-4">
            <h4>שונות</h4>
          </div>

          <LinkButton url="https://www.goodreads.com/user/show/62886832-alex">
            ספרים שאני קורא
          </LinkButton>
          <LinkButton url="https://www.duolingo.com/profile/AlexKubica">
            דואלינגו
          </LinkButton>
        </div>
      </div>
      <Footer />
    </div>
  );
}

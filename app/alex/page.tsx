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
  // description: "...",
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
            <div className="prose text-center">מייסד יש.לי.</div>
            <div className="prose text-center pt-4">
              <LinkButton
                // btnType="accent"
                url="https://wa.me/972526350655?text=%D7%94%D7%99%D7%99!%20%D7%90%D7%A0%D7%99%20%D7%9E%D7%A2%D7%95%D7%A0%D7%99%D7%99%D7%9F/%D7%AA%20%D7%91%D7%A2%D7%9E%D7%95%D7%93%20%D7%B4%D7%99%D7%A9.%D7%9C%D7%99%D7%B4%20:)"
              >
                הזמינו עמוד ״יש.לי״ משלכם בחינם לזמן מוגבל!
              </LinkButton>
            </div>
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
            <IconButton icon={<IconBrandX />} url="https://x.com/alexkubica_" />
            <IconButton
              icon={<IconBrandLinkedin />}
              url="https://www.linkedin.com/in/alexkubica/"
            />
            <IconButton
              icon={<IconBrandThreads />}
              url="https://www.threads.net/@alex_kubica"
            />
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
            <IconButton
              icon={<IconBrandYoutube />}
              url="https://www.youtube.com/@alexkubica"
            />
          </div>

          <LinkButton url="https://www.authentix.co.il/">
            אותנטיקס ישראל - צילום | תוכן | סושיאל | תדמית
          </LinkButton>

          <LinkButton url="/nextjs">
            הצטרפו למעל 300 החברים בקהילת הווטסאפ של Next.js!
          </LinkButton>

          <LinkButton url="https://monday.com/careers">
            משרות ב-monday.com
            <br />
            ניתן להגיש קורות חיים דרכי בכל אחת מהרשתות החברתיות
          </LinkButton>
          <LinkButton url="https://www.linkedin.com/posts/alexkubica_the-30-most-common-software-engineer-behavioral-activity-7042481956399292419-ufyY?utm_source=share&utm_medium=member_desktop">
            מתראיינים למשרת פיתוח? הפוסט הזה בשבילכם 🫵
          </LinkButton>
          <LinkButton url="https://www.facebook.com/groups/hagapetot">
            קבוצת הג׳פטות בפייסבוק - בינה מלאכותית
          </LinkButton>

          <div className="prose text-center pt-4">
            <h4>קבוצות ווטסאפ</h4>
          </div>

          <LinkButton url="http://bit.ly/snc-cofounders">
            חיפוש שותפים ופאונדרים לסטארטאפ
            <br />
            (106 חברים)
          </LinkButton>

          <LinkButton url="http://bit.ly/dev-memes">
            מימז למתכנתים
            <br />
            (50 חברים)
          </LinkButton>

          <LinkButton url="http://bit.ly/tailwind-il">
            Tailwind CSS
            <br />
            (95 חברים)
          </LinkButton>

          <LinkButton url="http://bit.ly/vim-wa-he">
            Vim :wq
            <br />
            (45 חברים)
          </LinkButton>

          <LinkButton url="https://chat.whatsapp.com/G4Hb3uPDwJH5uEn4ILJKIx">
            XR | VR | AR | MR | Metaverse
            <br />
            (19 חברים)
          </LinkButton>

          <div className="prose text-center pt-4">
            <h4>פרויקטים</h4>
          </div>

          <LinkButton url="https://ysh.li">
            יש.לי - עמוד אישי לביו שלכם
          </LinkButton>
          <LinkButton url="https://www.authentix.co.il/">
            אתר וויקס לאותנטיקס ישראל
          </LinkButton>
          <LinkButton url="https://www.spatial.io/s/Art-Gallery-by-Diana-Later-63e951b0de17b1be4948ef18?share=4910015432438267508">
            גלריית מטאברס ל-DL`Art
          </LinkButton>
          <LinkButton url="http://wemakegpts.live/">
            wemakegpts.live - הזמנת GPT מותאמת אישית
          </LinkButton>
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

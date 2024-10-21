import { Metadata } from "next";
import Footer from "./components/Footer";
import LinkButton from "./components/LinkButton";

export const metadata: Metadata = {
  title: "יש.לי - העמוד הראשי",
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
            <div className="mt-8 w-32 rounded-2xl bg-[#5763DB] p-4">
              <img src="images/home-avatar.png" alt={"avatar"} />
            </div>
          </div>
          <div className="prose text-center">
            <h2>יש.לי</h2>
          </div>

          <div className="w-full animate-bounce">
            <LinkButton
              type="accent"
              url="https://wa.me/972526350655?text=%D7%94%D7%99%D7%99!%20%D7%90%D7%A0%D7%99%20%D7%9E%D7%A2%D7%95%D7%A0%D7%99%D7%99%D7%9F/%D7%AA%20%D7%91%D7%A2%D7%9E%D7%95%D7%93%20%D7%B4%D7%99%D7%A9.%D7%9C%D7%99%D7%B4%20:)"
            >
              הזמינו עמוד ״יש.לי״ לעצמכם 🫵
            </LinkButton>
          </div>

          <div className="prose ">
            <h4 className="pt-4">העמודים שלנו 🪪</h4>
          </div>

          <LinkButton url="/alex">אלכס קוביצה</LinkButton>
          <LinkButton url="/rozi">רוזי קוביצה יועצת נדל&quot;ן 🏠</LinkButton>
          <LinkButton url="/nextjs">קהילת מפתחי Next.js 👨🏻‍💻</LinkButton>
          <LinkButton url="/ofek">🧞‍♂️ 💎 הזוג המשוגע 💎 🧞‍♂️</LinkButton>
          <LinkButton url="/yael">יעל מלינה 🌹</LinkButton>
          <LinkButton url="/liam">ליאם 👑</LinkButton>
        </div>

        <Footer />
      </div>
    </div>
  );
}

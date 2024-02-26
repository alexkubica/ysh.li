import { Metadata } from "next";
import Footer from "../components/Footer";
import LinkButton from "../components/LinkButton";

export const metadata: Metadata = {
  title: "יש.לי - יעל מלינה",
};

export default function HomePage() {
  return (
    <div
      data-theme="yael"
      className="min-h-screen flex flex-col justify-between"
    >
      <div className="flex flex-col justify-between text-white text-center max-w-screen-md mx-auto container">
        <div className="flex flex-col items-center p-4 space-y-8">
          <div className="avatar">
            <div className="mt-8 w-32 rounded-2xl">
              <img src="images/yael-avatar.jpg" alt={"avatar"} />
            </div>
          </div>
          <div className="prose text-center">
            <h2>יעל מלינה</h2>
            <div className="prose text-center">בואו לשחק ולשיר איתי 🎬 🎤</div>
            <div className="prose text-center">ציל דוד יו סו רוד 💅🏻</div>
          </div>
          <LinkButton url="https://www.instagram.com/yaelmalina/">
            אינסטגרם
          </LinkButton>
          <LinkButton url="https://m.youtube.com/channel/UCOH5f_IknDPBVEnodZGzPyA">
            יוטיוב
          </LinkButton>
          <LinkButton url="https://www.tiktok.com/@yaelmal23?lang=he-IL">
            טיקטוק
          </LinkButton>
        </div>
      </div>
      <Footer />
    </div>
  );
}

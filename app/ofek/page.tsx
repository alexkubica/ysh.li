import { Metadata } from "next";
import Footer from "../components/Footer";
import LinkButton from "../components/LinkButton";

export const metadata: Metadata = {
  title: "יש.לי - הזוג המשוגע",
};

export default function HomePage() {
  return (
    <div
      data-theme="liam"
      className="min-h-screen flex flex-col justify-between bg-cover bg-center"
      style={{
        backgroundImage: `url(images/ofek-bg.jpg)`,
        // backgroundSize: "cover",
        // backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex flex-col justify-between text-white text-center max-w-screen-md mx-auto container">
        <div className="flex flex-col items-center p-4 space-y-8">
          <div className="avatar">
            <div className="mt-8 w-32 rounded-2xl">
              <img src="images/ofek-avatar.jpeg" alt={"avatar"} />
            </div>
          </div>
          <div className="prose text-center">
            <h2>🧞‍♂️ 💎 הזוג המשוגע 💎 🧞‍♂️</h2>
            <div className="prose text-center">יוצרי תוכן.</div>
            <div className="prose text-center">🤓 בית משוגעים שלום 🤓</div>
          </div>
          <LinkButton url="https://www.tiktok.com/@ofek.e_?is_from_webapp=1&sender_device=pc">
            טיקטוק (60k עוקבים)
          </LinkButton>
          <LinkButton url="https://www.youtube.com/@Ofek.e_">יוטיוב</LinkButton>
          <LinkButton url="mailto:Opek55567@gmail.com">
            מייל לפניות עסקיות
          </LinkButton>
          <LinkButton url="https://www.instagram.com/ofek.e_/">
            האינטסגרם של אופק אדרי
          </LinkButton>
        </div>
      </div>
      <Footer />
    </div>
  );
}

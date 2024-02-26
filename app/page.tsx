import { Metadata } from "next";
import Footer from "./components/Footer";
import LinkButton from "./components/LinkButton";

export const metadata: Metadata = {
  title: "יש.לי",
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
            {/* <div className="prose text-center">
              עמוד אישי עם כל הקישורים בלינק אחד לביו!
            </div> */}
            <div className="prose text-center">
              צרו קשר עם אלכס קוביצה להזמנת עמוד משלכם.
            </div>
          </div>

          <div className="prose text-center pt-4">
            <h4>העמודים שלנו</h4>
          </div>

          <LinkButton url="/alex">אלכס קוביצה - מייסד יש.לי</LinkButton>
          <LinkButton url="/nextjs">קהילת ה-Next.js של אלכס קוביצה</LinkButton>
          <LinkButton url="/yael">יעל מלינה</LinkButton>
          <LinkButton url="/liam">ליאם</LinkButton>
        </div>
      </div>
      <Footer />
    </div>
  );
}

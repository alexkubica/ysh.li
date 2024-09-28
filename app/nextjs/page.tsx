import { Metadata } from "next";
import Footer from "../components/Footer";
import LinkButton from "../components/LinkButton";

export const metadata: Metadata = {
  title: "יש.לי - Next.js",
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
              <img src="images/nextjs-avatar.png" alt={"avatar"} />
            </div>
          </div>
          <div className="prose text-center pb-4">
            <h2>Next.js</h2>
            <div className="prose text-center">הקהילה של אלכס קוביצה.</div>
          </div>

          <LinkButton url="https://chat.whatsapp.com/Krydq44nLVW7eLresa2eer">
            קבוצת הווטסאפ שלנו
            <br />
            (390 חברים)
          </LinkButton>
          <LinkButton url="/alex">אלכס קוביצה - מייסד הקהילה</LinkButton>
          <div className="prose text-center pt-4">
            <h4>שותפים</h4>
          </div>
          <LinkButton url="https://www.facebook.com/groups/300186154930810">
            קבוצת הפייסבוק Next.js Israel
          </LinkButton>
          <LinkButton url="https://youtube.com/@nextjsil">
            ערוץ היוטיוב NextJSIL
          </LinkButton>
        </div>
      </div>
      <Footer />
    </div>
  );
}

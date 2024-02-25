import Footer from "../components/Footer";
import LinkButton from "../components/LinkButton";

export default function HomePage() {
  return (
    <div
      data-theme="liam"
      className="min-h-screen flex flex-col justify-between bg-cover bg-center"
      style={{
        backgroundImage: `url(images/liam-bg.webp)`,
        // backgroundSize: "cover",
        // backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex flex-col justify-between text-white text-center max-w-screen-md mx-auto container">
        <div className="flex flex-col items-center p-4 space-y-8">
          <div className="avatar">
            <div className="mt-8 w-32 rounded-2xl">
              <img src="images/liam-avatar.jpg" alt={"avatar"} />
            </div>
          </div>
          <div className="prose text-center">
            <h2>ליאם</h2>
            <div className="prose text-center">38k בטיקטוק 🎯 40k</div>
            <div className="prose text-center">מקלדת gk61 ⌨️</div>
            <div className="prose text-center"></div>
            <div className="prose text-center"></div>
          </div>
          <LinkButton url="https://www.tiktok.com/@faze_mr.ninja?is_from_webapp=1&sender_device=pc">
            טיקטוק
          </LinkButton>
          <LinkButton url="https://www.instagram.com/faze_mr.ninja?igsh=MWttN3F2c2xqYnJ2eg%3D%3D&utm_source=qr">
            אינסטגרם
          </LinkButton>
          <LinkButton url="https://youtube.com/@Master_ninja15?si=4ispn2soCAmmqQnI">
            יוטיוב
          </LinkButton>
          <LinkButton url="https://discord.gg/t5PV4gXN">דיסקורד</LinkButton>
        </div>
      </div>
      <Footer />
    </div>
  );
}

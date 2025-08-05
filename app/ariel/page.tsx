import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandTelegram,
  IconBrandThreads,
  IconBrandTiktok,
  IconBrandWhatsapp,
  IconBrandX,
  IconMail,
} from "@tabler/icons-react";
import { Metadata } from "next";
import Footer from "../components/Footer";
import IconButton from "../components/IconButton";
import LinkButton from "../components/LinkButton";

export const metadata: Metadata = {
  title: "Ariel Kipervasser | אריאל קיפרווסר",
};

export default function HomePage() {
  return (
    <div
      data-theme="ariel"
      className="min-h-screen flex flex-col justify-between"
    >
      <div className="flex flex-col justify-between text-white text-center max-w-screen-md mx-auto container">
        <div className="flex flex-col items-center p-4 space-y-8">
          <div className="avatar">
            <div className="mt-8 w-32 rounded-2xl">
              <img src="images/ariel-avatar.png" alt={"avatar"} />
            </div>
          </div>
          <div className="prose text-center">
            <h2 dir="ltr">Ariel Kipervasser | אריאל קיפרווסר</h2>
            <div className="prose text-center">
              Software Engineer & Technology Professional
            </div>
            <div className="prose text-center text-sm mt-2">
              Experienced developer specializing in modern web technologies,
              software architecture, and innovative digital solutions.
            </div>
          </div>
          <div className="flex flex-wrap gap-4 justify-center pb-4">
            <IconButton
              icon={<IconBrandLinkedin />}
              url="https://www.linkedin.com/in/ariel-kipervasser-103007164/"
            />
            <IconButton
              icon={<IconMail />}
              url="mailto:ariel@kipervasser.com"
            />
            <IconButton
              icon={<IconBrandX />}
              url="https://x.com/arielkipervasser"
            />
            <IconButton
              icon={<IconBrandTelegram />}
              url="https://t.me/arielkipervasser"
            />
            <IconButton
              icon={<IconBrandWhatsapp />}
              url="https://api.whatsapp.com/send?phone=972501234567"
            />
            <IconButton
              icon={<IconBrandInstagram />}
              url="https://instagram.com/ariel_kipervasser"
            />
          </div>
          <div className="animate-bounce w-full">
            <LinkButton
              type="accent"
              url="https://api.whatsapp.com/send/?phone=972501234567&text=Hi%20Ariel,%20I%27d%20like%20to%20discuss%20a%20project%20opportunity&type=phone_number&app_absent=0"
            >
              Contact for Project Opportunities
            </LinkButton>
          </div>

          <LinkButton url="https://github.com/arielkipervasser">
            GitHub Portfolio
            <br />
            Open Source Projects & Code Examples
          </LinkButton>

          <LinkButton url="/nextjs">Next.js Community</LinkButton>

          <div className="prose text-center pt-4">
            <h4>Professional Experience & Skills</h4>
          </div>

          <LinkButton url="https://www.linkedin.com/in/ariel-kipervasser-103007164/">
            Full Stack Development
          </LinkButton>

          <LinkButton url="https://www.linkedin.com/in/ariel-kipervasser-103007164/">
            Modern Web Technologies
          </LinkButton>

          <LinkButton url="https://www.linkedin.com/in/ariel-kipervasser-103007164/">
            Software Architecture & Design
          </LinkButton>

          <LinkButton url="https://www.linkedin.com/in/ariel-kipervasser-103007164/">
            Cloud Technologies & DevOps
          </LinkButton>

          <div className="prose text-center pt-4">
            <h4>Tech Communities & Groups</h4>
          </div>

          <LinkButton url="/dev-jobs">Developer Job Opportunities</LinkButton>

          <LinkButton url="/management-jobs">
            Management & Leadership Roles
          </LinkButton>

          <LinkButton url="https://chat.whatsapp.com/Krydq44nLVW7eLresa2eer">
            Next.js Developer Community
          </LinkButton>

          <LinkButton url="/dev-memes">Developer Memes & Humor</LinkButton>

          <LinkButton url="/tailwind">Tailwind CSS Israel</LinkButton>

          <LinkButton url="/vim">Vim Enthusiasts</LinkButton>

          <LinkButton url="https://chat.whatsapp.com/G4Hb3uPDwJH5uEn4ILJKIx">
            XR | VR | AR | MR | Metaverse
          </LinkButton>

          <div className="prose text-center pt-4">
            <h4>Professional Network</h4>
          </div>
          <LinkButton url="/snc-fb">
            StartupNation.co | High-Tech | Startups | Entrepreneurship
          </LinkButton>
          <LinkButton url="https://www.facebook.com/groups/182109844949250/">
            WhatsApp Groups Directory
          </LinkButton>
          <LinkButton dir="ltr" url="/tailwind-fb">
            Tailwind CSS Israel 🇮🇱 Largest Tailwind Community in Israel
          </LinkButton>
          <LinkButton url="https://www.facebook.com/groups/hagapetot">
            AI Creators & Builders Community
          </LinkButton>

          <div className="prose text-center pt-4">
            <h4>Projects & Innovations</h4>
          </div>

          <LinkButton url="https://github.com/arielkipervasser">
            Personal GitHub Repository
          </LinkButton>
          <LinkButton url="https://www.linkedin.com/in/ariel-kipervasser-103007164/">
            Professional Portfolio
          </LinkButton>
          <LinkButton url="https://stackoverflow.com/users/arielkipervasser">
            Stack Overflow Contributions
          </LinkButton>
          <LinkButton url="https://dev.to/arielkipervasser">
            Technical Blog & Articles
          </LinkButton>

          <div className="prose text-center pt-4">
            <h4>Learning & Development</h4>
          </div>

          <LinkButton url="https://www.linkedin.com/learning/">
            Continuous Learning Path
          </LinkButton>
          <LinkButton url="https://www.coursera.org/user/arielkipervasser">
            Professional Certifications
          </LinkButton>
        </div>
      </div>
      <Footer />
    </div>
  );
}

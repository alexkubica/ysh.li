"use client";
import { Metadata } from "next";
import Head from "next/head";
import Image from "next/image";
import { useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { TiSocialFacebook } from "react-icons/ti";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";

export default function HomePage() {
  useEffect(() => {
    document.body.classList.add("container", "w-full", "m-0", "p-0");
  }, []);

  return (
    <>
      <Head>
        <title>רוזי קוביצה יועצת נדל״ן</title>
      </Head>
      <div
        data-theme="rozi"
        className="bg-[#4058DD] font-sans container max-w-screen-md w-full text-center mx-auto p-0 m-0  text-xl md:text-xl font-bold"
      >
        <div className="mt-8 pt-4 bg-white flex flex-col gap-4  px-4 mb-8">
          <div className="p-0 m-0 line-clamp-2 md:line-clamp-1 w-full mx-auto font-extrabold text-xl">
            החלטתם למכור את הבית שלכם, שיהיה בשעה טובה!
          </div>

          <div className="p-0 m-0 w-full mx-auto text-[#4058DD] font-bold text-4xl px-4">
            טיפים להכנת הנכס למכירה:
          </div>

          <ol className="p-0 m-0 w-full mx-auto text-[#4058DD] font-bold text-right px-8 text-black space-y-2">
            <li className="relative before:absolute before:right-[-1.5rem] before:text-[#4058DD] before:content-['1.']">
              יש לבדוק את מצב הדירה מבחינה משפטית ובירוקרטית.
            </li>
            <li className="relative before:absolute before:right-[-1.5rem] before:text-[#4058DD] before:content-['2.']">
              מומלץ לשפץ את הדירה אם יש צורך, כדי להציג אותה בצורה הטובה ביותר.
            </li>
            <li className="relative before:absolute before:right-[-1.5rem] before:text-[#4058DD] before:content-['3. ']">
              הערכת שווי דירה: חשוב לבצע סקר שוק מקיף כדי להבין את רמות ההיצע
              והביקוש באזור ולתמחר את הדירה בהתאם.
            </li>
            <li className="relative before:absolute before:right-[-1.5rem] before:text-[#4058DD] before:content-['4.']">
              שיווק הדירה: יש לבנות תוכנית שיווקית הכוללת פרסום במדיות שונות כמו
              אתרי אינטרנט, רשתות חברתיות ועיתונות. חשוב לצלם תמונות איכותיות
              ולכתוב תוכן שיווקי שימשוך קונים פוטנציאליים.
            </li>
            <li className="relative before:absolute before:right-[-1.5rem] before:text-[#4058DD] before:content-['5.']">
              ניהול משא ומתן וחתימת חוזה: לאחר מציאת קונה,יש לנהל משא ומתן
              ולחתום על חוזה מכר. חשוב להיעזר בעורך דין המתמחה במקרקעין כדי
              להבטיח את זכויותיכם ולמנוע סיכונים משפטיים.
            </li>
          </ol>
          <div className="text-4xl text-center py-4 border-y-8 border-[#4058DD] mt-16 flex flex-col gap-2">
            <div>חושבים למכור את הבית?</div>
            <a href="tel:+972-52-589-5544">
              <div className="text-[#C9145A] font-extrabold text-4xl hover:text-red-400">
                052-895544
              </div>
            </a>
            <div>רוזי קוביצה יועצת נדל״ן</div>
            <a href="tel:+972-52-589-5544">
              <div className="text-[#C9145A] hover:text-red-400">דברו איתי</div>
            </a>
          </div>
          <div className="flex flex-col md:flex-row gap-4 mt-8  items-center md:px-16 border-b-8 border-[#4058DD] pb-16">
            <img
              className="w-full h-64max-w-screen-md md:max-w-64 hidden md:block"
              src="images/rozi/profile-vertical.png"
            />
            <div className="flex flex-col text-right self-start gap-4 px-8">
              <div className="p-0 m-0 w-full mx-auto text-[#4058DD] font-bold text-4xl text-right">
                מי אני
              </div>
              <div className="text-right text-2xl ">
                נעים מאד שמי רוזי קוביצה, יועצת נדלן עם נסיון של 8 שנים. אזור
                פעילות נתניה והסביבה, מתמחה בעבודה עם תושבי חוץ, משפרי דיור,
                משקיעים ואנשים שקונים דירה ראשונה. דוברת 7 שפות ביניהן רוסית,
                אנגלית, צרפתית ואיטלקית.
              </div>
              <div className="conatiner mx-auto">
                <img
                  className="size-64 md:hidden  "
                  src="images/rozi/profile-square.png"
                />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 items-center md:px-16 border-b-8 border-[#4058DD] pb-16">
            <div className="flex flex-col gap-4 text-center mx-auto w-full items-center">
              <img className="size-32" src="images/home-1.png" />
              <div className="w-32 line-clamp-3">
                עבודה עם קהל מגוון של תושבי חוץ
              </div>
            </div>
            <div className="flex flex-col gap-4 text-center mx-auto w-full items-center">
              <img className="size-32" src="images/home-2.png" />
              <div className="w-32 line-clamp-3">8 שנות נסיון במכירת נכסים</div>
            </div>
            <div className="flex flex-col gap-4 text-center mx-auto w-full items-center">
              <img className="size-32" src="images/home-3.png" />
              <div className="w-32 line-clamp-3">ליווי משקיעים בקניה</div>
            </div>
            <div className="flex flex-col gap-4 text-center mx-auto w-full items-center">
              <img className="size-32" src="images/home-4.png" />
              <div className="w-32 line-clamp-3">
                התמחות בעבודה עם משפרי דיור
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 mt-16 items-center md:px-16 border-b-8 border-[#4058DD] pb-16 text-center">
            <div className="text-2xl">חלק מהנכסים שמכרתי לאחרונה:</div>
            <img className="w-full sm:px-8" src="images/rozi/sold.png" />
          </div>
          <div className="text-4xl text-center mb-16  border-[#4058DD] mt-16 flex flex-col gap-2">
            <div>חושבים למכור את הבית?</div>
            <a href="tel:+972-52-589-5544">
              <div className="text-[#C9145A] font-extrabold text-4xl hover:text-red-400">
                052-895544
              </div>
            </a>
            <div>רוזי קוביצה יועצת נדל״ן</div>
            <a href="tel:+972-52-589-5544">
              <div className="text-[#C9145A] hover:text-red-400">דברו איתי</div>
            </a>
          </div>
          <div className="flex flex-col gap-8 mb-16 items-center md:px-16 border-t-8 border-[#4058DD] pt-16 text-center text-6xl font-extrabold">
            <div>מה מספרים עלי?</div>
            <img className="w-full sm:px-8" src="images/rozi/feedbacks.png" />
          </div>
          <div className="text-4xl text-center py-4 border-y-8 border-[#4058DD] mb-16 flex flex-col gap-2">
            <div>חושבים למכור את הבית?</div>
            <a href="tel:+972-52-589-5544">
              <div className="text-[#C9145A] font-extrabold text-4xl hover:text-red-400">
                052-895544
              </div>
            </a>
            <div>רוזי קוביצה יועצת נדל״ן</div>
            <a href="tel:+972-52-589-5544">
              <div className="text-[#C9145A] hover:text-red-400">דברו איתי</div>
            </a>
          </div>
          <div
            dir="ltr"
            className="flex flex-col text-4xl md:text-6xl items-center text-center italic px-4 pb-16 gap-4"
          >
            <div className="text-[#4058DD]">&quot;I speak English.&quot;</div>
            <div>&quot;Je parle français.&quot;</div>
            <div className="text-[#4058DD]">&quot;Parlo italiano.&quot;</div>
            <div>&quot;Я говорю по-русски.&quot;</div>
          </div>
          <div className="mb-8 text-[#122E76] grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 items-center justify-center gap-y-8">
            <div className="flex justify-center">
              <a href="https://api.whatsapp.com/send/?phone=972525895544">
                <div className="group flex flex-col items-center gap-4 w-fit ">
                  <div className="size-28 bg-[#38AA4A] group-hover:bg-green-400 rounded-full shadow-xl">
                    <FaWhatsapp className="w-full h-full p-8 text-white" />
                  </div>
                  <div className="group-hover:text-blue-500">ווטסאפ</div>
                </div>
              </a>
            </div>
            <div className="flex justify-center">
              <a href="https://www.facebook.com/kubica.rozi">
                <div className="group flex flex-col items-center gap-4 w-fit">
                  <div className="size-28 bg-[#4058DD] group-hover:bg-blue-400 rounded-full shadow-xl">
                    <TiSocialFacebook className="w-full h-full p-8 text-white" />
                  </div>
                  <div className="group-hover:text-blue-500">פייסבוק</div>
                </div>
              </a>
            </div>
            <div className="flex justify-center">
              <a href="https://www.linkedin.com/in/rozikubica/">
                <div className="group flex flex-col items-center gap-4 w-fit">
                  <div className="size-28 bg-[#0D63BC] group-hover:bg-blue-400 rounded-full shadow-xl">
                    <FaLinkedinIn className="w-full h-full p-8 text-white" />
                  </div>
                  <div className="group-hover:text-blue-500">לינקדאין</div>
                </div>
              </a>
            </div>
            <div className="flex justify-center">
              <a href="https://www.instagram.com/rozi_kubica">
                <div className="group flex flex-col items-center gap-4 w-fit">
                  <div className="size-28 bg-[#B22BA5] group-hover:bg-pink-400 rounded-full shadow-xl">
                    <FaInstagram className="w-full h-full p-8 text-white" />
                  </div>
                  <div className="group-hover:text-blue-500">אינסטגרם</div>
                </div>
              </a>
            </div>
            <div className="flex justify-center">
              <a href="https://www.tiktok.com/@rozi.kubica.realestate">
                <div className="group flex flex-col items-center gap-4 w-fit">
                  <div className="size-28 bg-black group-hover:bg-gray-400 rounded-full shadow-xl">
                    <FaTiktok className="w-full h-full p-8 text-white" />
                  </div>
                  <div className="group-hover:text-blue-500">טיקטוק</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
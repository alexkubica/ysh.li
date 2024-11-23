import {
  FaInstagram,
  FaLinkedinIn,
  FaTiktok,
  FaWhatsapp,
} from "react-icons/fa";
import { TiSocialFacebook } from "react-icons/ti";
import Footer from "../components/Footer";
export const metadata = {
  title: 'יש.לי - רוזי קוביצה יועצת נדל"ן',
};

export default function HomePage() {
  return (
    <div
      data-theme="rozi"
      className="bg-[#4058DD] font-sans max-w-screen-lg w-full text-center mx-auto p-0 m-0  text-xl md:text-xl font-bold"
    >
      <div className="mt-8 pt-4 bg-white flex flex-col gap-4  px-4">
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
            ניהול משא ומתן וחתימת חוזה: לאחר מציאת קונה,יש לנהל משא ומתן ולחתום
            על חוזה מכר. חשוב להיעזר בעורך דין המתמחה במקרקעין כדי להבטיח את
            זכויותיכם ולמנוע סיכונים משפטיים.
          </li>
        </ol>
        <div className="py-4 border-y-8 border-[#4058DD] mt-16 ">
          <div className="text-4xl text-center flex flex-col gap-2 ">
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
        </div>
        <div className="flex flex-col md:flex-row gap-4 mt-8  items-center md:px-16 border-b-8 border-[#4058DD] pb-16">
          <img
            className="w-full h-64max-w-screen-md md:max-w-64 hidden md:block"
            src="/images/rozi/profile-vertical.png"
            alt="פרופיל"
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
            <img className="size-32" src="images/rozi/home-1.png" />
            <div className="w-32 line-clamp-3">
              עבודה עם קהל מגוון של תושבי חוץ
            </div>
          </div>
          <div className="flex flex-col gap-4 text-center mx-auto w-full items-center">
            <img className="size-32" src="images/rozi/home-2.png" />
            <div className="w-32 line-clamp-3">8 שנות נסיון במכירת נכסים</div>
          </div>
          <div className="flex flex-col gap-4 text-center mx-auto w-full items-center">
            <img className="size-32" src="images/rozi/home-3.png" />
            <div className="w-32 line-clamp-3">ליווי משקיעים בקניה</div>
          </div>
          <div className="flex flex-col gap-4 text-center mx-auto w-full items-center">
            <img className="size-32" src="images/rozi/home-4.png" />
            <div className="w-32 line-clamp-3">התמחות בעבודה עם משפרי דיור</div>
          </div>
        </div>
        <div className="flex flex-col gap-4 mt-16 items-center md:px-16 border-b-8 border-[#4058DD] pb-16 text-center">
          <div className="text-2xl">חלק מהנכסים שמכרתי לאחרונה:</div>
          {/* <img className="w-full sm:px-8" src="images/rozi/sold.png" /> */}
          <div className="mt-8 grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-4">
            <div className="relative">
              <h1 className="absolute min-h-[3rem] flex items-center justify-center top-0 w-full bg-slate-100 bg-opacity-70 p-1">
                אהוד מנור 6
              </h1>
              <h1 className="absolute min-h-[3rem] flex items-center justify-center bottom-0 w-full bg-slate-100 bg-opacity-70 p-1">
                שכונת עיר ימים
              </h1>
              <img
                className="w-full h-80 object-cover"
                src="images/rozi/sold/אהוד מנור 6.jpeg"
              />
            </div>

            <div className="relative">
              <h1 className="absolute min-h-[3rem] flex items-center justify-center top-0 w-full bg-slate-100 bg-opacity-70 p-1">
                בן צבי 108
              </h1>
              <h1 className="absolute min-h-[3rem] flex items-center justify-center bottom-0 w-full bg-slate-100 bg-opacity-70 p-1">
                שכונת אגמים
              </h1>
              <img
                className="w-full h-80 object-cover"
                src="images/rozi/sold/בן צבי 108.jpeg"
              />
            </div>

            <div className="relative">
              <h1 className="absolute min-h-[3rem] flex items-center justify-center top-0 w-full bg-slate-100 bg-opacity-70 p-1">
                נחל בניאס 5
              </h1>
              <h1 className="absolute min-h-[3rem] flex items-center justify-center bottom-0 w-full bg-slate-100 bg-opacity-70 p-1">
                שכונת אגמים
              </h1>
              <img
                className="w-full h-80 object-cover"
                src="images/rozi/sold/נחל בניאס 5.jpeg"
              />
            </div>
            <div className="relative">
              <h1 className="absolute min-h-[3rem] flex items-center justify-center top-0 w-full bg-slate-100 bg-opacity-70 p-1">
                נחל הבשור 41
              </h1>
              <h1 className="absolute min-h-[3rem] flex items-center justify-center bottom-0 w-full bg-slate-100 bg-opacity-70 p-1">
                שכונת אגמים
              </h1>
              <img
                className="w-full h-80 object-cover"
                src="images/rozi/sold/נחל הבשור 41.jpeg"
              />
            </div>

            <div className="relative">
              <h1 className="absolute min-h-[3rem] flex items-center justify-center top-0 w-full bg-slate-100 bg-opacity-70 p-1">
                אירוס הארגמן 70
              </h1>
              <h1 className="absolute min-h-[3rem] flex items-center justify-center bottom-0 w-full bg-slate-100 bg-opacity-70 p-1">
                שכונת האירוסים
              </h1>
              <img
                className="w-full h-80 object-cover"
                src="images/rozi/sold/אירוס הארגמן 70.jpeg"
              />
            </div>
            <div className="relative">
              <h1 className="absolute min-h-[3rem] flex items-center justify-center top-0 w-full bg-slate-100 bg-opacity-70 p-1">
                חבצלת החוף 2
              </h1>
              <h1 className="absolute min-h-[3rem] flex items-center justify-center bottom-0 w-full bg-slate-100 bg-opacity-70 p-1">
                שכונת האירוסים
              </h1>
              <img
                className="w-full h-80 object-cover"
                src="images/rozi/sold/חבצלת החוף 2.jpeg"
              />
            </div>
            <div className="relative">
              <h1 className="absolute min-h-[3rem] flex items-center justify-center top-0 w-full bg-slate-100 bg-opacity-70 p-1">
                חבצלת החוף 6
              </h1>
              <h1 className="absolute min-h-[3rem] flex items-center justify-center bottom-0 w-full bg-slate-100 bg-opacity-70 p-1">
                שכונת האירוסים
              </h1>
              <img
                className="w-full h-80 object-cover"
                src="images/rozi/sold/חבצלת החוף 6.jpeg"
              />
            </div>

            <div className="relative">
              <h1 className="absolute min-h-[3rem] flex items-center justify-center top-0 w-full bg-slate-100 bg-opacity-70 p-1">
                אנקווה 9
              </h1>
              <h1 className="absolute min-h-[3rem] flex items-center justify-center bottom-0 w-full bg-slate-100 bg-opacity-70 p-1  ">
                שכ׳ קריית נורדאו
              </h1>
              <img
                className="w-full h-80 object-cover"
                src="images/rozi/sold/אנקווה 9.jpeg"
              />
            </div>
            <div className="relative">
              <h1 className="absolute min-h-[3rem] flex items-center justify-center top-0 w-full bg-slate-100 bg-opacity-70 p-1">
                זלמן שניאור 24
              </h1>
              <h1 className="absolute min-h-[3rem] flex items-center justify-center bottom-0 w-full bg-slate-100 bg-opacity-70 p-1  ">
                שכ׳ קריית נורדאו
              </h1>
              <img
                className="w-full h-80 object-cover"
                src="images/rozi/sold/זלמן שניאור 24.jpeg"
              />
            </div>
            <div className="relative">
              <h1 className="absolute min-h-[3rem] flex items-center justify-center top-0 w-full bg-slate-100 bg-opacity-70 p-1">
                קרן היסוד 12
              </h1>
              <h1 className="absolute min-h-[3rem] flex items-center justify-center bottom-0 w-full bg-slate-100 bg-opacity-70 p-1  ">
                שכ׳ קריית נורדאו
              </h1>
              <img
                className="w-full h-80 object-cover"
                src="images/rozi/sold/קרן היסוד 12.jpeg"
              />
            </div>
            <div className="relative">
              <h1 className="absolute min-h-[3rem] flex items-center justify-center top-0 w-full bg-slate-100 bg-opacity-70 p-1">
                שיפר 6
              </h1>
              <h1 className="absolute min-h-[3rem] flex items-center justify-center bottom-0 w-full bg-slate-100 bg-opacity-70 p-1  ">
                שכ׳ קריית נורדאו
              </h1>
              <img
                className="w-full h-80 object-cover"
                src="images/rozi/sold/שיפר 6.jpeg"
              />
            </div>
            <div className="relative">
              <h1 className="absolute min-h-[3rem] flex items-center justify-center top-0 w-full bg-slate-100 bg-opacity-70 p-1">
                גולדה 10
              </h1>
              <h1 className="absolute min-h-[3rem] flex items-center justify-center bottom-0 w-full bg-slate-100 bg-opacity-70 p-1  ">
                שכ׳ נאות גולדה
              </h1>
              <img
                className="w-full h-80 object-cover"
                src="images/rozi/sold/גולדה 10.jpeg"
              />
            </div>
            <div className="relative">
              <h1 className="absolute min-h-[3rem] flex items-center justify-center top-0 w-full bg-slate-100 bg-opacity-70 p-1">
                גולדה 16
              </h1>
              <h1 className="absolute min-h-[3rem] flex items-center justify-center bottom-0 w-full bg-slate-100 bg-opacity-70 p-1  ">
                שכ׳ נאות גולדה
              </h1>
              <img
                className="w-full h-80 object-cover"
                src="images/rozi/sold/גולדה 16.jpeg"
              />
            </div>
            <div className="relative">
              <h1 className="absolute min-h-[3rem] flex items-center justify-center top-0 w-full bg-slate-100 bg-opacity-70 p-1">
                גולדה 19
              </h1>
              <h1 className="absolute min-h-[3rem] flex items-center justify-center bottom-0 w-full bg-slate-100 bg-opacity-70 p-1  ">
                שכ׳ נאות גולדה
              </h1>
              <img
                className="w-full h-80 object-cover"
                src="images/rozi/sold/גולדה 19.jpeg"
              />
            </div>

            <div className="relative">
              <h1 className="absolute min-h-[3rem] flex items-center justify-center top-0 w-full bg-slate-100 bg-opacity-70 p-1">
                גולדה 20
              </h1>
              <h1 className="absolute min-h-[3rem] flex items-center justify-center bottom-0 w-full bg-slate-100 bg-opacity-70 p-1  ">
                שכ׳ נאות גולדה
              </h1>
              <img
                className="w-full h-80 object-cover"
                src="images/rozi/sold/גולדה מאיר 20.jpeg"
              />
            </div>
            <div className="relative">
              <h1 className="absolute min-h-[3rem] flex items-center justify-center top-0 w-full bg-slate-100 bg-opacity-70 p-1">
                חטיבת גבעתי 15
              </h1>
              <h1 className="absolute min-h-[3rem] flex items-center justify-center bottom-0 w-full bg-slate-100 bg-opacity-70 p-1  ">
                שכונת גלי ים
              </h1>
              <img
                className="w-full h-80 object-cover"
                src="images/rozi/sold/חטיבת גבעתי 15.jpeg"
              />
            </div>

            <div className="relative">
              <h1 className="absolute min-h-[3rem] flex items-center justify-center top-0 w-full bg-slate-100 bg-opacity-70 p-1">
                חיים מגורי 5
              </h1>
              <h1 className="absolute min-h-[3rem] flex items-center justify-center bottom-0 w-full bg-slate-100 bg-opacity-70 p-1  ">
                שכונת נאות שקד
              </h1>
              <img
                className="w-full h-80 object-cover"
                src="images/rozi/sold/חיים מגורי 5.jpeg"
              />
            </div>
            <div className="relative">
              <h1 className="absolute min-h-[3rem] flex items-center justify-center top-0 w-full bg-slate-100 bg-opacity-70 p-1">
                חיים מגורי 8
              </h1>
              <h1 className="absolute min-h-[3rem] flex items-center justify-center bottom-0 w-full bg-slate-100 bg-opacity-70 p-1  ">
                שכונת נאות שקד
              </h1>
              <img
                className="w-full h-80 object-cover"
                src="images/rozi/sold/חיים מגורי 8.jpeg"
              />
            </div>
            <div className="relative">
              <h1 className="absolute min-h-[3rem] flex items-center justify-center top-0 w-full bg-slate-100 bg-opacity-70 p-1">
                לוי אשכול 7
              </h1>
              <h1 className="absolute min-h-[3rem] flex items-center justify-center bottom-0 w-full bg-slate-100 bg-opacity-70 p-1  ">
                שכונת נאות שקד
              </h1>
              <img
                className="w-full h-80 object-cover"
                src="images/rozi/sold/לוי אשכול 7.jpeg"
              />
            </div>
            <div className="relative">
              <h1 className="absolute min-h-[3rem] flex items-center justify-center top-0 w-full bg-slate-100 bg-opacity-70 p-1">
                לוי אשכול 19
              </h1>
              <h1 className="absolute min-h-[3rem] flex items-center justify-center bottom-0 w-full bg-slate-100 bg-opacity-70 p-1  ">
                שכונת נאות שקד
              </h1>
              <img
                className="w-full h-80 object-cover"
                src="images/rozi/sold/לוי אשכול 19.jpeg"
              />
            </div>
            <div className="relative">
              <h1 className="absolute min-h-[3rem] flex items-center justify-center top-0 w-full bg-slate-100 bg-opacity-70 p-1">
                לוי אשכול 27
              </h1>
              <h1 className="absolute min-h-[3rem] flex items-center justify-center bottom-0 w-full bg-slate-100 bg-opacity-70 p-1  ">
                שכונת נאות שקד
              </h1>
              <img
                className="w-full h-80 object-cover"
                src="images/rozi/sold/לוי אשכול 27.jpeg"
              />
            </div>
            <div className="relative">
              <h1 className="absolute min-h-[3rem] flex items-center justify-center top-0 w-full bg-slate-100 bg-opacity-70 p-1">
                מוצקין 23
              </h1>
              <h1 className="absolute min-h-[3rem] flex items-center justify-center bottom-0 w-full bg-slate-100 bg-opacity-70 p-1  ">
                שכונת נאות שקד
              </h1>
              <img
                className="w-full h-80 object-cover"
                src="images/rozi/sold/מוצקין 23.jpeg"
              />
            </div>
            <div className="relative">
              <h1 className="absolute min-h-[3rem] flex items-center justify-center top-0 w-full bg-slate-100 bg-opacity-70 p-1">
                מוצקין 25
              </h1>
              <h1 className="absolute min-h-[3rem] flex items-center justify-center bottom-0 w-full bg-slate-100 bg-opacity-70 p-1  ">
                שכונת נאות שקד
              </h1>
              <img
                className="w-full h-80 object-cover"
                src="images/rozi/sold/מוצקין 25.jpeg"
              />
            </div>
            <div className="relative">
              <h1 className="absolute min-h-[3rem] flex items-center justify-center top-0 w-full bg-slate-100 bg-opacity-70 p-1">
                גרינבוים 13
              </h1>
              <h1 className="absolute min-h-[3rem] flex items-center justify-center bottom-0 w-full bg-slate-100 bg-opacity-70 p-1  ">
                שכונת נאות שקד
              </h1>
              <img
                className="w-full h-80 object-cover"
                src="images/rozi/sold/גרינבוים 13.jpeg"
              />
            </div>
            <div className="relative">
              <h1 className="absolute min-h-[3rem] flex items-center justify-center top-0 w-full bg-slate-100 bg-opacity-70 p-1">
                אלחריזי 16
              </h1>
              <h1 className="absolute min-h-[3rem] flex items-center justify-center bottom-0 w-full bg-slate-100 bg-opacity-70 p-1  ">
                שכונת רמת חן
              </h1>
              <img
                className="w-full h-80 object-cover"
                src="images/rozi/sold/אלחריזי 16.jpeg"
              />
            </div>
            <div className="relative">
              <h1 className="absolute min-h-[3rem] flex items-center justify-center top-0 w-full bg-slate-100 bg-opacity-70 p-1">
                הגרא 8
              </h1>
              <h1 className="absolute min-h-[3rem] flex items-center justify-center bottom-0 w-full bg-slate-100 bg-opacity-70 p-1  ">
                שכונת רמת חן
              </h1>
              <img
                className="w-full h-80 object-cover"
                src="images/rozi/sold/הגרא 8.jpeg"
              />
            </div>
            <div className="relative">
              <h1 className="absolute min-h-[3rem] flex items-center justify-center top-0 w-full bg-slate-100 bg-opacity-70 p-1">
                הקליר 7
              </h1>
              <h1 className="absolute min-h-[3rem] flex items-center justify-center bottom-0 w-full bg-slate-100 bg-opacity-70 p-1  ">
                שכונת רמת חן
              </h1>
              <img
                className="w-full h-80 object-cover"
                src="images/rozi/sold/הקליר 7.jpeg"
              />
            </div>
            <div className="relative">
              <h1 className="absolute min-h-[3rem] flex items-center justify-center top-0 w-full bg-slate-100 bg-opacity-70 p-1">
                מאיר עמית 8
              </h1>
              <h1 className="absolute min-h-[3rem] flex items-center justify-center bottom-0 w-full bg-slate-100 bg-opacity-70 p-1  ">
                שכונת רמת חן
              </h1>
              <img
                className="w-full h-80 object-cover"
                src="images/rozi/sold/מאיר עמית 8.jpeg"
              />
            </div>
            <div className="relative">
              <h1 className="absolute min-h-[3rem] flex items-center justify-center top-0 w-full bg-slate-100 bg-opacity-70 p-1">
                רמב&quot;ם 24
              </h1>
              <h1 className="absolute min-h-[3rem] flex items-center justify-center bottom-0 w-full bg-slate-100 bg-opacity-70 p-1  ">
                שכונת רמת חן
              </h1>
              <img
                className="w-full h-80 object-cover"
                src="images/rozi/sold/רמב״ם 24.jpeg"
              />
            </div>
            <div className="relative">
              <h1 className="absolute min-h-[3rem] flex items-center justify-center top-0 w-full bg-slate-100 bg-opacity-70 p-1">
                דיזנגוף 55
              </h1>
              <h1 className="absolute min-h-[3rem] flex items-center justify-center bottom-0 w-full bg-slate-100 bg-opacity-70 p-1  ">
                מרכז העיר
              </h1>
              <img
                className="w-full h-80 object-cover"
                src="images/rozi/sold/דיזנגוף 55.jpeg"
              />
            </div>
            <div className="relative">
              <h1 className="absolute min-h-[3rem] flex items-center justify-center top-0 w-full bg-slate-100 bg-opacity-70 p-1">
                ויצמן 31
              </h1>
              <h1 className="absolute min-h-[3rem] flex items-center justify-center bottom-0 w-full bg-slate-100 bg-opacity-70 p-1  ">
                מרכז העיר
              </h1>
              <img
                className="w-full h-80 object-cover"
                src="images/rozi/sold/ויצמן 31.jpeg"
              />
            </div>
            <div className="relative">
              <h1 className="absolute min-h-[3rem] flex items-center justify-center top-0 w-full bg-slate-100 bg-opacity-70 p-1">
                ויצמן 51
              </h1>
              <h1 className="absolute min-h-[3rem] flex items-center justify-center bottom-0 w-full bg-slate-100 bg-opacity-70 p-1  ">
                מרכז העיר
              </h1>
              <img
                className="w-full h-80 object-cover"
                src="images/rozi/sold/ויצמן 51.jpeg"
              />
            </div>
            <div className="relative">
              <h1 className="absolute min-h-[3rem] flex items-center justify-center top-0 w-full bg-slate-100 bg-opacity-70 p-1">
                ויצמן 81
              </h1>
              <h1 className="absolute min-h-[3rem] flex items-center justify-center bottom-0 w-full bg-slate-100 bg-opacity-70 p-1  ">
                מרכז העיר
              </h1>
              <img
                className="w-full h-80 object-cover"
                src="images/rozi/sold/ויצמן 81.jpeg"
              />
            </div>
            <div className="relative">
              <h1 className="absolute min-h-[3rem] flex items-center justify-center top-0 w-full bg-slate-100 bg-opacity-70 p-1">
                יהודה הלוי 49
              </h1>
              <h1 className="absolute min-h-[3rem] flex items-center justify-center bottom-0 w-full bg-slate-100 bg-opacity-70 p-1  ">
                מרכז העיר
              </h1>
              <img
                className="w-full h-80 object-cover"
                src="images/rozi/sold/יהודה הלוי 49.jpeg"
              />
            </div>
            <div className="relative">
              <h1 className="absolute min-h-[3rem] flex items-center justify-center top-0 w-full bg-slate-100 bg-opacity-70 p-1">
                שד&apos; בניימין 48
              </h1>
              <h1 className="absolute min-h-[3rem] flex items-center justify-center bottom-0 w-full bg-slate-100 bg-opacity-70 p-1  ">
                מרכז העיר
              </h1>
              <img
                className="w-full h-80 object-cover"
                src="images/rozi/sold/שד' בניימין 48.jpeg"
              />
            </div>
            <div className="relative">
              <h1 className="absolute min-h-[3rem] flex items-center justify-center top-0 w-full bg-slate-100 bg-opacity-70 p-1">
                שד&apos; בניימין 61
              </h1>
              <h1 className="absolute min-h-[3rem] flex items-center justify-center bottom-0 w-full bg-slate-100 bg-opacity-70 p-1  ">
                מרכז העיר
              </h1>
              <img
                className="w-full h-80 object-cover"
                src="images/rozi/sold/שד' בניימין 61.jpeg"
              />
            </div>
            <div className="relative">
              <h1 className="absolute min-h-[3rem] flex items-center justify-center top-0 w-full bg-slate-100 bg-opacity-70 p-1">
                שד&apos; בניימין 64
              </h1>
              <h1 className="absolute min-h-[3rem] flex items-center justify-center bottom-0 w-full bg-slate-100 bg-opacity-70 p-1  ">
                מרכז העיר
              </h1>
              <img
                className="w-full h-80 object-cover"
                src="images/rozi/sold/שד' בניימין 64.jpeg"
              />
            </div>
            <div className="relative">
              <h1 className="absolute min-h-[3rem] flex items-center justify-center top-0 w-full bg-slate-100 bg-opacity-70 p-1">
                רזיאל 25
              </h1>
              <h1 className="absolute min-h-[3rem] flex items-center justify-center bottom-0 w-full bg-slate-100 bg-opacity-70 p-1  ">
                מרכז העיר
              </h1>
              <img
                className="w-full h-80 object-cover"
                src="images/rozi/sold/רזיאל 25.jpeg"
              />
            </div>
            <div className="relative">
              <h1 className="absolute min-h-[3rem] flex items-center justify-center top-0 w-full bg-slate-100 bg-opacity-70 p-1">
                נחום 15
              </h1>
              <h1 className="absolute min-h-[3rem] flex items-center justify-center bottom-0 w-full bg-slate-100 bg-opacity-70 p-1  ">
                שכ׳ רמת ידין
              </h1>
              <img
                className="w-full h-80 object-cover"
                src="images/rozi/sold/נחום 15.jpeg"
              />
            </div>

            <div className="relative">
              <h1 className="absolute min-h-[3rem] flex items-center justify-center top-0 w-full bg-slate-100 bg-opacity-70 p-1">
                נחום 20
              </h1>
              <h1 className="absolute min-h-[3rem] flex items-center justify-center bottom-0 w-full bg-slate-100 bg-opacity-70 p-1  ">
                שכ׳ רמת ידין
              </h1>
              <img
                className="w-full h-80 object-cover"
                src="images/rozi/sold/נחום 20.jpeg"
              />
            </div>
          </div>
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
      <div className="text-white">
        <Footer />
      </div>
    </div>
  );
}

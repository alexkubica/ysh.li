import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname === "/founders") {
    const url = `https://api.whatsapp.com/send/?phone=972526350655&text=${encodeURIComponent(
      "היי אני מעוניין/ת להצטרף לקבוצת חיפוש שותפים לסטארטאפ!",
    ).replace(/\//g, "%2F")}`;
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

// Apply middleware only to specific routes
export const config = {
  matcher: ["/founders"], // Add more paths if needed
};

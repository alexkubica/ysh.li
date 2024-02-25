import type { Metadata } from "next";
import "./globals.css";
import Head from "next/head";
import Script from "next/script";
import Link from "next/link";

export const metadata: Metadata = {
  title: "יש.לי - עמוד אישי לביו שלך",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="he" dir="rtl">
      <Head>
        <link rel="icon" href="/images/logo.png" type="image/png" />
      </Head>
      {/*  kubica change google analytics project name */}
      <Script id="google-tag-manager">
        {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-5ZC9ZK54');
      `}
      </Script>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-RXLMHEC78C"
      />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-RXLMHEC78C');
        `}
      </Script>
      <body>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5ZC9ZK54"
            height="0"
            width="0"
            className="hidden invisible"
          ></iframe>
        </noscript>
        {children}
      </body>
    </html>
  );
}

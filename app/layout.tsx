import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import CountryPopup from "../components/CountryPopup";
import GoogleAnalytics from "../components/analytics/GoogleAnalytics";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hub4deals.com"),

  title: "Hub4Deals - Verified Deals, Coupons & Discounts Worldwide",

  description:
    "Discover verified deals, coupon codes and exclusive discounts from trusted merchants across multiple countries and categories.",

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },

  verification: {
    other: {
      "fo-verify": "7ad8b799-d052-490e-a831-96058fdb7864",
    },
  },

};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
return (
  <html
    lang="en"
    className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
  >
    <body
      className="
        min-h-full
        flex
        flex-col
        bg-slate-100
        text-slate-900
      "
    >

<>
  <CountryPopup />
  <GoogleAnalytics />

  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "Hub4Deals",
        url: "https://www.hub4deals.com",
        logo: "https://www.hub4deals.com/icon.png",
        email: "marketing@hub4deals.com",
        description:
          "Global deals discovery platform featuring verified offers, discounts and coupons from trusted merchants worldwide.",
      }),
    }}
  />

  {children}
</>

    </body>
  </html>
);
}

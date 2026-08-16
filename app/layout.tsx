import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import CountryPopup from "../components/CountryPopup";
import GoogleAnalytics from "../components/analytics/GoogleAnalytics";
import type { Metadata, Viewport } from "next";

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

  title: "Verified Deals, Coupons & Discounts Worldwide | Hub4Deals",

description:
  "Global deals discovery platform featuring verified offers, discounts and coupons from trusted merchants worldwide.",

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

openGraph: {
  title:
    "Verified Deals, Coupons & Discounts Worldwide | Hub4Deals",

  description:
    "Discover verified deals, coupon codes, discounts and special offers from trusted online retailers worldwide.",

  url: "https://hub4deals.com",

  siteName: "Hub4Deals",

  type: "website",
},

twitter: {
  card: "summary_large_image",
  title:
    "Verified Deals, Coupons & Discounts Worldwide | Hub4Deals",
  description:
    "Discover verified deals, coupon codes, discounts and special offers from trusted online retailers worldwide.",
},

};

export const viewport: Viewport = {
  themeColor: "#4f46e5",
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

  "@graph": [
    {
      "@type": "Organization",
      name: "Hub4Deals",
      url: "https://www.hub4deals.com",
      logo: "https://www.hub4deals.com/icon.png",
      email: "marketing@hub4deals.com",
      description:
        "Global deals discovery platform featuring verified offers, discounts and coupons from trusted merchants worldwide."
    },

    {
      "@type": "WebSite",
      name: "Hub4Deals",
      url: "https://www.hub4deals.com",
      potentialAction: {
        "@type": "SearchAction",
        target:
          "https://www.hub4deals.com/search?q={search_term_string}",
        "query-input":
          "required name=search_term_string"
      }
    }
  ]
}),
    }}
  />

  {children}
</>

    </body>
  </html>
);

}

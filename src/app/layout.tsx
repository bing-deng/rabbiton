import type { Metadata } from "next";
import { Noto_Sans_JP, Noto_Serif_JP, Noto_Sans_SC, Noto_Serif_SC } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/i18n/LanguageProvider";
import { SITE, SITE_URL } from "@/lib/site";

const notoSansJP = Noto_Sans_JP({
  variable: "--font-sans-jp",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

const notoSerifJP = Noto_Serif_JP({
  variable: "--font-serif-jp",
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  display: "swap",
});

const notoSansSC = Noto_Sans_SC({
  variable: "--font-sans-sc",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

const notoSerifSC = Noto_Serif_SC({
  variable: "--font-serif-sc",
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  display: "swap",
});

const TITLE = "結婚相談所 RABBIT｜国際結婚・語学・占いまで寄り添うオンライン婚活";
const SHORT_TITLE = "結婚相談所 RABBIT";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: SITE.description,
  applicationName: SITE.legalName,
  keywords: SITE.keywords,
  authors: [{ name: SITE.legalName, url: SITE_URL }],
  creator: SITE.legalName,
  publisher: SITE.legalName,
  alternates: {
    canonical: "/",
  },
  verification: {
    google: "_4G9HxNz9Di1xHeoFa5cr0xjiziujnPI0OAb5QInyv0",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: SITE.locale,
    alternateLocale: SITE.alternates,
    url: SITE_URL,
    siteName: SITE.legalName,
    title: SHORT_TITLE,
    description: SITE.description,
  },
  twitter: {
    card: "summary_large_image",
    title: SHORT_TITLE,
    description: SITE.description,
  },
  category: "matchmaking",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}#organization`,
      name: SITE.legalName,
      alternateName: [SITE.name, SITE.aliasName],
      url: SITE_URL,
      description: SITE.description,
      founder: {
        "@type": "Person",
        name: SITE.founder,
      },
      sameAs: SITE.sameAs,
      areaServed: { "@type": "Country", name: "Japan" },
      knowsAbout: [
        "結婚相談",
        "国際結婚",
        "お見合い",
        "語学レッスン",
        "占い鑑定",
        "パワーストーン",
      ],
    },
    {
      "@type": "LocalBusiness",
      "@id": `${SITE_URL}#localbusiness`,
      name: SITE.legalName,
      url: SITE_URL,
      description: SITE.description,
      address: {
        "@type": "PostalAddress",
        addressRegion: SITE.area,
        addressCountry: SITE.country,
      },
      // hasOfferCatalog の役務一覧 (主要サービス)
      makesOffer: [
        {
          "@type": "Offer",
          name: "結婚相談・お見合いサポート",
          category: "MarriageMatchmaking",
        },
        {
          "@type": "Offer",
          name: "語学レッスン (英語・日本語)",
          category: "LanguageLesson",
        },
        {
          "@type": "Offer",
          name: "占い鑑定・パワーストーン販売",
          category: "FortuneTelling",
        },
      ],
      sameAs: SITE.sameAs,
      // 予約導線
      potentialAction: {
        "@type": "ReserveAction",
        target: SITE.contactForm,
      },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}#website`,
      url: SITE_URL,
      name: SITE.legalName,
      inLanguage: ["ja", "en", "zh"],
      publisher: { "@id": `${SITE_URL}#organization` },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${notoSansJP.variable} ${notoSerifJP.variable} ${notoSansSC.variable} ${notoSerifSC.variable} h-full antialiased`}
    >
      <head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-813FNNMM3M"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-813FNNMM3M');
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#fdf7f2] text-stone-800">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Noto_Sans_JP, Noto_Serif_JP, Noto_Sans_SC, Noto_Serif_SC } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/i18n/LanguageProvider";

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

export const metadata: Metadata = {
  title: "RABBIT｜オンライン結婚相談所 — 国際結婚・語学・占いまで寄り添う",
  description:
    "夫婦で運営するオンライン結婚相談所 RABBIT。国内・国際結婚のお見合いから、語学レッスン、占い鑑定まで。あなたの一歩を、あたたかくサポートします。",
  openGraph: {
    title: "RABBIT｜オンライン結婚相談所",
    description:
      "夫婦で運営するオンライン結婚相談所 RABBIT。国際結婚・語学・占いまで寄り添う。",
    locale: "ja_JP",
    type: "website",
  },
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
      <body className="min-h-full flex flex-col bg-[#fdf7f2] text-stone-800">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}

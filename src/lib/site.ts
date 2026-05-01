// Central place for site identity. Used by metadata, robots, sitemap, JSON-LD.
// Override in production by setting NEXT_PUBLIC_SITE_URL at build time.

import { EXTERNAL_LINKS } from "./links";

const fallback = "https://rabbitonlinemarriage.com";

const raw = process.env.NEXT_PUBLIC_SITE_URL || fallback;

export const SITE_URL = raw.replace(/\/$/, "");

export const SITE = {
  name: "RABBIT",
  legalName: "結婚相談所 RABBIT",
  // Surfaced as alternateName in JSON-LD so both queries hit.
  aliasName: "結婚相談所　RABBIT",
  description:
    "夫婦で運営する結婚相談所 RABBIT。国内・国際結婚のお見合いから、語学レッスン、占い鑑定まで、オンラインであたたかくサポートします。",
  locale: "ja_JP",
  alternates: ["en_US", "zh_CN"],
  url: SITE_URL,
  area: "沖縄県",
  country: "JP",
  founder: "SHIN",
  // External profile links surfaced as sameAs in JSON-LD.
  sameAs: [
    EXTERNAL_LINKS.instagram,
    EXTERNAL_LINKS.tiktokShin,
    EXTERNAL_LINKS.tiktokYuka,
    EXTERNAL_LINKS.line,
  ],
  contactForm: EXTERNAL_LINKS.contactForm,
  // Keywords help search engines associate the brand with the right query intent.
  keywords: [
    "RABBIT",
    "結婚相談所",
    "結婚相談所　RABBIT",
    "国際結婚",
    "婚活",
    "語学レッスン",
    "占い",
    "沖縄",
  ],
};

export const PAGES = [
  { path: "/", priority: 1.0, changeFreq: "weekly" as const },
  { path: "/legal/privacy/", priority: 0.3, changeFreq: "yearly" as const },
  { path: "/legal/tokushoho/", priority: 0.3, changeFreq: "yearly" as const },
];

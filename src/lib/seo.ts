import type { Metadata } from "next";
import { DICTIONARIES, type Lang } from "@/i18n/dictionaries";
import {
  HREFLANG_ALTERNATES,
  LOCALE_PATHS,
  OG_LOCALE,
  SITE,
  SITE_URL,
} from "./site";

// Full per-locale metadata for a homepage route. The visible title/description
// come from the language dictionary; canonical + hreflang tie the three locale
// URLs together so Google serves the right language to the right user.
export function buildMetadata(lang: Lang): Metadata {
  const { meta } = DICTIONARIES[lang];
  const path = LOCALE_PATHS[lang];
  const alternateLocales = (["ja", "en", "zh"] as Lang[])
    .filter((l) => l !== lang)
    .map((l) => OG_LOCALE[l]);

  return {
    metadataBase: new URL(SITE_URL),
    title: meta.title,
    description: meta.description,
    applicationName: SITE.legalName,
    keywords: SITE.keywords,
    authors: [{ name: SITE.legalName, url: SITE_URL }],
    creator: SITE.legalName,
    publisher: SITE.legalName,
    alternates: {
      canonical: path,
      languages: HREFLANG_ALTERNATES,
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
      locale: OG_LOCALE[lang],
      alternateLocale: alternateLocales,
      url: path,
      siteName: SITE.legalName,
      title: meta.title,
      description: meta.description,
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
    },
    category: "matchmaking",
  };
}

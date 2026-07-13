"use client";
import { createContext, useContext, useEffect, useMemo } from "react";
import { DICTIONARIES, type Dictionary, type Lang } from "./dictionaries";

type Ctx = {
  lang: Lang;
  t: Dictionary;
};

const I18nContext = createContext<Ctx | null>(null);

// Each locale route (/, /en/, /zh/) renders its own prerendered HTML, so the
// language is fixed by the route rather than toggled client-side. The provider
// just exposes the dictionary for that route's language.
export function LanguageProvider({
  lang,
  children,
}: {
  lang: Lang;
  children: React.ReactNode;
}) {
  // Keep <html lang> in sync on the client (the static shell ships lang="ja").
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const value = useMemo<Ctx>(() => ({ lang, t: DICTIONARIES[lang] }), [lang]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) {
    throw new Error("useI18n must be used inside <LanguageProvider>");
  }
  return ctx;
}

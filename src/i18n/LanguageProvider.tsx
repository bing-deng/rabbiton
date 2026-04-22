"use client";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import {
  DEFAULT_LANG,
  DICTIONARIES,
  type Dictionary,
  type Lang,
  SUPPORTED_LANGS,
  detectBrowserLang,
} from "./dictionaries";

const STORAGE_KEY = "rabbit-lang";

type Ctx = {
  lang: Lang;
  setLang: (next: Lang) => void;
  t: Dictionary;
  ready: boolean;
};

const I18nContext = createContext<Ctx | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>(DEFAULT_LANG);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored && (SUPPORTED_LANGS as readonly string[]).includes(stored)) {
        setLangState(stored as Lang);
      } else {
        setLangState(detectBrowserLang(navigator.language));
      }
    } catch {
      setLangState(DEFAULT_LANG);
    } finally {
      setReady(true);
    }
  }, []);

  useEffect(() => {
    if (ready) {
      document.documentElement.lang = lang;
    }
  }, [lang, ready]);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* ignore storage failures */
    }
  }, []);

  const value = useMemo<Ctx>(
    () => ({
      lang,
      setLang,
      t: DICTIONARIES[lang],
      ready,
    }),
    [lang, setLang, ready],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) {
    throw new Error("useI18n must be used inside <LanguageProvider>");
  }
  return ctx;
}

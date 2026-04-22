"use client";
import { useEffect, useRef, useState } from "react";
import { useI18n } from "@/i18n/LanguageProvider";
import type { Lang } from "@/i18n/dictionaries";

const options: { code: Lang; label: string; short: string }[] = [
  { code: "ja", label: "日本語", short: "JA" },
  { code: "en", label: "English", short: "EN" },
  { code: "zh", label: "中文", short: "ZH" },
];

export default function LanguageSwitcher({
  variant = "light",
}: {
  variant?: "light" | "dark";
}) {
  const { lang, setLang } = useI18n();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  const active = options.find((o) => o.code === lang) ?? options[0];

  const trigger =
    variant === "dark"
      ? "bg-white/10 text-white border-white/20 hover:bg-white/15"
      : "bg-white text-stone-700 border-stone-200 hover:border-rose-primary hover:text-rose-deep";

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-full border text-xs font-medium tracking-wider transition-colors ${trigger}`}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label="Language"
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M2 12h20M12 2a15 15 0 010 20M12 2a15 15 0 000 20" />
        </svg>
        <span>{active.short}</span>
        <svg
          width="10"
          height="10"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`transition-transform ${open ? "rotate-180" : ""}`}
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>

      <ul
        role="listbox"
        className={`absolute right-0 mt-2 min-w-[10rem] rounded-xl bg-white border border-stone-100 shadow-lg shadow-rose-primary/5 overflow-hidden text-sm transition-all origin-top-right ${
          open ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
        }`}
      >
        {options.map((o) => {
          const isActive = o.code === lang;
          return (
            <li key={o.code}>
              <button
                type="button"
                onClick={() => {
                  setLang(o.code);
                  setOpen(false);
                }}
                className={`w-full flex items-center justify-between px-4 py-2.5 text-left transition-colors ${
                  isActive
                    ? "bg-rose-blush text-rose-deep"
                    : "text-stone-700 hover:bg-stone-50"
                }`}
                role="option"
                aria-selected={isActive}
              >
                <span>{o.label}</span>
                <span className="text-[10px] tracking-widest text-stone-400">
                  {o.short}
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

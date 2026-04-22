"use client";
import { useState } from "react";
import { useI18n } from "@/i18n/LanguageProvider";
import { EXTERNAL_LINKS } from "@/lib/links";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Navbar() {
  const { t } = useI18n();
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: t.nav.about, href: "#about" },
    { label: t.nav.service, href: "#service" },
    { label: t.nav.pricing, href: "#pricing" },
    { label: t.nav.team, href: "#team" },
    { label: t.nav.faq, href: "#faq" },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-[#fdf7f2]/80 border-b border-rose-soft/60">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2">
          <span className="w-9 h-9 rounded-full bg-rose-primary text-white grid place-items-center font-serif text-lg shadow-sm">
            R
          </span>
          <span className="font-serif text-lg text-ink tracking-wide">
            RABBIT<span className="text-rose-primary">.</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-7">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-stone-600 hover:text-rose-deep transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <LanguageSwitcher />
          <a
            href={EXTERNAL_LINKS.contactForm}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 px-5 py-2.5 rounded-full bg-rose-primary text-white text-sm font-medium shadow-sm hover:bg-rose-deep transition-colors"
          >
            {t.nav.consult}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        <div className="md:hidden flex items-center gap-2">
          <LanguageSwitcher />
          <button
            onClick={() => setOpen((v) => !v)}
            className="p-2 text-stone-700"
            aria-label="Menu"
            aria-expanded={open}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              {open ? <path d="M18 6L6 18M6 6l12 12" /> : <path d="M3 6h18M3 12h18M3 18h18" />}
            </svg>
          </button>
        </div>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-5 pb-5 flex flex-col gap-1 bg-[#fdf7f2] border-t border-rose-soft/50">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="py-3 text-stone-700 border-b border-rose-soft/40 last:border-0"
            >
              {item.label}
            </a>
          ))}
          <a
            href={EXTERNAL_LINKS.contactForm}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="mt-3 text-center px-5 py-3 rounded-full bg-rose-primary text-white text-sm font-medium"
          >
            {t.nav.consult}
          </a>
        </div>
      </div>
    </header>
  );
}

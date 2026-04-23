"use client";
import { useI18n } from "@/i18n/LanguageProvider";
import { EXTERNAL_LINKS } from "@/lib/links";

const LINK_KEYS = ["service", "pricing", "team", "faq", "contact"] as const;

export default function Footer() {
  const { t } = useI18n();
  const f = t.footer;
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-stone-100">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-16 grid md:grid-cols-12 gap-10">
        <div className="md:col-span-5">
          <a href="#home" className="flex items-center gap-2">
            <span className="w-10 h-10 rounded-full bg-rose-primary text-white grid place-items-center font-serif text-xl">
              R
            </span>
            <span className="font-serif text-xl text-white tracking-wide">
              RABBIT<span className="text-rose-soft">.</span>
            </span>
          </a>
          <p className="mt-5 text-sm leading-relaxed text-stone-200 max-w-sm">{f.tagline}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            <a
              href={EXTERNAL_LINKS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/30 text-xs text-stone-100 hover:border-rose-primary hover:text-rose-soft hover:bg-white/5 transition-colors"
              aria-label="Instagram @rabbit.kekkon"
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
              Instagram
            </a>
            <a
              href={EXTERNAL_LINKS.tiktokShin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/30 text-xs text-stone-100 hover:border-rose-primary hover:text-rose-soft hover:bg-white/5 transition-colors"
              aria-label="TikTok @shin_tarot"
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005.8 20.1a6.34 6.34 0 0010.86-4.43V9.39a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1.84-.82z" />
              </svg>
              SHIN
            </a>
            <a
              href={EXTERNAL_LINKS.tiktokYuka}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/30 text-xs text-stone-100 hover:border-rose-primary hover:text-rose-soft hover:bg-white/5 transition-colors"
              aria-label="TikTok @nizinoma_ma"
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005.8 20.1a6.34 6.34 0 0010.86-4.43V9.39a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1.84-.82z" />
              </svg>
              YUKA
            </a>
            <a
              href={EXTERNAL_LINKS.line}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/30 text-xs text-stone-100 hover:border-[#06C755] hover:text-[#06C755] hover:bg-white/5 transition-colors"
              aria-label="LINE 公式アカウント"
            >
              <span className="font-bold tracking-wider">LINE</span>
            </a>
          </div>
        </div>

        <div className="md:col-span-4">
          <h4 className="font-serif text-white text-lg tracking-wide">{f.companyHeading}</h4>
          <dl className="mt-4 space-y-3 text-sm">
            {f.info.map((i) => (
              <div key={i.label} className="grid grid-cols-[6rem_1fr] gap-3">
                <dt className="text-rose-soft/90 text-xs tracking-wider uppercase pt-1 font-medium">
                  {i.label}
                </dt>
                <dd className="text-white">{i.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="md:col-span-3">
          <h4 className="font-serif text-white text-lg tracking-wide">{f.guideHeading}</h4>
          <ul className="mt-4 space-y-2.5 text-sm">
            {LINK_KEYS.map((key) => {
              const entry = f.links.find((l) => l.key === key);
              if (!entry) return null;
              return (
                <li key={key}>
                  <a
                    href={`#${key}`}
                    className="text-stone-100 hover:text-rose-soft transition-colors"
                  >
                    {entry.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/15">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-6">
          <div className="flex items-start gap-3 text-xs leading-relaxed text-stone-200 bg-white/5 border border-white/10 rounded-2xl px-4 py-3">
            <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-rose-primary/20 border border-rose-primary/40 grid place-items-center text-rose-soft">
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="8" x2="12" y2="12" />
                <line x1="12" y1="16" x2="12.01" y2="16" />
              </svg>
            </span>
            <p>{f.conduct}</p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-6 flex flex-wrap items-center justify-between gap-3 text-xs text-stone-300">
          <p>{f.rights.replace("{{year}}", String(year))}</p>
          <div className="flex gap-5">
            <a
              href="/legal/privacy"
              className="text-stone-200 hover:text-rose-soft transition-colors"
            >
              {f.privacy}
            </a>
            <a
              href="/legal/tokushoho"
              className="text-stone-200 hover:text-rose-soft transition-colors"
            >
              {f.tos}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

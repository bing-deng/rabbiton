"use client";
import { useI18n } from "@/i18n/LanguageProvider";
import { EXTERNAL_LINKS } from "@/lib/links";

export default function Cta() {
  const { t } = useI18n();
  const c = t.cta;

  return (
    <section id="contact" className="py-24 bg-paper">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        <div className="relative rounded-[2.5rem] bg-gradient-to-br from-ink via-[#3a2b2a] to-rose-deep p-10 sm:p-16 overflow-hidden shadow-2xl shadow-rose-primary/20">
          <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-rose-primary opacity-25 blur-3xl" />
          <div className="absolute -bottom-24 -left-16 w-80 h-80 rounded-full bg-gold-soft opacity-15 blur-3xl" />

          <div className="relative grid md:grid-cols-5 gap-10 items-center">
            <div className="md:col-span-3 text-white">
              <p className="text-xs tracking-[0.3em] text-rose-soft uppercase">{c.eyebrow}</p>
              <h2 className="mt-4 font-serif text-3xl sm:text-4xl lg:text-5xl leading-tight">
                {c.titleA}
                <span className="text-rose-soft">{c.titleAccent}</span>
                {c.titleB}
              </h2>
              <p className="mt-5 text-stone-300 text-sm sm:text-base leading-relaxed max-w-lg">{c.lead}</p>
            </div>

            <div className="md:col-span-2 space-y-3">
              <a
                href={EXTERNAL_LINKS.line}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between gap-4 px-6 py-4 rounded-2xl bg-[#06C755] text-white hover:bg-[#05a548] transition-colors"
              >
                <span className="flex items-center gap-3">
                  <span className="w-10 h-10 rounded-xl bg-white/15 grid place-items-center font-bold tracking-wider">
                    LINE
                  </span>
                  <span>
                    <span className="block text-xs text-white/80">{c.line.small}</span>
                    <span className="block font-medium">{c.line.big}</span>
                  </span>
                </span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </a>

              <a
                href={EXTERNAL_LINKS.contactForm}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between gap-4 px-6 py-4 rounded-2xl bg-rose-primary text-white hover:bg-rose-deep transition-colors"
              >
                <span className="flex items-center gap-3">
                  <span className="w-10 h-10 rounded-xl bg-white/15 grid place-items-center">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 11l3 3L22 4" />
                      <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
                    </svg>
                  </span>
                  <span>
                    <span className="block text-xs text-rose-soft">{c.form.small}</span>
                    <span className="block font-medium">{c.form.big}</span>
                  </span>
                </span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";
import Image from "next/image";
import { useI18n } from "@/i18n/LanguageProvider";
import { EXTERNAL_LINKS } from "@/lib/links";

export default function Hero() {
  const { t } = useI18n();
  const h = t.hero;

  return (
    <section id="home" className="relative overflow-hidden bg-paper">
      <div className="absolute -top-24 -left-24 w-[28rem] h-[28rem] rounded-full bg-rose-blush blur-3xl opacity-70 pointer-events-none" />
      <div className="absolute -bottom-32 -right-20 w-[32rem] h-[32rem] rounded-full bg-gold-soft/50 blur-3xl opacity-60 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 pt-20 pb-24 md:pt-28 md:pb-32 grid md:grid-cols-12 gap-10 items-center">
        <div className="md:col-span-7 animate-fade-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/70 backdrop-blur border border-rose-soft text-xs tracking-wider text-rose-deep">
            <span className="w-1.5 h-1.5 rounded-full bg-rose-primary animate-pulse" />
            {h.badge}
          </div>

          <h1 className="mt-6 font-serif text-4xl sm:text-5xl md:text-6xl leading-tight text-ink">
            {h.titleA}
            <br />
            <span className="text-rose-primary">{h.titleAccent}</span>
            {h.titleB}
          </h1>

          <p className="mt-6 text-stone-600 text-base sm:text-lg leading-relaxed max-w-xl">
            {h.lead}
          </p>

          <div className="mt-9 flex flex-col sm:flex-row gap-3">
            <a
              href={EXTERNAL_LINKS.contactForm}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-rose-primary text-white font-medium shadow-lg shadow-rose-primary/20 hover:bg-rose-deep transition-colors"
            >
              {h.ctaPrimary}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </a>
            <a
              href="#service"
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-white text-ink border border-stone-200 hover:border-rose-primary hover:text-rose-deep transition-colors"
            >
              {h.ctaSecondary}
            </a>
          </div>

          <dl className="mt-12 grid grid-cols-3 gap-4 max-w-md">
            {h.stats.map((s) => (
              <div key={s.label} className="border-l-2 border-rose-soft pl-4">
                <dt className="font-serif text-2xl text-rose-deep">{s.num}</dt>
                <dd className="text-xs text-stone-500 mt-1">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="md:col-span-5 relative">
          <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-xl shadow-rose-primary/15 animate-floaty">
            <Image
              src="/rabbit/hero-couple.jpg"
              alt=""
              fill
              sizes="(max-width: 768px) 80vw, 40vw"
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-rose-deep/25 via-transparent to-transparent" />
          </div>

          <div className="absolute -left-6 top-10 bg-white/90 backdrop-blur rounded-2xl shadow-lg px-4 py-3 flex items-center gap-3 border border-stone-100">
            <div className="w-9 h-9 rounded-full bg-rose-blush grid place-items-center text-rose-deep">
              ♡
            </div>
            <div>
              <div className="text-xs text-stone-500">{h.coupleBadge}</div>
              <div className="text-sm font-medium text-ink">{h.coupleTag}</div>
            </div>
          </div>

          <div className="absolute -right-4 bottom-12 bg-white/90 backdrop-blur rounded-2xl shadow-lg px-4 py-3 flex items-center gap-3 border border-stone-100">
            <div className="w-9 h-9 rounded-full bg-gold-soft grid place-items-center text-white font-serif">
              占
            </div>
            <div>
              <div className="text-xs text-stone-500">{h.fortuneBadge}</div>
              <div className="text-sm font-medium text-ink">{h.fortuneTag}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

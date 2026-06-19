"use client";
import Image from "next/image";
import { useI18n } from "@/i18n/LanguageProvider";
import { EXTERNAL_LINKS } from "@/lib/links";

export default function CampaignBanner() {
  const { t } = useI18n();
  const c = t.campaignBanner;

  return (
    <section className="bg-paper pb-16 sm:pb-20">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="relative overflow-hidden rounded-[2rem] border border-rose-primary/15 bg-white/80 shadow-lg shadow-rose-primary/10 backdrop-blur">
          <div className="absolute -top-20 -right-16 h-60 w-60 rounded-full bg-rose-blush blur-3xl opacity-70 pointer-events-none" />
          <div className="relative grid items-center gap-8 p-6 sm:p-8 md:grid-cols-2 md:gap-10">
            <div className="order-2 md:order-1">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-rose-primary">
                {c.eyebrow}
              </p>
              <h2 className="mt-3 font-serif text-2xl sm:text-3xl leading-snug text-ink">
                {c.title}
              </h2>
              <a
                href={EXTERNAL_LINKS.contactForm}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-rose-primary px-6 py-3 text-sm font-medium text-white shadow-lg shadow-rose-primary/20 transition-colors hover:bg-rose-deep"
              >
                {t.hero.ctaPrimary}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            <div className="order-1 mx-auto w-full max-w-sm md:order-2">
              <Image
                src="/rabbit/campaign-poster.png"
                alt={c.alt}
                width={540}
                height={672}
                sizes="(max-width: 768px) 90vw, 40vw"
                className="h-auto w-full rounded-2xl shadow-md"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";
import { useI18n } from "@/i18n/LanguageProvider";

export default function Testimonials() {
  const { t } = useI18n();
  const v = t.voices;

  return (
    <section className="py-24 bg-paper">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex items-end justify-between flex-wrap gap-6">
          <div className="max-w-xl">
            <p className="text-xs tracking-[0.3em] text-rose-primary uppercase">{v.eyebrow}</p>
            <h2 className="mt-3 font-serif text-3xl sm:text-4xl text-ink">
              {v.titleA}
              <span className="text-rose-primary">{v.titleAccent}</span>
            </h2>
          </div>
          <p className="text-sm text-stone-500 max-w-sm">{v.lead}</p>
        </div>

        <p className="mt-6 inline-flex items-start gap-2 text-xs leading-relaxed text-stone-500 bg-white/70 border border-rose-soft/60 rounded-2xl px-4 py-3 max-w-3xl">
          <span className="mt-0.5 w-4 h-4 rounded-full bg-rose-blush text-rose-deep grid place-items-center text-[10px] font-bold flex-shrink-0">
            i
          </span>
          <span>{v.monitorNote}</span>
        </p>

        <div className="mt-8 grid md:grid-cols-3 gap-5">
          {v.items.map((item) => (
            <figure
              key={item.name}
              className="relative rounded-3xl bg-white p-7 border border-stone-100 shadow-sm"
            >
              <svg
                className="absolute top-5 right-5 text-rose-soft"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M7 7h4v4H9c0 2 1 3 3 3v2c-3 0-5-2-5-5V7zm6 0h4v4h-2c0 2 1 3 3 3v2c-3 0-5-2-5-5V7z" />
              </svg>

              {item.monitor && (
                <span className="inline-flex items-center gap-1 mb-3 px-2.5 py-0.5 rounded-full bg-gold/15 border border-gold/40 text-[10px] tracking-widest text-gold uppercase font-medium">
                  <span className="w-1 h-1 rounded-full bg-gold" />
                  {v.monitorTag}
                </span>
              )}

              <blockquote className="font-serif text-stone-700 leading-relaxed text-[15px]">
                「{item.body}」
              </blockquote>
              <figcaption className="mt-6 pt-5 border-t border-stone-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-rose-blush grid place-items-center text-rose-deep font-serif text-sm">
                  {item.name.slice(0, 1)}
                </div>
                <div>
                  <div className="text-sm font-medium text-ink">{item.name}</div>
                  <div className="text-xs text-stone-500">{item.meta}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

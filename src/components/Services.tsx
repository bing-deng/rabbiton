"use client";
import { useI18n } from "@/i18n/LanguageProvider";

const accents = [
  "from-rose-primary to-rose-deep",
  "from-gold to-gold-soft",
  "from-rose-deep to-gold",
];

export default function Services() {
  const { t } = useI18n();
  const s = t.services;

  return (
    <section id="service" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-xs tracking-[0.3em] text-rose-primary uppercase">{s.eyebrow}</p>
          <h2 className="mt-3 font-serif text-3xl sm:text-4xl text-ink">
            {s.titleA}
            <span className="text-rose-primary">{s.titleAccent}</span>
            {s.titleB}
          </h2>
          <p className="mt-4 text-stone-600 text-sm sm:text-base leading-relaxed">{s.lead}</p>
        </div>

        <div className="mt-14 grid lg:grid-cols-3 gap-6">
          {s.list.map((item, idx) => (
            <article
              key={item.title}
              className="relative rounded-3xl bg-[#fdf7f2] border border-stone-100 p-8 overflow-hidden group hover:shadow-xl hover:shadow-rose-primary/5 transition-shadow"
            >
              <div
                className={`absolute -top-16 -right-16 w-44 h-44 rounded-full bg-gradient-to-br ${accents[idx % accents.length]} opacity-20 blur-2xl group-hover:opacity-30 transition-opacity`}
              />
              <div className="relative">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] tracking-[0.3em] uppercase text-rose-primary">
                    0{idx + 1} · {item.tag}
                  </span>
                  <span className="w-8 h-8 rounded-full bg-white border border-stone-200 grid place-items-center text-stone-400">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M7 17L17 7M7 7h10v10" />
                    </svg>
                  </span>
                </div>

                <h3 className="mt-6 font-serif text-2xl text-ink leading-snug">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm text-stone-600 leading-relaxed">{item.lead}</p>

                <ul className="mt-6 space-y-2.5">
                  {item.points.map((p) => (
                    <li key={p} className="flex items-start gap-2.5 text-sm text-stone-700">
                      <span className="mt-1 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-rose-primary" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

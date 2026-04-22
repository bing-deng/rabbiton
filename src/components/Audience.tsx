"use client";
import { useI18n } from "@/i18n/LanguageProvider";

const icons = ["♡", "✈", "☾", "A", "✦", "☘"];

export default function Audience() {
  const { t } = useI18n();
  const a = t.audience;

  return (
    <section id="about" className="py-24 bg-[#fdf7f2]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-xs tracking-[0.3em] text-rose-primary uppercase">{a.eyebrow}</p>
          <h2 className="mt-3 font-serif text-3xl sm:text-4xl text-ink">
            {a.titleA}
            <span className="text-rose-primary">{a.titleAccent}</span>
          </h2>
          <p className="mt-4 text-stone-600 text-sm sm:text-base leading-relaxed">{a.lead}</p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {a.items.map((it, i) => (
            <div
              key={it.title}
              className="group relative bg-white rounded-3xl p-7 border border-stone-100 hover:border-rose-soft hover:shadow-xl hover:shadow-rose-primary/5 transition-all"
            >
              <div className="w-12 h-12 rounded-2xl bg-rose-blush text-rose-deep grid place-items-center text-xl font-serif group-hover:bg-rose-primary group-hover:text-white transition-colors">
                {icons[i % icons.length]}
              </div>
              <h3 className="mt-5 font-serif text-lg text-ink">{it.title}</h3>
              <p className="mt-3 text-sm text-stone-600 leading-relaxed">{it.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

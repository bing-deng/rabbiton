"use client";
import { useI18n } from "@/i18n/LanguageProvider";

export default function Pricing() {
  const { t } = useI18n();
  const p = t.pricing;

  return (
    <section id="pricing" className="py-24 bg-paper">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-xs tracking-[0.3em] text-rose-primary uppercase">{p.eyebrow}</p>
          <h2 className="mt-3 font-serif text-3xl sm:text-4xl text-ink">
            {p.titleA}
            <span className="text-rose-primary">{p.titleAccent}</span>
            {p.titleB}
          </h2>
          <p className="mt-4 text-stone-600 text-sm sm:text-base leading-relaxed">{p.lead}</p>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-5">
          {p.plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-3xl p-8 flex flex-col border transition-all ${
                plan.highlight
                  ? "bg-ink text-white border-ink shadow-2xl scale-[1.02] md:scale-105"
                  : "bg-white text-ink border-stone-100 hover:border-rose-soft"
              }`}
            >
              {plan.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-rose-primary text-white text-[10px] tracking-widest uppercase">
                  {p.badge}
                </span>
              )}

              <div>
                <h3 className="font-serif text-2xl">{plan.name}</h3>
                <p className={`mt-1 text-xs ${plan.highlight ? "text-stone-300" : "text-stone-500"}`}>
                  {plan.caption}
                </p>
              </div>

              <div className={`mt-6 pb-6 border-b ${plan.highlight ? "border-white/15" : "border-stone-100"}`}>
                <div className="flex items-baseline gap-1.5">
                  {plan.monthly === "要相談" || plan.monthly === "On request" || plan.monthly === "洽询" ? (
                    <span className="font-serif text-4xl">{p.requestLabel}</span>
                  ) : (
                    <>
                      <span className={`text-sm ${plan.highlight ? "text-stone-300" : "text-stone-500"}`}>
                        {p.perMonth}
                      </span>
                      <span className="font-serif text-4xl">{plan.monthly}</span>
                      <span className={`text-sm ${plan.highlight ? "text-stone-300" : "text-stone-500"}`}>
                        {p.monthSuffix}
                      </span>
                    </>
                  )}
                </div>
                <p className={`mt-2 text-xs ${plan.highlight ? "text-rose-soft" : "text-rose-primary"}`}>
                  {plan.perMatch}
                </p>
              </div>

              <ul className="mt-6 space-y-3 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      className={`mt-0.5 flex-shrink-0 ${plan.highlight ? "text-rose-soft" : "text-rose-primary"}`}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`mt-8 inline-flex items-center justify-center px-5 py-3 rounded-full font-medium text-sm transition-colors ${
                  plan.highlight
                    ? "bg-rose-primary text-white hover:bg-rose-deep"
                    : "bg-ink text-white hover:bg-rose-deep"
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-xs text-stone-500">{p.note}</p>
      </div>
    </section>
  );
}

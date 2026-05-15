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

        <div className="mt-16 rounded-3xl bg-white p-5 sm:p-8 border border-stone-100 shadow-sm">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs tracking-[0.3em] text-rose-primary uppercase">
                {p.language.eyebrow}
              </p>
              <h3 className="mt-2 font-serif text-2xl sm:text-3xl text-ink">
                {p.language.title}
              </h3>
              <p className="mt-3 max-w-3xl text-sm leading-relaxed text-stone-600">
                {p.language.lead}
              </p>
            </div>
            <p className="rounded-2xl bg-rose-blush px-4 py-3 text-sm font-medium text-rose-deep">
              {p.language.childNote}
            </p>
          </div>

          <div className="mt-7 overflow-x-auto">
            <table className="w-full min-w-[620px] border-separate border-spacing-0 text-left text-sm">
              <thead>
                <tr className="text-xs uppercase tracking-wider text-stone-500">
                  <th className="rounded-l-2xl bg-[#fdf7f2] px-4 py-3 font-medium">
                    {p.language.headers.plan}
                  </th>
                  <th className="bg-[#fdf7f2] px-4 py-3 font-medium">
                    {p.language.headers.adult}
                  </th>
                  <th className="rounded-r-2xl bg-[#fdf7f2] px-4 py-3 font-medium">
                    {p.language.headers.child}
                  </th>
                </tr>
              </thead>
              <tbody>
                {p.language.rows.map((row) => (
                  <tr key={`${row.lesson}-${row.frequency}`} className="border-b border-stone-100">
                    <td className="border-b border-stone-100 px-4 py-4">
                      <span className="block font-medium text-ink">{row.lesson}</span>
                      <span className="mt-1 block text-xs text-stone-500">{row.frequency}</span>
                    </td>
                    <td className="border-b border-stone-100 px-4 py-4 font-serif text-xl text-rose-deep">
                      {row.adult}
                    </td>
                    <td className="border-b border-stone-100 px-4 py-4 font-serif text-xl text-rose-deep">
                      {row.child}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-8 rounded-3xl bg-ink p-5 sm:p-8 text-white">
          <div className="grid gap-6 lg:grid-cols-[1fr_1.4fr] lg:items-center">
            <div>
              <h3 className="font-serif text-2xl sm:text-3xl">{p.payment.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-stone-300">{p.payment.lead}</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {p.payment.groups.map((group) => (
                <div
                  key={group.title}
                  className="rounded-2xl border border-white/10 bg-white/8 p-5"
                >
                  <p className="text-sm font-medium text-rose-soft">{group.title}</p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {group.methods.map((method) => (
                      <li
                        key={method}
                        className="rounded-full bg-white px-3 py-1.5 text-sm font-medium text-ink"
                      >
                        {method}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        <p className="mt-10 text-center text-xs text-stone-500">{p.note}</p>
      </div>
    </section>
  );
}

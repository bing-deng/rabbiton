"use client";
import { useState } from "react";
import { useI18n } from "@/i18n/LanguageProvider";

export default function Faq() {
  const { t } = useI18n();
  const f = t.faq;
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-5 sm:px-8">
        <div className="text-center">
          <p className="text-xs tracking-[0.3em] text-rose-primary uppercase">{f.eyebrow}</p>
          <h2 className="mt-3 font-serif text-3xl sm:text-4xl text-ink">
            {f.titleA}
            <span className="text-rose-primary">{f.titleAccent}</span>
          </h2>
        </div>

        <div className="mt-12 divide-y divide-stone-100 border-y border-stone-100">
          {f.items.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full py-6 flex items-center justify-between text-left gap-4 group"
                  aria-expanded={isOpen}
                >
                  <span className="flex items-start gap-4 flex-1">
                    <span className="font-serif text-rose-primary text-xl leading-none pt-1">
                      Q{String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-medium text-ink">{item.q}</span>
                  </span>
                  <span
                    className={`flex-shrink-0 w-8 h-8 rounded-full border border-stone-200 grid place-items-center text-stone-500 group-hover:border-rose-primary group-hover:text-rose-primary transition-colors ${
                      isOpen ? "rotate-45 border-rose-primary text-rose-primary" : ""
                    }`}
                    style={{ transition: "transform 0.25s ease" }}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-[max-height,opacity] duration-300 ${
                    isOpen ? "max-h-60 opacity-100 pb-6" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="pl-12 pr-12 text-sm text-stone-600 leading-relaxed">
                    {item.a}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

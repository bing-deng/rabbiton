"use client";
import Image from "next/image";
import { useI18n } from "@/i18n/LanguageProvider";

export default function Flow() {
  const { t } = useI18n();
  const f = t.flow;

  return (
    <section id="flow" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-xs tracking-[0.3em] text-rose-primary uppercase">{f.eyebrow}</p>
          <h2 className="mt-3 font-serif text-3xl sm:text-4xl text-ink">
            {f.titleA}
            <span className="text-rose-primary">{f.titleAccent}</span>
          </h2>
          <p className="mt-4 text-stone-600 text-sm sm:text-base leading-relaxed">{f.lead}</p>
        </div>

        <div className="mt-14 mx-auto w-full max-w-md">
          <div className="rounded-[2rem] border border-stone-100 bg-[#fdf7f2] p-4 shadow-sm sm:p-6">
            <Image
              src="/rabbit/registration-flow.png"
              alt={f.alt}
              width={486}
              height={648}
              sizes="(max-width: 768px) 90vw, 28rem"
              className="h-auto w-full rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

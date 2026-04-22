"use client";
import Image from "next/image";
import { useI18n } from "@/i18n/LanguageProvider";
import { TIKTOK_BY_MEMBER } from "@/lib/links";

const frames = [
  "from-rose-primary/40 to-rose-deep/20",
  "from-gold/40 to-gold-soft/20",
];

export default function Staff() {
  const { t } = useI18n();
  const s = t.staff;

  return (
    <section id="team" className="relative py-24 bg-white overflow-hidden">
      <Image
        src="/rabbit/fuji-sakura.png"
        alt=""
        aria-hidden
        width={600}
        height={420}
        className="absolute -top-8 -right-16 w-[28rem] opacity-[0.08] pointer-events-none select-none"
      />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
        <div className="max-w-2xl">
          <p className="text-xs tracking-[0.3em] text-rose-primary uppercase">{s.eyebrow}</p>
          <h2 className="mt-3 font-serif text-3xl sm:text-4xl text-ink">
            {s.titleA}
            <br className="sm:hidden" />
            {s.titleB}
            <span className="text-rose-primary">{s.titleAccent}</span>
            {s.titleC}
          </h2>
          <p className="mt-4 text-stone-600 text-sm sm:text-base leading-relaxed">{s.lead}</p>
        </div>

        <div className="mt-14 grid md:grid-cols-2 gap-6">
          {s.members.map((m, i) => (
            <article
              key={m.name}
              className="relative rounded-3xl bg-[#fdf7f2] p-8 border border-stone-100 overflow-hidden hover:shadow-xl hover:shadow-rose-primary/5 transition-shadow"
            >
              <div
                className={`absolute -top-10 -right-10 w-40 h-40 rounded-full bg-gradient-to-br ${frames[i % frames.length]} blur-2xl`}
              />

              <div className="relative flex items-start gap-5">
                <div className="relative flex-shrink-0">
                  <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden ring-4 ring-white shadow-lg">
                    <Image
                      src={m.image}
                      alt={m.name}
                      fill
                      sizes="128px"
                      className="object-cover"
                      priority={i === 0}
                    />
                  </div>
                  <span className="absolute -bottom-1 -right-1 w-8 h-8 rounded-full bg-rose-primary text-white grid place-items-center font-serif text-sm shadow-md">
                    {m.initials}
                  </span>
                </div>

                <div className="flex-1 min-w-0">
                  <p className="text-xs text-rose-primary tracking-widest uppercase">{m.role}</p>
                  <h3 className="mt-1 font-serif text-2xl text-ink">{m.name}</h3>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {m.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-0.5 rounded-full bg-white border border-rose-soft text-xs text-rose-deep"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <p className="relative mt-6 text-sm text-stone-600 leading-relaxed">{m.bio}</p>

              {TIKTOK_BY_MEMBER[m.name] && (
                <a
                  href={TIKTOK_BY_MEMBER[m.name]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-ink text-white text-xs font-medium hover:bg-rose-deep transition-colors"
                  aria-label={`${m.name} TikTok`}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005.8 20.1a6.34 6.34 0 0010.86-4.43V9.39a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1.84-.82z" />
                  </svg>
                  TikTok @{m.name === "SHIN" ? "shin_tarot" : "nizinoma_ma"}
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 17L17 7M7 7h10v10" />
                  </svg>
                </a>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

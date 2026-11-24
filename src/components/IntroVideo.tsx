"use client";
import { useI18n } from "@/i18n/LanguageProvider";

export default function IntroVideo() {
  const { t } = useI18n();
  const v = t.introVideo;

  return (
    <section className="bg-paper pb-16 sm:pb-20">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="rounded-[2rem] border border-rose-primary/15 bg-white/80 p-6 sm:p-8 shadow-lg shadow-rose-primary/10 backdrop-blur">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-rose-primary">
              {v.eyebrow}
            </p>
            <h2 className="mt-3 font-serif text-2xl sm:text-3xl leading-snug text-ink">
              {v.title}
            </h2>
          </div>

          <div className="mx-auto mt-8 max-w-4xl overflow-hidden rounded-2xl bg-ink shadow-md">
            <video
              className="block aspect-video h-auto w-full"
              src="/rabbit/rabbit-intro.mp4"
              poster="/rabbit/rabbit-intro-poster.jpg"
              controls
              playsInline
              preload="metadata"
            />
          </div>

          <p className="mt-4 text-center text-sm text-stone-500">{v.caption}</p>
        </div>
      </div>
    </section>
  );
}

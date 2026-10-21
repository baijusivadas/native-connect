"use client";

import { useEffect, useRef, useState } from "react";
import { FaPlay, FaCheckCircle } from "react-icons/fa";
import { useLanguage } from "@/contexts/LanguageContext";
import { TUTORS } from "@/constants/pageContent";

function TutorVideoPreview({ tutor }: { tutor: (typeof TUTORS)[number] }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    void video.play().catch((error: unknown) => {
      console.warn(`Could not autoplay tutor preview: ${tutor.video}`, error);
    });
  }, [tutor.video]);

  return (
    <>
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url("${tutor.poster}")` }}
      />
      <video
        ref={videoRef}
        className={`relative z-10 h-full w-full object-cover transition-opacity duration-300 ${
          isPlaying ? "opacity-100" : "opacity-0"
        }`}
        src={tutor.video}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        onPlaying={() => setIsPlaying(true)}
        onError={() => setIsPlaying(false)}
      />
    </>
  );
}

export default function TutorSection() {
  const { t } = useLanguage();
  const [selectedTutor, setSelectedTutor] =
    useState<(typeof TUTORS)[number] | null>(null);

  useEffect(() => {
    if (!selectedTutor) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedTutor(null);
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [selectedTutor]);

  return (
    <section id="tutors" className="scroll-mt-24 bg-[#f7f4ef] py-10 sm:py-14">
      <div className="w-full px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="eyebrow">{t("Meet your tutor")}</p>
            <h2 className="section-title">
              {t("Learn with a person you can trust.")}
            </h2>
          </div>
          <p className="max-w-md text-xs sm:text-sm leading-relaxed text-[#0b192c]/60">
            {t(
              "Watch a short introduction, then choose a native-speaking tutor whose experience matches your goal.",
            )}
          </p>
        </div>
        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {TUTORS.map((tutor) => (
            <button
              type="button"
              key={tutor.name}
              aria-label={`${t("Video introduction")}: ${t(`Tutor ${tutor.name}`)}`}
              onClick={() => setSelectedTutor(tutor)}
              className="w-full overflow-hidden rounded-3xl border border-[#0b192c]/10 bg-white text-left shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#0b192c]/10 cursor-pointer"
            >
              <div className="relative aspect-16/10 overflow-hidden bg-[#0b192c]">
                <TutorVideoPreview tutor={tutor} />
                <div className="absolute inset-0 bg-linear-to-t from-[#0b192c]/75 via-transparent to-transparent" />
                <span
                  className={`absolute left-4 top-4 flex h-9 w-9 items-center justify-center rounded-full ${tutor.accent} text-white shadow-lg`}
                >
                  <FaPlay className="ml-0.5 text-[11px]" />
                </span>
                <span className="absolute bottom-3.5 left-4 rounded-full bg-white/90 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#0b192c]">
                  {t("Video introduction")}
                </span>
              </div>
              <div className="p-4 sm:p-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-semibold text-[#0b192c]">
                      {t(`Tutor ${tutor.name}`)}
                    </h3>
                    <p className="mt-1 text-xs sm:text-sm font-semibold text-[#9b1c31]">
                      {t(tutor.language)} · {t(tutor.speciality)}
                    </p>
                  </div>
                  <FaCheckCircle
                    className="mt-1 shrink-0 text-[#c19a68]"
                    title={t("Vetted tutor")}
                  />
                </div>
                <p className="mt-2 text-xs sm:text-sm leading-relaxed text-[#0b192c]/60">
                  {t(
                    "Native speaker, qualified and ready to help you make progress.",
                  )}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>
      {selectedTutor && (
        <div
          className="fixed inset-0 z-100 flex items-center justify-center bg-[#0b192c]/85 p-4 sm:p-6"
          onClick={(event) => {
            if (event.target === event.currentTarget) setSelectedTutor(null);
          }}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="tutor-video-title"
            className="relative w-full max-w-4xl overflow-hidden rounded-2xl bg-white shadow-2xl"
          >
            <button
              type="button"
              onClick={() => setSelectedTutor(null)}
              aria-label={t("Close video")}
              className="absolute right-3 top-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-[#0b192c]/75 text-xl text-white hover:bg-[#0b192c] focus:outline-none focus:ring-2 focus:ring-white"
            >
              ×
            </button>
            <video
              key={selectedTutor.video}
              className="aspect-video w-full bg-[#0b192c] object-contain"
              src={selectedTutor.video}
              autoPlay
              controls
              playsInline
              preload="auto"
              poster={selectedTutor.poster}
            />
            <div className="p-4 sm:p-6">
              <h3
                id="tutor-video-title"
                className="text-xl font-semibold text-[#0b192c] sm:text-2xl"
              >
                {t(`Tutor ${selectedTutor.name}`)}
              </h3>
              <p className="mt-1 text-sm font-semibold text-[#9b1c31]">
                {t(selectedTutor.language)} · {t(selectedTutor.speciality)}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

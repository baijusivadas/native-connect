"use client";

import { FaPlay, FaCheckCircle } from "react-icons/fa";
import { useLanguage } from "@/contexts/LanguageContext";

const tutors = [
  {
    name: "Marta",
    language: "German",
    speciality: "Goethe exam prep",
    video: "/video/switzerland.mp4",
    poster: "/img/swiss.jpeg",
    accent: "bg-[#9b1c31]",
  },
  {
    name: "Clara",
    language: "French",
    speciality: "Everyday conversation",
    video: "/video/paris.mp4",
    poster: "/img/paris.jpeg",
    accent: "bg-[#c19a68]",
  },
  {
    name: "Luca",
    language: "Italian",
    speciality: "Work & relocation",
    video: "/video/italy.mp4",
    poster: "/img/italy.jpeg",
    accent: "bg-[#0b192c]",
  },
];

export default function TutorSection() {
  const { t } = useLanguage();
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
          {tutors.map((tutor) => (
            <article
              key={tutor.name}
              className="overflow-hidden rounded-[1.5rem] border border-[#0b192c]/10 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#0b192c]/10"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-[#0b192c]">
                <video
                  className="h-full w-full object-cover opacity-80"
                  src={tutor.video}
                  muted
                  loop
                  autoPlay
                  playsInline
                  poster={tutor.poster}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b192c]/75 via-transparent to-transparent" />
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
                      {t("Tutor")} {tutor.name}
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
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { FaPlay, FaCheckCircle } from "react-icons/fa";
import { useLanguage } from "@/contexts/LanguageContext";

const tutors = [
  {
    name: "Marta",
    language: "German",
    speciality: "Goethe exam prep",
    video: "/video/switzerland.mp4",
    accent: "bg-[#9b1c31]",
  },
  {
    name: "Clara",
    language: "French",
    speciality: "Everyday conversation",
    video: "/video/paris.mp4",
    accent: "bg-[#c19a68]",
  },
  {
    name: "Luca",
    language: "Italian",
    speciality: "Work & relocation",
    video: "/video/italy.mp4",
    accent: "bg-[#0b192c]",
  },
];

export default function TutorSection() {
  const { t } = useLanguage();
  return (
    <section id="tutors" className="bg-[#f7f4ef] py-24">
      <div className="w-full px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="eyebrow">{t("Meet your tutor")}</p>
            <h2 className="section-title">
              {t("Learn with a person you can trust.")}
            </h2>
          </div>
          <p className="max-w-md text-sm leading-7 text-[#0b192c]/60">
            {t(
              "Watch a short introduction, then choose a native-speaking tutor whose experience matches your goal.",
            )}
          </p>
        </div>
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {tutors.map((tutor) => (
            <article
              key={tutor.name}
              className="overflow-hidden rounded-[1.75rem] border border-[#0b192c]/10 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#0b192c]/10"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-[#0b192c]">
                <video
                  className="h-full w-full object-cover opacity-80"
                  src={tutor.video}
                  muted
                  loop
                  autoPlay
                  playsInline
                  poster="/img/swiss.jpeg"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#0b192c]/75 via-transparent to-transparent" />
                <span
                  className={`absolute left-5 top-5 flex h-10 w-10 items-center justify-center rounded-full ${tutor.accent} text-white shadow-lg`}
                >
                  <FaPlay className="ml-0.5 text-xs" />
                </span>
                <span className="absolute bottom-4 left-5 rounded-full bg-white/90 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#0b192c]">
                  {t("Video introduction")}
                </span>
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-semibold text-[#0b192c]">
                      {t(`Tutor ${tutor.name}`)}
                    </h3>
                    <p className="mt-1 text-sm font-semibold text-[#9b1c31]">
                      {t(tutor.language)} · {t(tutor.speciality)}
                    </p>
                  </div>
                  <FaCheckCircle
                    className="mt-1 shrink-0 text-[#c19a68]"
                    title={t("Vetted tutor")}
                  />
                </div>
                <p className="mt-4 text-sm leading-6 text-[#0b192c]/60">
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

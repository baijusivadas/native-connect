"use client";

import { FaCertificate, FaClock, FaUsers } from "react-icons/fa";
import { useLanguage } from "@/contexts/LanguageContext";
import { CURRICULUM_LEVELS } from "@/constants/pageContent";

export default function CurriculumSection() {
  const { t } = useLanguage();
  return (
    <section id="curriculum" className="scroll-mt-24 bg-[#f7f4ef] py-10 sm:py-14">
      <div className="w-full px-5 sm:px-8 lg:px-12">
        <div className="rounded-3xl bg-[#0b192c] p-5 text-[#f7f4ef] sm:p-8 lg:p-10">
          <div className="max-w-3xl">
            <p className="eyebrow text-[#c19a68]">{t("Your learning path")}</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
              {t("Know exactly what comes next.")}
            </h2>
            <p className="mt-2 text-xs sm:text-sm leading-relaxed text-[#f7f4ef]/60">
              {t(
                "A clear A1 to C1 curriculum helps you choose the right starting point, prepare for exams and measure meaningful progress.",
              )}
            </p>
          </div>
          <div className="mt-8 overflow-x-auto rounded-2xl border border-[#f7f4ef]/10">
            <div className="min-w-[720px]">
              <div className="grid grid-cols-[.7fr_1.3fr_1fr_1fr_1.3fr] gap-4 border-b border-[#f7f4ef]/10 bg-[#f7f4ef]/5 px-5 py-3 text-[10px] font-bold uppercase tracking-[.16em] text-[#c19a68]">
                <span>{t("Level")}</span>
                <span>{t("Focus")}</span>
                <span>{t("Hours")}</span>
                <span>{t("Class size")}</span>
                <span>{t("Certificate / exam")}</span>
              </div>
              {CURRICULUM_LEVELS.map(([level, name, hours, size, certificate]) => (
                <div
                  key={level}
                  className="grid grid-cols-[.7fr_1.3fr_1fr_1fr_1.3fr] items-center gap-4 border-b border-[#f7f4ef]/8 px-5 py-3.5 sm:py-4 last:border-0"
                >
                  <strong className="text-xl sm:text-2xl text-[#c19a68]">{level}</strong>
                  <span className="text-sm font-semibold">{t(name)}</span>
                  <span className="flex items-center gap-2 text-xs sm:text-sm text-[#f7f4ef]/65">
                    <FaClock className="text-[#9b1c31]" /> {t(hours)}
                  </span>
                  <span className="flex items-center gap-2 text-xs sm:text-sm text-[#f7f4ef]/65">
                    <FaUsers className="text-[#9b1c31]" /> {t(size)}
                  </span>
                  <span className="flex items-center gap-2 text-xs sm:text-sm text-[#f7f4ef]/65">
                    <FaCertificate className="text-[#9b1c31]" />{" "}
                    {t(certificate)}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

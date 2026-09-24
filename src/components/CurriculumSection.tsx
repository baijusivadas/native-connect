"use client";

import { FaCertificate, FaClock, FaUsers } from "react-icons/fa";
import { useLanguage } from "@/contexts/LanguageContext";

const levels = [
  ["A1", "Starter", "60 hours", "4-6 learners", "Foundations"],
  ["A2", "Everyday basics", "70 hours", "4-6 learners", "Progress certificate"],
  ["B1", "Independent", "80 hours", "4-6 learners", "B1 exam preparation"],
  ["B2", "Professional", "90 hours", "3-5 learners", "B2 exam preparation"],
  ["C1", "Advanced", "100 hours", "1-4 learners", "C1 exam preparation"],
];

export default function CurriculumSection() {
  const { t } = useLanguage();
  return (
    <section id="curriculum" className="bg-[#f7f4ef] py-24">
      <div className="w-full px-5 sm:px-8 lg:px-12">
        <div className="rounded-4xl bg-[#0b192c] p-7 text-[#f7f4ef] sm:p-10 lg:p-14">
          <div className="max-w-3xl">
            <p className="eyebrow text-[#c19a68]">{t("Your learning path")}</p>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
              {t("Know exactly what comes next.")}
            </h2>
            <p className="mt-5 text-sm leading-7 text-[#f7f4ef]/60">
              {t(
                "A clear A1 to C1 curriculum helps you choose the right starting point, prepare for exams and measure meaningful progress.",
              )}
            </p>
          </div>
          <div className="mt-12 overflow-x-auto rounded-4xl border border-[#f7f4ef]/10">
            <div className="min-w-[720px]">
              <div className="grid grid-cols-[.7fr_1.3fr_1fr_1fr_1.3fr] gap-4 border-b border-[#f7f4ef]/10 bg-[#f7f4ef]/5 px-6 py-4 text-[10px] font-bold uppercase tracking-[.16em] text-[#c19a68]">
                <span>{t("Level")}</span>
                <span>{t("Focus")}</span>
                <span>{t("Hours")}</span>
                <span>{t("Class size")}</span>
                <span>{t("Certificate / exam")}</span>
              </div>
              {levels.map(([level, name, hours, size, certificate]) => (
                <div
                  key={level}
                  className="grid grid-cols-[.7fr_1.3fr_1fr_1fr_1.3fr] items-center gap-4 border-b border-[#f7f4ef]/8 px-6 py-5 last:border-0"
                >
                  <strong className="text-2xl text-[#c19a68]">{level}</strong>
                  <span className="font-semibold">{t(name)}</span>
                  <span className="flex items-center gap-2 text-sm text-[#f7f4ef]/65">
                    <FaClock className="text-[#9b1c31]" /> {t(hours)}
                  </span>
                  <span className="flex items-center gap-2 text-sm text-[#f7f4ef]/65">
                    <FaUsers className="text-[#9b1c31]" /> {t(size)}
                  </span>
                  <span className="flex items-center gap-2 text-sm text-[#f7f4ef]/65">
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

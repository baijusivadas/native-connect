"use client";

import Link from "next/link";
import { FaArrowRight, FaClock, FaUsers, FaUserNurse } from "react-icons/fa";
import { useLanguage } from "@/contexts/LanguageContext";

const stages = [
  [
    "A1-A2",
    "Foundations for care",
    "Build essential German for introductions, routines, patients and everyday life.",
    "6-8 learners",
    "3 hours / week",
  ],
  [
    "B1",
    "Workplace communication",
    "Practise handovers, documentation, appointments and confident conversations with colleagues.",
    "4-6 learners",
    "4 hours / week",
  ],
  [
    "B2",
    "Professional recognition",
    "Prepare for professional language exams and the communication demands of nursing in Germany.",
    "3-5 learners",
    "5 hours / week",
  ],
];

export default function NursePathSection() {
  const { t } = useLanguage();
  return (
    <section id="nurses" className="bg-[#f7f4ef] py-24">
      <div className="w-full px-5 sm:px-8 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
          <div>
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#9b1c31] text-2xl text-[#f7f4ef]">
              <FaUserNurse />
            </div>
            <p className="eyebrow mt-7">{t("German for nurses")}</p>
            <h2 className="section-title">
              {t("A practical path from A1 to professional B2.")}
            </h2>
            <p className="section-copy">
              {t(
                "Build the language, confidence and exam readiness you need to care for patients and begin your nursing career in Germany.",
              )}
            </p>
            <Link
              href="#contact"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#0b192c] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#9b1c31]"
            >
              {t("Discuss your nursing pathway")}{" "}
              <FaArrowRight className="text-xs" />
            </Link>
          </div>
          <div className="grid gap-4">
            {stages.map(([level, title, description, size, time]) => (
              <article
                key={level}
                className="rounded-3xl border border-[#0b192c]/10 bg-white p-6 shadow-sm"
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <span className="rounded-full bg-[#c19a68]/20 px-3 py-1 text-xs font-bold tracking-wider text-[#9b1c31]">
                    {t(level)}
                  </span>
                  <div className="flex gap-4 text-xs font-semibold text-[#0b192c]/55">
                    <span className="flex items-center gap-1.5">
                      <FaUsers className="text-[#9b1c31]" />
                      {t(size)}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <FaClock className="text-[#9b1c31]" />
                      {t(time)}
                    </span>
                  </div>
                </div>
                <h3 className="mt-4 text-xl font-semibold text-[#0b192c]">
                  {t(title)}
                </h3>
                <p className="mt-2 text-sm leading-6 text-[#0b192c]/60">
                  {t(description)}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

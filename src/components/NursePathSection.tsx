"use client";

import Link from "next/link";
import { FaArrowRight, FaClock, FaUsers, FaUserNurse, FaHospital, FaCheck } from "react-icons/fa";
import { useLanguage } from "@/contexts/LanguageContext";

const stages = [
  {
    level: "A1-A2",
    title: "Foundations for care",
    description: "Build essential German for introductions, ward routines, anatomy, and everyday life in Germany.",
    size: "6-8 learners",
    time: "3-4 hrs / wk",
    badge: "Native Tutors",
  },
  {
    level: "B1",
    title: "Clinical communication",
    description: "Practise patient history taking, handovers, documentation, vital signs, and initial dossier review.",
    size: "4-6 learners",
    time: "4-5 hrs / wk",
    badge: "Ward Roleplays",
  },
  {
    level: "B2 / TELC Pflege",
    title: "TELC Pflege & Goethe prep",
    description: "Master specialized healthcare terminology, doctor discussions, and dual-level safety net exam tactics.",
    size: "3-5 learners",
    time: "5-6 hrs / wk",
    badge: "Combined B1-B2 Safety Net",
  },
  {
    level: "Placement",
    title: "Hospital hiring & relocation",
    description: "Direct interviews with German hospital employers, Defizitbescheid tracking, and fast-track work visa filing.",
    size: "Direct Hiring",
    time: "0 Placement Fee",
    badge: "Verified German Hospitals",
  },
];

export default function NursePathSection() {
  const { t } = useLanguage();
  return (
    <section id="nurses" className="bg-[#f7f4ef] py-16 sm:py-20">
      <div className="w-full px-5 sm:px-8 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-[.85fr_1.15fr] lg:items-center">
          <div>
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#9b1c31] text-2xl text-[#f7f4ef]">
              <FaUserNurse />
            </div>
            
            <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#c19a68]/20 px-3.5 py-1 text-xs font-bold text-[#9b1c31]">
              <FaHospital /> {t("Training + TELC Prep + Placement")}
            </div>

            <p className="eyebrow mt-3">{t("German for nurses")}</p>
            <h2 className="section-title">
              {t("A complete path from A1 to working in Germany.")}
            </h2>
            <p className="section-copy">
              {t(
                "We don't just teach German we prepare you for TELC Deutsch B1-B2 Pflege / Goethe exams and connect you directly with German hospital employers with zero placement fees.",
              )}
            </p>

            <div className="mt-6 space-y-2.5 text-xs sm:text-sm text-[#0b192c]/80">
              <div className="flex items-center gap-2.5">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#9b1c31] text-[10px] text-white">
                  <FaCheck />
                </span>
                <span>{t("Specialized TELC Pflege healthcare curriculum & dual-level scoring")}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#9b1c31] text-[10px] text-white">
                  <FaCheck />
                </span>
                <span>{t("Verified German hospital interviews & ethical 0 placement fee hiring")}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#9b1c31] text-[10px] text-white">
                  <FaCheck />
                </span>
                <span>{t("Defizitbescheid & nursing visa documentation guidance")}</span>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href="/german-for-nurses"
                className="inline-flex items-center gap-2 rounded-xl bg-[#0b192c] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#9b1c31]"
              >
                {t("Explore Nursing & TELC Guide")}
                <FaArrowRight className="text-xs" />
              </Link>
            </div>
          </div>

          <div className="grid gap-3.5 sm:grid-cols-2">
            {stages.map((stage) => (
              <article
                key={stage.level}
                className="rounded-3xl border border-[#0b192c]/10 bg-white p-5 shadow-sm transition hover:border-[#c19a68]/60 hover:shadow-md"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="rounded-full bg-[#9b1c31]/10 px-3 py-1 text-xs font-bold tracking-wider text-[#9b1c31]">
                    {t(stage.level)}
                  </span>
                  <span className="rounded-md bg-[#f7f4ef] px-2 py-0.5 text-[10px] font-semibold text-[#0b192c]/70 border border-[#0b192c]/5">
                    {t(stage.badge)}
                  </span>
                </div>
                <h3 className="mt-3 text-base font-bold text-[#0b192c]">
                  {t(stage.title)}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-[#0b192c]/65">
                  {t(stage.description)}
                </p>
                <div className="mt-4 flex items-center justify-between border-t border-[#0b192c]/5 pt-3 text-[11px] font-semibold text-[#0b192c]/55">
                  <span className="flex items-center gap-1.5">
                    <FaUsers className="text-[#9b1c31]" />
                    {t(stage.size)}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <FaClock className="text-[#9b1c31]" />
                    {t(stage.time)}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


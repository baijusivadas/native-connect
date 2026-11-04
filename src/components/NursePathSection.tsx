"use client";

import Link from "next/link";
import { FaArrowRight, FaClock, FaUsers, FaUserNurse, FaHospital, FaCheck } from "react-icons/fa";
import { useLanguage } from "@/contexts/LanguageContext";
import { NURSE_PATH_STAGES } from "@/constants/pageContent";

export default function NursePathSection() {
  const { t } = useLanguage();
  return (
    <section id="nurses" className="scroll-mt-24 bg-[#f7f4ef] py-10 sm:py-14">
      <div className="w-full px-5 sm:px-8 lg:px-12">
        <div className="grid gap-8 lg:grid-cols-[.85fr_1.15fr] lg:items-center lg:gap-10">
          <div>
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#9b1c31] text-xl text-[#f7f4ef]">
              <FaUserNurse />
            </div>
            
            <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#c19a68]/20 px-3 py-1 text-xs font-bold text-[#9b1c31]">
              <FaHospital /> {t("Training + TELC Prep + Practice")}
            </div>

            <p className="eyebrow mt-2.5">{t("German for nurses")}</p>
            <h2 className="section-title">
              {t("A clear path from A1 to confident German.")}
            </h2>
            <p className="section-copy">
              {t("Build your German from A1 to B2 with live classes, healthcare vocabulary and TELC/Goethe exam preparation, helping you speak confidently with patients and hospital employers.")}
            </p>

            <div className="mt-4 space-y-2 text-xs sm:text-sm text-[#0b192c]/80">
              <div className="flex items-center gap-2.5">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#9b1c31] text-[10px] text-white">
                  <FaCheck />
                </span>
                <span>{t("Healthcare German curriculum, TELC/Goethe preparation and mock exams")}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#9b1c31] text-[10px] text-white">
                  <FaCheck />
                </span>
                <span>{t("Speaking activities, listening practice and feedback from your tutor")}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#9b1c31] text-[10px] text-white">
                  <FaCheck />
                </span>
                <span>{t("Mock hospital conversations and guided self-study tasks")}</span>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Link
                href="/german-for-nurses"
                className="inline-flex items-center gap-2 rounded-xl bg-[#0b192c] px-5 py-2.5 text-xs sm:text-sm font-bold text-white transition hover:bg-[#9b1c31]"
              >
                {t("Explore German & TELC Courses")}
                <FaArrowRight className="text-xs" />
              </Link>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {NURSE_PATH_STAGES.map((stage) => (
              <article
                key={stage.level}
                className="rounded-2xl border border-[#0b192c]/10 bg-white p-4 sm:p-5 shadow-sm transition hover:border-[#c19a68]/60 hover:shadow-md"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="rounded-full bg-[#9b1c31]/10 px-2.5 py-0.5 text-xs font-bold tracking-wider text-[#9b1c31]">
                    {t(stage.level)}
                  </span>
                  <span className="rounded-md bg-[#f7f4ef] px-2 py-0.5 text-[10px] font-semibold text-[#0b192c]/70 border border-[#0b192c]/5">
                    {t(stage.badge)}
                  </span>
                </div>
                <h3 className="mt-2 text-sm sm:text-base font-bold text-[#0b192c]">
                  {t(stage.title)}
                </h3>
                <p className="mt-1.5 text-xs leading-relaxed text-[#0b192c]/65">
                  {t(stage.description)}
                </p>
                <div className="mt-3 flex items-center justify-between border-t border-[#0b192c]/5 pt-2.5 text-[11px] font-semibold text-[#0b192c]/55">
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

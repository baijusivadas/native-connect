"use client";

import {
  FaChild,
  FaBriefcase,
  FaPlane,
  FaGraduationCap,
  FaBrain,
  FaComments,
  FaSmile,
  FaUserMd,
  FaUserNurse,
  FaCogs,
  FaPassport,
  FaHome,
  FaHospital,
  FaHandshake,
  FaGlobe
} from "react-icons/fa";
import { useLanguage } from "@/contexts/LanguageContext";

const learningPathways = [
  {
    icon: FaChild,
    eyebrow: "For Parents",
    title: "Set your child up for lifelong success",
    description: "Enriching, age-appropriate lessons that make language an intuitive part of life, far beyond another homework assignment.",
    tags: [
      { label: "School Readiness", icon: FaGraduationCap },
      { label: "Developmental Milestones", icon: FaBrain },
      { label: "Early Immersion", icon: FaComments },
      { label: "Fun & Safe Environment", icon: FaSmile }
    ]
  },
  {
    icon: FaBriefcase,
    eyebrow: "For Professionals",
    title: "Accelerate your career in Germany",
    description: "Industry-specific German for high-demand fields like medicine, nursing, engineering, and academia, tailored for seamless relocation and professional growth.",
    tags: [
      { label: "Doctors", icon: FaUserMd },
      { label: "Nursing", icon: FaUserNurse },
      { label: "Engineering", icon: FaCogs },
      { label: "Study", icon: FaGraduationCap }
    ]
  },
  {
    icon: FaPlane,
    eyebrow: "For Moving & Expats",
    title: "Master practical, confident European conversation",
    description: "Skip textbook filler and go beyond basic phrases to confidently navigate everything from local appointments to making lasting social connections.",
    tags: [
      { label: "Visa Navigation", icon: FaPassport },
      { label: "Apartment Hunting", icon: FaHome },
      { label: "Healthcare System", icon: FaHospital },
      { label: "Job Interview Skills", icon: FaHandshake },
      { label: "Cultural Integration", icon: FaGlobe }
    ]
  }
];

export default function AudienceSection() {
  const { t } = useLanguage();
  return (
    <section className="bg-[#f7f4ef] py-10 sm:py-14">
      <div className="w-full px-5 sm:px-8 lg:px-12">
        <div className="max-w-3xl">
          <p className="eyebrow">{t("Tailored Learning Pathways")}</p>
          <h2 className="section-title">
            {t("Your Goals, Your Language Learning Journey.")}
          </h2>
          <p className="section-copy">
            {t(
              "Choose the personlized program built for your specific ambitions and schedule. We fit your life not the other way around.",
            )}
          </p>
        </div>
        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {learningPathways.map(
            ({ icon: Icon, eyebrow, title, description, tags }) => (
              <article
                key={title}
                className="group rounded-[1.5rem] border border-[#0b192c]/10 bg-white/60 p-5 sm:p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#c19a68]/60 hover:shadow-xl hover:shadow-[#0b192c]/8"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#0b192c] text-[#c19a68]">
                  <Icon />
                </div>
                <p className="mt-4 sm:mt-5 text-xs font-bold uppercase tracking-[.18em] text-[#9b1c31]">
                  {t(eyebrow)}
                </p>
                <h3 className="mt-1.5 text-xl sm:text-2xl font-semibold tracking-tight text-[#0b192c]">
                  {t(title)}
                </h3>
                <p className="mt-2 text-xs sm:text-sm leading-relaxed text-[#0b192c]/65">
                  {t(description)}
                </p>
                {tags && (
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {tags.map(({ label, icon: SectorIcon }) => (
                      <span
                        key={label}
                        className="inline-flex items-center gap-1.5 rounded-full border border-[#0b192c]/10 bg-[#f7f4ef] px-2.5 py-1 text-xs font-semibold text-[#0b192c]/70"
                      >
                        <SectorIcon className="text-[#9b1c31]" /> {t(label)}
                      </span>
                    ))}
                  </div>
                )}
              </article>
            ),
          )}
        </div>
      </div>
    </section>
  );
}

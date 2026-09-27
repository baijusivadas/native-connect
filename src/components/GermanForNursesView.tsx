"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FaArrowLeft,
  FaArrowRight,
  FaCheck,
  FaEuroSign,
  FaFileAlt,
  FaGraduationCap,
  FaLanguage,
  FaMapMarkerAlt,
  FaPassport,
  FaStethoscope,
} from "react-icons/fa";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  DOCUMENT_CHECKLIST,
  LEARNING_FOCUS,
  LEVELS,
  OVERVIEW_STATS,
  PATHWAY_STEPS,
  RECOGNITION_OUTCOMES,
  SOURCE_LINKS,
  VISUAL_STORY,
  WHY_GERMAN_POINTS,
} from "@/constants/germanForNurses";

const STAT_ICONS = {
  FaLanguage,
  FaEuroSign,
  FaPassport,
  FaStethoscope,
  FaFileAlt,
  FaMapMarkerAlt,
} as const;

export default function GermanForNursesView() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f7f4ef] text-[#0b192c]">
      <Navbar />

      {/* HERO SECTION - Full width with tight vertical padding */}
      <section className="relative overflow-hidden bg-[#0b192c] text-white">
        <div className="absolute inset-0 opacity-25">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            aria-hidden="true"
            className="h-full w-full object-cover"
          >
            <source
              src="/video/Nurse_working_in_Germany_20260927155957.mp4"
              type="video/mp4"
            />
          </video>
        </div>

        <div className="absolute inset-0 bg-gradient-to-r from-[#0b192c] via-[#0b192c]/95 to-[#0b192c]/70" />

        <div className="relative w-full px-5 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-20">
          <Link
            href="/#nurses"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-white/70 transition hover:text-[#c19a68] focus:outline-none focus:ring-2 focus:ring-[#c19a68]"
          >
            <FaArrowLeft className="text-[10px]" />
            {t("Back to Native Connects")}
          </Link>

          <div className="mt-6 max-w-4xl">
            <span className="inline-block rounded-full bg-[#9b1c31]/30 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#c19a68] border border-[#c19a68]/30">
              {t("German for Nurses • 2026 Roadmap")}
            </span>

            <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl leading-[1.15]">
              {t("Build your German. Start your nursing career in Germany.")}
            </h1>

            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-white/75 sm:text-base sm:leading-7">
              {t(
                "A comprehensive A1-to-B2 roadmap tailored for Indian nurses (GNM, B.Sc, M.Sc). Master practical healthcare German for clinical work, navigate degree recognition (Anerkennung), and leverage 2026 visa pathways like the Opportunity Card (Chancenkarte).",
              )}
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3.5">
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#9b1c31] px-5 py-3 text-sm font-bold text-white shadow-lg shadow-[#9b1c31]/30 transition hover:bg-[#85172a] focus:outline-none focus:ring-2 focus:ring-[#c19a68]"
              >
                {t("Book a Free Demo")}
                <FaArrowRight className="text-xs" />
              </Link>

              <a
                href="#roadmap"
                className="inline-flex items-center justify-center rounded-xl border border-white/20 px-5 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:border-[#c19a68] hover:text-[#c19a68] focus:outline-none focus:ring-2 focus:ring-[#c19a68]"
              >
                {t("Explore the A1-B2 Roadmap")}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* OVERVIEW STATS STRIP - Full width */}
      <section className="border-b border-[#0b192c]/10 bg-white shadow-sm">
        <div className="grid w-full gap-4 px-5 py-5 sm:grid-cols-2 sm:px-8 lg:grid-cols-4 lg:px-12">
          {OVERVIEW_STATS.map(({ value, label, icon }) => {
            const Icon =
              STAT_ICONS[icon as keyof typeof STAT_ICONS] || FaLanguage;
            return (
              <div
                key={label}
                className="flex items-center gap-3.5 rounded-2xl bg-[#f7f4ef] px-4 py-3.5 border border-[#0b192c]/5"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#9b1c31] text-sm text-white">
                  <Icon aria-hidden="true" />
                </div>
                <div>
                  <p className="text-sm font-bold text-[#0b192c]">{t(value)}</p>
                  <p className="text-xs font-medium text-[#0b192c]/60">
                    {t(label)}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* WHY GERMAN & ELIGIBILITY - Full width */}
      <section className="py-12 sm:py-16">
        <div className="grid w-full gap-8 px-5 sm:px-8 lg:grid-cols-[1.1fr_.9fr] lg:gap-12 lg:px-12">
          <div>
            <p className="eyebrow">{t("Why Germany Needs You")}</p>

            <h2 className="section-title mt-1.5 text-2xl sm:text-3xl lg:text-4xl">
              {t("High Demand, Competitive Salaries & Career Security")}
            </h2>

            <p className="section-copy mt-3">
              {t(
                "Germany faces an acute nursing shortage projected to exceed 200,000 vacancies by 2030. For GNM, B.Sc., and M.Sc. nurses from India, Germany provides structured clinical career progression, stable public salaries, and direct routes to European permanent residency.",
              )}
            </p>

            <div className="mt-6 space-y-3">
              {WHY_GERMAN_POINTS.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-2xl border border-[#0b192c]/10 bg-white p-3.5 shadow-sm"
                >
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#9b1c31] text-[10px] text-white">
                    <FaCheck aria-hidden="true" />
                  </span>
                  <p className="text-xs leading-relaxed text-[#0b192c]/80 sm:text-sm">
                    {t(item)}
                  </p>
                </div>
              ))}

              <div className="flex items-start gap-3 rounded-2xl border border-[#c19a68]/40 bg-[#c19a68]/10 p-3.5">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#9b1c31] text-[10px] text-white">
                  <FaCheck aria-hidden="true" />
                </span>
                <p className="text-xs leading-relaxed text-[#0b192c]/90 sm:text-sm">
                  <strong>{t("Eligibility:")}</strong>{" "}
                  {t(
                    "3-year GNM, 4-year B.Sc., or Post-Basic/M.Sc. Nursing with active registration with an Indian State Nursing Council. Fresh graduates eligible.",
                  )}
                </p>
              </div>
            </div>
          </div>

          {/* VISUAL STORY CAROUSEL */}
          <div className="self-start overflow-hidden rounded-3xl border border-[#0b192c]/10 bg-white shadow-lg">
            <div
              className="flex aspect-[16/10] snap-x snap-mandatory overflow-x-auto scrollbar-hide"
              aria-label="Germany journey visual story"
            >
              {VISUAL_STORY.map(({ src, caption, type }) => (
                <figure
                  key={caption}
                  className="relative min-w-full snap-center"
                >
                  {type === "video" ? (
                    <video
                      autoPlay
                      controls
                      loop
                      muted
                      playsInline
                      preload="auto"
                      aria-label={caption}
                      className="h-full w-full object-cover"
                    >
                      <source src={src} type="video/mp4" />
                    </video>
                  ) : (
                    <Image
                      src={src}
                      alt={caption}
                      fill
                      sizes="(max-width: 1024px) 100vw, 45vw"
                      className="object-cover"
                    />
                  )}

                  <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent px-5 pb-5 pt-12 text-xs font-semibold text-white sm:text-sm">
                    {t(caption)}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* A1-B2 ROADMAP - Full width */}
      <section id="roadmap" className="scroll-mt-16 bg-white py-12 sm:py-16">
        <div className="w-full px-5 sm:px-8 lg:px-12">
          <div className="max-w-3xl">
            <p className="eyebrow">{t("A1 → B2 Progression")}</p>

            <h2 className="section-title mt-1.5 text-2xl sm:text-3xl lg:text-4xl">
              {t("Realistic Language Timeline for Working Nurses")}
            </h2>

            <p className="section-copy mt-2 text-sm sm:text-base">
              {t(
                "For nurses balancing full-time hospital shifts, reaching B2 takes approximately",
              )}{" "}
              <strong>{t("18 to 23 months")}</strong>
              {t(
                ". We structure the coursework step-by-step to prevent burnout while ensuring first-attempt exam clearance (Goethe / Telc B2).",
              )}
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:gap-5 md:grid-cols-2">
            {LEVELS.map((item, index) => (
              <article
                key={item.level}
                className="relative overflow-hidden rounded-2xl border border-[#0b192c]/10 bg-[#f7f4ef] p-5 sm:p-6 transition hover:shadow-md"
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="text-2xl font-bold tracking-tight text-[#9b1c31] sm:text-3xl">
                    {t(item.level)}
                  </span>
                  <span className="rounded-full bg-[#0b192c]/5 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#0b192c]/65">
                    {t(item.stage)}
                  </span>
                </div>

                <h3 className="mt-3 text-base font-bold text-[#0b192c] sm:text-lg">
                  {t(item.title)}
                </h3>

                <p className="mt-2 text-xs leading-relaxed text-[#0b192c]/70 sm:text-sm">
                  {t(item.copy)}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="rounded-lg bg-white px-2.5 py-1 text-xs font-semibold text-[#0b192c]/75 border border-[#0b192c]/10">
                    {t(item.focus)}
                  </span>
                </div>

                <div className="mt-4 h-1 rounded-full bg-[#0b192c]/10">
                  <div
                    className="h-1 rounded-full bg-[#9b1c31]"
                    style={{ width: `${25 + index * 25}%` }}
                    aria-hidden="true"
                  />
                </div>
              </article>
            ))}
          </div>

          {/* EXAM & ADVICE BOXES */}
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-[#c19a68]/40 bg-[#f7f4ef] p-5">
              <p className="text-xs font-bold uppercase tracking-wider text-[#9b1c31]">
                {t("Recommended Examination")}
              </p>
              <h4 className="mt-1 text-sm font-bold text-[#0b192c]">
                {t("Goethe B2 vs. Telc / ÖSD")}
              </h4>
              <p className="mt-1.5 text-xs leading-relaxed text-[#0b192c]/75 sm:text-sm">
                {t("While all three are accepted, we strongly recommend")}{" "}
                <strong>{t("Goethe B2")}</strong>{" "}
                {t(
                  "(~₹15,500) for universal acceptance and frictionless visa stamping at German Consulates in India.",
                )}
              </p>
            </div>

            <div className="rounded-2xl border border-[#0b192c]/10 bg-[#f7f4ef] p-5">
              <p className="text-xs font-bold uppercase tracking-wider text-[#9b1c31]">
                {t("Flexible Learning Schedule")}
              </p>
              <h4 className="mt-1 text-sm font-bold text-[#0b192c]">
                {t("Designed for Shift Workers")}
              </h4>
              <p className="mt-1.5 text-xs leading-relaxed text-[#0b192c]/75 sm:text-sm">
                {t(
                  "Classes are scheduled around morning, evening, and night shifts with recorded backups and native-speaker speaking drills on off-days.",
                )}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* COST & SALARY FINANCIAL OUTLOOK - Full width */}
      <section className="bg-[#f7f4ef] py-12 sm:py-16">
        <div className="w-full px-5 sm:px-8 lg:px-12">
          <div className="max-w-3xl">
            <p className="eyebrow">{t("Financial Outlook")}</p>

            <h2 className="section-title mt-1.5 text-2xl sm:text-3xl lg:text-4xl">
              {t("Transparent Training Costs & Guaranteed Salaries")}
            </h2>

            <p className="section-copy mt-2 text-sm sm:text-base">
              {t(
                "A clear financial comparison of the investment needed in India versus the legal minimum wages earned in German hospitals.",
              )}
            </p>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            {/* Investment Card */}
            <div className="rounded-3xl border border-[#0b192c]/10 bg-white p-5 sm:p-7 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#9b1c31] text-white">
                  <FaGraduationCap />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#0b192c] sm:text-lg">
                    {t("Estimated Investment in India")}
                  </h3>
                  <p className="text-xs text-[#0b192c]/55">
                    {t("A1 through B2 exam completion")}
                  </p>
                </div>
              </div>

              <ul className="mt-5 space-y-3 text-xs sm:text-sm text-[#0b192c]/80">
                <li className="flex justify-between border-b border-[#0b192c]/5 pb-2">
                  <span>{t("A1–B2 Training & Native Tutoring")}</span>
                  <span className="font-bold text-[#0b192c]">
                    ₹35,000 – ₹50,000
                  </span>
                </li>
                <li className="flex justify-between border-b border-[#0b192c]/5 pb-2">
                  <span>{t("Course Books & Healthcare Modules")}</span>
                  <span className="font-bold text-[#0b192c]">
                    ₹14,000 – ₹20,000
                  </span>
                </li>
                <li className="flex justify-between border-b border-[#0b192c]/5 pb-2">
                  <span>{t("Goethe B2 Official Exam Fee")}</span>
                  <span className="font-bold text-[#0b192c]">~₹15,500</span>
                </li>
                <li className="flex justify-between pt-1 font-bold text-sm text-[#9b1c31]">
                  <span>{t("Total Estimated Budget")}</span>
                  <span>₹85,000 – ₹1,20,000</span>
                </li>
              </ul>
            </div>

            {/* Salary Card */}
            <div className="rounded-3xl border border-[#0b192c]/10 bg-white p-5 sm:p-7 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#9b1c31] text-white">
                  <FaEuroSign />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#0b192c] sm:text-lg">
                    {t("Monthly Salaries in Germany")}
                  </h3>
                  <p className="text-xs text-[#0b192c]/55">
                    {t("Under public hospital collective agreement (TVöD-P)")}
                  </p>
                </div>
              </div>

              <div className="mt-5 space-y-4 text-xs sm:text-sm">
                <div className="rounded-xl bg-[#f7f4ef] p-3 border border-[#0b192c]/5">
                  <div className="flex justify-between font-bold text-[#0b192c]">
                    <span>{t("Assistant Nurse (Pflegehilfskraft)")}</span>
                    <span className="text-[#9b1c31]">€2,200 – €2,800/mo</span>
                  </div>
                  <p className="mt-1 text-[11px] text-[#0b192c]/65">
                    {t(
                      "Earned during hospital adaptation before final licensure (~₹2.2–₹2.8 Lakhs/mo).",
                    )}
                  </p>
                </div>

                <div className="rounded-xl bg-[#c19a68]/15 p-3 border border-[#c19a68]/30">
                  <div className="flex justify-between font-bold text-[#0b192c]">
                    <span>{t("Registered Nurse (Pflegefachkraft)")}</span>
                    <span className="text-[#9b1c31]">€3,187 – €4,013+/mo</span>
                  </div>
                  <p className="mt-1 text-[11px] text-[#0b192c]/75">
                    {t(
                      "Base pay plus shift & night allowances (~₹3.2–₹4.0+ Lakhs/mo).",
                    )}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CLINICAL GERMAN / LEARNING FOCUS - Full width */}
      <section className="bg-white py-12 sm:py-16">
        <div className="w-full px-5 sm:px-8 lg:px-12">
          <div className="max-w-3xl">
            <p className="eyebrow">{t("Ward Communication")}</p>

            <h2 className="section-title mt-1.5 text-2xl sm:text-3xl lg:text-4xl">
              {t("Healthcare German Beyond the Textbook")}
            </h2>

            <p className="section-copy mt-2 text-sm sm:text-base">
              {t(
                "Learn the exact language and documentation formats required in German hospitals, clinics, and elderly care wards.",
              )}
            </p>
          </div>

          <div className="mt-8 grid gap-3.5 sm:grid-cols-2 lg:grid-cols-3">
            {LEARNING_FOCUS.map((item, index) => (
              <div
                key={item}
                className="rounded-2xl border border-[#0b192c]/10 bg-[#f7f4ef] p-4 sm:p-5 transition hover:bg-white hover:shadow-sm"
              >
                <span className="text-xs font-bold text-[#c19a68]">
                  {t("Step")} {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-2 text-sm font-bold text-[#0b192c] sm:text-base">
                  {t(item)}
                </h3>
                <p className="mt-1 text-xs text-[#0b192c]/60">
                  {t(
                    "Interactive dialogue drills, audio scenarios, and simulated ward roleplays.",
                  )}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RECOGNITION & 2026 VISAS - Full width */}
      <section className="bg-[#f7f4ef] py-12 sm:py-16">
        <div className="grid w-full gap-8 px-5 sm:px-8 lg:grid-cols-[.9fr_1.1fr] lg:gap-12 lg:px-12">
          <div>
            <p className="eyebrow">{t("2026 Pathways")}</p>

            <h2 className="section-title mt-1.5 text-2xl sm:text-3xl lg:text-4xl">
              {t("Recognition (Anerkennung) & Visa Routes")}
            </h2>

            <p className="section-copy mt-2 text-sm sm:text-base">
              {t(
                "Degrees from India (GNM or B.Sc) are submitted to the German State Examination Office (Landesprüfungsamt) to evaluate equivalence.",
              )}
            </p>

            <div className="mt-5 space-y-3 text-xs sm:text-sm text-[#0b192c]/80">
              <div className="rounded-2xl border border-[#0b192c]/10 bg-white p-4">
                <h4 className="font-bold text-[#0b192c]">
                  {t("Closing the Deficit (Defizitbescheid):")}
                </h4>
                <p className="mt-1 text-xs leading-relaxed text-[#0b192c]/70">
                  <strong>
                    {t("1. Adaptation Course (Anpassungslehrgang):")}
                  </strong>{" "}
                  {t(
                    "Practical onboarding inside a German hospital without a high-stress final exam.",
                  )}
                  <br />
                  <strong>
                    {t("2. Knowledge Exam (Kenntnisprüfung):")}
                  </strong>{" "}
                  {t("Direct oral/practical exam for expedited recognition.")}
                </p>
              </div>

              <div className="rounded-2xl border border-[#0b192c]/10 bg-white p-4">
                <h4 className="font-bold text-[#0b192c]">
                  {t("2026 Visa Options:")}
                </h4>
                <p className="mt-1 text-xs leading-relaxed text-[#0b192c]/70">
                  <strong>{t("• Recognition Partnership:")}</strong>{" "}
                  {t(
                    "Arrive with A2/B1 German + employment offer to complete B2 while working as an assistant.",
                  )}
                  <br />
                  <strong>
                    {t("• Opportunity Card (Chancenkarte):")}
                  </strong>{" "}
                  {t("Points-based route for qualified professionals.")}
                </p>
              </div>
            </div>

            <div className="mt-5 rounded-2xl bg-[#0b192c] p-5 text-white">
              <p className="text-[10px] font-bold uppercase tracking-wider text-[#c19a68]">
                {t("Advisory Notice")}
              </p>
              <p className="mt-1.5 text-xs leading-relaxed text-white/75">
                {t(
                  "Native Connects provides certified language training. Official legal recognition decisions and visas are issued directly by German State Authorities and Embassies.",
                )}
              </p>
            </div>
          </div>

          <div className="space-y-3">
            {PATHWAY_STEPS.map(({ number, title, copy }) => (
              <div
                key={number}
                className="grid gap-3 rounded-2xl border border-[#0b192c]/10 bg-white p-4 sm:grid-cols-[50px_1fr] sm:items-start"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#9b1c31] text-xs font-bold text-white">
                  {number}
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#0b192c] sm:text-base">
                    {t(title)}
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-[#0b192c]/65 sm:text-sm">
                    {t(copy)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RECOGNITION OUTCOMES - Full width */}
      <section className="bg-white py-12 sm:py-16">
        <div className="w-full px-5 sm:px-8 lg:px-12">
          <div className="max-w-3xl">
            <p className="eyebrow">{t("Official Notices")}</p>

            <h2 className="section-title mt-1.5 text-2xl sm:text-3xl lg:text-4xl">
              {t("Understanding Your Recognition Decision")}
            </h2>

            <p className="section-copy mt-2 text-sm sm:text-base">
              {t(
                "The competent state authority compares your syllabus hours against German standards and issues one of these results:",
              )}
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {RECOGNITION_OUTCOMES.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-[#0b192c]/10 bg-[#f7f4ef] p-5 shadow-sm"
              >
                <h3 className="text-sm font-bold text-[#0b192c] sm:text-base">
                  {t(item.title)}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-[#0b192c]/65 sm:text-sm">
                  {t(item.copy)}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* DOCUMENT PREPARATION - Full width */}
      <section className="bg-[#f7f4ef] py-12 sm:py-16">
        <div className="w-full px-5 sm:px-8 lg:px-12">
          <div className="grid gap-8 lg:grid-cols-[.85fr_1.15fr]">
            <div>
              <p className="eyebrow">{t("Document Preparation")}</p>

              <h2 className="section-title mt-1.5 text-2xl sm:text-3xl lg:text-4xl">
                {t("Get Your Dossier Ready Early")}
              </h2>

              <p className="section-copy mt-2 text-sm sm:text-base">
                {t(
                  "Nursing certificates, year-wise marksheets, and registration documents must be apostilled, translated by certified translators, and notarized.",
                )}
              </p>
            </div>

            <div className="grid gap-2.5 sm:grid-cols-2">
              {DOCUMENT_CHECKLIST.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2.5 rounded-xl border border-[#0b192c]/10 bg-white p-3 shadow-sm"
                >
                  <FaCheck
                    className="shrink-0 text-xs text-[#9b1c31]"
                    aria-hidden="true"
                  />
                  <span className="text-xs font-medium text-[#0b192c]/80 sm:text-sm">
                    {t(item)}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* OFFICIAL RESOURCES - Full width */}
      <section className="bg-white py-12 sm:py-16">
        <div className="w-full px-5 sm:px-8 lg:px-12">
          <div className="rounded-3xl border border-[#0b192c]/10 bg-[#f7f4ef] p-6 sm:p-10">
            <p className="eyebrow">{t("Verified Portals")}</p>

            <h2 className="section-title mt-1 text-2xl sm:text-3xl">
              {t("Official German Resources & Guidelines")}
            </h2>

            <p className="section-copy mt-2 max-w-3xl text-xs sm:text-sm">
              {t(
                "We align our coaching with official German government portals. Use these official links to check federal state rules, visa updates, and syllabus criteria.",
              )}
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {SOURCE_LINKS.map((source) => (
                <a
                  key={source.href}
                  href={source.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between gap-3 rounded-xl border border-[#0b192c]/10 bg-white px-4 py-3.5 text-xs font-bold text-[#0b192c] transition hover:border-[#9b1c31] hover:text-[#9b1c31] sm:text-sm"
                >
                  <span>{t(source.label)}</span>
                  <FaArrowRight
                    className="shrink-0 text-xs text-[#9b1c31] transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CALL TO ACTION - Full width */}
      <section className="bg-[#9b1c31] py-14 text-white sm:py-18">
        <div className="w-full px-5 text-center sm:px-8 lg:px-12">
          <div className="mx-auto max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-[#c19a68]">
              {t("Ready to Begin?")}
            </span>

            <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
              {t("Your German Nursing Career Starts Today")}
            </h2>

            <p className="mx-auto mt-3 max-w-xl text-xs leading-relaxed text-white/80 sm:text-sm sm:leading-6">
              {t(
                "Share your current German level and nursing qualification with our team. We will map out your timeline, match you with native tutors, and get you started.",
              )}
            </p>

            <Link
              href="/#contact"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-bold text-[#0b192c] shadow-lg transition hover:bg-[#f7f4ef] focus:outline-none focus:ring-2 focus:ring-white"
            >
              Book a Free Demo
              <FaArrowRight className="text-xs" />
            </Link>
          </div>
        </div>
      </section>

      <ChatWidget />
      <Footer />
    </main>
  );
}

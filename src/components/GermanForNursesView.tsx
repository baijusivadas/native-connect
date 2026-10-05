"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaArrowRight,
  FaCheck,
  FaChevronLeft,
  FaChevronRight,
  FaEuroSign,
  FaFileAlt,
  FaGraduationCap,
  FaLanguage,
  FaLinkedinIn,
  FaStethoscope,
} from "react-icons/fa";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";
import VideoBackground from "@/components/VideoBackground";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  DOCUMENT_CHECKLIST,
  LEARNING_FOCUS,
  LEVELS,
  OVERVIEW_STATS,
  RECOGNITION_OUTCOMES,
  RECRUITMENT_PATHWAY_STEPS,
  SOURCE_LINKS,
  TELC_PFLEGE_BENEFITS,
  TELC_VS_GOETHE_COMPARISON,
  TRAINER_PROFILES,
  VISUAL_STORY,
  WHY_GERMAN_POINTS,
} from "@/constants/germanForNurses";

const STAT_ICONS = {
  FaLanguage,
  FaGraduationCap,
  FaStethoscope,
  FaFileAlt,
} as const;

export default function GermanForNursesView() {
  const { t } = useLanguage();
  const [currentTrainerIdx, setCurrentTrainerIdx] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const activeTrainer = TRAINER_PROFILES[currentTrainerIdx];

  const changeTrainer = (newIndex: number) => {
    if (newIndex === currentTrainerIdx || isFading) return;
    setIsFading(true);
    setTimeout(() => {
      setCurrentTrainerIdx(newIndex);
      setIsFading(false);
    }, 220);
  };

  const nextTrainer = () => {
    const next = (currentTrainerIdx + 1) % TRAINER_PROFILES.length;
    changeTrainer(next);
  };

  const prevTrainer = () => {
    const prev = (currentTrainerIdx - 1 + TRAINER_PROFILES.length) % TRAINER_PROFILES.length;
    changeTrainer(prev);
  };

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setCurrentTrainerIdx((prev) => (prev + 1) % TRAINER_PROFILES.length);
        setIsFading(false);
      }, 220);
    }, 7000);
    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f7f4ef] text-[#0b192c]">
      <Navbar />

      {/* HERO SECTION - Full width with tight vertical padding */}
      <section className="relative overflow-hidden bg-[#0b192c] text-white">
        <VideoBackground
          videoSrc={[
            "/video/Nurse_working_in_Germany_20260927155957.mp4",
            "/video/nurse.mp4",
          ]}
          posterSrc="/img/Student_working_as_hospital_nurse.jpg"
          overlayOpacity={0.18}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b192c]/80 via-[#0b192c]/45 to-[#0b192c]/20" />

        <div className="relative w-full px-5 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-20">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#9b1c31] px-3.5 py-1 text-xs font-bold text-white shadow-md">
              <span>🩺</span> {t("Language Training + Certified Exam Prep + Hospital Placement")}
            </div>

            <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl leading-[1.15]">
              {t(
                "Build your German. Secure your nursing career in Germany.",
              )}
            </h1>

            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-white/75 sm:text-base sm:leading-7">
              {t(
                "We don't just teach German — we provide a complete pathway. Intensive clinical training, dedicated preparation for TELC Deutsch B1-B2 Pflege & Goethe exams, and direct hospital recruitment with zero placement fees.",
              )}
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3.5">
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#9b1c31] px-5 py-3 text-sm font-bold text-white shadow-lg shadow-[#9b1c31]/30 transition hover:bg-[#85172a] focus:outline-none focus:ring-2 focus:ring-[#c19a68]"
              >
                {t("Book a Free Demo & Assessment")}
                <FaArrowRight className="text-xs" />
              </Link>

              <a
                href="#placement"
                className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:border-[#c19a68] hover:text-[#c19a68] focus:outline-none focus:ring-2 focus:ring-[#c19a68]"
              >
                {t("Training & Placement Pathway")}
              </a>

              <a
                href="#telc-goethe"
                className="inline-flex items-center justify-center rounded-xl border border-[#c19a68]/40 px-5 py-3 text-sm font-semibold text-[#c19a68] transition hover:bg-[#c19a68]/10 focus:outline-none focus:ring-2 focus:ring-[#c19a68]"
              >
                {t("TELC vs Goethe Guide")}
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
            <p className="eyebrow">{t("End-to-End Support")}</p>

            <h2 className="section-title mt-1.5 text-2xl sm:text-3xl lg:text-4xl">
              {t("Training, Certification & Placement in one place")}
            </h2>

            <p className="section-copy mt-3">
              {t(
                "Learning German is the foundation. We pair rigorous language instruction with TELC/Goethe exam strategies and verified German hospital hiring partnerships.",
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
                  <strong>{t("Ethical Recruitment Guarantee:")}</strong>{" "}
                  {t(
                    "Nursing candidates are placed with verified German hospitals with 0 recruitment fees. All costs are covered directly by healthcare employers under German labor agreements.",
                  )}
                </p>
              </div>
            </div>
          </div>

          {/* VISUAL STORY CAROUSEL */}
          <div className="self-start overflow-hidden rounded-3xl border border-[#0b192c]/10 bg-white shadow-lg">
            <div
              className="flex aspect-[16/10] snap-x snap-mandatory overflow-x-auto scrollbar-hide"
              role="region"
              aria-label={t("Germany journey visual story")}
              aria-roledescription="carousel"
              tabIndex={0}
            >
              {VISUAL_STORY.map(({ src, caption }) => (
                <figure
                  key={caption}
                  className="relative min-w-full snap-center"
                >
                  <Image
                    src={src}
                    alt={caption}
                    fill
                    sizes="(max-width: 1024px) 100vw, 45vw"
                    className="object-cover"
                  />

                  <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent px-5 pb-5 pt-12 text-xs font-semibold text-white sm:text-sm">
                    {t(caption)}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* END-TO-END PLACEMENT PATHWAY SECTION */}
      <section id="placement" className="scroll-mt-16 bg-[#0b192c] py-14 text-white sm:py-20">
        <div className="w-full px-5 sm:px-8 lg:px-12">
          <div className="max-w-3xl">
            <p className="text-xs font-extrabold uppercase tracking-[.2em] text-[#c19a68]">{t("Complete Career Roadmap")}</p>
            <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">
              {t("From Language Beginner to Working Nurse in Germany")}
            </h2>
            <p className="mt-3 text-sm text-white/75 sm:text-base leading-relaxed">
              {t(
                "We don't leave you stranded after A1 or B2. Native Connects handles the entire lifecycle from classroom training to your first day on a German hospital ward.",
              )}
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {RECRUITMENT_PATHWAY_STEPS.map((step) => (
              <div
                key={step.step}
                className="relative rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur transition hover:border-[#c19a68]/60 hover:bg-white/10"
              >
                <span className="text-2xl font-bold text-[#c19a68]">{step.step}</span>
                <h3 className="mt-3 text-base font-bold text-white">{t(step.title)}</h3>
                <p className="mt-2 text-xs leading-5 text-white/65">{t(step.desc)}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-2xl border border-[#c19a68]/30 bg-white/5 p-5 sm:p-6 text-xs sm:text-sm flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-white/80">
              <strong className="text-[#c19a68]">{t("Ready to explore open nursing positions in Germany?")}</strong>{" "}
              {t("Talk with our placement counselors and evaluate your qualification recognition.")}
            </div>
            <Link
              href="/#contact"
              className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-[#9b1c31] px-5 py-2.5 text-xs font-bold text-white shadow hover:bg-[#85172a] transition"
            >
              {t("Schedule Consultation")}
              <FaArrowRight className="text-[10px]" />
            </Link>
          </div>
        </div>
      </section>

      {/* TELC VS GOETHE EXAM COMPARISON & TELC PFLEGE GUIDE */}
      <section id="telc-goethe" className="scroll-mt-16 bg-white py-14 sm:py-20">
        <div className="w-full px-5 sm:px-8 lg:px-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#9b1c31]/10 px-3 py-1 text-xs font-bold text-[#9b1c31] border border-[#9b1c31]/20">
              {t("Exam Intelligence & Guidance")}
            </div>
            <h2 className="section-title mt-2 text-2xl sm:text-3xl lg:text-4xl">
              {t("TELC vs Goethe: Why TELC Pflege is Heavily Advised for Nurses")}
            </h2>
            <p className="section-copy mt-3 text-sm sm:text-base">
              {t(
                "While both standard Goethe B2 and TELC B2 are legally recognized by the German government for visa issuance, telc Deutsch B1-B2 Pflege has become the preferred choice for international nurses and German hospitals.",
              )}
            </p>
          </div>

          {/* Key Advantages of TELC Pflege */}
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {TELC_PFLEGE_BENEFITS.map((b) => (
              <div
                key={b.title}
                className="rounded-2xl border border-[#c19a68]/30 bg-[#f7f4ef] p-5 shadow-sm"
              >
                <span className="text-xl">⭐</span>
                <h3 className="mt-2 text-sm font-bold text-[#0b192c]">{t(b.title)}</h3>
                <p className="mt-1.5 text-xs leading-relaxed text-[#0b192c]/70">{t(b.desc)}</p>
              </div>
            ))}
          </div>

          {/* Side-by-Side Comparison Table / Cards */}
          <div className="mt-10 overflow-hidden rounded-3xl border border-[#0b192c]/10 bg-[#f7f4ef] p-6 sm:p-8">
            <h3 className="text-lg font-bold text-[#0b192c]">
              {t("Detailed Comparison: Goethe-Zertifikat vs. TELC")}
            </h3>

            <div className="mt-6 space-y-4">
              {TELC_VS_GOETHE_COMPARISON.map((comp) => (
                <div
                  key={comp.category}
                  className="rounded-2xl border border-[#0b192c]/10 bg-white p-5 shadow-sm"
                >
                  <p className="text-xs font-bold uppercase tracking-wider text-[#9b1c31]">
                    {t(comp.category)}
                  </p>
                  <div className="mt-3 grid gap-4 md:grid-cols-2">
                    <div className="rounded-xl bg-[#f7f4ef]/60 p-3.5 border border-[#0b192c]/5">
                      <span className="text-xs font-bold text-[#0b192c] flex items-center gap-1.5">
                        <span className="h-2 w-2 rounded-full bg-slate-500" />
                        Goethe-Zertifikat
                      </span>
                      <p className="mt-1.5 text-xs leading-relaxed text-[#0b192c]/75">
                        {t(comp.goethe)}
                      </p>
                    </div>

                    <div className="rounded-xl bg-[#c19a68]/15 p-3.5 border border-[#c19a68]/40">
                      <span className="text-xs font-bold text-[#9b1c31] flex items-center gap-1.5">
                        <span className="h-2 w-2 rounded-full bg-[#9b1c31]" />
                        TELC (telc Deutsch B1-B2 Pflege)
                      </span>
                      <p className="mt-1.5 text-xs leading-relaxed text-[#0b192c]/85">
                        {t(comp.telc)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* A1-B2 ROADMAP - Full width */}
      <section id="roadmap" className="scroll-mt-16 bg-[#f7f4ef] py-12 sm:py-16">
        <div className="w-full px-5 sm:px-8 lg:px-12">
          <div className="max-w-3xl">
            <p className="eyebrow">{t("A1 → B2 Progression")}</p>

            <h2 className="section-title mt-1.5 text-2xl sm:text-3xl lg:text-4xl">
              {t("Structured course roadmap")}
            </h2>

            <p className="section-copy mt-2 text-sm sm:text-base">
              {t("The listed A1-A2, B1 and B2 stage estimates add up to")}{" "}
              <strong>{t("16 to 22 months")}</strong>
              {t(
                ". This is a planning estimate. Your pace depends on your schedule, practice, and whether you choose regular or intensive evening batches.",
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
                {t("Exam planning")}
              </p>
              <h4 className="mt-1 text-sm font-bold text-[#0b192c]">
                {t("Check exam requirements first")}
              </h4>
              <p className="mt-1.5 text-xs leading-relaxed text-[#0b192c]/75 sm:text-sm">
                {t(
                  "Confirm the accepted certificate and level with the relevant recognition authority or employer before booking an exam.",
                )}
              </p>
            </div>

            <div className="rounded-2xl border border-[#0b192c]/10 bg-[#f7f4ef] p-5">
              <p className="text-xs font-bold uppercase tracking-wider text-[#9b1c31]">
                {t("Learning around shift work")}
              </p>
              <h4 className="mt-1 text-sm font-bold text-[#0b192c]">
                {t("Ask about available schedules")}
              </h4>
              <p className="mt-1.5 text-xs leading-relaxed text-[#0b192c]/75 sm:text-sm">
                {t(
                  "Ask which class times and practice materials are available for your program.",
                )}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* COURSE AND CAREER COST PLANNING */}
      <section className="bg-[#f7f4ef] py-12 sm:py-16">
        <div className="w-full px-5 sm:px-8 lg:px-12">
          <div className="max-w-3xl">
            <p className="eyebrow">{t("Course and career planning")}</p>

            <h2 className="section-title mt-1.5 text-2xl sm:text-3xl lg:text-4xl">
              {t("Plan your costs and employment questions")}
            </h2>

            <p className="section-copy mt-2 text-sm sm:text-base">
              {t(
                "Course fees and employment pay vary by provider, course format, exam, employer, role, experience, hours and location. Request a current itemized course quote and confirm compensation directly with employers.",
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

      {/* TRAINER PROFILES CAROUSEL / TRANSITION */}
      <section
        className="bg-white py-20 sm:py-24"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="w-full px-5 sm:px-8 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#9b1c31]/10 px-3.5 py-1 text-xs font-bold text-[#9b1c31]">
                <span>👩‍🏫</span> {t("Native & Certified Educators")}
              </div>
              <h2 className="section-title mt-3">
                {t("Learn German with structured, practical guidance.")}
              </h2>
              <p className="section-copy">
                {t(
                  "Our German training is led by certified, experienced educators who combine structured language learning with real-world clinical and professional communication.",
                )}
              </p>
            </div>
          </div>

          {/* Trainer Selector Tabs */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3">
            {TRAINER_PROFILES.map((trainer, idx) => {
              const isSelected = idx === currentTrainerIdx;
              return (
                <button
                  key={trainer.name}
                  type="button"
                  onClick={() => changeTrainer(idx)}
                  className={`flex items-center gap-3.5 rounded-2xl p-3.5 text-left transition-all duration-300 ${
                    isSelected
                      ? "border-2 border-[#9b1c31] bg-[#f7f4ef] shadow-md ring-2 ring-[#9b1c31]/10"
                      : "border border-[#0b192c]/10 bg-white hover:bg-[#f7f4ef]/60 hover:border-[#c19a68]/40"
                  }`}
                >
                  <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-xl border border-[#0b192c]/10 bg-[#0b192c]/5">
                    <Image
                      key={`thumb-${trainer.name}-${trainer.image}`}
                      src={trainer.image}
                      alt={trainer.name}
                      fill
                      sizes="48px"
                      className="object-cover"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-bold text-[#0b192c]">
                      {trainer.name}
                    </p>
                    <p className="truncate text-xs font-semibold text-[#9b1c31]">
                      {t(trainer.certification)}
                    </p>
                  </div>
                  {isSelected && (
                    <span className="h-2.5 w-2.5 rounded-full bg-[#9b1c31] shrink-0" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Featured Active Trainer Profile Card with Transition */}
          <div className="mt-6">
            <article
              className={`grid overflow-hidden rounded-[2rem] border border-[#0b192c]/10 bg-[#f7f4ef] shadow-md lg:grid-cols-[.75fr_1.25fr] transition-all duration-300 ease-out ${
                isFading
                  ? "opacity-0 translate-y-2 scale-[0.995]"
                  : "opacity-100 translate-y-0 scale-100"
              }`}
            >
              {/* Photo & Badge */}
              <div className="relative min-h-[340px] sm:min-h-[400px] lg:min-h-full bg-[#0b192c] overflow-hidden">
                <Image
                  key={`hero-${activeTrainer.name}-${activeTrainer.image}`}
                  src={activeTrainer.image}
                  alt={`${activeTrainer.name}, German language tutor`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b192c]/90 via-transparent to-black/10" />
                <div className="absolute inset-x-5 bottom-5 rounded-2xl border border-white/20 bg-[#0b192c]/85 p-4 text-white backdrop-blur-md shadow-lg">
                  <p className="text-xs font-bold uppercase tracking-[.18em] text-[#c19a68]">
                    {t("Trainer Profile")}
                  </p>
                  <p className="mt-1 text-sm font-semibold text-white/90">
                    {activeTrainer.name}
                  </p>
                </div>
              </div>

              {/* Information & Qualifications */}
              <div className="p-6 sm:p-9 lg:p-11">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0b192c]">
                      {activeTrainer.name}
                    </h3>
                    <p className="mt-1 text-sm sm:text-base font-semibold text-[#9b1c31]">
                      {t(activeTrainer.role)}
                    </p>
                  </div>
                  <span className="rounded-full border border-[#c19a68]/50 bg-[#c19a68]/15 px-3.5 py-1.5 text-xs font-bold text-[#0b192c]">
                    {t(activeTrainer.certification)}
                  </span>
                </div>

                <p className="mt-5 text-sm sm:text-base leading-relaxed text-[#0b192c]/75">
                  {t(activeTrainer.summary)}
                </p>

                <div className="mt-7 grid gap-6 sm:grid-cols-2">
                  <div className="rounded-2xl border border-[#0b192c]/5 bg-white/70 p-5">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#9b1c31]">
                      {t("Experience & Practice")}
                    </h4>
                    <ul className="mt-3.5 space-y-2.5">
                      {activeTrainer.experience.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2.5 text-xs sm:text-sm leading-5 text-[#0b192c]/75"
                        >
                          <FaCheck
                            className="mt-1 shrink-0 text-[#c19a68]"
                            aria-hidden="true"
                          />
                          <span>{t(item)}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="rounded-2xl border border-[#0b192c]/5 bg-white/70 p-5">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#9b1c31]">
                      {t("Education & Credentials")}
                    </h4>
                    <ul className="mt-3.5 space-y-2.5">
                      {activeTrainer.education.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2.5 text-xs sm:text-sm leading-5 text-[#0b192c]/75"
                        >
                          <FaCheck
                            className="mt-1 shrink-0 text-[#c19a68]"
                            aria-hidden="true"
                          />
                          <span>{t(item)}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap items-center gap-3.5 pt-2 border-t border-[#0b192c]/8">
                  {activeTrainer.linkedin ? (
                    <a
                      href={activeTrainer.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl bg-[#0b192c] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#142945] focus:outline-none focus:ring-2 focus:ring-[#9b1c31]"
                    >
                      <FaLinkedinIn aria-hidden="true" />
                      {t("View LinkedIn Profile")}
                    </a>
                  ) : null}

                  <Link
                    href="/#contact"
                    className="inline-flex items-center gap-2 rounded-xl bg-[#9b1c31] px-5 py-3 text-sm font-bold text-white shadow-md transition hover:bg-[#85172a] focus:outline-none focus:ring-2 focus:ring-[#c19a68]"
                  >
                    {t("Book a Session with Native Connects")}
                    <FaArrowRight className="text-xs" />
                  </Link>
                </div>
              </div>
            </article>

            {/* Pagination Dots */}
            <div className="mt-5 flex items-center justify-center gap-2">
              {TRAINER_PROFILES.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => changeTrainer(idx)}
                  aria-label={`Go to trainer ${idx + 1}`}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    idx === currentTrainerIdx
                      ? "w-8 bg-[#9b1c31]"
                      : "w-2.5 bg-[#0b192c]/20 hover:bg-[#0b192c]/40"
                  }`}
                />
              ))}
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
                "Practise language for common clinical situations. Responsibilities and documentation standards vary by role, employer and region.",
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
                "The competent authority reviews your documents and decides whether requirements are met. Possible outcomes and measures depend on your case.",
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
                  "Translation, certification and authentication requirements vary by document and authority. Check the current official checklist before ordering translations or apostilles.",
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
                "These official resources are starting points. Confirm current requirements with the authority responsible for your intended German state and visa route.",
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
              {t("Plan your German nursing pathway")}
            </h2>

            <p className="mx-auto mt-3 max-w-xl text-xs leading-relaxed text-white/80 sm:text-sm sm:leading-6">
              {t(
                "Tell us your German level, qualification and learning goals. We can explain our language courses; employers and authorities decide recognition, employment and visa outcomes.",
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

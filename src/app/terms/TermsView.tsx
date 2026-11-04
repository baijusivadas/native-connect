"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CONTACT_DETAILS } from "@/constants/site";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  FaFileContract,
  FaUndoAlt,
  FaPhoneAlt,
  FaCheckCircle,
  FaExclamationCircle,
  FaUserShield,
} from "react-icons/fa";

export default function TermsView() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen bg-[#f7f4ef] text-[#0b192c]">
      <Navbar />

      {/* Header */}
      <section className="bg-[#0b192c] py-10 text-white sm:py-14">
        <div className="w-full px-5 sm:px-8 lg:px-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#9b1c31]/30 px-3 py-1 text-xs font-bold text-[#c19a68] border border-[#9b1c31]/50">
              <FaFileContract /> {t("Terms, Conditions & Refunds")}
            </div>
            <h1 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              {t("Terms of Service & Course Policy")}
            </h1>
            <p className="mt-2 text-xs sm:text-sm leading-relaxed text-white/75 sm:text-base">
              {t("Effective Date: October 2026. These Terms govern your enrollment in language courses, exam preparation (Goethe / TELC), and related student support services provided by Native Connects promoted by Brahmas (“Native Connects”).")}
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-10 sm:py-14">
        <div className="w-full px-5 sm:px-8 lg:px-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_340px]">
            {/* Main Terms Text */}
            <div className="space-y-7 rounded-3xl border border-[#0b192c]/10 bg-white p-5 shadow-sm sm:p-8">
              
              {/* 1. Entity Information */}
              <div>
                <h2 className="text-2xl font-bold text-[#0b192c]">{t("1. Company & Entity Information")}</h2>
                <p className="mt-3 text-sm leading-7 text-[#0b192c]/75">
                  {t("These terms constitute a legally binding agreement between you (“Student”, “User”, or “Candidate”) and Native Connects promoted by Brahmas (“Native Connects”), having its registered office at:")}
                </p>
                <div className="mt-3 rounded-2xl bg-[#f7f4ef] p-4 text-sm text-[#0b192c]/85 border border-[#0b192c]/10 space-y-1">
                  <p><strong>{t("Registered Corporate Office:")}</strong> Level 4, Infopark Technology Centre, Infopark Phase II, Kochi, Kerala - 682042, India</p>
                  <p><strong>{t("European Operations Desk:")}</strong> Kaiserstraße 14, 60311 Frankfurt am Main, Germany</p>
                  <p><strong>{t("Support Helpline:")}</strong> +91 8590832484 | <strong>{t("Email:")}</strong> <a href={`mailto:${CONTACT_DETAILS.supportEmail}`} className="text-[#9b1c31] font-semibold underline">{CONTACT_DETAILS.supportEmail}</a></p>
                </div>
              </div>

              {/* 2. Course Enrollment & Live Classes */}
              <div>
                <h2 className="text-2xl font-bold text-[#0b192c]">{t("2. Course Enrollment, Batches & Attendance")}</h2>
                <ul className="mt-3 list-disc pl-5 space-y-2.5 text-sm leading-7 text-[#0b192c]/75">
                  <li><strong>{t("Class Delivery:")}</strong> {t("Live online interactive coaching led by native and certified language tutors across CEFR levels (A1, A2, B1, B2, C1).")}</li>
                  <li><strong>{t("Batch Allocation & Sizing:")}</strong> {t("Batch schedules are established upon admission. Micro-batches maintain restricted student-to-tutor ratios (typically 4 to 8 learners for general courses and 3 to 5 for intensive nursing B2 batches).")}</li>
                  <li><strong>{t("Attendance & Active Participation:")}</strong> {t("A minimum of 80% attendance in live sessions and submission of homework modules is recommended for consistent learning progress and exam readiness.")}</li>
                  <li><strong>{t("Batch Transfers:")}</strong> {t("Students facing medical or professional shifts may request one batch schedule transfer per CEFR level without penalty, subject to batch seat availability.")}</li>
                </ul>
              </div>

              {/* 3. Language Training & Learner Guidance */}
              <div>
                <h2 className="text-2xl font-bold text-[#0b192c]">{t("3. Language Training & Learner Guidance")}</h2>
                <div className="mt-3 rounded-2xl bg-[#f7f4ef] p-5 border border-[#0b192c]/10 space-y-3 text-sm leading-7 text-[#0b192c]/80">
                  <p>
                    <strong>{t("Structured Language Learning, Exam Preparation & Practical Communication:")}</strong>{" "}
                    {t("Native Connects provides language training, TELC/Goethe exam preparation, speaking practice, guided self-study and tutor feedback according to the selected course. Healthcare-focused German programs include relevant vocabulary, patient communication, handover roleplays and German documentation exercises.")}
                  </p>
                  <p>
                    <strong>{t("Language & Communication Support:")}</strong>{" "}
                    {t("Students develop speaking, listening, reading and writing skills through structured lessons, practical activities, mock examinations and simulated workplace conversations.")}
                  </p>
                  <p>
                    <strong>{t("General Information & Guidance:")}</strong>{" "}
                    {t("Our team shares general information on recognition, employment and visa requirements to help students understand possible next steps. This guidance does not include arranging recruitment, employer interviews or job placements, preparing professional recognition applications, or filing visa applications.")}
                  </p>
                  <p>
                    <strong>{t("Independent Decisions & Outcomes:")}</strong>{" "}
                    {t("Examination results are determined by the relevant examination bodies. Professional recognition, employment offers and visa decisions rest with the relevant authorities and employers. Native Connects does not guarantee examination results, professional recognition, employment or visa approval.")}
                  </p>
                </div>
              </div>

              {/* 4. Language Examination Preparation (TELC & Goethe) */}
              <div>
                <h2 className="text-2xl font-bold text-[#0b192c]">{t("4. Examination Preparation (TELC & Goethe)")}</h2>
                <p className="mt-3 text-sm leading-7 text-[#0b192c]/75">
                  {t("Our curriculum includes comprehensive mock exams and preparation for officially recognized certifications:")}
                </p>
                <ul className="mt-3 list-disc pl-5 space-y-2 text-sm leading-7 text-[#0b192c]/75">
                  <li><strong>{t("TELC Deutsch B1-B2 Pflege:")}</strong> {t("Specialized healthcare German focusing on clinical handovers, care logs, doctor-patient dialogues, and dual-level safety net scoring.")}</li>
                  <li><strong>{t("Goethe-Zertifikat:")}</strong> {t("Globally recognized academic and general CEFR certification.")}</li>
                  <li><strong>{t("Independent Exam Fees:")}</strong> {t("Unless expressly included in an institutional sponsorship package, official examination booking fees (payable directly to TELC test centers or Goethe-Institut) are separate from course tuition.")}</li>
                </ul>
              </div>

              {/* 5. REFUND & CANCELLATION POLICY */}
              <div id="refund-policy" className="scroll-mt-24 rounded-3xl bg-[#f7f4ef] p-6 sm:p-8 border-2 border-[#9b1c31]/30">
                <div className="flex items-center gap-3 text-[#9b1c31]">
                  <FaUndoAlt className="text-2xl" />
                  <h2 className="text-2xl font-bold text-[#0b192c]">{t("5. Refund & Cancellation Policy")}</h2>
                </div>
                
                <p className="mt-3 text-sm leading-relaxed text-[#0b192c]/80">
                  {t("We believe in complete transparency and student satisfaction. Our refund and cancellation guidelines are structured as follows:")}
                </p>

                <div className="mt-5 space-y-4 text-xs sm:text-sm text-[#0b192c]/85">
                  <div className="rounded-xl bg-white p-4 border border-[#0b192c]/10">
                    <div className="flex items-center gap-2 font-bold text-[#0b192c]">
                      <FaCheckCircle className="text-emerald-600" />
                      <span>{t("7-Day Cooling-Off Period (100% Tuition Refund)")}</span>
                    </div>
                    <p className="mt-1.5 text-xs text-[#0b192c]/70 leading-5">
                      {t("If within the first 7 calendar days from batch kickoff (or after attending up to 2 live classes, whichever comes first) you determine the course is not right for you, you may request a 100% refund of tuition fees without questions asked.")}
                    </p>
                  </div>

                  <div className="rounded-xl bg-white p-4 border border-[#0b192c]/10">
                    <div className="flex items-center gap-2 font-bold text-[#0b192c]">
                      <FaCheckCircle className="text-emerald-600" />
                      <span>{t("Pro-Rata Refund / Batch Pause (Between Days 8 to 21)")}</span>
                    </div>
                    <p className="mt-1.5 text-xs text-[#0b192c]/70 leading-5">
                      {t("If unexpected personal, academic, or medical emergencies arise between Day 8 and Day 21, you may either pause your enrollment for up to 6 months with guaranteed re-entry into a new batch, or request a pro-rated refund based on unconsumed class hours (minus nominal administrative setup fees of 10%).")}
                    </p>
                  </div>

                  <div className="rounded-xl bg-white p-4 border border-[#0b192c]/10">
                    <div className="flex items-center gap-2 font-bold text-[#0b192c]">
                      <FaExclamationCircle className="text-amber-600" />
                      <span>{t("Non-Refundable Components")}</span>
                    </div>
                    <p className="mt-1.5 text-xs text-[#0b192c]/70 leading-5">
                      {t("Direct third-party outlays (e.g., physical textbook shipping and delivery charges, or fees paid directly to official exam centers like TELC/Goethe) are non-refundable once fulfilled.")}
                    </p>
                  </div>

                  <div className="rounded-xl bg-white p-4 border border-[#0b192c]/10">
                    <div className="flex items-center gap-2 font-bold text-[#0b192c]">
                      <FaCheckCircle className="text-emerald-600" />
                      <span>{t("Refund Processing Timeframe")}</span>
                    </div>
                    <p className="mt-1.5 text-xs text-[#0b192c]/70 leading-5">
                      {t("Approved refunds are initiated within 24 business hours and credited back to the original payment method (Bank account / UPI / Credit Card) within 5 to 7 working days.")}
                    </p>
                  </div>
                </div>

                <div className="mt-5 rounded-xl bg-[#9b1c31]/10 p-3 text-xs text-[#9b1c31] font-semibold">
                  {t("To request a refund or cancellation, email")} <a href={`mailto:${CONTACT_DETAILS.supportEmail}`} className="underline font-bold">{CONTACT_DETAILS.supportEmail}</a> {t("with your Student ID and transaction receipt.")}
                </div>
              </div>

              {/* 6. Grievance Redressal & Complaint Route */}
              <div id="grievance" className="scroll-mt-24 rounded-2xl bg-[#f7f4ef] p-6 border border-[#0b192c]/10">
                <div className="flex items-center gap-3 text-[#9b1c31]">
                  <FaUserShield className="text-2xl" />
                  <h2 className="text-xl font-bold text-[#0b192c]">{t("6. Grievance Redressal & Complaint Route")}</h2>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-[#0b192c]/75">
                  {t("We are committed to prompt resolution of any student dissatisfaction, tutor replacement requests, batch schedule conflicts, or billing questions. Please follow our formal escalation ladder:")}
                </p>
                <div className="mt-4 space-y-3 text-xs sm:text-sm text-[#0b192c]/80">
                  <div className="p-3 bg-white rounded-xl border border-[#0b192c]/10">
                    <strong>{t("Level 1 — Student Support Desk:")}</strong> {t("Contact your dedicated batch coordinator or email")} <a href={`mailto:${CONTACT_DETAILS.supportEmail}`} className="text-[#9b1c31] font-bold underline">{CONTACT_DETAILS.supportEmail}</a> ({t("Turnaround: Within 24 hours")}).
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-[#0b192c]/10">
                    <strong>{t("Level 2 — Grievance Redressal Officer:")}</strong> {t("If unsatisfied with Level 1 resolution, escalate directly to our Compliance & Student Welfare Officer at")} <a href={`mailto:${CONTACT_DETAILS.grievanceEmail}`} className="text-[#9b1c31] font-bold underline">{CONTACT_DETAILS.grievanceEmail}</a> ({t("Formal decision within 48-72 business hours")}).
                  </div>
                </div>
              </div>

              {/* 7. Code of Conduct & Intellectual Property */}
              <div>
                <h2 className="text-2xl font-bold text-[#0b192c]">{t("7. Intellectual Property & Code of Conduct")}</h2>
                <p className="mt-3 text-sm leading-7 text-[#0b192c]/75">
                  {t("All course materials, customized clinical German worksheets, mock exams, audio files, and teaching slides remain the proprietary intellectual property of Native Connects promoted by Brahmas. Materials are licensed solely for individual student study and may not be redistributed, resold, or published online without prior written consent.")}
                </p>
              </div>

            </div>

            {/* Quick Links & Summary Card */}
            <aside className="space-y-6">
              <div className="rounded-3xl border border-[#0b192c]/10 bg-white p-6 shadow-sm">
                <h3 className="text-base font-bold text-[#0b192c]">{t("Quick Summary")}</h3>
                <ul className="mt-4 space-y-3 text-xs text-[#0b192c]/75">
                  <li className="flex items-start gap-2">
                    <FaCheckCircle className="mt-0.5 text-emerald-600 shrink-0" />
                    <span>{t("7-Day 100% money back cooling-off guarantee")}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheckCircle className="mt-0.5 text-emerald-600 shrink-0" />
                    <span>{t("Live interactive classes with native & certified tutors")}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheckCircle className="mt-0.5 text-emerald-600 shrink-0" />
                    <span>{t("Batch pause and rescheduling flexibility")}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheckCircle className="mt-0.5 text-emerald-600 shrink-0" />
                    <span>{t("TELC Pflege & Goethe exam aligned preparation")}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheckCircle className="mt-0.5 text-emerald-600 shrink-0" />
                    <span>{t("Direct grievance redressal within 48 hours")}</span>
                  </li>
                </ul>

                <div className="mt-6 border-t border-[#0b192c]/10 pt-4 space-y-2">
                  <a
                    href={`mailto:${CONTACT_DETAILS.supportEmail}`}
                    className="block text-center rounded-xl bg-[#9b1c31] py-2.5 text-xs font-bold text-white transition hover:bg-[#85172a]"
                  >
                    {t("Contact Support Desk")}
                  </a>
                  <Link
                    href="/privacy-policy"
                    className="block text-center rounded-xl border border-[#0b192c]/20 py-2.5 text-xs font-bold text-[#0b192c] transition hover:bg-[#0b192c]/5"
                  >
                    {t("Read Privacy Policy")}
                  </Link>
                </div>
              </div>

              <div className="rounded-3xl border border-[#0b192c]/10 bg-[#f7f4ef] p-6 text-xs">
                <div className="flex items-center gap-2 text-[#9b1c31] font-bold uppercase tracking-wider">
                  <FaPhoneAlt />
                  <span>{t("Direct Help Line")}</span>
                </div>
                <p className="mt-2 text-sm font-bold text-[#0b192c]">{CONTACT_DETAILS.phone}</p>
                <p className="mt-1 text-[11px] text-[#0b192c]/60">{CONTACT_DETAILS.hours}</p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

import { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CONTACT_DETAILS, LEGAL_ENTITY_NAME, SITE_NAME } from "@/constants/site";
import {
  FaFileContract,
  FaUndoAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaCheckCircle,
  FaExclamationCircle,
  FaUserShield,
} from "react-icons/fa";

export const metadata: Metadata = {
  title: "Terms of Service & Refund Policy | Native Connects",
  description:
    "Official Course Terms, Student Code of Conduct, Refund & Cancellation Policy, and Grievance Resolution for Native Connects.",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#f7f4ef] text-[#0b192c]">
      <Navbar />

      {/* Header */}
      <section className="bg-[#0b192c] py-16 text-white sm:py-20">
        <div className="w-full px-5 sm:px-8 lg:px-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#9b1c31]/30 px-3 py-1 text-xs font-bold text-[#c19a68] border border-[#9b1c31]/50">
              <FaFileContract /> Terms, Conditions & Refunds
            </div>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">
              Terms of Service & Course Policy
            </h1>
            <p className="mt-3 text-sm leading-relaxed text-white/75 sm:text-base">
              Effective Date: October 2026. These Terms govern your enrollment in language courses, exam preparation (Goethe / TELC), and career placement programs provided by {LEGAL_ENTITY_NAME} (&ldquo;{SITE_NAME}&rdquo;).
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-14 sm:py-20">
        <div className="w-full px-5 sm:px-8 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-[1fr_340px]">
            {/* Main Terms Text */}
            <div className="space-y-10 rounded-3xl border border-[#0b192c]/10 bg-white p-7 shadow-sm sm:p-10">
              
              {/* 1. Entity Information */}
              <div>
                <h2 className="text-2xl font-bold text-[#0b192c]">1. Company & Entity Information</h2>
                <p className="mt-3 text-sm leading-7 text-[#0b192c]/75">
                  These terms constitute a legally binding agreement between you (&ldquo;Student&rdquo;, &ldquo;User&rdquo;, or &ldquo;Candidate&rdquo;) and <strong>{LEGAL_ENTITY_NAME}</strong> (&ldquo;{SITE_NAME}&rdquo;), having its registered office at:
                </p>
                <div className="mt-3 rounded-2xl bg-[#f7f4ef] p-4 text-sm text-[#0b192c]/85 border border-[#0b192c]/10">
                  <p><strong>Registered Corporate Office:</strong> {CONTACT_DETAILS.registeredOffice.line1}, {CONTACT_DETAILS.registeredOffice.city}, {CONTACT_DETAILS.registeredOffice.state} - {CONTACT_DETAILS.registeredOffice.postalCode}, India</p>
                  <p><strong>European Operations Desk:</strong> {CONTACT_DETAILS.europeanOffice.line1}, {CONTACT_DETAILS.europeanOffice.postalCode} {CONTACT_DETAILS.europeanOffice.city}, Germany</p>
                  <p><strong>Support Helpline:</strong> {CONTACT_DETAILS.phone} | <strong>Email:</strong> {CONTACT_DETAILS.supportEmail}</p>
                </div>
              </div>

              {/* 2. Course Enrollment & Live Classes */}
              <div>
                <h2 className="text-2xl font-bold text-[#0b192c]">2. Course Enrollment, Batches & Attendance</h2>
                <ul className="mt-3 list-disc pl-5 space-y-2.5 text-sm leading-7 text-[#0b192c]/75">
                  <li><strong>Class Delivery:</strong> Live online interactive coaching led by native and certified language tutors across CEFR levels (A1, A2, B1, B2, C1).</li>
                  <li><strong>Batch Allocation & Sizing:</strong> Batch schedules are established upon admission. Micro-batches maintain restricted student-to-tutor ratios (typically 4 to 8 learners for general courses and 3 to 5 for intensive nursing B2 batches).</li>
                  <li><strong>Attendance & Active Participation:</strong> A minimum of 80% attendance in live sessions and submission of homework modules is recommended for exam readiness and placement eligibility.</li>
                  <li><strong>Batch Transfers:</strong> Students facing medical or professional shifts may request one batch schedule transfer per CEFR level without penalty, subject to batch seat availability.</li>
                </ul>
              </div>

              {/* 3. Training + Direct Placement Services */}
              <div>
                <h2 className="text-2xl font-bold text-[#0b192c]">3. Training & Hospital Recruitment Pathway</h2>
                <div className="mt-3 rounded-2xl bg-[#9b1c31]/5 p-5 border border-[#9b1c31]/15">
                  <p className="text-sm font-semibold text-[#9b1c31]">Comprehensive End-to-End Pathway (Train, Certify & Place):</p>
                  <p className="mt-2 text-xs leading-relaxed text-[#0b192c]/80 sm:text-sm">
                    For healthcare professionals (nurses) enrolled in our Germany Career Pathway, Native Connects provides integrated German language training, TELC/Goethe exam preparation, document dossier coordination (*Defizitbescheid*), employer interview scheduling with verified German hospital networks, and visa filing support.
                  </p>
                </div>
                <ul className="mt-4 list-disc pl-5 space-y-2 text-sm leading-7 text-[#0b192c]/75">
                  <li><strong>Zero Placement Fees for Nurses:</strong> In compliance with international ethical recruitment guidelines (WHO & German healthcare recruitment standards), candidates are never charged placement or recruitment commissions for job allocations in Germany.</li>
                  <li><strong>Employer Hiring Decisions:</strong> While Native Connects organizes verified employer interviews, final job offers and employment contracts (*Arbeitsvertrag*) remain at the sole discretion of the hiring hospital/facility.</li>
                  <li><strong>Visa & Licensing Decisions:</strong> Official nursing license recognition (*Anerkennungsurkunde* or *Defizitbescheid*) and entry visas are issued exclusively by German state authorities (*Regierungspräsidium*) and the German Embassy/Consulate.</li>
                </ul>
              </div>

              {/* 4. Language Examination Preparation (TELC & Goethe) */}
              <div>
                <h2 className="text-2xl font-bold text-[#0b192c]">4. Examination Preparation (TELC & Goethe)</h2>
                <p className="mt-3 text-sm leading-7 text-[#0b192c]/75">
                  Our curriculum includes comprehensive mock exams and preparation for officially recognized certifications:
                </p>
                <ul className="mt-3 list-disc pl-5 space-y-2 text-sm leading-7 text-[#0b192c]/75">
                  <li><strong>TELC Deutsch B1-B2 Pflege:</strong> Specialized healthcare German focusing on clinical handovers, care logs, doctor-patient dialogues, and dual-level safety net scoring.</li>
                  <li><strong>Goethe-Zertifikat:</strong> Globally recognized academic and general CEFR certification.</li>
                  <li><strong>Independent Exam Fees:</strong> Unless expressly included in an institutional sponsorship package, official examination booking fees (payable directly to TELC test centers or Goethe-Institut) are separate from course tuition.</li>
                </ul>
              </div>

              {/* 5. REFUND & CANCELLATION POLICY (CRITICAL REQUIREMENT) */}
              <div id="refund-policy" className="scroll-mt-24 rounded-3xl bg-[#f7f4ef] p-6 sm:p-8 border-2 border-[#9b1c31]/30">
                <div className="flex items-center gap-3 text-[#9b1c31]">
                  <FaUndoAlt className="text-2xl" />
                  <h2 className="text-2xl font-bold text-[#0b192c]">5. Refund & Cancellation Policy</h2>
                </div>
                
                <p className="mt-3 text-sm leading-relaxed text-[#0b192c]/80">
                  We believe in complete transparency and student satisfaction. Our refund and cancellation guidelines are structured as follows:
                </p>

                <div className="mt-5 space-y-4 text-xs sm:text-sm text-[#0b192c]/85">
                  <div className="rounded-xl bg-white p-4 border border-[#0b192c]/10">
                    <div className="flex items-center gap-2 font-bold text-[#0b192c]">
                      <FaCheckCircle className="text-emerald-600" />
                      <span>7-Day Cooling-Off Period (100% Tuition Refund)</span>
                    </div>
                    <p className="mt-1.5 text-xs text-[#0b192c]/70 leading-5">
                      If within the first <strong>7 calendar days</strong> from batch kickoff (or after attending up to 2 live classes, whichever comes first) you determine the course is not right for you, you may request a <strong>100% refund of tuition fees</strong> without questions asked.
                    </p>
                  </div>

                  <div className="rounded-xl bg-white p-4 border border-[#0b192c]/10">
                    <div className="flex items-center gap-2 font-bold text-[#0b192c]">
                      <FaCheckCircle className="text-emerald-600" />
                      <span>Pro-Rata Refund / Batch Pause (Between Days 8 to 21)</span>
                    </div>
                    <p className="mt-1.5 text-xs text-[#0b192c]/70 leading-5">
                      If unexpected personal, academic, or medical emergencies arise between Day 8 and Day 21, you may either pause your enrollment for up to 6 months with guaranteed re-entry into a new batch, or request a pro-rated refund based on unconsumed class hours (minus nominal administrative setup fees of 10%).
                    </p>
                  </div>

                  <div className="rounded-xl bg-white p-4 border border-[#0b192c]/10">
                    <div className="flex items-center gap-2 font-bold text-[#0b192c]">
                      <FaExclamationCircle className="text-amber-600" />
                      <span>Non-Refundable Components</span>
                    </div>
                    <p className="mt-1.5 text-xs text-[#0b192c]/70 leading-5">
                      Direct third-party outlays (e.g., physical textbook international shipping, courier fees, completed document sworn translations, or fees paid directly to official exam centers like TELC/Goethe) are non-refundable once fulfilled.
                    </p>
                  </div>

                  <div className="rounded-xl bg-white p-4 border border-[#0b192c]/10">
                    <div className="flex items-center gap-2 font-bold text-[#0b192c]">
                      <FaCheckCircle className="text-emerald-600" />
                      <span>Refund Processing Timeframe</span>
                    </div>
                    <p className="mt-1.5 text-xs text-[#0b192c]/70 leading-5">
                      Approved refunds are initiated within <strong>24 business hours</strong> and credited back to the original payment method (Bank account / UPI / Credit Card) within <strong>5 to 7 working days</strong>.
                    </p>
                  </div>
                </div>

                <div className="mt-5 rounded-xl bg-[#9b1c31]/10 p-3 text-xs text-[#9b1c31] font-semibold">
                  To request a refund or cancellation, email <a href={`mailto:${CONTACT_DETAILS.supportEmail}`} className="underline font-bold">{CONTACT_DETAILS.supportEmail}</a> with your Student ID and transaction receipt.
                </div>
              </div>

              {/* 6. Grievance Redressal & Complaint Route */}
              <div id="grievance" className="scroll-mt-24 rounded-2xl bg-[#f7f4ef] p-6 border border-[#0b192c]/10">
                <div className="flex items-center gap-3 text-[#9b1c31]">
                  <FaUserShield className="text-2xl" />
                  <h2 className="text-xl font-bold text-[#0b192c]">6. Grievance Redressal & Complaint Route</h2>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-[#0b192c]/75">
                  We are committed to prompt resolution of any student dissatisfaction, tutor replacement requests, batch schedule conflicts, or billing questions. Please follow our formal escalation ladder:
                </p>
                <div className="mt-4 space-y-3 text-xs sm:text-sm text-[#0b192c]/80">
                  <div className="p-3 bg-white rounded-xl border border-[#0b192c]/10">
                    <strong>Level 1 — Student Support Desk:</strong> Contact your dedicated batch coordinator or email <a href={`mailto:${CONTACT_DETAILS.supportEmail}`} className="text-[#9b1c31] font-bold underline">{CONTACT_DETAILS.supportEmail}</a> (Turnaround: Within 24 hours).
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-[#0b192c]/10">
                    <strong>Level 2 — Grievance Redressal Officer:</strong> If unsatisfied with Level 1 resolution, escalate directly to our Compliance & Student Welfare Officer at <a href={`mailto:${CONTACT_DETAILS.grievanceEmail}`} className="text-[#9b1c31] font-bold underline">{CONTACT_DETAILS.grievanceEmail}</a> (Formal decision within 48-72 business hours).
                  </div>
                </div>
              </div>

              {/* 7. Code of Conduct & Intellectual Property */}
              <div>
                <h2 className="text-2xl font-bold text-[#0b192c]">7. Intellectual Property & Code of Conduct</h2>
                <p className="mt-3 text-sm leading-7 text-[#0b192c]/75">
                  All course materials, customized clinical German worksheets, mock exams, audio files, and teaching slides remain the proprietary intellectual property of {LEGAL_ENTITY_NAME}. Materials are licensed solely for individual student study and may not be redistributed, resold, or published online without prior written consent.
                </p>
              </div>

            </div>

            {/* Quick Links & Summary Card */}
            <aside className="space-y-6">
              <div className="rounded-3xl border border-[#0b192c]/10 bg-white p-6 shadow-sm">
                <h3 className="text-base font-bold text-[#0b192c]">Quick Summary</h3>
                <ul className="mt-4 space-y-3 text-xs text-[#0b192c]/75">
                  <li className="flex items-start gap-2">
                    <FaCheckCircle className="mt-0.5 text-emerald-600 shrink-0" />
                    <span>7-Day 100% money back cooling-off guarantee</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheckCircle className="mt-0.5 text-emerald-600 shrink-0" />
                    <span>0 placement fees for nursing hospital jobs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheckCircle className="mt-0.5 text-emerald-600 shrink-0" />
                    <span>Batch pause and rescheduling flexibility</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheckCircle className="mt-0.5 text-emerald-600 shrink-0" />
                    <span>TELC Pflege & Goethe exam aligned preparation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheckCircle className="mt-0.5 text-emerald-600 shrink-0" />
                    <span>Direct grievance redressal within 48 hours</span>
                  </li>
                </ul>

                <div className="mt-6 border-t border-[#0b192c]/10 pt-4 space-y-2">
                  <a
                    href={`mailto:${CONTACT_DETAILS.supportEmail}`}
                    className="block text-center rounded-xl bg-[#9b1c31] py-2.5 text-xs font-bold text-white transition hover:bg-[#85172a]"
                  >
                    Contact Support Desk
                  </a>
                  <Link
                    href="/privacy-policy"
                    className="block text-center rounded-xl border border-[#0b192c]/20 py-2.5 text-xs font-bold text-[#0b192c] transition hover:bg-[#0b192c]/5"
                  >
                    Read Privacy Policy
                  </Link>
                </div>
              </div>

              <div className="rounded-3xl border border-[#0b192c]/10 bg-[#f7f4ef] p-6 text-xs">
                <div className="flex items-center gap-2 text-[#9b1c31] font-bold uppercase tracking-wider">
                  <FaPhoneAlt />
                  <span>Direct Help Line</span>
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

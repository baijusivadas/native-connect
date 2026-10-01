import { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CONTACT_DETAILS, LEGAL_ENTITY_NAME, SITE_NAME } from "@/constants/site";
import { FaShieldAlt, FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaUserShield } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Privacy Policy | Native Connects",
  description: "Official privacy policy, data protection standards, grievance officer details, and legal information for Native Connects.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[#f7f4ef] text-[#0b192c]">
      <Navbar />

      {/* Header */}
      <section className="bg-[#0b192c] py-16 text-white sm:py-20">
        <div className="w-full px-5 sm:px-8 lg:px-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#9b1c31]/30 px-3 py-1 text-xs font-bold text-[#c19a68] border border-[#9b1c31]/50">
              <FaShieldAlt /> Legal & Compliance
            </div>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">
              Privacy Policy
            </h1>
            <p className="mt-3 text-sm leading-relaxed text-white/75 sm:text-base">
              Last Updated: October 2026. This policy outlines how {LEGAL_ENTITY_NAME} (&ldquo;{SITE_NAME}&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) collects, uses, protects, and handles your personal data across our language education, exam preparation, and placement services.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-14 sm:py-20">
        <div className="w-full px-5 sm:px-8 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-[1fr_340px]">
            {/* Main Policy Text */}
            <div className="space-y-10 rounded-3xl border border-[#0b192c]/10 bg-white p-7 shadow-sm sm:p-10">
              
              {/* Entity Overview */}
              <div>
                <h2 className="text-2xl font-bold text-[#0b192c]">1. Entity & Data Controller Details</h2>
                <p className="mt-3 text-sm leading-7 text-[#0b192c]/75">
                  The primary data controller responsible for the processing of your personal data under this policy is <strong>{LEGAL_ENTITY_NAME}</strong> (Operating under the trade name <strong>{SITE_NAME}</strong>).
                </p>
                <div className="mt-4 rounded-2xl bg-[#f7f4ef] p-5 border border-[#0b192c]/10 space-y-2 text-sm text-[#0b192c]/80">
                  <p><strong>Registered Business Name:</strong> {LEGAL_ENTITY_NAME}</p>
                  <p><strong>Registered Corporate Office:</strong> {CONTACT_DETAILS.registeredOffice.line1}, {CONTACT_DETAILS.registeredOffice.city}, {CONTACT_DETAILS.registeredOffice.state}, {CONTACT_DETAILS.registeredOffice.country} - {CONTACT_DETAILS.registeredOffice.postalCode}</p>
                  <p><strong>European Office:</strong> {CONTACT_DETAILS.europeanOffice.line1}, {CONTACT_DETAILS.europeanOffice.postalCode} {CONTACT_DETAILS.europeanOffice.city}, {CONTACT_DETAILS.europeanOffice.country}</p>
                  <p><strong>Direct Support Contact:</strong> <a href={`mailto:${CONTACT_DETAILS.supportEmail}`} className="text-[#9b1c31] font-semibold underline">{CONTACT_DETAILS.supportEmail}</a> | {CONTACT_DETAILS.phone}</p>
                </div>
              </div>

              {/* Data Collected */}
              <div>
                <h2 className="text-2xl font-bold text-[#0b192c]">2. Information We Collect</h2>
                <p className="mt-3 text-sm leading-7 text-[#0b192c]/75">
                  We collect information necessary to deliver quality language coaching, schedule assessments, verify credentials, coordinate exam bookings (TELC/Goethe), and facilitate career recruitment in Germany:
                </p>
                <ul className="mt-4 list-disc pl-5 space-y-2 text-sm text-[#0b192c]/75">
                  <li><strong>Contact & Identification Data:</strong> Full name, email address, WhatsApp/phone number, date of birth, nationality, country of residence.</li>
                  <li><strong>Educational & Professional Qualifications:</strong> Nursing degree/diploma (GNM, B.Sc), academic marksheets, nursing council registration, years of clinical experience, and target CEFR levels.</li>
                  <li><strong>Learning & Classroom Data:</strong> Attendance logs, assessment test scores, mock exam evaluations, tutor feedback notes, and session recordings for quality monitoring.</li>
                  <li><strong>Payment & Billing Data:</strong> Transaction reference IDs, GST billing details, and receipt generation data (card/banking data is securely processed via PCI-DSS compliant payment gateways).</li>
                  <li><strong>Technical & Usage Data:</strong> IP addresses, browser types, device identifiers, and website interaction metrics collected via strictly necessary and analytics cookies.</li>
                </ul>
              </div>

              {/* How We Use Your Data */}
              <div>
                <h2 className="text-2xl font-bold text-[#0b192c]">3. How We Use Your Information</h2>
                <p className="mt-3 text-sm leading-7 text-[#0b192c]/75">
                  Your personal data is used solely for specified educational and recruitment purposes, including:
                </p>
                <ul className="mt-4 list-disc pl-5 space-y-2 text-sm text-[#0b192c]/75">
                  <li>Delivering live online language coaching, mock exams, and assigning level-appropriate tutors.</li>
                  <li>Coordinating TELC / Goethe examination registration guidance and score reporting.</li>
                  <li>Facilitating employer matchmaking, healthcare job interviews, and document dossier verification for recognized German hospital partners (where enrolled in placement pathways).</li>
                  <li>Providing administrative communication, fee receipts, scheduling alerts, and student support.</li>
                  <li>Complying with statutory accounting, tax, and legal requirements.</li>
                </ul>
              </div>

              {/* Data Sharing & Recruitment Disclosure */}
              <div>
                <h2 className="text-2xl font-bold text-[#0b192c]">4. Data Sharing & Recruitment Partners</h2>
                <p className="mt-3 text-sm leading-7 text-[#0b192c]/75">
                  We do not sell, rent, or trade your personal data to third parties for commercial advertising. Data is only shared with:
                </p>
                <ul className="mt-4 list-disc pl-5 space-y-2 text-sm text-[#0b192c]/75">
                  <li><strong>Authorized German Healthcare Employers & Placement Partners:</strong> When candidates apply for recruitment pathways, candidate profiles, CVs, and certified language scores are shared strictly with your consent for job placement interviews.</li>
                  <li><strong>Accredited Examination & Recognition Bodies:</strong> Official test centers (TELC, Goethe-Institut) or state recognition bodies (*Anerkennungsstellen*) upon your instruction.</li>
                  <li><strong>Secure Service Providers:</strong> Cloud infrastructure (AWS/Google Cloud), live video streaming platforms, and email delivery providers operating under strict confidentiality contracts.</li>
                </ul>
              </div>

              {/* Data Security & Retention */}
              <div>
                <h2 className="text-2xl font-bold text-[#0b192c]">5. Data Security & Retention</h2>
                <p className="mt-3 text-sm leading-7 text-[#0b192c]/75">
                  We employ industry-standard 256-bit encryption (SSL/TLS), access controls, and firewall defenses to prevent unauthorized access. Student academic records and course completions are retained for a maximum of 5 years to facilitate credential verification, after which records are archived or securely anonymized.
                </p>
              </div>

              {/* User Rights */}
              <div>
                <h2 className="text-2xl font-bold text-[#0b192c]">6. Your Rights (GDPR & DPDP Compliance)</h2>
                <p className="mt-3 text-sm leading-7 text-[#0b192c]/75">
                  You have the right to access, rectify, update, or request the deletion of your personal data at any time. You may also withdraw your consent for promotional communications or recruitment sharing by writing to our support team.
                </p>
              </div>

              {/* Grievance Redressal & Direct Support */}
              <div id="grievance" className="scroll-mt-24 rounded-2xl bg-[#9b1c31]/5 p-6 border border-[#9b1c31]/20">
                <div className="flex items-center gap-3 text-[#9b1c31]">
                  <FaUserShield className="text-2xl" />
                  <h2 className="text-xl font-bold text-[#0b192c]">7. Grievance Officer & Complaint Route</h2>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-[#0b192c]/75">
                  In accordance with consumer protection, education standards, and data protection regulations, if you have any complaints, unresolved queries, or feedback regarding data handling, course quality, or services, please contact our designated Grievance Redressal Officer:
                </p>
                <div className="mt-4 rounded-xl bg-white p-4 border border-[#0b192c]/10 text-xs sm:text-sm space-y-2 text-[#0b192c]/85">
                  <p><strong>Designation:</strong> {CONTACT_DETAILS.grievanceOfficer.designation}</p>
                  <p><strong>Officer Name:</strong> {CONTACT_DETAILS.grievanceOfficer.name}</p>
                  <p><strong>Direct Grievance Email:</strong> <a href={`mailto:${CONTACT_DETAILS.grievanceOfficer.email}`} className="text-[#9b1c31] font-bold underline">{CONTACT_DETAILS.grievanceOfficer.email}</a></p>
                  <p><strong>Postal Address:</strong> {CONTACT_DETAILS.registeredOffice.line1}, {CONTACT_DETAILS.registeredOffice.city}, {CONTACT_DETAILS.registeredOffice.state}, India</p>
                  <p><strong>Response Timeline:</strong> We acknowledge complaints within 24 hours and provide formal resolution within 48 to 72 business hours.</p>
                </div>
              </div>

            </div>

            {/* Sticky Sidebar with Quick Contacts */}
            <aside className="space-y-6">
              <div className="rounded-3xl border border-[#0b192c]/10 bg-white p-6 shadow-sm">
                <h3 className="text-base font-bold text-[#0b192c]">Direct Support & Help</h3>
                <p className="mt-2 text-xs text-[#0b192c]/65 leading-5">
                  Need immediate help with course enrollment, batch changes, or privacy questions?
                </p>
                
                <div className="mt-5 space-y-3.5 text-xs text-[#0b192c]/80">
                  <div className="flex items-start gap-3">
                    <FaEnvelope className="mt-0.5 text-[#9b1c31]" />
                    <div>
                      <span className="font-semibold block text-[#0b192c]">Email Support</span>
                      <a href={`mailto:${CONTACT_DETAILS.supportEmail}`} className="text-[#9b1c31] hover:underline">{CONTACT_DETAILS.supportEmail}</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <FaPhoneAlt className="mt-0.5 text-[#9b1c31]" />
                    <div>
                      <span className="font-semibold block text-[#0b192c]">Phone / WhatsApp</span>
                      <span>{CONTACT_DETAILS.phone}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <FaMapMarkerAlt className="mt-0.5 text-[#9b1c31]" />
                    <div>
                      <span className="font-semibold block text-[#0b192c]">Registered Office</span>
                      <span>{CONTACT_DETAILS.registeredOffice.city}, {CONTACT_DETAILS.registeredOffice.state}, India</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 border-t border-[#0b192c]/10 pt-4">
                  <Link
                    href="/terms"
                    className="block text-center rounded-xl bg-[#0b192c] py-2.5 text-xs font-bold text-white transition hover:bg-[#9b1c31]"
                  >
                    View Terms & Refund Policy
                  </Link>
                </div>
              </div>

              <div className="rounded-3xl border border-[#c19a68]/40 bg-[#c19a68]/10 p-6 text-xs text-[#0b192c]">
                <h4 className="font-bold uppercase tracking-wider text-[#9b1c31]">Recruitment & Placement</h4>
                <p className="mt-2 leading-relaxed text-[#0b192c]/80">
                  Native Connects connects qualified nurses with German hospitals. We maintain <strong>zero placement fee charges</strong> for nursing candidates placed with our certified employer network.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

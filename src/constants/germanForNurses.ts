// ─── German for Nurses — 2026 Data Constants ───────────────────────────────

export interface LanguageLevel {
  level: string;
  stage: string;
  title: string;
  copy: string;
  focus: string;
}

export interface TrainerProfile {
  name: string;
  role: string;
  certification: string;
  summary: string;
  experience: string[];
  education: string[];
  linkedin: string;
  image: string;
}

export interface RecognitionOutcome {
  title: string;
  copy: string;
}

export interface SourceLink {
  label: string;
  href: string;
}

export interface VisualStoryItem {
  src: string;
  caption: string;
}

export interface ExamComparisonItem {
  category: string;
  goethe: string;
  telc: string;
}

export const WHY_GERMAN_POINTS: string[] = [
  'End-to-end support: We don’t just train in German — we guide your TELC/Goethe exam prep and connect you directly to verified German hospital employers.',
  'Dual Exam Preparation: Aligned with both TELC Deutsch B1-B2 Pflege and Goethe-Zertifikat standards based on your individual career pathway.',
  'TELC Pflege Advantage: Combined B1-B2 exam structure provides a built-in safety net and hospital-specific clinical terminology.',
  'Transparent Placement: 0 placement fee charges for nursing candidates placed with our partner hospital network in Germany.',
];

export const RECRUITMENT_PATHWAY_STEPS = [
  {
    step: '01',
    title: 'Intensive Language Training (A1–B2)',
    desc: 'Live interactive classes with native and certified tutors focusing on everyday conversation and ward-specific medical terminology.',
  },
  {
    step: '02',
    title: 'TELC Pflege / Goethe Exam Prep',
    desc: 'Mock exam simulations, handover roleplays, and documentation practice designed to secure B1/B2 certification on first attempt.',
  },
  {
    step: '03',
    title: 'Hospital Interviews & Direct Hiring',
    desc: 'Interviews with verified German hospitals and care facilities. Receive your official employment contract (Arbeitsvertrag) with zero placement fees.',
  },
  {
    step: '04',
    title: 'Dossier, Defizitbescheid & Fast-Track Visa',
    desc: 'Guidance through state recognition filings, certified translations, and fast-track German healthcare worker visa processing.',
  },
  {
    step: '05',
    title: 'Arrival, Onboarding & Adaptation Support',
    desc: 'Airport reception, initial accommodation assistance, and hospital onboarding support as you begin earning €2,800–€4,000+/month.',
  },
];

export const TELC_VS_GOETHE_COMPARISON: ExamComparisonItem[] = [
  {
    category: 'Recognition & Acceptance',
    goethe: 'Offered by the official cultural institution of the Federal Republic of Germany. Gold standard for academic applications and university admissions worldwide.',
    telc: 'Widely recognized by German immigration authorities, employers, and state recognition offices. Heavily favored for healthcare and nursing (telc Deutsch B1-B2 Pflege).',
  },
  {
    category: 'Format & Clinical Focus',
    goethe: 'Traditional, academic focus with strong emphasis on general grammar accuracy and broad social topics.',
    telc: 'Focuses heavily on practical, everyday workplace communication with specialized clinical modules tailored for hospital wards.',
  },
  {
    category: 'Availability & Logistics',
    goethe: 'Exam seats at official institutes can fill up quickly, leading to limited date availability in certain regions.',
    telc: 'Operates through a massive global network of test centers, providing flexible scheduling options and frequently lower exam fees.',
  },
  {
    category: 'The Nursing Safety Net',
    goethe: 'Single-level pass/fail: If you miss B2 by a few marks, you must retake the entire exam or module.',
    telc: 'Combined B1-B2 Exam: If your score falls slightly short of B2, you are automatically awarded a B1 certificate, allowing you to start recognition or work as an assistant nurse immediately.',
  },
];

export const TELC_PFLEGE_BENEFITS = [
  {
    title: 'Job-Specific Medical Vocabulary',
    desc: 'Unlike standard exams that test general topics like environment or theater, TELC Pflege focuses entirely on hospital handovers, patient communication, care reports, doctor rounds, and medical terms.',
  },
  {
    title: 'The "Dual-Level" Safety Net',
    desc: 'The TELC Pflege exam is a combined B1-B2 exam. If your score falls slightly short of B2, you automatically receive a verified B1 certificate, enabling you to file your Defizitbescheid or start as an assistant nurse.',
  },
  {
    title: 'Preferred by German Hospitals',
    desc: 'Because it proves real clinical communication readiness, telc Deutsch B1-B2 Pflege has become the preferred benchmark for chief nursing officers and hospital recruiters across Germany.',
  },
];

export const VISUAL_STORY: VisualStoryItem[] = [
  {
    src: '/img/Student_working_as_hospital_nurse.jpg',
    caption: 'Step 1: Practise clinical communication & patient handovers.',
  },
  {
    src: '/img/Student_working.jpg',
    caption: 'Step 2: Clear TELC Pflege / Goethe exam & attend hospital interviews.',
  },
  {
    src: '/img/Student_standing_in_Germany_.jpg',
    caption: 'Step 3: Fly to Germany with your visa, employment contract & hospital onboarding.',
  },
];

export const LEVELS: LanguageLevel[] = [
  {
    level: 'A1 – A2',
    stage: 'Foundational German',
    title: 'Basic Communication & General Vocabulary',
    copy: 'Build solid grammar foundation, everyday dialogue, and introduction to human anatomy and basic clinical terms.',
    focus: 'Estimated: 5–7 months (Part-time evening/weekend batches)',
  },
  {
    level: 'B1',
    stage: 'Intermediate Clinical',
    title: 'Ward Communication & Patient Care',
    copy: 'Master patient interactions, vital signs recording, nursing shift notes, and begin initial document dossier verification.',
    focus: 'Estimated: 5–7 months (Includes TELC B1 readiness & dossier prep)',
  },
  {
    level: 'B2 / TELC Pflege',
    stage: 'Professional Clinical German',
    title: 'TELC Deutsch B1-B2 Pflege & Goethe Prep',
    copy: 'Advanced clinical communication, doctor discussions, emergency triage vocabulary, and intensive exam simulation for maximum scores.',
    focus: 'Estimated: 6–8 months (TELC Pflege / Goethe B2 Exam prep)',
  },
  {
    level: 'Recruitment & Visa',
    stage: 'Direct Career Placement',
    title: 'Hospital Matching, Visa & Relocation',
    copy: 'Direct employer interviews with German healthcare facilities, Defizitbescheid tracking, visa filing, and Germany onboarding.',
    focus: '0 Placement Fees for Nurses',
  },
];

export const LEARNING_FOCUS: string[] = [
  'Shift handovers (Schichtübergabe) and interprofessional doctor discussions',
  'Patient admissions, medical history taking (Anamnese), and symptom recording',
  'Nursing documentation (Pflegedokumentation) and incident reporting',
  'Administering medication, blood draws, and wound care instructions',
  'De-escalation, empathy, and communicating with grieving or anxious families',
  'Standard German medical hygiene and hospital safety protocols',
];

export const TRAINER_PROFILE: TrainerProfile = {
  name: 'Otilia Cărare',
  role: 'German Language Tutor',
  certification: 'B2 Certified German',
  summary:
    'Otilia brings experience tutoring German and French, together with academic training in German teaching, translation and interpretation. Her learning approach can help students build practical German skills step by step.',
  experience: [
    'German and French language tutoring experience',
    'Experience working in Germany and adapting to different working environments',
    'Focus on structured, level-appropriate language learning',
  ],
  education: [
    'Master’s studies in German language teaching, University of Bucharest',
    'Translation & Interpretation studies in French and German',
    'Academic exchange experience at Aix-Marseille Université',
  ],
  linkedin: 'https://www.linkedin.com/in/otilia-c%C4%83rare-6600b6321/',
  image: '/img/OtiliaCărare.jpg',
};

export const RECOGNITION_OUTCOMES: RecognitionOutcome[] = [
  {
    title: 'Full Recognition (Volle Gleichwertigkeit)',
    copy: 'The competent authority confirms full equivalence. You receive your official license to practice as a Registered Nurse (Pflegefachkraft).',
  },
  {
    title: 'Partial Recognition (Defizitbescheid)',
    copy: 'Gaps in clinical hours or theory are detailed. You can work as an Assistant Nurse (Pflegehilfskraft) while completing an adaptation course.',
  },
  {
    title: 'Adaptation Course or Knowledge Test (Kenntnisprüfung)',
    copy: 'Complete hospital-supervised practical hours or a tailored clinical exam to bridge gaps and transition to full Registered Nurse status.',
  },
];

export const DOCUMENT_CHECKLIST: string[] = [
  'Degree / Diploma Certificate (GNM or B.Sc Nursing)',
  'Year-wise Marksheets & Academic Transcripts',
  'Nursing Council Registration Certificate (State/INC)',
  'Detailed Theory & Practical Hours Syllabus Breakdown',
  'Proof of Work Experience & Employment Certificates',
  'Language certificates (TELC Deutsch B1-B2 Pflege / Goethe B2)',
  'Valid Passport & Updated Europass Format CV',
  'Police Clearance Certificate (PCC) & Medical Fitness Certificate',
];

export const SOURCE_LINKS: SourceLink[] = [
  {
    label: 'Make it in Germany – Official Nursing Guide',
    href: 'https://www.make-it-in-germany.com/en/working-in-germany/professions-in-demand/nurses',
  },
  {
    label: 'Anerkennung in Deutschland – Recognition Portal',
    href: 'https://www.anerkennung-in-deutschland.de/html/en/index.php',
  },
  {
    label: 'TELC Language Certificates – Healthcare & Pflege',
    href: 'https://www.telc.net/en/language-examinations/certificates/german/telc-deutsch-b1-b2-pflege/',
  },
  {
    label: 'Goethe-Institut – German Examinations',
    href: 'https://www.goethe.de/en/spr/kue.html',
  },
  {
    label: 'Federal Foreign Office – Visa Regulations',
    href: 'https://www.auswaertiges-amt.de/en',
  },
];

export const OVERVIEW_STATS = [
  { value: 'A1 → B2', label: 'CEFR learning range', icon: 'FaLanguage' as const },
  { value: 'TELC & Goethe', label: 'Certified exam prep', icon: 'FaGraduationCap' as const },
  { value: 'Clinical German', label: 'Practice focus', icon: 'FaStethoscope' as const },
  { value: 'Direct Placement', label: 'Recruitment in Germany', icon: 'FaFileAlt' as const },
];


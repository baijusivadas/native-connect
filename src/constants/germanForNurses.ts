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

export interface PathwayStep {
  number: string;
  title: string;
  copy: string;
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
  type?: 'image' | 'video';
  poster?: string;
}

export const WHY_GERMAN_POINTS: string[] = [
  'High baseline earnings: Standard salary under TVöD-P scale ranges from €3,187 to €4,013+/month gross, plus shift, weekend, and night allowances.',
  'Immediate demand & job security: Over 200,000 nursing vacancies expected by 2030 across hospitals, clinics, and care facilities.',
  'Fast-track Permanent Residency: Eligible for permanent residency (Niederlassungserlaubnis) after 3 years of skilled employment (or faster with B2 German).',
  'Family Reunification: Spouses are entitled to full work rights upon joining you in Germany.',
];

export const VISUAL_STORY: VisualStoryItem[] = [
  {
    src: '/video/Nurse_working_in_Germany_20260927155957.mp4',
    caption: 'Step 1: Master German from A1 to B2 alongside your nursing shifts.',
    type: 'video',
    poster: '/img/indian_student_standing_in_germany.jpg',
  },
  {
    src: '/img/Student_working.jpg',
    caption: 'Step 2: Submit your nursing degree for recognition (Anerkennung).',
  },
  {
    src: '/img/swiss.jpeg',
    caption: 'Step 3: Begin working in top-tier German hospitals with full stability.',
  },
];

export const LEVELS: LanguageLevel[] = [
  {
    level: 'A1 – A2',
    stage: 'Foundational German',
    title: 'Basic Communication & General Vocabulary',
    copy: 'Build solid grammar foundation, general vocabulary, everyday conversation, and introduction to basic medical and human anatomy terms.',
    focus: 'Estimated time: 5–7 months (Part-time for working nurses)',
  },
  {
    level: 'B1',
    stage: 'Intermediate German',
    title: 'Patient Interaction & Ward Routine',
    copy: 'Learn patient care terminology, taking vital signs, writing basic nursing reports, and describing symptoms accurately.',
    focus: 'Estimated time: 5–7 months (Includes initial document submission)',
  },
  {
    level: 'B2',
    stage: 'Advanced Clinical German',
    title: 'Professional Medical German & Exam Prep',
    copy: 'Focus on clinical nursing communication (Pflegefachsprache), shift handovers, doctor discussions, emergency protocols, and Goethe B2 exam practice.',
    focus: 'Estimated time: 6–8 months (Goethe B2 Exam preparation)',
  },
  {
    level: 'B2 Nursing',
    stage: 'Clinical Onboarding',
    title: 'Hospital Adaptation & Recognition',
    copy: 'Bridge the deficit (Defizitbescheid) via Adaptation Course (Anpassungslehrgang) or Knowledge Exam (Kenntnisprüfung) at your employer hospital.',
    focus: 'In-Germany training or direct full recognition',
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

export const PATHWAY_STEPS: PathwayStep[] = [
  {
    number: '01',
    title: 'Language Training (A1 to B2)',
    copy: 'Complete structured German language modules designed for nurses while continuing your regular hospital shifts in India.',
  },
  {
    number: '02',
    title: 'Degree Evaluation & Deficit Notice',
    copy: 'Submit GNM / B.Sc / M.Sc transcripts and syllabus to the competent State Examination Office (Landesprüfungsamt) in Germany to receive your Defizitbescheid.',
  },
  {
    number: '03',
    title: 'Visa Application (Chancenkarte or Recognition Partnership)',
    copy: 'Apply for the visa either via the Recognition Partnership (A2/B1 level with a job contract) or the Opportunity Card (Chancenkarte).',
  },
  {
    number: '04',
    title: 'Hospital Placement & Deficit Closure',
    copy: 'Relocate to Germany. Complete the Adaptation Course (Anpassungslehrgang) or take the Knowledge Exam (Kenntnisprüfung) while earning an assistant salary.',
  },
  {
    number: '05',
    title: 'Full Licensure (Urkunde) & RN Career',
    copy: 'Receive your formal license to practice as a Registered Nurse (Pflegefachkraft) with full TVöD-P salary scale benefits.',
  },
];

export const RECOGNITION_OUTCOMES: RecognitionOutcome[] = [
  {
    title: 'Full Recognition (Volle Gleichwertigkeit)',
    copy: 'Your Indian degree curriculum is assessed as completely equal to the German nursing standard. You directly receive authorization upon passing B2 German.',
  },
  {
    title: 'Partial Recognition (Defizitbescheid)',
    copy: 'The standard result for most Indian B.Sc and GNM degrees. Outlines specific theory or practical hours missing, which you fulfill in Germany.',
  },
  {
    title: 'Adaptation or Exam Route',
    copy: 'You close the gap either through supervised work in a hospital (Anpassungslehrgang) or by directly passing an oral/practical test (Kenntnisprüfung).',
  },
];

export const DOCUMENT_CHECKLIST: string[] = [
  'Degree / Diploma Certificate (GNM or B.Sc Nursing)',
  'Year-wise Marksheets & Academic Transcripts',
  'Nursing Council Registration Certificate (State/INC)',
  'Detailed Theory & Practical Hours Syllabus Breakdown',
  'Proof of Work Experience & Employment Certificates',
  'Goethe / Telc / ÖSD German Language Certificates',
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
    label: 'Goethe-Institut – German Examinations',
    href: 'https://www.goethe.de/en/spr/kue.html',
  },
  {
    label: 'Federal Foreign Office – Visa Regulations',
    href: 'https://www.auswaertiges-amt.de/en',
  },
];

export const OVERVIEW_STATS = [
  { value: 'A1 → B2', label: '18–23 Mo. Pathway', icon: 'FaLanguage' as const },
  { value: '€3,187 - €4,013', label: 'RN Monthly Salary', icon: 'FaEuroSign' as const },
  { value: 'Chancenkarte', label: '2026 Visa Routes', icon: 'FaPassport' as const },
  { value: 'Anerkennung', label: 'Degree Recognition', icon: 'FaStethoscope' as const },
];

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

export const WHY_GERMAN_POINTS: string[] = [
  'German skills can support communication, but they do not guarantee employment, qualification recognition or visa approval.',
  'The competent authority decides how each nursing qualification is assessed; requirements vary by state and individual case.',
  'Accepted language certificates and professional requirements vary. Confirm them with the relevant authority or employer.',
  'Visa and family-reunification rules depend on individual circumstances and current law. Check official guidance before making plans.',
];

export const VISUAL_STORY: VisualStoryItem[] = [
  {
    src: '/img/Student_working_as_hospital_nurse.jpg',
    caption: 'Step 1: Practise communication for common nursing situations.',
  },
  {
    src: '/img/Student_working.jpg',
    caption: 'Step 2: Learn how the qualification-recognition process works.',
  },
  {
    src: '/img/Student_standing_in_Germany_.jpg',
    caption: 'Step 3: Check your next steps with current official guidance.',
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
    copy: 'Practise clinical communication, shift handovers, conversations with other professionals, and exam skills for your chosen route.',
    focus: 'Estimated time: 6–8 months (Goethe B2 Exam preparation)',
  },
  {
    level: 'B2 Nursing',
    stage: 'Clinical Onboarding',
    title: 'Hospital Adaptation & Recognition',
    copy: 'If required by the recognition authority, prepare for an adaptation course or knowledge exam.',
    focus: 'Only if required by your recognition decision',
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
    copy: 'The competent authority decides whether a qualification is equivalent. Other professional and language requirements may still apply.',
  },
  {
    title: 'Partial Recognition (Defizitbescheid)',
    copy: 'If gaps are identified, the decision explains which theory or practical requirements remain. The outcome depends on your individual case.',
  },
  {
    title: 'Adaptation or Exam Route',
    copy: 'The recognition decision specifies available ways to address any gaps. Confirm the route and requirements with the responsible authority.',
  },
];

export const DOCUMENT_CHECKLIST: string[] = [
  'Degree / Diploma Certificate (GNM or B.Sc Nursing)',
  'Year-wise Marksheets & Academic Transcripts',
  'Nursing Council Registration Certificate (State/INC)',
  'Detailed Theory & Practical Hours Syllabus Breakdown',
  'Proof of Work Experience & Employment Certificates',
  'Language certificates required for your recognition route',
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
  { value: 'A1 → B2', label: 'CEFR learning range', icon: 'FaLanguage' as const },
  { value: 'Online', label: 'Learning format', icon: 'FaGraduationCap' as const },
  { value: 'Clinical German', label: 'Practice focus', icon: 'FaStethoscope' as const },
  { value: 'Case-specific', label: 'Recognition decision', icon: 'FaFileAlt' as const },
];

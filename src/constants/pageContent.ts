import {
  FaBrain,
  FaBriefcase,
  FaCalendarAlt,
  FaChild,
  FaCogs,
  FaComments,
  FaGlobe,
  FaGlobeEurope,
  FaGraduationCap,
  FaHeart,
  FaHome,
  FaHospital,
  FaLevelUpAlt,
  FaPassport,
  FaPlane,
  FaSmile,
  FaUserMd,
  FaUserNurse,
  FaUserTie,
  FaBullseye,
  FaChartLine,
  FaClipboardCheck,
  FaChalkboardTeacher,
} from "react-icons/fa";

export const NAV_LINKS = [
  { href: "/german-for-nurses", label: "German for nurses", isPage: true },
  { href: "#languages", label: "Languages", isPage: false },
  { href: "#offer", label: "How learning works", isPage: false },
  { href: "#pricing", label: "Learning plans", isPage: false },
  { href: "#about", label: "About", isPage: false },
  { href: "#contact", label: "Contact", isPage: false },
] as const;

export const HERO_HIGHLIGHTS = [
  "Native-speaking tutors",
  "TELC Pflege & Goethe Prep",
  "0-Fee Placement in Germany",
] as const;

export const HERO_GOALS = [
  {
    icon: "🇩🇪",
    label: "Work as a Nurse in Germany",
    href: "/german-for-nurses",
    goal: undefined,
  },
  {
    icon: "🎓",
    label: "Study or Work in Europe",
    href: undefined,
    goal: "Study or Work in Europe",
  },
  {
    icon: "👩‍👦",
    label: "Language for my child",
    href: undefined,
    goal: "Language for my child",
  },
  {
    icon: "💬",
    label: "Speak confidently with Natives",
    href: undefined,
    goal: "Speak confidently with Natives",
  },
] as const;

export const PARTNER_DIRECTORS = [
  { name: "Manoj Kumar", image: "/img/manojkumar.jpeg" },
  { name: "Biju Sakaria", image: "/img/bijuSakaria.jpeg" },
] as const;

export const LEARNING_PATHWAYS = [
  {
    icon: FaChild,
    eyebrow: "For Parents",
    title: "Set your child up for lifelong success",
    description:
      "Enriching, age-appropriate lessons that make language an intuitive part of life, far beyond another homework assignment.",
    tags: [
      { label: "School Readiness", icon: FaGraduationCap },
      { label: "Developmental Milestones", icon: FaBrain },
      { label: "Early Immersion", icon: FaComments },
      { label: "Fun & Safe Environment", icon: FaSmile },
    ],
  },
  {
    icon: FaBriefcase,
    eyebrow: "For Professionals",
    title: "Accelerate your career in Germany",
    description:
      "Industry-specific German for high-demand fields like medicine, nursing, engineering, and academia, tailored for seamless relocation and professional growth.",
    tags: [
      { label: "Doctors", icon: FaUserMd },
      { label: "Nursing", icon: FaUserNurse },
      { label: "Engineering", icon: FaCogs },
      { label: "Study", icon: FaGraduationCap },
    ],
  },
  {
    icon: FaPlane,
    eyebrow: "For Moving & Expats",
    title: "Master practical, confident European conversation",
    description:
      "Skip textbook filler and go beyond basic phrases to confidently navigate everything from local appointments to making lasting social connections.",
    tags: [
      { label: "Visa Navigation", icon: FaPassport },
      { label: "Apartment Hunting", icon: FaHome },
      { label: "Healthcare System", icon: FaHospital },
      { label: "Cultural Integration", icon: FaGlobe },
    ],
  },
];

export const LANGUAGE_OPTIONS: {
  name: string;
  description: string;
  icon: string;
  featured?: boolean;
}[] = [
  {
    name: "German",
    description: "Build your career, study and everyday confidence in Germany.",
    icon: "🇩🇪",
    featured: true,
  },
  {
    name: "French",
    description:
      "Speak naturally in everyday situations and connect with French culture.",
    icon: "🇫🇷",
  },
  {
    name: "Italian",
    description: "Learn the language of travel, culture, food and connection.",
    icon: "🇮🇹",
  },
  {
    name: "Romanian",
    description: "Start a practical and rewarding journey with a rich language.",
    icon: "🇷🇴",
  },
] as const;

export const TUTORS = [
  {
    name: "Marta",
    language: "German",
    speciality: "Goethe exam prep",
    video: "/video/german_tutor.mp4",
    poster: "/img/swiss.jpeg",
    accent: "bg-[#9b1c31]",
  },
  {
    name: "Clara",
    language: "French",
    speciality: "Everyday conversation",
    video: "/video/french_tour.mp4",
    poster: "/img/paris.jpeg",
    accent: "bg-[#c19a68]",
  },
  {
    name: "Luca",
    language: "Italian",
    speciality: "Work & relocation",
    video: "/video/Italian_tutor.mp4",
    poster: "/img/italy.jpeg",
    accent: "bg-[#0b192c]",
  },
] as const;

export const CURRICULUM_LEVELS = [
  ["A1", "Starter", "60 hours", "4-6 learners", "Foundations"],
  ["A2", "Everyday basics", "70 hours", "4-6 learners", "Progress certificate"],
  ["B1", "Independent", "80 hours", "4-6 learners", "B1 exam preparation"],
  ["B2", "Professional", "90 hours", "3-5 learners", "B2 exam preparation"],
  ["C1", "Advanced", "100 hours", "1-4 learners", "C1 exam preparation"],
] as const;

export const NURSE_PATH_STAGES = [
  {
    level: "A1-A2",
    title: "Foundations for care",
    description:
      "Build essential German for introductions, ward routines, anatomy, and everyday life in Germany.",
    size: "6-8 learners",
    time: "3-4 hrs / wk",
    badge: "Native Tutors",
  },
  {
    level: "B1",
    title: "Clinical communication",
    description:
      "Practise patient history taking, handovers, documentation, vital signs, and initial dossier review.",
    size: "4-6 learners",
    time: "4-5 hrs / wk",
    badge: "Ward Roleplays",
  },
  {
    level: "B2 / TELC Pflege",
    title: "TELC Pflege & Goethe prep",
    description:
      "Master specialized healthcare terminology, doctor discussions, and dual-level safety net exam tactics.",
    size: "3-5 learners",
    time: "5-6 hrs / wk",
    badge: "Combined B1-B2 Safety Net",
  },
  {
    level: "Placement",
    title: "Hospital hiring & relocation",
    description:
      "Direct interviews with German hospital employers, Defizitbescheid tracking, and fast-track work visa filing.",
    size: "Direct Hiring",
    time: "0 Placement Fee",
    badge: "Verified German Hospitals",
  },
] as const;

export const ABOUT_CORE_VALUES = [
  { icon: FaUserTie, label: "Human-first" },
  { icon: FaHeart, label: "Purpose-led" },
  { icon: FaGlobeEurope, label: "Europe-focused" },
] as const;

export const LEARNING_STEPS = [
  {
    icon: FaClipboardCheck,
    title: "Level assessment",
    description:
      "Start with a short assessment so your course begins at the right A1-C1 level.",
  },
  {
    icon: FaChalkboardTeacher,
    title: "Live classes",
    description:
      "Meet your tutor for structured lessons built around your work, study or relocation goal.",
  },
  {
    icon: FaComments,
    title: "Practice and feedback",
    description:
      "Use new language in realistic situations, then get clear feedback you can act on.",
  },
  {
    icon: FaLevelUpAlt,
    title: "Advance with confidence",
    description:
      "Review your progress, close the gaps and move to the next level when you are ready.",
  },
] as const;

export const WHY_CHOOSE_FEATURES = [
  [
    FaUserTie,
    "Native Tutors",
    "Learn pronunciation, expressions and culture from people who actually use the language every day.",
  ],
  [
    FaBullseye,
    "Goal-led Learning",
    "Lessons are shaped around your reason for learning career, school, relocation or conversation.",
  ],
  [
    FaCalendarAlt,
    "Flexible Schedule",
    "Fit lessons around work, school and family without giving up consistency.",
  ],
  [
    FaChartLine,
    "Visible Progress",
    "Know what you have learned and what to focus on next.",
  ],
  [
    FaComments,
    "Real Conversation",
    "Practice the situations you will actually face outside a classroom.",
  ],
  [
    FaGlobeEurope,
    "Culture Included",
    "Language makes more sense when you understand the people and culture behind it.",
  ],
] as const;

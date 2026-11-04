export interface Review {
  id: string;
  name: string;
  role: string;
  location: string;
  language: string;
  program: string;
  scoreOrOutcome: string;
  rating: number;
  date: string;
  quote: string;
  highlight: string;
  verified: boolean;
  avatarText: string;
  badge: string;
  isRecent?: boolean;
}

export const STUDENT_REVIEWS: Review[] = [
  {
    id: 'anjali-nair',
    name: 'Anjali Nair',
    role: 'Staff Nurse',
    location: 'Klinikum Stuttgart, Germany',
    language: 'German',
    program: 'German for Nurses (A1 to TELC B2 Pflege)',
    scoreOrOutcome: 'TELC Deutsch B1-B2 Pflege Cleared',
    rating: 5,
    date: 'April 2026',
    isRecent: true,
    quote:
      'Balancing 12-hour hospital shifts in Kerala with language study felt overwhelming until I joined Native Connects. What set them apart was the clinical focus — we weren’t just memorizing grammar; our tutor drilled daily shift handovers (Schichtübergabe), doctor discussions, and nursing documentation. I cleared TELC B2 Pflege on my first attempt and built the language confidence needed for hospital communication.',
    highlight: 'Cleared TELC B2 Pflege on first try & mastered clinical German',
    verified: true,
    avatarText: 'AN',
    badge: 'TELC B2 Certified',
  },
  {
    id: 'blessy-mathew',
    name: 'Blessy Mathew',
    role: 'ICU Critical Care Nurse',
    location: 'Charité Universitätsmedizin Berlin',
    language: 'German',
    program: 'German for Nurses Fast-Track',
    scoreOrOutcome: 'TELC B2 Pflege (Score: 285/300)',
    rating: 5,
    date: 'April 2026',
    isRecent: true,
    quote:
      'The difference with Native Connects is immediate native feedback. My educator in Berlin helped me eliminate hesitation in medical conversations. Within 6 months, my clinical German was solid enough to interview directly with hospital ward leads. Today I work in Berlin ICU with full confidence.',
    highlight: 'Direct hospital interview preparation & top TELC score',
    verified: true,
    avatarText: 'BM',
    badge: 'TELC B2 Pflege',
  },
  {
    id: 'rahul-menon',
    name: 'Rahul Menon',
    role: 'Mechanical Design Engineer',
    location: 'Munich, Germany',
    language: 'German',
    program: 'Intensive Goethe Prep (A2 to B2)',
    scoreOrOutcome: 'Goethe-Zertifikat B2 (Score: 84/100)',
    rating: 5,
    date: 'March 2026',
    isRecent: true,
    quote:
      'I needed a recognized B2 certificate for German engineering opportunities. Most institutes teach textbook German that leaves you hesitant in real conversations. With Native Connects, having native-speaking tutors who corrected my pronunciation and technical vocabulary made all the difference. The mock interview simulations gave me immense confidence.',
    highlight: 'Passed Goethe B2 with 84% & aced German technical interviews',
    verified: true,
    avatarText: 'RM',
    badge: 'Goethe B2 Certified',
  },
  {
    id: 'riya-george',
    name: 'Riya George',
    role: 'Paediatric Nurse',
    location: 'Asklepios Klinik Hamburg',
    language: 'German',
    program: 'German for Nurses (A2 to B2 Pflege)',
    scoreOrOutcome: 'TELC B2 Pflege Cleared',
    rating: 5,
    date: 'March 2026',
    isRecent: true,
    quote:
      'Native Connects provided focused clinical language training, healthcare roleplays and structured exam preparation. The evening batch sizes were small, so every student spoke in every single class and received direct tutor feedback.',
    highlight: 'Structured clinical training and personalized speaking practice',
    verified: true,
    avatarText: 'RG',
    badge: 'B2 Pflege Certified',
  },
  {
    id: 'priya-thomas',
    name: 'Priya Thomas',
    role: 'Registered ICU Nurse',
    location: 'Universitätsklinikum Frankfurt',
    language: 'German',
    program: 'Clinical German & Healthcare Communication',
    scoreOrOutcome: 'TELC Deutsch B1-B2 Pflege Cleared',
    rating: 5,
    date: 'February 2026',
    isRecent: false,
    quote:
      'The biggest relief was knowing Native Connects supports your learning step by step through B2 exam preparation. The live classes, guided self-study resources, and mock hospital conversations gave me complete confidence. Having small batches of just 4 to 5 learners ensured personal attention in every speaking class.',
    highlight: 'Small batch sizes & personalized exam preparation',
    verified: true,
    avatarText: 'PT',
    badge: 'B2 Pflege Certified',
  },
  {
    id: 'amit-sharma',
    name: 'Amit Sharma',
    role: 'Embedded Systems Engineer',
    location: 'Stuttgart, Germany',
    language: 'German',
    program: 'Goethe B2 to C1 Professional',
    scoreOrOutcome: 'Goethe C1 Zertifikat Passed',
    rating: 5,
    date: 'March 2026',
    isRecent: true,
    quote:
      'Moving from B2 textbook knowledge to high-stakes client meetings required genuine immersion. Learning with native instructors who understand German corporate culture made all the difference in negotiations and technical presentations.',
    highlight: 'C1 fluency for automotive engineering leadership',
    verified: true,
    avatarText: 'AS',
    badge: 'Goethe C1 Certified',
  },
  {
    id: 'sneha-varghese',
    name: 'Sneha Varghese',
    role: 'Staff Nurse',
    location: 'Kochi, India',
    language: 'German',
    program: 'Clinical German B1–B2 Batch',
    scoreOrOutcome: 'B1 Cleared · B2 in Progress',
    rating: 5,
    date: 'January 2026',
    isRecent: false,
    quote:
      'I was initially terrified of specialized medical German and patient history taking. The interactive roleplays with native educators helped me overcome the hesitation to speak. The evening batch timings fit my rotation schedule perfectly, and class recordings are a lifesaver when I have ward duty.',
    highlight: 'Flexible class timings & fear-free speaking practice',
    verified: true,
    avatarText: 'SV',
    badge: 'B2 Candidate',
  },
  {
    id: 'deepa-pillai',
    name: 'Deepa Pillai',
    role: 'Senior Ward Specialist',
    location: 'LMU Klinikum Munich',
    language: 'German',
    program: 'German for Nurses (A1–B2)',
    scoreOrOutcome: 'TELC Pflege B2 Cleared',
    rating: 5,
    date: 'February 2026',
    isRecent: false,
    quote:
      'From learning the basics of German cases to charting patient documentation (Pflegebericht), the course structure was clinical, rigorous, and practical. Passed TELC Pflege on first try and built the communication skills needed on the ward.',
    highlight: 'First-attempt TELC Pflege success & ward confidence',
    verified: true,
    avatarText: 'DP',
    badge: 'TELC Pflege Certified',
  },
  {
    id: 'kevin-paul',
    name: 'Kevin Paul',
    role: 'Consultant & Expat Aspirant',
    location: 'Bengaluru, India',
    language: 'French',
    program: 'Conversational French (A1 to A2)',
    scoreOrOutcome: 'Confident Real-world Fluency',
    rating: 5,
    date: 'January 2026',
    isRecent: false,
    quote:
      'I had tried language apps for months without being able to hold an authentic 2-minute conversation. Within 8 weeks of live coaching with Clara, I could navigate real travel scenarios, schedule appointments, and speak without freezing. The cultural context behind expressions makes learning much more natural.',
    highlight: 'Natural conversational fluency from day one',
    verified: true,
    avatarText: 'KP',
    badge: 'French Learner',
  },
];

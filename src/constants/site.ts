export const SITE_NAME = 'Native Connects';

export const SITE_DESCRIPTION =
  'Personalized online language courses with native-speaking tutors. Build practical skills for work, study, nursing, relocation and everyday life in Europe.';

const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();

export const SITE_URL = configuredSiteUrl
  ? new URL(configuredSiteUrl).origin
  : undefined;

export const SITE_KEYWORDS = [
  'online language courses',
  'German courses',
  'French courses',
  'Italian courses',
  'Romanian courses',
  'German for nurses',
  'European language learning',
];

export const ORGANIZATION_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'EducationalOrganization',
  name: SITE_NAME,
  description: SITE_DESCRIPTION,
  ...(SITE_URL ? { url: SITE_URL } : {}),
  areaServed: 'Europe',
  availableLanguage: ['English', 'French', 'German', 'Italian', 'Romanian'],
  knowsAbout: [
    'Online language courses',
    'German language learning',
    'French language learning',
    'Italian language learning',
    'Romanian language learning',
    'Language learning for work, study, nursing, and relocation',
  ],
};
export const SITE_NAME = 'Native Connects';
export const LEGAL_ENTITY_NAME = 'Native Connects';
export const TRADE_NAME = 'Native Connects';

export const SITE_DESCRIPTION =
  'Personalized online language courses, certified exam preparation (Goethe & TELC Pflege), and fast-track international career placement for nurses and professionals in Germany and Europe.';

const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();

export const SITE_URL = configuredSiteUrl
  ? new URL(configuredSiteUrl).origin
  : undefined;

export const CONTACT_DETAILS = {
  registeredName: LEGAL_ENTITY_NAME,
  tradeName: TRADE_NAME,
  supportEmail: 'support@nativeconnects.com',
  admissionsEmail: 'admissions@nativeconnects.com',
  grievanceEmail: 'grievance@nativeconnects.com',
  phone: '+91 94008 12345',
  whatsapp: '+91 94008 12345',
  registeredOffice: {
    line1: 'Level 4, Infopark Technology Centre, Infopark Phase II',
    city: 'Kochi',
    state: 'Kerala',
    postalCode: '682042',
    country: 'India',
  },
  europeanOffice: {
    line1: 'Kaiserstraße 14',
    city: 'Frankfurt am Main',
    postalCode: '60311',
    country: 'Germany',
  },
  hours: 'Monday – Saturday: 9:00 AM – 7:00 PM IST',
  grievanceOfficer: {
    name: 'Grievance Redressal Officer',
    designation: 'Head of Compliance & Student Services',
    email: 'grievance@nativeconnects.com',
    turnaround: '24 to 48 business hours',
  },
};

export const SITE_KEYWORDS = [
  'online language courses',
  'German courses for nurses',
  'TELC Deutsch B1 B2 Pflege',
  'Goethe Zertifikat exam preparation',
  'nurse recruitment in Germany',
  'German language training and placement',
  'French courses',
  'Italian courses',
  'Romanian courses',
  'European language learning and jobs',
];

export const ORGANIZATION_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'EducationalOrganization',
  name: LEGAL_ENTITY_NAME,
  alternateName: SITE_NAME,
  description: SITE_DESCRIPTION,
  ...(SITE_URL ? { url: SITE_URL } : {}),
  address: {
    '@type': 'PostalAddress',
    streetAddress: CONTACT_DETAILS.registeredOffice.line1,
    addressLocality: CONTACT_DETAILS.registeredOffice.city,
    addressRegion: CONTACT_DETAILS.registeredOffice.state,
    postalCode: CONTACT_DETAILS.registeredOffice.postalCode,
    addressCountry: 'IN',
  },
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: CONTACT_DETAILS.phone,
      contactType: 'customer service',
      email: CONTACT_DETAILS.supportEmail,
      availableLanguage: ['English', 'German', 'Malayalam', 'Hindi'],
    },
    {
      '@type': 'ContactPoint',
      email: CONTACT_DETAILS.grievanceEmail,
      contactType: 'grievance officer',
    },
  ],
  areaServed: ['Europe', 'India'],
  availableLanguage: ['English', 'French', 'German', 'Italian', 'Romanian'],
  knowsAbout: [
    'Online language courses',
    'German language learning',
    'TELC Pflege B1-B2 exam preparation',
    'Goethe German exam preparation',
    'Nurse training and hospital placement in Germany',
    'Language learning for work, study, nursing, and relocation',
  ],
};

// config/site.ts
// ─────────────────────────────────────────────────────────────────────────────
// SINGLE SOURCE OF TRUTH for all brand configuration.
// Replace values here to rebrand the entire site.
// No other files should contain hardcoded brand strings.
// ─────────────────────────────────────────────────────────────────────────────

export const siteConfig = {
  /** Firm display name — shown in nav, footer, page headers, metadata */
  name: 'MERIDIAN Capital Advisory',

  /** Short tagline shown beneath logo */
  tagline: 'Capital Advisory',

  /** Used in footer description and metadata fallback */
  description:
    'Institutional real estate advisory for family offices, sovereign-linked capital, and institutional allocators across the GCC and MENA markets.',

  /** Default browser title (used when no page-level title is set) */
  defaultTitle:
    'MERIDIAN Capital Advisory | GCC Institutional Real Estate',

  /** Production URL — set via NEXT_PUBLIC_SITE_URL env var */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://realestate.northstaradvisory.pro',

  /** Destination email for all contact and inquiry form submissions */
  contactEmail:
    process.env.CONTACT_EMAIL_TO ?? 'enquiries@meridian-advisory.com',

  /** Sender email for outbound messages (must be verified in Resend) */
  fromEmail:
    process.env.CONTACT_EMAIL_FROM ?? 'noreply@meridian-advisory.com',

  /** Year the firm was established */
  foundedYear: 2006,

  /** Years of advisory experience */
  yearsExperience: 18,

  /** Office locations */
  offices: [
    {
      city: 'Dubai',
      address: 'Gate Village 10, DIFC',
      label: 'DIFC, Dubai — Gate Village 10',
    },
    {
      city: 'Abu Dhabi',
      address: 'Al Maryah Island, ADGM',
      label: 'ADGM, Abu Dhabi — Al Maryah Island',
    },
  ],

  /** Regulatory bodies */
  regulators: ['DFSA', 'FSRA'] as const,

  /** Regulatory entities */
  entities: [
    {
      label: 'Dubai Entity',
      name: 'MERIDIAN Capital Advisory (DIFC) Limited',
      sub: 'DFSA Regulated · Category 4 Licence',
    },
    {
      label: 'Abu Dhabi Entity',
      name: 'MERIDIAN Capital Advisory (ADGM) Limited',
      sub: 'FSRA Regulated · Financial Services Permission',
    },
  ],

  /** Geographic markets under coverage */
  markets: [
    'Dubai',
    'Abu Dhabi',
    'Riyadh',
    'Jeddah',
    'Kuwait City',
    'Doha',
    'Muscat',
    'Cairo',
  ],

  /** Key stats used in Hero and Track Record sections */
  stats: {
    yearsExperience: '18',
    totalMandates: 'AED 14.2B+',
    marketsCount: '9',
    transactionsAdvised: '340+',
    institutionalClients: '23',
    capitalDeployedSupport: 'AED 6.8B+',
  },

  /** Social / SEO meta */
  social: {
    twitterHandle: '',
    linkedinUrl: '',
  },
} as const;

export type SiteConfig = typeof siteConfig;

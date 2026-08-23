// config/site.ts
// ─────────────────────────────────────────────────────────────────────────────
// SINGLE SOURCE OF TRUTH for all brand configuration.
// Replace values here to rebrand the entire site.
// No other files should contain hardcoded brand strings.
// ─────────────────────────────────────────────────────────────────────────────

export const siteConfig = {
  /** Firm display name — shown in nav, footer, page headers, metadata */
  name: 'North Star Advisory',

  /** Short tagline shown beneath logo */
  tagline: 'Real-Estate Growth Systems',

  /** Used in footer description and metadata fallback */
  description:
    'North Star Advisory helps GCC real-estate operators identify and repair the systems between marketing demand, enquiry capture, lead qualification, sales routing, CRM, and appointment conversion.',

  /** Default browser title (used when no page-level title is set) */
  defaultTitle:
    'North Star Advisory | GCC Real-Estate Lead-to-Appointment Systems',

  /** Production URL — set via NEXT_PUBLIC_SITE_URL env var */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://realestate.northstaradvisory.pro',

  /** Destination email for all contact and inquiry form submissions */
  contactEmail:
    process.env.CONTACT_EMAIL_TO ?? 'hamza@northstaradvisory.pro',

  /** Sender email for outbound messages (must be verified in Resend) */
  fromEmail:
    process.env.CONTACT_EMAIL_FROM ?? 'noreply@northstaradvisory.pro',

  /** Geographic markets under coverage */
  markets: [
    'Saudi Arabia',
    'UAE',
    'Qatar',
    'Kuwait',
    'Bahrain',
    'Oman',
  ],

  /** Social / SEO meta */
  social: {
    twitterHandle: '',
    linkedinUrl: '',
  },
} as const;

export type SiteConfig = typeof siteConfig;

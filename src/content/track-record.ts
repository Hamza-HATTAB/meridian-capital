// content/track-record.ts
// North Star Advisory — diagnostic framework and GCC market context.
// No unverified financial claims, transaction volumes, or client counts.

import type {
  AdvisoryPeriod,
  CaseStudy,
  ProcessStep,
  MarketIntelItem,
} from '@/types/track-record';
import type { SectorCoverage, MarketShare } from '@/types/metric';

// ── GCC Sector Landscape (market context, not our transaction distribution) ──
export const sectorCoverage: SectorCoverage[] = [
  { sector: 'Residential', percentage: 42, transactions: 0 },
  { sector: 'Hospitality', percentage: 21, transactions: 0 },
  { sector: 'Mixed-Use', percentage: 16, transactions: 0 },
  { sector: 'Logistics', percentage: 11, transactions: 0 },
  { sector: 'Office', percentage: 6, transactions: 0 },
  { sector: 'Industrial', percentage: 4, transactions: 0 },
];

// ── GCC Enquiry Volume Distribution (indicative, not proprietary) ──
export const marketShare: MarketShare[] = [
  { name: 'UAE', value: 41 },
  { name: 'KSA', value: 33 },
  { name: 'Qatar', value: 10 },
  { name: 'Kuwait', value: 7 },
  { name: 'Other GCC', value: 9 },
];

// ── Radar data (sector operator complexity, indicative) ──
export const radarData = [
  { subject: 'Residential', value: 85 },
  { subject: 'Hospitality', value: 75 },
  { subject: 'Mixed-Use', value: 80 },
  { subject: 'Logistics', value: 55 },
  { subject: 'Office', value: 60 },
  { subject: 'Industrial', value: 45 },
];

// ── The Diagnostic Process (5-stage methodology) ─────────────────────────────
export const researchProcess: ProcessStep[] = [
  {
    phase: '01. Enquiry Journey Mapping',
    description:
      'Map every channel through which enquiries arrive: portals, website, WhatsApp, walk-in, referral, events. Document what happens at each capture point — what is recorded, what is lost, and how fast.',
  },
  {
    phase: '02. Qualification & Routing Audit',
    description:
      'Review the criteria and process by which enquiries are assessed for fit, prioritised, and assigned to the correct project or sales agent. Identify where misrouting or delay occurs and at what cost.',
  },
  {
    phase: '03. CRM & Pipeline Review',
    description:
      'Audit the CRM configuration against actual sales behaviour. Identify leads that are stale, unassigned, or in undefined stages. Review what data is captured and whether it supports conversion decisions.',
  },
  {
    phase: '04. Follow-Up & Response Analysis',
    description:
      'Analyse response time to first enquiry, follow-up frequency, channel mix, and message content. Benchmark against the conversion evidence on response-time sensitivity in GCC real estate.',
  },
  {
    phase: '05. Gap Report & Prioritised Actions',
    description:
      'Deliver a structured gap report: the specific process, system, or routing failures reducing appointment conversion, ordered by likely impact, with concrete next steps for each.',
  },
];

// ── Advisory Process Periods (renamed: "How the problem evolved in GCC RE") ──
export const advisoryHistory: AdvisoryPeriod[] = [
  {
    period: '2015–2018',
    headline: 'Portal Dependency',
    description:
      'GCC real-estate sales became heavily dependent on property portals (Bayut, Property Finder, Dubizzle). Developers and operators gained enquiry volume but lost control of the capture process. Response speed and lead quality tracking were largely informal.',
    volume: '',
    mandates: '',
    notable:
      'The portal model optimises for enquiry volume, not conversion quality. Businesses that relied on portals without a qualification layer saw growing enquiry counts alongside flat appointment rates.',
  },
  {
    period: '2019–2021',
    headline: 'WhatsApp as Primary CRM',
    description:
      'Sales processes in GCC real estate migrated to WhatsApp as the dominant communication channel. This created speed advantages but destroyed pipeline visibility. Most developers had no reliable view of how many qualified prospects were in active discussion at any time.',
    volume: '',
    mandates: '',
    notable:
      'WhatsApp-first sales processes are high-touch and personal but structurally incompatible with pipeline management, follow-up discipline, and conversion reporting at scale.',
  },
  {
    period: '2022–2023',
    headline: 'CRM Implementation Without Adoption',
    description:
      'A wave of CRM deployments (Salesforce, HubSpot, proprietary) failed to solve the visibility problem because sales teams continued using WhatsApp and spreadsheets in parallel. CRM data became incomplete, making its reporting unreliable as a conversion management tool.',
    volume: '',
    mandates: '',
    notable:
      'CRM failure in GCC real estate is rarely a technology problem. It is a workflow design and change management problem. The system reflects the process — if the process is not defined, the CRM cannot fix it.',
  },
  {
    period: '2024–Present',
    headline: 'The Conversion Gap',
    description:
      'As market conditions tighten in some GCC sub-markets, the cost of wasted enquiries rises. Operators who cannot measure their enquiry-to-appointment rate cannot improve it. The gap between marketing spend and revenue is increasingly attributable to process failure, not demand shortfall.',
    volume: '',
    mandates: '',
    notable:
      'The businesses that will perform best in a normalising market are those that convert a higher percentage of the enquiries they already receive, not those that spend more to generate more leads.',
  },
];

// ── Illustrative Diagnostic Scenarios ─────────────────────────────────────────
// These describe how the diagnostic applies — not specific past clients.
export const caseStudies: CaseStudy[] = [
  {
    id: 'master-planned-enquiry-gap',
    tag: 'Illustrative Scenario',
    title: 'Master-Planned Community: Enquiry Capture Gap',
    context:
      'A GCC master-planned community operator was running active portal and digital campaigns generating several hundred enquiries per month across three project phases.',
    challenge:
      'Despite high enquiry volume, appointment conversion was declining. The sales team reported that most leads were "unqualified" — but there was no systematic data on what happened to enquiries between arrival and disqualification.',
    analysis:
      'A structured review of the capture-to-qualification flow would map exactly where enquiries enter the system, how quickly they are contacted, what criteria are applied to qualify or disqualify, and how many fall out at each stage without a decision.',
    outcome:
      'Expected finding in this type of diagnostic: 20–40% of enquiries are never contacted within 24 hours; qualification criteria are inconsistent across sales agents; a segment of disqualified leads would convert if routed to a different project or price tier.',
  },
  {
    id: 'crm-pipeline-visibility',
    tag: 'Illustrative Scenario',
    title: 'Multi-Project Developer: CRM Visibility Failure',
    context:
      'A developer with four active residential projects across two GCC markets implemented a CRM two years prior. Management could not produce a reliable weekly view of qualified pipeline by project.',
    challenge:
      'The CRM had data in it, but the data did not reflect actual sales activity. Key pipeline stages were undefined, assignment rules were manual, and follow-up activity was tracked in a separate WhatsApp system that did not sync.',
    analysis:
      'A CRM and pipeline review would assess the current configuration against the actual sales process: which stages exist, which are used, what triggers assignment, what follow-up logic is defined in the system versus in individual agent habits.',
    outcome:
      'Expected finding: pipeline stages require redesign around actual decision points; assignment automation would eliminate a consistent 12–48 hour delay; follow-up automation for specific prospect segments would recover a quantifiable number of stalled qualified leads.',
  },
  {
    id: 'response-time-conversion',
    tag: 'Illustrative Scenario',
    title: 'Hospitality-Linked Real Estate: Response Time Impact',
    context:
      'A hospitality-linked property operator was receiving branded-residence enquiries through three channels. Appointment conversion was significantly below expectations despite high-quality enquiry profiles.',
    challenge:
      'No one knew the average response time to first enquiry. Sales agents handled enquiries from their personal WhatsApp numbers, and no central record existed of when or how initial contact was made.',
    analysis:
      'Response time analysis would establish the actual average time-to-first-contact for each channel, segment this by agent and project, and benchmark it against the evidence on response-time sensitivity in luxury and branded real estate.',
    outcome:
      'Expected finding: average response time exceeds 4 hours for a majority of enquiries; the fastest-responding agents convert at a meaningfully higher rate; a structured first-response workflow would recover a quantifiable appointment volume.',
  },
];

// ── GCC Market Context Views ──────────────────────────────────────────────────
// Perspective and market context — not proprietary primary research.
export const marketIntelligence: MarketIntelItem[] = [
  {
    tag: 'Market Context',
    headline: 'GCC Residential Enquiry Volume: What the Conversion Data Does Not Show',
    body:
      'Portal data in GCC real estate reflects enquiry volume reliably but tells operators almost nothing about what happens after first contact. The gap between enquiry count and appointment count is the measurement most operators cannot currently produce — and the one most predictive of revenue performance.',
    date: 'August 2026',
  },
  {
    tag: 'Operator Insight',
    headline: 'Response Time in GCC Real Estate: The 5-Minute Rule and Why Most Operators Miss It',
    body:
      'Research on lead response timing consistently shows that contact within 5 minutes of an enquiry submission increases conversion probability significantly. In GCC real estate, where enquiries arrive across multiple channels outside business hours, achieving this requires a defined process — not individual sales discipline.',
    date: 'July 2026',
  },
  {
    tag: 'Process Observation',
    headline: 'Why CRM Adoption Fails in GCC Real-Estate Sales Teams',
    body:
      'CRM implementation without workflow redesign produces a shadow sales process: the system receives data, but decisions and conversations happen outside it. The result is CRM cost without CRM value. The fix is not better software — it is defining the process the software must reflect before selecting or configuring any tool.',
    date: 'June 2026',
  },
];

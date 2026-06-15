// content/track-record.ts
// Track record data — advisory history, case studies, sector coverage, market data.

import type {
  AdvisoryPeriod,
  CaseStudy,
  ProcessStep,
  MarketIntelItem,
} from '@/types/track-record';
import type { Metric, SectorCoverage, MarketShare } from '@/types/metric';

export const heroStats: Metric[] = [
  { value: '18', label: 'Advisory Experience', unit: 'Years' },
  { value: 'AED 14.2B+', label: 'Advisory Mandates' },
  { value: '9', label: 'GCC & MENA Coverage', unit: 'Markets' },
  { value: '340+', label: 'Transactions Advised' },
];

export const trackRecordStats: Metric[] = [
  { value: 'AED 14.2B+', label: 'Total Advisory Mandates', sub: 'Across 18 years' },
  { value: '340+', label: 'Transactions Advised', sub: 'Buy, sell, hold, structure' },
  { value: 'AED 6.8B+', label: 'Capital Deployed Support', sub: 'Buy-side mandates' },
  { value: '23', label: 'Institutional Clients', sub: 'Active relationships' },
];

export const summaryStats: Metric[] = [
  { value: '2006', label: 'Year Founded' },
  { value: '18', label: 'Years Advisory Practice' },
  { value: 'AED 14.2B+', label: 'Total Advisory Mandates' },
  { value: '340+', label: 'Transactions Advised' },
  { value: '9', label: 'Markets Under Coverage' },
  { value: '23', label: 'Active Institutional Clients' },
];

export const sectorCoverage: SectorCoverage[] = [
  { sector: 'Residential', percentage: 28, transactions: 96 },
  { sector: 'Logistics', percentage: 22, transactions: 75 },
  { sector: 'Hospitality', percentage: 18, transactions: 61 },
  { sector: 'Office & Commercial', percentage: 14, transactions: 48 },
  { sector: 'Mixed-Use', percentage: 12, transactions: 41 },
  { sector: 'Industrial', percentage: 6, transactions: 19 },
];

export const marketShare: MarketShare[] = [
  { name: 'Dubai', value: 38 },
  { name: 'Riyadh', value: 24 },
  { name: 'Abu Dhabi', value: 16 },
  { name: 'Jeddah', value: 9 },
  { name: 'Doha', value: 6 },
  { name: 'Other', value: 7 },
];

export const radarData = [
  { subject: 'Residential', value: 92 },
  { subject: 'Logistics', value: 88 },
  { subject: 'Hospitality', value: 78 },
  { subject: 'Office', value: 72 },
  { subject: 'Mixed-Use', value: 68 },
  { subject: 'Industrial', value: 60 },
];

export const advisoryHistory: AdvisoryPeriod[] = [
  {
    period: '2006–2008',
    headline: 'Market Formation',
    description:
      'Practice founded during the first wave of institutional capital entering GCC real estate. Advisory focus on market entry strategy, sector selection, and due diligence for Gulf-domiciled family offices.',
    volume: 'AED 1.2B+',
    mandates: '18 mandates',
    notable:
      'Inaugural advisory mandate: Kuwait family office market entry into Dubai residential and commercial.',
  },
  {
    period: '2009–2012',
    headline: 'Crisis Navigation',
    description:
      'The 2009 GCC real estate correction provided critical advisory experience in distressed asset assessment, portfolio review, and disposition strategy. Clients who acted on our recommendations reduced peak-to-trough losses significantly.',
    volume: 'AED 0.9B',
    mandates: '24 mandates',
    notable:
      'Advised on three distressed portfolio dispositions totalling AED 2.1B in asset value.',
  },
  {
    period: '2013–2019',
    headline: 'Institutional Expansion',
    description:
      'GCC real estate markets re-rated following the oil cycle correction of 2014–16. Advisory practice expanded to include Saudi and Qatari institutional clients. Logistics and hospitality coverage initiated.',
    volume: 'AED 4.8B+',
    mandates: '89 mandates',
    notable:
      'Appointed as retained advisor to two GCC sovereign-linked institutions.',
  },
  {
    period: '2020–2022',
    headline: 'Pandemic Disruption Response',
    description:
      'COVID-19 created significant volatility across all GCC real estate sectors. Advisory work pivoted to portfolio resilience, sector rotation guidance, and identifying structural value opportunities created by the dislocation.',
    volume: 'AED 3.1B',
    mandates: '67 mandates',
    notable:
      'Identified logistics sector outperformance thesis before mainstream market consensus — a call validated over the subsequent 24 months.',
  },
  {
    period: '2023–Present',
    headline: 'Post-Liquidity Normalisation',
    description:
      'GCC markets navigating the end of pandemic-era liquidity conditions, higher global rates, and significant Vision 2030 capital deployment. Advisory focus on pricing discipline, exit liquidity, and structural opportunity identification.',
    volume: 'AED 4.2B+',
    mandates: '142 mandates',
    notable:
      'Expanded data center advisory capability. Initiated digital infrastructure research coverage.',
  },
];

export const caseStudies: CaseStudy[] = [
  {
    id: 'gcc-logistics-portfolio',
    tag: 'Buy-Side Advisory',
    title: 'GCC Logistics Portfolio Acquisition',
    context:
      'A GCC family office with no prior logistics exposure sought to establish a core logistics portfolio across the UAE Northern Emirates.',
    challenge:
      'The client had no prior logistics real estate experience and required end-to-end advisory covering market entry thesis, asset identification, pricing benchmarking, and acquisition structuring.',
    analysis:
      'We identified that Grade-A logistics vacancy in Sharjah and Ajman had compressed to below 3.5%, well below equilibrium, driven by e-commerce growth and port development. New supply pipeline was 18–24 months away from completion, creating a window for core entry.',
    outcome:
      'Advised on the acquisition of 7 logistics assets totalling 480,000 sqft at an entry yield of 7.4%. Portfolio rental growth of 16% achieved in the 18 months following acquisition.',
  },
  {
    id: 'saudi-hospitality-development',
    tag: 'Capital Placement',
    title: 'Saudi Hospitality Development',
    context:
      'A family office with UHNW liquidity event proceeds sought to invest AED 800M into Saudi Arabian real estate aligned with Vision 2030.',
    challenge:
      'The Saudi hospitality market was undergoing a fundamental structural transformation due to Vision 2030. Standard international hospitality analysis frameworks were inadequate for the emerging Saudi tourism investment environment.',
    analysis:
      'We developed a proprietary Vision 2030 hospitality allocation framework, assessing leisure, business, religious, and sports tourism demand drivers independently. This revealed a structural gap in branded mid-scale hospitality outside Riyadh and Jeddah.',
    outcome:
      'Structured placement of AED 750M across two hospitality developments in Al-Ula and Abha. Both projects aligned to government tourism anchor programmes with government-supported demand guarantees.',
  },
  {
    id: 'difc-office-due-diligence',
    tag: 'Due Diligence',
    title: 'DIFC Office Building Acquisition Review',
    context:
      'An institutional investment manager was evaluating a Grade-A office building in DIFC, Dubai\'s financial district. The vendor\'s asking price implied a yield of 5.8%.',
    challenge:
      'The in-place income included one lease to a tenant with financial covenant concerns, and the asking price assumed a significant mark-to-market rental uplift that our market analysis suggested was optimistic.',
    analysis:
      'Our independent review identified: (i) the anchor tenant had issued a profit warning 6 months prior, representing a covenant risk not reflected in the pricing; (ii) rental uplift assumption was 22% above current comparable evidence; (iii) exit liquidity at target price was limited to a small pool of institutional buyers.',
    outcome:
      'We recommended the client negotiate a 12% price reduction or withdraw. The client negotiated a 9% reduction and received an income top-up provision. The anchor tenant did not renew at lease expiry 18 months later, validating the covenant risk assessment.',
  },
  {
    id: 'legacy-residential-portfolio',
    tag: 'Portfolio Optimisation',
    title: 'Legacy Residential Portfolio Review',
    context:
      'A GCC institutional investor held a diversified portfolio of 14 residential assets across Dubai and Abu Dhabi, accumulated between 2008 and 2016 at varying entry prices.',
    challenge:
      'The portfolio had not been systematically reviewed in 6 years. Assets ranged from significantly underperforming against market benchmarks to materially above market returns. No coherent hold/sell framework existed.',
    analysis:
      'We conducted asset-level performance attribution, repositioning assessment for underperforming assets, and exit timing analysis aligned to market cycle positioning. Six assets were identified as disposal candidates with strong exit liquidity.',
    outcome:
      'Portfolio streamlined from 14 to 8 assets. Disposal of 6 assets at an aggregate above-market premium of 11% due to timing and marketing strategy. Proceeds redeployed into logistics.',
  },
];

export const researchProcess: ProcessStep[] = [
  {
    phase: '01. Market Intelligence',
    description:
      'Primary and secondary research on target markets. Vacancy, absorption, supply pipeline, pricing benchmarks, and macro overlay. Updated quarterly for all nine markets under coverage.',
  },
  {
    phase: '02. Investment Analysis',
    description:
      'Asset-level financial modeling, yield analysis, return scenario construction, and risk identification across income, structural, and market risk categories.',
  },
  {
    phase: '03. Independent Due Diligence',
    description:
      'Commercial, legal, and technical validation. Counterparty assessment. Lease quality review. Exit strategy verification. Pricing integrity benchmarking against comparable transactions.',
  },
  {
    phase: '04. IC-Ready Recommendation',
    description:
      'Structured recommendation memorandum. Risk-adjusted return summary. Scenario analysis with downside quantification. Written to investment committee standard.',
  },
  {
    phase: '05. Execution Support',
    description:
      'Transaction management through to close. Counterparty negotiation support. Legal and financial workstream coordination. Post-close performance monitoring.',
  },
];

export const marketIntelligence: MarketIntelItem[] = [
  {
    tag: 'Residential Markets',
    headline:
      'Dubai Residential Correction Cycle: Structural Shift or Cyclical Pause?',
    body:
      'Transaction volumes in Dubai\'s residential segment declined 8.4% in Q1 2026 following 14 consecutive quarters of price appreciation. Our analysis distinguishes between speculative unwinding and genuine demand compression — a critical distinction for capital allocators with longer hold horizons.',
    date: 'May 2026',
  },
  {
    tag: 'Logistics & Industrial',
    headline: 'GCC Logistics Real Estate: Undersupply Persists Despite Pipeline Growth',
    body:
      'Grade-A logistics vacancy across the GCC stands at 3.2%, constrained by limited zoned land near urban distribution points. E-commerce penetration growing at 18% CAGR is compressing absorption timelines. Our conviction on last-mile industrial assets in Jeddah and Abu Dhabi remains elevated.',
    date: 'April 2026',
  },
  {
    tag: 'Capital Markets',
    headline:
      'Sovereign Capital Re-Allocation: Implications for Institutional Real Estate',
    body:
      'GCC sovereign wealth funds have increased real estate allocations by an aggregate AED 340B over the past three fiscal years, with increasing emphasis on income-generating assets. This structural capital rotation is reshaping pricing dynamics and exit liquidity across core sectors.',
    date: 'April 2026',
  },
];

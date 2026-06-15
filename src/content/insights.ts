// content/insights.ts
// All research publications — extracted from source UI and typed.
// To integrate a CMS: replace this export with an async fetch returning Insight[].

import type { Insight } from '@/types/insight';

const CITY_IMG =
  'https://images.unsplash.com/photo-1464938050520-ef2270bb8ce8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080';

export const insights: Insight[] = [
  {
    id: 'gcc-outlook-2026-2028',
    category: 'Annual Research',
    date: 'June 2026',
    title: 'GCC Real Estate Outlook 2026–2028: Navigating the Post-Liquidity Environment',
    excerpt:
      'Our annual outlook addresses the structural transition underway in GCC real estate markets as post-pandemic liquidity normalises. The report covers ten investment themes, sector conviction rankings, and market-by-market allocation recommendations for institutional capital.',
    featured: true,
    imageUrl: CITY_IMG,
    readTime: '24 min read',
  },
  {
    id: 'riyadh-office-market-2026',
    category: 'Sector Analysis',
    date: 'May 2026',
    title: 'Riyadh Office Market: Supply Pressure and Demand Resilience',
    excerpt:
      'Grade-A office vacancy in Riyadh has compressed to 4.1%, the lowest in 12 years, driven by Vision 2030 corporate relocation mandates and limited new completions.',
    featured: false,
    readTime: '12 min read',
  },
  {
    id: 'dubai-residential-late-cycle',
    category: 'Market Commentary',
    date: 'May 2026',
    title: 'Dubai Residential Pricing: Are We Late Cycle?',
    excerpt:
      'A data-driven assessment of whether Dubai\'s four-year residential price appreciation cycle has peaked, and what the indicators suggest about near-term market direction.',
    featured: false,
    readTime: '9 min read',
  },
  {
    id: 'data-centers-gcc',
    category: 'Investment Theme',
    date: 'April 2026',
    title: 'Data Centers as Institutional Real Estate: Risk-Return Profiling for GCC Allocators',
    excerpt:
      'The rapid digitalisation of GCC economies creates the structural foundation for a new institutional asset class. We assess the risk-return characteristics of hyperscale versus edge data center assets.',
    featured: false,
    readTime: '16 min read',
  },
  {
    id: 'kuwait-allocation-opportunity',
    category: 'Market Intelligence',
    date: 'April 2026',
    title: 'Kuwait Real Estate: The Underanalysed Allocation Opportunity',
    excerpt:
      'Kuwait\'s real estate market receives disproportionately limited institutional coverage relative to its population, liquidity depth, and sovereign capital base. We present a first-principles assessment.',
    featured: false,
    readTime: '14 min read',
  },
  {
    id: 'gcc-logistics-undersupply',
    category: 'Sector Analysis',
    date: 'March 2026',
    title: 'GCC Logistics: Structural Undersupply and the E-Commerce Demand Driver',
    excerpt:
      'Grade-A logistics vacancy across the GCC stands at 3.2%, constrained by limited zoned land near urban distribution points. E-commerce penetration growing at 18% CAGR is compressing absorption timelines.',
    featured: false,
    readTime: '11 min read',
  },
];

// content/insights.ts
// North Star Advisory market perspectives and operator analysis.
// These are opinion and analysis pieces — not proprietary primary research.

import type { Insight } from '@/types/insight';

const CITY_IMG =
  'https://images.unsplash.com/photo-1464938050520-ef2270bb8ce8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080';

export const insights: Insight[] = [
  {
    id: 'gcc-real-estate-conversion-2026',
    category: 'Analysis',
    date: 'August 2026',
    title: 'The Conversion Gap: Where GCC Real-Estate Revenue Is Being Lost',
    excerpt:
      'GCC real-estate operators increased marketing spend significantly between 2022 and 2025. Enquiry volumes followed. Appointment conversion rates did not. This piece examines the five process points where qualified enquiries most commonly fail to become appointments — and what the pattern reveals about where investment should go next.',
    featured: true,
    imageUrl: CITY_IMG,
    readTime: '9 min read',
  },
  {
    id: 'response-time-gcc',
    category: 'Operator Insight',
    date: 'July 2026',
    title: 'Response Time in GCC Real Estate: Why Speed Is a Process Problem, Not a People Problem',
    excerpt:
      'The research on lead response timing is consistent: contact within minutes dramatically outperforms contact within hours. In GCC real estate, where most enquiries arrive through WhatsApp and outside structured business hours, achieving fast response requires a designed process — not a motivated sales team.',
    featured: false,
    readTime: '7 min read',
  },
  {
    id: 'crm-adoption-failure',
    category: 'Operator Insight',
    date: 'June 2026',
    title: 'Why CRM Implementations Fail in GCC Real-Estate Sales Teams',
    excerpt:
      'Most CRM failures in GCC real estate are not technology failures. They are workflow design failures. When the sales process is not defined before the CRM is configured, the result is a system that receives data but does not influence decisions — cost without value.',
    featured: false,
    readTime: '8 min read',
  },
  {
    id: 'qualification-routing-problem',
    category: 'Process Analysis',
    date: 'May 2026',
    title: 'Misrouted Leads: The Hidden Conversion Cost in Multi-Project Developments',
    excerpt:
      'A prospect enquiring about a two-bedroom unit in Phase 1 and being routed to a sales agent responsible for Phase 3 commercial units is a lost appointment. Misrouting is common in multi-project GCC developers, rarely measured, and straightforward to fix once identified.',
    featured: false,
    readTime: '6 min read',
  },
  {
    id: 'portal-dependency-gcc',
    category: 'Market Perspective',
    date: 'April 2026',
    title: 'Portal Dependency and the Qualification Problem',
    excerpt:
      'Property portal enquiries are volume-efficient but qualification-light. The typical portal lead has lower intent and more price sensitivity than a referral or direct website enquiry. Operators who apply the same qualification process to all channels regardless of source are misallocating sales resource at scale.',
    featured: false,
    readTime: '7 min read',
  },
  {
    id: 'follow-up-gcc-real-estate',
    category: 'Process Analysis',
    date: 'March 2026',
    title: 'Follow-Up in GCC Real Estate: Why Two Messages Is Not a Process',
    excerpt:
      'The standard follow-up sequence in GCC real estate is one WhatsApp message, one call attempt, and silence. Qualified prospects who need more time, multiple decision-makers, or a specific trigger to re-engage are abandoned rather than nurtured. A structured sequence changes this — without adding headcount.',
    featured: false,
    readTime: '6 min read',
  },
];

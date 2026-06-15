// content/services.ts
// Advisory services — extracted from source UI and typed.

import type { Service } from '@/types/service';

export const advisoryServices: Service[] = [
  {
    id: 'capital-deployment',
    num: '01',
    title: 'Capital Deployment Advisory',
    description:
      'Independent market entry assessment, sector and asset-type selection, risk-adjusted return modeling, and structured deal origination for institutional capital entering or repositioning within GCC real estate.',
    challenge:
      'Institutional capital entering unfamiliar markets faces asymmetric information risk. Without independent advisory, allocation decisions are frequently driven by developer-sponsored research with conflicting incentives.',
    approach:
      'We conduct primary market research, independently assess sector dynamics, and model risk-adjusted returns across a defined opportunity set before presenting a structured recommendation.',
    outcome:
      'Clients receive a disciplined capital deployment framework — sector selection, entry pricing benchmarks, and deal origination criteria — that is free from transactional bias.',
  },
  {
    id: 'market-intelligence',
    num: '02',
    title: 'Market Intelligence & Research',
    description:
      'Proprietary market data, vacancy analysis, pricing intelligence, supply pipeline modeling, and macro-micro integration reports. Our research is used internally to drive recommendations — not distributed as a marketing product.',
    challenge:
      'Publicly available market data lags reality by 6–12 months at market inflection points. Institutions relying on published reports make decisions on information that is already priced into the market.',
    approach:
      'Primary research through direct engagement with market participants, systematic transaction evidence collection, and quarterly coverage across nine GCC and MENA markets.',
    outcome:
      'Actionable intelligence that is consistently ahead of consensus — particularly at cycle turning points where early-mover advantage has the greatest capital allocation impact.',
  },
  {
    id: 'transaction-due-diligence',
    num: '03',
    title: 'Transaction Due Diligence',
    description:
      'Structured review of commercial, financial, and market factors. We assess pricing integrity, lease quality, structural risk, and exit liquidity — providing investment committees with independent second opinions.',
    challenge:
      'Vendor-commissioned due diligence is structurally conflicted. Investment committees need genuinely independent assessment of pricing, covenant quality, and exit assumptions.',
    approach:
      'Independent pricing benchmarking against proprietary transaction comparable database. Lease covenant analysis, market rental assumption review, and exit liquidity assessment against current buyer pool.',
    outcome:
      'Investment committees receive a clear, evidence-based recommendation with identified risks, pricing assessment, and if applicable, specific negotiation parameters.',
  },
  {
    id: 'portfolio-strategy',
    num: '04',
    title: 'Portfolio Strategy & Optimisation',
    description:
      'Existing portfolio review, performance attribution, rebalancing strategy, and disposition advisory for institutions seeking to optimise their GCC real estate allocation against evolving market conditions.',
    challenge:
      'Institutional portfolios accumulate over time without systematic review. Legacy assets frequently underperform without awareness, while capital is retained in sectors that no longer represent optimal allocation.',
    approach:
      'Asset-level performance attribution against market benchmarks, hold-sell framework construction, repositioning assessment for underperforming assets, and exit timing analysis aligned to market cycle.',
    outcome:
      'A clear portfolio action plan — assets to hold, assets to dispose, assets to reposition — with execution sequencing and target pricing guidance.',
  },
  {
    id: 'investment-committee-support',
    num: '05',
    title: 'Investment Committee Support',
    description:
      'Structured IC presentation preparation, underwriting review, risk scenario analysis, and benchmarking against peer transactions. We help investment committees make better decisions.',
    challenge:
      'Investment committees frequently receive documentation structured by deal sponsors with insufficient independent challenge. Approval processes lack the rigour required for capital of this scale.',
    approach:
      'Independent review of underwriting assumptions, stress testing of key variables, peer transaction benchmarking, and structured risk assessment against our proprietary framework.',
    outcome:
      'Investment committees receive an independent briefing document that identifies risks the deal sponsor has not adequately addressed — enabling more informed approval or rejection decisions.',
  },
];

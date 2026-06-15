// content/themes.ts
// Investment themes — extracted from source UI and typed.

import type { InvestmentTheme } from '@/types/theme';

export const investmentThemes: InvestmentTheme[] = [
  {
    id: 'logistics-industrial',
    sector: 'Logistics & Industrial',
    thesis:
      'Structural undersupply against accelerating e-commerce penetration creates durable income premiums in strategically located last-mile assets.',
    conviction: 'High',
    markets: 'UAE, KSA',
    allocation: 'Core-Plus',
  },
  {
    id: 'hospitality-tourism',
    sector: 'Hospitality & Tourism',
    thesis:
      'Vision 2030 tourism infrastructure mandates and post-pandemic demand recovery support selective opportunities in business and lifestyle hospitality.',
    conviction: 'Moderate-High',
    markets: 'KSA, UAE',
    allocation: 'Value-Add',
  },
  {
    id: 'multifamily-residential',
    sector: 'Multifamily Residential',
    thesis:
      'Institutional-grade multifamily remains nascent in the GCC with growing renter population and lack of professionally managed stock.',
    conviction: 'Emerging',
    markets: 'UAE, Qatar',
    allocation: 'Development',
  },
  {
    id: 'mixed-use-development',
    sector: 'Mixed-Use Development',
    thesis:
      'Master-planned mixed-use assets with diversified income streams exhibit lower volatility and improved institutional exit liquidity.',
    conviction: 'Moderate',
    markets: 'UAE, Kuwait',
    allocation: 'Core',
  },
  {
    id: 'data-centers-digital',
    sector: 'Data Centers & Digital',
    thesis:
      'Rapid cloud adoption, AI infrastructure demand, and sovereign digital economy mandates underpin a generational build-out opportunity.',
    conviction: 'High',
    markets: 'UAE, KSA, Oman',
    allocation: 'Core-Plus',
  },
];

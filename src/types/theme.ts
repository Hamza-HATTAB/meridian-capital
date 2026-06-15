// types/theme.ts

export type ConvictionLevel =
  | 'High'
  | 'Moderate-High'
  | 'Moderate'
  | 'Emerging';

export type AllocationStrategy =
  | 'Core'
  | 'Core-Plus'
  | 'Value-Add'
  | 'Development';

export interface InvestmentTheme {
  readonly id: string;
  readonly sector: string;
  readonly thesis: string;
  readonly conviction: ConvictionLevel;
  readonly markets: string;
  readonly allocation: AllocationStrategy;
}

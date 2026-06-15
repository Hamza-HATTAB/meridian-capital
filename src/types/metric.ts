// types/metric.ts

export interface Metric {
  readonly value: string;
  readonly label: string;
  readonly sub?: string;
  readonly unit?: string;
}

export interface SectorCoverage {
  readonly sector: string;
  readonly percentage: number;
  readonly transactions: number;
}

export interface MarketShare {
  readonly name: string;
  readonly value: number;
}

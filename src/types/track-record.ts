// types/track-record.ts

export interface AdvisoryPeriod {
  readonly period: string;
  readonly headline: string;
  readonly description: string;
  readonly volume: string;
  readonly mandates: string;
  readonly notable: string;
}

export interface CaseStudy {
  readonly id: string;
  readonly tag: string;
  readonly title: string;
  readonly context: string;
  readonly challenge: string;
  readonly analysis: string;
  readonly outcome: string;
}

export interface RadarDataPoint {
  readonly subject: string;
  readonly value: number;
}

export interface ProcessStep {
  readonly phase: string;
  readonly description: string;
}

export interface MarketIntelItem {
  readonly tag: string;
  readonly headline: string;
  readonly body: string;
  readonly date: string;
}

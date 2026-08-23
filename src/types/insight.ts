// types/insight.ts

export type InsightCategory =
  | 'Annual Research'
  | 'Sector Analysis'
  | 'Market Commentary'
  | 'Investment Theme'
  | 'Market Intelligence'
  | 'Quarterly Update'
  | 'Analysis'
  | 'Operator Insight'
  | 'Process Analysis'
  | 'Market Perspective';

export interface Insight {
  readonly id: string;
  readonly category: InsightCategory;
  readonly date: string;
  readonly title: string;
  readonly excerpt: string;
  readonly featured?: boolean;
  readonly imageUrl?: string;
  readonly readTime?: string;
}

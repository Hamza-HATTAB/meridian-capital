// types/transaction.ts

export type TransactionType =
  | 'Logistics'
  | 'Hospitality'
  | 'Mixed-Use'
  | 'Office'
  | 'Residential'
  | 'Industrial';

export interface Transaction {
  readonly id: string;
  readonly name: string;
  readonly description: string;
  readonly type: TransactionType;
  readonly market: string;
  readonly strategy: string;
  readonly role: string;
  readonly year?: number;
  readonly featured?: boolean;
}

// types/service.ts

export interface Service {
  readonly id: string;
  readonly num: string;
  readonly title: string;
  readonly description: string;
  readonly challenge?: string;
  readonly approach?: string;
  readonly outcome?: string;
}

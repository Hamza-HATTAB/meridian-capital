// types/team.ts

export interface TeamMember {
  readonly id: string;
  readonly name: string;
  readonly title: string;
  readonly background: readonly string[];
  readonly expertise: string;
  readonly note: string;
  readonly imageUrl?: string;
}

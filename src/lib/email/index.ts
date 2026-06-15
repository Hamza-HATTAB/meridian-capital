// lib/email/index.ts
// ─────────────────────────────────────────────────────────────────────────────
// Email service interface — provider-agnostic abstraction.
// Swap providers by changing the implementation, not the callers.
// ─────────────────────────────────────────────────────────────────────────────

export interface EmailPayload {
  readonly from: string;
  readonly to: string;
  readonly subject: string;
  readonly html: string;
  readonly replyTo?: string;
}

export interface EmailResult {
  readonly success: boolean;
  readonly error?: string;
}

export interface EmailService {
  send(payload: EmailPayload): Promise<EmailResult>;
}

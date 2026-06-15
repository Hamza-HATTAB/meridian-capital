// lib/email/resend.ts
// ─────────────────────────────────────────────────────────────────────────────
// Resend email provider implementation.
// To switch providers, create a new file implementing EmailService,
// then update the import in actions/contact.ts.
// ─────────────────────────────────────────────────────────────────────────────

import { Resend } from 'resend';
import type { EmailService, EmailPayload, EmailResult } from './index';

// Instantiate the global Resend client.
// We provide a fallback string 're_dummy' so the application does not crash
// during build or dev environments where the API key is not yet set.
export const resend = new Resend(process.env.RESEND_API_KEY || 're_dummy');

function createResendService(): EmailService {
  if (!process.env.RESEND_API_KEY) {
    console.warn(
      '[Email] RESEND_API_KEY is not set. Email delivery will fail in production.'
    );
  }

  return {
    async send(payload: EmailPayload): Promise<EmailResult> {
      if (!process.env.RESEND_API_KEY) {
        console.warn('[Email] Skipping send — RESEND_API_KEY not configured.');
        return { success: false, error: 'Email service not configured.' };
      }

      const { error } = await resend.emails.send({
        from: payload.from,
        to: payload.to,
        subject: payload.subject,
        html: payload.html,
        replyTo: payload.replyTo,
      });

      if (error) {
        console.error('[Email] Resend error:', error);
        return { success: false, error: error.message };
      }

      return { success: true };
    },
  };
}

export const emailService: EmailService = createResendService();

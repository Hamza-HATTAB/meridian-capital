'use server';

import { z } from 'zod';
import { emailService } from '@/lib/email/resend';
import { siteConfig } from '@/config/site';
import { headers } from 'next/headers';
import { Ratelimit } from '@upstash/ratelimit';
import { Redis } from '@upstash/redis';

// ── Validation Schema ──────────────────────────────────────────────────────
// Runs server-side, independently of client-side validation.
const contactSchema = z.object({
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters.')
    .max(100, 'Name must not exceed 100 characters.'),
  institution: z
    .string()
    .min(2, 'Institution name must be at least 2 characters.')
    .max(200, 'Institution name must not exceed 200 characters.'),
  email: z.string().email('Please enter a valid email address.'),
  enquiry: z
    .string()
    .min(20, 'Please provide at least 20 characters describing your enquiry.')
    .max(2000, 'Enquiry must not exceed 2000 characters.'),
});

export type ContactFormState = {
  success: boolean;
  error?: string;
  fieldErrors?: Partial<Record<keyof z.infer<typeof contactSchema>, string[]>>;
};

// ── Rate Limiter ───────────────────────────────────────────────────────────
// Uses lazy initialisation so a dead/missing Upstash URL never crashes at
// module load time. Any connectivity failure degrades gracefully (fail-open).
function getRateLimiter(): Ratelimit | null {
  const url = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;
  if (!url || !token) return null;
  try {
    return new Ratelimit({
      redis: new Redis({ url, token }),
      limiter: Ratelimit.slidingWindow(10, '1 h'),
      analytics: false,
    });
  } catch (err) {
    console.error('[contact] Failed to initialise Redis rate limiter:', err);
    return null;
  }
}
const rateLimiter = getRateLimiter();

// ── Server Action ──────────────────────────────────────────────────────────
export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  // --- Rate Limiting ---
  const requestHeaders = await headers();
  const ip = requestHeaders.get('x-forwarded-for') ?? '127.0.0.1';

  if (rateLimiter) {
    try {
      const { success: rateLimitSuccess } = await rateLimiter.limit(`contact-form-${ip}`);
      if (!rateLimitSuccess) {
        return {
          success: false,
          error: 'Too many inquiries sent. Please try again later.',
        };
      }
    } catch (error) {
      // Fail-open: log but do not block the submission
      console.error('[contact] Rate limit check failed (fail-open):', error);
    }
  }

  // --- Turnstile Verification ---
  const token = formData.get('cf-turnstile-response');
  if (!token) {
    return {
      success: false,
      error: 'Please complete the security challenge.',
    };
  }

  const turnstileVerify = await fetch(
    'https://challenges.cloudflare.com/turnstile/v0/siteverify',
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `secret=${process.env.TURNSTILE_SECRET_KEY}&response=${token}`,
    }
  );
  
  const turnstileResponse = await turnstileVerify.json();
  if (!turnstileResponse.success) {
    return {
      success: false,
      error: 'Security challenge failed. Please try again.',
    };
  }

  const raw = {
    name: formData.get('name'),
    institution: formData.get('institution'),
    email: formData.get('email'),
    enquiry: formData.get('enquiry'),
  };

  const parsed = contactSchema.safeParse(raw);

  if (!parsed.success) {
    return {
      success: false,
      error: 'Please correct the errors below.',
      fieldErrors: parsed.error.flatten().fieldErrors as Partial<
        Record<keyof z.infer<typeof contactSchema>, string[]>
      >,
    };
  }

  const { name, institution, email, enquiry } = parsed.data;

  const html = `
    <div style="font-family: Georgia, serif; max-width: 600px; color: #1A1A1A;">
      <h2 style="font-size: 20px; font-weight: 400; margin-bottom: 24px; border-bottom: 1px solid #E0DDD5; padding-bottom: 16px;">
        New Institutional Enquiry — ${siteConfig.name}
      </h2>
      <table style="width: 100%; border-collapse: collapse;">
        <tr>
          <td style="padding: 10px 0; font-size: 11px; letter-spacing: 0.12em; text-transform: uppercase; color: #726757; width: 140px;">Name</td>
          <td style="padding: 10px 0; font-size: 14px; color: #1A1A1A;">${name}</td>
        </tr>
        <tr>
          <td style="padding: 10px 0; font-size: 11px; letter-spacing: 0.12em; text-transform: uppercase; color: #726757;">Institution</td>
          <td style="padding: 10px 0; font-size: 14px; color: #1A1A1A;">${institution}</td>
        </tr>
        <tr>
          <td style="padding: 10px 0; font-size: 11px; letter-spacing: 0.12em; text-transform: uppercase; color: #726757;">Email</td>
          <td style="padding: 10px 0; font-size: 14px; color: #1A1A1A;">${email}</td>
        </tr>
      </table>
      <div style="margin-top: 24px; padding: 20px; background: #F5F3EE; border-left: 3px solid #6B604E;">
        <div style="font-size: 11px; letter-spacing: 0.12em; text-transform: uppercase; color: #726757; margin-bottom: 10px;">Nature of Enquiry</div>
        <p style="font-size: 14px; line-height: 1.75; color: #5C5C5C; white-space: pre-wrap;">${enquiry}</p>
      </div>
      <p style="margin-top: 32px; font-size: 11px; color: var(--color-text-muted);">
        Received via ${siteConfig.name} website · ${new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
      </p>
    </div>
  `;

  const result = await emailService.send({
    from: siteConfig.fromEmail,
    to: siteConfig.contactEmail,
    subject: `Institutional Enquiry — ${name}, ${institution}`,
    html,
    replyTo: email,
  });

  if (!result.success) {
    return {
      success: false,
      error: 'We were unable to submit your enquiry. Please try again or contact us directly.',
    };
  }

  return { success: true };
}

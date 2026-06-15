'use server';

import { z } from 'zod';
import { emailService } from '@/lib/email/resend';
import { siteConfig } from '@/config/site';

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

// ── Server Action ──────────────────────────────────────────────────────────
export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
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

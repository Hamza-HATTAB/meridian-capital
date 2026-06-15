import { describe, it, expect, vi, beforeEach } from 'vitest';
import { submitContactForm } from './contact';
import { emailService } from '@/lib/email/resend';

vi.mock('@/lib/email/resend', () => ({
  emailService: {
    send: vi.fn(),
  },
}));

vi.mock('@/config/site', () => ({
  siteConfig: {
    name: 'Test Site',
    fromEmail: 'noreply@test.com',
    contactEmail: 'contact@test.com',
  },
}));

describe('submitContactForm server action', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  const createFormData = (data: Record<string, string>) => {
    const fd = new FormData();
    Object.entries(data).forEach(([key, value]) => fd.append(key, value));
    return fd;
  };

  it('fails validation when required fields are missing', async () => {
    const formData = createFormData({});
    const result = await submitContactForm({ success: false }, formData);

    expect(result.success).toBe(false);
    expect(result.error).toBe('Please correct the errors below.');
    expect(result.fieldErrors).toHaveProperty('name');
    expect(result.fieldErrors).toHaveProperty('institution');
    expect(result.fieldErrors).toHaveProperty('email');
    expect(result.fieldErrors).toHaveProperty('enquiry');
    expect(emailService.send).not.toHaveBeenCalled();
  });

  it('fails validation when enquiry is too short', async () => {
    const formData = createFormData({
      name: 'John Doe',
      institution: 'Test Corp',
      email: 'john@test.com',
      enquiry: 'Too short',
    });
    const result = await submitContactForm({ success: false }, formData);

    expect(result.success).toBe(false);
    expect(result.fieldErrors?.enquiry).toContain('Please provide at least 20 characters describing your enquiry.');
  });

  it('fails validation on invalid email', async () => {
    const formData = createFormData({
      name: 'John Doe',
      institution: 'Test Corp',
      email: 'not-an-email',
      enquiry: 'This is a long enough enquiry to pass the length check.',
    });
    const result = await submitContactForm({ success: false }, formData);

    expect(result.success).toBe(false);
    expect(result.fieldErrors?.email).toContain('Please enter a valid email address.');
  });

  it('handles email service failure', async () => {
    vi.mocked(emailService.send).mockResolvedValueOnce({ success: false, error: 'API Error' });

    const formData = createFormData({
      name: 'John Doe',
      institution: 'Test Corp',
      email: 'john@test.com',
      enquiry: 'This is a long enough enquiry to pass the length check.',
    });

    const result = await submitContactForm({ success: false }, formData);

    expect(result.success).toBe(false);
    expect(result.error).toBe('We were unable to submit your enquiry. Please try again or contact us directly.');
    expect(emailService.send).toHaveBeenCalledTimes(1);
  });

  it('sends email and returns success when valid', async () => {
    vi.mocked(emailService.send).mockResolvedValueOnce({ success: true });

    const formData = createFormData({
      name: 'John Doe',
      institution: 'Test Corp',
      email: 'john@test.com',
      enquiry: 'This is a long enough enquiry to pass the length check.',
    });

    const result = await submitContactForm({ success: false }, formData);

    expect(result.success).toBe(true);
    expect(result.error).toBeUndefined();
    expect(result.fieldErrors).toBeUndefined();
    expect(emailService.send).toHaveBeenCalledTimes(1);
    expect(emailService.send).toHaveBeenCalledWith({
      from: 'noreply@test.com',
      to: 'contact@test.com',
      subject: 'Institutional Enquiry — John Doe, Test Corp',
      html: expect.stringContaining('John Doe'),
      replyTo: 'john@test.com',
    });
  });
});

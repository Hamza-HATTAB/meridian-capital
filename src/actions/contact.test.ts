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
    fromEmail: 'noreply@northstaradvisory.pro',
    contactEmail: 'hamza@northstaradvisory.pro',
  },
}));

vi.mock('next/headers', () => ({
  headers: vi.fn().mockResolvedValue({
    get: vi.fn().mockReturnValue('127.0.0.1'),
  }),
}));

vi.mock('@upstash/ratelimit', () => {
  class RatelimitMock {
    limit = vi.fn().mockResolvedValue({ success: true });
    static slidingWindow = vi.fn();
  }
  return { Ratelimit: RatelimitMock };
});

// Mock upstash redis fromEnv
vi.mock('@upstash/redis', () => ({
  Redis: {
    fromEnv: vi.fn().mockReturnValue({}),
  },
}));

describe('submitContactForm server action', () => {
  const createFormData = (data: Record<string, string>) => {
    const fd = new FormData();
    Object.entries(data).forEach(([key, value]) => fd.append(key, value));
    fd.append('cf-turnstile-response', 'test-token');
    return fd;
  };

  const validData = {
    name: 'John Doe',
    company: 'Test Corp',
    email: 'john@test.com',
    country: 'UAE',
    enquiry: 'This is a long enough enquiry to pass the length check.',
  };

  beforeEach(() => {
    vi.clearAllMocks();
    global.fetch = vi.fn().mockResolvedValue({
      json: vi.fn().mockResolvedValue({ success: true }),
    });
  });

  it('fails validation when required fields are missing', async () => {
    const formData = createFormData({});
    const result = await submitContactForm({ success: false }, formData);

    expect(result.success).toBe(false);
    expect(result.error).toBe('Please correct the errors below.');
    expect(result.fieldErrors).toHaveProperty('name');
    expect(result.fieldErrors).toHaveProperty('company');
    expect(result.fieldErrors).toHaveProperty('email');
    expect(result.fieldErrors).toHaveProperty('country');
    expect(result.fieldErrors).toHaveProperty('enquiry');
    expect(emailService.send).not.toHaveBeenCalled();
  });

  it('fails validation when enquiry is too short', async () => {
    const formData = createFormData({
      ...validData,
      enquiry: 'Too short',
    });
    const result = await submitContactForm({ success: false }, formData);

    expect(result.success).toBe(false);
    expect(result.fieldErrors?.enquiry).toContain('Please provide at least 20 characters describing your situation.');
  });

  it('fails validation on invalid email', async () => {
    const formData = createFormData({
      ...validData,
      email: 'not-an-email',
    });
    const result = await submitContactForm({ success: false }, formData);

    expect(result.success).toBe(false);
    expect(result.fieldErrors?.email).toContain('Please enter a valid email address.');
  });

  it('fails validation when country is missing', async () => {
    const dataWithoutCountry = Object.fromEntries(
      Object.entries(validData).filter(([k]) => k !== 'country')
    );
    const formData = createFormData(dataWithoutCountry);
    const result = await submitContactForm({ success: false }, formData);

    expect(result.success).toBe(false);
    expect(result.fieldErrors).toHaveProperty('country');
  });

  it('handles email service failure', async () => {
    vi.mocked(emailService.send).mockResolvedValueOnce({ success: false, error: 'API Error' });

    const formData = createFormData(validData);
    const result = await submitContactForm({ success: false }, formData);

    expect(result.success).toBe(false);
    expect(result.error).toBe('We were unable to submit your request. Please try again or contact us directly.');
    expect(emailService.send).toHaveBeenCalledTimes(1);
  });

  it('sends email and returns success when valid (required fields only)', async () => {
    vi.mocked(emailService.send).mockResolvedValueOnce({ success: true });

    const formData = createFormData(validData);
    const result = await submitContactForm({ success: false }, formData);

    expect(result.success).toBe(true);
    expect(result.error).toBeUndefined();
    expect(result.fieldErrors).toBeUndefined();
    expect(emailService.send).toHaveBeenCalledTimes(1);
    expect(emailService.send).toHaveBeenCalledWith({
      from: 'Test Site <noreply@northstaradvisory.pro>',
      to: 'hamza@northstaradvisory.pro',
      subject: 'Diagnostic Request — John Doe, Test Corp',
      html: expect.stringContaining('John Doe'),
      replyTo: 'john@test.com',
    });
  });

  it('sends email and returns success with all optional fields', async () => {
    vi.mocked(emailService.send).mockResolvedValueOnce({ success: true });

    const formData = createFormData({
      ...validData,
      role: 'Sales Director',
      portfolio: 'Residential',
      bottleneck: 'Response time — too slow to first contact',
    });
    const result = await submitContactForm({ success: false }, formData);

    expect(result.success).toBe(true);
    expect(emailService.send).toHaveBeenCalledWith(
      expect.objectContaining({
        html: expect.stringContaining('Sales Director'),
        subject: 'Diagnostic Request — John Doe, Test Corp',
      })
    );
  });
});

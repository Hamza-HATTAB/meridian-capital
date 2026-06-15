import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';

// Mock the resend module
const sendMock = vi.fn();

vi.mock('resend', () => {
  const MockResend = vi.fn();
  MockResend.prototype.emails = {
    send: sendMock,
  };
  return { Resend: MockResend };
});

describe('emailService (resend)', () => {
  const originalEnv = process.env;

  beforeEach(() => {
    vi.resetModules();
    process.env = { ...originalEnv };
    sendMock.mockClear();
    vi.spyOn(console, 'warn').mockImplementation(() => {});
    vi.spyOn(console, 'error').mockImplementation(() => {});
  });

  afterEach(() => {
    process.env = originalEnv;
    vi.restoreAllMocks();
  });

  it('fails gracefully when RESEND_API_KEY is not configured', async () => {
    delete process.env.RESEND_API_KEY;

    // We must dynamically re-import because the module evaluates process.env on load.
    const { emailService: dynamicService } = await import('./resend');

    const result = await dynamicService.send({
      from: 'test@test.com',
      to: 'user@test.com',
      subject: 'Hello',
      html: '<p>Hi</p>',
    });

    expect(result.success).toBe(false);
    expect(result.error).toBe('Email service not configured.');
    expect(console.warn).toHaveBeenCalledWith('[Email] Skipping send — RESEND_API_KEY not configured.');
  });

  it('sends email successfully when configured', async () => {
    process.env.RESEND_API_KEY = 'test_key';
    sendMock.mockResolvedValue({ data: { id: '123' }, error: null });

    const { emailService: dynamicService } = await import('./resend');

    const payload = {
      from: 'test@test.com',
      to: 'user@test.com',
      subject: 'Hello',
      html: '<p>Hi</p>',
    };

    const result = await dynamicService.send(payload);

    expect(result.success).toBe(true);
    expect(sendMock).toHaveBeenCalledWith({
      from: payload.from,
      to: payload.to,
      subject: payload.subject,
      html: payload.html,
      replyTo: undefined,
    });
  });

  it('returns error when resend fails', async () => {
    process.env.RESEND_API_KEY = 'test_key';
    sendMock.mockResolvedValue({ data: null, error: { message: 'API Error' } });

    const { emailService: dynamicService } = await import('./resend');

    const result = await dynamicService.send({
      from: 'test@test.com',
      to: 'user@test.com',
      subject: 'Hello',
      html: '<p>Hi</p>',
    });

    expect(result.success).toBe(false);
    expect(result.error).toBe('API Error');
    expect(console.error).toHaveBeenCalledWith('[Email] Resend error:', { message: 'API Error' });
  });
});

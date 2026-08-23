'use client';

import { useActionState, useEffect, useRef } from 'react';
import {
  submitContactForm,
  type ContactFormState,
} from '@/actions/contact';
import { Button } from '@/components/primitives/Button';
import { Turnstile } from '@marsidev/react-turnstile';

// ── Initial State ─────────────────────────────────────────────────────────
const initialState: ContactFormState = { success: false };

// ── Field styles ─────────────────────────────────────────────────────────
const labelStyle: React.CSSProperties = {
  fontSize: 10,
  letterSpacing: '0.14em',
  textTransform: 'uppercase',
  color: 'rgba(255, 255, 255, 0.55)',
  display: 'block',
  marginBlockEnd: 8,
};

const inputStyle: React.CSSProperties = {
  width: '100%',
  background: 'rgba(255, 255, 255, 0.05)',
  border: '1px solid rgba(255, 255, 255, 0.12)',
  color: '#FFFFFF',
  fontSize: 14,
  padding: '14px 16px',
  outline: 'none',
  fontFamily: 'var(--font-body)',
  transition: 'border-color 0.2s',
};

const errorStyle: React.CSSProperties = {
  fontSize: 11,
  color: '#D4847A',
  marginBlockStart: 6,
};

// ── Contact Form Component ────────────────────────────────────────────────
export function ContactForm() {
  const [state, action, isPending] = useActionState(
    submitContactForm,
    initialState
  );

  const formRef = useRef<HTMLFormElement>(null);

  // Reset form on success
  useEffect(() => {
    if (state.success) {
      formRef.current?.reset();
    }
  }, [state.success]);

  return (
    <form ref={formRef} action={action} noValidate>
      {/* Success Message */}
      {state.success && (
        <div
          role="alert"
          style={{
            background: 'rgba(255, 255, 255, 0.06)',
            border: '1px solid rgba(255, 255, 255, 0.12)',
            padding: '20px 24px',
            marginBlockEnd: 32,
          }}
        >
          <div style={{ fontSize: 13, color: '#FFFFFF', marginBlockEnd: 6 }}>
            Diagnostic request received.
          </div>
          <div style={{ fontSize: 12, color: 'rgba(255, 255, 255, 0.5)' }}>
            We will review your situation and respond within two business days to confirm whether the diagnostic is relevant and how to proceed.
          </div>
        </div>
      )}

      {/* Global error */}
      {!state.success && state.error && !state.fieldErrors && (
        <div
          role="alert"
          style={{
            background: 'rgba(212, 132, 122, 0.1)',
            border: '1px solid rgba(212, 132, 122, 0.25)',
            padding: '16px 20px',
            marginBlockEnd: 24,
            fontSize: 13,
            color: '#D4847A',
          }}
        >
          {state.error}
        </div>
      )}

      <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
        {/* Name + Company row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label htmlFor="contact-name" style={labelStyle}>
              Full Name *
            </label>
            <input
              id="contact-name"
              name="name"
              type="text"
              autoComplete="name"
              required
              aria-describedby={state.fieldErrors?.name ? 'contact-name-error' : undefined}
              aria-invalid={!!state.fieldErrors?.name}
              style={{
                ...inputStyle,
                borderColor: state.fieldErrors?.name ? 'rgba(212, 132, 122, 0.6)' : undefined,
              }}
            />
            {state.fieldErrors?.name && (
              <span id="contact-name-error" style={errorStyle} role="alert">
                {state.fieldErrors.name[0]}
              </span>
            )}
          </div>

          <div>
            <label htmlFor="contact-company" style={labelStyle}>
              Company / Business *
            </label>
            <input
              id="contact-company"
              name="company"
              type="text"
              autoComplete="organization"
              required
              aria-describedby={state.fieldErrors?.company ? 'contact-company-error' : undefined}
              aria-invalid={!!state.fieldErrors?.company}
              style={{
                ...inputStyle,
                borderColor: state.fieldErrors?.company ? 'rgba(212, 132, 122, 0.6)' : undefined,
              }}
            />
            {state.fieldErrors?.company && (
              <span id="contact-company-error" style={errorStyle} role="alert">
                {state.fieldErrors.company[0]}
              </span>
            )}
          </div>
        </div>

        {/* Role + Email row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label htmlFor="contact-role" style={labelStyle}>
              Role / Title
            </label>
            <input
              id="contact-role"
              name="role"
              type="text"
              autoComplete="organization-title"
              style={inputStyle}
            />
          </div>

          <div>
            <label htmlFor="contact-email" style={labelStyle}>
              Work Email *
            </label>
            <input
              id="contact-email"
              name="email"
              type="email"
              autoComplete="email"
              required
              aria-describedby={state.fieldErrors?.email ? 'contact-email-error' : undefined}
              aria-invalid={!!state.fieldErrors?.email}
              style={{
                ...inputStyle,
                borderColor: state.fieldErrors?.email ? 'rgba(212, 132, 122, 0.6)' : undefined,
              }}
            />
            {state.fieldErrors?.email && (
              <span id="contact-email-error" style={errorStyle} role="alert">
                {state.fieldErrors.email[0]}
              </span>
            )}
          </div>
        </div>

        {/* Country + Portfolio Type row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label htmlFor="contact-country" style={labelStyle}>
              Country / Market *
            </label>
            <select
              id="contact-country"
              name="country"
              required
              aria-describedby={state.fieldErrors?.country ? 'contact-country-error' : undefined}
              aria-invalid={!!state.fieldErrors?.country}
              style={{
                ...inputStyle,
                borderColor: state.fieldErrors?.country ? 'rgba(212, 132, 122, 0.6)' : undefined,
                cursor: 'pointer',
              }}
            >
              <option value="" style={{ background: '#0A0C14' }}>Select market…</option>
              {['UAE', 'Saudi Arabia', 'Qatar', 'Kuwait', 'Bahrain', 'Oman', 'Other GCC'].map((m) => (
                <option key={m} value={m} style={{ background: '#0A0C14' }}>{m}</option>
              ))}
            </select>
            {state.fieldErrors?.country && (
              <span id="contact-country-error" style={errorStyle} role="alert">
                {state.fieldErrors.country[0]}
              </span>
            )}
          </div>

          <div>
            <label htmlFor="contact-portfolio" style={labelStyle}>
              Portfolio / Development Type
            </label>
            <input
              id="contact-portfolio"
              name="portfolio"
              type="text"
              placeholder="e.g. Residential, Mixed-Use, Hospitality"
              style={{
                ...inputStyle,
              }}
            />
          </div>
        </div>

        {/* Primary Bottleneck */}
        <div>
          <label htmlFor="contact-bottleneck" style={labelStyle}>
            Where do you think the conversion problem is?
          </label>
          <select
            id="contact-bottleneck"
            name="bottleneck"
            style={{ ...inputStyle, cursor: 'pointer' }}
          >
            <option value="" style={{ background: '#0A0C14' }}>Select the most likely area…</option>
            {[
              'Enquiry capture — leads not entering the system',
              'Response time — too slow to first contact',
              'Lead qualification — poor criteria or consistency',
              'Routing — wrong agent or project assignment',
              'CRM handoff — data not transferred or lost',
              'Follow-up — not enough structured outreach',
              'Not sure — that is why I want the diagnostic',
            ].map((opt) => (
              <option key={opt} value={opt} style={{ background: '#0A0C14' }}>{opt}</option>
            ))}
          </select>
        </div>

        {/* Enquiry context */}
        <div>
          <label htmlFor="contact-enquiry" style={labelStyle}>
            Tell us about your situation *
          </label>
          <textarea
            id="contact-enquiry"
            name="enquiry"
            rows={5}
            required
            placeholder="Describe your current enquiry process, the volume you are receiving, and where conversion is falling short."
            aria-describedby={state.fieldErrors?.enquiry ? 'contact-enquiry-error' : undefined}
            aria-invalid={!!state.fieldErrors?.enquiry}
            style={{
              ...inputStyle,
              resize: 'vertical',
              borderColor: state.fieldErrors?.enquiry ? 'rgba(212, 132, 122, 0.6)' : undefined,
            }}
          />
          {state.fieldErrors?.enquiry && (
            <span id="contact-enquiry-error" style={errorStyle} role="alert">
              {state.fieldErrors.enquiry[0]}
            </span>
          )}
        </div>

        {/* Consent + Submit */}
        <div>
          <p
            style={{
              fontSize: 11,
              color: 'rgba(255, 255, 255, 0.45)',
              lineHeight: 1.7,
              marginBlockEnd: 20,
            }}
          >
            By submitting, you confirm this is a genuine enquiry about real-estate operating systems advisory. We review all requests before responding. We do not provide property brokerage, investment advice, or capital placement services. Your information will be used only to assess and respond to your enquiry.
          </p>

          <Button
            type="submit"
            variant="primary"
            theme="dark"
            size="lg"
            disabled={isPending}
          >
            {isPending ? 'Submitting…' : 'Request a Diagnostic'}
          </Button>

          <div style={{ marginTop: 24 }}>
            <Turnstile siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!} />
          </div>
        </div>
      </div>

      {/* Focus ring for inputs */}
      <style>{`
        form input:focus-visible,
        form textarea:focus-visible,
        form select:focus-visible {
          border-color: rgba(255, 255, 255, 0.4) !important;
          outline: 1px solid rgba(255,255,255,0.5);
          outline-offset: 2px;
        }
        form input::placeholder,
        form textarea::placeholder {
          color: rgba(255,255,255,0.4);
          font-size: 13px;
        }
      `}</style>
    </form>
  );
}

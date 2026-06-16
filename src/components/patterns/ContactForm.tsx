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
          <div
            style={{
              fontSize: 13,
              color: '#FFFFFF',
              marginBlockEnd: 6,
            }}
          >
            Enquiry received.
          </div>
          <div style={{ fontSize: 12, color: 'rgba(255, 255, 255, 0.5)' }}>
            A member of our advisory team will be in contact within two business
            days. We review all enquiries to ensure relevance before responding.
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
        {/* Name + Institution row */}
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
              aria-describedby={
                state.fieldErrors?.name ? 'contact-name-error' : undefined
              }
              aria-invalid={!!state.fieldErrors?.name}
              style={{
                ...inputStyle,
                borderColor: state.fieldErrors?.name
                  ? 'rgba(212, 132, 122, 0.6)'
                  : undefined,
              }}
            />
            {state.fieldErrors?.name && (
              <span id="contact-name-error" style={errorStyle} role="alert">
                {state.fieldErrors.name[0]}
              </span>
            )}
          </div>

          <div>
            <label htmlFor="contact-institution" style={labelStyle}>
              Institution *
            </label>
            <input
              id="contact-institution"
              name="institution"
              type="text"
              autoComplete="organization"
              required
              aria-describedby={
                state.fieldErrors?.institution
                  ? 'contact-institution-error'
                  : undefined
              }
              aria-invalid={!!state.fieldErrors?.institution}
              style={{
                ...inputStyle,
                borderColor: state.fieldErrors?.institution
                  ? 'rgba(212, 132, 122, 0.6)'
                  : undefined,
              }}
            />
            {state.fieldErrors?.institution && (
              <span
                id="contact-institution-error"
                style={errorStyle}
                role="alert"
              >
                {state.fieldErrors.institution[0]}
              </span>
            )}
          </div>
        </div>

        {/* Email */}
        <div>
          <label htmlFor="contact-email" style={labelStyle}>
            Institutional Email Address *
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            aria-describedby={
              state.fieldErrors?.email ? 'contact-email-error' : undefined
            }
            aria-invalid={!!state.fieldErrors?.email}
            style={{
              ...inputStyle,
              borderColor: state.fieldErrors?.email
                ? 'rgba(212, 132, 122, 0.6)'
                : undefined,
            }}
          />
          {state.fieldErrors?.email && (
            <span id="contact-email-error" style={errorStyle} role="alert">
              {state.fieldErrors.email[0]}
            </span>
          )}
        </div>

        {/* Enquiry */}
        <div>
          <label htmlFor="contact-enquiry" style={labelStyle}>
            Nature of Enquiry *
          </label>
          <textarea
            id="contact-enquiry"
            name="enquiry"
            rows={6}
            required
            placeholder="Please describe your advisory requirements, investment mandate, or the specific nature of your enquiry."
            aria-describedby={
              state.fieldErrors?.enquiry ? 'contact-enquiry-error' : undefined
            }
            aria-invalid={!!state.fieldErrors?.enquiry}
            style={{
              ...inputStyle,
              resize: 'vertical',
              borderColor: state.fieldErrors?.enquiry
                ? 'rgba(212, 132, 122, 0.6)'
                : undefined,
            }}
          />
          {state.fieldErrors?.enquiry && (
            <span id="contact-enquiry-error" style={errorStyle} role="alert">
              {state.fieldErrors.enquiry[0]}
            </span>
          )}
        </div>

        {/* Disclaimer + Submit */}
        <div>
          <p
            style={{
              fontSize: 11,
              color: 'rgba(255, 255, 255, 0.55)',
              lineHeight: 1.7,
              marginBlockEnd: 20,
            }}
          >
            This firm does not respond to broker enquiries, investment product
            solicitations, or requests for brokerage introductions. Enquiries
            are reviewed before response. By submitting, you confirm this is an
            institutional advisory enquiry.
          </p>

          <Button
            type="submit"
            variant="primary"
            theme="dark"
            size="lg"
            disabled={isPending}
          >
            {isPending ? 'Submitting…' : 'Request Discussion'}
          </Button>

          <div style={{ marginTop: 24 }}>
            <Turnstile siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!} />
          </div>
        </div>
      </div>

      {/* Focus ring for inputs */}
      <style>{`
        form input:focus-visible,
        form textarea:focus-visible {
          border-color: rgba(255, 255, 255, 0.4) !important;
          outline: 1px solid rgba(255,255,255,0.5);
          outline-offset: 2px;
        }
        form input::placeholder,
        form textarea::placeholder {
          color: rgba(255,255,255,0.5);
          font-size: 13px;
        }
      `}</style>
    </form>
  );
}

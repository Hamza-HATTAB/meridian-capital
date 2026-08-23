import type { Metadata } from 'next';
import { createMetadata } from '@/lib/metadata';
import { Container } from '@/components/primitives/Container';
import { SectionLabel } from '@/components/primitives/SectionLabel';
import { ContactForm } from '@/components/patterns/ContactForm';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = createMetadata({
  title: 'Request a Diagnostic',
  description:
    'Request a Lead-to-Appointment Diagnostic from North Star Advisory. For GCC real-estate developers and operators who want to find and fix the process gaps between enquiry capture and appointment conversion.',
});

export default function ContactPage() {
  return (
    <>
      {/* ── Page Header ── */}
      <div style={{ background: 'var(--color-bg-dark-surface)', paddingBlockStart: 140, paddingBlockEnd: 80 }}>
        <Container>
          <SectionLabel variant="dark">{siteConfig.name}</SectionLabel>
          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(30px, 4vw, 52px)',
              fontWeight: 400,
              color: '#FFFFFF',
              lineHeight: 1.15,
              maxWidth: 680,
              marginBlockEnd: 20,
            }}
          >
            Request a Lead-to-Appointment Diagnostic
          </h1>
          <p style={{ fontSize: 15, lineHeight: 1.75, color: 'rgba(255,255,255,0.5)', maxWidth: 580 }}>
            Tell us about your business and where you believe enquiry conversion is failing. We will review your situation and respond within two business days to confirm whether a diagnostic is relevant.
          </p>
        </Container>
      </div>

      {/* ── Contact Form + Info ── */}
      <section aria-labelledby="contact-form-heading" style={{ background: 'var(--color-bg-dark)', paddingBlock: 'var(--space-20)' }}>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-24">
            {/* Left — context */}
            <div>
              <SectionLabel variant="dark">Who This Is For</SectionLabel>
              <h2 id="contact-form-heading" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(24px,2.5vw,36px)', fontWeight: 400, color: '#FFFFFF', lineHeight: 1.2, marginBlockEnd: 24 }}>
                GCC real-estate developers and operators
              </h2>
              <p style={{ fontSize: 14, lineHeight: 1.8, color: 'rgba(255,255,255,0.5)', marginBlockEnd: 40 }}>
                The diagnostic is relevant if you are receiving enquiries through marketing channels and cannot clearly explain why enquiry-to-appointment conversion is lower than it should be.
              </p>

              <div style={{ padding: '20px 24px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', marginBlockEnd: 24 }}>
                <div style={{ fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.55)', marginBlockEnd: 12 }}>
                  Relevant for
                </div>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {[
                    'Residential developers with active portal or digital campaigns',
                    'Master-planned community operators managing multiple phases',
                    'Hospitality-linked real-estate businesses with longer sales cycles',
                    'Multi-project developers with routing and CRM consistency challenges',
                    'Portfolio businesses where conversion measurement is unclear',
                  ].map((item) => (
                    <li key={item} style={{ display: 'flex', gap: 10, fontSize: 12, color: 'rgba(255,255,255,0.5)', lineHeight: 1.6 }}>
                      <span style={{ color: 'var(--color-accent-mid)', marginBlockStart: 2, flexShrink: 0 }} aria-hidden="true">—</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div style={{ padding: '20px 24px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
                <div style={{ fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.55)', marginBlockEnd: 12 }}>
                  Not for
                </div>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {[
                    'Property brokerage introductions',
                    'Investment product solicitation or capital placement',
                    'Regulatory, legal, or financial advisory',
                  ].map((item) => (
                    <li key={item} style={{ display: 'flex', gap: 10, fontSize: 12, color: 'rgba(255,255,255,0.5)', lineHeight: 1.6 }}>
                      <span style={{ color: '#D90000', marginBlockStart: 2, flexShrink: 0 }} aria-hidden="true">✕</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right — form */}
            <div>
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>

      {/* ── Scope note ── */}
      <section aria-label="Scope notice" style={{ background: 'var(--color-bg-dark-surface)', paddingBlock: 40 }}>
        <Container>
          <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.4)', lineHeight: 1.75, maxWidth: 840 }}>
            {siteConfig.name} provides real-estate operating systems advisory for GCC developers and operators. This website is for informational purposes only. Submitting this form does not commence an advisory relationship. We review all enquiries before responding and will only proceed where the diagnostic is relevant to your situation. Response within two business days.
          </p>
        </Container>
      </section>
    </>
  );
}

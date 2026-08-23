import type { Metadata } from 'next';
import { createMetadata } from '@/lib/metadata';
import { Container } from '@/components/primitives/Container';
import { SectionLabel } from '@/components/primitives/SectionLabel';
import { Button } from '@/components/primitives/Button';
import { advisoryServices } from '@/content/services';
import { researchProcess } from '@/content/track-record';
import { ProcessStepItem } from '@/components/patterns/ProcessStepItem';
import { siteConfig } from '@/config/site';
import { ArrowUpRight } from 'lucide-react';

export const metadata: Metadata = createMetadata({
  title: 'Engagements',
  description:
    'Five North Star Advisory engagements for GCC real-estate operators — Lead-to-Appointment Diagnostic, Enquiry Capture Review, CRM & Sales Routing Assessment, Conversion Measurement, and Follow-Up Workflow Design.',
});

export default function AdvisoryServicesPage() {
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
            Engagements
          </h1>
          <p style={{ fontSize: 15, lineHeight: 1.75, color: 'rgba(255,255,255,0.5)', maxWidth: 620 }}>
            Five structured engagements for GCC real-estate developers and operators, each designed around a specific, measurable problem in the enquiry-to-appointment process.
          </p>
        </Container>
      </div>

      {/* ── Services ── */}
      <section aria-labelledby="services-heading" style={{ background: 'var(--color-bg-white)', paddingBlock: 'var(--space-20)' }}>
        <Container>
          <SectionLabel variant="light">Five Engagements</SectionLabel>
          <h2 id="services-heading" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(24px,2.5vw,38px)', fontWeight: 400, color: 'var(--color-text-primary)', marginBlockEnd: 52 }}>
            What we work on
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {advisoryServices.map((service, i) => (
              <div
                key={service.id}
                className="grid grid-cols-1 md:grid-cols-[60px_1fr_1fr_1fr] gap-8 md:gap-12"
                style={{
                  paddingBlock: 40,
                  borderBottom: i < advisoryServices.length - 1 ? '1px solid rgba(0,0,0,0.1)' : 'none',
                }}
              >
                {/* Number */}
                <span style={{ fontFamily: 'var(--font-display)', fontSize: 13, color: 'var(--color-accent-mid)', paddingBlockStart: 3 }}>{service.num}</span>

                {/* Title + description */}
                <div>
                  <div style={{ fontSize: 16, fontWeight: 500, color: 'var(--color-text-primary)', marginBlockEnd: 12 }}>{service.title}</div>
                  <p style={{ fontSize: 13, lineHeight: 1.75, color: 'var(--color-text-secondary)' }}>{service.description}</p>
                </div>

                {/* Challenge */}
                {service.challenge && (
                  <div>
                    <div style={{ fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-accent-mid)', marginBlockEnd: 10 }}>The Problem</div>
                    <p style={{ fontSize: 12, lineHeight: 1.75, color: 'var(--color-text-muted-alt)' }}>{service.challenge}</p>
                  </div>
                )}

                {/* Approach */}
                {service.approach && (
                  <div>
                    <div style={{ fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-accent-mid)', marginBlockEnd: 10 }}>Our Approach</div>
                    <p style={{ fontSize: 12, lineHeight: 1.75, color: 'var(--color-text-muted-alt)' }}>{service.approach}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Diagnostic Process ── */}
      <section aria-labelledby="process-heading" style={{ background: 'var(--color-bg-warm)', paddingBlock: 'var(--space-20)' }}>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 lg:gap-24">
            <div>
              <SectionLabel variant="light">Diagnostic Method</SectionLabel>
              <h2 id="process-heading" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(22px,2.5vw,34px)', fontWeight: 400, color: 'var(--color-text-primary)', lineHeight: 1.3, marginBlockEnd: 20 }}>
                How the Lead-to-Appointment Diagnostic works
              </h2>
              <p style={{ fontSize: 14, lineHeight: 1.8, color: 'var(--color-text-secondary)' }}>
                Every engagement begins with the diagnostic. The output is a structured gap report and prioritised action list — not a general best-practice document.
              </p>
            </div>
            <div>
              {researchProcess.map((step, i) => (
                <ProcessStepItem key={step.phase} step={step} isLast={i === researchProcess.length - 1} />
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ── Principles ── */}
      <section aria-labelledby="principles-heading" style={{ background: 'var(--color-bg-dark)', paddingBlock: 'var(--space-20)' }}>
        <Container>
          <SectionLabel variant="dark">Principles</SectionLabel>
          <h2 id="principles-heading" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(24px,2.5vw,38px)', fontWeight: 400, color: '#FFFFFF', lineHeight: 1.25, marginBlockEnd: 52 }}>
            How we work
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-y-12 md:gap-y-0" style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
            {[
              { title: 'Diagnose First', body: 'We do not recommend solutions before understanding the specific constraint. Every engagement starts with the diagnostic. Implementation follows only where the gap has been identified and scoped.' },
              { title: 'Specific Recommendations', body: 'The output of a diagnostic is a prioritised action list — specific to the gaps we find, not a general framework. Each recommendation is actionable without further analysis.' },
              { title: 'Process Over Technology', body: 'Most conversion problems in GCC real estate are process problems, not technology problems. We identify the process gap first, then recommend the tooling — not the reverse.' },
            ].map((item, i) => (
              <div key={item.title} style={{ paddingBlock: 40, paddingInline: i > 0 ? 40 : 0, borderInlineStart: i > 0 ? '1px solid rgba(255,255,255,0.08)' : 'none' }}>
                <div style={{ fontSize: 14, fontWeight: 500, color: '#FFFFFF', marginBlockEnd: 12 }}>{item.title}</div>
                <p style={{ fontSize: 13, lineHeight: 1.75, color: 'rgba(255,255,255,0.5)' }}>{item.body}</p>
              </div>
            ))}
          </div>

          <div style={{ marginBlockStart: 52 }}>
            <Button href="/contact" variant="primary" theme="dark" size="md" icon={<ArrowUpRight size={14} aria-hidden="true" />}>
              Request a Diagnostic
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}

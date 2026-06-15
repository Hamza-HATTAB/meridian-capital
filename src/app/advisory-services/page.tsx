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
  title: 'Advisory Services',
  description:
    'Five institutional real estate advisory disciplines — capital deployment, market intelligence, transaction due diligence, portfolio strategy, and investment committee support.',
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
            Advisory Services
          </h1>
          <p style={{ fontSize: 15, lineHeight: 1.75, color: 'rgba(255,255,255,0.5)', maxWidth: 620 }}>
            We offer five advisory disciplines, each designed to give institutional capital
            genuinely independent counsel that is free from the conflicts embedded in
            broker, developer, and project marketing relationships.
          </p>
        </Container>
      </div>

      {/* ── Services ── */}
      <section aria-labelledby="services-heading" style={{ background: 'var(--color-bg-white)', paddingBlock: 'var(--space-20)' }}>
        <Container>
          <SectionLabel variant="light">Five Disciplines</SectionLabel>
          <h2 id="services-heading" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(24px,2.5vw,38px)', fontWeight: 400, color: 'var(--color-text-primary)', marginBlockEnd: 52 }}>
            What We Advise On
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

      {/* ── Process ── */}
      <section aria-labelledby="process-heading" style={{ background: 'var(--color-bg-warm)', paddingBlock: 'var(--space-20)' }}>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 lg:gap-24">
            <div>
              <SectionLabel variant="light">Methodology</SectionLabel>
              <h2 id="process-heading" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(22px,2.5vw,34px)', fontWeight: 400, color: 'var(--color-text-primary)', lineHeight: 1.3, marginBlockEnd: 20 }}>
                How We Generate Conviction
              </h2>
              <p style={{ fontSize: 14, lineHeight: 1.8, color: 'var(--color-text-secondary)' }}>
                Every advisory mandate follows the same systematic process — from market intelligence
                through to IC-ready recommendation and execution support.
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

      {/* ── Differentiators ── */}
      <section aria-labelledby="diff-heading" style={{ background: 'var(--color-bg-dark)', paddingBlock: 'var(--space-20)' }}>
        <Container>
          <SectionLabel variant="dark">Why MERIDIAN</SectionLabel>
          <h2 id="diff-heading" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(24px,2.5vw,38px)', fontWeight: 400, color: '#FFFFFF', lineHeight: 1.25, marginBlockEnd: 52 }}>
            The Structural Difference
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-y-12 md:gap-y-0" style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
            {[
              { title: 'No Transactional Bias', body: 'We earn no commission from transactions. Our economic model is aligned with client outcomes, not deal completion.' },
              { title: 'Primary Research', body: 'We generate our own market data through direct engagement. We do not resell consultancy reports or rely on secondary sources as primary inputs.' },
              { title: 'Cycle Experience', body: '18 years covering three distinct GCC real estate cycles. We have advised through formation, correction, expansion, and post-liquidity normalisation.' },
            ].map((item, i) => (
              <div key={item.title} style={{ paddingBlock: 40, paddingInline: i > 0 ? 40 : 0, borderInlineStart: i > 0 ? '1px solid rgba(255,255,255,0.08)' : 'none' }}>
                <div style={{ fontSize: 14, fontWeight: 500, color: '#FFFFFF', marginBlockEnd: 12 }}>{item.title}</div>
                <p style={{ fontSize: 13, lineHeight: 1.75, color: 'rgba(255,255,255,0.5)' }}>{item.body}</p>
              </div>
            ))}
          </div>

          <div style={{ marginBlockStart: 52 }}>
            <Button href="/contact" variant="primary" theme="dark" size="md" icon={<ArrowUpRight size={14} aria-hidden="true" />}>
              Discuss Your Mandate
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}

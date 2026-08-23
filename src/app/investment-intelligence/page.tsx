import type { Metadata } from 'next';
import { createMetadata } from '@/lib/metadata';
import { Container } from '@/components/primitives/Container';
import { SectionLabel } from '@/components/primitives/SectionLabel';
import { Button } from '@/components/primitives/Button';
import { InvestmentThemeCard } from '@/components/patterns/InvestmentThemeCard';
import { MarketIntelCard } from '@/components/patterns/MarketIntelCard';
import { siteConfig } from '@/config/site';
import { investmentThemes } from '@/content/themes';
import { marketIntelligence } from '@/content/track-record';
import { ArrowUpRight } from 'lucide-react';

export const metadata: Metadata = createMetadata({
  title: 'Operating Intelligence',
  description:
    'Selected founder analysis and operating observations for GCC real-estate businesses — focusing on enquiry conversion, sales routing, and CRM workflow.',
});

const sectors = [
  { label: 'Dubai', sub: 'Residential, Office, Mixed-Use' },
  { label: 'Abu Dhabi', sub: 'Residential, Industrial' },
  { label: 'Riyadh', sub: 'Office, Hospitality, Logistics' },
  { label: 'Jeddah', sub: 'Retail, Hospitality' },
  { label: 'Doha', sub: 'Residential, Office' },
  { label: 'Kuwait City', sub: 'Mixed-Use, Commercial' },
  { label: 'Muscat', sub: 'Residential, Tourism' },
  { label: 'Manama', sub: 'Mixed-Use, Hospitality' },
];

export default function InvestmentIntelligencePage() {
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
            Operating Intelligence
          </h1>
          <p style={{ fontSize: 15, lineHeight: 1.75, color: 'rgba(255,255,255,0.5)', maxWidth: 620 }}>
            Selected founder analysis and operating observations for GCC real-estate businesses. We share operator perspectives on enquiry capture, lead qualification, sales routing, and CRM workflow.
          </p>
        </Container>
      </div>

      {/* ── Market Intelligence ── */}
      <section aria-labelledby="intel-heading" style={{ background: 'var(--color-bg-white)', paddingBlock: 'var(--space-20)' }}>
        <Container>
          <SectionLabel variant="light">Current Operator Views</SectionLabel>
          <h2 id="intel-heading" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(24px,2.5vw,38px)', fontWeight: 400, color: 'var(--color-text-primary)', lineHeight: 1.25, marginBlockEnd: 52 }}>
            GCC Real-Estate Operator Analysis
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0" style={{ borderTop: '1px solid rgba(0,0,0,0.1)', borderBottom: '1px solid rgba(0,0,0,0.1)' }}>
            {marketIntelligence.map((item, i) => (
              <MarketIntelCard key={item.headline} item={item} index={i} />
            ))}
          </div>
        </Container>
      </section>

      {/* ── Operating Perspectives / Themes ── */}
      <section aria-labelledby="themes-heading" style={{ background: 'var(--color-bg-warm)', paddingBlock: 'var(--space-20)' }}>
        <Container>
          <SectionLabel variant="light">Process Bottlenecks</SectionLabel>
          <h2 id="themes-heading" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(24px,2.5vw,38px)', fontWeight: 400, color: 'var(--color-text-primary)', lineHeight: 1.25, marginBlockEnd: 48 }}>
            Where Revenue Leaks Occur
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-px" style={{ background: '#FFFFFF', border: '1px solid rgba(0,0,0,0.1)' }}>
            {investmentThemes.map((theme) => (
              <InvestmentThemeCard key={theme.id} theme={theme} />
            ))}
          </div>
        </Container>
      </section>

      {/* ── Market Coverage ── */}
      <section aria-labelledby="markets-heading" style={{ background: 'var(--color-bg-white)', paddingBlock: 'var(--space-20)' }}>
        <Container>
          <SectionLabel variant="light">GCC Market Scope</SectionLabel>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 lg:gap-20 items-start">
            <div>
              <h2 id="markets-heading" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(22px,2.5vw,34px)', fontWeight: 400, color: 'var(--color-text-primary)', lineHeight: 1.3, marginBlockEnd: 20 }}>
                Regional Market Coverage
              </h2>
              <p style={{ fontSize: 14, lineHeight: 1.8, color: 'var(--color-text-secondary)' }}>
                Our diagnostic framework addresses the specific enquiry capture, qualification, and sales routing challenges found across key GCC real-estate markets.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-8 lg:gap-y-0" style={{ borderTop: '1px solid rgba(0,0,0,0.1)' }}>
              {sectors.map((s, i) => (
                <div
                  key={s.label}
                  style={{
                    paddingBlock: 24,
                    paddingInline: i % 4 > 0 ? 20 : 0,
                    borderInlineStart: i % 4 > 0 ? '1px solid rgba(0,0,0,0.08)' : 'none',
                    borderBlockEnd: i < 4 ? '1px solid rgba(0,0,0,0.08)' : 'none',
                  }}
                >
                  <div style={{ fontSize: 14, fontWeight: 500, color: 'var(--color-text-primary)', marginBlockEnd: 4 }}>{s.label}</div>
                  <div style={{ fontSize: 11, color: 'var(--color-text-muted)' }}>{s.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ── Operational Focus ── */}
      <section aria-labelledby="outlook-heading" style={{ background: 'var(--color-bg-dark)', paddingBlock: 'var(--space-20)' }}>
        <Container>
          <SectionLabel variant="dark">Operational Focus</SectionLabel>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 lg:gap-20 items-start">
            <h2 id="outlook-heading" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(22px,2.5vw,34px)', fontWeight: 400, color: '#FFFFFF', lineHeight: 1.3 }}>
              Improving Lead-to-Appointment Conversion
            </h2>
            <div>
              <p style={{ fontSize: 14, lineHeight: 1.85, color: 'rgba(255,255,255,0.55)', marginBlockEnd: 24 }}>
                As GCC real-estate markets evolve, the cost of acquiring enquiries continues to rise. Operators who cannot measure their enquiry-to-appointment rate lose revenue between marketing demand and sales assignment.
              </p>
              <p style={{ fontSize: 14, lineHeight: 1.85, color: 'rgba(255,255,255,0.55)', marginBlockEnd: 32 }}>
                Our focus is helping developers and operators diagnose their sales process, eliminate handoff delays, and structure follow-up workflows so a higher percentage of enquiries become qualified appointments.
              </p>
              <Button href="/contact" variant="secondary" theme="dark" size="md" icon={<ArrowUpRight size={14} aria-hidden="true" />}>
                Request a Diagnostic
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

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
  title: 'Investment Intelligence',
  description:
    'Proprietary market intelligence, sector research, and investment theme analysis across GCC and MENA real estate markets.',
});

const sectors = [
  { label: 'Dubai', sub: 'Residential, Office, Mixed-Use' },
  { label: 'Abu Dhabi', sub: 'Residential, Industrial' },
  { label: 'Riyadh', sub: 'Office, Hospitality, Logistics' },
  { label: 'Jeddah', sub: 'Retail, Hospitality' },
  { label: 'Doha', sub: 'Residential, Office' },
  { label: 'Kuwait City', sub: 'Mixed-Use, Commercial' },
  { label: 'Muscat', sub: 'Residential, Tourism' },
  { label: 'Cairo', sub: 'Residential, Logistics' },
  { label: 'NEOM', sub: 'Mixed-Use, Hospitality' },
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
            Investment Intelligence
          </h1>
          <p style={{ fontSize: 15, lineHeight: 1.75, color: 'rgba(255,255,255,0.5)', maxWidth: 620 }}>
            Proprietary research across nine GCC and MENA markets. Our intelligence is generated
            through primary market research — not resold from consultancy reports. We share
            selected views publicly. Full research access is reserved for advisory clients.
          </p>
        </Container>
      </div>

      {/* ── Market Intelligence ── */}
      <section aria-labelledby="intel-heading" style={{ background: 'var(--color-bg-white)', paddingBlock: 'var(--space-20)' }}>
        <Container>
          <SectionLabel variant="light">Current Market Views</SectionLabel>
          <h2 id="intel-heading" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(24px,2.5vw,38px)', fontWeight: 400, color: 'var(--color-text-primary)', lineHeight: 1.25, marginBlockEnd: 52 }}>
            GCC Market Commentary
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0" style={{ borderTop: '1px solid rgba(0,0,0,0.1)', borderBottom: '1px solid rgba(0,0,0,0.1)' }}>
            {marketIntelligence.map((item, i) => (
              <MarketIntelCard key={item.headline} item={item} index={i} />
            ))}
          </div>
        </Container>
      </section>

      {/* ── Investment Themes ── */}
      <section aria-labelledby="themes-heading" style={{ background: 'var(--color-bg-warm)', paddingBlock: 'var(--space-20)' }}>
        <Container>
          <SectionLabel variant="light">Investment Themes</SectionLabel>
          <h2 id="themes-heading" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(24px,2.5vw,38px)', fontWeight: 400, color: 'var(--color-text-primary)', lineHeight: 1.25, marginBlockEnd: 48 }}>
            Where We Have Conviction
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
          <SectionLabel variant="light">Market Coverage</SectionLabel>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 lg:gap-20 items-start">
            <div>
              <h2 id="markets-heading" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(22px,2.5vw,34px)', fontWeight: 400, color: 'var(--color-text-primary)', lineHeight: 1.3, marginBlockEnd: 20 }}>
                Nine Markets. Quarterly Primary Research.
              </h2>
              <p style={{ fontSize: 14, lineHeight: 1.8, color: 'var(--color-text-secondary)' }}>
                Our research team conducts primary market intelligence across nine markets each quarter.
                Vacancy, absorption, pricing, and pipeline are updated from direct market engagement.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-8 lg:gap-y-0" style={{ borderTop: '1px solid rgba(0,0,0,0.1)' }}>
              {sectors.map((s, i) => (
                <div
                  key={s.label}
                  style={{
                    paddingBlock: 24,
                    paddingInline: i % 3 > 0 ? 24 : 0,
                    borderInlineStart: i % 3 > 0 ? '1px solid rgba(0,0,0,0.08)' : 'none',
                    borderBlockEnd: i < 6 ? '1px solid rgba(0,0,0,0.08)' : 'none',
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

      {/* ── Strategic Outlook ── */}
      <section aria-labelledby="outlook-heading" style={{ background: 'var(--color-bg-dark)', paddingBlock: 'var(--space-20)' }}>
        <Container>
          <SectionLabel variant="dark">Strategic Outlook — 2026–2028</SectionLabel>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 lg:gap-20 items-start">
            <h2 id="outlook-heading" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(22px,2.5vw,34px)', fontWeight: 400, color: '#FFFFFF', lineHeight: 1.3 }}>
              Our Current Position on GCC Real Estate
            </h2>
            <div>
              <p style={{ fontSize: 14, lineHeight: 1.85, color: 'rgba(255,255,255,0.55)', marginBlockEnd: 24 }}>
                GCC real estate markets are navigating a complex transition: the post-pandemic liquidity
                cycle is normalising, global interest rates remain elevated, and Vision 2030 capital
                deployment is generating structural demand in specific sectors.
              </p>
              <p style={{ fontSize: 14, lineHeight: 1.85, color: 'rgba(255,255,255,0.55)', marginBlockEnd: 32 }}>
                Our current conviction is highest in logistics, data centers, and select hospitality —
                sectors supported by structural demand drivers that are relatively insulated from
                interest rate sensitivity. We remain cautious on speculative residential and highly
                leveraged development mandates.
              </p>
              <Button href="/contact" variant="secondary" theme="dark" size="md" icon={<ArrowUpRight size={14} aria-hidden="true" />}>
                Discuss Our Views
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

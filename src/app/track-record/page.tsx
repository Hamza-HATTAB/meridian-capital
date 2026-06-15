import type { Metadata } from 'next';
import { createMetadata } from '@/lib/metadata';
import { Container } from '@/components/primitives/Container';
import { SectionLabel } from '@/components/primitives/SectionLabel';
import { AdvisoryHistoryRow } from '@/components/patterns/AdvisoryHistoryRow';
import { CaseStudyCard } from '@/components/patterns/CaseStudyCard';
import { siteConfig } from '@/config/site';
import { summaryStats, sectorCoverage, advisoryHistory, caseStudies } from '@/content/track-record';
import TrackRecordCharts from './TrackRecordCharts';

export const metadata: Metadata = createMetadata({
  title: 'Track Record',
  description:
    '18 years of institutional real estate advisory across GCC and MENA markets. AED 14.2B+ in advisory mandates, 340+ transactions, 23 active institutional clients.',
});

export default function TrackRecordPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Real Estate Advisory',
    provider: {
      '@type': 'Organization',
      name: siteConfig.name,
    },
    areaServed: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: '25.2048',
        longitude: '55.2708',
      },
      geoRadius: '1000000',
    },
    description: '18 years of institutional real estate advisory across GCC and MENA markets. AED 14.2B+ in advisory mandates, 340+ transactions.',
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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
            Track Record
          </h1>
          <p style={{ fontSize: 15, lineHeight: 1.75, color: 'rgba(255,255,255,0.5)', maxWidth: 620 }}>
            A structured record of advisory mandates, transactions, and institutional engagements
            across {siteConfig.yearsExperience} years of GCC and MENA real estate markets. This is evidence, not marketing.
          </p>
        </Container>
      </div>

      {/* ── Summary Stats ── */}
      <section aria-label="Track record summary statistics" style={{ background: 'var(--color-bg-dark-raised)', padding: '60px 0' }}>
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-8 lg:gap-y-0">
            {summaryStats.map((stat, i) => (
              <div key={stat.label} style={{ paddingBlock: 28, paddingInline: 24, borderInlineStart: i > 0 ? '1px solid rgba(255,255,255,0.06)' : 'none', textAlign: 'center' }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 22, color: '#FFFFFF', marginBlockEnd: 6, lineHeight: 1 }}>{stat.value}</div>
                <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.5)', letterSpacing: '0.06em' }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Charts ── */}
      <section aria-labelledby="charts-heading" style={{ background: 'var(--color-bg-warm)', paddingBlock: 'var(--space-20)' }}>
        <Container>
          <SectionLabel variant="light">Portfolio Analysis</SectionLabel>
          <h2 id="charts-heading" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(24px,2.5vw,36px)', fontWeight: 400, color: 'var(--color-text-primary)', marginBlockEnd: 52 }}>
            Transaction Distribution
          </h2>

          {/* Sector bar chart (static, server-rendered) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-0 mb-8">
            <div style={{ background: '#FFFFFF', padding: 36, borderInlineEnd: '1px solid rgba(0,0,0,0.08)' }}>
              <div style={{ fontSize: 12, fontWeight: 500, color: '#1A1A1A', marginBlockEnd: 28 }}>By Sector</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                {sectorCoverage.map((s) => (
                  <div key={s.sector}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBlockEnd: 6 }}>
                      <span style={{ fontSize: 12, color: 'var(--color-text-secondary)' }}>{s.sector}</span>
                      <span style={{ fontSize: 11, color: 'var(--color-text-muted)' }}>{s.transactions} txns</span>
                    </div>
                    <div style={{ height: 4, background: '#EDEBE3', position: 'relative' }}>
                      <div style={{ position: 'absolute', insetInlineStart: 0, insetBlockStart: 0, height: '100%', width: `${s.percentage}%`, background: '#1A1A2A' }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recharts — client-side only */}
            <TrackRecordCharts />
          </div>
        </Container>
      </section>

      {/* ── Advisory History ── */}
      <section aria-labelledby="history-heading" style={{ background: 'var(--color-bg-white)', paddingBlock: 'var(--space-20)' }}>
        <Container>
          <SectionLabel variant="light">Advisory History</SectionLabel>
          <h2 id="history-heading" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(24px,2.5vw,36px)', fontWeight: 400, color: 'var(--color-text-primary)', marginBlockEnd: 52 }}>
            {siteConfig.yearsExperience} Years Across Three Market Cycles
          </h2>
          <div>
            {advisoryHistory.map((period, i) => (
              <AdvisoryHistoryRow key={period.period} period={period} isLast={i === advisoryHistory.length - 1} />
            ))}
          </div>
        </Container>
      </section>

      {/* ── Case Studies ── */}
      <section aria-labelledby="cases-heading" style={{ background: 'var(--color-bg-warm)', paddingBlock: 'var(--space-20)' }}>
        <Container>
          <SectionLabel variant="light">Case Studies</SectionLabel>
          <h2 id="cases-heading" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(24px,2.5vw,36px)', fontWeight: 400, color: 'var(--color-text-primary)', marginBlockEnd: 52 }}>
            Selected Advisory Engagements
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0">
            {caseStudies.map((cs, i) => (
              <CaseStudyCard key={cs.id} caseStudy={cs} index={i} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}

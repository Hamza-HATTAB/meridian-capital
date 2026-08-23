import type { Metadata } from 'next';
import { createMetadata } from '@/lib/metadata';
import { Container } from '@/components/primitives/Container';
import { SectionLabel } from '@/components/primitives/SectionLabel';
import { AdvisoryHistoryRow } from '@/components/patterns/AdvisoryHistoryRow';
import { CaseStudyCard } from '@/components/patterns/CaseStudyCard';
import { siteConfig } from '@/config/site';
import { sectorCoverage, advisoryHistory, caseStudies } from '@/content/track-record';
import TrackRecordCharts from './TrackRecordCharts';

export const metadata: Metadata = createMetadata({
  title: 'The Diagnostic Approach',
  description:
    'How the Lead-to-Appointment Diagnostic works — what is examined, how the GCC operator context informs the process, and what the output looks like.',
});

export default function TrackRecordPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Real Estate Operating Systems Advisory',
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
    description: 'North Star Advisory Lead-to-Appointment Diagnostic for GCC real-estate operators.',
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
            The Diagnostic Approach
          </h1>
          <p style={{ fontSize: 15, lineHeight: 1.75, color: 'rgba(255,255,255,0.5)', maxWidth: 620 }}>
            How the Lead-to-Appointment Diagnostic works — what is examined, how the GCC operator context informs the process, and what illustrative findings look like across different operator types.
          </p>
        </Container>
      </div>

      {/* ── GCC Sector Landscape ── */}
      <section aria-labelledby="charts-heading" style={{ background: 'var(--color-bg-warm)', paddingBlock: 'var(--space-20)' }}>
        <Container>
          <SectionLabel variant="light">GCC Market Context</SectionLabel>
          <h2 id="charts-heading" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(24px,2.5vw,36px)', fontWeight: 400, color: 'var(--color-text-primary)', marginBlockEnd: 12 }}>
            Sector and Market Distribution
          </h2>
          <p style={{ fontSize: 13, lineHeight: 1.75, color: 'var(--color-text-secondary)', marginBlockEnd: 52, maxWidth: 680 }}>
            The GCC real-estate market is predominantly residential by enquiry volume. The diagnostic applies across all sectors — the specific process gaps vary by asset type and sales cycle length.
          </p>

          {/* Sector bar chart */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-0 mb-8">
            <div style={{ background: '#FFFFFF', padding: 36, borderInlineEnd: '1px solid rgba(0,0,0,0.08)' }}>
              <div style={{ fontSize: 12, fontWeight: 500, color: '#1A1A1A', marginBlockEnd: 28 }}>GCC Real Estate by Sector (Indicative)</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                {sectorCoverage.map((s) => (
                  <div key={s.sector}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBlockEnd: 6 }}>
                      <span style={{ fontSize: 12, color: 'var(--color-text-secondary)' }}>{s.sector}</span>
                      <span style={{ fontSize: 11, color: 'var(--color-text-muted)' }}>{s.percentage}%</span>
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
          <p style={{ fontSize: 11, color: 'var(--color-text-muted)', marginBlockStart: 12 }}>
            * Note: Sector and regional distribution figures represent indicative GCC real-estate enquiry pattern estimates compiled for illustrative contextual analysis (August 2026).
          </p>
        </Container>
      </section>

      {/* ── GCC Operator Context (renamed from "Advisory History") ── */}
      <section aria-labelledby="history-heading" style={{ background: 'var(--color-bg-white)', paddingBlock: 'var(--space-20)' }}>
        <Container>
          <SectionLabel variant="light">GCC Operator Context</SectionLabel>
          <h2 id="history-heading" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(24px,2.5vw,36px)', fontWeight: 400, color: 'var(--color-text-primary)', marginBlockEnd: 12 }}>
            How the problem evolved
          </h2>
          <p style={{ fontSize: 13, lineHeight: 1.75, color: 'var(--color-text-secondary)', marginBlockEnd: 52, maxWidth: 680 }}>
            The conversion gap in GCC real estate is the result of how sales processes evolved over the past decade — portal dependency, WhatsApp-first communication, and CRM implementations that did not reflect the actual sales workflow.
          </p>
          <div>
            {advisoryHistory.map((period, i) => (
              <AdvisoryHistoryRow key={period.period} period={period} isLast={i === advisoryHistory.length - 1} />
            ))}
          </div>
        </Container>
      </section>

      {/* ── Illustrative Diagnostic Scenarios ── */}
      <section aria-labelledby="cases-heading" style={{ background: 'var(--color-bg-warm)', paddingBlock: 'var(--space-20)' }}>
        <Container>
          <SectionLabel variant="light">Illustrative Scenarios</SectionLabel>
          <h2 id="cases-heading" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(24px,2.5vw,36px)', fontWeight: 400, color: 'var(--color-text-primary)', marginBlockEnd: 12 }}>
            How the diagnostic applies
          </h2>
          <p style={{ fontSize: 13, lineHeight: 1.75, color: 'var(--color-text-secondary)', marginBlockEnd: 52, maxWidth: 680 }}>
            These are illustrative scenarios — not documented client engagements. They describe how the diagnostic framework applies to common GCC operator situations and what findings typically emerge.
          </p>
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

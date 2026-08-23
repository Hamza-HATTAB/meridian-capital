import type { Metadata } from 'next';
import { createMetadata } from '@/lib/metadata';
import { Container } from '@/components/primitives/Container';
import { SectionLabel } from '@/components/primitives/SectionLabel';
import { Button } from '@/components/primitives/Button';
import { InsightCard } from '@/components/patterns/InsightCard';
import { siteConfig } from '@/config/site';
import { insights } from '@/content/insights';
import { ArrowUpRight } from 'lucide-react';

export const metadata: Metadata = createMetadata({
  title: 'Insights & Operator Perspectives',
  description:
    'Analysis and operating observations from North Star Advisory for GCC real-estate developers and operators.',
});

const featuredInsight = insights.find((i) => i.featured);
const otherInsights = insights.filter((i) => !i.featured);

export default function InsightsPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': insights.map((insight) => {
      // Parse date safely (e.g. "August 2026" -> 2026-08-01)
      const parsedDate = new Date(insight.date);
      const validDate = isNaN(parsedDate.getTime()) ? '2026-08-01T00:00:00.000Z' : parsedDate.toISOString();

      return {
        '@type': 'Article',
        headline: insight.title,
        description: insight.excerpt,
        datePublished: validDate,
        author: {
          '@type': 'Organization',
          name: siteConfig.name,
        },
        publisher: {
          '@type': 'Organization',
          name: siteConfig.name,
        },
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': `${siteConfig.url}/insights`,
        },
      };
    }),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* ── Page Header (SSR) ── */}
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
            Insights & Operator Perspectives
          </h1>
          <p style={{ fontSize: 15, lineHeight: 1.75, color: 'rgba(255,255,255,0.5)', maxWidth: 620 }}>
            Selected operator perspectives and process analysis from North Star Advisory for GCC real-estate businesses.
          </p>
        </Container>
      </div>

      {/* ── Featured Analysis ── */}
      {featuredInsight && (
        <section aria-labelledby="featured-heading" style={{ background: 'var(--color-bg-white)', paddingBlock: 'var(--space-20)' }}>
          <Container>
            <SectionLabel variant="light">Featured Analysis</SectionLabel>
            <h2 id="featured-heading" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(24px,2.5vw,36px)', fontWeight: 400, color: 'var(--color-text-primary)', marginBlockEnd: 48 }}>
              Operator Analysis
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-12 lg:gap-20">
              <InsightCard insight={featuredInsight} variant="featured" />
              <div style={{ paddingInlineStart: 0 }}>
                <div style={{ fontSize: 14, fontWeight: 500, color: 'var(--color-text-primary)', marginBlockEnd: 16 }}>About This Analysis</div>
                <p style={{ fontSize: 13, lineHeight: 1.8, color: 'var(--color-text-secondary)', marginBlockEnd: 28 }}>
                  Operator perspectives on enquiry conversion and sales-process design across GCC real-estate businesses. We examine where enquiries are lost between marketing campaigns and booked appointments.
                </p>
                <p style={{ fontSize: 13, lineHeight: 1.8, color: 'var(--color-text-secondary)', marginBlockEnd: 36 }}>
                  Request a diagnostic to evaluate where conversion gaps exist in your current operation.
                </p>
                <Button href="/contact" variant="primary" theme="light" size="md" icon={<ArrowUpRight size={14} aria-hidden="true" />}>
                  Request a Diagnostic
                </Button>
              </div>
            </div>
          </Container>
        </section>
      )}

      {/* ── All Insights ── */}
      <section aria-labelledby="all-insights-heading" style={{ background: 'var(--color-bg-warm)', paddingBlock: 'var(--space-20)' }}>
        <Container>
          <SectionLabel variant="light">Recent Articles</SectionLabel>
          <h2 id="all-insights-heading" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(22px,2.5vw,34px)', fontWeight: 400, color: 'var(--color-text-primary)', marginBlockEnd: 48 }}>
            Analysis Archive
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {otherInsights.map((insight) => (
              <InsightCard key={insight.id} insight={insight} variant="secondary" />
            ))}
          </div>
        </Container>
      </section>

      {/* ── Diagnostic CTA ── */}
      <section aria-label="Diagnostic CTA" style={{ background: 'var(--color-bg-dark)', paddingBlock: 'var(--space-20)' }}>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            <div>
              <SectionLabel variant="dark">Next Steps</SectionLabel>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(24px,2.5vw,38px)', fontWeight: 400, color: '#FFFFFF', lineHeight: 1.2, marginBlockEnd: 20 }}>
                Evaluate Your Conversion Process
              </h2>
              <p style={{ fontSize: 14, lineHeight: 1.8, color: 'rgba(255,255,255,0.5)' }}>
                The Lead-to-Appointment Diagnostic maps your enquiry journey, identifies process bottlenecks, and delivers a prioritised action list to increase appointment conversion.
              </p>
            </div>
            <div>
              <Button href="/contact" variant="primary" theme="dark" size="lg" icon={<ArrowUpRight size={14} aria-hidden="true" />}>
                Request a Diagnostic
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

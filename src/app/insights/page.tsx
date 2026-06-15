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
  title: 'Insights & Research',
  description:
    'Research publications, market commentary, and sector analysis from MERIDIAN Capital Advisory — focused on GCC and MENA institutional real estate.',
});

const featuredInsight = insights.find((i) => i.featured);
const otherInsights = insights.filter((i) => !i.featured);

export default function InsightsPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': insights.map((insight) => ({
      '@type': 'Article',
      headline: insight.title,
      description: insight.excerpt,
      datePublished: new Date(insight.date).toISOString(),
      author: {
        '@type': 'Organization',
        name: siteConfig.name,
      },
      publisher: {
        '@type': 'Organization',
        name: siteConfig.name,
        logo: {
          '@type': 'ImageObject',
          url: `${siteConfig.url}/logo.png`,
        },
      },
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': `${siteConfig.url}/insights`,
      },
    })),
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
            Insights & Research
          </h1>
          <p style={{ fontSize: 15, lineHeight: 1.75, color: 'rgba(255,255,255,0.5)', maxWidth: 620 }}>
            Selected research and market commentary from our advisory practice. Full research access
            is available to advisory clients. Published views represent a subset of our institutional
            intelligence work.
          </p>
        </Container>
      </div>

      {/* ── Featured Research ── */}
      {featuredInsight && (
        <section aria-labelledby="featured-heading" style={{ background: 'var(--color-bg-white)', paddingBlock: 'var(--space-20)' }}>
          <Container>
            <SectionLabel variant="light">Featured Research</SectionLabel>
            <h2 id="featured-heading" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(24px,2.5vw,36px)', fontWeight: 400, color: 'var(--color-text-primary)', marginBlockEnd: 48 }}>
              Annual Publication
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-12 lg:gap-20">
              <InsightCard insight={featuredInsight} variant="featured" />
              <div style={{ paddingInlineStart: 0 }}>
                <div style={{ fontSize: 14, fontWeight: 500, color: 'var(--color-text-primary)', marginBlockEnd: 16 }}>About This Report</div>
                <p style={{ fontSize: 13, lineHeight: 1.8, color: 'var(--color-text-secondary)', marginBlockEnd: 28 }}>
                  Our annual GCC Real Estate Outlook is the most comprehensive institutional research
                  publication on GCC and MENA real estate markets. It covers ten investment themes,
                  nine markets, and provides market-by-market allocation recommendations.
                </p>
                <p style={{ fontSize: 13, lineHeight: 1.8, color: 'var(--color-text-secondary)', marginBlockEnd: 36 }}>
                  Distributed to advisory clients and selected institutional investors. Request access
                  through the enquiry form below.
                </p>
                <Button href="/contact" variant="primary" theme="light" size="md" icon={<ArrowUpRight size={14} aria-hidden="true" />}>
                  Request Full Report
                </Button>
              </div>
            </div>
          </Container>
        </section>
      )}

      {/* ── All Insights ── */}
      <section aria-labelledby="all-insights-heading" style={{ background: 'var(--color-bg-warm)', paddingBlock: 'var(--space-20)' }}>
        <Container>
          <SectionLabel variant="light">Recent Publications</SectionLabel>
          <h2 id="all-insights-heading" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(22px,2.5vw,34px)', fontWeight: 400, color: 'var(--color-text-primary)', marginBlockEnd: 48 }}>
            Research Archive
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {otherInsights.map((insight) => (
              <InsightCard key={insight.id} insight={insight} variant="secondary" />
            ))}
          </div>
        </Container>
      </section>

      {/* ── Research Access CTA ── */}
      <section aria-label="Research access" style={{ background: 'var(--color-bg-dark)', paddingBlock: 'var(--space-20)' }}>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            <div>
              <SectionLabel variant="dark">Advisory Clients</SectionLabel>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(24px,2.5vw,38px)', fontWeight: 400, color: '#FFFFFF', lineHeight: 1.2, marginBlockEnd: 20 }}>
                Full Research Access
              </h2>
              <p style={{ fontSize: 14, lineHeight: 1.8, color: 'rgba(255,255,255,0.5)' }}>
                Advisory clients receive access to our complete quarterly research output — nine-market
                primary data, sector deep-dives, transaction evidence, and proprietary intelligence
                not published publicly.
              </p>
            </div>
            <div>
              <Button href="/contact" variant="primary" theme="dark" size="lg" icon={<ArrowUpRight size={14} aria-hidden="true" />}>
                Enquire About Research Access
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

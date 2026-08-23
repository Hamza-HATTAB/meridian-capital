import type { Metadata } from 'next';
import { createMetadata } from '@/lib/metadata';
import { Container } from '@/components/primitives/Container';
import { SectionLabel } from '@/components/primitives/SectionLabel';
import { Button } from '@/components/primitives/Button';
import { MarketIntelCard } from '@/components/patterns/MarketIntelCard';
import { InvestmentThemeCard } from '@/components/patterns/InvestmentThemeCard';
import { ServiceItem } from '@/components/patterns/ServiceItem';
import { ProcessStepItem } from '@/components/patterns/ProcessStepItem';
import { InsightCard } from '@/components/patterns/InsightCard';
import { ContactForm } from '@/components/patterns/ContactForm';
import { siteConfig } from '@/config/site';
import { marketIntelligence, researchProcess } from '@/content/track-record';
import { investmentThemes } from '@/content/themes';
import { advisoryServices } from '@/content/services';
import { insights } from '@/content/insights';
import { ArrowUpRight, ChevronRight } from 'lucide-react';

// ── Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = createMetadata({
  title: 'GCC Real-Estate Lead-to-Appointment Systems',
  description:
    'North Star Advisory helps GCC real-estate operators identify and repair the systems between marketing demand, enquiry capture, lead qualification, sales routing, CRM, and appointment conversion.',
});

// ── Featured insights ─────────────────────────────────────────────────────
const featuredInsight = insights.find((i) => i.featured);
const secondaryInsights = insights.filter((i) => !i.featured).slice(0, 4);

// ── Home Page ─────────────────────────────────────────────────────────────
export default function HomePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    contactPoint: {
      '@type': 'ContactPoint',
      email: siteConfig.contactEmail,
      contactType: 'customer service',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ════════════════════════════════════════════════════════════════
          SECTION 1 — HERO
          ════════════════════════════════════════════════════════════════ */}
      <section
        aria-label="North Star Advisory — Real-Estate Growth Systems"
        style={{
          background: '#FFFFFF',
          color: '#000000',
          paddingBlockStart: 'clamp(80px, 10vw, 160px)',
          paddingBlockEnd: 'clamp(80px, 10vw, 160px)',
          position: 'relative',
        }}
      >
        <Container>
          <div
            style={{
              maxWidth: 960,
              marginInline: 'auto',
              background: '#FFFFFF',
              border: '1px solid rgba(0,0,0,0.15)',
              padding: 'clamp(40px, 6vw, 80px)',
            }}
          >
            {/* Firm Header */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-end',
                borderBottom: '1px solid #000000',
                paddingBlockEnd: 16,
                marginBlockEnd: 'clamp(40px, 6vw, 80px)',
                fontFamily: 'monospace',
                fontSize: 11,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: 'rgba(0,0,0,0.7)',
              }}
            >
              <div>
                <strong style={{ fontSize: 13, display: 'block', marginBlockEnd: 4, color: '#000000' }}>
                  NORTH STAR ADVISORY
                </strong>
                REAL-ESTATE GROWTH SYSTEMS
              </div>
              <div style={{ textAlign: 'right' }}>
                <strong style={{ fontSize: 13, display: 'block', marginBlockEnd: 4, color: '#000000' }}>
                  GCC REAL ESTATE
                </strong>
                northstaradvisory.pro
              </div>
            </div>

            {/* Headline */}
            <h1
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(40px, 6vw, 80px)',
                fontWeight: 400,
                color: '#000000',
                lineHeight: 1.05,
                marginBlockEnd: 'clamp(40px, 6vw, 72px)',
                letterSpacing: '-0.02em',
                maxWidth: 760,
              }}
            >
              More qualified appointments.<br />
              Fewer lost enquiries.
            </h1>

            {/* Problem Statement Block */}
            <div
              style={{
                border: '1px solid #000000',
                background: '#FAFAFA',
                padding: 'clamp(28px, 4vw, 44px)',
                fontFamily: 'monospace',
                color: '#000000',
                marginBlockEnd: 'clamp(48px, 7vw, 88px)',
              }}
            >
              <div
                style={{
                  fontWeight: 'bold',
                  fontSize: 12,
                  borderBottom: '1px solid rgba(0,0,0,0.15)',
                  paddingBottom: 14,
                  marginBottom: 28,
                  letterSpacing: '0.05em',
                }}
              >
                [ THE TYPICAL GCC REAL-ESTATE OPERATOR PROBLEM ]
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-7 gap-x-14" style={{ fontSize: 13 }}>
                <div>
                  <div style={{ color: 'rgba(0,0,0,0.65)', marginBottom: 5, fontSize: 11 }}>MARKETING SPEND:</div>
                  <div style={{ fontWeight: 'bold' }}>INCREASING YEAR-ON-YEAR</div>
                </div>
                <div>
                  <div style={{ color: 'rgba(0,0,0,0.65)', marginBottom: 5, fontSize: 11 }}>APPOINTMENT CONVERSION:</div>
                  <div style={{ fontWeight: 'bold', color: '#D90000', display: 'inline-block', borderBottom: '2px solid #D90000' }}>FLAT OR DECLINING</div>
                </div>
                <div className="md:col-span-2">
                  <div style={{ color: 'rgba(0,0,0,0.65)', marginBottom: 5, fontSize: 11 }}>ROOT CAUSE:</div>
                  <div style={{ fontWeight: 'bold', lineHeight: 1.5 }}>ENQUIRIES LOST BETWEEN CAPTURE, QUALIFICATION, ROUTING, CRM, AND FOLLOW-UP — NOT FROM INSUFFICIENT DEMAND.</div>
                </div>
                <div className="md:col-span-2 pt-5 border-t border-[rgba(0,0,0,0.12)]">
                  <div style={{ color: 'rgba(0,0,0,0.65)', marginBottom: 5, fontSize: 11 }}>WHAT THIS COSTS:</div>
                  <div style={{ fontWeight: 'bold' }}>REVENUE ALREADY PAID FOR BY MARKETING BUT NEVER CONVERTED. THE FIX IS PROCESS — NOT MORE SPEND.</div>
                </div>
              </div>

              <div style={{ marginBlockStart: 40, paddingTop: 20, borderTop: '1px dashed rgba(0,0,0,0.15)', fontSize: 11, color: 'rgba(0,0,0,0.65)', lineHeight: 1.6 }}>
                <div>This is the problem the Lead-to-Appointment Diagnostic is designed to find and fix.</div>
              </div>
            </div>

            {/* Supporting Statement */}
            <div
              style={{
                display: 'flex',
                gap: 22,
                marginBlockEnd: 48,
              }}
            >
              <div style={{ width: 3, background: '#000000', flexShrink: 0 }} />
              <p
                style={{
                  fontSize: 'clamp(16px, 1.8vw, 20px)',
                  lineHeight: 1.65,
                  color: '#000000',
                  maxWidth: 680,
                  fontWeight: 400,
                  fontFamily: 'var(--font-display)',
                }}
              >
                {siteConfig.description}
              </p>
            </div>

            {/* Action Links */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 40,
                fontFamily: 'monospace',
                fontSize: 12,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
              }}
            >
              <a
                href="/contact"
                className="hover:text-black transition-colors"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  color: '#000000',
                  fontWeight: 'bold',
                }}
              >
                [ REQUEST A DIAGNOSTIC ] <ArrowUpRight size={14} />
              </a>
              <a
                href="/advisory-services"
                className="hover:text-black transition-colors"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  color: 'rgba(0,0,0,0.7)',
                }}
              >
                [ REVIEW THE METHOD ] <ChevronRight size={14} />
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          SECTION 2 — WHO THIS IS FOR
          ════════════════════════════════════════════════════════════════ */}
      <section
        aria-labelledby="audience-heading"
        style={{
          background: 'var(--color-bg-warm)',
          paddingBlock: 'var(--space-20)',
          borderTop: '1px solid rgba(0,0,0,0.1)',
        }}
      >
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 lg:gap-24">
            <div style={{ paddingInlineStart: '1vw' }}>
              <SectionLabel variant="light">Who This Is For</SectionLabel>
              <h2
                id="audience-heading"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(26px, 2.8vw, 40px)',
                  fontWeight: 400,
                  color: 'var(--color-text-primary)',
                  lineHeight: 1.2,
                  letterSpacing: '-0.01em',
                  marginBlockEnd: 20,
                }}
              >
                GCC real-estate operators with high enquiry volume.
              </h2>
              <p style={{ fontSize: 14, lineHeight: 1.8, color: 'var(--color-text-secondary)' }}>
                The diagnostic is relevant when you are spending on marketing, receiving enquiries, and cannot explain why conversion to appointment is lower than it should be.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-0" style={{ borderTop: '1px solid rgba(0,0,0,0.1)' }}>
              {[
                {
                  label: 'Developers',
                  desc: 'Master-planned communities, residential developments, multi-phase projects — any developer running active marketing campaigns and managing an inbound enquiry volume.',
                },
                {
                  label: 'Multi-Project Operators',
                  desc: 'Businesses managing simultaneous projects across markets or asset classes, where routing and CRM consistency becomes a structural challenge.',
                },
                {
                  label: 'Hospitality-Linked Real Estate',
                  desc: 'Branded residence operators and hospitality-integrated property businesses where the sales cycle is longer and the qualification criteria are specific.',
                },
                {
                  label: 'Portfolio Businesses',
                  desc: 'Real-estate portfolio businesses with multiple active products and sales teams, where enquiry attribution, routing, and conversion visibility are difficult to maintain.',
                },
              ].map((item, i) => (
                <div
                  key={item.label}
                  style={{
                    padding: '32px 28px',
                    borderBottom: '1px solid rgba(0,0,0,0.08)',
                    borderInlineStart: i % 2 !== 0 ? '1px solid rgba(0,0,0,0.08)' : 'none',
                  }}
                >
                  <div style={{ fontSize: 13, fontWeight: 500, color: 'var(--color-text-primary)', marginBlockEnd: 10 }}>
                    {item.label}
                  </div>
                  <p style={{ fontSize: 13, lineHeight: 1.75, color: 'var(--color-text-secondary)' }}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          SECTION 3 — WHERE REVENUE LEAKS (5 THEMES)
          ════════════════════════════════════════════════════════════════ */}
      <section
        aria-labelledby="revenue-leaks-heading"
        style={{
          background: 'var(--color-bg-dark-raised)',
          paddingBlock: 'var(--space-20)',
        }}
      >
        <Container>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              marginBlockEnd: 52,
            }}
          >
            <div style={{ paddingInlineStart: '1vw' }}>
              <SectionLabel variant="dark">The Five Leak Points</SectionLabel>
              <h2
                id="revenue-leaks-heading"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(28px, 3.5vw, 48px)',
                  fontWeight: 400,
                  color: '#FFFFFF',
                  lineHeight: 1.15,
                  letterSpacing: '-0.02em',
                }}
              >
                Where qualified enquiries are lost
              </h2>
            </div>
            <Button
              href="/advisory-services"
              variant="secondary"
              theme="dark"
              size="sm"
              icon={<ChevronRight size={13} aria-hidden="true" />}
            >
              The Diagnostic Method
            </Button>
          </div>

          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-px"
            style={{
              background: 'rgba(255,255,255,0.08)',
              border: '1px solid rgba(255,255,255,0.08)',
            }}
          >
            {investmentThemes.map((theme) => (
              <InvestmentThemeCard key={theme.id} theme={theme} />
            ))}
          </div>
        </Container>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          SECTION 4 — THE DIAGNOSTIC PROCESS
          ════════════════════════════════════════════════════════════════ */}
      <section
        aria-labelledby="process-heading"
        style={{
          background: 'var(--color-bg-warm)',
          paddingBlock: 'var(--space-20)',
        }}
      >
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 lg:gap-24">
            <div style={{ paddingInlineStart: '1vw' }}>
              <SectionLabel variant="light">The Diagnostic Method</SectionLabel>
              <h2
                id="process-heading"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(26px, 2.8vw, 40px)',
                  fontWeight: 400,
                  color: 'var(--color-text-primary)',
                  lineHeight: 1.2,
                  letterSpacing: '-0.01em',
                }}
              >
                How the Lead-to-Appointment Diagnostic works
              </h2>
            </div>

            <div>
              {researchProcess.map((step, i) => (
                <ProcessStepItem
                  key={step.phase}
                  step={step}
                  isLast={i === researchProcess.length - 1}
                />
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          SECTION 5 — WHAT WE DO NOT DO
          ════════════════════════════════════════════════════════════════ */}
      <section
        aria-labelledby="scope-heading"
        style={{
          background: 'var(--color-bg-white)',
          paddingBlock: 'var(--space-20)',
        }}
      >
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 lg:gap-24 items-start">
            <div style={{ paddingInlineStart: '1vw' }}>
              <SectionLabel variant="light">Scope</SectionLabel>
              <h2
                id="scope-heading"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(22px, 2.5vw, 34px)',
                  fontWeight: 400,
                  color: 'var(--color-text-primary)',
                  lineHeight: 1.3,
                  letterSpacing: '-0.01em',
                }}
              >
                What we do — and what we do not do
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div>
                <div
                  style={{
                    fontSize: 10,
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    color: 'var(--color-text-muted)',
                    marginBlockEnd: 16,
                    fontWeight: 500,
                  }}
                >
                  What the diagnostic covers
                </div>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12 }}>
                  {[
                    'Enquiry capture audit across all channels',
                    'Qualification and routing process review',
                    'CRM configuration and pipeline assessment',
                    'Response time and follow-up analysis',
                    'Conversion metric definition and reporting design',
                    'Prioritised action plan with specific recommendations',
                  ].map((item) => (
                    <li key={item} style={{ display: 'flex', gap: 10, fontSize: 13, lineHeight: 1.6, color: 'var(--color-text-secondary)' }}>
                      <span style={{ color: 'var(--color-accent-mid)', marginBlockStart: 2, flexShrink: 0 }} aria-hidden="true">—</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <div
                  style={{
                    fontSize: 10,
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    color: 'var(--color-text-muted)',
                    marginBlockEnd: 16,
                    fontWeight: 500,
                  }}
                >
                  What we do not do
                </div>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12 }}>
                  {[
                    'Property brokerage or sales agency',
                    'Investment product solicitation or capital placement',
                    'Guaranteed conversion outcomes',
                    'Unsupported claims about past results',
                    'Cookie-cutter templates applied without diagnosis',
                    'Engagements where the bottleneck has not been identified first',
                  ].map((item) => (
                    <li key={item} style={{ display: 'flex', gap: 10, fontSize: 13, lineHeight: 1.6, color: 'var(--color-text-secondary)' }}>
                      <span style={{ color: '#D90000', marginBlockStart: 2, flexShrink: 0 }} aria-hidden="true">✕</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          SECTION 6 — ADVISORY SERVICES OVERVIEW
          ════════════════════════════════════════════════════════════════ */}
      <section
        aria-labelledby="services-heading"
        style={{
          background: 'var(--color-bg-warm)',
          paddingBlock: 'var(--space-20)',
        }}
      >
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 lg:gap-24 items-start">
            <div style={{ paddingInlineStart: '1vw' }}>
              <SectionLabel variant="light">Engagements</SectionLabel>
              <h2
                id="services-heading"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(22px, 2.5vw, 34px)',
                  fontWeight: 400,
                  color: 'var(--color-text-primary)',
                  lineHeight: 1.3,
                  marginBlockEnd: 24,
                  letterSpacing: '-0.01em',
                }}
              >
                Structured engagements
              </h2>
              <p
                style={{
                  fontSize: 14,
                  lineHeight: 1.7,
                  color: 'var(--color-text-secondary)',
                  marginBlockEnd: 32,
                  maxWidth: '90%',
                }}
              >
                Each engagement is designed around a specific, measurable problem — not a generic consulting framework.
              </p>
              <Button
                href="/advisory-services"
                variant="primary"
                theme="light"
                size="md"
                icon={<ArrowUpRight size={14} aria-hidden="true" />}
              >
                View All Engagements
              </Button>
            </div>

            <div>
              {advisoryServices.slice(0, 3).map((service, i) => (
                <ServiceItem
                  key={service.id}
                  service={service}
                  isLast={i === 2}
                />
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          SECTION 7 — MARKET CONTEXT
          ════════════════════════════════════════════════════════════════ */}
      <section
        aria-labelledby="market-intel-heading"
        style={{
          background: 'var(--color-bg-white)',
          paddingBlock: 'var(--space-20)',
        }}
      >
        <Container>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              marginBlockEnd: 52,
            }}
          >
            <div style={{ paddingInlineStart: '1vw' }}>
              <SectionLabel variant="light">Market Perspective</SectionLabel>
              <h2
                id="market-intel-heading"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(20px, 2vw, 28px)',
                  fontWeight: 400,
                  color: 'var(--color-text-primary)',
                  lineHeight: 1.3,
                  maxWidth: 520,
                  letterSpacing: '-0.01em',
                }}
              >
                GCC real-estate operator context
              </h2>
            </div>
            <Button
              href="/insights"
              variant="ghost"
              theme="light"
              size="sm"
              icon={<ChevronRight size={13} aria-hidden="true" />}
            >
              All Analysis
            </Button>
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0"
            style={{
              borderTop: '1px solid rgba(0,0,0,0.1)',
              borderBottom: '1px solid rgba(0,0,0,0.1)',
            }}
          >
            {marketIntelligence.map((item, i) => (
              <MarketIntelCard key={item.headline} item={item} index={i} />
            ))}
          </div>
        </Container>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          SECTION 8 — INSIGHTS
          ════════════════════════════════════════════════════════════════ */}
      <section
        aria-labelledby="insights-heading"
        style={{
          background: 'var(--color-bg-warm)',
          paddingBlock: 'var(--space-20)',
        }}
      >
        <Container>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              marginBlockEnd: 48,
            }}
          >
            <div style={{ paddingInlineStart: '1vw' }}>
              <SectionLabel variant="light">Analysis</SectionLabel>
              <h2
                id="insights-heading"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(28px, 3.5vw, 48px)',
                  fontWeight: 400,
                  color: 'var(--color-text-primary)',
                  lineHeight: 1.15,
                  letterSpacing: '-0.02em',
                }}
              >
                Operator perspectives
              </h2>
            </div>
            <Button
              href="/insights"
              variant="ghost"
              theme="light"
              size="sm"
              icon={<ChevronRight size={13} aria-hidden="true" />}
            >
              All Analysis
            </Button>
          </div>

          {featuredInsight && (
            <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr_1fr] gap-12 lg:gap-0">
              <div
                style={{
                  paddingInlineEnd: 48,
                  borderInlineEnd: '1px solid rgba(0,0,0,0.1)',
                }}
              >
                <InsightCard insight={featuredInsight} variant="featured" />
              </div>

              <div
                style={{
                  paddingInline: 40,
                  borderInlineEnd: '1px solid rgba(0,0,0,0.1)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 36,
                }}
              >
                {secondaryInsights.slice(0, 2).map((insight) => (
                  <InsightCard key={insight.id} insight={insight} variant="secondary" />
                ))}
              </div>

              <div
                style={{
                  paddingInlineStart: 40,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 36,
                }}
              >
                {secondaryInsights.slice(2, 4).map((insight) => (
                  <InsightCard key={insight.id} insight={insight} variant="tertiary" />
                ))}
              </div>
            </div>
          )}
        </Container>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          SECTION 9 — REQUEST A DIAGNOSTIC (DARK CTA)
          ════════════════════════════════════════════════════════════════ */}
      <section
        aria-labelledby="cta-heading"
        style={{
          background: 'var(--color-bg-dark-surface)',
          paddingBlock: 'var(--space-20)',
        }}
      >
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
            <div style={{ paddingInlineStart: '1vw' }}>
              <SectionLabel variant="dark">Start Here</SectionLabel>
              <h2
                id="cta-heading"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(30px, 3.5vw, 46px)',
                  fontWeight: 400,
                  color: '#FFFFFF',
                  lineHeight: 1.1,
                  marginBlockEnd: 24,
                  letterSpacing: '-0.02em',
                }}
              >
                Request a Lead-to-Appointment Diagnostic
              </h2>
              <p
                style={{
                  fontSize: 15,
                  lineHeight: 1.75,
                  color: 'rgba(255,255,255,0.55)',
                  marginBlockEnd: 32,
                  maxWidth: '90%',
                }}
              >
                Tell us about your operation, your current enquiry channels, and where you believe conversion is failing. We will assess whether a diagnostic is relevant to your situation and respond within two business days.
              </p>
              <p
                style={{
                  fontSize: 12,
                  lineHeight: 1.7,
                  color: 'rgba(255,255,255,0.4)',
                  maxWidth: '85%',
                }}
              >
                North Star Advisory works with GCC real-estate developers, operators, and multi-project businesses. We do not provide property brokerage, investment product advice, or capital placement services.
              </p>
            </div>

            <div>
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

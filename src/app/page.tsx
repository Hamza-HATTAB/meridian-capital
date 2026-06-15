import type { Metadata } from 'next';
import { createMetadata } from '@/lib/metadata';
import { Container } from '@/components/primitives/Container';
import { SectionLabel } from '@/components/primitives/SectionLabel';
import { Button } from '@/components/primitives/Button';
import { MarketIntelCard } from '@/components/patterns/MarketIntelCard';
import { InvestmentThemeCard } from '@/components/patterns/InvestmentThemeCard';
import { ServiceItem } from '@/components/patterns/ServiceItem';
import { SectorBar } from '@/components/patterns/SectorBar';
import { TransactionRow } from '@/components/patterns/TransactionRow';
import { ProcessStepItem } from '@/components/patterns/ProcessStepItem';
import { InsightCard } from '@/components/patterns/InsightCard';
import { ContactForm } from '@/components/patterns/ContactForm';
import { siteConfig } from '@/config/site';
import { marketIntelligence, researchProcess, heroStats, sectorCoverage } from '@/content/track-record';
import { investmentThemes } from '@/content/themes';
import { advisoryServices } from '@/content/services';
import { transactions } from '@/content/transactions';
import { insights } from '@/content/insights';
import { ArrowUpRight, ChevronRight } from 'lucide-react';

// ── Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = createMetadata({
  title: 'GCC Institutional Real Estate Advisory',
  description:
    'Independent real estate advisory for family offices, sovereign-linked capital, and institutional allocators across the GCC and MENA markets. 18 years. AED 14.2B+ in advisory mandates.',
});

// ── Featured transactions (first 6) ──────────────────────────────────────
const featuredTransactions = transactions.filter((t) => t.featured).slice(0, 6);

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
    logo: `${siteConfig.url}/logo.png`,
    contactPoint: {
      '@type': 'ContactPoint',
      email: siteConfig.contactEmail,
      contactType: 'customer service',
    },
    address: siteConfig.offices.map((office) => ({
      '@type': 'PostalAddress',
      addressLocality: office.city,
      streetAddress: office.address,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* ════════════════════════════════════════════════════════════════
          SECTION 1 — HERO (INVESTMENT COMMITTEE MEMORANDUM)
          ════════════════════════════════════════════════════════════════ */}
      <section
        aria-label="Investment Committee Memorandum"
        style={{
          background: '#FFFFFF', // Pure white paper aesthetic
          color: '#000000',
          paddingBlockStart: 'clamp(60px, 8vw, 120px)',
          paddingBlockEnd: 'clamp(60px, 8vw, 120px)',
          position: 'relative',
        }}
      >
        <Container>
          <div
            style={{
              maxWidth: 1040,
              marginInline: 'auto',
              background: '#FFFFFF',
              border: '1px solid #000000',
              padding: 'clamp(32px, 5vw, 64px)',
              boxShadow: '12px 12px 0px 0px rgba(0,0,0,0.05)', // Subtle stack effect
            }}
          >
            {/* Memo Header */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-end',
                borderBottom: '3px solid #000000',
                paddingBlockEnd: 16,
                marginBlockEnd: 'clamp(40px, 6vw, 80px)',
                fontFamily: 'monospace',
                fontSize: 11,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: '#000000',
              }}
            >
              <div>
                <strong style={{ fontSize: 13, display: 'block', marginBlockEnd: 4 }}>STRICTLY CONFIDENTIAL</strong>
                INVESTMENT COMMITTEE BRIEFING
              </div>
              <div style={{ textAlign: 'right' }}>
                <strong style={{ fontSize: 13, display: 'block', marginBlockEnd: 4 }}>REF: MERIDIAN-{new Date().getFullYear()}</strong>
                {siteConfig.name}
              </div>
            </div>

            {/* Headline */}
            <h1
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(42px, 6.5vw, 84px)',
                fontWeight: 400,
                color: '#000000',
                lineHeight: 1.05,
                marginBlockEnd: 48,
                letterSpacing: '-0.02em',
                maxWidth: 900,
              }}
            >
              We are paid for judgment, not transactions.
            </h1>

            {/* Core Belief Statement */}
            <div
              style={{
                display: 'flex',
                gap: 24,
                marginBlockEnd: 'clamp(40px, 6vw, 80px)',
              }}
            >
              <div style={{ width: 4, background: '#000000', flexShrink: 0 }} />
              <p
                style={{
                  fontSize: 'clamp(18px, 2vw, 22px)',
                  lineHeight: 1.5,
                  color: '#000000',
                  maxWidth: 720,
                  fontWeight: 400,
                  fontFamily: 'var(--font-display)',
                }}
              >
                In a market driven by transaction volume and developer optimism, Meridian protects institutional capital. The most valuable advice we offer an investment committee is often the recommendation to withdraw.
              </p>
            </div>

            {/* CONFIDENTIAL PROOF ARTIFACT */}
            <div
              style={{
                border: '1px solid #000000',
                background: '#FAFAFA',
                padding: 'clamp(20px, 3vw, 32px)',
                fontFamily: 'monospace',
                fontSize: 12,
                color: '#000000',
                marginBlockEnd: 'clamp(40px, 6vw, 80px)',
              }}
            >
              <div 
                style={{ 
                  fontWeight: 'bold', 
                  borderBottom: '1px solid rgba(0,0,0,0.15)', 
                  paddingBottom: 12, 
                  marginBottom: 20,
                  letterSpacing: '0.05em'
                }}
              >
                [ EXCERPT: IC BRIEFING #412 // DIFC ASSET REVIEW ]
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
                <div>
                  <div style={{ color: 'rgba(0,0,0,0.65)', marginBottom: 4 }}>MARKET CONSENSUS:</div>
                  <div style={{ fontWeight: 'bold' }}>STRONG BUY (YIELD 5.8%)</div>
                </div>
                <div>
                  <div style={{ color: 'rgba(0,0,0,0.65)', marginBottom: 4 }}>MERIDIAN ADVISORY:</div>
                  <div style={{ fontWeight: 'bold', color: '#D90000' }}>WITHDRAW / DECLINE</div>
                </div>
                <div className="md:col-span-2 mt-2">
                  <div style={{ color: 'rgba(0,0,0,0.65)', marginBottom: 4 }}>RATIONALE:</div>
                  <div style={{ fontWeight: 'bold' }}>UNPRICED COVENANT RISK ON ANCHOR TENANT IDENTIFIED DURING INDEPENDENT DD.</div>
                </div>
                <div className="md:col-span-2 mt-2 pt-4 border-t border-[rgba(0,0,0,0.15)]">
                  <div style={{ color: 'rgba(0,0,0,0.65)', marginBottom: 4 }}>POST-DECISION OUTCOME:</div>
                  <div style={{ fontWeight: 'bold' }}>TENANT DEFAULTED 18 MONTHS LATER. <span style={{ background: 'rgba(0,0,0,0.05)', padding: '2px 6px' }}>AED 120M CAPITAL PRESERVED.</span></div>
                </div>
              </div>
            </div>

            {/* Ledger Table */}
            <div
              style={{
                borderTop: '1px solid #000000',
                borderBottom: '1px solid #000000',
                paddingBlock: '32px',
              }}
            >
              <div
                style={{
                  fontFamily: 'monospace',
                  fontSize: 11,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  marginBlockEnd: 32,
                  fontWeight: 'bold',
                  color: '#000000',
                }}
              >
                [ FIRM VITAL METRICS // DATA AS OF Q2 2026 ]
              </div>
              
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-8">
                {heroStats.map((stat) => (
                  <div 
                    key={stat.label} 
                    style={{ 
                      paddingInlineStart: 16, 
                      borderInlineStart: '1px solid rgba(0,0,0,0.15)' 
                    }}
                  >
                    <div 
                      style={{ 
                        fontSize: 10, 
                        fontFamily: 'monospace', 
                        color: 'rgba(0,0,0,0.6)', 
                        textTransform: 'uppercase', 
                        letterSpacing: '0.05em',
                        marginBlockEnd: 12 
                      }}
                    >
                      {stat.label}
                    </div>
                    <div 
                      style={{ 
                        fontFamily: 'var(--font-display)', 
                        fontSize: 'clamp(28px, 3vw, 38px)', 
                        color: '#000000', 
                        lineHeight: 1,
                        letterSpacing: '-0.01em'
                      }}
                    >
                      {stat.value}
                    </div>
                    {stat.unit && (
                      <div 
                        style={{ 
                          fontSize: 10, 
                          fontFamily: 'monospace', 
                          color: '#000000', 
                          textTransform: 'uppercase', 
                          letterSpacing: '0.05em',
                          marginBlockStart: 8 
                        }}
                      >
                        {stat.unit}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
            
            {/* Action Links */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 32,
                marginBlockStart: 32,
                fontFamily: 'monospace',
                fontSize: 12,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
              }}
            >
              <a 
                href="/contact" 
                className="hover:bg-black/10 transition-colors"
                style={{ 
                  display: 'inline-flex', 
                  alignItems: 'center', 
                  gap: 8, 
                  color: '#000000', 
                  fontWeight: 'bold',
                  background: 'rgba(0,0,0,0.05)',
                  padding: '12px 16px',
                  border: '1px solid #000000',
                }}
              >
                [ INITIATE DIALOGUE ] <ArrowUpRight size={14} />
              </a>
              <a 
                href="/track-record" 
                className="hover:text-black transition-colors"
                style={{ 
                  display: 'inline-flex', 
                  alignItems: 'center', 
                  gap: 8, 
                  color: 'rgba(0,0,0,0.6)',
                  padding: '12px 16px',
                }}
              >
                [ EXAMINE EVIDENCE ] <ChevronRight size={14} />
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          SECTION 2 — WHY ARE YOU DIFFERENT (RESEARCH PROCESS)
          ════════════════════════════════════════════════════════════════ */}
      <section
        aria-labelledby="process-heading"
        style={{
          background: 'var(--color-bg-warm)', // Shifted background to transition from white memo
          paddingBlock: 'var(--space-20)',
          borderTop: '1px solid rgba(0,0,0,0.1)'
        }}
      >
        <Container>
          <div
            className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 lg:gap-24"
          >
            {/* Left */}
            <div style={{ paddingInlineStart: '1vw' }}>
              <SectionLabel variant="light">The Discipline</SectionLabel>
              <h2
                id="process-heading"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(28px, 3vw, 42px)',
                  fontWeight: 400,
                  color: 'var(--color-text-primary)',
                  lineHeight: 1.2,
                  letterSpacing: '-0.01em',
                }}
              >
                How We Generate Conviction
              </h2>
            </div>

            {/* Right — steps */}
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
          SECTION 3 — WHY SHOULD I BELIEVE YOU (TRACK RECORD - CYCLES)
          ════════════════════════════════════════════════════════════════ */}
      <section
        aria-labelledby="track-record-heading"
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
              <SectionLabel variant="dark">Institutional Track Record</SectionLabel>
              <h2
                id="track-record-heading"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(32px, 4vw, 54px)', // Tier 1 scale
                  fontWeight: 400,
                  color: '#FFFFFF',
                  lineHeight: 1.1,
                  letterSpacing: '-0.02em',
                }}
              >
                18 Years Across Three Market Cycles
              </h2>
            </div>
            <Button
              href="/track-record"
              variant="secondary"
              theme="dark"
              size="sm"
              icon={<ChevronRight size={13} aria-hidden="true" />}
            >
              Full Record
            </Button>
          </div>

          {/* Sector coverage bars */}
          <div
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-7"
            style={{
              paddingBlock: 40,
              borderTop: '1px solid rgba(255,255,255,0.08)',
            }}
          >
            {sectorCoverage.map((sector) => (
              <SectorBar key={sector.sector} sector={sector} variant="dark" />
            ))}
          </div>
        </Container>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          SECTION 4 — SHOW ME EVIDENCE (TRANSACTIONS)
          ════════════════════════════════════════════════════════════════ */}
      <section
        aria-labelledby="transactions-heading"
        style={{
          background: 'var(--color-bg-white)', // Contrast against previous dark section
          paddingBlock: 'var(--space-20)',
        }}
      >
        <Container>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              marginBlockEnd: 40,
            }}
          >
            <div style={{ paddingInlineStart: '1vw' }}>
              <SectionLabel variant="light">Advisory Ledger</SectionLabel>
              <h2
                id="transactions-heading"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(24px, 2.5vw, 38px)', // Tier 2 scale
                  fontWeight: 400,
                  color: 'var(--color-text-primary)',
                  lineHeight: 1.25,
                  letterSpacing: '-0.01em',
                }}
              >
                Selected Mandates
              </h2>
            </div>
            <Button
              href="/transactions"
              variant="ghost"
              theme="light"
              size="sm"
              icon={<ChevronRight size={13} aria-hidden="true" />}
            >
              All Transactions
            </Button>
          </div>

          <div className="overflow-x-auto pb-4" tabIndex={0} aria-label="Selected transactions table">
            <div className="min-w-[700px]">
              {/* Table header */}
              <div
                className="grid grid-cols-[2fr_1fr_1fr_1fr_1fr]"
            style={{
              paddingBlock: '10px 16px',
              borderBottom: '1px solid rgba(0,0,0,0.15)',
            }}
          >
            {['Transaction', 'Type', 'Market', 'Strategy', 'Role'].map(
              (col) => (
                <span
                  key={col}
                  style={{
                    fontSize: 10,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: 'var(--color-text-muted)',
                  }}
                >
                  {col}
                </span>
              )
            )}
              </div>
          {/* Transaction rows */}
          <div role="list" aria-label="Selected transactions">
            {featuredTransactions.map((tx) => (
              <div key={tx.id} role="listitem">
                <TransactionRow transaction={tx} />
              </div>
            ))}
          </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          SECTION 5 — INTERNAL MEMOS (INSIGHTS)
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
              <SectionLabel variant="light">Committee Briefings</SectionLabel>
              <h2
                id="insights-heading"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(32px, 4vw, 54px)', // Tier 1 scale
                  fontWeight: 400,
                  color: 'var(--color-text-primary)',
                  lineHeight: 1.1,
                  letterSpacing: '-0.02em',
                }}
              >
                Internal Memos & Market Views
              </h2>
            </div>
            <Button
              href="/insights"
              variant="ghost"
              theme="light"
              size="sm"
              icon={<ChevronRight size={13} aria-hidden="true" />}
            >
              Access Archive
            </Button>
          </div>

          {/* Featured + secondary grid */}
          {featuredInsight && (
            <div
              className="grid grid-cols-1 lg:grid-cols-[2fr_1fr_1fr] gap-12 lg:gap-0"
            >
              {/* Featured */}
              <div
                style={{
                  paddingInlineEnd: 48,
                  borderInlineEnd: '1px solid rgba(0,0,0,0.1)',
                }}
              >
                <InsightCard insight={featuredInsight} variant="featured" />
              </div>

              {/* Secondary pair */}
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
                  <InsightCard
                    key={insight.id}
                    insight={insight}
                    variant="secondary"
                  />
                ))}
              </div>

              {/* Tertiary pair */}
              <div
                style={{
                  paddingInlineStart: 40,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 36,
                }}
              >
                {secondaryInsights.slice(2, 4).map((insight) => (
                  <InsightCard
                    key={insight.id}
                    insight={insight}
                    variant="tertiary"
                  />
                ))}
              </div>
            </div>
          )}
        </Container>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          SECTION 6 — CURRENT VIEWS (MARKET INTEL)
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
              <SectionLabel variant="light">Market Intelligence</SectionLabel>
              <h2
                id="market-intel-heading"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(20px, 2vw, 28px)', // Tier 2 scale
                  fontWeight: 400,
                  color: 'var(--color-text-primary)',
                  lineHeight: 1.3,
                  maxWidth: 520,
                  letterSpacing: '-0.01em',
                }}
              >
                Current Views on GCC Markets
              </h2>
            </div>
            <Button
              href="/investment-intelligence"
              variant="ghost"
              theme="light"
              size="sm"
              icon={<ChevronRight size={13} aria-hidden="true" />}
            >
              All Research
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
          SECTION 7 — AREAS OF CONVICTION (THEMES)
          ════════════════════════════════════════════════════════════════ */}
      <section
        aria-labelledby="themes-heading"
        style={{
          background: 'var(--color-bg-warm)',
          paddingBlockEnd: 'var(--space-20)',
        }}
      >
        <Container>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              marginBlockEnd: 48,
              paddingBlockStart: 'var(--space-20)',
            }}
          >
            <div style={{ paddingInlineStart: '1vw' }}>
              <SectionLabel variant="light">Investment Themes</SectionLabel>
              <h2
                id="themes-heading"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(20px, 2vw, 28px)', // Tier 2 scale
                  fontWeight: 400,
                  color: 'var(--color-text-primary)',
                  lineHeight: 1.3,
                  letterSpacing: '-0.01em',
                }}
              >
                Areas of Active Conviction
              </h2>
            </div>
            <Button
              href="/investment-intelligence"
              variant="ghost"
              theme="light"
              size="sm"
              icon={<ChevronRight size={13} aria-hidden="true" />}
            >
              Full Analysis
            </Button>
          </div>

          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-px"
            style={{
              background: '#FFFFFF',
              border: '1px solid rgba(0,0,0,0.1)',
            }}
          >
            {investmentThemes.map((theme) => (
              <InvestmentThemeCard key={theme.id} theme={theme} />
            ))}
          </div>
        </Container>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          SECTION 8 — ADVISORY SERVICES
          ════════════════════════════════════════════════════════════════ */}
      <section
        aria-labelledby="services-heading"
        style={{
          background: 'var(--color-bg-white)',
          paddingBlock: 'var(--space-20)',
        }}
      >
        <Container>
          <div
            className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 lg:gap-24 items-start"
          >
            {/* Left column */}
            <div style={{ paddingInlineStart: '1vw' }}>
              <SectionLabel variant="light">Advisory Disciplines</SectionLabel>
              <h2
                id="services-heading"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(20px, 2vw, 28px)', // Tier 2 scale
                  fontWeight: 400,
                  color: 'var(--color-text-primary)',
                  lineHeight: 1.3,
                  marginBlockEnd: 24,
                  letterSpacing: '-0.01em',
                }}
              >
                Structured Engagements
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
                Our services provide institutional capital with the rigorous, independent analysis required to make defensible real estate allocation decisions.
              </p>
              <Button
                href="/advisory-services"
                variant="primary"
                theme="light"
                size="md"
                icon={<ArrowUpRight size={14} aria-hidden="true" />}
              >
                View Scope of Services
              </Button>
            </div>

            {/* Right column — service list */}
            <div>
              {advisoryServices.map((service, i) => (
                <ServiceItem
                  key={service.id}
                  service={service}
                  isLast={i === advisoryServices.length - 1}
                />
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          SECTION 9 — INSTITUTIONAL INQUIRY (DARK)
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
            {/* Left */}
            <div style={{ paddingInlineStart: '1vw' }}>
              <SectionLabel variant="dark">Strategic Dialogue</SectionLabel>
              <h2
                id="cta-heading"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(32px, 3.5vw, 48px)', // Tier 1 scale
                  fontWeight: 400,
                  color: '#FFFFFF',
                  lineHeight: 1.1,
                  marginBlockEnd: 24,
                  letterSpacing: '-0.02em',
                }}
              >
                Request a Discussion
              </h2>
              <p
                style={{
                  fontSize: 15,
                  lineHeight: 1.7,
                  color: 'rgba(255,255,255,0.55)',
                  marginBlockEnd: 40,
                  maxWidth: '90%',
                }}
              >
                Meridian accepts a limited number of advisory mandates per quarter. To discuss a potential engagement, verify a market thesis, or request our latest internal views, please initiate a dialogue below.
              </p>

              {/* Offices */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                {siteConfig.offices.map((office) => (
                  <div key={office.city}>
                    <div
                      style={{
                        fontSize: 10,
                        letterSpacing: '0.12em',
                        textTransform: 'uppercase',
                        color: 'rgba(255,255,255,0.55)',
                        marginBlockEnd: 4,
                      }}
                    >
                      {office.city}
                    </div>
                    <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.55)' }}>
                      {office.address}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — form */}
            <div>
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

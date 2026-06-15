import type { Metadata } from 'next';
import Image from 'next/image';
import { createMetadata } from '@/lib/metadata';
import { Container } from '@/components/primitives/Container';
import { SectionLabel } from '@/components/primitives/SectionLabel';
import { TeamMemberCard } from '@/components/patterns/TeamMemberCard';
import { siteConfig } from '@/config/site';
import { teamMembers } from '@/content/team';

const BOARDROOM_IMG =
  'https://images.unsplash.com/photo-1571624436279-b272aff752b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080';

export const metadata: Metadata = createMetadata({
  title: 'About the Firm',
  description:
    'MERIDIAN Capital Advisory was founded in 2006 with one purpose: genuinely independent real estate advisory for institutional capital in the GCC.',
});

const methodologyItems = [
  { title: 'Primary Research', desc: 'Quarterly primary research across nine markets. Direct engagement with tenants, developers, valuers, and transacting parties to capture leading indicators not visible in published data.' },
  { title: 'Transaction Intelligence', desc: 'Systematic collection and analysis of actual transaction evidence. Our comparable database represents 18 years of GCC transaction data, covering off-market as well as publicly reported deals.' },
  { title: 'Risk Framework', desc: 'Every recommendation is assessed against our proprietary risk framework covering income risk, structural risk, market risk, exit risk, and regulatory risk. Risk cannot be advised away — it must be quantified.' },
  { title: 'Cycle Awareness', desc: 'GCC real estate has moved through three distinct cycles since our founding. This experience informs our understanding of market dynamics in ways that cannot be replicated by firms without institutional memory.' },
];

export default function AboutPage() {
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
            About the Firm
          </h1>
          <p style={{ fontSize: 15, lineHeight: 1.75, color: 'rgba(255,255,255,0.5)', maxWidth: 580 }}>
            {siteConfig.name} was founded in {siteConfig.foundedYear} with a single purpose: to provide institutional
            capital with genuinely independent real estate advisory across the GCC and MENA region.
          </p>
        </Container>
      </div>

      {/* ── Philosophy ── */}
      <section aria-labelledby="philosophy-heading" style={{ background: 'var(--color-bg-warm)', paddingBlock: 'var(--space-20)' }}>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
            <div>
              <SectionLabel variant="light">Our Philosophy</SectionLabel>
              <h2 id="philosophy-heading" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(24px,2.5vw,36px)', fontWeight: 400, color: 'var(--color-text-primary)', lineHeight: 1.3, marginBlockEnd: 28 }}>
                Research-Driven. Conflict-Free. Disciplined.
              </h2>
              <p style={{ fontSize: 14, lineHeight: 1.85, color: 'var(--color-text-secondary)', marginBlockEnd: 20 }}>
                We were established because we observed a structural problem in the GCC real estate
                advisory market: the firms providing &quot;advisory&quot; to institutional capital were predominantly
                brokers, developers, and project marketers — all with economic interests in transaction
                completion rather than transaction quality.
              </p>
              <p style={{ fontSize: 14, lineHeight: 1.85, color: 'var(--color-text-secondary)', marginBlockEnd: 20 }}>
                We built {siteConfig.name} to be a different type of firm. We earn no commission from transactions.
                We hold no inventory. We have no developer relationships that compromise our market analysis.
                We are paid only for the quality of our research and the quality of our advice.
              </p>
              <p style={{ fontSize: 14, lineHeight: 1.85, color: 'var(--color-text-secondary)' }}>
                Over {siteConfig.yearsExperience} years and three market cycles, this model has proven its value — most clearly in
                the moments when the right advice was to do nothing, to wait, or to exit — advice that
                conflicted advisors could never credibly give.
              </p>
            </div>
            <div>
              <Image
                src={BOARDROOM_IMG}
                alt="MERIDIAN advisory meeting"
                width={600}
                height={440}
                style={{ width: '100%', height: 440, objectFit: 'cover', filter: 'grayscale(15%)' }}
              />
            </div>
          </div>
        </Container>
      </section>

      {/* ── Methodology ── */}
      <section aria-labelledby="methodology-heading" style={{ background: 'var(--color-bg-white)', paddingBlock: 'var(--space-20)' }}>
        <Container>
          <SectionLabel variant="light">Methodology</SectionLabel>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 lg:gap-24">
            <h2 id="methodology-heading" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(22px,2.5vw,34px)', fontWeight: 400, color: 'var(--color-text-primary)', lineHeight: 1.3 }}>
              How We Generate Conviction
            </h2>
            <div>
              <p style={{ fontSize: 14, lineHeight: 1.85, color: 'var(--color-text-secondary)', marginBlockEnd: 28 }}>
                Our investment process is grounded in primary market research. We do not resell data from
                consultancies or rely on published market reports as primary sources. We generate our own
                data through direct market engagement, transaction evidence collection, and systematic
                dialogue with local market participants.
              </p>
              <p style={{ fontSize: 14, lineHeight: 1.85, color: 'var(--color-text-secondary)' }}>
                This approach produces intelligence that is ahead of consensus, particularly at market
                inflection points where publicly available data lags reality by 6–12 months.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-12 lg:gap-y-0" style={{ marginBlockStart: 60, borderTop: '1px solid rgba(0,0,0,0.1)' }}>
            {methodologyItems.map((item, i) => (
              <div key={item.title} style={{ paddingBlock: 36, paddingInlineStart: i > 0 ? 32 : 0, paddingInlineEnd: 32, borderInlineStart: i > 0 ? '1px solid rgba(0,0,0,0.08)' : 'none' }}>
                <div style={{ fontSize: 14, fontWeight: 500, color: 'var(--color-text-primary)', marginBlockEnd: 12 }}>{item.title}</div>
                <p style={{ fontSize: 13, lineHeight: 1.75, color: 'var(--color-text-secondary)' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Leadership ── */}
      <section aria-labelledby="team-heading" style={{ background: 'var(--color-bg-warm)', paddingBlock: 'var(--space-20)' }}>
        <Container>
          <SectionLabel variant="light">Leadership</SectionLabel>
          <h2 id="team-heading" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(24px,2.5vw,36px)', fontWeight: 400, color: 'var(--color-text-primary)', marginBlockEnd: 52 }}>
            The Advisory Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-y-12 md:gap-y-0" style={{ borderTop: '1px solid rgba(0,0,0,0.1)' }}>
            {teamMembers.map((member, i) => (
              <TeamMemberCard key={member.id} member={member} index={i} />
            ))}
          </div>
        </Container>
      </section>

      {/* ── Regulatory Structure (Dark) ── */}
      <section aria-labelledby="regulatory-heading" style={{ background: 'var(--color-bg-dark)', paddingBlock: 'var(--space-20)' }}>
        <Container>
          <SectionLabel variant="dark">Firm Structure</SectionLabel>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <h2 id="regulatory-heading" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(22px,2.5vw,32px)', fontWeight: 400, color: '#FFFFFF', lineHeight: 1.3, marginBlockEnd: 24 }}>
                Regulatory Framework & Firm Structure
              </h2>
              <p style={{ fontSize: 14, lineHeight: 1.8, color: 'rgba(255,255,255,0.5)' }}>
                {siteConfig.name} operates through regulated entities in both Dubai International
                Financial Centre and Abu Dhabi Global Market, the two principal institutional financial
                centres in the GCC. Regulatory oversight by {siteConfig.regulators.join(' and ')} respectively.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {siteConfig.entities.map((entity) => (
                <div key={entity.label} style={{ padding: '20px 24px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)' }}>
                  <div style={{ fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', marginBlockEnd: 8 }}>{entity.label}</div>
                  <div style={{ fontSize: 13, color: '#FFFFFF', marginBlockEnd: 4, lineHeight: 1.4 }}>{entity.name}</div>
                  <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.5)' }}>{entity.sub}</div>
                </div>
              ))}
              <div style={{ padding: '20px 24px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)' }}>
                <div style={{ fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', marginBlockEnd: 8 }}>Principal Office</div>
                <div style={{ fontSize: 13, color: '#FFFFFF', marginBlockEnd: 4, lineHeight: 1.4 }}>Gate Village 10, DIFC, Dubai, UAE</div>
              </div>
              <div style={{ padding: '20px 24px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)' }}>
                <div style={{ fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', marginBlockEnd: 8 }}>Established</div>
                <div style={{ fontSize: 13, color: '#FFFFFF', lineHeight: 1.4 }}>{siteConfig.foundedYear}</div>
                <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.5)' }}>{siteConfig.yearsExperience} years of continuous practice</div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

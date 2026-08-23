import type { Metadata } from 'next';
import { createMetadata } from '@/lib/metadata';
import { Container } from '@/components/primitives/Container';
import { SectionLabel } from '@/components/primitives/SectionLabel';
import { siteConfig } from '@/config/site';
import { teamMembers } from '@/content/team';

export const metadata: Metadata = createMetadata({
  title: 'About North Star Advisory',
  description:
    'North Star Advisory is a real-estate growth systems practice focused on GCC developers and operators. We help businesses find and fix the process gaps between enquiry capture and appointment conversion.',
});

const approachItems = [
  {
    title: 'Diagnose Before Prescribing',
    desc: 'Every engagement begins with a structured review of the actual process — what channels are in use, how enquiries are captured, how they are qualified, and where they are lost. We do not apply templates before understanding the specific constraint.',
  },
  {
    title: 'Measure What Matters',
    desc: 'The metric most GCC real-estate operators cannot currently produce is their enquiry-to-appointment conversion rate, broken down by stage. Making that number visible is the first step — because you cannot improve what you cannot measure.',
  },
  {
    title: 'Process Over Headcount',
    desc: 'Most conversion problems in GCC real estate are process and system problems, not people problems. A defined, consistent process produces better results than motivated individuals operating without structure.',
  },
  {
    title: 'Specific Recommendations',
    desc: 'The output of a diagnostic is a prioritised action list — not a general best-practice document. Each recommendation is specific to the gap identified, ordered by likely conversion impact, and actionable without additional analysis.',
  },
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
            About North Star Advisory
          </h1>
          <p style={{ fontSize: 15, lineHeight: 1.75, color: 'rgba(255,255,255,0.5)', maxWidth: 580 }}>
            A real-estate growth systems practice focused on GCC developers, operators, and multi-project businesses. We help businesses find and fix the process gaps between enquiry capture and appointment conversion.
          </p>
        </Container>
      </div>

      {/* ── Why This Practice Was Built ── */}
      <section aria-labelledby="origin-heading" style={{ background: 'var(--color-bg-warm)', paddingBlock: 'var(--space-20)' }}>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
            <div>
              <SectionLabel variant="light">Why This Practice</SectionLabel>
              <h2 id="origin-heading" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(24px,2.5vw,36px)', fontWeight: 400, color: 'var(--color-text-primary)', lineHeight: 1.3, marginBlockEnd: 28 }}>
                The problem is not demand. It is what happens after the enquiry arrives.
              </h2>
              <p style={{ fontSize: 14, lineHeight: 1.85, color: 'var(--color-text-secondary)', marginBlockEnd: 20 }}>
                GCC real-estate businesses spend significantly on marketing — portals, digital campaigns, events, and content. Enquiry volumes are often healthy. Appointment conversion rates frequently are not.
              </p>
              <p style={{ fontSize: 14, lineHeight: 1.85, color: 'var(--color-text-secondary)', marginBlockEnd: 20 }}>
                The gap between enquiry count and appointment count is not usually a marketing problem. It is a process problem: enquiries arrive through multiple channels without consistent capture, qualification is informal or inconsistent, routing is manual and slow, CRM adoption is partial, and follow-up depends on individual sales discipline rather than system design.
              </p>
              <p style={{ fontSize: 14, lineHeight: 1.85, color: 'var(--color-text-secondary)' }}>
                North Star Advisory was built to find those gaps systematically — and to produce specific, prioritised recommendations for closing them. Not generic best-practice advice. Not technology-first solutions. Process-first, system-supported, measurable.
              </p>
            </div>
            <div
              style={{
                background: 'var(--color-bg-white)',
                border: '1px solid rgba(0,0,0,0.1)',
                padding: '40px 36px',
              }}
            >
              <div style={{ fontFamily: 'monospace', fontSize: 11, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(0,0,0,0.5)', marginBlockEnd: 28 }}>
                [ THE TYPICAL PATTERN ]
              </div>
              {[
                { label: 'Enquiries generated', status: 'High', positive: true },
                { label: 'Capture consistency', status: 'Low', positive: false },
                { label: 'Avg. response time', status: '4–24 hours', positive: false },
                { label: 'Qualification criteria', status: 'Informal', positive: false },
                { label: 'CRM adoption', status: 'Partial', positive: false },
                { label: 'Follow-up structure', status: '1–2 messages', positive: false },
                { label: 'Conversion visibility', status: 'None', positive: false },
              ].map((row) => (
                <div
                  key={row.label}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '10px 0',
                    borderBottom: '1px solid rgba(0,0,0,0.07)',
                    fontFamily: 'monospace',
                    fontSize: 12,
                  }}
                >
                  <span style={{ color: 'rgba(0,0,0,0.6)' }}>{row.label}</span>
                  <span style={{ fontWeight: 'bold', color: row.positive ? '#2D5A3D' : '#D90000' }}>{row.status}</span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ── Approach ── */}
      <section aria-labelledby="approach-heading" style={{ background: 'var(--color-bg-white)', paddingBlock: 'var(--space-20)' }}>
        <Container>
          <SectionLabel variant="light">Approach</SectionLabel>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 lg:gap-24">
            <h2 id="approach-heading" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(22px,2.5vw,34px)', fontWeight: 400, color: 'var(--color-text-primary)', lineHeight: 1.3 }}>
              How we work
            </h2>
            <div>
              <p style={{ fontSize: 14, lineHeight: 1.85, color: 'var(--color-text-secondary)', marginBlockEnd: 28 }}>
                Every engagement starts with the Lead-to-Appointment Diagnostic — a structured review of the enquiry journey from first contact to appointment booked. The diagnostic produces a gap analysis and a prioritised action list, not a general framework.
              </p>
              <p style={{ fontSize: 14, lineHeight: 1.85, color: 'var(--color-text-secondary)' }}>
                Where implementation support is required — workflow redesign, CRM configuration, follow-up sequence design, or conversion reporting setup — that is scoped as a separate engagement after the diagnostic has identified the specific constraint.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-12 lg:gap-y-0" style={{ marginBlockStart: 60, borderTop: '1px solid rgba(0,0,0,0.1)' }}>
            {approachItems.map((item, i) => (
              <div key={item.title} style={{ paddingBlock: 36, paddingInlineStart: i > 0 ? 32 : 0, paddingInlineEnd: 32, borderInlineStart: i > 0 ? '1px solid rgba(0,0,0,0.08)' : 'none' }}>
                <div style={{ fontSize: 14, fontWeight: 500, color: 'var(--color-text-primary)', marginBlockEnd: 12 }}>{item.title}</div>
                <p style={{ fontSize: 13, lineHeight: 1.75, color: 'var(--color-text-secondary)' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Founder ── */}
      <section aria-labelledby="founder-heading" style={{ background: 'var(--color-bg-warm)', paddingBlock: 'var(--space-20)' }}>
        <Container>
          <SectionLabel variant="light">Founder</SectionLabel>
          <h2 id="founder-heading" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(24px,2.5vw,36px)', fontWeight: 400, color: 'var(--color-text-primary)', marginBlockEnd: 52 }}>
            Who is behind this
          </h2>
          <div style={{ borderTop: '1px solid rgba(0,0,0,0.1)', paddingBlockStart: 48 }}>
            {teamMembers.map((member) => (
              <div key={member.id} className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-12 lg:gap-24">
                <div>
                  <div style={{ fontSize: 16, fontWeight: 500, color: 'var(--color-text-primary)', marginBlockEnd: 8 }}>
                    {member.name}
                  </div>
                  <div style={{ fontSize: 12, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--color-text-muted)', marginBlockEnd: 20 }}>
                    {member.title}
                  </div>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8 }}>
                    {member.background.map((item) => (
                      <li key={item} style={{ fontSize: 13, color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p style={{ fontSize: 14, lineHeight: 1.85, color: 'var(--color-text-secondary)', marginBlockEnd: 20 }}>
                    {member.expertise}
                  </p>
                  <p style={{ fontSize: 14, lineHeight: 1.85, color: 'var(--color-text-secondary)', fontStyle: 'italic' }}>
                    {member.note}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Scope Disclaimer ── */}
      <section aria-label="Scope and limitations" style={{ background: 'var(--color-bg-dark)', paddingBlock: 40 }}>
        <Container>
          <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.45)', lineHeight: 1.8, maxWidth: 760 }}>
            North Star Advisory provides real-estate operating systems advisory — focused on enquiry capture, lead qualification, sales routing, CRM workflow, and conversion measurement for GCC real-estate developers and operators. We do not provide property brokerage, regulated investment advisory, capital placement, or investment product solicitation services.
          </p>
        </Container>
      </section>
    </>
  );
}

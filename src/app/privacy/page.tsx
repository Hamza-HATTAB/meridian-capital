import type { Metadata } from 'next';
import { createMetadata } from '@/lib/metadata';
import { Container } from '@/components/primitives/Container';
import { SectionLabel } from '@/components/primitives/SectionLabel';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = createMetadata({
  title: 'Privacy Policy',
  description:
    'How North Star Advisory collects, uses, and protects your information when you visit this website or submit a diagnostic request.',
});

const section = (title: string, content: React.ReactNode) => (
  <div style={{ marginBlockEnd: 48 }}>
    <h2
      style={{
        fontFamily: 'var(--font-display)',
        fontSize: 'clamp(18px, 2vw, 24px)',
        fontWeight: 400,
        color: 'var(--color-text-primary)',
        marginBlockEnd: 16,
        letterSpacing: '-0.01em',
      }}
    >
      {title}
    </h2>
    <div style={{ fontSize: 14, lineHeight: 1.85, color: 'var(--color-text-secondary)' }}>
      {content}
    </div>
  </div>
);

export default function PrivacyPage() {
  return (
    <>
      <div style={{ background: 'var(--color-bg-dark-surface)', paddingBlockStart: 140, paddingBlockEnd: 80 }}>
        <Container>
          <SectionLabel variant="dark">{siteConfig.name}</SectionLabel>
          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(28px, 4vw, 48px)',
              fontWeight: 400,
              color: '#FFFFFF',
              lineHeight: 1.15,
              maxWidth: 680,
              marginBlockEnd: 16,
            }}
          >
            Privacy Policy
          </h1>
          <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', fontFamily: 'monospace' }}>
            Last updated: August 2026
          </p>
        </Container>
      </div>

      <section aria-label="Privacy policy content" style={{ background: 'var(--color-bg-white)', paddingBlock: 'var(--space-20)' }}>
        <Container>
          <div style={{ maxWidth: 760 }}>
            {section(
              'Who we are',
              <p>
                North Star Advisory (<strong>northstaradvisory.pro</strong>) is a real-estate operating systems advisory practice. We are contactable at{' '}
                <a href={`mailto:${siteConfig.contactEmail}`} style={{ color: 'var(--color-accent-mid)' }}>
                  {siteConfig.contactEmail}
                </a>
                .
              </p>
            )}

            {section(
              'What information we collect',
              <>
                <p style={{ marginBlockEnd: 16 }}>
                  <strong>Information you submit through the diagnostic request form:</strong> name, company, role (optional), work email, country/market, portfolio type (optional), bottleneck description (optional), and a description of your situation. This information is used solely to assess your request and respond to it.
                </p>
                <p style={{ marginBlockEnd: 16 }}>
                  <strong>Analytics data collected automatically:</strong> This website uses Google Analytics 4 and Microsoft Clarity to understand how visitors interact with the site. These tools collect anonymised usage data including pages visited, time on site, device type, and approximate geographic location. This data does not identify individual visitors.
                </p>
                <p>
                  <strong>Security challenge data:</strong> The contact form uses Cloudflare Turnstile for bot protection. Cloudflare processes a challenge token; we do not receive or store the underlying challenge data.
                </p>
              </>
            )}

            {section(
              'How we use your information',
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
                {[
                  'To assess whether a diagnostic engagement is relevant to your situation',
                  'To respond to your enquiry within two business days',
                  'To improve the content and structure of this website (analytics only)',
                  'We do not sell, rent, or share your personal information with third parties for marketing purposes',
                  'We do not use your information for investment decisions or financial analysis',
                ].map((item) => (
                  <li key={item} style={{ display: 'flex', gap: 10 }}>
                    <span style={{ color: 'var(--color-accent-mid)', flexShrink: 0, marginBlockStart: 2 }} aria-hidden="true">—</span>
                    {item}
                  </li>
                ))}
              </ul>
            )}

            {section(
              'Data retention',
              <p>
                Information submitted through the contact form is received by email and retained only as long as necessary to assess and respond to your enquiry. Analytics data is retained according to Google Analytics and Microsoft Clarity default settings. You may request deletion of any information you have provided by emailing us directly.
              </p>
            )}

            {section(
              'Cookies and tracking',
              <>
                <p style={{ marginBlockEnd: 16 }}>
                  This website uses cookies set by Google Analytics and Microsoft Clarity for site usage analysis. By using this site you accept the use of these cookies. You may disable cookies in your browser settings, which will prevent analytics tracking but will not affect the core functionality of the site.
                </p>
                <p>
                  We do not use advertising cookies, cross-site tracking, or cookies that identify individual visitors.
                </p>
              </>
            )}

            {section(
              'Your rights',
              <p>
                You have the right to request access to, correction of, or deletion of any personal information you have provided to us. To exercise these rights, contact us at{' '}
                <a href={`mailto:${siteConfig.contactEmail}`} style={{ color: 'var(--color-accent-mid)' }}>
                  {siteConfig.contactEmail}
                </a>
                .
              </p>
            )}

            {section(
              'Changes to this policy',
              <p>
                We may update this privacy policy from time to time. The &quot;last updated&quot; date at the top of this page reflects the most recent revision. Continued use of this website after a revision constitutes acceptance of the updated policy.
              </p>
            )}

            <div style={{ paddingBlockStart: 32, borderTop: '1px solid rgba(0,0,0,0.1)', fontSize: 12, color: 'var(--color-text-muted)' }}>
              For questions about this privacy policy, contact{' '}
              <a href={`mailto:${siteConfig.contactEmail}`} style={{ color: 'var(--color-accent-mid)' }}>
                {siteConfig.contactEmail}
              </a>
              .
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

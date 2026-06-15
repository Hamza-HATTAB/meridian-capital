import type { Metadata } from 'next';
import { createMetadata } from '@/lib/metadata';
import { Container } from '@/components/primitives/Container';
import { SectionLabel } from '@/components/primitives/SectionLabel';
import { ContactForm } from '@/components/patterns/ContactForm';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = createMetadata({
  title: 'Contact',
  description:
    'Institutional enquiries for MERIDIAN Capital Advisory. We work with family offices, sovereign-linked capital, and institutional allocators across the GCC.',
});

export default function ContactPage() {
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
            Institutional Enquiries
          </h1>
          <p style={{ fontSize: 15, lineHeight: 1.75, color: 'rgba(255,255,255,0.5)', maxWidth: 580 }}>
            We work selectively with institutional investors, family offices, and sovereign-linked capital.
            If you are evaluating a GCC real estate mandate or reviewing an existing allocation, we
            welcome a confidential conversation.
          </p>
        </Container>
      </div>

      {/* ── Contact Form + Info ── */}
      <section aria-labelledby="contact-form-heading" style={{ background: 'var(--color-bg-dark)', paddingBlock: 'var(--space-20)' }}>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-24">
            {/* Left — contact info */}
            <div>
              <SectionLabel variant="dark">Get in Touch</SectionLabel>
              <h2 id="contact-form-heading" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(24px,2.5vw,36px)', fontWeight: 400, color: '#FFFFFF', lineHeight: 1.2, marginBlockEnd: 24 }}>
                Engage Our Advisory Team
              </h2>
              <p style={{ fontSize: 14, lineHeight: 1.8, color: 'rgba(255,255,255,0.5)', marginBlockEnd: 40 }}>
                All enquiries are reviewed for relevance before response. We do not accept broker
                introductions, investment product solicitations, or requests for brokerage services.
              </p>

              {/* Offices */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 24, marginBlockEnd: 48 }}>
                {siteConfig.offices.map((office) => (
                  <div key={office.city}>
                    <div style={{ fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.55)', marginBlockEnd: 6 }}>
                      {office.city}
                    </div>
                    <div style={{ fontSize: 14, color: '#FFFFFF', marginBlockEnd: 4 }}>{office.address}</div>
                  </div>
                ))}
              </div>

              {/* Qualification note */}
              <div style={{ padding: '20px 24px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
                <div style={{ fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.55)', marginBlockEnd: 12 }}>
                  Who We Work With
                </div>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {[
                    'Family offices with GCC or MENA real estate mandates',
                    'Institutional investors evaluating GCC allocation',
                    'Sovereign-linked capital seeking independent advisory',
                    'Investment committees requiring second opinions',
                    'Funds seeking transaction due diligence support',
                  ].map((item) => (
                    <li key={item} style={{ display: 'flex', gap: 10, fontSize: 12, color: 'rgba(255,255,255,0.5)' }}>
                      <span style={{ color: 'var(--color-accent-mid)', marginBlockStart: 2, flexShrink: 0 }} aria-hidden="true">—</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right — form */}
            <div>
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>

      {/* ── Regulatory disclaimer ── */}
      <section aria-label="Regulatory notice" style={{ background: 'var(--color-bg-dark-surface)', paddingBlock: 40 }}>
        <Container>
          <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, maxWidth: 840 }}>
            {siteConfig.name} operates through regulated entities in Dubai International Financial Centre
            (regulated by DFSA) and Abu Dhabi Global Market (regulated by FSRA). This website is for
            informational purposes only. Use of this enquiry form does not constitute the commencement
            of an advisory relationship. All communications are subject to our standard engagement terms.
          </p>
        </Container>
      </section>
    </>
  );
}

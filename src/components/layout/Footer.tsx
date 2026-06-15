import Link from 'next/link';
import { siteConfig } from '@/config/site';

// ── Footer Link Groups ────────────────────────────────────────────────────
const advisoryLinks = [
  { label: 'Investment Intelligence', href: '/investment-intelligence' },
  { label: 'Advisory Services', href: '/advisory-services' },
  { label: 'Track Record', href: '/track-record' },
  { label: 'Transactions', href: '/transactions' },
];

const firmLinks = [
  { label: 'Insights', href: '/insights' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

// ── Footer Component ──────────────────────────────────────────────────────
export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        background: 'var(--color-bg-dark)',
        color: 'rgba(255, 255, 255, 0.55)',
        paddingBlock: '80px 40px',
      }}
    >
      <div className="container-grid">
        {/* ── Top Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-12 lg:gap-16 mb-16">
          {/* Brand Column */}
          <div>
            <div style={{ marginBlockEnd: 20 }}>
              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 20,
                  fontWeight: 500,
                  letterSpacing: '0.08em',
                  color: '#FFFFFF',
                  textTransform: 'uppercase',
                  marginBlockEnd: 4,
                }}
              >
                {siteConfig.name.split(' ')[0]}
              </div>
              <div
                style={{
                  fontSize: 9,
                  letterSpacing: '0.22em',
                  color: 'rgba(255, 255, 255, 0.55)',
                  textTransform: 'uppercase',
                }}
              >
                {siteConfig.tagline}
              </div>
            </div>

            <p
              style={{
                fontSize: 13,
                lineHeight: 1.8,
                color: 'rgba(255, 255, 255, 0.55)',
                maxWidth: 300,
              }}
            >
              {siteConfig.description}
            </p>

            <div
              style={{
                marginBlockStart: 28,
                display: 'flex',
                flexDirection: 'column',
                gap: 8,
              }}
            >
              {siteConfig.offices.map((office) => (
                <div key={office.city}>
                  <div style={{ fontSize: 13, color: 'rgba(255, 255, 255, 0.7)', marginBlockEnd: 4 }}>
                    {office.address}
                  </div>
                  <span style={{ fontSize: 12, color: 'rgba(255, 255, 255, 0.55)' }}>
                    {office.city}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Advisory Links */}
          <div>
            <div
              style={{
                fontSize: 10,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: 'rgba(255, 255, 255, 0.55)',
                marginBlockEnd: 20,
                fontWeight: 500,
              }}
            >
              Advisory
            </div>
            <nav aria-label="Advisory pages">
              <ul
                style={{
                  listStyle: 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 14,
                }}
              >
                {advisoryLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      style={{
                        textDecoration: 'none',
                        fontSize: 13,
                        color: 'rgba(255, 255, 255, 0.55)',
                        transition: 'color 0.2s',
                      }}
                      className="footer-link"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Firm Links */}
          <div>
            <div
              style={{
                fontSize: 10,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: 'rgba(255, 255, 255, 0.55)',
                marginBlockEnd: 20,
                fontWeight: 500,
              }}
            >
              Firm
            </div>
            <nav aria-label="Firm pages">
              <ul
                style={{
                  listStyle: 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 14,
                }}
              >
                {firmLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      style={{
                        textDecoration: 'none',
                        fontSize: 13,
                        color: 'rgba(255, 255, 255, 0.55)',
                        transition: 'color 0.2s',
                      }}
                      className="footer-link"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Markets */}
          <div>
            <div
              style={{
                fontSize: 10,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: 'rgba(255, 255, 255, 0.55)',
                marginBlockEnd: 20,
                fontWeight: 500,
              }}
            >
              Markets
            </div>
            <ul
              style={{
                listStyle: 'none',
                display: 'flex',
                flexDirection: 'column',
                gap: 10,
              }}
            >
              {siteConfig.markets.map((market) => (
                <li
                  key={market}
                  style={{ fontSize: 13, color: 'rgba(255, 255, 255, 0.55)' }}
                >
                  {market}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ── Bottom Bar ── */}
        <div
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            paddingBlockStart: 32,
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: 16,
            }}
          >
            <span
              style={{
                fontSize: 11,
                color: 'rgba(255, 255, 255, 0.55)',
                letterSpacing: '0.04em',
              }}
            >
              © {currentYear} {siteConfig.name}. All rights reserved. Regulated
              by {siteConfig.regulators.join(' & ')}.
            </span>

            <nav aria-label="Legal pages">
              <ul
                style={{
                  listStyle: 'none',
                  display: 'flex',
                  gap: 32,
                }}
              >
                {['Legal Notice', 'Privacy Policy', 'Regulatory Disclosure'].map(
                  (item) => (
                    <li key={item}>
                      <span
                        style={{
                          fontSize: 11,
                          color: 'rgba(255, 255, 255, 0.55)',
                          letterSpacing: '0.04em',
                          cursor: 'default',
                        }}
                      >
                        {item}
                      </span>
                    </li>
                  )
                )}
              </ul>
            </nav>
          </div>

          <p
            style={{
              fontSize: 11,
              color: 'rgba(255, 255, 255, 0.55)',
              marginBlockStart: 16,
              lineHeight: 1.7,
              maxWidth: 800,
            }}
          >
            {siteConfig.name} operates through regulated entities in both Dubai
            International Financial Centre and Abu Dhabi Global Market. Regulated
            by the Dubai Financial Services Authority (DFSA) and the Financial
            Services Regulatory Authority (FSRA) of Abu Dhabi Global Market. This
            website is for informational purposes only and does not constitute an
            offer or solicitation for investment advisory services. Past
            performance is not indicative of future results.
          </p>
        </div>
      </div>

      {/* Footer hover styles */}
      <style>{`
        .footer-link:hover {
          color: #FFFFFF !important;
        }
      `}</style>
    </footer>
  );
}

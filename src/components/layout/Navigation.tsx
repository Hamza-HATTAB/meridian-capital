'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useScrolled } from '@/hooks/use-scrolled';
import { siteConfig } from '@/config/site';
import { cn } from '@/lib/cn';

// ── Navigation Link Data ──────────────────────────────────────────────────
const navLinks = [
  { label: 'Investment Intelligence', href: '/investment-intelligence' },
  { label: 'Advisory Services', href: '/advisory-services' },
  { label: 'Track Record', href: '/track-record' },
  { label: 'Transactions', href: '/transactions' },
  { label: 'Insights', href: '/insights' },
  { label: 'About', href: '/about' },
] as const;

// ── Navigation Component ──────────────────────────────────────────────────
export default function Navigation() {
  const pathname = usePathname();
  const scrolled = useScrolled(40);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsMounted(true);
  }, []);

  const isHome = pathname === '/';
  const isActive = (href: string) => pathname === href;

  // Close mobile menu on route change
  useEffect(() => {
    // eslint-disable-next-line
    setMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const navBackground = isHome
    ? scrolled
      ? 'rgba(10, 12, 20, 0.97)'
      : 'transparent'
    : 'rgba(10, 12, 20, 1)';

  const showBorder = scrolled || !isHome;

  return (
    <>
      {/* ── Main Nav Bar ── */}
      <nav
        aria-label="Main navigation"
        style={{
          position: 'fixed',
          top: 0,
          insetInlineStart: 0,
          insetInlineEnd: 0,
          zIndex: 100,
          background: navBackground,
          backdropFilter: showBorder ? 'blur(12px)' : 'none',
          borderBottom: showBorder
            ? '1px solid rgba(255, 255, 255, 0.08)'
            : 'none',
          transition: `background ${siteConfig.name && '0.3s ease'}, border-color 0.3s ease`,
        }}
      >
        <div className="container-grid">
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              height: 68,
            }}
          >
            {/* ── Logo ── */}
            <Link
              href="/"
              style={{
                textDecoration: 'none',
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 19,
                  fontWeight: 500,
                  letterSpacing: '0.08em',
                  color: '#FFFFFF',
                  textTransform: 'uppercase',
                }}
              >
                {siteConfig.name.split(' ')[0]}
              </span>
              <span
                style={{
                  fontSize: 9,
                  letterSpacing: '0.22em',
                  color: 'rgba(255, 255, 255, 0.55)',
                  textTransform: 'uppercase',
                  fontWeight: 400,
                }}
              >
                {siteConfig.tagline}
              </span>
            </Link>

            {/* ── Desktop Navigation ── */}
            <div
              className="nav-desktop"
              style={{ display: 'flex', alignItems: 'center', gap: 36 }}
            >
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={isActive(link.href) ? 'page' : undefined}
                  style={{
                    textDecoration: 'none',
                    fontSize: 12,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    fontWeight: 500,
                    color: isActive(link.href)
                      ? '#FFFFFF'
                      : 'rgba(255, 255, 255, 0.55)',
                    borderBottom: isActive(link.href)
                      ? '1px solid rgba(255, 255, 255, 0.7)'
                      : '1px solid transparent',
                    paddingBottom: 2,
                    transition: 'color 0.2s, border-color 0.2s',
                  }}
                  className={cn(
                    'nav-link',
                    isActive(link.href) && 'nav-link--active'
                  )}
                >
                  {link.label}
                </Link>
              ))}

              {/* Enquire CTA */}
              <Link
                href="/contact"
                style={{
                  textDecoration: 'none',
                  fontSize: 11,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  fontWeight: 500,
                  color: '#0F1117',
                  background: '#FFFFFF',
                  padding: '8px 20px',
                  display: 'inline-block',
                  transition: 'background 0.2s, color 0.2s',
                }}
              >
                Enquire
              </Link>
            </div>

            {isMounted ? (
              <button
                className="nav-mobile-trigger"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-expanded={menuOpen}
                aria-controls="mobile-menu"
                aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  color: '#FFFFFF',
                  padding: 4,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {menuOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
              </button>
            ) : (
              <div style={{ width: 30, height: 30 }} />
            )}
          </div>
        </div>
      </nav>

      {/* ── Mobile Menu Overlay ── */}
      {menuOpen && (
        <div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
          style={{
            position: 'fixed',
            top: 68,
            insetInlineStart: 0,
            insetInlineEnd: 0,
            bottom: 0,
            background: 'rgba(10, 12, 20, 0.98)',
            zIndex: 99,
            paddingInline: 40,
            paddingBlock: 40,
            display: 'flex',
            flexDirection: 'column',
            gap: 0,
            overflowY: 'auto',
          }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={isActive(link.href) ? 'page' : undefined}
              style={{
                textDecoration: 'none',
                fontSize: 15,
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                fontWeight: 400,
                color: isActive(link.href)
                  ? '#FFFFFF'
                  : 'rgba(255, 255, 255, 0.6)',
                borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                paddingBlock: 28,
                display: 'block',
              }}
            >
              {link.label}
            </Link>
          ))}

          <div style={{ marginBlockStart: 32 }}>
            <Link
              href="/contact"
              style={{
                textDecoration: 'none',
                fontSize: 12,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                fontWeight: 500,
                color: '#0F1117',
                background: '#FFFFFF',
                padding: '14px 24px',
                display: 'inline-block',
              }}
            >
              Enquire
            </Link>
          </div>
        </div>
      )}

      {/* ── Nav hover styles ── */}
      <style>{`
        .nav-link:hover {
          color: #FFFFFF !important;
        }
        @media (hover: hover) {
          nav a[href="/contact"]:hover {
            background: #E0DDD5 !important;
          }
        }
      `}</style>
    </>
  );
}

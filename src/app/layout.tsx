import type { Metadata } from 'next';
import { Source_Serif_4, Inter } from 'next/font/google';
import { createMetadata } from '@/lib/metadata';
import Navigation from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { GoogleAnalytics } from '@next/third-parties/google';
import Script from 'next/script';
import './globals.css';

// ── Font Loading ──────────────────────────────────────────────────────────
// next/font/google provides zero-CLS, self-hosted font loading.
// CSS variables are injected into :root and referenced via design tokens.

const sourceSerif4 = Source_Serif_4({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-source-serif',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-inter',
  display: 'swap',
});

// ── Root Metadata ─────────────────────────────────────────────────────────
export const metadata: Metadata = createMetadata();

// ── Root Layout ───────────────────────────────────────────────────────────
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      dir="ltr"
      className={`${sourceSerif4.variable} ${inter.variable}`}
    >
      <body>
        {/* Skip to main content — accessibility */}
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>

        {/* Global navigation */}
        <Navigation />

        {/* Page content */}
        <main id="main-content">{children}</main>

        {/* Global footer */}
        <Footer />
        
        {/* Tracking Scripts */}
        <GoogleAnalytics gaId="G-6FV9XG38QZ" />
        <Script id="clarity-script" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "x8jjqpkmv9");
          `}
        </Script>
      </body>
    </html>
  );
}

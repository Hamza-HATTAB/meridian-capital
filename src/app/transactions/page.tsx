import type { Metadata } from 'next';
import { createMetadata } from '@/lib/metadata';
import { Container } from '@/components/primitives/Container';
import { SectionLabel } from '@/components/primitives/SectionLabel';
import { siteConfig } from '@/config/site';
import TransactionsClient from './TransactionsClient';

export const metadata: Metadata = createMetadata({
  title: 'Illustrative Scenarios',
  description:
    'Illustrative operating-system scenarios for GCC real estate businesses — demonstrating North Star Advisory’s lead-to-appointment diagnostic framework.',
});

export default function TransactionsPage() {
  return (
    <>
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
              maxWidth: 720,
              marginBlockEnd: 20,
            }}
          >
            Illustrative Operating-System Scenarios
          </h1>
          <p style={{ fontSize: 15, lineHeight: 1.75, color: 'rgba(255,255,255,0.5)', maxWidth: 640 }}>
            These scenarios show how North Star’s diagnostic framework applies to common GCC real-estate operating problems. They are illustrative capability demonstrations, not documented client engagements.
          </p>
        </Container>
      </div>

      {/* ── Client-side filtered table ── */}
      <TransactionsClient />
    </>
  );
}

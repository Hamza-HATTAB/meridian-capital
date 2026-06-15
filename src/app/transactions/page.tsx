import type { Metadata } from 'next';
import { createMetadata } from '@/lib/metadata';
import { Container } from '@/components/primitives/Container';
import { SectionLabel } from '@/components/primitives/SectionLabel';
import { siteConfig } from '@/config/site';
import TransactionsClient from './TransactionsClient';

export const metadata: Metadata = createMetadata({
  title: 'Transactions',
  description:
    'Advisory evidence across 340+ GCC real estate transactions — logistics, hospitality, office, residential, industrial, and mixed-use.',
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
              maxWidth: 680,
              marginBlockEnd: 20,
            }}
          >
            Transactions
          </h1>
          <p style={{ fontSize: 15, lineHeight: 1.75, color: 'rgba(255,255,255,0.5)', maxWidth: 620 }}>
            Selected mandates from our advisory record across six asset classes and eight GCC markets.
            Our track record is published as evidence, not marketing.
          </p>
        </Container>
      </div>

      {/* ── Client-side filtered table ── */}
      <TransactionsClient />
    </>
  );
}

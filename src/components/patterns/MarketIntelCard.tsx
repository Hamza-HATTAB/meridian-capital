import type { MarketIntelItem } from '@/types/track-record';
import { ArrowUpRight } from 'lucide-react';

interface MarketIntelCardProps {
  item: MarketIntelItem;
  index: number;
}

/**
 * Market intelligence card — tag, headline, body excerpt, date.
 * Used in the 3-column market intelligence section.
 */
export function MarketIntelCard({ item, index }: MarketIntelCardProps) {
  return (
    <article
      style={{
        padding: '40px',
        paddingInlineStart: index > 0 ? 40 : 0,
        borderInlineStart:
          index > 0 ? '1px solid rgba(0,0,0,0.1)' : 'none',
        cursor: 'default',
      }}
    >
      {/* Category tag */}
      <div
        style={{
          fontSize: 10,
          letterSpacing: '0.16em',
          textTransform: 'uppercase',
          color: 'var(--color-accent)',
          marginBlockEnd: 16,
          fontWeight: 500,
        }}
      >
        {item.tag}
      </div>

      {/* Headline */}
      <h3
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: 17,
          fontWeight: 400,
          color: '#1A1A1A',
          lineHeight: 1.45,
          marginBlockEnd: 16,
        }}
      >
        {item.headline}
      </h3>

      {/* Body */}
      <p style={{ fontSize: 13, lineHeight: 1.75, color: '#5C5C5C', marginBlockEnd: 20 }}>
        {item.body}
      </p>

      {/* Footer */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <span style={{ fontSize: 11, color: 'var(--color-text-muted)' }}>{item.date}</span>
        <ArrowUpRight size={14} color="var(--color-text-muted)" aria-hidden="true" />
      </div>
    </article>
  );
}

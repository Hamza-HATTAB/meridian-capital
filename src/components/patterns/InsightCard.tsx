import Image from 'next/image';
import type { Insight } from '@/types/insight';
import { ArrowUpRight, ChevronRight } from 'lucide-react';

interface InsightCardProps {
  insight: Insight;
  variant: 'featured' | 'secondary' | 'tertiary';
}

/**
 * Research insight card with three display variants:
 * - featured: large, with image, thick top border
 * - secondary: medium, no image, thin top border
 * - tertiary: same as secondary
 */
export function InsightCard({ insight, variant }: InsightCardProps) {
  if (variant === 'featured') {
    return (
      <article
        style={{ borderTop: '3px solid #1A1A1A', paddingBlockStart: 28 }}
      >
        {insight.imageUrl && (
          <div
            style={{
              position: 'relative',
              width: '100%',
              height: 240,
              marginBlockEnd: 28,
              overflow: 'hidden',
            }}
          >
            <Image
              src={insight.imageUrl}
              alt={insight.title}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{
                objectFit: 'cover',
                filter: 'grayscale(20%)',
              }}
            />
          </div>
        )}

        <div
          style={{
            fontSize: 10,
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
            color: 'var(--color-accent)',
            marginBlockEnd: 12,
          }}
        >
          REF-{insight.id.split('-').pop()?.toUpperCase()} · {insight.category} · {insight.date}
        </div>

        <h3
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 21,
            fontWeight: 400,
            color: '#1A1A1A',
            lineHeight: 1.35,
            marginBlockEnd: 16,
          }}
        >
          {insight.title}
        </h3>

        <p
          style={{
            fontSize: 13,
            lineHeight: 1.75,
            color: '#5C5C5C',
            marginBlockEnd: 20,
          }}
        >
          {insight.excerpt}
        </p>

        <div
          style={{ display: 'flex', alignItems: 'center', gap: 6, cursor: 'pointer' }}
        >
          <span
            style={{
              fontSize: 11,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: '#1A1A1A',
              borderBottom: '1px solid #1A1A1A',
              paddingBlockEnd: 1,
            }}
          >
            Access Memo
          </span>
          <ChevronRight size={12} color="#1A1A1A" aria-hidden="true" />
        </div>
      </article>
    );
  }

  // secondary + tertiary share the same layout
  return (
    <article
      style={{
        borderTop: '1px solid rgba(0,0,0,0.1)',
        paddingBlockStart: 24,
      }}
    >
      <div
        style={{
          fontSize: 10,
          letterSpacing: '0.14em',
          textTransform: 'uppercase',
          color: 'var(--color-accent)',
          marginBlockEnd: 10,
        }}
      >
        REF-{insight.id.split('-').pop()?.toUpperCase()} · {insight.category} · {insight.date}
      </div>

      <h3
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: 16,
          fontWeight: 400,
          color: '#1A1A1A',
          lineHeight: 1.4,
          marginBlockEnd: 10,
        }}
      >
        {insight.title}
      </h3>

      <p
        style={{
          fontSize: 12,
          lineHeight: 1.7,
          color: '#6C6C6C',
          marginBlockEnd: 14,
        }}
      >
        {insight.excerpt}
      </p>

      <div
        style={{ display: 'flex', alignItems: 'center', gap: 4, cursor: 'pointer' }}
      >
        <span
          style={{
            fontSize: 10,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: 'var(--color-text-muted)',
            borderBottom: '1px solid #C8C4B8',
            paddingBlockEnd: 1,
          }}
        >
          Access
        </span>
        <ArrowUpRight size={11} color="#717171" aria-hidden="true" />
      </div>
    </article>
  );
}

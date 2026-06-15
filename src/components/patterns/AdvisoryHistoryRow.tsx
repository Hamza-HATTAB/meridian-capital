import type { AdvisoryPeriod } from '@/types/track-record';

interface AdvisoryHistoryRowProps {
  period: AdvisoryPeriod;
  isLast?: boolean;
}

/**
 * Advisory history timeline row — period, headline, description, volume, mandates.
 * Used in Track Record page 3-column timeline layout.
 */
export function AdvisoryHistoryRow({ period, isLast = false }: AdvisoryHistoryRowProps) {
  return (
    <div
      className="grid grid-cols-1 md:grid-cols-[180px_1fr] lg:grid-cols-[180px_1fr_200px] gap-8 lg:gap-12"
      style={{
        paddingBlock: 40,
        borderBottom: isLast ? 'none' : '1px solid rgba(0,0,0,0.08)',
      }}
    >
      {/* Period + Headline */}
      <div>
        <div
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 16,
            color: '#1A1A1A',
            marginBlockEnd: 4,
          }}
        >
          {period.period}
        </div>
        <div
          style={{
            fontSize: 11,
            color: 'var(--color-accent)',
            letterSpacing: '0.06em',
          }}
        >
          {period.headline}
        </div>
      </div>

      {/* Description + Notable */}
      <div>
        <p
          style={{
            fontSize: 14,
            lineHeight: 1.8,
            color: '#5C5C5C',
            marginBlockEnd: 16,
          }}
        >
          {period.description}
        </p>
        <div
          style={{
            fontSize: 11,
            color: 'var(--color-text-muted)',
            fontStyle: 'italic',
            borderInlineStart: '2px solid #E0DDD5',
            paddingInlineStart: 12,
          }}
        >
          {period.notable}
        </div>
      </div>

      {/* Volume + Mandates */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <div>
          <div
            style={{
              fontSize: 10,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--color-text-muted)',
              marginBlockEnd: 4,
            }}
          >
            Advisory Volume
          </div>
          <div
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 18,
              color: '#1A1A1A',
            }}
          >
            {period.volume}
          </div>
        </div>
        <div>
          <div
            style={{
              fontSize: 10,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--color-text-muted)',
              marginBlockEnd: 4,
            }}
          >
            Engagements
          </div>
          <div style={{ fontSize: 14, color: '#5C5C5C' }}>
            {period.mandates}
          </div>
        </div>
      </div>
    </div>
  );
}

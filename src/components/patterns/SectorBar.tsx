import type { SectorCoverage } from '@/types/metric';

interface SectorBarProps {
  sector: SectorCoverage;
  variant?: 'light' | 'dark';
}

/**
 * Sector coverage bar — sector name, percentage bar, transaction count.
 * Used in Track Record sections.
 */
export function SectorBar({ sector, variant = 'dark' }: SectorBarProps) {
  const isDark = variant === 'dark';

  return (
    <div>
      {/* Progress bar */}
      <div
        style={{
          height: 3,
          background: isDark ? 'rgba(255,255,255,0.1)' : '#EDEBE3',
          marginBlockEnd: 12,
          position: 'relative',
        }}
        role="img"
        aria-label={`${sector.sector}: ${sector.percentage}% of portfolio`}
      >
        <div
          style={{
            position: 'absolute',
            insetInlineStart: 0,
            insetBlockStart: 0,
            height: '100%',
            width: `${sector.percentage}%`,
            background: isDark ? '#FFFFFF' : '#1A1A2A',
          }}
        />
      </div>

      {/* Label */}
      <div
        style={{
          fontSize: 11,
          color: isDark ? 'rgba(255,255,255,0.65)' : '#5C5C5C',
          marginBlockEnd: 4,
        }}
      >
        {sector.sector}
      </div>

      {/* Count */}
      <div
        style={{
          fontSize: 10,
          color: isDark ? 'rgba(255,255,255,0.5)' : 'var(--color-text-muted)',
        }}
      >
        {sector.transactions} transactions
      </div>
    </div>
  );
}

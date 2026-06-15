import type { InvestmentTheme, ConvictionLevel } from '@/types/theme';

interface InvestmentThemeCardProps {
  theme: InvestmentTheme;
}

const convictionColor: Record<ConvictionLevel, string> = {
  High: '#2D5A3D',
  'Moderate-High': '#4A6741',
  Moderate: '#6B6B3A',
  Emerging: 'var(--color-accent)',
};

/**
 * Investment theme card — sector, thesis, conviction, markets, allocation strategy.
 * Used in the 5-column investment themes grid.
 */
export function InvestmentThemeCard({ theme }: InvestmentThemeCardProps) {
  return (
    <div
      style={{
        padding: '36px 28px',
        borderInlineEnd: '1px solid rgba(0,0,0,0.1)',
        borderBlockEnd: '1px solid rgba(0,0,0,0.1)',
        display: 'flex',
        flexDirection: 'column',
        gap: 16,
        transition: 'background var(--duration-normal)',
        cursor: 'default',
      }}
      className="theme-card"
    >
      {/* Sector Name */}
      <div
        style={{
          fontSize: 13,
          fontWeight: 500,
          color: '#1A1A1A',
          letterSpacing: '0.02em',
          borderBottom: '1px solid rgba(0,0,0,0.08)',
          paddingBlockEnd: 14,
        }}
      >
        {theme.sector}
      </div>

      {/* Thesis */}
      <p
        style={{
          fontSize: 12,
          lineHeight: 1.7,
          color: '#5C5C5C',
          flexGrow: 1,
        }}
      >
        {theme.thesis}
      </p>

      {/* Metadata */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <span
            style={{
              fontSize: 10,
              letterSpacing: '0.1em',
              color: 'var(--color-text-muted)',
              textTransform: 'uppercase',
            }}
          >
            Conviction
          </span>
          <span
            style={{
              fontSize: 10,
              letterSpacing: '0.08em',
              color: convictionColor[theme.conviction],
              textTransform: 'uppercase',
              fontWeight: 500,
            }}
          >
            {theme.conviction}
          </span>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <span
            style={{
              fontSize: 10,
              letterSpacing: '0.1em',
              color: 'var(--color-text-muted)',
              textTransform: 'uppercase',
            }}
          >
            Markets
          </span>
          <span style={{ fontSize: 10, color: '#5C5C5C' }}>
            {theme.markets}
          </span>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <span
            style={{
              fontSize: 10,
              letterSpacing: '0.1em',
              color: 'var(--color-text-muted)',
              textTransform: 'uppercase',
            }}
          >
            Strategy
          </span>
          <span style={{ fontSize: 10, color: '#5C5C5C' }}>
            {theme.allocation}
          </span>
        </div>
      </div>

      <style>{`
        .theme-card:hover {
          background: #F5F3EE;
        }
      `}</style>
    </div>
  );
}

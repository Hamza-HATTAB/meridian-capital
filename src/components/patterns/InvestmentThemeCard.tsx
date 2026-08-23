import type { InvestmentTheme, ConvictionLevel } from '@/types/theme';

interface InvestmentThemeCardProps {
  theme: InvestmentTheme;
  variant?: 'light' | 'dark';
}

const convictionColorLight: Record<ConvictionLevel, string> = {
  High: '#2D5A3D',
  'Moderate-High': '#3B5935',
  Moderate: '#59592B',
  Emerging: '#786348',
};

const convictionColorDark: Record<ConvictionLevel, string> = {
  High: '#60B880',
  'Moderate-High': '#82C478',
  Moderate: '#CFCF74',
  Emerging: '#E2C8A0',
};

/**
 * Investment theme card — sector, thesis, conviction, markets, allocation strategy.
 * Supports light and dark surface variants for WCAG AA compliance.
 */
export function InvestmentThemeCard({ theme, variant = 'light' }: InvestmentThemeCardProps) {
  const isDark = variant === 'dark';

  const titleColor = isDark ? '#FFFFFF' : '#1A1A1A';
  const bodyColor = isDark ? 'rgba(255, 255, 255, 0.8)' : '#333333';
  const labelColor = isDark ? 'rgba(255, 255, 255, 0.7)' : '#555555';
  const valueColor = isDark ? 'rgba(255, 255, 255, 0.9)' : '#222222';
  const borderColor = isDark ? 'rgba(255, 255, 255, 0.12)' : 'rgba(0, 0, 0, 0.08)';
  const convictionMap = isDark ? convictionColorDark : convictionColorLight;

  return (
    <div
      style={{
        padding: '36px 28px',
        borderInlineEnd: isDark ? '1px solid rgba(255,255,255,0.08)' : '1px solid rgba(0,0,0,0.1)',
        borderBlockEnd: isDark ? '1px solid rgba(255,255,255,0.08)' : '1px solid rgba(0,0,0,0.1)',
        background: isDark ? 'rgba(255, 255, 255, 0.03)' : 'transparent',
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
          color: titleColor,
          letterSpacing: '0.02em',
          borderBottom: `1px solid ${borderColor}`,
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
          color: bodyColor,
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
              color: labelColor,
              textTransform: 'uppercase',
            }}
          >
            Conviction
          </span>
          <span
            style={{
              fontSize: 10,
              letterSpacing: '0.08em',
              color: convictionMap[theme.conviction],
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
              color: labelColor,
              textTransform: 'uppercase',
            }}
          >
            Markets
          </span>
          <span style={{ fontSize: 10, color: valueColor }}>
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
              color: labelColor,
              textTransform: 'uppercase',
            }}
          >
            Strategy
          </span>
          <span style={{ fontSize: 10, color: valueColor }}>
            {theme.allocation}
          </span>
        </div>
      </div>

      <style>{`
        .theme-card:hover {
          background: ${isDark ? 'rgba(255, 255, 255, 0.07)' : '#F5F3EE'};
        }
      `}</style>
    </div>
  );
}

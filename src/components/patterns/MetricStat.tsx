import type { Metric } from '@/types/metric';

interface MetricStatProps {
  metric: Metric;
  variant?: 'light' | 'dark';
  bordered?: boolean;
  index?: number;
}

/**
 * Single statistic display — value + label + optional sub-label.
 * Used in hero stats bar and track record sections.
 */
export function MetricStat({
  metric,
  variant = 'dark',
  bordered = false,
  index = 0,
}: MetricStatProps) {
  const isDark = variant === 'dark';

  return (
    <div
      style={{
        paddingInlineStart: bordered && index > 0 ? 32 : 0,
        borderInlineStart:
          bordered && index > 0
            ? `1px solid ${isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.1)'}`
            : 'none',
      }}
    >
      <div
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(36px, 4vw, 52px)',
          fontWeight: 400,
          color: isDark ? '#FFFFFF' : '#1A1A1A',
          lineHeight: 1,
          marginBlockEnd: 12,
          letterSpacing: '-0.02em',
        }}
      >
        {metric.value}
        {metric.unit && (
          <span
            style={{
              fontSize: 16,
              color: isDark ? 'rgba(255,255,255,0.4)' : 'var(--color-text-muted)',
              marginInlineStart: 6,
              letterSpacing: '0',
            }}
          >
            {metric.unit}
          </span>
        )}
      </div>
      <div
        style={{
          fontSize: 12,
          color: isDark ? 'rgba(255,255,255,0.6)' : 'var(--color-text-muted)',
          letterSpacing: '0.04em',
          textTransform: 'uppercase',
        }}
      >
        {metric.label}
      </div>
      {metric.sub && (
        <div
          style={{
            fontSize: 10,
            color: isDark ? 'rgba(255,255,255,0.5)' : 'var(--color-accent-mid)',
            marginBlockStart: 4,
          }}
        >
          {metric.sub}
        </div>
      )}
    </div>
  );
}

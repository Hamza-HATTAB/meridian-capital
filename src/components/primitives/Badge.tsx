import { cn } from '@/lib/cn';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'role' | 'conviction' | 'neutral';
  className?: string;
}

/**
 * Small label badge — used for transaction roles, conviction levels, categories.
 */
export function Badge({
  children,
  variant = 'neutral',
  className,
}: BadgeProps) {
  const styles: Record<string, React.CSSProperties> = {
    role: {
      color: 'var(--color-role-text)',
      background: 'var(--color-role-bg)',
    },
    conviction: {
      color: 'var(--color-conviction-high)',
      background: 'transparent',
    },
    neutral: {
      color: 'var(--color-accent)',
      background: 'transparent',
    },
  };

  return (
    <span
      style={{
        fontSize: 10,
        letterSpacing: '0.08em',
        fontWeight: 500,
        display: 'inline-block',
        padding: variant === 'role' ? '3px 10px' : undefined,
        ...styles[variant],
      }}
      className={cn('badge', `badge--${variant}`, className)}
    >
      {children}
    </span>
  );
}

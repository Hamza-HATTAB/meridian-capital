import { cn } from '@/lib/cn';

interface SectionLabelProps {
  children: React.ReactNode;
  /** 'light' = on white/warm bg, 'dark' = on dark bg */
  variant?: 'light' | 'dark';
  className?: string;
}

/**
 * Uppercase tracking label used above section headings.
 * Communicates information category, not decorative styling.
 */
export function SectionLabel({
  children,
  variant = 'light',
  className,
}: SectionLabelProps) {
  return (
    <span
      className={cn(
        'section-label',
        variant === 'light' ? 'section-label--light' : 'section-label--dark',
        className
      )}
    >
      {children}
    </span>
  );
}

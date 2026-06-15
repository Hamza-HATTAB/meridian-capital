import { cn } from '@/lib/cn';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
  style?: React.CSSProperties;
}

/**
 * Consistent max-width container with responsive horizontal padding.
 * Always use this instead of hardcoding max-width/padding in sections.
 */
export function Container({
  children,
  className,
  as: Tag = 'div',
  style,
}: ContainerProps) {
  return (
    <Tag className={cn('container-grid', className)} style={style}>{children}</Tag>
  );
}

import Link from 'next/link';
import { cn } from '@/lib/cn';

// ── Types ─────────────────────────────────────────────────────────────────
type ButtonVariant = 'primary' | 'secondary' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';
type ButtonTheme = 'light' | 'dark';

interface ButtonBaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  theme?: ButtonTheme;
  className?: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
}

interface ButtonLinkProps extends ButtonBaseProps {
  href: string;
  type?: never;
  onClick?: never;
  disabled?: never;
}

interface ButtonButtonProps extends ButtonBaseProps {
  href?: never;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  disabled?: boolean;
}

type ButtonProps = ButtonLinkProps | ButtonButtonProps;

// ── Style Maps ────────────────────────────────────────────────────────────
const variantStyles: Record<ButtonVariant, Record<ButtonTheme, React.CSSProperties>> = {
  primary: {
    light: {
      background: '#1A1A1A',
      color: '#FFFFFF',
      border: 'none',
    },
    dark: {
      background: '#FFFFFF',
      color: '#0F1117',
      border: 'none',
    },
  },
  secondary: {
    light: {
      background: 'transparent',
      color: '#1A1A1A',
      border: '1px solid rgba(0, 0, 0, 0.25)',
    },
    dark: {
      background: 'transparent',
      color: 'rgba(255, 255, 255, 0.75)',
      border: '1px solid rgba(255,255,255,0.5)',
    },
  },
  ghost: {
    light: {
      background: 'transparent',
      color: '#1A1A1A',
      border: 'none',
      textDecoration: 'none',
      borderBottom: '1px solid #1A1A1A',
      paddingBlock: 0,
      paddingInline: 0,
    },
    dark: {
      background: 'transparent',
      color: '#FFFFFF',
      border: 'none',
      textDecoration: 'none',
      borderBottom: '1px solid rgba(255,255,255,0.5)',
      paddingBlock: 0,
      paddingInline: 0,
    },
  },
};

const sizeStyles: Record<ButtonSize, React.CSSProperties> = {
  sm: { fontSize: 11, letterSpacing: '0.1em', padding: '8px 20px' },
  md: { fontSize: 11, letterSpacing: '0.12em', padding: '14px 28px' },
  lg: { fontSize: 12, letterSpacing: '0.12em', padding: '16px 36px' },
};

// ── Button Component ──────────────────────────────────────────────────────
export function Button({
  variant = 'primary',
  size = 'md',
  theme = 'dark',
  className,
  children,
  icon,
  ...rest
}: ButtonProps) {
  const baseStyle: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 8,
    textTransform: 'uppercase',
    fontWeight: 500,
    cursor: 'pointer',
    textDecoration: 'none',
    transition: 'background 0.2s, color 0.2s, border-color 0.2s',
    fontFamily: 'var(--font-body)',
    ...sizeStyles[size],
    ...variantStyles[variant][theme],
  };

  const sharedProps = {
    style: baseStyle,
    className: cn('btn', `btn--${variant}`, `btn--${theme}`, className),
  };

  if ('href' in rest && rest.href) {
    return (
      <Link href={rest.href} {...sharedProps}>
        {children}
        {icon && <span aria-hidden="true">{icon}</span>}
      </Link>
    );
  }

  const { type = 'button', onClick, disabled } = rest as ButtonButtonProps;

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      {...sharedProps}
    >
      {children}
      {icon && <span aria-hidden="true">{icon}</span>}
    </button>
  );
}

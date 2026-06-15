import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import Navigation from './Navigation';
import { usePathname } from 'next/navigation';
import { useScrolled } from '@/hooks/use-scrolled';

vi.mock('next/navigation', () => ({
  usePathname: vi.fn(),
}));

vi.mock('@/hooks/use-scrolled', () => ({
  useScrolled: vi.fn(),
}));

describe('Navigation', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders standard navigation correctly', () => {
    vi.mocked(usePathname).mockReturnValue('/about');
    vi.mocked(useScrolled).mockReturnValue(false);

    render(<Navigation />);

    // Logo
    expect(screen.getByText(/Meridian/i)).toBeInTheDocument();
    
    // Links
    expect(screen.getAllByText('About').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Enquire').length).toBeGreaterThan(0);
    
    // Mobile menu should be closed by default
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('marks active link correctly', () => {
    vi.mocked(usePathname).mockReturnValue('/track-record');
    vi.mocked(useScrolled).mockReturnValue(false);

    render(<Navigation />);

    const activeLink = screen.getAllByRole('link', { name: /Track Record/i })[0];
    expect(activeLink).toHaveAttribute('aria-current', 'page');

    const inactiveLink = screen.getAllByRole('link', { name: /About/i })[0];
    expect(inactiveLink).not.toHaveAttribute('aria-current', 'page');
  });

  it('toggles mobile menu and locks body scroll', () => {
    vi.mocked(usePathname).mockReturnValue('/');
    vi.mocked(useScrolled).mockReturnValue(false);

    render(<Navigation />);

    const trigger = screen.getByRole('button', { name: /Open navigation menu/i });
    
    // Open menu
    fireEvent.click(trigger);
    
    expect(screen.getByRole('dialog')).toBeInTheDocument();
    expect(document.body.style.overflow).toBe('hidden');
    expect(trigger).toHaveAttribute('aria-expanded', 'true');
    expect(trigger).toHaveAttribute('aria-label', 'Close navigation menu');

    // Close menu
    fireEvent.click(trigger);

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    expect(document.body.style.overflow).toBe('');
    expect(trigger).toHaveAttribute('aria-expanded', 'false');
  });

  it('closes mobile menu on route change', () => {
    vi.mocked(usePathname).mockReturnValue('/');
    vi.mocked(useScrolled).mockReturnValue(false);

    const { rerender } = render(<Navigation />);

    // Open menu
    const trigger = screen.getByRole('button', { name: /Open navigation menu/i });
    fireEvent.click(trigger);
    expect(screen.getByRole('dialog')).toBeInTheDocument();

    // Simulate route change
    vi.mocked(usePathname).mockReturnValue('/about');
    rerender(<Navigation />);

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('applies transparent background on home page when not scrolled', () => {
    vi.mocked(usePathname).mockReturnValue('/');
    vi.mocked(useScrolled).mockReturnValue(false);

    render(<Navigation />);
    const nav = screen.getByRole('navigation');
    
    // Background is transparent on home un-scrolled
    expect(nav).toHaveStyle({ background: 'transparent' });
  });

  it('applies dark background on home page when scrolled', () => {
    vi.mocked(usePathname).mockReturnValue('/');
    vi.mocked(useScrolled).mockReturnValue(true);

    render(<Navigation />);
    const nav = screen.getByRole('navigation');
    
    expect(nav).toHaveStyle({ background: 'rgba(10, 12, 20, 0.97)' });
  });

  it('applies solid background on non-home pages', () => {
    vi.mocked(usePathname).mockReturnValue('/insights');
    vi.mocked(useScrolled).mockReturnValue(false);

    render(<Navigation />);
    const nav = screen.getByRole('navigation');
    
    expect(nav).toHaveStyle({ background: 'rgba(10, 12, 20, 1)' });
  });
});

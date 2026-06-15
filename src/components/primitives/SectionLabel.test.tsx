import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { SectionLabel } from './SectionLabel';

describe('SectionLabel', () => {
  it('renders children correctly', () => {
    render(<SectionLabel>Test Label</SectionLabel>);
    expect(screen.getByText('Test Label')).toBeInTheDocument();
  });

  it('applies light variant by default', () => {
    const { container } = render(<SectionLabel>Test Label</SectionLabel>);
    const el = container.firstChild as HTMLElement;
    
    expect(el).toHaveClass('section-label');
    expect(el).toHaveClass('section-label--light');
    expect(el).not.toHaveClass('section-label--dark');
  });

  it('applies dark variant when specified', () => {
    const { container } = render(<SectionLabel variant="dark">Test Label</SectionLabel>);
    const el = container.firstChild as HTMLElement;
    
    expect(el).toHaveClass('section-label');
    expect(el).toHaveClass('section-label--dark');
    expect(el).not.toHaveClass('section-label--light');
  });

  it('merges custom class names', () => {
    const { container } = render(<SectionLabel className="custom-class">Test Label</SectionLabel>);
    const el = container.firstChild as HTMLElement;
    
    expect(el).toHaveClass('section-label');
    expect(el).toHaveClass('custom-class');
  });
});

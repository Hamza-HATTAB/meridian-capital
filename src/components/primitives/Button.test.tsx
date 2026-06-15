import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Button } from './Button';

describe('Button', () => {
  it('renders children correctly', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeDefined();
  });

  it('renders an anchor tag when href is provided', () => {
    render(<Button href="/test">Link</Button>);
    expect(screen.getByRole('link')).toHaveAttribute('href', '/test');
  });

  it('renders a button tag when href is not provided', () => {
    render(<Button type="submit">Submit</Button>);
    expect(screen.getByRole('button')).toHaveAttribute('type', 'submit');
  });
});

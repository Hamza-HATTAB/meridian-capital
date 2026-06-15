import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Container } from './Container';

describe('Container', () => {
  it('renders children correctly', () => {
    render(
      <Container>
        <span>Test Content</span>
      </Container>
    );

    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });

  it('applies default container-grid class and tag', () => {
    const { container } = render(
      <Container>
        <span>Test Content</span>
      </Container>
    );

    const el = container.firstChild as HTMLElement;
    expect(el.tagName.toLowerCase()).toBe('div');
    expect(el).toHaveClass('container-grid');
  });

  it('merges custom class names', () => {
    const { container } = render(
      <Container className="custom-class">
        <span>Test Content</span>
      </Container>
    );

    const el = container.firstChild as HTMLElement;
    expect(el).toHaveClass('container-grid');
    expect(el).toHaveClass('custom-class');
  });

  it('renders as a custom tag', () => {
    const { container } = render(
      <Container as="section">
        <span>Test Content</span>
      </Container>
    );

    const el = container.firstChild as HTMLElement;
    expect(el.tagName.toLowerCase()).toBe('section');
  });

  it('applies custom inline styles', () => {
    const { container } = render(
      <Container style={{ color: 'red' }}>
        <span>Test Content</span>
      </Container>
    );

    const el = container.firstChild as HTMLElement;
    expect(el).toHaveStyle({ color: 'rgb(255, 0, 0)' });
  });
});

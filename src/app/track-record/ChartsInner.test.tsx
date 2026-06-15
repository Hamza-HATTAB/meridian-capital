import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import ChartsInner from './ChartsInner';

// Mock Recharts components to avoid jsdom ResizeObserver/SVG issues
vi.mock('recharts', () => {
  const DummyComponent = ({ children, ...props }: { children?: React.ReactNode; 'data-testid'?: string }) => (
    <div data-testid={props['data-testid'] || 'recharts-dummy'}>{children}</div>
  );
  return {
    ResponsiveContainer: ({ children }: { children?: React.ReactNode }) => <div data-testid="responsive-container">{children}</div>,
    BarChart: DummyComponent,
    Bar: DummyComponent,
    XAxis: DummyComponent,
    YAxis: DummyComponent,
    Tooltip: DummyComponent,
    Cell: DummyComponent,
    RadarChart: DummyComponent,
    Radar: DummyComponent,
    PolarGrid: DummyComponent,
    PolarAngleAxis: DummyComponent,
  };
});

// Mock the content data to ensure predictable rendering
vi.mock('@/content/track-record', () => ({
  marketShare: [
    { name: 'Dubai', value: 40 },
    { name: 'KSA', value: 30 },
  ],
  radarData: [
    { subject: 'Office', value: 90, fullMark: 100 },
    { subject: 'Retail', value: 80, fullMark: 100 },
  ],
}));

describe('ChartsInner', () => {
  it('renders the charts containers and titles', () => {
    render(<ChartsInner />);

    // Check titles
    expect(screen.getByText('By Market (% of portfolio)')).toBeInTheDocument();
    expect(screen.getByText('Sector Expertise Depth')).toBeInTheDocument();
    expect(
      screen.getByText('Based on transaction volume, team experience, and research coverage depth per sector.')
    ).toBeInTheDocument();

    // Check containers
    const containers = screen.getAllByTestId('responsive-container');
    expect(containers).toHaveLength(2);
  });
});

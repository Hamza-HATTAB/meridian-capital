import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { TransactionRow } from './TransactionRow';

describe('TransactionRow', () => {
  it('renders transaction details correctly', () => {
    const mockTransaction = {
      id: 'tx-1',
      name: 'Project Alpha',
      description: 'Acquisition of Prime Office Space',
      type: 'Office' as const,
      market: 'Dubai',
      strategy: 'Core',
      role: 'Buy-Side Advisor' as const,
    };

    render(<TransactionRow transaction={mockTransaction} />);

    expect(screen.getByText('Project Alpha')).toBeInTheDocument();
    expect(screen.getByText('Acquisition of Prime Office Space')).toBeInTheDocument();
    expect(screen.getByText('Office')).toBeInTheDocument();
    expect(screen.getByText('Dubai')).toBeInTheDocument();
    expect(screen.getByText('Core')).toBeInTheDocument();
    
    // Role is rendered inside a Badge
    expect(screen.getByText('Buy-Side Advisor')).toBeInTheDocument();
  });
});

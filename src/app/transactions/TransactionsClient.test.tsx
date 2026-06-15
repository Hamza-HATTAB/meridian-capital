import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import TransactionsClient from './TransactionsClient';

// Mock the transaction data
vi.mock('@/content/transactions', () => ({
  transactions: [
    {
      id: 'tx-1',
      title: 'Project Alpha',
      type: 'Office',
      market: 'Dubai',
      strategy: 'Core',
      role: 'Advisor',
    },
    {
      id: 'tx-2',
      title: 'Project Beta',
      type: 'Residential',
      market: 'Abu Dhabi, KSA', // Matches KSA and Abu Dhabi theoretically, wait the filter uses string includes
      strategy: 'Value-Add',
      role: 'Lead',
    },
  ],
}));

// Mock the TransactionRow to keep tests focused
vi.mock('@/components/patterns/TransactionRow', () => ({
  TransactionRow: ({ transaction }: { transaction: { title: string } }) => (
    <div data-testid="transaction-row">{transaction.title}</div>
  ),
}));

describe('TransactionsClient', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders all transactions initially', () => {
    render(<TransactionsClient />);

    expect(screen.getByText(/Advisory Evidence — 2 Transactions/i)).toBeInTheDocument();
    expect(screen.getByText('Project Alpha')).toBeInTheDocument();
    expect(screen.getByText('Project Beta')).toBeInTheDocument();
  });

  it('filters transactions by type', () => {
    render(<TransactionsClient />);

    const officeBtn = screen.getByRole('button', { name: /^Office$/i });
    fireEvent.click(officeBtn);

    expect(screen.getByText(/Advisory Evidence — 1 Transaction/i)).toBeInTheDocument();
    expect(screen.getByText('Project Alpha')).toBeInTheDocument();
    expect(screen.queryByText('Project Beta')).not.toBeInTheDocument();
  });

  it('filters transactions by market', () => {
    render(<TransactionsClient />);

    const ksaBtn = screen.getByRole('button', { name: /^KSA$/i });
    fireEvent.click(ksaBtn);

    expect(screen.getByText(/Advisory Evidence — 1 Transaction/i)).toBeInTheDocument();
    expect(screen.queryByText('Project Alpha')).not.toBeInTheDocument();
    expect(screen.getByText('Project Beta')).toBeInTheDocument();
  });

  it('combines type and market filters', () => {
    render(<TransactionsClient />);

    const residentialBtn = screen.getByRole('button', { name: /^Residential$/i });
    fireEvent.click(residentialBtn);

    const dubaiBtn = screen.getByRole('button', { name: /^Dubai$/i });
    fireEvent.click(dubaiBtn);

    // Residential + Dubai matches nothing in our mock data
    expect(screen.getByText(/No transactions match the selected filters/i)).toBeInTheDocument();
    expect(screen.queryByTestId('transaction-row')).not.toBeInTheDocument();
  });

  it('resets filters when All is clicked', () => {
    render(<TransactionsClient />);

    // Apply filters
    fireEvent.click(screen.getByRole('button', { name: /^Office$/i }));
    fireEvent.click(screen.getByRole('button', { name: /^Dubai$/i }));
    
    expect(screen.getAllByTestId('transaction-row')).toHaveLength(1);

    // Reset Type
    const typeAllBtn = screen.getAllByRole('button', { name: /^All$/i })[0];
    fireEvent.click(typeAllBtn);
    
    // Still filtered by Dubai, so only Project Alpha shows
    expect(screen.getAllByTestId('transaction-row')).toHaveLength(1);

    // Reset Market
    const marketAllBtn = screen.getAllByRole('button', { name: /^All$/i })[1];
    fireEvent.click(marketAllBtn);

    // Both reset
    expect(screen.getAllByTestId('transaction-row')).toHaveLength(2);
  });
});

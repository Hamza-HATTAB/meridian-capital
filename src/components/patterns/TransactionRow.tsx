import type { Transaction } from '@/types/transaction';
import { Badge } from '@/components/primitives/Badge';
import { ArrowUpRight } from 'lucide-react';

interface TransactionRowProps {
  transaction: Transaction;
}

/**
 * Single transaction row for the evidence table.
 * Displays name, description, type, market, strategy, and role badge.
 */
export function TransactionRow({ transaction }: TransactionRowProps) {
  return (
    <div
      style={{
        padding: '20px 0',
        borderBottom: '1px solid rgba(0,0,0,0.08)',
        cursor: 'default',
        transition: 'border-color 0.4s ease',
      }}
      className="transaction-row grid grid-cols-[2fr_1fr_1fr_1fr_1fr]"
    >
      {/* Name + Description */}
      <div>
        <div
          className="tx-name"
          style={{
            fontSize: 14,
            fontWeight: 500,
            color: '#1A1A1A',
            marginBlockEnd: 3,
            transition: 'color 0.4s ease',
          }}
        >
          {transaction.name}
        </div>
        <div style={{ fontSize: 12, color: 'var(--color-text-muted)' }}>
          {transaction.description}
        </div>
      </div>

      {/* Type */}
      <div style={{ fontSize: 11, color: '#5C5C5C', paddingBlockStart: 2, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
        {transaction.type}
      </div>

      {/* Market */}
      <div style={{ fontSize: 11, color: '#5C5C5C', paddingBlockStart: 2, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
        {transaction.market}
      </div>

      {/* Strategy */}
      <div style={{ fontSize: 11, color: '#5C5C5C', paddingBlockStart: 2, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
        {transaction.strategy}
      </div>

      {/* Role badge */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
        }}
      >
        <Badge variant="role">{transaction.role}</Badge>
        <ArrowUpRight
          size={14}
          color="#C8C4B8"
          style={{ marginBlockStart: 2 }}
          aria-hidden="true"
        />
      </div>

      {/* Row hover styles */}
      <style>{`
        .transaction-row:hover {
          border-bottom: 1px solid rgba(0,0,0,0.3) !important;
        }
        .transaction-row:hover .tx-name {
          color: #000000 !important;
        }
      `}</style>
    </div>
  );
}

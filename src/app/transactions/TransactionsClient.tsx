'use client';

import { useState, useMemo } from 'react';
import type { TransactionType } from '@/types/transaction';
import { transactions } from '@/content/transactions';
import { TransactionRow } from '@/components/patterns/TransactionRow';
import { Container } from '@/components/primitives/Container';
import { SectionLabel } from '@/components/primitives/SectionLabel';

const allTypes: TransactionType[] = ['Logistics', 'Hospitality', 'Mixed-Use', 'Office', 'Residential', 'Industrial'];
const allMarkets = ['Dubai', 'KSA', 'Abu Dhabi', 'Qatar', 'Kuwait'];
const tableHeaders = ['Transaction', 'Type', 'Market', 'Strategy', 'Role'];

export default function TransactionsClient() {
  const [activeType, setActiveType] = useState<TransactionType | 'All'>('All');
  const [activeMarket, setActiveMarket] = useState<string>('All');

  const filtered = useMemo(() => {
    return transactions.filter((t) => {
      const typeMatch = activeType === 'All' || t.type === activeType;
      const marketMatch = activeMarket === 'All' || t.market.includes(activeMarket);
      return typeMatch && marketMatch;
    });
  }, [activeType, activeMarket]);

  const filterBtnStyle = (active: boolean): React.CSSProperties => ({
    fontSize: 11,
    letterSpacing: '0.08em',
    padding: '7px 16px',
    border: active ? '1px solid #1A1A1A' : '1px solid rgba(0,0,0,0.15)',
    background: active ? '#1A1A1A' : 'transparent',
    color: active ? '#FFFFFF' : '#5C5C5C',
    cursor: 'pointer',
    fontFamily: 'var(--font-body)',
    transition: 'all 0.15s',
    textTransform: 'uppercase' as const,
  });

  return (
    <>
      {/* ── Filters ── */}
      <div style={{ background: 'var(--color-bg-warm)', borderBottom: '1px solid rgba(0,0,0,0.1)', padding: '20px 0' }}>
        <Container>
          <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap', alignItems: 'center' }}>
            <span style={{ fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--color-text-muted)', marginInlineEnd: 8 }}>Type</span>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              <button style={filterBtnStyle(activeType === 'All')} onClick={() => setActiveType('All')}>All</button>
              {allTypes.map((type) => (
                <button key={type} style={filterBtnStyle(activeType === type)} onClick={() => setActiveType(type)}>{type}</button>
              ))}
            </div>
            <div style={{ height: 20, width: 1, background: 'rgba(0,0,0,0.15)', marginInline: 8 }} aria-hidden="true" />
            <span style={{ fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--color-text-muted)', marginInlineEnd: 8 }}>Market</span>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              <button style={filterBtnStyle(activeMarket === 'All')} onClick={() => setActiveMarket('All')}>All</button>
              {allMarkets.map((market) => (
                <button key={market} style={filterBtnStyle(activeMarket === market)} onClick={() => setActiveMarket(market)}>{market}</button>
              ))}
            </div>
          </div>
        </Container>
      </div>

      {/* ── Table ── */}
      <section aria-label="Transaction evidence table" style={{ background: 'var(--color-bg-white)', paddingBlock: 'var(--space-20)' }}>
        <Container>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBlockEnd: 32 }}>
            <SectionLabel variant="light">
              Advisory Evidence — {filtered.length} {filtered.length === 1 ? 'Transaction' : 'Transactions'}
            </SectionLabel>
          </div>

          <div className="overflow-x-auto pb-8" tabIndex={0} aria-label="Transactions table">
            <div className="min-w-[800px]">
              {/* Table header */}
              <div className="grid grid-cols-[2fr_1fr_1fr_1fr_1fr]" style={{ paddingBlock: '10px 16px', borderBottom: '2px solid rgba(0,0,0,0.15)' }}>
                {tableHeaders.map((col) => (
                  <span key={col} style={{ fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-text-muted)' }}>{col}</span>
                ))}
              </div>

          {/* Rows */}
          <div role="list" aria-label="Transaction list">
            {filtered.length === 0 ? (
              <div style={{ paddingBlock: 60, textAlign: 'center', color: 'var(--color-text-muted)', fontSize: 13 }}>
                No transactions match the selected filters.
              </div>
            ) : (
              filtered.map((tx) => (
                <div key={tx.id} role="listitem">
                  <TransactionRow transaction={tx} />
                </div>
              ))
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
    </>
  );
}

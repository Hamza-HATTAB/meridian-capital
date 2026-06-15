'use client';

import dynamic from 'next/dynamic';

// Recharts is client-only. Dynamic import with ssr: false prevents SSR errors.
const Charts = dynamic(() => import('./ChartsInner'), {
  ssr: false,
  loading: () => (
    <div
      style={{
        background: '#FFFFFF',
        padding: 36,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 300,
      }}
      role="status"
      aria-label="Loading charts"
    >
      <div style={{ fontSize: 12, color: 'var(--color-text-muted)', letterSpacing: '0.08em' }}>
        Loading charts…
      </div>
    </div>
  ),
});

export default function TrackRecordCharts() {
  return <Charts />;
}

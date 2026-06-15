'use client';

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Cell,
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from 'recharts';
import { marketShare, radarData } from '@/content/track-record';

/**
 * Inner charts component — loaded only after the dynamic import resolves.
 * Never imported directly — always through TrackRecordCharts.tsx wrapper.
 */
export default function ChartsInner() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
      {/* Market Bar Chart */}
      <div style={{ background: '#FFFFFF', padding: 36, borderInlineEnd: '1px solid rgba(0,0,0,0.08)' }}>
        <div style={{ fontSize: 12, fontWeight: 500, color: '#1A1A1A', marginBlockEnd: 28 }}>By Market (% of portfolio)</div>
        <ResponsiveContainer width="100%" height={220}>
          <BarChart data={marketShare} layout="vertical" margin={{ left: 0, right: 20 }}>
            <XAxis type="number" hide />
            <YAxis
              type="category"
              dataKey="name"
              tick={{ fontSize: 10, fill: '#1A1A1A', style: { letterSpacing: '0.04em' } }}
              tickFormatter={(value) => String(value).toUpperCase()}
              axisLine={false}
              tickLine={false}
              width={72}
            />
            <Tooltip
              formatter={(v) => [`${v ?? ''}%`, 'Share']}
              contentStyle={{ fontSize: 10, backgroundColor: '#1A1A1A', color: '#FFFFFF', border: 'none', borderRadius: 0, textTransform: 'uppercase', letterSpacing: '0.04em' }}
              itemStyle={{ color: '#FFFFFF' }}
              cursor={{ fill: 'rgba(0,0,0,0.04)' }}
            />
            <Bar dataKey="value" fill="#1A1A2A" radius={0}>
              {marketShare.map((_, i) => (
                <Cell key={i} fill={i === 0 ? '#1A1A1A' : '#D1CECC'} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Radar Chart */}
      <div style={{ background: '#FFFFFF', padding: 36 }}>
        <div style={{ fontSize: 12, fontWeight: 500, color: '#1A1A1A', marginBlockEnd: 8 }}>Sector Expertise Depth</div>
        <p style={{ fontSize: 11, color: 'var(--color-text-muted)', marginBlockEnd: 16, lineHeight: 1.6 }}>
          Based on transaction volume, team experience, and research coverage depth per sector.
        </p>
        <ResponsiveContainer width="100%" height={220}>
          <RadarChart data={radarData}>
            <PolarGrid stroke="#E0DDD5" />
            <PolarAngleAxis 
              dataKey="subject" 
              tick={{ fontSize: 10, fill: '#1A1A1A', style: { letterSpacing: '0.04em' } }}
              tickFormatter={(value) => String(value).toUpperCase()}
            />
            <Radar dataKey="value" fill="transparent" stroke="#1A1A1A" strokeWidth={2} />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

import type { CaseStudy } from '@/types/track-record';
import { Badge } from '@/components/primitives/Badge';

interface CaseStudyCardProps {
  caseStudy: CaseStudy;
  index: number;
}

/**
 * Full case study card — context, challenge, analysis, outcome.
 * Used in Track Record page in 2×2 grid.
 */
export function CaseStudyCard({ caseStudy, index }: CaseStudyCardProps) {
  const isRightColumn = index % 2 !== 0;
  const isTopRow = index < 2;

  const sections = [
    { label: 'Context', text: caseStudy.context },
    { label: 'Challenge', text: caseStudy.challenge },
    { label: 'Our Analysis', text: caseStudy.analysis },
    { label: 'Outcome', text: caseStudy.outcome },
  ];

  return (
    <article
      style={{
        padding: 48,
        borderInlineStart: isRightColumn
          ? '1px solid rgba(0,0,0,0.08)'
          : 'none',
        borderBlockEnd: isTopRow ? '1px solid rgba(0,0,0,0.08)' : 'none',
        background: '#FFFFFF',
      }}
    >
      <Badge variant="role" className="mb-5">
        {caseStudy.tag}
      </Badge>

      <h3
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: 19,
          fontWeight: 400,
          color: '#1A1A1A',
          lineHeight: 1.4,
          marginBlockStart: 20,
          marginBlockEnd: 24,
        }}
      >
        {caseStudy.title}
      </h3>

      {sections.map((section) => (
        <div key={section.label} style={{ marginBlockEnd: 16 }}>
          <div
            style={{
              fontSize: 10,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: 'var(--color-accent-mid)',
              marginBlockEnd: 6,
            }}
          >
            {section.label}
          </div>
          <p style={{ fontSize: 12, lineHeight: 1.75, color: '#5C5C5C' }}>
            {section.text}
          </p>
        </div>
      ))}
    </article>
  );
}

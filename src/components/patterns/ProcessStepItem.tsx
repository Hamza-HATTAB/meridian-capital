import type { ProcessStep } from '@/types/track-record';

interface ProcessStepItemProps {
  step: ProcessStep;
  isLast?: boolean;
}

/**
 * Research process step — phase label + description.
 * Used in the Research Process methodology section.
 */
export function ProcessStepItem({ step, isLast = false }: ProcessStepItemProps) {
  return (
    <div
      className="grid grid-cols-1 sm:grid-cols-[200px_1fr] gap-4 sm:gap-8"
      style={{
        paddingBlock: 28,
        borderBottom: isLast ? 'none' : '1px solid rgba(0,0,0,0.08)',
      }}
    >
      <div
        style={{
          fontSize: 13,
          fontWeight: 500,
          color: '#1A1A1A',
          paddingBlockStart: 2,
        }}
      >
        {step.phase}
      </div>
      <p style={{ fontSize: 13, lineHeight: 1.75, color: '#5C5C5C' }}>
        {step.description}
      </p>
    </div>
  );
}

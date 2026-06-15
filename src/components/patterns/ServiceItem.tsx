import type { Service } from '@/types/service';

interface ServiceItemProps {
  service: Service;
  isLast?: boolean;
}

/**
 * Advisory service item — numbered, title, description.
 * Used in the Advisory Services section list.
 */
export function ServiceItem({ service, isLast = false }: ServiceItemProps) {
  return (
    <div
      className="grid grid-cols-[60px_1fr] gap-6"
      style={{
        paddingBlock: 28,
        borderBottom: isLast ? 'none' : '1px solid rgba(0,0,0,0.1)',
      }}
    >
      {/* Number */}
      <span
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: 13,
          color: 'var(--color-accent-mid)',
          paddingBlockStart: 3,
        }}
        aria-hidden="true"
      >
        {service.num}
      </span>

      {/* Content */}
      <div>
        <div
          style={{
            fontSize: 14,
            fontWeight: 500,
            color: '#1A1A1A',
            marginBlockEnd: 8,
          }}
        >
          {service.title}
        </div>
        <p style={{ fontSize: 13, lineHeight: 1.7, color: '#5C5C5C' }}>
          {service.description}
        </p>
      </div>
    </div>
  );
}

import type { TeamMember } from '@/types/team';

interface TeamMemberCardProps {
  member: TeamMember;
  index: number;
}

/** Returns initials from a full name string */
function getInitials(name: string): string {
  return name
    .split(' ')
    .slice(0, 2)
    .map((n) => n[0])
    .join('');
}

/**
 * Team member card — monogram avatar, name, title, background, expertise.
 * Used in About page 3×2 grid.
 */
export function TeamMemberCard({ member, index }: TeamMemberCardProps) {
  const col = index % 3;
  const row = Math.floor(index / 3);

  return (
    <article
      style={{
        padding: 40,
        borderInlineEnd: col < 2 ? '1px solid rgba(0,0,0,0.08)' : 'none',
        borderBlockEnd: row < 1 ? '1px solid rgba(0,0,0,0.08)' : 'none',
        background: '#FFFFFF',
      }}
    >
      {/* Monogram Avatar */}
      <div
        style={{
          width: 48,
          height: 48,
          background: '#1A1A2A',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBlockEnd: 20,
        }}
        aria-hidden="true"
      >
        <span
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 16,
            color: '#FFFFFF',
            letterSpacing: '0.04em',
          }}
        >
          {getInitials(member.name)}
        </span>
      </div>

      {/* Name */}
      <div
        style={{
          fontSize: 15,
          fontWeight: 500,
          color: '#1A1A1A',
          marginBlockEnd: 4,
        }}
      >
        {member.name}
      </div>

      {/* Title */}
      <div
        style={{
          fontSize: 11,
          color: 'var(--color-accent)',
          letterSpacing: '0.04em',
          marginBlockEnd: 20,
        }}
      >
        {member.title}
      </div>

      {/* Background bullets */}
      <ul
        style={{ listStyle: 'none', marginBlockEnd: 16 }}
        aria-label={`${member.name} background`}
      >
        {member.background.map((item) => (
          <li
            key={item}
            style={{
              fontSize: 12,
              color: '#6C6C6C',
              marginBlockEnd: 4,
              display: 'flex',
              gap: 8,
            }}
          >
            <span
              style={{ color: 'var(--color-accent-mid)', marginBlockStart: 6, flexShrink: 0 }}
              aria-hidden="true"
            >
              —
            </span>
            {item}
          </li>
        ))}
      </ul>

      {/* Expertise */}
      <div
        style={{
          borderTop: '1px solid rgba(0,0,0,0.08)',
          paddingBlockStart: 16,
        }}
      >
        <div
          style={{
            fontSize: 10,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'var(--color-accent-mid)',
            marginBlockEnd: 6,
          }}
        >
          Expertise
        </div>
        <p
          style={{
            fontSize: 12,
            lineHeight: 1.6,
            color: '#5C5C5C',
            marginBlockEnd: 10,
          }}
        >
          {member.expertise}
        </p>
        <p
          style={{
            fontSize: 11,
            color: 'var(--color-text-muted)',
            lineHeight: 1.6,
            fontStyle: 'italic',
          }}
        >
          {member.note}
        </p>
      </div>
    </article>
  );
}

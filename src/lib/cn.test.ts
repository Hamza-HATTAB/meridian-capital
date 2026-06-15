import { describe, it, expect } from 'vitest';
import { cn } from './cn';

describe('cn utility', () => {
  it('merges standard class names', () => {
    expect(cn('class1', 'class2')).toBe('class1 class2');
  });

  it('handles conditional class names', () => {
    expect(cn('class1', true && 'class2', false && 'class3')).toBe('class1 class2');
  });

  it('merges tailwind conflicts correctly', () => {
    // p-4 should override p-2
    expect(cn('p-2', 'p-4')).toBe('p-4');
  });

  it('handles arrays of class names', () => {
    expect(cn(['class1', 'class2'], 'class3')).toBe('class1 class2 class3');
  });

  it('handles empty and null inputs', () => {
    expect(cn('class1', null, undefined, '', 'class2')).toBe('class1 class2');
  });
});

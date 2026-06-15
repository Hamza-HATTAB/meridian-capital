'use client';

import { useState, useEffect } from 'react';

/**
 * Detects whether the user has scrolled past a threshold.
 * Used by Navigation to trigger the background on scroll.
 * Initializes to false to match SSR output and prevent hydration mismatch.
 */
export function useScrolled(threshold = 40): boolean {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > threshold);
    };

    // Set initial value after mount
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  return scrolled;
}

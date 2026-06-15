import { renderHook, act } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { useScrolled } from './use-scrolled';

describe('useScrolled', () => {
  beforeEach(() => {
    // Reset window.scrollY
    Object.defineProperty(window, 'scrollY', {
      value: 0,
      writable: true,
    });
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('initializes to false', () => {
    const { result } = renderHook(() => useScrolled(40));
    expect(result.current).toBe(false);
  });

  it('updates to true when scrolling past threshold', () => {
    const { result } = renderHook(() => useScrolled(40));

    expect(result.current).toBe(false);

    act(() => {
      window.scrollY = 50;
      window.dispatchEvent(new Event('scroll'));
    });

    expect(result.current).toBe(true);
  });

  it('updates back to false when scrolling above threshold', () => {
    window.scrollY = 50;
    const { result } = renderHook(() => useScrolled(40));

    expect(result.current).toBe(true);

    act(() => {
      window.scrollY = 30;
      window.dispatchEvent(new Event('scroll'));
    });

    expect(result.current).toBe(false);
  });

  it('uses default threshold of 40', () => {
    const { result } = renderHook(() => useScrolled());

    act(() => {
      window.scrollY = 39;
      window.dispatchEvent(new Event('scroll'));
    });
    expect(result.current).toBe(false);

    act(() => {
      window.scrollY = 41;
      window.dispatchEvent(new Event('scroll'));
    });
    expect(result.current).toBe(true);
  });

  it('cleans up event listeners on unmount', () => {
    const removeEventListenerSpy = vi.spyOn(window, 'removeEventListener');
    const { unmount } = renderHook(() => useScrolled(40));

    unmount();

    expect(removeEventListenerSpy).toHaveBeenCalledWith('scroll', expect.any(Function));
  });
});

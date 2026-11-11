/**
 * useScreenLayout.ts
 *
 * Holds the dual-screen layout preference. There are three layouts: the
 * original vertical stack (top screen above the touch screen) and two
 * side-by-side layouts where the user picks which screen sits on the left.
 * The choice is saved to localStorage so it survives page reloads.
 */

import { useState, useEffect, useCallback } from 'react';

export type ScreenLayout = 'vertical' | 'side-top-left' | 'side-top-right';

/** Order the rotate button cycles through (first entry is the default) */
export const SCREEN_LAYOUTS: readonly ScreenLayout[] = ['vertical', 'side-top-left', 'side-top-right'];

/** Human-readable names used for the rotate button's label/tooltip */
export const SCREEN_LAYOUT_LABELS: Record<ScreenLayout, string> = {
  vertical: 'Vertical (top screen above touch screen)',
  'side-top-left': 'Side by side (top screen on the left)',
  'side-top-right': 'Side by side (top screen on the right)',
};

const STORAGE_KEY = 'ds-screen-layout';

/**
 * Type guard so anything unexpected in storage falls back to the default
 * @param value - Raw value read from localStorage
 * @returns True when the value is one of the known layouts
 */
function isScreenLayout(value: unknown): value is ScreenLayout {
  return typeof value === 'string' && (SCREEN_LAYOUTS as readonly string[]).includes(value);
}

/**
 * Reads the saved layout, defaulting to vertical when nothing valid is stored
 * or storage is unavailable (private mode, blocked cookies, etc.)
 * @returns Saved layout or 'vertical'
 */
function readStoredLayout(): ScreenLayout {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    return isScreenLayout(stored) ? stored : SCREEN_LAYOUTS[0];
  } catch {
    return SCREEN_LAYOUTS[0];
  }
}

/**
 * Returns the layout that comes after the given one in the cycle
 * @param layout - Current layout
 * @returns Next layout (wraps back to the first)
 */
export function getNextScreenLayout(layout: ScreenLayout): ScreenLayout {
  const index = SCREEN_LAYOUTS.indexOf(layout);
  return SCREEN_LAYOUTS[(index + 1) % SCREEN_LAYOUTS.length];
}

/**
 * Persisted screen layout state
 * @returns Current layout plus a callback that rotates to the next one
 */
export function useScreenLayout() {
  // lazy initializer so localStorage is only read once on mount
  const [layout, setLayout] = useState<ScreenLayout>(readStoredLayout);

  // save every change; storage failures are non-critical
  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, layout);
    } catch {
      /* ignore storage errors */
    }
  }, [layout]);

  const cycleLayout = useCallback(() => {
    setLayout((current) => getNextScreenLayout(current));
  }, []);

  return { layout, cycleLayout };
}

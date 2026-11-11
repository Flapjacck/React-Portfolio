/**
 * useScreenLayout.ts
 *
 * Holds the dual-screen layout preference. There are two layouts: the
 * original vertical stack (top screen above the touch screen) and side by
 * side (top screen on the left, touch screen on the right). The choice is
 * saved to localStorage so it survives page reloads.
 */

import { useState, useEffect, useCallback } from 'react';

export type ScreenLayout = 'vertical' | 'side-by-side';

/** Order the rotate button cycles through (first entry is the default) */
export const SCREEN_LAYOUTS: readonly ScreenLayout[] = ['vertical', 'side-by-side'];

/** Human-readable names used for the rotate button's label/tooltip */
export const SCREEN_LAYOUT_LABELS: Record<ScreenLayout, string> = {
  vertical: 'Vertical (top screen above touch screen)',
  'side-by-side': 'Side by side (top screen left, touch screen right)',
};

const STORAGE_KEY = 'ds-screen-layout';

// values saved by earlier builds (which had two side-by-side variants);
// both now map to the single side-by-side layout
const LEGACY_LAYOUTS: Record<string, ScreenLayout> = {
  'side-top-left': 'side-by-side',
  'side-top-right': 'side-by-side',
};

/**
 * Type guard so anything unexpected in storage falls back to the default
 * @param value - Raw value read from localStorage
 * @returns True when the value is one of the known layouts
 */
function isScreenLayout(value: unknown): value is ScreenLayout {
  return typeof value === 'string' && (SCREEN_LAYOUTS as readonly string[]).includes(value);
}

/**
 * Reads the saved layout, migrating legacy values and defaulting to vertical
 * when nothing valid is stored or storage is unavailable (private mode,
 * blocked cookies, etc.)
 * @returns Saved layout or 'vertical'
 */
function readStoredLayout(): ScreenLayout {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (isScreenLayout(stored)) return stored;
    // migrate old values; Object.hasOwn avoids matching prototype keys
    if (stored !== null && Object.hasOwn(LEGACY_LAYOUTS, stored)) return LEGACY_LAYOUTS[stored];
    return SCREEN_LAYOUTS[0];
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

/**
 * DualScreenLayout.tsx
 *
 * Shared viewport-locked wrapper for the two DS screens. Arranges the top
 * and bottom screens according to the chosen layout:
 *   - vertical: top screen stacked above the touch screen (original look)
 *   - side-by-side: top screen on the left, touch screen on the right
 * Side-by-side sizing lives in index.css (.ds-screens-side). The element tree
 * is identical for every layout so child state (e.g. the selected box) is
 * kept when rotating. Also renders the fixed rotate button.
 */

import { useEffect, useRef, type ReactNode } from 'react';
import { useAnimate } from 'framer-motion';
import { LayoutToggle } from './LayoutToggle';
import type { ScreenLayout } from '../../hooks/useScreenLayout';

export interface DualScreenLayoutProps {
  /** Layout to arrange the screens in */
  layout: ScreenLayout;
  /** Called by the rotate button to move to the next layout */
  onCycleLayout: () => void;
  /** Top screen element */
  top: ReactNode;
  /** Bottom (touch) screen element */
  bottom: ReactNode;
}

// flex direction per layout; side-by-side only applies from the `sm`
// breakpoint up, below that the screens stay stacked (too small otherwise)
const LAYOUT_CLASSES: Record<ScreenLayout, string> = {
  vertical: 'max-w-(--screen-max-width) flex-col',
  'side-by-side': 'ds-screens-side max-w-(--screen-max-width) sm:max-w-none flex-col sm:flex-row',
};

/**
 * Renders both screens in the requested layout plus the rotate button
 * @param layout - Current screen layout
 * @param onCycleLayout - Callback for the rotate button
 * @param top - Top screen element
 * @param bottom - Bottom screen element
 * @returns Full-viewport dual-screen layout
 */
export function DualScreenLayout({ layout, onCycleLayout, top, bottom }: DualScreenLayoutProps) {
  // quick fade when the layout changes so the screens don't just snap
  const [scope, animate] = useAnimate<HTMLDivElement>();
  const previousLayout = useRef(layout);

  useEffect(() => {
    // skip the first render (and StrictMode re-runs); only fade on real changes
    if (previousLayout.current === layout) return;
    previousLayout.current = layout;
    animate(scope.current, { opacity: [0, 1] }, { duration: 0.35, ease: 'easeOut' });
  }, [layout, animate, scope]);

  return (
    // main container centers the dual screens; the global <body> paints the black background
    <main className="flex flex-col items-center justify-center gap-(--screen-gap) h-screen w-full overflow-hidden py-(--screen-gap) px-(--screen-gap)">
      <LayoutToggle layout={layout} onCycle={onCycleLayout} />

      <div
        ref={scope}
        data-layout={layout}
        className={`w-full flex items-center justify-center gap-(--screen-gap) ${LAYOUT_CLASSES[layout]}`}
      >
        {top}
        {bottom}
      </div>
    </main>
  );
}

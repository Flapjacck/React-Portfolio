/**
 * TopScreen.tsx
 *
 * DS Lite-inspired top screen component. Displays content in a 4:3 aspect
 * ratio container with warm, retro styling. Acts as a container for child
 * components that should be rendered on the upper display area.
 */

import type { ReactNode } from 'react';
import { TopScreenHeader } from './TopScreenHeader';

export interface TopScreenProps {
  /** Content to render inside the top screen */
  children?: ReactNode;
}

/**
 * Renders the DS Lite top screen display area
 * @param children - Content to display on the top screen
 * @returns Top screen component with 4:3 aspect ratio
 */
export function TopScreen({ children }: TopScreenProps) {
  // Add margin and responsive padding for gap
  return (
    <div className="ds-screen aspect-4/3 w-full flex-none flex items-center justify-center min-w-0">
      {/* content area becomes relative so header can be absolute */}
      <div className="ds-screen-content relative w-full h-full">
        {/* fixed-height header bar at top */}
        <TopScreenHeader />

        {/* main body shifted down by header height */}
        <div className="w-full h-full pt-[8.333%] flex items-center justify-center p-2 md:p-3 lg:p-4">
          {children ? (
            children
          ) : (
            <div className="text-center text-gray-500">
              <p className="text-sm font-medium">Top Screen</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

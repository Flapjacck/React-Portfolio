/**
 * TopScreen.tsx
 *
 * DS Lite-inspired top screen component. Displays content in a 4:3 aspect
 * ratio container with warm, retro styling. Acts as a container for child
 * components that should be rendered on the upper display area.
 */

import type { ReactNode } from 'react';

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
  return (
    <div className="ds-screen aspect-[4/3] flex items-center justify-center min-w-0">
      <div className="ds-screen-content flex items-center justify-center p-6">
        {children ? (
          children
        ) : (
          <div className="text-center text-gray-500">
            <p className="text-sm font-medium">Top Screen</p>
          </div>
        )}
      </div>
    </div>
  );
}

/**
 * BottomScreen.tsx
 *
 * DS Lite-inspired bottom screen component. Displays content in a 4:3 aspect
 * ratio container with warm, retro styling. Acts as a container for child
 * components that should be rendered on the lower display area.
 */

import type { ReactNode } from 'react';

export interface BottomScreenProps {
  /** Content to render inside the bottom screen */
  children?: ReactNode;
}

/**
 * Renders the DS Lite bottom screen display area
 * @param children - Content to display on the bottom screen
 * @returns Bottom screen component with 4:3 aspect ratio
 */
export function BottomScreen({ children }: BottomScreenProps) {
  return (
    <div className="ds-screen aspect-4/3 flex items-center justify-center min-w-0">
      <div className="ds-screen-content flex items-center justify-center p-6">
        {children ? (
          children
        ) : (
          <div className="text-center text-gray-500">
            <p className="text-sm font-medium">Bottom Screen</p>
          </div>
        )}
      </div>
    </div>
  );
}

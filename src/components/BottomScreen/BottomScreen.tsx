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
  // Add margin and responsive padding for gap
  return (
    <div className="ds-screen aspect-[4/3] w-full flex-none flex items-center justify-center min-w-0 m-0.5 md:m-1.5 lg:m-2">
      <div className="ds-screen-content flex items-center justify-center p-2 md:p-3 lg:p-4">
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

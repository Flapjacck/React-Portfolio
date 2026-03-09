/**
 * BottomScreen.tsx
 *
 * DS Lite-inspired bottom screen component. Displays content in a 4:3 aspect
 * ratio container with warm, retro styling. Acts as a container for child
 * components that should be rendered on the lower display area.
 */

import type { ReactNode } from 'react';
import { BottomScreenBoxes } from './BottomScreenBoxes';
import { motion } from 'framer-motion';

export interface BottomScreenProps {
  /** Content to render inside the bottom screen */
  children?: ReactNode;
  /** whether to show the grid background (startup hides it) */
  showGrid?: boolean;
}

/**
 * Renders the DS Lite bottom screen display area
 * @param children - Content to display on the bottom screen. If omitted,
 *                   a set of DS‑style boxes is rendered by default.
 * @returns Bottom screen component with 4:3 aspect ratio
 */
export function BottomScreen({ children, showGrid = true }: BottomScreenProps) {
  // Add margin and responsive padding for gap
  return (
    <div className="ds-screen aspect-4/3 w-full flex-none flex items-center justify-center min-w-0">
      <motion.div
        className={`ds-screen-content ${
          showGrid ? 'bottom-screen-grid' : ''
        } flex items-center justify-center p-2 md:p-3 lg:p-4`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
      >
        {children ? (
          children
        ) : (
          <BottomScreenBoxes />
        )}
      </motion.div>
    </div>
  );
}

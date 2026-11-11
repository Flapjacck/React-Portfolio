/**
 * LayoutToggle.tsx
 *
 * Small DS-style rotate button pinned to the top-left corner of the page.
 * Each press cycles the dual screens through the three layouts (vertical,
 * side by side with the top screen left, side by side with it right). It
 * uses the same blue gradient as the top screen header so it reads clearly
 * against the black backdrop. Hidden below the `sm` breakpoint, where the
 * screens always stack vertically.
 */

import { motion } from 'framer-motion';
import { MdScreenRotation } from 'react-icons/md';
import {
  SCREEN_LAYOUT_LABELS,
  getNextScreenLayout,
  type ScreenLayout,
} from '../../hooks/useScreenLayout';

export interface LayoutToggleProps {
  /** Layout currently applied to the screens */
  layout: ScreenLayout;
  /** Called when the button is pressed to move to the next layout */
  onCycle: () => void;
}

/**
 * Renders the fixed rotate button
 * @param layout - Current screen layout (used for the label)
 * @param onCycle - Callback that advances to the next layout
 * @returns Fixed top-left layout button
 */
export function LayoutToggle({ layout, onCycle }: LayoutToggleProps) {
  // describe both the current and the next layout for screen readers/tooltips
  const label = `Screen layout: ${SCREEN_LAYOUT_LABELS[layout]}. Switch to ${SCREEN_LAYOUT_LABELS[getNextScreenLayout(layout)]}`;

  return (
    <motion.button
      type="button"
      onClick={onCycle}
      aria-label={label}
      title={label}
      className="fixed top-(--screen-gap) left-(--screen-gap) z-50 hidden sm:flex items-center justify-center
        size-(--layout-btn-size) border-2 border-black bg-linear-to-t from-[#61829a] to-[#99adbb]
        text-black cursor-pointer hover:brightness-110
        focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      whileTap={{ scale: 0.9, transition: { duration: 0.1 } }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
    >
      <MdScreenRotation aria-hidden="true" className="size-[65%]" />
    </motion.button>
  );
}

/**
 * BoxSelector.tsx
 *
 * Visual overlay that draws a set of blue corner brackets around a target
 * box on the bottom screen. The selector moves/ resizes with smooth
 * Framer Motion animations whenever the active box changes. It is entirely
 * decorational (pointer-events-none) and receives the target bounds from
 * its parent.
 */

import { motion } from 'framer-motion';
import React from 'react';

type Bounds = {
  x: number;
  y: number;
  width: number;
  height: number;
};

interface BoxSelectorProps {
  bounds: Bounds | null;
}

/**
 * Renders the four corner brackets around the provided `bounds`. If there is
 * no bounds (null) we render nothing.
 */
// constants used by both the selector and corner renderer
// enlarged again so brackets visibly cover the box corners per latest feedback
const length = 24; // px each arm of the bracket (was 15)
const thickness = 8; // px line width (was 5)

// base corner component – declared once so it isn’t recreated on every render
interface CornerProps {
  position: 'tl' | 'tr' | 'bl' | 'br';
}
function Corner({ position }: CornerProps) {
  const styles: React.CSSProperties = { width: length, height: length, position: 'absolute' };
  // offset the container so the bars poke outside
  // nudge the corners slightly outward so they don't obscure the box interior
  const offset = -Math.floor(thickness / 2); // half the line width, negative to push outward
  switch (position) {
    case 'tl':
      styles.left = offset;
      styles.top = offset;
      break;
    case 'tr':
      styles.right = offset;
      styles.top = offset;
      break;
    case 'bl':
      styles.left = offset;
      styles.bottom = offset;
      break;
    case 'br':
      styles.right = offset;
      styles.bottom = offset;
      break;
  }

  // determine placement for the horizontal and vertical bars based on corner
  const horizStyle: React.CSSProperties = { position: 'absolute', width: length, height: thickness };
  const vertStyle: React.CSSProperties = { position: 'absolute', width: thickness, height: length };

  switch (position) {
    case 'tl':
      horizStyle.left = 0;
      horizStyle.top = 0;
      vertStyle.left = 0;
      vertStyle.top = 0;
      break;
    case 'tr':
      horizStyle.right = 0;
      horizStyle.top = 0;
      vertStyle.right = 0;
      vertStyle.top = 0;
      break;
    case 'bl':
      horizStyle.left = 0;
      horizStyle.bottom = 0;
      vertStyle.left = 0;
      vertStyle.bottom = 0;
      break;
    case 'br':
      horizStyle.right = 0;
      horizStyle.bottom = 0;
      vertStyle.right = 0;
      vertStyle.bottom = 0;
      break;
  }

  return (
    <div style={styles} className="pointer-events-none">
      <div
        className="bg-(--selector-blue) border border-white"
        style={horizStyle}
      />
      <div
        className="bg-(--selector-blue) border border-white"
        style={vertStyle}
      />
    </div>
  );
}

export function BoxSelector({ bounds }: BoxSelectorProps) {
  if (!bounds) return null;

  return (
    <motion.div
      className="absolute z-10 pointer-events-none"
      style={{ left: bounds.x, top: bounds.y, width: bounds.width, height: bounds.height }}
      layout
      transition={{ duration: 0.2, ease: 'easeInOut' }}
    >
      <Corner position="tl" />
      <Corner position="tr" />
      <Corner position="bl" />
      <Corner position="br" />
    </motion.div>
  );
}

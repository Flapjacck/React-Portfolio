/**
 * PowerScreen.tsx
 *
 * Initial "off" state screen shown before the DS Lite boot sequence.
 * Displays a full‑viewport black background with a centered power icon.
 * Clicking or pressing the icon fires the provided callback so the parent
 * can begin the boot/audio sequence. This component is intentionally
 * lightweight since it only appears briefly.
 */

import type { KeyboardEvent } from 'react';
import { FiPower } from 'react-icons/fi';

export interface PowerScreenProps {
  /** Called when user activates the power button (click or keyboard) */
  onPower: () => void;
}

/**
 * Renders a fullscreen black "off" screen with a power button.
 */
export function PowerScreen({ onPower }: PowerScreenProps) {
  const handleKey = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      onPower();
    }
  };

  return (
    <main className="flex items-center justify-center h-screen w-full bg-black">
      <div
        role="button"
        tabIndex={0}
        className="text-white text-6xl cursor-pointer select-none"
        onClick={onPower}
        onKeyDown={handleKey}
      >
        <FiPower />
      </div>
    </main>
  );
}

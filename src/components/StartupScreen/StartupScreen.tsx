/**
 * StartupScreen.tsx
 *
 * DS Lite startup/warning screen that displays on initial page load.
 * Shows a black logo on the top display and a health/safety-style warning
 * on the bottom display. User must click/tap the bottom screen to proceed.
 * Features fade-in animation on mount and fade-out when dismissed.
 */

import { useState } from 'react';
import { motion } from 'framer-motion';
import { TopScreen } from '../TopScreen/TopScreen';
import { BottomScreen } from '../BottomScreen/BottomScreen';

export interface StartupScreenProps {
  /** Bold heading text (default: "WARNING") */
  heading?: string;
  /** Main body text, supports line breaks with \n (default: portfolio disclaimer) */
  message?: string;
  /** Continue prompt text (default: "Touch the touch screen to continue") */
  continueText?: string;
  /** Callback fired when fade-out animation completes */
  onFinish?: () => void;
}

/**
 * Renders the DS Lite startup warning screen with fade animations
 * @param heading - Optional bold heading text
 * @param message - Optional body message text
 * @param continueText - Optional continue prompt text
 * @param onFinish - Callback when exit animation completes
 * @returns Fullscreen startup screen component
 */
export function StartupScreen({
  heading = 'WARNING',
  message = 'BEFORE EXPLORING, READ THIS\n\nI AM A DEVELOPER WITH A PASSION FOR TECH\n\nTHIS SITE SHOWCASES MY WORK AND ABILITIES',
  continueText = 'Touch the Touch Screen to continue',
  onFinish,
}: StartupScreenProps) {
  // Track whether we're exiting; when true, animate out and call onFinish
  const [isExiting, setIsExiting] = useState(false);

  // Handle bottom screen click to start exit animation
  const handleContinue = () => {
    setIsExiting(true);
  };

  return (
    <main className="flex flex-col items-center justify-center gap-(--screen-gap) h-screen w-full overflow-hidden py-(--screen-gap) px-(--screen-gap)">
      <div className="w-full max-w-(--screen-max-width) flex flex-col items-center justify-center gap-(--screen-gap)">
        {/* Top Screen - Logo with fade animation, no header or grid */}
        <TopScreen hideHeader showGrid={false}>
          <motion.div
            className="flex items-center justify-center h-full w-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: isExiting ? 0 : 1 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
            onAnimationComplete={() => {
              if (isExiting && onFinish) {
                onFinish();
              }
            }}
          >
            <img
              src="/assets/Black_logo_pixel.png"
              alt="Logo"
              className="h-32 sm:h-40 w-auto"
            />
          </motion.div>
        </TopScreen>

        {/* Bottom Screen - Warning text with fade animation, hide grid */}
        <BottomScreen showGrid={false}>
          <motion.div
            className="flex items-center justify-center h-full w-full cursor-pointer"
            role="button"
            tabIndex={0}
            onClick={handleContinue}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                handleContinue();
              }
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: isExiting ? 0 : 1 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
          >
            <div className="flex flex-col items-center justify-center text-center px-4 gap-3">
              {/* Bold heading */}
              <p className="text-5xl sm:text-6xl md:text-7xl font-bold text-[var(--content-text, #2a2a2a)]">
                {heading}
              </p>

              {/* Body message - supports multiple lines */}
              <p className="text-2xl sm:text-3xl leading-relaxed text-[var(--content-text, #2a2a2a)] whitespace-pre-line">
                {message}
              </p>

              {/* Continue prompt - match body paragraph size */}
              <p className="text-2xl sm:text-3xl mt-2 text-[var(--content-text, #2a2a2a)] opacity-75 blink-text">
                {continueText}
              </p>
            </div>
          </motion.div>
        </BottomScreen>
      </div>
    </main>
  );
}

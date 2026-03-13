/**
 * TopScreen.tsx
 *
 * DS Lite-inspired top screen component. Displays content in a 4:3 aspect
 * ratio container with warm, retro styling. Acts as a container for child
 * components that should be rendered on the upper display area.
 */

import type { ReactNode } from 'react';
import { TopScreenHeader } from './TopScreenHeader';
import { AboutMe } from './AboutMe';
import { Skills } from './Skills';
import { Experience } from './Experience';
import { Projects } from './Projects';
import { motion } from 'framer-motion';
// TopScreenHeader displays the name, clock, and social icons;

export type SectionType = 'About Me' | 'Skills' | 'Experience' | 'Projects';

export interface TopScreenProps {
  /** Content to render inside the top screen */
  children?: ReactNode;
  /** hide the header bar (used during startup screen) */
  hideHeader?: boolean;
  /** determine whether the DS grid background should be shown */
  showGrid?: boolean;
  /** Current selected section from bottom screen */
  selectedSection?: SectionType;
}

/**
 * Renders the DS Lite top screen display area
 * @param children - Content to display on the top screen
 * @returns Top screen component with 4:3 aspect ratio
 */
export function TopScreen({ children, hideHeader = false, showGrid = true, selectedSection = 'About Me' }: TopScreenProps) {
  // Render the appropriate section component based on selectedSection
  const renderSection = () => {
    switch (selectedSection) {
      case 'About Me':
        return <AboutMe />;
      case 'Skills':
        return <Skills />;
      case 'Experience':
        return <Experience />;
      case 'Projects':
        return <Projects />;
      default:
        return <AboutMe />;
    }
  };

  // Add margin and responsive padding for gap
  return (
    <div className="ds-screen aspect-4/3 w-full flex-none flex items-center justify-center min-w-0">
      {/* content area becomes relative so header can be absolute */}
      <motion.div
        className={`ds-screen-content ${
          showGrid ? 'top-screen-grid' : ''
        } relative w-full h-full`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
      >
        {/* fixed-height header bar at top, or nothing when hidden */}
        {!hideHeader && <TopScreenHeader />}

        {/* main body shifted down by header height when header visible */}
        <div
          className={`w-full h-full flex items-center justify-center p-2 md:p-3 lg:p-4 ${
            !hideHeader ? 'pt-[8.333%]' : ''
          }`}
        >
          {children ? (
            children
          ) : (
            renderSection()
          )}
        </div>
      </motion.div>
    </div>
  );
}

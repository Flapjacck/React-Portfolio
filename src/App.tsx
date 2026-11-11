
/**
 * App.tsx
 *
 * Root application component. Renders the DS Lite startup warning screen
 * on initial load, then transitions to the dual-screen layout once dismissed.
 * The layout is viewport-locked with no scrolling, adapting gracefully to
 * mobile and desktop sizes. The screen layout (vertical or side by side) is
 * chosen with the rotate button and shared by the startup and main screens.
 */

import { useState } from 'react';
import { StartupScreen } from './components/StartupScreen';
import { TopScreen, type SectionType } from './components/TopScreen/TopScreen';
import { BottomScreen } from './components/BottomScreen/BottomScreen';
import { DualScreenLayout } from './components/ScreenLayout';
import { useScreenLayout } from './hooks/useScreenLayout';

/**
 * Main application component with startup screen and dual-screen DS Lite layout
 * @returns Root layout with startup screen or dual-screen display
 */
function App() {
  // Show startup screen on initial load; user must dismiss it to see main screens
  const [showStartup, setShowStartup] = useState(true);
  // Track the currently selected section from bottom screen
  const [selectedSection, setSelectedSection] = useState<SectionType>('About Me');
  // Screen layout preference (persisted), shared with the startup screen so nothing jumps
  const { layout, cycleLayout } = useScreenLayout();

  // Render startup screen if showStartup is true; otherwise render main dual-screen layout
  if (showStartup) {
    return (
      <StartupScreen
        layout={layout}
        onCycleLayout={cycleLayout}
        onFinish={() => setShowStartup(false)}
      />
    );
  }

  return (
    <DualScreenLayout
      layout={layout}
      onCycleLayout={cycleLayout}
      top={<TopScreen selectedSection={selectedSection} />}
      bottom={<BottomScreen onBoxSelect={(section) => setSelectedSection(section as SectionType)} />}
    />
  );
}

export default App;

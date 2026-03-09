
/**
 * App.tsx
 *
 * Root application component. Renders the DS Lite startup warning screen
 * on initial load, then transitions to the dual-screen layout once dismissed.
 * The layout is viewport-locked with no scrolling, adapting gracefully to
 * mobile and desktop sizes.
 */

import { useState } from 'react';
import { StartupScreen } from './components/StartupScreen';
import { TopScreen } from './components/TopScreen/TopScreen';
import { BottomScreen } from './components/BottomScreen/BottomScreen';

/**
 * Main application component with startup screen and dual-screen DS Lite layout
 * @returns Root layout with startup screen or dual-screen display
 */
function App() {
  // Show startup screen on initial load; user must dismiss it to see main screens
  const [showStartup, setShowStartup] = useState(true);

  // Render startup screen if showStartup is true; otherwise render main dual-screen layout
  if (showStartup) {
    return (
      <StartupScreen onFinish={() => setShowStartup(false)} />
    );
  }

  return (
    // main container centers the dual screens but does not need to paint the whole
    // viewport any more; the global <body> already has the black background.
    <main className="flex flex-col items-center justify-center gap-(--screen-gap) h-screen w-full overflow-hidden py-(--screen-gap) px-(--screen-gap)">
      <div className="w-full max-w-(--screen-max-width) flex flex-col items-center justify-center gap-(--screen-gap)">
        <TopScreen />
        <BottomScreen />
      </div>
    </main>
  );
}

export default App;

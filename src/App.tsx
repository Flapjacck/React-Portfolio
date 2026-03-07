
/**
 * App.tsx
 *
 * Root application component. Renders the DS Lite dual-screen layout
 * with top and bottom screens stacked vertically. The layout is viewport-locked
 * with no scrolling, adapting gracefully to mobile and desktop sizes.
 */

import { TopScreen } from './components/TopScreen/TopScreen';
import { BottomScreen } from './components/BottomScreen/BottomScreen';

/**
 * Main application component with dual-screen DS Lite layout
 * @returns Root layout with stacked top and bottom screens
 */
function App() {
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

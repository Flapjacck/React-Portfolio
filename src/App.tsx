
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
    <main className="flex flex-col items-center justify-center gap-[var(--screen-gap)] h-screen w-screen bg-black overflow-hidden p-[var(--screen-gap)]">
      <TopScreen />
      <BottomScreen />
    </main>
  );
}

export default App;

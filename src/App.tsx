import { useState, useRef, Suspense, lazy } from "react";
import { LoadingScreen } from "./components/LoadingScreen";
import { Navbar } from "./components/Navbar";
import { Pokemon } from "./components/Pokemon";
import { Menu } from "./components/Menu";
import Silk from "./components/Silk";
import "./App.css";

// Lazy load sections (loaded on demand, below the fold)
const Home = lazy(() => import("./components/sections/Home").then(m => ({ default: m.Home })));
const About = lazy(() => import("./components/sections/About").then(m => ({ default: m.About })));
const Projects = lazy(() => import("./components/sections/Projects").then(m => ({ default: m.Projects })));

// Loading fallback component
const SectionFallback = () => <div className="min-h-screen" />;

const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />} {" "}
      {/* Silk is placed as a top-level fixed background so it covers the viewport
          and isn't clipped by transformed/positioned ancestors. Eager-loaded for immediate visual experience. */}
      <Silk speed={5} scale={1.4} color="#3E3737" noiseIntensity={1} rotation={2} />

      <div
        ref={containerRef}
        className={`min-h-screen transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        } bg-transparent text-gray-100 relative z-10`}
      >
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} isLoaded={isLoaded} />
        <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Suspense fallback={<SectionFallback />}>
          <Home isLoaded={isLoaded} />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <About />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Projects />
        </Suspense>
        <Pokemon />
      </div>
    </>
  );
};

export default App;

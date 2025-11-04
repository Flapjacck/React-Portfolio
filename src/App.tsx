import { useState, useRef } from "react";
import { LoadingScreen } from "./components/LoadingScreen";
import { Navbar } from "./components/Navbar";
import { Home } from "./components/sections/Home";
import { About } from "./components/sections/About";
import { Projects } from "./components/sections/Projects";
import { Pokemon } from "./components/Pokemon";
import { Menu } from "./components/Menu";
import Silk from "./components/Silk";
import "./App.css";

const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />} {" "}
      {/* Silk is placed as a top-level fixed background so it covers the viewport
          and isn't clipped by transformed/positioned ancestors. */}
  <Silk speed={5} scale={1.4} color="#3E3737" noiseIntensity={1} rotation={2} />

      <div
        ref={containerRef}
        className={`min-h-screen transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        } bg-transparent text-gray-100 relative z-10`}
      >
  <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} isLoaded={isLoaded} />
        <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
  <Home isLoaded={isLoaded} />
        <About />
        <Projects />
        <Pokemon />
      </div>
    </>
  );
};

export default App;

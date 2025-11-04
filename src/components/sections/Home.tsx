import { useEffect, useState } from "react";
import { SvgRow } from "../SvgRow";
import { FileText } from "lucide-react";

interface HomeProps {
  isLoaded: boolean;
}

export const Home = ({ isLoaded }: HomeProps) => {
  const [displayText, setDisplayText] = useState("");
  const [showTitle, setShowTitle] = useState(false);
  const [showRest, setShowRest] = useState(false);
  const fullText = "WLU CS Student & Full Stack Developer";

  // Start the staged animation when the app signals it's loaded
  useEffect(() => {
    if (!isLoaded) return;

    // Show the main title immediately (with a small timeout for visual rhythm)
    const titleTimer = setTimeout(() => setShowTitle(true), 50);

    // Start the typing for the subtitle
    let index = 0;
    const typingInterval = setInterval(() => {
      setDisplayText(fullText.substring(0, index));
      index++;
      if (index > fullText.length) clearInterval(typingInterval);
    }, 60);

    // Reveal the rest of the hero (subtitle, svg, buttons) shortly after the title
    const restTimer = setTimeout(() => setShowRest(true), 650);

    return () => {
      clearInterval(typingInterval);
      clearTimeout(titleTimer);
      clearTimeout(restTimer);
    };
    // fullText is constant so safe to omit from deps
  }, [isLoaded]);

  return (
    <section id="home" className="min-h-screen relative flex items-center justify-center">
      <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center">
        <div className="text-center space-y-3 md:space-y-4">
          <h1
            className={`text-5xl md:text-7xl font-bold gradient-bg bg-clip-text text-transparent leading-tight transition-all duration-700 ${
              showTitle ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-2 scale-95"
            }`}
          >
            Hey, I'm Spencer Kelly
          </h1>

          <div
            className={`text-base md:text-2xl text-gray-400 font-mono mt-1 transition-all duration-500 ${
              showRest ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
            }`}
          >
            {displayText}
            <span className="animate-blink">|</span>
          </div>

          <div className={`${showRest ? "opacity-100" : "opacity-0"} transition-opacity duration-500`}> 
            <SvgRow />

            {/* Grouped buttons: About / Projects / Resume */}
            <div className="flex flex-wrap justify-center items-center gap-3 mt-2">
              <a
                href="#about"
                className="border border-red-500/50 text-red-500 py-2 px-5 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-red-500/10 inline-flex items-center"
              >
                About Me
              </a>

              <a
                href="#projects"
                className="border border-red-500/50 text-red-500 py-2 px-5 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-red-500/10 inline-flex items-center"
              >
                View Projects
              </a>

              <a
                href="/Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-red-500/50 text-red-500 py-2 px-5 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:bg-red-500/10 inline-flex items-center gap-2"
              >
                <FileText className="w-4 h-4" />
                <span>Resume</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

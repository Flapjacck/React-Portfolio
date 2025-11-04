import { useEffect, useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import { SvgRow } from "../SvgRow";
import { FileText } from "lucide-react";

export const Home = () => {
  const [displayText, setDisplayText] = useState("");
  const fullText = "WLU CS Student & Full Stack Developer";

  useEffect(() => {
    // Delay the typing animation by 2 seconds (2000ms) to match the welcome screen
    const startDelay = setTimeout(() => {
      let index = 0;
      const typingInterval = setInterval(() => {
        setDisplayText(fullText.substring(0, index));
        index++;
        if (index > fullText.length) {
          clearInterval(typingInterval);
        }
      }, 100);

      return () => clearInterval(typingInterval);
    }, 2000);

    return () => clearTimeout(startDelay);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen relative flex items-center justify-center"
    >
      <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center pt-20">
        <RevealOnScroll>
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold gradient-bg bg-clip-text text-transparent leading-tight mb-6">
              Hey, I'm Spencer Kelly
            </h1>{" "}
            <div className="text-base md:text-2xl text-gray-400 h-8 font-mono mb-8">
              {displayText}
              <span className="animate-blink">|</span>
            </div>
            
            <SvgRow />
            
            <div className="flex justify-center space-x-4 mt-8">
              <a
                href="#about"
                className="border border-red-500/50 text-red-500 py-3 px-6 rounded font-medium transition-all duration-200 
               hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-red-500/10"
              >
                About Me
              </a>

              <a
                href="#projects"
                className="border border-red-500/50 text-red-500 py-3 px-6 rounded font-medium transition-all duration-200 
                hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-red-500/10 inline-block"
              >
                View Projects
              </a>
            </div>
            
            {/* Resume Button */}
            <div className="flex justify-center mt-4">
              <a
                href="/Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded text-sm font-medium
                          border border-red-500/50 text-red-500 bg-transparent
                          transition-all duration-200
                          hover:-translate-y-0.5 hover:bg-red-500/10"
              >
                <FileText className="w-4 h-4" />
                <span>Resume</span>
              </a>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};

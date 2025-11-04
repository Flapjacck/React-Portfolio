import { useEffect, useState } from "react";

interface LoadingScreenProps {
  onComplete: () => void;
}

export const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [text, setText] = useState("");
  const [isExiting, setIsExiting] = useState(false);
  const fullText = "<Welcome! />";

  useEffect(() => {
    // Add the class to html element
    document.documentElement.classList.add("loading-active");

    return () => {
      // Remove the class when component unmounts
      document.documentElement.classList.remove("loading-active");
    };
  }, []);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.substring(0, index));
      index++;

      if (index > fullText.length) {
        clearInterval(interval);

        // Wait a short moment with the full text visible, then start fade-out.
        const waitBeforeExit = setTimeout(() => {
          setIsExiting(true);

          // After the fade duration, notify parent to show the site content.
          const fadeDuration = 700; // match Tailwind duration-700 in ms
          const finishTimeout = setTimeout(() => {
            onComplete();
          }, fadeDuration);

          // cleanup for the finish timeout if component unmounts earlier
          return () => clearTimeout(finishTimeout);
        }, 1000);

        // cleanup for the waitBeforeExit
        return () => clearTimeout(waitBeforeExit);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 bg-transparent text-orange-100 flex items-center justify-center [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] transition-opacity duration-700 ${
        isExiting ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* semi-transparent overlay so silk background shows through but content remains readable */}
      <div className="absolute inset-0 bg-zinc-900/70 pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center justify-center">
        <div className="mb-4 text-4xl font-mono font-bold">
          {text} <span className="animate-blink ml-1"> | </span>
        </div>

        <div className="w-[200px] h-[2px] bg-zinc-800 rounded relative overflow-hidden">
          <div className="w-[40%] h-full bg-red-700 shadow-[0_0_15px_#3b82f6] animate-loading-bar"></div>
        </div>
      </div>
    </div>
  );
};

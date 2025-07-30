import { useEffect, useState } from "react";

interface LoadingScreenProps {
  onComplete: () => void;
}

export const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [text, setText] = useState("");
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

        setTimeout(() => {
          onComplete();
        }, 1000);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [onComplete]);
  return (
    <div className="fixed inset-0 z-50 bg-zinc-800 text-orange-100 flex flex-col items-center justify-center [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
      <div className="mb-4 text-4xl font-mono font-bold">
        {text} <span className="animate-blink ml-1"> | </span>
      </div>

      <div className="w-[200px] h-[2px] bg-zinc-800 rounded relative overflow-hidden">
        <div className="w-[40%] h-full bg-red-700 shadow-[0_0_15px_#3b82f6] animate-loading-bar"></div>
      </div>
    </div>
  );
};

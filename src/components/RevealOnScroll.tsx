import { useEffect, useRef } from "react";

import { ReactNode } from "react";

interface RevealOnScrollProps {
  children: ReactNode;
}

export const RevealOnScroll = ({ children }: RevealOnScrollProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (ref.current) {
            ref.current.classList.add("visible");
          }
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -50px 0px" }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  });

  return (
    <div ref={ref} className="reveal">
      {children}
    </div>
  );
};

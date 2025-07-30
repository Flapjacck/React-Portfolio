import { useEffect, useRef } from "react";

import { ReactNode } from "react";

interface RevealOnScrollProps {
  children: ReactNode;
  stagger?: boolean; // Enable staggered animation for child elements
  staggerDelay?: number; // Delay between each child animation
}

export const RevealOnScroll = ({
  children,
  stagger = false,
  staggerDelay = 150,
}: RevealOnScrollProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (ref.current) {
            if (stagger) {
              // Apply staggered animation to child elements
              const childElements =
                ref.current.querySelectorAll(".stagger-item");
              childElements.forEach((child, index) => {
                setTimeout(() => {
                  child.classList.add("visible");
                }, index * staggerDelay);
              });
            } else {
              ref.current.classList.add("visible");
            }
          }
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [stagger, staggerDelay]);

  return (
    <div ref={ref} className={stagger ? "reveal-container" : "reveal"}>
      {children}
    </div>
  );
};

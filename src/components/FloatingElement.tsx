import { ReactNode, useRef, useEffect } from "react";

interface FloatingElementProps {
  children: ReactNode;
  intensity?: number;
  className?: string;
}

export const FloatingElement = ({
  children,
  intensity = 0.5,
  className = "",
}: FloatingElementProps) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const deltaX = (e.clientX - centerX) * intensity * 0.01;
      const deltaY = (e.clientY - centerY) * intensity * 0.01;

      element.style.transform = `translate(${deltaX}px, ${deltaY}px) perspective(1000px) rotateX(${-deltaY}deg) rotateY(${deltaX}deg)`;
    };

    const handleMouseLeave = () => {
      element.style.transform =
        "translate(0px, 0px) perspective(1000px) rotateX(0deg) rotateY(0deg)";
    };

    element.addEventListener("mousemove", handleMouseMove);
    element.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      element.removeEventListener("mousemove", handleMouseMove);
      element.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [intensity]);

  return (
    <div
      ref={elementRef}
      className={`transition-transform duration-200 ease-out ${className}`}
      style={{ transformStyle: "preserve-3d" }}
    >
      {children}
    </div>
  );
};

interface ParallaxCardProps {
  children: ReactNode;
  className?: string;
  depth?: number;
}

export const ParallaxCard = ({
  children,
  className = "",
  depth = 20,
}: ParallaxCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      // Use depth prop for customizable intensity
      const deltaX = (e.clientX - centerX) * (depth * 0.01) * 0.01;
      const deltaY = (e.clientY - centerY) * (depth * 0.01) * 0.01;

      card.style.transform = `translate(${deltaX}px, ${deltaY}px) perspective(1000px) rotateX(${-deltaY}deg) rotateY(${deltaX}deg)`;
    };

    const handleMouseLeave = () => {
      card.style.transform =
        "translate(0px, 0px) perspective(1000px) rotateX(0deg) rotateY(0deg)";
    };

    card.addEventListener("mousemove", handleMouseMove);
    card.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      card.removeEventListener("mousemove", handleMouseMove);
      card.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [depth]);

  return (
    <div
      ref={cardRef}
      className={`transition-transform duration-200 ease-out ${className}`}
      style={{ transformStyle: "preserve-3d" }}
    >
      {children}
    </div>
  );
};

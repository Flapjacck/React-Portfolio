import React, { useEffect, useMemo, useRef, useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import { CardContent, CardFooter } from "../Card";
import { SkillTag } from "../SkillTag";
import { AnimatedButton, ArrowRightIcon } from "../AnimatedButton";
import { FloatingElement } from "../FloatingElement";

interface ProjectProps {
  title: string;
  description: string;
  technologies: string[];
  link: string;
  image?: string;
}

const projects: ProjectProps[] = [
  {
    title: "Simple-Blackjack",
    description:
      "Developed a simplified Blackjack game in C, enhancing skills in game logic, input validation, user interaction, control flow, and memory management.",
    technologies: ["C"],
    link: "https://github.com/Flapjacck/Simple-Blackjack",
    image:
      "https://camo.githubusercontent.com/b6a62237152e84a40e71bbbd5bb68d868d226d1a0874c232e8887f610ec9b0d4/68747470733a2f2f692e696d6775722e636f6d2f6a486f4c62314a2e706e67",
  },
  {
    title: "PassDat",
    description:
      "A sleek calculator built with JavaScript, HTML, and CSS that helps students calculate their current grades and determine what they need to pass or achieve their target score.",
    technologies: ["HTML", "CSS", "JS", "GitHub Pages"],
    link: "https://github.com/Flapjacck/PassDat",
    image:
      "https://raw.githubusercontent.com/Flapjacck/PassDat/refs/heads/main/images/PassDat-logo.png",
  },
  {
    title: "BirdWatch",
    description:
      "A web application built with React for exploring and discovering bird courses.",
    technologies: ["React", "Python", "Node.JS", "Reddit API"],
    link: "https://github.com/Flapjacck/BirdWatch",
    image:
      "https://repository-images.githubusercontent.com/965835334/14a3862f-68db-4788-8e48-c097efcb4147",
  },
  {
    title: "Portfolio Website",
    description:
      "Modern portfolio website using TypeScript, React, and Tailwind CSS, showcasing projects, skills, and experience with a sleek, responsive design.",
    technologies: ["React", "TypeScript", "Tailwind"],
    link: "https://github.com/Flapjacck/React-Portfolio",
    image: "https://i.imgur.com/FUCnYMC.jpeg",
  },
  {
    title: "Solution-Stash",
    description:
      "Repo to show my solutions for LeetCode. Most questions will be in written in the C or Java Language.",
    technologies: ["C", "Java", "MarkDown"],
    link: "https://github.com/Flapjacck/Solution-Stash",
    image:
      "https://raw.githubusercontent.com/Flapjacck/Solution-Stash/refs/heads/main/images/solutionlogo.png",
  },
  {
    title: "SKOS",
    description:
      "A bare-bones operating system kernel built from scratch in C and Assembly for x86 architecture.",
    technologies: ["C", "Assembly", "x86", "NASM", "GCC", "QEMU"],
    link: "https://github.com/Flapjacck/skos",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/1/19/C_Logo.png",
  },
  {
    title: "ScheduleApp",
    description:
      "Full-stack MERN application built with a 9-member Agile team to streamline applicant tracking and interview scheduling for 100+ club members, featuring clean TypeScript code and scalable architecture.",
    technologies: ["React", "Node.js", "MongoDB", "TypeScript", "Express"],
    link: "https://github.com/LaurierCS/ScheduleApp",
    image:
      "https://opengraph.githubassets.com/1/LaurierCS/ScheduleApp",
  },
];

// Helper: generate clones on both ends to create the infinite effect
const makeBuffer = (arr: ProjectProps[], n: number) => {
  const left = arr.slice(-n);
  const right = arr.slice(0, n);
  return [...left, ...arr, ...right];
};

export const Projects: React.FC = () => {
  // visibleCards: 1 on small screens, 3 on md+
  const [visibleCards, setVisibleCards] = useState<number>(
    typeof window !== "undefined" && window.innerWidth < 768 ? 1 : 3
  );
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [containerWidth, setContainerWidth] = useState<number>(typeof window !== "undefined" ? window.innerWidth : 0);
  const [index, setIndex] = useState<number>(visibleCards); // start at first real item in buffered array
  const [isTransitioning, setIsTransitioning] = useState<boolean>(true);

  // recompute duplicated list when visibleCards changes
  const list = useMemo(() => makeBuffer(projects, visibleCards), [visibleCards]);

  // layout in pixels to account for gaps accurately
  const GAP_PX = 24; // corresponds to tailwind gap-6 = 1.5rem = 24px

  // refs
  const trackRef = useRef<HTMLDivElement | null>(null);
  const autoplayRef = useRef<number | null>(null);

  // update visibleCards on resize
  useEffect(() => {
    const onResize = () => {
      const v = window.innerWidth < 768 ? 1 : 3;
      setVisibleCards(v);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // measure container width for pixel calculations
  useEffect(() => {
    const measure = () => {
      const w = containerRef.current ? containerRef.current.clientWidth : window.innerWidth;
      setContainerWidth(w);
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  // ensure index resets when visibleCards changes (start at first real)
  useEffect(() => {
    setIndex(visibleCards);
    // briefly disable transition while jumping to starting index
    setIsTransitioning(false);
    // re-enable next tick
    const t = setTimeout(() => setIsTransitioning(true), 20);
    return () => clearTimeout(t);
  }, [visibleCards]);

  // autoplay
  useEffect(() => {
    const start = () => {
      stop();
      autoplayRef.current = window.setInterval(() => {
        setIndex((i) => i + 1);
      }, 10000);
    };
    const stop = () => {
      if (autoplayRef.current) {
        window.clearInterval(autoplayRef.current);
        autoplayRef.current = null;
      }
    };
    start();
    return stop;
  }, [visibleCards]);

  // handle transition end: if we've moved into the cloned buffers, jump without animation
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const handleTransitionEnd = () => {
      // when index reaches right buffer end
      const total = list.length;
      const firstReal = visibleCards;
      const lastReal = total - visibleCards - 1;
      if (index > lastReal) {
        // jumped past end, reset back to equivalent real item
        const to = firstReal + ((index - firstReal) % (lastReal - firstReal + 1));
        setIsTransitioning(false);
        setIndex(to);
        // re-enable transition on next tick
        requestAnimationFrame(() => requestAnimationFrame(() => setIsTransitioning(true)));
      } else if (index < firstReal) {
        // jumped before start, reset to equivalent from end
        const len = lastReal - firstReal + 1;
        const to = lastReal - ((firstReal - index - 1) % len);
        setIsTransitioning(false);
        setIndex(to);
        requestAnimationFrame(() => requestAnimationFrame(() => setIsTransitioning(true)));
      }
    };
    track.addEventListener("transitionend", handleTransitionEnd);
    return () => track.removeEventListener("transitionend", handleTransitionEnd);
  }, [index, list.length, visibleCards]);

  // manual handlers
  const next = () => setIndex((i) => i + 1);
  const prev = () => setIndex((i) => i - 1);

  // compute pixel sizes and translate to account for gap precisely
  const centerOffset = (visibleCards - 1) / 2; // 0 for 1, 1 for 3
  const cardWidthPx = Math.max(0, (containerWidth - (visibleCards - 1) * GAP_PX) / visibleCards);
  const itemStride = cardWidthPx + GAP_PX; // distance between starts of adjacent cards
  const translatePx = -(index - centerOffset) * itemStride;
  const trackInnerWidthPx = list.length * cardWidthPx + Math.max(0, list.length - 1) * GAP_PX;

  return (
    <section id="projects" className="py-8 w-full">
      <div className="w-full">
        <RevealOnScroll>
          <h2 className="text-4xl font-bold mb-8 gradient-bg bg-clip-text text-transparent text-center">
            Projects
          </h2>
        </RevealOnScroll>

        <RevealOnScroll>
          <div className="relative">
            {/* Track */}
            <div
            ref={trackRef}
            className={`flex gap-6 items-stretch w-full overflow-hidden rounded-2xl`}
            onMouseEnter={() => {
              if (autoplayRef.current) {
                window.clearInterval(autoplayRef.current);
                autoplayRef.current = null;
              }
            }}
            onMouseLeave={() => {
              if (!autoplayRef.current) {
                autoplayRef.current = window.setInterval(() => setIndex((i) => i + 1), 10000);
              }
            }}
            onTouchStart={() => {
              if (autoplayRef.current) {
                window.clearInterval(autoplayRef.current);
                autoplayRef.current = null;
              }
            }}
            onTouchEnd={() => {
              if (!autoplayRef.current) {
                autoplayRef.current = window.setInterval(() => setIndex((i) => i + 1), 10000);
              }
            }}
          >
            {/* inner sliding track */}
            <div
              className={`flex items-stretch ${isTransitioning ? "transition-transform duration-700 ease-in-out" : ""}`}
              style={{
                width: trackInnerWidthPx ? `${trackInnerWidthPx}px` : undefined,
                transform: `translateX(${translatePx}px)`,
                gap: `${GAP_PX}px`,
              }}
            >
              {list.map((proj, i) => (
                <div
                  key={`${proj.title}-${i}`}
                  className={`flex-shrink-0`} // width set inline
                  style={{ width: `${cardWidthPx}px` }}
                >
                  <FloatingElement intensity={0.3}>
                    {/* removed mx-3 since gap on the track handles spacing; extra margin caused off-center layout */}
                    <div className="group relative h-[420px] md:h-[520px] rounded-2xl bg-gradient-to-br from-zinc-900/80 to-zinc-900/40 border border-zinc-800/50 backdrop-blur-lg transition-all duration-500 hover:shadow-[0_20px_50px_rgba(239,68,68,0.12)]">
                      {proj.image && (
                        <div className="relative h-40 md:h-56 overflow-hidden rounded-t-2xl">
                          <img loading="lazy" decoding="async" src={proj.image} alt={proj.title} className="w-full h-full object-cover object-center" />
                          <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/20 to-transparent" />
                        </div>
                      )}
                      <CardContent className="p-5 flex-1 flex flex-col">
                        <h3 className="text-xl md:text-2xl font-bold mb-2 text-red-100">{proj.title}</h3>
                        <p className="text-gray-400 text-sm md:text-base mb-3 line-clamp-3">{proj.description}</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {proj.technologies.map((t, k) => (
                            <SkillTag key={k}>{t}</SkillTag>
                          ))}
                        </div>
                        <CardFooter className="pt-3 border-t border-zinc-800/50 mt-auto">
                          <AnimatedButton href={proj.link} external icon={<ArrowRightIcon />}>
                            View Project
                          </AnimatedButton>
                        </CardFooter>
                      </CardContent>
                    </div>
                  </FloatingElement>
                </div>
              ))}
            </div>
            </div>

            {/* Controls */}
            <button onClick={prev} aria-label="Previous" className="absolute left-4 top-1/2 -translate-y-1/2 bg-zinc-800/80 hover:bg-zinc-700/80 text-white p-2 rounded-full transition-colors duration-300 z-20">
              ‹
            </button>
            <button onClick={next} aria-label="Next" className="absolute right-4 top-1/2 -translate-y-1/2 bg-zinc-800/80 hover:bg-zinc-700/80 text-white p-2 rounded-full transition-colors duration-300 z-20">
              ›
            </button>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};

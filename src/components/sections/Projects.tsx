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
  image?: string; // Optional image URL for the project
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
      "https://seeklogo.com/images/L/linux-tux-logo-8C1B4FB97E-seeklogo.com.png",
  },
  {
    title: "TBA....",
    description: "Keep a lookout for my next project!",
    technologies: ["TBA"],
    link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    image: "",
  },
];

export const Projects: React.FC = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <div className="max-w-6xl mx-auto px-4">
        <RevealOnScroll>
          <h2 className="text-4xl font-bold mb-12 gradient-bg bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>
        </RevealOnScroll>
        <RevealOnScroll stagger={true} staggerDelay={150}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <FloatingElement key={index} intensity={0.3}>
                <div
                  className="stagger-item group relative rounded-2xl bg-gradient-to-br from-zinc-900/80 to-zinc-900/40 
                           border border-zinc-800/50 hover:border-red-500/50 backdrop-blur-lg
                           transition-all duration-500
                           hover:shadow-[0_20px_50px_rgba(239,68,68,0.15),0_0_0_1px_rgba(239,68,68,0.1)]
                           before:absolute before:inset-0 before:bg-gradient-to-br before:from-red-500/5 before:to-transparent 
                           before:opacity-0 before:transition-opacity before:duration-500 hover:before:opacity-100"
                >
                  {project.image && (
                    <div className="relative h-48 overflow-hidden rounded-t-2xl">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover object-center transform group-hover:scale-110 
                               transition-transform duration-700 ease-out"
                      />
                      <div
                        className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/20 to-transparent 
                                  group-hover:from-zinc-900/90 transition-all duration-500"
                      />
                    </div>
                  )}
                  <CardContent className="p-6">
                    <div
                      className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-500/50 to-transparent 
                                opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100"
                    ></div>

                    <h3
                      className="text-2xl font-bold mb-3 text-red-100 group-hover:text-red-300 
                               transition-all duration-300 group-hover:translate-x-1"
                    >
                      {project.title}
                    </h3>

                    <p
                      className="text-gray-400 mb-4 line-clamp-3 hover:line-clamp-none 
                              transition-all duration-300 group-hover:text-gray-300 leading-relaxed"
                    >
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, key) => (
                        <SkillTag key={key}>{tech}</SkillTag>
                      ))}
                    </div>

                    <CardFooter className="pt-4 border-t border-zinc-800/50 group-hover:border-red-500/20 transition-colors duration-300">
                      <div className="flex justify-start items-center pr-12 py-2">
                        <AnimatedButton
                          href={project.link}
                          external={true}
                          icon={<ArrowRightIcon />}
                        >
                          View Project
                        </AnimatedButton>
                      </div>
                    </CardFooter>
                  </CardContent>
                </div>
              </FloatingElement>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};

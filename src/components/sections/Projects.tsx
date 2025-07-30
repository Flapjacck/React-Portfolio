import { RevealOnScroll } from "../RevealOnScroll";

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
    image: "https://i.imgur.com/bObRipr.jpeg",
  },
  {
    title: "WhoDatPokemon",
    description:
      "A Pokemon guessing game that challenges users to identify Pokemon. Integrates with PokeNode-TS for Pokemon data and features a responsive design with Tailwind CSS.",
    technologies: ["React", "TypeScript", "Tailwind", "PokeNode-TS"],
    link: "https://github.com/Flapjacck/WhoDatPokemon",
    image: "https://i.imgur.com/cZAGCwC.jpeg",
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
              <div
                key={index}
                className="stagger-item group relative overflow-hidden rounded-xl bg-zinc-900/50 border border-zinc-800 hover:border-red-500/30 
                         transition-all duration-300 hover:shadow-[0_8px_30px_rgb(255,0,0,0.12)] backdrop-blur-sm"
              >
                {project.image && (
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent opacity-60" />
                  </div>
                )}
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 text-red-100 group-hover:text-red-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4 line-clamp-3 hover:line-clamp-none transition-all duration-200">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, key) => (
                      <span
                        key={key}
                        className="bg-red-500/10 text-red-400 py-1 px-3 rounded-full text-sm 
                                 hover:bg-red-500/20 hover:shadow-[0_2px_8px_rgba(255,0,0,0.2)] transition-all"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between items-center">
                    <a
                      href={project.link}
                      className="inline-flex items-center text-red-400 hover:text-red-300 transition-colors group-hover:translate-x-1 duration-200"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Project
                      <svg
                        className="w-4 h-4 ml-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};

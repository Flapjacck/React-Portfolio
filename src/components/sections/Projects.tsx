import { RevealOnScroll } from "../RevealOnScroll";

interface ProjectProps {
  title: string;
  description: string;
  technologies: string[];
  link: string;
}

const projects: ProjectProps[] = [
  {
    title: "Simple-Blackjack",
    description:
      "Developed a simplified Blackjack game in C, enhancing skills in game logic, input validation, user interaction, control flow, and memory management.",
    technologies: ["C"],
    link: "https://github.com/Flapjacck/Simple-Blackjack",
  },
  {
    title: "PassDat",
    description:
      "A sleek calculator built with JavaScript, HTML, and CSS that helps students calculate their current grades and determine what they need to pass or achieve their target score.",
    technologies: ["HTML", "CSS", "JS", "GitHub Pages"],
    link: "https://github.com/Flapjacck/PassDat",
  },
  {
    title: "Solution-Stash",
    description:
      "Repo to show my solutions for LeetCode. Most questions will be in written in the C or Java Language.",
    technologies: ["C", "Java", "MarkDown"],
    link: "https://github.com/Flapjacck/Solution-Stash",
  },
  {
    title: "Portfolio Website",
    description:
      "Modern portfolio website using TypeScript, React, and Tailwind CSS, showcasing projects, skills, and experience with a sleek, responsive design.",
    technologies: ["React", "TypeScript", "Tailwind"],
    link: "https://github.com/Flapjacck/React-Portfolio",
  },
];

export const Projects: React.FC = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 gradient-bg bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-red-500/30 hover:shadow-[0_2px_8px_rgba(255,0,0,0.3)] transition"
              >
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-red-500/10 text-red-500 py-1 px-3 rounded-full text-sm hover:bg-red-500/20 hover:shadow-[0_2px_8px_rgba(255,0,0,0.2)] transition-all"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <a
                    href={project.link}
                    className="text-red-400 hover:text-red-300 transition-colors my-4"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Project →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

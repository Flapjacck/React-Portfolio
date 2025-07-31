import { RevealOnScroll } from "../RevealOnScroll";
import { SkillGroup } from "../SkillTag";

interface ExperienceProps {
  title: string;
  description: string;
}

interface EducationProps {
  degree: string;
  institution: string;
  year: string;
  coursework: string;
}

const frontendSkills: string[] = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Tailwind",
  "Vite",
  "Vercel",
];

const backendSkills: string[] = [
  "Java",
  "Node.js",
  "Python",
  "NPM",
  "Azure",
  "Git",
  "C/C++",
  "SQL",
  "FastAPI",
  "Docker",
  "Express JS",
  "Linux",
  "Render",
  "Pytorch",
];

const education: EducationProps = {
  degree: "B.S. in Computer Science",
  institution: "Wilfrid Laurier University",
  year: "2023-2027",
  coursework:
    "Data Structures, Object-Oriented Programming, Intro to Microprocessors...",
};

const experiences: ExperienceProps[] = [
  {
    title: "Open to Opportunities",
    description:
      "Currently open to internship roles and computer science related experiences to apply my skills and continue growing as a developer.",
  },
  {
    title: "",
    description: "",
  },
];

export const About: React.FC = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 gradient-bg bg-clip-text text-transparent text-center">
            About Me
          </h2>

          <div
            className="rounded-2xl p-8 border-zinc-800/50 border bg-gradient-to-br from-zinc-900/80 to-zinc-900/40 
                         backdrop-blur-lg hover:border-red-500/50 
                         hover:shadow-[0_20px_50px_rgba(239,68,68,0.15),0_0_0_1px_rgba(239,68,68,0.1)]
                         transition-all duration-500 mb-8 group relative overflow-hidden
                         hover:transform hover:-translate-y-1 hover:scale-[1.01]
                         before:absolute before:inset-0 before:bg-gradient-to-br before:from-red-500/5 before:to-transparent 
                         before:opacity-0 before:transition-opacity before:duration-500 hover:before:opacity-100"
          >
            <div className="relative z-10">
              <p className="text-gray-300 mb-8 text-lg leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                Thrid year student at Wilfrid Laurier University exploring the
                ways computer science can change our world. My love and passion
                for everything tech motivates me throughout this journey.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div
                  className="rounded-xl p-6 bg-gradient-to-br from-zinc-800/50 to-zinc-800/20 
                           border border-zinc-700/50 hover:border-red-500/40 backdrop-blur-sm
                           transition-all duration-500 ease-out group/skill
                           hover:shadow-[0_10px_30px_rgba(239,68,68,0.1)]
                           hover:transform hover:-translate-y-1 hover:scale-[1.02]
                           before:absolute before:inset-0 before:bg-gradient-to-br before:from-red-500/5 before:to-transparent 
                           before:opacity-0 before:transition-opacity before:duration-500 hover:before:opacity-100
                           relative overflow-hidden"
                >
                  <div className="relative z-10">
                    <SkillGroup
                      title="Frontend"
                      skills={frontendSkills}
                      icon="🎨"
                    />
                  </div>
                </div>

                <div
                  className="rounded-xl p-6 bg-gradient-to-br from-zinc-800/50 to-zinc-800/20 
                           border border-zinc-700/50 hover:border-red-500/40 backdrop-blur-sm
                           transition-all duration-500 ease-out group/skill
                           hover:shadow-[0_10px_30px_rgba(239,68,68,0.1)]
                           hover:transform hover:-translate-y-1 hover:scale-[1.02]
                           before:absolute before:inset-0 before:bg-gradient-to-br before:from-red-500/5 before:to-transparent 
                           before:opacity-0 before:transition-opacity before:duration-500 hover:before:opacity-100
                           relative overflow-hidden"
                >
                  <div className="relative z-10">
                    <SkillGroup
                      title="Backend"
                      skills={backendSkills}
                      icon="⚙️"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div
              className="rounded-xl p-6 bg-gradient-to-br from-zinc-900/80 to-zinc-900/40 backdrop-blur-lg
                          border border-zinc-800/50 hover:border-red-500/50 
                          hover:shadow-[0_20px_50px_rgba(239,68,68,0.15),0_0_0_1px_rgba(239,68,68,0.1)]
                          transition-all duration-500 group/education relative overflow-hidden
                          hover:transform hover:-translate-y-2 hover:scale-[1.02]
                          before:absolute before:inset-0 before:bg-gradient-to-br before:from-red-500/5 before:to-transparent 
                          before:opacity-0 before:transition-opacity before:duration-500 hover:before:opacity-100"
            >
              <div className="relative z-10">
                <h3
                  className="text-2xl font-bold mb-6 flex items-center gap-3 text-red-100 
                             group-hover/education:text-red-300 transition-all duration-300 
                             group-hover/education:translate-x-1"
                >
                  <span className="text-3xl group-hover/education:scale-110 transition-transform duration-300">
                    🏫
                  </span>
                  Education
                </h3>

                <ul className="space-y-6 text-gray-300">
                  <li className="transform transition-all duration-300 group-hover/education:translate-x-2">
                    <div
                      className="font-semibold text-lg text-red-100/90 mb-2 
                                  group-hover/education:text-red-200 transition-colors duration-300"
                    >
                      {education.degree}
                    </div>
                    <div className="text-gray-400 group-hover/education:text-gray-300 transition-colors duration-300 flex items-center gap-2">
                      <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                      {education.institution} • {education.year}
                    </div>
                  </li>
                  <li
                    className="text-gray-400 transform transition-all duration-300 group-hover/education:translate-x-2 
                               group-hover/education:text-gray-300"
                  >
                    <div className="flex items-start gap-2 mb-2">
                      <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                      <div>
                        <span className="text-red-400/80 font-medium group-hover/education:text-red-300 transition-colors duration-300">
                          Relevant Coursework:
                        </span>
                        <p className="mt-1">{education.coursework}</p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div
              className="rounded-xl p-6 bg-gradient-to-br from-zinc-900/80 to-zinc-900/40 backdrop-blur-lg
                          border border-zinc-800/50 hover:border-red-500/50 
                          hover:shadow-[0_20px_50px_rgba(239,68,68,0.15),0_0_0_1px_rgba(239,68,68,0.1)]
                          transition-all duration-500 group/work relative overflow-hidden
                          hover:transform hover:-translate-y-2 hover:scale-[1.02]
                          before:absolute before:inset-0 before:bg-gradient-to-br before:from-red-500/5 before:to-transparent 
                          before:opacity-0 before:transition-opacity before:duration-500 hover:before:opacity-100"
            >
              <div className="relative z-10">
                <h3
                  className="text-2xl font-bold mb-6 flex items-center gap-3 text-red-100 
                             group-hover/work:text-red-300 transition-all duration-300 
                             group-hover/work:translate-x-1"
                >
                  <span className="text-3xl group-hover/work:scale-110 transition-transform duration-300">
                    💼
                  </span>
                  Work
                </h3>

                <div className="space-y-6 text-gray-300">
                  {experiences.map((exp, index) => (
                    <div
                      key={index}
                      className="transform transition-all duration-300 group-hover/work:translate-x-2"
                    >
                      {exp.title && (
                        <h4
                          className="font-semibold text-lg text-red-100/90 mb-2 
                                     group-hover/work:text-red-200 transition-colors duration-300 flex items-center gap-2"
                        >
                          <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                          {exp.title}
                        </h4>
                      )}
                      <p
                        className={`text-gray-400 group-hover/work:text-gray-300 transition-colors duration-300 ${
                          exp.title ? "ml-4" : ""
                        }`}
                      >
                        {exp.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

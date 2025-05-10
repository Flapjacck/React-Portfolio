import { RevealOnScroll } from "../RevealOnScroll";

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
];

const backendSkills: string[] = [
  "Java",
  "Node.js",
  "Python",
  "NPM",
  "Azure",
  "Git",
  "C/C++",
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
    title: "Seeking Internship Opportunities",
    description:
      "Looking for a summer internship to apply my skills and gain experience in software development.",
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
            className="rounded-2xl p-8 border-zinc-800 border bg-zinc-900/50 backdrop-blur-sm 
                         hover:border-red-500/30 hover:shadow-[0_8px_30px_rgb(255,0,0,0.12)] 
                         transition-all duration-300 mb-8 group"
          >
            <p className="text-gray-300 mb-8 text-lg leading-relaxed">
              Thrid year student at Wilfrid Laurier University exploring the
              ways computer science can change our world. My love and passion
              for everything tech motivates me throughout this journey.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { title: "Frontend", skills: frontendSkills },
                { title: "Backend", skills: backendSkills },
              ].map((section, index) => (
                <div
                  key={index}
                  className="rounded-xl p-6 bg-zinc-800/30 hover:bg-zinc-800/50
                           border border-zinc-700/50 hover:border-red-500/30
                           transition-all duration-300 group-hover:translate-y-[-2px]"
                >
                  <h3 className="text-xl font-bold mb-4 text-red-100 group-hover:text-red-400 transition-colors">
                    {section.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {section.skills.map((tech, key) => (
                      <span
                        key={key}
                        className="bg-red-500/10 text-red-400 py-1.5 px-4 rounded-full text-sm
                                 hover:bg-red-500/20 hover:shadow-[0_2px_8px_rgba(255,0,0,0.2)] 
                                 transition-all transform hover:scale-105"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div
              className="rounded-xl p-6 bg-zinc-900/50 backdrop-blur-sm
                          border border-zinc-800 hover:border-red-500/30 
                          hover:shadow-[0_8px_30px_rgb(255,0,0,0.12)]
                          transition-all duration-300 group"
            >
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 text-red-100 group-hover:text-red-400 transition-colors">
                <span className="text-3xl">🏫</span> Education
              </h3>
              <ul className="space-y-4 text-gray-300">
                <li className="transform transition-all duration-300 group-hover:translate-x-1">
                  <div className="font-semibold text-lg text-red-100/90 mb-1">
                    {education.degree}
                  </div>
                  <div className="text-gray-400">
                    {education.institution} • {education.year}
                  </div>
                </li>
                <li className="text-gray-400 transform transition-all duration-300 group-hover:translate-x-1">
                  <span className="text-red-400/80">Relevant Coursework:</span>
                  <br />
                  {education.coursework}
                </li>
              </ul>
            </div>

            <div
              className="rounded-xl p-6 bg-zinc-900/50 backdrop-blur-sm
                          border border-zinc-800 hover:border-red-500/30 
                          hover:shadow-[0_8px_30px_rgb(255,0,0,0.12)]
                          transition-all duration-300 group"
            >
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 text-red-100 group-hover:text-red-400 transition-colors">
                <span className="text-3xl">💼</span> Work
              </h3>
              <div className="space-y-4 text-gray-300">
                {experiences.map((exp, index) => (
                  <div
                    key={index}
                    className="transform transition-all duration-300 group-hover:translate-x-1"
                  >
                    <h4 className="font-semibold text-lg text-red-100/90 mb-1">
                      {exp.title}
                    </h4>
                    <p className="text-gray-400">{exp.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

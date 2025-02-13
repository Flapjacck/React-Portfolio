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
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-red-600 to-red-200 bg-clip-text text-transparent text-center">
            About Me
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 hover:shadow-[0_2px_8px_rgba(255,0,0,0.3)] transition-all">
            <p className="text-gray-300 mb-6">
              Second year student at Wilfrid Laurier University exploring the
              ways computer science can change our world. My love and passion
              for everything tech motivates me throughout this journey.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: "Frontend", skills: frontendSkills },
                { title: "Backend", skills: backendSkills },
              ].map((section, index) => (
                <div
                  key={index}
                  className="rounded-xl p-6 hover:-translate-y-1 transition-all"
                >
                  <h3 className="text-xl font-bold mb-4">{section.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {section.skills.map((tech, key) => (
                      <span
                        key={key}
                        className="bg-red-500/10 text-red-500 py-1 px-3 rounded-full text-sm hover:bg-red-500/20 hover:shadow-[0_2px_8px_rgba(255,0,0,0.2)] transition"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 hover:shadow-[0_2px_8px_rgba(255,0,0,0.3)] transition-all">
              <h3 className="text-xl font-bold mb-4"> 🏫 Education </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong>{education.degree}</strong> - {education.institution}{" "}
                  ({education.year})
                </li>
                <li>Relevant Coursework: {education.coursework}</li>
              </ul>
            </div>

            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 hover:shadow-[0_2px_8px_rgba(255,0,0,0.3)] transition-all">
              <h3 className="text-xl font-bold mb-4"> 💼 Work </h3>
              <div className="space-y-4 text-gray-300">
                {experiences.map((exp, index) => (
                  <div key={index}>
                    <h4 className="font-semibold">{exp.title}</h4>
                    <p>{exp.description}</p>
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

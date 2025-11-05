import { useState, useRef, useEffect } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import { Code2, Rocket, Cloud, Wrench, Laptop, GraduationCap, Sparkles, Briefcase } from "lucide-react";

/* ========================================
   TYPESCRIPT INTERFACES
   ======================================== */

/**
 * Interface for individual work experience entries
 * @property company - Company name
 * @property role - Job title/position
 * @property location - Work location (city, state/province)
 * @property period - Employment duration (e.g., "May 2024 – Aug 2024")
 * @property logo - URL to company logo image
 * @property description - Brief description of role and achievements (optional)
 * @property bullets - Array of bullet points detailing responsibilities (optional)
 */
interface WorkExperienceProps {
  company: string;
  role: string;
  location: string;
  period: string;
  logo: string;
  description?: string;
  bullets?: string[];
}

/**
 * Interface for education information
 */
interface EducationProps {
  degree: string;
  institution: string;
  year: string;
  coursework: string;
}

/* ========================================
   TECHNICAL SKILLS DATA
   Based on resume technical skills section
   ======================================== */

/**
 * Technical Skills organized by category (matching resume format)
 * Each category contains skills as per resume
 */

interface SkillCategory {
  name: string;
  icon: React.ReactNode;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    name: "Languages",
    icon: <Code2 className="w-5 h-5" />,
    skills: [
      "Python",
      "JavaScript",
      "TypeScript",
      "C",
      "Assembly",
      "Java",
      "HTML5",
      "CSS3",
      "Markdown",
      "VBA",
      "SQL",
      "Bash",
    ],
  },
  {
    name: "Frameworks",
    icon: <Rocket className="w-5 h-5" />,
    skills: [
      "React",
      "Next.js",
      "Node.js",
      "Express.js",
      "FastAPI",
      "Tailwind CSS",
      "Flask",
      "Vite",
    ],
  },
  {
    name: "Data & DevOps",
    icon: <Cloud className="w-5 h-5" />,
    skills: [
      "MongoDB",
      "PostgreSQL",
      "Redis",
      "SQLite",
      "Azure",
      "Vercel",
      "Render",
      "Nginx",
      "AWS",
    ],
  },
  {
    name: "Tools & Libraries",
    icon: <Wrench className="w-5 h-5" />,
    skills: [
      "Git",
      "GitHub",
      "Linux",
      "QEMU",
      "PyTorch",
      "TensorFlow",
      "JWT",
      "PNPM",
      "VS Code",
      "Docker",
    ],
  },
];


/* ========================================
   EDUCATION DATA
   ======================================== */

const education: EducationProps = {
  degree: "B.S. in Computer Science",
  institution: "Wilfrid Laurier University",
  year: "2023-2027",
  coursework:
    "Data Structures, Object-Oriented Programming, Intro to Microprocessors...",
};

/* ========================================
   WORK EXPERIENCE DATA
   To add new experiences: Add to the array below
   Set isCurrent: true for your current role
   ======================================== */

/**
 * Work experience entries - ordered chronologically (most recent first)
 * Current position should have isCurrent: true
 * Previous positions will appear in the collapsible "Previous Experience" section
 */
const workExperiences: (WorkExperienceProps & { isCurrent?: boolean })[] = [
  // CURRENT POSITION
  {
    company: "Laurier Computing Society",
    role: "Software Engineer",
    location: "Waterloo, Ontario",
    period: "Sept 2025 – Present",
    logo: "https://media.licdn.com/dms/image/v2/D4E0BAQE07j6tPDi_EA/company-logo_100_100/B4EZlPDVPoGwAQ-/0/1757967897896/lauriercs_logo?e=1763596800&v=beta&t=n6GEpv4Or2CBOSwR3wxhON6AsV9EPyIMwP_O0CDIEIY",
    description: "Developing full-stack MERN applications for 100+ club members, contributing to open-source projects in an Agile team environment.",
    isCurrent: true,
  },
  
  // PREVIOUS POSITIONS
  {
    company: "Super Sucker Hydro Vac Service Inc.",
    role: "Mobile Parts and Inventory",
    location: "Hamilton, Ontario",
    period: "April 2025 – Aug 2025",
    logo: "https://media.licdn.com/dms/image/v2/C4D0BAQEvzDtnxZmcnQ/company-logo_100_100/company-logo_100_100/0/1631313389938?e=1763596800&v=beta&t=lTNzVCeyFNhu-Tanjv1kWOJ2z5oRkmt26SWQQ7w7VW4",
    description: "Managed $500K+ inventory across 7 yards and optimized delivery routes, reducing equipment downtime by 15%.",
  },
  {
    company: "Ox-Fleet Care",
    role: "Yard Cleaner",
    location: "Hamilton, Ontario",
    period: "May 2024 – Aug 2024",
    logo: "https://media.licdn.com/dms/image/v2/C560BAQFCxplEJejF-g/company-logo_100_100/company-logo_100_100/0/1630623779194/ox_equipment_logo?e=1763596800&v=beta&t=ciIigAdtynEtCMz-VTarCdrk2FRAFdXuorKJrIbwNhU",
    description: "Streamlined yard maintenance by reorganizing workflows, achieving a 50% reduction in overall completion time through proactive problem-solving and continuous monitoring.",
  },
  {
    company: "Walmart",
    role: "Dairy Frozen Associate",
    location: "Ancaster, Ontario",
    period: "May 2021 – Aug 2023",
    logo: "https://media.licdn.com/dms/image/v2/C560BAQHs5FN9hz6seQ/company-logo_100_100/company-logo_100_100/0/1654192383329/wal_mart_canada_logo?e=1763596800&v=beta&t=CMT3nI_bSaqbL79bq3Kh-IsYX1vZszluMWxSye6mfc0",
    description: "Assisted customers and maintained stocked displays while upholding health, safety, and cold chain compliance standards in a fast-paced retail environment.",
  },
];



/* ========================================
   ABOUT SECTION COMPONENT
   Main component that renders the About Me section
   ======================================== */

export const About: React.FC = () => {
  // State to track which skill category is currently selected
  const [selectedCategory, setSelectedCategory] = useState<number>(0);
  
  // State to track which work experience is currently displayed (0 = most recent)
  const [currentWorkIndex, setCurrentWorkIndex] = useState<number>(0);
  
  // State to track the direction of navigation for animations
  const [direction, setDirection] = useState<'up' | 'down'>('down');
  
  // Scroll debounce state to prevent rapid scrolling
  const [isScrolling, setIsScrolling] = useState<boolean>(false);
  
  // Ref for the work experience container
  const workExpRef = useRef<HTMLDivElement>(null);
  
  // All experiences for timeline (current + previous)
  const allExperiences = workExperiences;
  
  /**
   * Navigate to next work experience
   */
  const goToNext = () => {
    if (currentWorkIndex < allExperiences.length - 1 && !isScrolling) {
      setDirection('down');
      setCurrentWorkIndex(currentWorkIndex + 1);
      setIsScrolling(true);
      setTimeout(() => setIsScrolling(false), 800); // 800ms delay
    }
  };
  
  /**
   * Navigate to previous work experience
   */
  const goToPrevious = () => {
    if (currentWorkIndex > 0 && !isScrolling) {
      setDirection('up');
      setCurrentWorkIndex(currentWorkIndex - 1);
      setIsScrolling(true);
      setTimeout(() => setIsScrolling(false), 800); // 800ms delay
    }
  };
  
  /**
   * Handle mouse wheel scrolling within work experience section
   */
  useEffect(() => {
    const workExpElement = workExpRef.current;
    if (!workExpElement) return;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      e.stopPropagation();
      
      if (isScrolling) return;
      
      if (e.deltaY > 0) {
        // Scrolling down - navigate to next
        if (currentWorkIndex < allExperiences.length - 1 && !isScrolling) {
          setDirection('down');
          setCurrentWorkIndex(currentWorkIndex + 1);
          setIsScrolling(true);
          setTimeout(() => setIsScrolling(false), 800);
        }
      } else {
        // Scrolling up - navigate to previous
        if (currentWorkIndex > 0 && !isScrolling) {
          setDirection('up');
          setCurrentWorkIndex(currentWorkIndex - 1);
          setIsScrolling(true);
          setTimeout(() => setIsScrolling(false), 800);
        }
      }
    };

    workExpElement.addEventListener('wheel', handleWheel, { passive: false });
    
    return () => {
      workExpElement.removeEventListener('wheel', handleWheel);
    };
  }, [currentWorkIndex, isScrolling, allExperiences.length]);

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-6xl mx-auto px-4">
          {/* Section Title */}
          <h2 className="text-4xl font-bold mb-12 gradient-bg gradient-glow bg-clip-text text-transparent text-center">
            About Me
          </h2>

          {/* ===== HERO CARD - Introduction & Headshot ===== */}
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
              {/* Flex container for headshot and bio */}
              <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
                {/* Headshot Image */}
                <div className="flex-shrink-0">
                  <div
                    className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-red-500/30 
                                 hover:border-red-500/60 transition-all duration-500
                                 hover:shadow-[0_0_30px_rgba(239,68,68,0.3)]"
                  >
                    <img
                      src="/Headshot.JPEG"
                      alt="Professional headshot"
                      className="w-full h-full object-cover"
                      loading="eager"
                      style={{
                        imageRendering: 'crisp-edges',
                        WebkitFontSmoothing: 'antialiased',
                        backfaceVisibility: 'hidden',
                        transform: 'translateZ(0)',
                        objectFit: 'cover',
                        objectPosition: 'center',
                      }}
                      width="192"
                      height="192"
                    />
                    </div>
                  </div>

                  {/* Bio Text */}
                  <div className="flex-1 text-center md:text-left">
                    <p className="text-gray-300 text-lg leading-relaxed group-hover:text-gray-200 transition-colors duration-300 mb-4">
                      Third year student at Wilfrid Laurier University exploring
                      the ways computer science can change our world. My love and
                      passion for everything tech motivates me throughout this
                      journey.
                    </p>
                  
                    {/* Open to Opportunities Badge */}
                    <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-3 hover:bg-green-500/20 transition-all duration-300">
                      <p className="text-green-400 text-sm font-medium text-center md:text-left">
                        Open to internship opportunities and computer science related experiences
                      </p>
                    </div>
                  </div>
                </div>

              {/* ===== TECHNICAL SKILLS SECTION ===== */}
              <div className="mt-8">
                <h3 className="text-2xl font-bold mb-6 text-red-100 flex items-center gap-3">
                  <Laptop className="w-7 h-7" />
                  Technical Skills
                </h3>

                {/* Category Buttons */}
                <div className="flex flex-wrap gap-3 mb-6 justify-center md:justify-start">
                  {skillCategories.map((category, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedCategory(index)}
                      className={`group/btn flex items-center gap-2 px-6 py-3 rounded-lg font-semibold
                                transition-all duration-300 border-2
                                ${
                                  selectedCategory === index
                                    ? "bg-red-500/20 border-red-500 text-red-300 shadow-[0_8px_16px_rgba(239,68,68,0.3)]"
                                    : "bg-zinc-800/50 border-zinc-700/50 text-gray-400 hover:border-red-500/50 hover:text-red-400 hover:bg-red-500/10"
                                }
                                hover:scale-105 hover:-translate-y-1
                                ${selectedCategory === index ? "scale-105" : ""}
                                relative overflow-hidden`}
                    >
                      {/* Animated background on active */}
                      {selectedCategory === index && (
                        <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 via-red-500/20 to-red-500/10 animate-shimmer" />
                      )}
                      
                      <span className="group-hover/btn:scale-110 transition-transform duration-300 relative z-10">
                        {category.icon}
                      </span>
                      <span className="relative z-10">{category.name}</span>
                    </button>
                  ))}
                </div>

                {/* Skills Grid - Animated based on selected category */}
                <div className="relative min-h-[200px]">
                  {skillCategories.map((category, index) => (
                    <div
                      key={index}
                      className={`transition-all duration-500 ease-in-out
                                ${
                                  selectedCategory === index
                                    ? "opacity-100 translate-y-0 relative"
                                    : "opacity-0 translate-y-4 absolute inset-0 pointer-events-none"
                                }`}
                    >
                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                        {category.skills.map((skill, skillIndex) => (
                          <div
                            key={skillIndex}
                            className={`group/tag bg-gradient-to-br from-zinc-800/60 to-zinc-800/30 
                                     border border-zinc-700/50 rounded-lg p-3
                                     hover:border-red-500/50 hover:bg-red-500/10
                                     transition-all duration-300 hover:scale-[1.02]
                                     hover:shadow-[0_4px_8px_rgba(239,68,68,0.15)]
                                     cursor-default text-center
                                     ${selectedCategory === index ? "reveal-scale visible" : ""}`}
                            style={{
                              transitionDelay: `${skillIndex * 30}ms`,
                            }}
                          >
                            <span className="text-sm font-medium text-gray-300 group-hover/tag:text-red-300 transition-colors">
                              {skill}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ===== BOTTOM GRID - Education & Work Experience ===== */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* ===== LEFT COLUMN - Education & Personal Interests ===== */}
            <div className="space-y-8">
              {/* ===== EDUCATION CARD ===== */}
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
                    <GraduationCap className="w-7 h-7 group-hover/education:scale-110 transition-transform duration-300" />
                    Education
                  </h3>

                  <ul className="space-y-4 text-gray-300">
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
                  </ul>
                </div>
              </div>

              {/* ===== PERSONAL INTERESTS CARD ===== */}
              <div
                className="rounded-xl p-6 bg-gradient-to-br from-zinc-900/80 to-zinc-900/40 backdrop-blur-lg
                            border border-zinc-800/50 hover:border-red-500/50 
                            hover:shadow-[0_20px_50px_rgba(239,68,68,0.15),0_0_0_1px_rgba(239,68,68,0.1)]
                            transition-all duration-500 group/interests relative overflow-hidden
                            hover:transform hover:-translate-y-2 hover:scale-[1.02]
                            before:absolute before:inset-0 before:bg-gradient-to-br before:from-red-500/5 before:to-transparent 
                            before:opacity-0 before:transition-opacity before:duration-500 hover:before:opacity-100"
              >
                <div className="relative z-10">
                  <h3
                    className="text-2xl font-bold mb-6 flex items-center gap-3 text-red-100 
                               group-hover/interests:text-red-300 transition-all duration-300 
                               group-hover/interests:translate-x-1"
                  >
                    <Sparkles className="w-7 h-7 group-hover/interests:scale-110 transition-transform duration-300" />
                    Personal Interests
                  </h3>

                  <div className="text-gray-300 transform transition-all duration-300 group-hover/interests:translate-x-2 group-hover/interests:text-gray-200">
                    <p className="leading-relaxed">
                      Interested in manga, gaming, and music, with strong enthusiasm for computer hardware, home servers, and investing.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* ===== RIGHT COLUMN - Work Experience ===== */}
            {/* ===== WORK EXPERIENCE CARD ===== */}
            <div
              ref={workExpRef}
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
                  <Briefcase className="w-7 h-7 group-hover/work:scale-110 transition-transform duration-300" />
                  Work Experience
                </h3>

                {/* Timeline Container */}
                <div className="relative mt-2 overflow-hidden">
                  {/* Timeline on the left - absolutely positioned and animated, hidden on mobile */}
                  <div 
                    className="absolute left-4 hidden md:flex flex-col items-center transition-transform duration-500"
                    style={{
                      top: '100px',
                      transform: `translateY(-${currentWorkIndex * 180}px)`
                    }}
                  >
                    {allExperiences.map((_, index) => (
                      <div key={index} className="flex flex-col items-center">
                        {/* Timeline Dot */}
                        <div
                          className={`w-4 h-4 rounded-full border-2 transition-all duration-500 cursor-pointer flex-shrink-0
                                    ${
                                      index === currentWorkIndex
                                        ? "bg-red-500 border-red-500 scale-125 shadow-[0_0_12px_rgba(239,68,68,0.6)]"
                                        : index < currentWorkIndex
                                        ? "bg-red-500/50 border-red-500/50"
                                        : "bg-zinc-800 border-zinc-700"
                                    }`}
                          onClick={() => {
                            if (!isScrolling) {
                              setDirection(index > currentWorkIndex ? 'down' : 'up');
                              setCurrentWorkIndex(index);
                              setIsScrolling(true);
                              setTimeout(() => setIsScrolling(false), 800);
                            }
                          }}
                        />
                        
                        {/* Connecting line between dots */}
                        {index < allExperiences.length - 1 && (
                          <div className="w-0.5 h-[172px] bg-zinc-700/50 relative">
                            {/* Red progress fill */}
                            <div
                              className="absolute top-0 left-0 w-full bg-gradient-to-b from-red-500 to-red-600 transition-all duration-500"
                              style={{
                                height: index < currentWorkIndex ? '100%' : '0%',
                              }}
                            />
                          </div>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Experience Cards Container with Navigation */}
                  <div className="md:pl-12">
                      {/* Up Arrow - Navigate to Previous */}
                      <div className="flex justify-center mb-2">
                        <button
                          onClick={goToPrevious}
                          disabled={currentWorkIndex === 0 || isScrolling}
                          className={`transition-all duration-300
                                    ${
                                      currentWorkIndex === 0 || isScrolling
                                        ? "opacity-20 cursor-not-allowed text-gray-600"
                                        : "text-gray-400 hover:text-red-400 hover:-translate-y-1 hover:scale-110"
                                    }`}
                        >
                          <svg
                            className="w-6 h-6 transition-transform duration-300"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 15l7-7 7 7"
                            />
                          </svg>
                        </button>
                      </div>

                      {/* Experience Cards - Responsive height container */}
                      <div className="h-[280px] sm:h-[240px] md:h-[200px] relative overflow-hidden">
                        {allExperiences.map((exp, index) => (
                          <div
                            key={index}
                            className={`absolute inset-0 transition-all duration-500 ease-in-out
                                      ${
                                        index === currentWorkIndex
                                          ? "opacity-100 translate-y-0 z-10"
                                          : direction === 'down'
                                          ? index < currentWorkIndex
                                            ? "opacity-0 -translate-y-8 z-0 pointer-events-none" // Previous cards go up
                                            : "opacity-0 translate-y-8 z-0 pointer-events-none"   // Next cards come from below
                                          : // direction === 'up'
                                            index < currentWorkIndex
                                            ? "opacity-0 -translate-y-8 z-0 pointer-events-none" // Previous cards come from above
                                            : "opacity-0 translate-y-8 z-0 pointer-events-none"   // Next cards go down
                                      }`}
                          >
                            <WorkExperienceCard
                              experience={exp}
                              isCurrent={exp.isCurrent || false}
                            />
                          </div>
                        ))}
                      </div>

                      {/* Down Arrow - Navigate to Next */}
                      <div className="flex justify-center mt-2">
                        <button
                          onClick={goToNext}
                          disabled={currentWorkIndex === allExperiences.length - 1 || isScrolling}
                          className={`transition-all duration-300
                                    ${
                                      currentWorkIndex === allExperiences.length - 1 || isScrolling
                                        ? "opacity-20 cursor-not-allowed text-gray-600"
                                        : "text-gray-400 hover:text-red-400 hover:translate-y-1 hover:scale-110"
                                    }`}
                        >
                          <svg
                            className="w-6 h-6 transition-transform duration-300"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </RevealOnScroll>
    </section>
  );
};

/* ========================================
   WORK EXPERIENCE CARD COMPONENT
   Reusable component for displaying individual work experiences
   ======================================== */

interface WorkExperienceCardProps {
  experience: WorkExperienceProps;
  isCurrent: boolean;
}

/**
 * Displays a single work experience with company logo, role, and description
 * @param experience - Work experience data
 * @param isCurrent - Whether this is the current position (affects styling)
 */
const WorkExperienceCard: React.FC<WorkExperienceCardProps> = ({
  experience,
  isCurrent,
}) => {
  return (
    <div
      className={`rounded-lg p-4 sm:p-4 transition-all duration-300 hover:scale-[1.02] flex flex-col h-full
                  ${
                    isCurrent
                      ? "bg-red-500/10 border border-red-500/30 hover:bg-red-500/15 hover:border-red-500/50"
                      : "bg-zinc-800/30 border border-zinc-700/30 hover:bg-zinc-800/50 hover:border-zinc-600/50"
                  }`}
    >
      <div className="flex items-start gap-3 sm:gap-4 flex-1">
        {/* Company Logo */}
        <div className="flex-shrink-0">
          <img
            src={experience.logo}
            alt={`${experience.company} logo`}
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg object-cover border border-zinc-700/50 
                     hover:border-red-500/50 transition-all duration-300 hover:scale-110"
            onError={(e) => {
              // Fallback if logo fails to load
              e.currentTarget.src =
                "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect fill='%23333' width='100' height='100'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%23999' font-size='40' font-family='Arial'%3E?%3C/text%3E%3C/svg%3E";
            }}
          />
        </div>

        {/* Experience Details */}
        <div className="flex-1 min-w-0 flex flex-col justify-between">
          <div className="flex items-start justify-between gap-2 mb-1">
            <h4
              className={`font-semibold text-base sm:text-base ${
                isCurrent ? "text-red-200" : "text-gray-200"
              }`}
            >
              {experience.company}
            </h4>
          </div>
          <div className="text-sm sm:text-sm text-gray-400 mb-1">{experience.role}</div>

          <div className="text-sm sm:text-xs text-gray-500 mb-2 sm:mb-3">
            {experience.location} • {experience.period}
          </div>

          {/* Description - only shown if present */}
          {experience.description && (
            <p className="text-sm sm:text-sm text-gray-400 leading-relaxed">
              {experience.description}
            </p>
          )}

          {/* Bullet points - only shown if present */}
          {experience.bullets && experience.bullets.length > 0 && (
            <ul className="mt-2 space-y-1">
              {experience.bullets.map((bullet, idx) => (
                <li
                  key={idx}
                  className="text-sm text-gray-400 flex items-start gap-2"
                >
                  <span className="text-red-500 mt-1.5 flex-shrink-0">•</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};


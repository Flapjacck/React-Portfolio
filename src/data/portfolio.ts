/**
 * portfolio.ts
 *
 * Single source of truth for all portfolio content.
 * Imported by individual top-screen section components.
 */

/* ========================================
   PROJECTS
   ======================================== */

export interface ProjectProps {
  title: string;
  description: string;
  technologies: string[];
  link: string;
  image: string;
}

export const projects: ProjectProps[] = [
  {
    title: "ScheduleApp",
    description:
      "Full-stack MERN application built with a 9-member Agile team to streamline applicant tracking and interview scheduling for 100+ club members, featuring clean TypeScript code and scalable architecture.",
    technologies: ["React", "Node.js", "MongoDB", "TypeScript", "Express"],
    link: "https://github.com/LaurierCS/ScheduleApp",
    image: "https://opengraph.githubassets.com/1/LaurierCS/ScheduleApp",
  },
  {
    title: "MoxBox",
    description: "Lightweight Self-Hosted File Storage Platform.",
    technologies: ["React", "TypeScript", "Vite", "Node.js", "Express", "Proxmox"],
    link: "https://github.com/Flapjacck/moxbox",
    image: "https://github.com/Flapjacck/moxbox/raw/main/frontend/src/assets/boxmox.svg",
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
    title: "SKOS",
    description:
      "A bare-bones operating system kernel built from scratch in C and Assembly for x86 architecture.",
    technologies: ["C", "Assembly", "x86", "NASM", "GCC", "QEMU"],
    link: "https://github.com/Flapjacck/skos",
    image: "https://upload.wikimedia.org/wikipedia/commons/1/19/C_Logo.png",
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
      "Repo to show my solutions for LeetCode. Most questions will be written in the C or Java Language.",
    technologies: ["C", "Java", "Markdown"],
    link: "https://github.com/Flapjacck/Solution-Stash",
    image:
      "https://raw.githubusercontent.com/Flapjacck/Solution-Stash/refs/heads/main/images/solutionlogo.png",
  },
  {
    title: "Simple-Blackjack",
    description:
      "Developed a simplified Blackjack game in C, enhancing skills in game logic, input validation, user interaction, control flow, and memory management.",
    technologies: ["C"],
    link: "https://github.com/Flapjacck/Simple-Blackjack",
    image:
      "https://camo.githubusercontent.com/b6a62237152e84a40e71bbbd5bb68d868d226d1a0874c232e8887f610ec9b0d4/68747470733a2f2f692e696d6775722e636f6d2f6a486f4c62314a2e706e67",
  },
];

/* ========================================
   SKILLS
   ======================================== */

export interface SkillCategory {
  name: string;
  iconName: string; // lucide icon name — resolved in the component
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: "Languages",
    iconName: "Code2",
    skills: [
      "Python", "JavaScript", "TypeScript", "C", "Assembly",
      "Java", "SQL", "HTML5", "CSS3", "Markdown", "Bash", "VBA",
    ],
  },
  {
    name: "Frameworks & Libraries",
    iconName: "Rocket",
    skills: [
      "React", "Next.js", "Node.js", "Express.js", "FastAPI",
      "Tailwind", "PyTorch", "TensorFlow", "JWT", "Bcrypt", "Flask",
    ],
  },
  {
    name: "Tools & Platforms",
    iconName: "Wrench",
    skills: [
      "Git", "GitHub", "VS Code", "Linux", "Docker",
      "Vite", "QEMU", "PNPM", "Shell scripting", "LXC", "UNIX",
    ],
  },
  {
    name: "DevOps & Databases",
    iconName: "Cloud",
    skills: [
      "AWS", "Azure", "Vercel", "Render", "Nginx",
      "CI/CD", "MongoDB", "PostgreSQL", "Redis", "SQLite",
    ],
  },
];

/* ========================================
   WORK EXPERIENCE
   ======================================== */

export interface WorkExperienceProps {
  company: string;
  role: string;
  location: string;
  period: string;
  logo: string;
  description: string;
  isCurrent?: boolean;
}

export const workExperiences: WorkExperienceProps[] = [
  {
    company: "Laurier Computing Society",
    role: "Software Engineer",
    location: "Waterloo, Ontario",
    period: "Sept 2025 – Present",
    logo: "/assets/lauriercs_logo.webp",
    description:
      "Developing full-stack MERN applications for 100+ club members, contributing to open-source projects in an Agile team environment.",
    isCurrent: true,
  },
  {
    company: "Super Sucker Hydro Vac Service Inc.",
    role: "Mobile Parts and Inventory",
    location: "Hamilton, Ontario",
    period: "April 2025 – Aug 2025",
    logo: "/assets/super_sucker_logo.webp",
    description:
      "Managed $500K+ inventory and optimized delivery routes, reducing equipment downtime by 15%.",
    isCurrent: false,
  },
];

/* ========================================
   EDUCATION
   ======================================== */

export interface EducationProps {
  degree: string;
  institution: string;
  year: string;
  coursework: string;
}

export const education: EducationProps = {
  degree: "B.S. in Computer Science",
  institution: "Wilfrid Laurier University",
  year: "2023 – 2027",
  coursework:
    "Data Structures · OOP · Intro to Microprocessors · Algorithms · Operating Systems",
};

/* ========================================
   ABOUT ME
   ======================================== */

export const bio =
  "From tinkering with Minecraft Redstone to studying Computer Science at Wilfrid Laurier University, my path has always been driven by a desire to understand how things work. Growing up as my family's IT support taught me early on that technology is a powerful tool for helping others. I'm looking to translate this lifelong passion for problem-solving into a professional career where I can contribute meaningful technical solutions.";

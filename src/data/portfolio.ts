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
    title: "LOCAH.ai",
    description:
      "SU-sponsored retrieval assistant over Laurier's public information — cited answers for student questions.",
    technologies: ["FastAPI", "Next.js", "PostgreSQL", "pgvector", "RAG"],
    link: "https://github.com/LaurierCS/locah-ai",
    image: "https://opengraph.githubassets.com/1/LaurierCS/locah-ai",
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
      "This Site",
    technologies: ["React", "TypeScript", "Tailwind"],
    link: "https://github.com/Flapjacck/React-Portfolio",
    image: "https://m.media-amazon.com/images/I/5103LmIExkL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    title: "Simple-Blackjack",
    description:
      "Developed a simplified Blackjack game in C, enhancing skills in game logic, input validation, user interaction, control flow, and memory management.",
    technologies: ["C"],
    link: "https://github.com/Flapjacck/Simple-Blackjack",
    image:
      "https://camo.githubusercontent.com/929b912b215ad22643187c818ad6a3eb9b88f96c7184c8a292a9a060b8d98f77/68747470733a2f2f736f6369616c6966792e6769742e63692f466c61706a6163636b2f53696d706c652d426c61636b4a61636b2f696d6167653f6465736372697074696f6e3d31266465736372697074696f6e4564697461626c653d47616d652532306f66253230426c61636b6a61636b2532306d616465253230696e2532307468652532304325323070726f6772616d6d696e672532306c616e67756167652e25323043726561746564253230746f25323064656570656e2532306d79253230756e6465727374616e64696e672532306f66253230746865253230432532306c616e6775616765253230616e642532306769742e266c616e67756167653d31266e616d653d31267061747465726e3d506c7573267374617267617a6572733d31267468656d653d4461726b",
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
      "Java", "SQL", "HTML5", "CSS3", "Markdown", "Bash", "VBA", "Go",
    ],
  },
  {
    name: "Frameworks & Libraries",
    iconName: "Rocket",
    skills: [
      "React", "Next.js", "Astro", "Node.js", "Express.js", "FastAPI",
      "Tailwind", "PyTorch", "TensorFlow", "JWT", "Bcrypt", "Flask",
    ],
  },
  {
    name: "Tools & Platforms",
    iconName: "Wrench",
    skills: [
      "Git", "GitHub", "VS Code", "Cursor", "Linux", "Docker", "LXC",
      "Vite", "QEMU", "Proxmox", "PNPM", "Shell scripting", "UNIX",
    ],
  },
  {
    name: "DevOps & Databases",
    iconName: "Cloud",
    skills: [
      "AWS", "Azure", "Kubernetes", "Vercel", "Render", "Cloudflare", "Nginx",
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
    company: "CS Digital",
    role: "Co-Founder & Technical Lead",
    location: "Hamilton, Ontario",
    period: "Jul 2026 – Present",
    logo: "/assets/CSlogo.png",
    description:
      "Co-founded CS Digital and build custom, performance-first websites for local service businesses, plus on-page and local SEO including Google Business Profile and Local Service Ads.",
    isCurrent: true,
  },
  {
    company: "Laurier Computing Society (LCS)",
    role: "Vice President of Engineering",
    location: "Waterloo, Ontario",
    period: "Sept 2025 – Present",
    logo: "/assets/lauriercs_logo.webp",
    description:
      "Lead engineering on LOCAH.ai (FastAPI, Next.js, pgvector), run weekly stand-ups and code reviews with 10+ engineers, and keep the main repo moving through PR triage and review standards.",
    isCurrent: true,
  },
  {
    company: "Super Sucker Hydro Vac Service Inc.",
    role: "Mobile Parts and Inventory Coordinator",
    location: "Hamilton, Ontario",
    period: "Apr 2025 – Aug 2025 · May 2026 – Aug 2026",
    logo: "/assets/super_sucker_logo.webp",
    description:
      "Managed $500K+ in parts inventory across 7 yard locations, ran regular audits, and kept records current for 10+ supervisors and field technicians.",
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

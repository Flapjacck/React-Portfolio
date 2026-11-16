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
    title: "Pier",
    description: "Self-hosted control plane for k3s. Deploy apps from a git repo or Docker image and get a URL, with live build logs, scaling, persistent volumes, and deploy history.",
    technologies: ["TypeScript", "React", "Fastify", "Kubernetes (k3s)", "Docker", "Proxmox"],
    link: "https://github.com/Flapjacck/pier",
    image: "https://raw.githubusercontent.com/Flapjacck/pier/main/frontend/public/loading/pier-loader-dark-256.gif",
  },
  {
    title: "Solvd",
    description: "Speedcubing timer that saves every solve in the browser with IndexedDB, with cubing.js scrambles, shipped as a non-root nginx Docker container.",
    technologies: ["React", "TypeScript", "Tailwind", "cubing.js", "Dexie", "Docker"],
    link: "https://github.com/Flapjacck/Solvd",
    image: "https://raw.githubusercontent.com/Flapjacck/Solvd/main/frontend/public/og-image.png",
  },
  {
    title: "MoxBox",
    description: "Self-hosted file storage platform, a personal iCloud/Google Drive alternative running on a Proxmox homelab, with auth, a file dashboard, and trash.",
    technologies: ["React", "TypeScript", "Node.js", "Express", "SQLite", "Proxmox"],
    link: "https://github.com/Flapjacck/moxbox",
    image: "https://i.imgur.com/A7Clr5i.png",
  },
  {
    title: "Swing",
    description: "Client-side Fabric mod for Minecraft that tweaks the first-person viewmodel (item scale, swing speed, offsets, tilt) from a live in-game settings panel. Published on Modrinth.",
    technologies: ["Java", "Fabric", "Gradle", "GitHub Actions"],
    link: "https://github.com/Flapjacck/swing",
    image: "https://raw.githubusercontent.com/Flapjacck/swing/main/src/main/resources/assets/swing/icon.png",
  },
  {
    title: "BirdWatch",
    description: "Finds Laurier bird courses by running sentiment analysis over Reddit discussions and surfacing the results in a React dashboard.",
    technologies: ["React", "TypeScript", "Python", "NLTK", "Express", "Reddit API"],
    link: "https://github.com/Flapjacck/BirdWatch",
    image: "https://repository-images.githubusercontent.com/965835334/14a3862f-68db-4788-8e48-c097efcb4147",
  },
  {
    title: "SKOS",
    description: "x86 hobby kernel in C and Assembly with GRUB boot, interrupts, keyboard/timer/ATA drivers, FAT32 support, and a basic shell.",
    technologies: ["C", "Assembly", "x86", "NASM", "GRUB", "QEMU"],
    link: "https://github.com/Flapjacck/skos",
    image: "https://opengraph.githubassets.com/1/Flapjacck/skos",
  },
  {
    title: "CoCDB",
    description: "Go REST API that serves Clash of Clans game data like troops, buildings, and upgrade stats as clean, queryable JSON.",
    technologies: ["Go", "REST API", "JSON"],
    link: "https://github.com/Flapjacck/CoCDB",
    image: "https://opengraph.githubassets.com/1/Flapjacck/CoCDB",
  },
  {
    title: "Rhythm Radar",
    description: "Spotify dashboard that visualizes your listening habits, top artists and tracks, and current playback, with a playlist-creation tool.",
    technologies: ["React", "TypeScript", "Tailwind", "FastAPI", "PostgreSQL", "Spotify API"],
    link: "https://github.com/Flapjacck/Rhythm-Radar",
    image: "https://i.imgur.com/uBVp5Cd.png",
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

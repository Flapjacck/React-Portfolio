/**
 * Skills.tsx
 *
 * Skills section. Four category rows filling the height.
 * Each skill shown as react-icons icon + name — no bordered boxes.
 * Category rows stagger in from the left.
 */

import { motion } from 'framer-motion';
import type { ReactElement } from 'react';
import { skillCategories } from '../../data/portfolio';

// Simple Icons (SI)
import {
  SiPython, SiJavascript, SiTypescript, SiHtml5, SiCss,
  SiMarkdown, SiGnubash,
} from 'react-icons/si';
import {
  SiReact, SiNextdotjs, SiAstro, SiNodedotjs, SiExpress, SiFastapi,
  SiTailwindcss, SiPytorch, SiTensorflow, SiFlask,
} from 'react-icons/si';
import {
  SiGit, SiGithub, SiCursor, SiDocker, SiLinux, SiVite, SiPnpm, SiProxmox,
  SiRender, SiVercel, SiCloudflare, SiKubernetes,
  SiNginx, SiMongodb, SiPostgresql, SiRedis, SiSqlite,
} from 'react-icons/si';

// Font Awesome
import { FaJava } from 'react-icons/fa';

// Tabler Icons
import {
  TbBrandVscode, TbBrandAws, TbBrandAzure,
  TbCpu, TbDatabase, TbTable, TbLock, TbShieldCheck,
  TbGitBranch, TbTerminal2,
  TbCode, TbRocket, TbTool, TbCloud,
} from 'react-icons/tb';

// Map skill name → icon element
const ICONS: Record<string, ReactElement> = {
  Python:             <SiPython />,
  JavaScript:         <SiJavascript />,
  TypeScript:         <SiTypescript />,
  HTML5:              <SiHtml5 />,
  CSS3:               <SiCss />,
  Markdown:           <SiMarkdown />,
  Bash:               <SiGnubash />,
  Java:               <FaJava />,
  C:                  <TbCode />,
  Assembly:           <TbCpu />,
  SQL:                <TbDatabase />,
  VBA:                <TbTable />,
  React:              <SiReact />,
  'Next.js':          <SiNextdotjs />,
  Astro:              <SiAstro />,
  'Node.js':          <SiNodedotjs />,
  'Express.js':       <SiExpress />,
  FastAPI:            <SiFastapi />,
  Tailwind:           <SiTailwindcss />,
  PyTorch:            <SiPytorch />,
  TensorFlow:         <SiTensorflow />,
  Flask:              <SiFlask />,
  JWT:                <TbShieldCheck />,
  Bcrypt:             <TbLock />,
  Git:                <SiGit />,
  GitHub:             <SiGithub />,
  Docker:             <SiDocker />,
  Linux:              <SiLinux />,
  Vite:               <SiVite />,
  PNPM:               <SiPnpm />,
  'VS Code':          <TbBrandVscode />,
  Cursor:             <SiCursor />,
  QEMU:               <TbCpu />,
  Proxmox:            <SiProxmox />,
  'Shell scripting':  <TbTerminal2 />,
  UNIX:               <TbTerminal2 />,
  AWS:                <TbBrandAws />,
  Azure:              <TbBrandAzure />,
  Kubernetes:         <SiKubernetes />,
  Vercel:             <SiVercel />,
  Render:             <SiRender />,
  Cloudflare:         <SiCloudflare />,
  Nginx:              <SiNginx />,
  'CI/CD':            <TbGitBranch />,
  MongoDB:            <SiMongodb />,
  PostgreSQL:         <SiPostgresql />,
  Redis:              <SiRedis />,
  SQLite:             <SiSqlite />,
};

// Category accent colors
const CAT_COLORS: Record<string, string> = {
  'Languages':              '#416179',
  'Frameworks & Libraries': '#7c6143',
  'Tools & Platforms':      '#4a7c59',
  'DevOps & Databases':     '#7c3c3c',
};

const CAT_ICONS: Record<string, ReactElement> = {
  'Languages':              <TbCode />,
  'Frameworks & Libraries': <TbRocket />,
  'Tools & Platforms':      <TbTool />,
  'DevOps & Databases':     <TbCloud />,
};

export function Skills() {
  return (
    <div className="w-full h-full flex flex-col gap-[1%] py-[1%]">
      {skillCategories.map((cat, ci) => {
        const accent = CAT_COLORS[cat.name] ?? '#416179';
        const CatIcon = CAT_ICONS[cat.name];

        return (
          <motion.div
            key={cat.name}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: ci * 0.07, ease: 'easeOut' }}
            className="flex flex-row items-start gap-[2%] flex-1 min-h-0 overflow-hidden"
          >
            {/* Category label */}
            <div className="flex-shrink-0 w-[22%] flex flex-col items-start justify-center h-full gap-[4%] pl-[2%]">
              <span style={{ color: accent, fontSize: 'clamp(1.3rem, 3.2vw, 2rem)' }}>
                {CatIcon}
              </span>
              <span className="text-[clamp(0.65rem,1.72vw,0.96rem)] font-bold leading-tight" style={{ color: accent }}>
                {cat.name}
              </span>
            </div>

            {/* Skills — icon + text, no boxes */}
            <div className="flex-1 flex flex-wrap items-center content-center gap-x-[2%] gap-y-[2%] h-full overflow-hidden">
              {cat.skills.map((skill) => {
                const icon = ICONS[skill];
                return (
                  <span
                    key={skill}
                    className="flex items-center gap-[4%] text-[clamp(0.7rem,1.82vw,1.04rem)] text-black whitespace-nowrap"
                  >
                    {icon && (
                      <span
                        className="flex-shrink-0"
                        style={{ fontSize: 'clamp(1.05rem, 2.5vw, 1.4rem)', color: accent }}
                      >
                        {icon}
                      </span>
                    )}
                    {skill}
                  </span>
                );
              })}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}

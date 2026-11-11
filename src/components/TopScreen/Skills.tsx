/**
 * Skills.tsx
 *
 * Skills section. Four category rows filling the height.
 * Each skill shown as react-icons icon + name — no bordered boxes.
 * Category rows stagger in from the left.
 * Text/icon sizes use cqw so they scale with the screen.
 */

import { motion } from 'framer-motion';
import type { ReactElement } from 'react';
import { skillCategories } from '../../data/portfolio';

// Simple Icons (SI)
import {
  SiPython, SiJavascript, SiTypescript, SiHtml5, SiCss,
  SiMarkdown, SiGnubash, SiGo,
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
  TbGitBranch, TbTerminal2, TbBox,
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
  Go:                 <SiGo />,
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
  LXC:                <TbBox />,
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
              <span style={{ color: accent, fontSize: 'max(1.3rem, 4.6cqw)' }}>
                {CatIcon}
              </span>
              <span className="text-[length:max(0.65rem,2.21cqw)] font-bold leading-tight" style={{ color: accent }}>
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
                    className="flex items-center gap-[4%] text-[length:max(0.7rem,2.39cqw)] text-black whitespace-nowrap"
                  >
                    {icon && (
                      <span
                        className="flex-shrink-0"
                        style={{ fontSize: 'max(1.05rem, 3.22cqw)', color: accent }}
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

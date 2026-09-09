/**
 * Projects.tsx
 *
 * Projects section. 4×2 image-only grid + compact info strip below.
 * No scroll anywhere. Tiles pop in with staggered spring.
 * ScheduleApp (index 0) is auto-selected on mount.
 * Info panel is compact — no repeated thumbnail, fits within screen.
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../../data/portfolio';
import { FaGithub } from 'react-icons/fa';
import { TbExternalLink } from 'react-icons/tb';

export function Projects() {
  const [selected, setSelected] = useState(0);
  const proj = projects[selected];

  return (
    <div className="w-full h-full flex flex-col gap-[1.5%]">
      {/* 4×2 image grid — flex-[7] ≈ 70% of height */}
      <div className="grid grid-cols-4 grid-rows-2 flex-[7] min-h-0 gap-[1.2%]">
        {projects.map((p, i) => {
          const isSelected = selected === i;
          return (
            <motion.button
              key={p.title}
              onClick={() => setSelected(i)}
              initial={{ opacity: 0, scale: 0.55 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                delay: i * 0.04,
                type: 'spring',
                stiffness: 420,
                damping: 24,
              }}
              className={`relative overflow-hidden border-2 cursor-pointer focus:outline-none bg-[#e8ddd0] transition-all duration-150 ${
                isSelected
                  ? 'border-[#416179] shadow-[0_0_0_2px_#416179]'
                  : 'border-black hover:border-[#416179]'
              }`}
              aria-label={p.title}
            >
              <img
                src={p.image}
                alt={p.title}
                className="absolute inset-0 w-full h-full object-cover"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).style.display = 'none';
                }}
              />
              {/* Selected highlight ring */}
              {isSelected && (
                <div className="absolute inset-0 ring-2 ring-inset ring-[#416179] pointer-events-none" />
              )}
            </motion.button>
          );
        })}
      </div>

      {/* Info strip — flex-[3] ≈ 30% of height, no thumbnail */}
      <div className="border-2 border-black bg-white flex-[3] min-h-0 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={selected}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="h-full flex flex-col justify-between px-[3%] py-[2.5%]"
          >
            {/* Title + link */}
            <div className="flex items-start justify-between gap-[3%] flex-shrink-0">
              <p className="text-[clamp(0.72rem,2.1vw,1.15rem)] font-bold text-black leading-tight">
                {proj.title}
              </p>
              <a
                href={proj.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 flex-shrink-0 border border-black bg-[#416179] text-white text-[clamp(0.44rem,1.1vw,0.62rem)] px-2 py-px uppercase tracking-wide hover:opacity-80 transition-opacity whitespace-nowrap"
              >
                <FaGithub style={{ fontSize: 'clamp(0.65rem,1.55vw,0.88rem)' }} />
                <TbExternalLink style={{ fontSize: 'clamp(0.6rem,1.45vw,0.82rem)' }} />
              </a>
            </div>

            {/* Description — 2 lines max */}
            <p className="text-[clamp(0.54rem,1.4vw,0.78rem)] text-black leading-relaxed line-clamp-2 flex-shrink-0">
              {proj.description}
            </p>

            {/* Tech chips */}
            <div className="flex flex-wrap gap-x-[1.5%] gap-y-[6%] flex-shrink-0 overflow-hidden" style={{ maxHeight: '38%' }}>
              {proj.technologies.map((tech) => (
                <span
                  key={tech}
                  className="border border-black bg-[#f5f1eb] text-black text-[clamp(0.42rem,1.05vw,0.6rem)] px-[2.5%] py-px whitespace-nowrap"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

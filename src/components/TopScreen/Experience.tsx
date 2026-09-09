/**
 * Experience.tsx
 *
 * Experience section. Two cards filling the full screen height.
 * Logos from /assets/. Current badge in DS blue. No dividers.
 * Current card drops from above, previous rises from below.
 */

import { motion } from 'framer-motion';
import { workExperiences } from '../../data/portfolio';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { MdWork, MdWorkOutline } from 'react-icons/md';


export function Experience() {
  const current = workExperiences.find((w) => w.isCurrent)!;
  const previous = workExperiences.filter((w) => !w.isCurrent);

  return (
    <div className="w-full h-full flex flex-col overflow-hidden">
      {/* ── Current role ── */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: 'easeOut' }}
        className="flex-[3] min-h-0 flex flex-col px-[4%] pt-[3%] pb-[2%] gap-[3%]"
      >
        {/* Logo + Company + Badge row */}
        <div className="flex items-center gap-[3%] flex-shrink-0 min-w-0">
          <img
            src={current.logo}
            alt={`${current.company} logo`}
            className="h-[clamp(1.6rem,4vw,2.4rem)] w-auto object-contain flex-shrink-0"
            onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
          />
          <div className="flex-1 min-w-0">
            <p className="text-[clamp(1rem,2.8vw,1.6rem)] font-bold text-black leading-tight truncate">
              {current.company}
            </p>
            <div className="flex items-center gap-[3%] mt-[1%]">
              <MdWork
                className="flex-shrink-0 text-[#416179]"
                style={{ fontSize: 'clamp(0.78rem,1.9vw,1.08rem)' }}
              />
              <span className="text-[clamp(0.75rem,1.9vw,1.08rem)] text-black truncate">
                {current.role}
              </span>
            </div>
          </div>
          <span className="border-2 border-black bg-[#416179] text-white text-[clamp(0.48rem,1.18vw,0.68rem)] px-2 py-px uppercase tracking-wide whitespace-nowrap flex-shrink-0">
            Current
          </span>
        </div>

        {/* Period + Location */}
        <div className="flex items-center gap-[3%] flex-shrink-0">
          <FaMapMarkerAlt
            className="flex-shrink-0 text-[#416179]"
            style={{ fontSize: 'clamp(0.72rem,1.8vw,1.02rem)' }}
          />
          <span className="text-[clamp(0.68rem,1.72vw,0.97rem)] text-black">
            {current.location}
          </span>
          <span className="text-[#416179]">·</span>
          <span className="text-[clamp(0.68rem,1.72vw,0.97rem)] text-black whitespace-nowrap">
            {current.period}
          </span>
        </div>

        {/* Description */}
        <p className="text-[clamp(0.75rem,1.92vw,1.08rem)] text-black leading-relaxed flex-1 min-h-0 overflow-hidden">
          {current.description}
        </p>
      </motion.div>

      {/* Divider */}
      <div className="border-t-2 border-black flex-shrink-0" />

      {/* ── Previous roles — rise from below ── */}
      {previous.map((exp, i) => (
        <motion.div
          key={exp.company}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.1 + i * 0.08, ease: 'easeOut' }}
          className="flex-[2] min-h-0 flex flex-col px-[4%] pt-[2.5%] pb-[3%] gap-[3%]"
        >
          {/* Logo + Company + Period row */}
          <div className="flex items-center gap-[3%] flex-shrink-0 min-w-0">
            <img
              src={exp.logo}
              alt={`${exp.company} logo`}
              className="h-[clamp(1.3rem,3.2vw,1.9rem)] w-auto object-contain flex-shrink-0"
              onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
            />
            <div className="flex-1 min-w-0">
              <p className="text-[clamp(0.85rem,2.35vw,1.35rem)] font-bold text-black leading-tight truncate">
                {exp.company}
              </p>
              <div className="flex items-center gap-[3%] mt-[1%]">
                <MdWorkOutline
                  className="flex-shrink-0 text-black"
                  style={{ fontSize: 'clamp(0.72rem,1.78vw,1rem)' }}
                />
                <span className="text-[clamp(0.7rem,1.78vw,1rem)] text-black truncate">
                  {exp.role}
                </span>
              </div>
            </div>
            <span className="text-[clamp(0.58rem,1.42vw,0.82rem)] text-black flex-shrink-0 whitespace-nowrap">
              {exp.period}
            </span>
          </div>

          {/* Location */}
          <div className="flex items-center gap-[2%] flex-shrink-0">
            <FaMapMarkerAlt
              className="flex-shrink-0 text-black"
              style={{ fontSize: 'clamp(0.68rem,1.65vw,0.94rem)' }}
            />
            <span className="text-[clamp(0.65rem,1.62vw,0.92rem)] text-black">
              {exp.location}
            </span>
          </div>

          {/* Description */}
          <p className="text-[clamp(0.7rem,1.8vw,1.02rem)] text-black leading-relaxed flex-1 min-h-0 overflow-hidden">
            {exp.description}
          </p>
        </motion.div>
      ))}
    </div>
  );
}

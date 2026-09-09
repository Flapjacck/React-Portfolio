/**
 * AboutMe.tsx
 *
 * About Me section. Headshot left, name/bio right.
 * Fills the full screen — no blank space.
 * All text black. Staggered entry animations.
 */

import { motion } from "framer-motion";
import { bio, education } from "../../data/portfolio";
import { FaGraduationCap, FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";

export function AboutMe() {
  return (
    <div className="w-full h-full flex flex-row gap-0 overflow-hidden">
      {/* ── Left: headshot ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="w-[38%] flex-shrink-0 h-full border-r-2 border-black overflow-hidden"
      >
        <img
          src="/assets/Headshot.webp"
          alt="Spencer Kelly"
          className="w-full h-full object-cover object-top"
        />
      </motion.div>

      {/* ── Right: info ── */}
      <div className="flex-1 flex flex-col justify-center gap-[5%] px-[4%] py-[3%] min-w-0 h-full">
        {/* Name block */}
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.06, ease: "easeOut" }}
            className="text-[clamp(1.4rem,4.5vh,2.6rem)] font-bold leading-none text-black whitespace-nowrap"
          >
            Spencer Kelly
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.12, ease: "easeOut" }}
            className="text-[clamp(0.68rem,1.85vh,1rem)] text-black mt-[3%] leading-snug"
          >
            Computer Science Student
          </motion.p>
        </div>

        {/* Bio */}
        <motion.p
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.18, ease: "easeOut" }}
          className="text-[clamp(0.7rem,1.92vh,1.04rem)] text-black leading-relaxed"
        >
          {bio}
        </motion.p>

        {/* Education + meta — two compact lines */}
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.24, ease: "easeOut" }}
          className="flex flex-col gap-[3%]"
        >
          {/* Line 1: degree · institution */}
          <div className="flex items-center gap-[2.5%] min-w-0">
            <FaGraduationCap
              className="flex-shrink-0 text-[#416179]"
              style={{ fontSize: "clamp(0.75rem,1.96vh,1.05rem)" }}
            />
            <span className="text-[clamp(0.65rem,1.76vh,0.96rem)] font-bold text-black whitespace-nowrap truncate">
              {education.degree}
            </span>
            <span className="text-[#416179] flex-shrink-0">·</span>
            <span className="text-[clamp(0.65rem,1.76vh,0.96rem)] text-black whitespace-nowrap truncate">
              {education.institution}
            </span>
          </div>

          {/* Line 2: location · year · year-label */}
          <div className="flex items-center gap-[2.5%] min-w-0">
            <FaMapMarkerAlt
              className="flex-shrink-0 text-[#416179]"
              style={{ fontSize: "clamp(0.75rem,1.96vh,1.05rem)" }}
            />
            <span className="text-[clamp(0.65rem,1.76vh,0.96rem)] text-black whitespace-nowrap">
              Waterloo, Ontario
            </span>
            <span className="text-[#416179] flex-shrink-0">·</span>
            <FaCalendarAlt
              className="flex-shrink-0 text-[#416179]"
              style={{ fontSize: "clamp(0.75rem,1.96vh,1.05rem)" }}
            />
            <span className="text-[clamp(0.65rem,1.76vh,0.96rem)] text-black whitespace-nowrap">
              {education.year} · 3rd Year
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

/**
 * Experience.tsx
 *
 * Experience section. Equal-height rows — every role shows a description.
 * Current roles use DS blue accents and a Current badge.
 * Sizes use cqw so they scale with the screen (rem minimums for phones).
 */

import { motion } from "framer-motion";
import { workExperiences } from "../../data/portfolio";
import type { WorkExperienceProps } from "../../data/portfolio";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdWork, MdWorkOutline } from "react-icons/md";

function ExperienceRow({
  exp,
  delay,
}: {
  exp: WorkExperienceProps;
  delay: number;
}) {
  const isCurrent = Boolean(exp.isCurrent);

  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.32, delay, ease: "easeOut" }}
      className="flex-1 min-h-0 flex flex-col justify-center px-[4%] py-[2%] gap-[2%]"
    >
      <div className="flex items-center gap-[2.5%] shrink-0 min-w-0">
        <img
          src={exp.logo}
          alt={`${exp.company} logo`}
          className="h-[max(1.15rem,3.79cqw)] w-auto object-contain shrink-0"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).style.display = "none";
          }}
        />
        <div className="flex-1 min-w-0">
          <p className="text-[length:max(0.78rem,2.76cqw)] font-bold text-black leading-tight truncate">
            {exp.company}
          </p>
          <div className="flex items-center gap-[2%] mt-[0.5%]">
            {isCurrent ? (
              <MdWork
                className="shrink-0 text-[#416179]"
                style={{ fontSize: "max(0.65rem,2.11cqw)" }}
              />
            ) : (
              <MdWorkOutline
                className="shrink-0 text-black"
                style={{ fontSize: "max(0.65rem,2.11cqw)" }}
              />
            )}
            <span className="text-[length:max(0.62rem,2.02cqw)] text-black truncate">
              {exp.role}
            </span>
          </div>
        </div>
        {isCurrent ? (
          <span className="border-2 border-black bg-[#416179] text-white text-[length:max(0.42rem,1.38cqw)] px-[0.6em] py-[0.1em] uppercase tracking-wide whitespace-nowrap shrink-0">
            Current
          </span>
        ) : (
          <span className="text-[length:max(0.52rem,1.7cqw)] text-black shrink-0 text-right max-w-[38%] leading-tight">
            {exp.period}
          </span>
        )}
      </div>

      <div className="flex items-center gap-[2%] shrink-0 flex-wrap">
        <FaMapMarkerAlt
          className="shrink-0"
          style={{
            fontSize: "max(0.6rem,1.95cqw)",
            color: isCurrent ? "#416179" : "#000",
          }}
        />
        <span className="text-[length:max(0.58rem,1.89cqw)] text-black">
          {exp.location}
        </span>
        {isCurrent && (
          <>
            <span className="text-[length:max(0.58rem,1.89cqw)] text-[#416179]">·</span>
            <span className="text-[length:max(0.58rem,1.89cqw)] text-black whitespace-nowrap">
              {exp.period}
            </span>
          </>
        )}
      </div>

      <p className="text-[length:max(0.58rem,1.89cqw)] text-black leading-snug shrink-0">
        {exp.description}
      </p>
    </motion.div>
  );
}

export function Experience() {
  return (
    <div className="w-full h-full flex flex-col overflow-hidden">
      {workExperiences.map((exp, i) => (
        <div key={exp.company} className="flex-1 min-h-0 flex flex-col">
          {i > 0 && <div className="border-t-2 border-black shrink-0" />}
          <ExperienceRow exp={exp} delay={i * 0.06} />
        </div>
      ))}
    </div>
  );
}

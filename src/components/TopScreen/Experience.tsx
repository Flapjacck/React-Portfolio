/**
 * Experience.tsx
 *
 * Experience section. Equal-height rows — every role shows a description.
 * Current roles use DS blue accents and a Current badge.
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
          className="h-[clamp(1.15rem,2.8vw,1.65rem)] w-auto object-contain shrink-0"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).style.display = "none";
          }}
        />
        <div className="flex-1 min-w-0">
          <p className="text-[clamp(0.78rem,2.1vw,1.2rem)] font-bold text-black leading-tight truncate">
            {exp.company}
          </p>
          <div className="flex items-center gap-[2%] mt-[0.5%]">
            {isCurrent ? (
              <MdWork
                className="shrink-0 text-[#416179]"
                style={{ fontSize: "clamp(0.65rem,1.65vw,0.92rem)" }}
              />
            ) : (
              <MdWorkOutline
                className="shrink-0 text-black"
                style={{ fontSize: "clamp(0.65rem,1.65vw,0.92rem)" }}
              />
            )}
            <span className="text-[clamp(0.62rem,1.62vw,0.88rem)] text-black truncate">
              {exp.role}
            </span>
          </div>
        </div>
        {isCurrent ? (
          <span className="border-2 border-black bg-[#416179] text-white text-[clamp(0.42rem,1.05vw,0.6rem)] px-1.5 py-px uppercase tracking-wide whitespace-nowrap shrink-0">
            Current
          </span>
        ) : (
          <span className="text-[clamp(0.52rem,1.3vw,0.74rem)] text-black shrink-0 text-right max-w-[38%] leading-tight">
            {exp.period}
          </span>
        )}
      </div>

      <div className="flex items-center gap-[2%] shrink-0 flex-wrap">
        <FaMapMarkerAlt
          className="shrink-0"
          style={{
            fontSize: "clamp(0.6rem,1.5vw,0.85rem)",
            color: isCurrent ? "#416179" : "#000",
          }}
        />
        <span className="text-[clamp(0.58rem,1.48vw,0.82rem)] text-black">
          {exp.location}
        </span>
        {isCurrent && (
          <>
            <span className="text-[#416179]">·</span>
            <span className="text-[clamp(0.58rem,1.48vw,0.82rem)] text-black whitespace-nowrap">
              {exp.period}
            </span>
          </>
        )}
      </div>

      <p className="text-[clamp(0.58rem,1.48vw,0.82rem)] text-black leading-snug shrink-0">
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

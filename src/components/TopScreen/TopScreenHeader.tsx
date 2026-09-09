/**
 * TopScreenHeader.tsx
 *
 * Displays a slim header bar at the top of the DS Lite top screen. The height
 * is calculated to match a 16px-tall header on an original 256×192 display
 * (≈8.33% of the screen height). This version also shows the current time and
 * date in the DS-BIOS font, plus GitHub/LinkedIn icons on the right side.
 * All measurements are converted from DS pixels to percentages so the layout
 * scales with the screen.
 */

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
// using static PNG logos instead of vector icons; files live in public/assets (served at /assets/*)


export interface TopScreenHeaderProps {
  /** URL to open when the GitHub icon is clicked */
  githubUrl?: string;
  /** URL to open when the LinkedIn icon is clicked */
  linkedinUrl?: string;
}

export function TopScreenHeader({
  githubUrl = 'https://github.com/Flapjacck',
  linkedinUrl = 'https://www.linkedin.com/in/spencergk/',
}: TopScreenHeaderProps) {
  // compute initial values once to avoid calling setState in the effect
  const now = new Date();
  const pad = (n: number) => n.toString().padStart(2, '0');
  const initialTime = `${pad(now.getHours())}:${pad(now.getMinutes())}`;
  // pad month/day so we always show two digits (##/##)
  const initialDate = `${pad(now.getMonth() + 1)}/${pad(now.getDate())}`;

  const [timeStr, setTimeStr] = useState(initialTime);
  const [dateStr, setDateStr] = useState(initialDate);

  // convert a Date instance into HH:MM (24‑hour) and M/D strings
  function updateClock() {
    const d = new Date();
    const h = d.getHours();
    const m = d.getMinutes();
    setTimeStr(`${h.toString().padStart(2, '0')}:${m
      .toString()
      .padStart(2, '0')}`);
    // pad both month and day for ##/## format
    const mm = (d.getMonth() + 1).toString().padStart(2, '0');
    const dd = d.getDate().toString().padStart(2, '0');
    setDateStr(`${mm}/${dd}`);
  }

  useEffect(() => {
    const id = setInterval(updateClock, 60_000); // refresh each minute
    return () => clearInterval(id);
  }, []);

  
  /*
    DS Lite Header — compact pixelated bar.
    Height reduced to ~6% of screen (≈12 DS pixels) so more content
    is visible below. Name always kept on one line via whitespace-nowrap.
    All text uses the DS-BIOS bitmap font for an authentic pixel look.
  */

  return (
    <motion.div
      initial={{ y: '-100%' }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      className="relative top-0 left-0 w-full h-[6%] flex-shrink-0
        bg-linear-to-t from-[#61829a] to-[#99adbb]
        flex items-center justify-between px-2"
    >
      {/* left‑aligned name — whitespace-nowrap guarantees one line */}
      <span
        className="whitespace-nowrap leading-none tracking-wide"
        style={{ fontSize: 'clamp(0.5rem, 1.35vw, 0.75rem)' }}
      >
        Spencer Kelly
      </span>

      {/* right group: time | date | github | linkedin */}
      <div className="flex items-center justify-end gap-0 h-full">
        <div className="h-full border-r border-slate-600 border-dashed" />

        <div className="px-2 flex items-center">
          <span
            className="font-medium"
            style={{ fontSize: 'clamp(0.45rem, 1.2vw, 0.68rem)' }}
          >
            {timeStr}
          </span>
        </div>

        <div className="h-full border-r border-slate-600 border-dashed" />

        <div className="px-2 flex items-center">
          <span
            className="font-medium"
            style={{ fontSize: 'clamp(0.45rem, 1.2vw, 0.68rem)' }}
          >
            {dateStr}
          </span>
        </div>

        <div className="h-full border-r border-slate-600 border-dashed" />

        <div className="pl-2 pr-0 h-full flex items-center space-x-2">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="transition-opacity hover:opacity-70 flex items-center"
          >
            <img
              src="/assets/Github_pixel.png"
              alt="GitHub logo"
              className="w-auto"
              style={{ height: 'clamp(0.7rem, 1.8vw, 1rem)', imageRendering: 'pixelated' }}
            />
          </a>

          <div className="h-full border-r border-slate-600 border-dashed" />

          <a
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="transition-opacity hover:opacity-70 flex items-center"
          >
            <img
              src="/assets/Linkedin_pixel.png"
              alt="LinkedIn logo"
              className="w-auto"
              style={{ height: 'clamp(0.7rem, 1.8vw, 1rem)', imageRendering: 'pixelated' }}
            />
          </a>
        </div>
      </div>

      {/* 2px pixel-border at bottom */}
      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-black" />
    </motion.div>
  );
}

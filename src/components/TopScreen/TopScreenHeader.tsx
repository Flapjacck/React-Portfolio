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
    Percentages derived from an original 256px-wide DS display:
      - (previous spec) total group width ≈80px → 31.25% (not enforced now)
      - gap between items = 5px → ≈1.95%
      - icons were originally 16px (6.25%) but are now scaled via text-2xl
        so they match the header font size.
    The container no longer restricts width; content grows as necessary while
    remaining right-aligned.
  */

  return (
    <motion.div
      // slide in from above when the component mounts
      initial={{ y: '-100%' }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      className="relative top-0 left-0 w-full h-[8.333%] \
        bg-linear-to-b from-(--screen-bg-primary) to-(--screen-border) \
        flex items-center justify-between px-2"
    >
      {/* left‑aligned name */}
      <span className="text-2xl leading-none">Spencer Kelly</span>

      {/* right group: time, date, github, linkedin
          removing fixed width so items can grow when text is enlarged */}
      <div className="flex items-center justify-end gap-x-[1.95%]">
        <span className="text-2xl font-medium">{timeStr}</span>
        <span className="text-2xl font-medium">{dateStr}</span>
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <img
            src="/assets/Github_pixel.png"
            alt="GitHub logo"
            className="h-6 w-auto"
          />
        </a>
        <a
          href={linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <img
            src="/assets/Linkedin_pixel.png"
            alt="LinkedIn logo"
            className="h-6 w-auto"
          />
        </a>
      </div>

      {/* black line (2px) at bottom, inside header */}
      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-black" />
    </motion.div>
  );
}

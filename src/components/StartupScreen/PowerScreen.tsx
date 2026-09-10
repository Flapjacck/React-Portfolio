/**
 * PowerScreen.tsx
 *
 * DS Lite–style power switch. Swipe the slider from the bottom of the
 * track to the top to boot. Release early and it snaps back — you must
 * complete the full upward stroke.
 */

import { useRef, useCallback } from 'react';
import { animate, motion, useMotionValue } from 'framer-motion';
import type { PointerEvent as ReactPointerEvent, KeyboardEvent } from 'react';

export interface PowerScreenProps {
  onPower: () => void;
}

// ─── Switch geometry (px) ────────────────────────────────────────────────────
const TRACK_H   = 210;                         // outer track height
const TRACK_W   = 54;                          // outer track width
const THUMB_H   = Math.round(TRACK_H * 0.75); // slider = 75 % of track (~158 px)
const THUMB_W   = 46;                          // slider width
const PAD       = 3;                           // gap between track wall and thumb
const TRAVEL    = TRACK_H - THUMB_H - 2 * PAD; // upward travel (~46 px)
const THRESHOLD = 0.86;

export function PowerScreen({ onPower }: PowerScreenProps) {
  // thumbY: TRAVEL = resting at bottom; 0 = fully at top (power on)
  const thumbY   = useMotionValue(TRAVEL);
  const hasFired = useRef(false);
  const dragging = useRef(false);
  const startPY  = useRef(0);

  const onPointerDown = useCallback(
    (e: ReactPointerEvent<HTMLDivElement>) => {
      if (hasFired.current) return;
      dragging.current = true;
      startPY.current  = e.clientY;
      e.currentTarget.setPointerCapture(e.pointerId);
    },
    [],
  );

  const onPointerMove = useCallback(
    (e: ReactPointerEvent<HTMLDivElement>) => {
      if (!dragging.current || hasFired.current) return;
      const delta  = startPY.current - e.clientY;
      const capped = Math.max(0, Math.min(TRAVEL, delta));
      const newY = TRAVEL - capped;
      thumbY.set(newY);
      
      // Trigger power-on immediately when thumb reaches the top
      if (newY <= 2) {
        hasFired.current = true;
        animate(thumbY, 0, {
          type: 'spring',
          stiffness: 520,
          damping: 36,
          onComplete: () => setTimeout(onPower, 130),
        });
      }
    },
    [thumbY, onPower],
  );

  const settle = useCallback(() => {
    if (!dragging.current || hasFired.current) return;
    dragging.current = false;

    const frac = 1 - thumbY.get() / TRAVEL;

    if (frac >= THRESHOLD) {
      hasFired.current = true;
      animate(thumbY, 0, {
        type: 'spring',
        stiffness: 520,
        damping: 36,
        onComplete: () => setTimeout(onPower, 130),
      });
    } else {
      animate(thumbY, TRAVEL, {
        type: 'spring',
        stiffness: 280,
        damping: 22,
        mass: 0.85,
      });
    }
  }, [thumbY, onPower]);

  const onKeyDown = useCallback(
    (e: KeyboardEvent<HTMLDivElement>) => {
      if (hasFired.current) return;
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        hasFired.current = true;
        animate(thumbY, 0, {
          type: 'spring',
          stiffness: 520,
          damping: 36,
          onComplete: () => setTimeout(onPower, 130),
        });
      }
    },
    [thumbY, onPower],
  );

  const thumbLeft = (TRACK_W - THUMB_W) / 2;

  return (
    <main
      className="flex items-center justify-center h-screen w-full bg-black select-none"
      style={{ fontFamily: "'DS-BIOS', monospace" }}
    >
      {/* POWER label + Track + Text column */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 24 }}>
        {/* POWER label + Track side-by-side */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          {/* Vertical POWER label — beside the bar */}
          <p
            style={{
              writingMode: 'vertical-rl',
              transform: 'rotate(180deg)',
              fontSize: '2rem',
              letterSpacing: '0.08em',
              color: 'rgba(255,255,255,0.85)',
              margin: 0,
              lineHeight: 1,
            }}
          >
            POWER
          </p>

          {/* Track */}
          <div
            role="button"
            tabIndex={0}
            aria-label="Power switch – swipe up to boot"
            style={{
              position: 'relative',
              width: TRACK_W,
              height: TRACK_H,
              touchAction: 'none',
              cursor: 'ns-resize',
              outline: 'none',
            }}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={settle}
            onPointerCancel={settle}
            onKeyDown={onKeyDown}
          >
          {/* Track groove — flat, dark */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: '#141414',
              border: '1px solid #2a2a2a',
            }}
          />

          {/* Thumb slider */}
          <motion.div
            style={{
              y: thumbY,
              position: 'absolute',
              top: PAD,
              left: thumbLeft,
              width: THUMB_W,
              height: THUMB_H,
              background: '#2e2e2e',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'ns-resize',
              willChange: 'transform',
            }}
          >
            {/* Isosceles triangle — width ~= thumb width, tall legs, with drop shadow */}
            <svg
              width={THUMB_W - 4}
              height={THUMB_H - 20}
              viewBox={`0 0 ${THUMB_W - 4} ${THUMB_H - 20}`}
              aria-hidden="true"
              style={{
                filter: 'drop-shadow(0px 3px 4px rgba(0,0,0,0.9))',
                overflow: 'visible',
              }}
            >
              {/*
                Triangle scaled to nearly fill the thumb width with tall legs
                Apex at top-center, base at bottom, touching near the edges
              */}
              <polygon
                points={`${(THUMB_W - 4) / 2},2 ${THUMB_W - 4},${THUMB_H - 22} 0,${THUMB_H - 22}`}
                fill="#555"
                stroke="none"
              />
            </svg>
          </motion.div>
          </div>
        </div>

        {/* Instruction text below */}
        <p
          className="blink-text"
          style={{
            fontSize: 'clamp(1rem, 2.5vw, 1.75rem)',
            color: 'rgba(255,255,255,0.75)',
            margin: 0,
            letterSpacing: '0.04em',
            textAlign: 'center',
            maxWidth: 300,
          }}
        >
          SLIDE BAR UP TO POWER ON
        </p>
      </div>
    </main>
  );
}

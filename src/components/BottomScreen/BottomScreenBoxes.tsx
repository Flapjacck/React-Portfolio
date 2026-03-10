/**
 * BottomScreenBoxes.tsx
 *
 * Renders four DS-style boxes centered within the lower display area. The
 * dimensions are calculated relative to a 256×192 DS Lite screen and a
 * 189×142 container as specified by the user. Box sizes and gaps are
 * expressed as percentages so they scale with the parent screen element.
 * Each box has a black border and a pixelated light-gray fill; sample text
 * labels identify them.
 */

/**
 * Component containing four dynamically sized boxes (two large, two small)
 * stacked vertically with precise spacing between them.
 */
import { motion } from 'framer-motion';
import { useState, useRef, useLayoutEffect, useEffect, useCallback } from 'react';
import { Howl } from 'howler';
import { BoxSelector } from './BoxSelector';

export function BottomScreenBoxes() {
  // percentages derived from the 189×142 container referenced to 256×192
  // overall screen size. values rounded to two decimal places where needed.
  // height percentages:
  //   big box: 46/142 ≈ 32.39%
  //   middle row: 45/142 ≈ 31.69% (holds two small boxes)
  //   small gap (3px) ≈ 2.11% of 142
  // width percentages relative to 189 container:
  //   big box/full row: 100%
  //   small box: 93/189 ≈ 49.21%
  //   horizontal gap: 3/189 ≈ 1.59%

  // state to track which box is selected and which is hovered
  const [selectedIndex, setSelectedIndex] = useState(0); // default box 1
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // refs for container and individual boxes; used to compute bounds
  const containerRef = useRef<HTMLDivElement | null>(null);
  const boxRefs = useRef<Array<HTMLDivElement | null>>([null, null, null, null]);

  // selector bounds state
  const [selectorBounds, setSelectorBounds] = useState<{
    x: number;
    y: number;
    width: number;
    height: number;
  } | null>(null);

  // prepare click sound once
  const clickSound = useRef<Howl | null>(null);
  useEffect(() => {
    clickSound.current = new Howl({ src: ['/sounds/click.wav'] });
  }, []);

  // compute active index (hover preview beats selection)
  const activeIndex = hoveredIndex !== null ? hoveredIndex : selectedIndex;

  // recalc bounds when active box changes or when layout changes (resize)
  const updateBounds = useCallback(() => {
    const container = containerRef.current;
    const target = boxRefs.current[activeIndex];
    if (container && target) {
      const cRect = container.getBoundingClientRect();
      const tRect = target.getBoundingClientRect();
      setSelectorBounds({
        x: tRect.left - cRect.left,
        y: tRect.top - cRect.top,
        width: tRect.width,
        height: tRect.height,
      });
    }
  }, [activeIndex]);

  useLayoutEffect(() => {
    updateBounds();
  }, [updateBounds]);

  useEffect(() => {
    window.addEventListener('resize', updateBounds);
    return () => window.removeEventListener('resize', updateBounds);
  }, [updateBounds]);

  // helper to handle click and hover events
  const handleMouseEnter = (i: number) => () => setHoveredIndex(i);
  const handleMouseLeave = () => setHoveredIndex(null);
  const handleClick = (i: number) => () => {
    setSelectedIndex(i);
    if (clickSound.current) clickSound.current.play();
  };

  return (
    <motion.div
      ref={containerRef}
      className="relative flex flex-col items-center justify-center w-[77%] h-[78%] gap-y-[3.11%]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.3, ease: 'easeInOut' }}
    >
      {/* selector overlay */}
      <BoxSelector bounds={selectorBounds} />

      {/* top large box */}
      <div
        ref={(el) => { boxRefs.current[0] = el; }}
        onMouseEnter={handleMouseEnter(0)}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick(0)}
        className="relative w-full h-[32.39%] border-2 border-black box-gradient cursor-pointer"
      >
        <div className="absolute right-[1%] top-1/2 -translate-y-1/2 w-[75.13%] h-[89.13%] bg-white flex items-center justify-center border border-gray-300">
          <span className="text-xs font-medium text-black">Box 1</span>
        </div>
      </div>

      {/* middle row with two small boxes */}
      <div className="flex w-full h-[31.69%] items-center justify-center gap-x-[1.59%]">
        <div
          ref={(el) => { boxRefs.current[1] = el; }}
          onMouseEnter={handleMouseEnter(1)}
          onMouseLeave={handleMouseLeave}
          onClick={handleClick(1)}
          className="w-[49.21%] h-full border-2 border-black box-gradient flex items-center justify-center p-[3%] cursor-pointer"
        >
          <span className="text-sm font-medium">Box 2</span>
        </div>
        <div
          ref={(el) => { boxRefs.current[2] = el; }}
          onMouseEnter={handleMouseEnter(2)}
          onMouseLeave={handleMouseLeave}
          onClick={handleClick(2)}
          className="w-[49.21%] h-full border-2 border-black box-gradient flex items-center justify-center p-[3%] cursor-pointer"
        >
          <span className="text-sm font-medium">Box 3</span>
        </div>
      </div>

      {/* bottom large box */}
      <div
        ref={(el) => { boxRefs.current[3] = el; }}
        onMouseEnter={handleMouseEnter(3)}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick(3)}
        className="relative w-full h-[32.39%] border-2 border-black box-gradient cursor-pointer"
      >
        <div className="absolute right-[1%] top-1/2 -translate-y-1/2 w-[75.13%] h-[89.13%] bg-white flex items-center justify-center border border-gray-300">
          <span className="text-xs font-medium text-black">Box 4</span>
        </div>
      </div>
    </motion.div>
  );
}

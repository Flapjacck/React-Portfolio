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

  return (
    <motion.div
      className="flex flex-col items-center justify-center w-[77%] h-[78%] gap-y-[3.11%]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.3, ease: 'easeInOut' }}
    >
      {/* top large box */}
      <div className="w-full h-[32.39%] border-2 border-black pixelated-bg flex items-center justify-center p-[3%]">
        <span className="text-sm font-medium">Box 1</span>
      </div>

      {/* middle row with two small boxes */}
      <div className="flex w-full h-[31.69%] items-center justify-center gap-x-[1.59%]">
        <div className="w-[49.21%] h-full border-2 border-black pixelated-bg flex items-center justify-center p-[3%]">
          <span className="text-sm font-medium">Box 2</span>
        </div>
        <div className="w-[49.21%] h-full border-2 border-black pixelated-bg flex items-center justify-center p-[3%]">
          <span className="text-sm font-medium">Box 3</span>
        </div>
      </div>

      {/* bottom large box */}
      <div className="w-full h-[32.39%] border-2 border-black pixelated-bg flex items-center justify-center p-[3%]">
        <span className="text-sm font-medium">Box 4</span>
      </div>
    </motion.div>
  );
}

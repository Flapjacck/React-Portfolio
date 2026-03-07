/**
 * TopScreenHeader.tsx
 *
 * Displays a slim header bar at the top of the DS Lite top screen. The height
 * is calculated to match a 16px-tall header on an original 256×192 display
 * (≈8.33% of the screen height). It features a vertical gradient background
 * and left-aligned text in the custom DS-BIOS font.
 */

export function TopScreenHeader() {
  return (
    <div
      className="relative top-0 left-0 w-full h-[8.333%] \
        bg-linear-to-b from-(--screen-bg-primary) to-(--screen-border) \
        flex items-center justify-start pl-2"
    >
      {/* name text stays centered regardless of viewport size */}
      <span className="text-2xl leading-none">Spencer Kelly</span>

      {/* black line (2px) at bottom, inside header */}
      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-black" />
    </div>
  );
}

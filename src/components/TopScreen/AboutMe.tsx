/**
 * AboutMe.tsx
 * 
 * Displays the About Me section on the top screen.
 * Shows profile information and personal introduction.
 */

/**
 * Renders the About Me section
 * @returns JSX element displaying the About Me content
 */
export function AboutMe() {
  return (
    <div className="flex items-center justify-center h-full w-full">
      <div className="text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-(--color-text) mb-4">
          About Me
        </h2>
        <p className="text-base md:text-lg text-(--color-text) opacity-75">
          Section placeholder content
        </p>
      </div>
    </div>
  );
}

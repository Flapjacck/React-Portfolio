interface SvgIconProps {
  href: string;
  svgPath: string;
  alt: string;
}

const SvgIcon = ({ href, svgPath, alt }: SvgIconProps) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="group relative p-3 mx-2"
  >
    <div className="absolute inset-0 bg-red-500/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 ease-out" />
    <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-red-600/20 rounded-lg opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-300" />
    <svg
      width="50"
      height="50"
      viewBox="0 0 50 50"
      fill="currentColor"
      className="w-15 h-15 relative z-10 text-red-500 transition-all duration-300 ease-out
               group-hover:text-red-400 group-hover:scale-110 group-hover:rotate-3"
      aria-label={alt}
    >
      <path d={svgPath} />
    </svg>
  </a>
);

export const SvgRow = () => {
  const icons = [
    {
      href: "https://www.linkedin.com/in/SpencerGK/",
      svgPath:
        "M41 4H9C6.24 4 4 6.24 4 9v32c0 2.76 2.24 5 5 5h32c2.76 0 5-2.24 5-5V9c0-2.76-2.24-5-5-5zM17 20v19h-6V20h6zm-6-5.53c0-1.4 1.2-2.47 3-2.47s2.93 1.07 3 2.47c0 1.4-1.12 2.53-3 2.53-1.8 0-3-1.13-3-2.53zM39 39h-6V29c0-2-1-4-3.5-4.04h-.08C27 24.96 26 27.02 26 29v10h-6V20h6v2.56S27.93 20 31.81 20c3.97 0 7.19 2.73 7.19 8.26V39z",
      alt: "LinkedIn",
    },
    {
      href: "https://github.com/Flapjacck",
      svgPath:
        "M17.791 46.836A1.999 1.999 0 0 0 19 45v-5.4c0-.197.016-.402.041-.61A.611.611 0 0 1 19 39h-3.6c-1.5 0-2.8-.6-3.4-1.8-.7-1.3-1-3.5-2.8-4.7-.3-.2-.1-.5.5-.5.6.1 1.9.9 2.7 2 .9 1.1 1.8 2 3.4 2 2.487 0 3.82-.125 4.622-.555C21.356 34.056 22.649 33 24 33v-.025c-5.668-.182-9.289-2.066-10.975-4.975-3.665.042-6.856.405-8.677.707a21.537 21.537 0 0 1-.151-.987c1.797-.296 4.843-.647 8.345-.714a8.162 8.162 0 0 1-.291-.849c-3.511-.178-6.541-.039-8.187.097-.02-.332-.047-.663-.051-.999 1.649-.135 4.597-.27 8.018-.111a9.832 9.832 0 0 1-.13-1.543c0-1.7.6-3.5 1.7-5-.5-1.7-1.2-5.3.2-6.6 2.7 0 4.6 1.3 5.5 2.1C21 13.4 22.9 13 25 13s4 .4 5.6 1.1c.9-.8 2.8-2.1 5.5-2.1 1.5 1.4.7 5 .2 6.6 1.1 1.5 1.7 3.2 1.6 5 0 .484-.045.951-.11 1.409 3.499-.172 6.527-.034 8.204.102-.002.337-.033.666-.051.999-1.671-.138-4.775-.28-8.359-.089a8.272 8.272 0 0 1-.325.98c3.546.046 6.665.389 8.548.689-.043.332-.093.661-.151.987-1.912-.306-5.171-.664-8.879-.682-1.665 2.878-5.22 4.755-10.777 4.974V33c2.6 0 5 3.9 5 6.6V45c0 .823.498 1.53 1.209 1.836C41.37 43.804 48 35.164 48 25 48 12.318 37.683 2 25 2S2 12.318 2 25c0 10.164 6.63 18.804 15.791 21.836z",
      alt: "GitHub",
    },
    {
      href: "https://x.com/SpennGK",
      svgPath:
        "M11 4a7 7 0 0 0-7 7v28a7 7 0 0 0 7 7h28a7 7 0 0 0 7-7V11a7 7 0 0 0-7-7H11zm2.086 9h7.937l5.637 8.01L33.5 13H36l-8.21 9.613L37.913 37H29.98l-6.541-9.293L15.5 37H13l9.309-10.896L13.086 13zm3.828 2 14.107 20h3.065L19.979 15h-3.065z",
      alt: "Twitter",
    },
  ];

  return (
    <div className="flex justify-center items-center space-x-2 mb-8">
      {icons.map((icon, index) => (
        <SvgIcon key={index} {...icon} />
      ))}
    </div>
  );
};

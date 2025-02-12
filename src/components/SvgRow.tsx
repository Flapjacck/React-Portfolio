import GitHubIcon from "../assets/GitHub.svg";
import LinkedInIcon from "../assets/linkedin.svg";
import TwitterIcon from "../assets/X.svg";

interface SvgIconProps {
  href: string;
  svgPath: string;
  alt: string;
}

const SvgIcon = ({ href, svgPath, alt }: SvgIconProps) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="mx-2">
    <img src={svgPath} alt={alt} className="w-20 h-20 hover:opacity-75 transition-opacity" />
  </a>
);

export const SvgRow = () => {
  const icons = [
    { href: "https://www.linkedin.com/in/SpencerGK/", svgPath: LinkedInIcon, alt: "LinkedIn" },
    { href: "https://github.com/Flapjacck", svgPath: GitHubIcon, alt: "GitHub" },
    { href: "https://x.com/SpennGK", svgPath: TwitterIcon, alt: "Twitter" },
  ];

  return (
    <div className="flex justify-center items-center space-x-4 mb-8">
      {icons.map((icon, index) => (
        <SvgIcon key={index} {...icon} />
      ))}
    </div>
  );
};
import { ReactNode } from "react";

interface AnimatedButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  external?: boolean;
  className?: string;
}

export const AnimatedButton = ({
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
  icon,
  iconPosition = "right",
  external = false,
  className = "",
}: AnimatedButtonProps) => {
  const baseClasses = `inline-flex items-center font-medium transition-all duration-300 
                      group relative`;

  const variantClasses = {
    primary: `text-red-400 hover:text-red-300 hover:drop-shadow-[0_0_8px_rgba(239,68,68,0.5)]`,
    secondary: `text-zinc-400 hover:text-zinc-300 hover:drop-shadow-[0_0_8px_rgba(161,161,170,0.5)]`,
    ghost: `text-gray-400 hover:text-white hover:bg-zinc-800/50 rounded-lg px-3 py-2`,
  };

  const sizeClasses = {
    sm: "text-sm gap-1",
    md: "text-base gap-2",
    lg: "text-lg gap-3",
  };

  const combinedClasses = `
    ${baseClasses} 
    ${variantClasses[variant]} 
    ${sizeClasses[size]} 
    ${className}
  `
    .trim()
    .replace(/\s+/g, " ");

  const content = (
    <>
      {icon && iconPosition === "left" && (
        <span className="transform transition-transform duration-300 group-hover:-translate-x-1">
          {icon}
        </span>
      )}

      <span className="group-hover:translate-x-1 transition-transform duration-300">
        {children}
      </span>

      {icon && iconPosition === "right" && (
        <span className="transform transition-transform duration-300 group-hover:translate-x-1">
          {icon}
        </span>
      )}

      {/* Animated underline */}
      <span
        className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-red-500 to-red-400 
                     group-hover:w-full transition-all duration-300"
      ></span>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className={combinedClasses}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
      >
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={combinedClasses}>
      {content}
    </button>
  );
};

// Common icons as components
export const ArrowRightIcon = ({ className = "" }: { className?: string }) => (
  <svg
    className={`w-4 h-4 ${className}`}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M14 5l7 7m0 0l-7 7m7-7H3"
    />
  </svg>
);

export const ExternalLinkIcon = ({
  className = "",
}: {
  className?: string;
}) => (
  <svg
    className={`w-4 h-4 ${className}`}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
    />
  </svg>
);

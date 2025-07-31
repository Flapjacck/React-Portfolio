import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "glass" | "gradient";
  interactive?: boolean;
  hover?: "lift" | "glow" | "scale" | "float";
  onClick?: () => void;
}

export const Card = ({
  children,
  className = "",
  variant = "default",
  interactive = true,
  hover = "lift",
  onClick,
}: CardProps) => {
  const baseClasses =
    "relative overflow-hidden transition-all duration-500 ease-out";

  const variantClasses = {
    default: `bg-gradient-to-br from-zinc-900/80 to-zinc-900/40 backdrop-blur-lg 
              border border-zinc-800/50 rounded-2xl`,
    glass: `bg-zinc-900/30 backdrop-blur-2xl border border-white/10 rounded-2xl`,
    gradient: `bg-gradient-to-br from-zinc-900 via-zinc-900/90 to-zinc-800 
               border border-zinc-700/50 rounded-2xl`,
  };

  const interactiveClasses = interactive
    ? `hover:border-red-500/50 hover:shadow-[0_20px_50px_rgba(239,68,68,0.15),0_0_0_1px_rgba(239,68,68,0.1)]
       before:absolute before:inset-0 before:bg-gradient-to-br before:from-red-500/5 before:to-transparent 
       before:opacity-0 before:transition-opacity before:duration-500 hover:before:opacity-100 cursor-pointer`
    : "";

  const hoverClasses = {
    lift: "hover:transform hover:-translate-y-2 hover:scale-[1.02]",
    glow: "hover:shadow-[0_0_30px_rgba(239,68,68,0.3)]",
    scale: "hover:scale-[1.05]",
    float: "card-hover-float",
  };

  const combinedClasses = `
    ${baseClasses} 
    ${variantClasses[variant]} 
    ${interactive ? interactiveClasses : ""} 
    ${interactive ? hoverClasses[hover] : ""} 
    ${className}
  `
    .trim()
    .replace(/\s+/g, " ");

  return (
    <div className={combinedClasses} onClick={onClick}>
      {/* Subtle top border glow */}
      <div
        className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-500/50 to-transparent 
                    opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100"
      ></div>

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

interface CardHeaderProps {
  children: ReactNode;
  className?: string;
  icon?: ReactNode;
}

export const CardHeader = ({
  children,
  className = "",
  icon,
}: CardHeaderProps) => {
  return (
    <div className={`mb-6 ${className}`}>
      <h3
        className="text-2xl font-bold text-red-100 group-hover:text-red-300 
                   transition-all duration-300 group-hover:translate-x-1 flex items-center gap-3"
      >
        {icon && (
          <span className="text-3xl group-hover:scale-110 transition-transform duration-300">
            {icon}
          </span>
        )}
        {children}
      </h3>
    </div>
  );
};

interface CardContentProps {
  children: ReactNode;
  className?: string;
}

export const CardContent = ({ children, className = "" }: CardContentProps) => {
  return (
    <div
      className={`text-gray-300 group-hover:text-gray-200 transition-colors duration-300 ${className}`}
    >
      {children}
    </div>
  );
};

interface CardFooterProps {
  children: ReactNode;
  className?: string;
}

export const CardFooter = ({ children, className = "" }: CardFooterProps) => {
  return (
    <div
      className={`pt-4 mt-4 border-t border-zinc-800/50 group-hover:border-red-500/20 
                    transition-colors duration-300 ${className}`}
    >
      {children}
    </div>
  );
};

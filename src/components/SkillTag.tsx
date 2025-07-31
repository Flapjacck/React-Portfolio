import { ReactNode } from "react";

interface SkillTagProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "accent";
  size?: "sm" | "md" | "lg";
  interactive?: boolean;
  className?: string;
}

export const SkillTag = ({
  children,
  variant = "primary",
  size = "md",
  interactive = true,
  className = "",
}: SkillTagProps) => {
  const baseClasses =
    "relative font-medium transition-all duration-300 border cursor-default";

  const variantClasses = {
    primary: `bg-red-500/10 text-red-400 border-red-500/20 hover:bg-red-500/20 
              hover:text-red-300 hover:border-red-500/40`,
    secondary: `bg-zinc-500/10 text-zinc-400 border-zinc-500/20 hover:bg-zinc-500/20 
                hover:text-zinc-300 hover:border-zinc-500/40`,
    accent: `bg-orange-500/10 text-orange-400 border-orange-500/20 hover:bg-orange-500/20 
             hover:text-orange-300 hover:border-orange-500/40`,
  };

  const sizeClasses = {
    sm: "py-1 px-3 text-xs rounded-md",
    md: "py-2 px-4 text-sm rounded-full",
    lg: "py-3 px-6 text-base rounded-full",
  };

  const interactiveClasses = interactive
    ? `transform hover:scale-105 hover:-translate-y-0.5 
       hover:shadow-[0_4px_12px_rgba(239,68,68,0.25)]
       before:absolute before:inset-0 before:bg-red-500/5 before:rounded-full 
       before:scale-0 hover:before:scale-100 before:transition-transform before:duration-300`
    : "";

  const combinedClasses = `
    ${baseClasses} 
    ${variantClasses[variant]} 
    ${sizeClasses[size]} 
    ${interactive ? interactiveClasses : ""} 
    ${className}
  `
    .trim()
    .replace(/\s+/g, " ");

  return (
    <span className={combinedClasses}>
      <span className="relative z-10">{children}</span>
    </span>
  );
};

interface SkillGroupProps {
  title: string;
  skills: string[];
  icon?: string;
  className?: string;
}

export const SkillGroup = ({
  title,
  skills,
  icon,
  className = "",
}: SkillGroupProps) => {
  return (
    <div className={`group/skill ${className}`}>
      <h4
        className="text-lg font-semibold mb-3 text-red-100 group-hover/skill:text-red-300 
                   transition-colors duration-300 flex items-center gap-2"
      >
        {icon && <span className="text-xl">{icon}</span>}
        {title}
      </h4>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <SkillTag key={index}>{skill}</SkillTag>
        ))}
      </div>
    </div>
  );
};

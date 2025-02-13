import { FC } from "react";

interface MobileMenuProps {
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
}

export const Menu: FC<MobileMenuProps> = ({ menuOpen, setMenuOpen }) => {
  const menuItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
  ];

  return (
    <div
      className={`fixed inset-0 z-40 flex flex-col items-center justify-center bg-zinc-900/80
                  transition-all duration-500 ease-in-out
                  ${
                    menuOpen
                      ? "h-screen opacity-100 pointer-events-auto"
                      : "h-0 opacity-0 pointer-events-none"
                  }
                `}
    >
      <button
        onClick={() => setMenuOpen(false)}
        className="absolute top-6 right-6 text-red-50 text-3xl focus:outline-none cursor-pointer"
        aria-label="Close Menu"
      >
        &times;
      </button>

      {menuItems.map(({ label, href }) => (
        <a
          key={label}
          href={href}
          onClick={() => setMenuOpen(false)}
          className={`text-2xl font-semibold text-red-200 my-4 transition-transform duration-300
                      ${
                        menuOpen
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-5"
                      }
                    `}
        >
          {label}
        </a>
      ))}
    </div>
  );
};

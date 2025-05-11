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
      className={`fixed inset-0 z-30 backdrop-blur-lg bg-zinc-900/60
                  transition-all duration-500 ease-in-out
                  ${
                    menuOpen
                      ? "opacity-100 pointer-events-auto"
                      : "opacity-0 pointer-events-none"
                  }
                `}
    >
      <div
        className={`h-full w-full flex flex-col items-center justify-center
                      transition-all duration-700 ease-out
                      ${menuOpen ? "scale-100" : "scale-95"}`}
      >
        {menuItems.map(({ label, href }, index) => (
          <a
            key={label}
            href={href}
            onClick={() => setMenuOpen(false)}
            className={`mobile-menu-item text-3xl font-semibold text-white/90 hover:text-white my-6 px-8 py-2
                      transition-all duration-500 ease-out delay-[${
                        index * 100
                      }ms]
                      ${
                        menuOpen
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-8"
                      }`}
          >
            {label}
          </a>
        ))}
      </div>
    </div>
  );
};

import { useEffect, useState } from "react";

interface NavbarProps {
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
  isLoaded?: boolean;
}

export const Navbar = ({ menuOpen, setMenuOpen, isLoaded }: NavbarProps) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  // animate navbar in slightly after load so the title can take focus
  useEffect(() => {
    if (isLoaded) {
      const t = setTimeout(() => setVisible(true), 600);
      return () => clearTimeout(t);
    } else {
      setVisible(false);
    }
  }, [isLoaded]);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-40 transition-all duration-500 ${
          isScrolled
            ? "bg-[rgba(10,10,10,0.85)] backdrop-blur-lg shadow-lg"
            : "bg-transparent"
        } ${visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-3 pointer-events-none"}`}
      >
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
              <a href="#home" className="font-mono text-xl font-bold">
              spencer
              <span className="gradient-bg gradient-glow bg-clip-text text-transparent">
                .kelly
              </span>
            </a>

            <div
              className={`hamburger-menu relative cursor-pointer z-40 md:hidden ${
                menuOpen ? "open" : ""
              }`}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <div className="hamburger-line line-1 mb-1.5"></div>
              <div className="hamburger-line line-2 mb-1.5"></div>
              <div className="hamburger-line line-3"></div>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              {menuItems.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  className="nav-link text-white/90 hover:text-white transition-colors"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>
      <div className="scroll-progress">
        <div
          className="scroll-progress-bar"
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div>
    </>
  );
};

import { RevealOnScroll } from "../RevealOnScroll";
import { SvgRow } from "../SvgRow";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <RevealOnScroll>
        <div className="text-center z-10 px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-bg bg-clip-text text-transparent leading-tight">
            Hey, I'm Spencer Kelly
          </h1>

          <SvgRow />

          <div className="flex justify-center space-x-4">
            <a
              href="#about"
              className="border border-red-500/50 text-red-500 py-3 px-6 rounded font-medium transition-all duration-200 
             hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-red-500/10"
            >
              About Me
            </a>

            <a
              href="#projects"
              className="bg-red-500 text-white py-3 px-6 rounded font-medium transition relative hover:-translate-y-0.5 hover:bg-red-400"
            >
              View Projects
            </a>
          </div>
          </div>
      </RevealOnScroll>
    </section>
  );
};
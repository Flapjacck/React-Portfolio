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
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-l from-red-600 to-red-200 bg-clip-text text-transparent leading-tight">
            Hey, I'm Spencer Kelly
          </h1>

          <SvgRow />
          
          <div className="flex justify-center space-x-4">
            <a
              href="#projects"
              className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]"
            >
              View Projects
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
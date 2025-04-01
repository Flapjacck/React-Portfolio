import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";

interface GalleryImage {
  src: string;
  alt: string;
  caption: string;
}

const images: GalleryImage[] = [
  {
    src: "/Smokey_tongue.jpg",
    alt: "Smokey with tongue out",
    caption: "Smokey being Smokey",
  },
  {
    src: "/Maverick.jpg",
    alt: "Maverick",
    caption: "Maverick relaxing",
  },
  {
    src: "/me_and_cats.jpg",
    alt: "Me with my cats",
    caption: "Quality time with my feline friends",
  },
  {
    src: "/Bazooka.jpg",
    alt: "Bazooka",
    caption: "Throwback",
  },
  {
    src: "/Me_and_camps.jpg",
    alt: "Me and Camps",
    caption: "Peace and love",
  },
  {
    src: "/Kellyroad.jpg",
    alt: "Kelly Road",
    caption: "",
  },
];

export const Gallery: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <section
      id="gallery"
      className="min-h-screen flex flex-col items-center justify-center py-20 bg-zinc-800 text-white"
    >
      <RevealOnScroll>
        <div className="max-w-5xl w-full px-4 mb-10 text-center">
          <h2 className="text-3xl font-bold gradient-bg bg-clip-text text-transparent">
            My Gallery
          </h2>
        </div>

        {/* Fixed size container */}
        <div className="relative w-full max-w-6xl h-[500px] rounded-2xl overflow-hidden border border-white/10 shadow-[0_4px_15px_rgba(255,0,0,0.1)]">
          <div className="w-full h-full flex items-center justify-center bg-black/20">
            <img
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
              className="max-w-full max-h-full object-contain transition-opacity duration-700"
            />
          </div>

          {/* Left Click Zone */}
          <div
            onClick={goToPrevious}
            className="absolute left-0 top-0 h-full w-1/2 cursor-pointer z-10"
            aria-label="Previous"
          />

          {/* Right Click Zone */}
          <div
            onClick={goToNext}
            className="absolute right-0 top-0 h-full w-1/2 cursor-pointer z-10"
            aria-label="Next"
          />

          {/* Image Index */}
          <div className="absolute bottom-4 right-4 bg-zinc-900/50 text-sm text-red-300 px-3 py-1 rounded">
            {currentIndex + 1} / {images.length}
          </div>
        </div>

        {/* Caption - always centered with fixed width */}
        <div className="w-full max-w-6xl mt-6 flex justify-center">
          <p className="text-red-300 text-sm sm:text-base text-center max-w-2xl px-4">
            {images[currentIndex].caption}
          </p>
        </div>
      </RevealOnScroll>
    </section>
  );
};

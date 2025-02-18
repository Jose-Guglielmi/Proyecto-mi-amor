import { useState } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";

const images = Array.from({ length: 41 }, (_, i) => `/img/${41 - i}.jpg`);

export const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="relative w-full max-w-3xl overflow-hidden">
      <div
        className="flex transition-transform duration-300 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((src, index) => (
          <div
            key={index}
            className="w-full flex-shrink-0 justify-center items-center flex"
          >
            <img
              src={src || "/placeholder.svg"}
              alt={`Imagen ${index + 1}`}
              className="w-full h-auto rounded-lg shadow-lg "
            />
          </div>
        ))}
      </div>
      <button
        onClick={prevSlide}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/50 rounded-full p-2 hover:bg-white/75 transition-colors"
      >
        <ChevronLeft className="w-6 h-6 text-rose-800" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/50 rounded-full p-2 hover:bg-white/75 transition-colors"
      >
        <ChevronRight className="w-6 h-6 text-rose-800" />
      </button>
    </div>
  );
};

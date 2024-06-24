import { nanoid } from "nanoid";
import React, { useState, useEffect, useRef } from "react";

const ImageCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (carouselRef.current) {
        const scrollLeft = carouselRef.current.scrollLeft;
        const width = carouselRef.current.clientWidth;
        const newIndex = Math.round(scrollLeft / width);
        setCurrentIndex(newIndex);
      }
    };

    const carousel = carouselRef.current;
    if (carousel) {
      carousel.addEventListener("scroll", handleScroll);
      return () => {
        carousel.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  return (
    <div className="relative block md:hidden">
      <div
        ref={carouselRef}
        className="w-full h-[300px] scrollbar-hide flex items-center overflow-x-auto snap-x snap-mandatory"
      >
        {images?.map((img, index) => (
          <div key={nanoid()} className="min-w-[400px] h-full snap-center">
            <img
              src={img}
              alt={` ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      <div className="mt-2 absolute bottom-4 right-4 bg-black/60 text-center rounded-md">
        <div className="text-white/90 px-3 py-[2px] text-xs">
          <span className="mr-1">{currentIndex + 1}</span>/
          <span>{images.length}</span>
        </div>
      </div>
    </div>
  );
};

export default ImageCarousel;

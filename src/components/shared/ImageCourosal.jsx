import React, { useEffect, useRef, useState } from "react";

const ImageCourosal = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const images = container.getElementsByTagName("img");
    const observerOptions = {
      root: container,
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = Array.from(images).indexOf(entry.target);
          setCurrentIndex(index);
        }
      });
    }, observerOptions);

    Array.from(images).forEach((img) => observer.observe(img));

    return () => observer.disconnect();
  }, [images]);
  return (
    <div className="relative block md:hidden ">
      <div
        ref={containerRef}
        className="w-full h-[300px]  bg-blue-200 flex items-center overflow-x-auto snap-x snap-mandatory"
      >
        {images?.map((img, index) => (
          <img
            key={index}
            src={img}
            alt=""
            className="min-w-[400px] h-full object-cover snap-center"
          />
        ))}
      </div>
      <div className="mt-2 absolute bottom-4 right-4 bg-black/60 text-center rounded-md">
        <div className="text-white/90 px-3 py-[2px] text-xs  ">
          <span className="mr-1">{currentIndex + 1}</span>/
          <span> {images.length}</span>
        </div>
      </div>
    </div>
  );
};

export default ImageCourosal;

import React from "react";
import left from "../../../asset/svg/leftArrow.svg";
import share from "../../../asset/svg/share.svg";
import save from "../../../asset/svg/save.svg";

const Gallery = ({ isGalleryOpen, setIsGalleryOpen, images }) => {
  return (
    <div
      className={`bg-white absolute top-0 z-50 right-0 left-0  p-5 ${
        isGalleryOpen ? `` : `hidden`
      }`}
    >
      <div className="flex justify-between">
        <div
          onClick={() => setIsGalleryOpen(false)}
          className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-300"
        >
          <img src={left} alt="left icon" />
        </div>

        <div className=" flex">
          <div className="flex items-center">
            <img src={share} alt="share icon" />
            <span className="ml-2">share</span>
          </div>
          <div className="flex items-center ml-4">
            <img src={save} alt="save icon" />
            <span>save</span>
          </div>
        </div>
      </div>
      <div className="my-9 flex justify-center">
        <div className="w-2/4 bg-red-500 h-fit">
          {images.map((item, index) => (
            <div key={index} className="w-full">
              <img src={item} alt="gallery" className="w-full" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;

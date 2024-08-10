import React from "react";

const ImageGallery = ({ isGalleryOpen, setIsGalleryOpen, images }) => {
  return (
    <div
      className={`hidden w-full h-[400px] md:flex mt-7 rounded-2xl overflow-hidden  relative  ${
        isGalleryOpen ? ` -z-10` : ``
      } `}
    >
      <div className=" flex-1  bg-gray-400 mr-2">
        <img
          src={images[0]}
          alt="room1"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="flex-1  h-full flex flex-col">
        <div className="flex-1  mb-2 flex overflow-hidden">
          <div className="flex-1 mr-2 bg-gray-400">
            <img
              src={images[1]}
              alt="room2 "
              className="object-cover w-full h-full"
            />
          </div>
          <div className="flex-1  bg-gray-400 ">
            <img
              src={images[2]}
              alt="room2 "
              className="object-cover w-full h-full"
            />
          </div>
        </div>
        <div className="flex-1  flex overflow-hidden">
          <div className="flex-1 mr-2 bg-gray-400">
            <img
              src={images[3]}
              alt="room2 "
              className="object-cover w-full h-full"
            />
          </div>
          <div className="flex-1 bg-gray-400 ">
            <img
              src={images[4]}
              alt="room2 "
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
      <div
        onClick={() => setIsGalleryOpen(true)}
        className="bg-white px-5  cursor-pointer py-2 flex items-center justify-center border absolute rounded-xl bottom-5 right-5"
      >
        <span className="font-medium">show all </span>
      </div>
    </div>
  );
};

export default ImageGallery;

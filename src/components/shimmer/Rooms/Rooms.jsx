import React from "react";

const RoomsShimmer = () => {
  return (
    <div className="p-5 animate-pulse">
      <div className="bg-gray-300 w-[200px] h-5"></div>
      <div className="bg-gray-300 w-[200px] h-2 my-[25px]"></div>
      <div className="bg-gray-300 w-full h-[350px] rounded-2xl"></div>
      <div className="flex">
        <div className="w-[30%] h-[400px] bg-gray-300 my-6 rounded-xl"></div>
      </div>
    </div>
  );
};

export default RoomsShimmer;

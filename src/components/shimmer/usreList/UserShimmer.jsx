import React from "react";

const UserShimmer = () => {
  const arr = new Array(10).fill(" ");
  return (
    <div>
      {arr.map((item) => (
        <div className="p-3 flex items-center animate-pulse">
          <div className="w-10 h-10 bg-gray-300 rounded-full "></div>
          <div className="w-[15%] h-5 bg-gray-300 ml-4 mr-[5%]"></div>
          <div className="w-[10%] h-4 bg-gray-300 mx-[5%]"></div>
          <div className="w-[8%] h-2 bg-gray-300 "></div>
          <div className="w-[10%] h-4 bg-gray-300 mx-[5%]"></div>
          <div className="w-[8%] h-2 bg-gray-300 "></div>
        </div>
      ))}
    </div>
  );
};

export default UserShimmer;

import React from "react";

const WishShimmer = () => {
  const arr = new Array(6).fill("");
  return (
    <div className=" grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
      {arr.map((item, index) => (
        <div
          key={index}
          className=" h-[150px] md:h-[200px] skeleton bg-gray-300 rounded-xl "
        ></div>
      ))}
    </div>
  );
};

export default WishShimmer;

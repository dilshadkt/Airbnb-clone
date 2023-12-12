import React from "react";

const WishShimmer = () => {
  const arr = new Array(6).fill("");
  return (
    <div className="animate-pulse flex flex-wrap">
      {arr.map(() => (
        <div className="w-[200px] h-[200px] bg-gray-300 rounded-xl m-3 "></div>
      ))}
    </div>
  );
};

export default WishShimmer;

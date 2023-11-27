import React from "react";

const ShimmerUi = () => {
  const arr = new Array(12).fill("");

  return (
    <>
      <div className="flex flex-wrap items-center w-full">
        {arr.map((item, index) => (
          <div key={`${item}-${index}`} className="animate-pulse w-[20%]  m-6">
            <div className=" h-[270px] rounded-xl bg-gray-300"></div>
            <div className="my-3">
              <div className="bg-gray-300 h-[10px] w-[70%]"></div>
              <div className="bg-gray-300 my-3 h-[10px] w-[40%]"></div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ShimmerUi;

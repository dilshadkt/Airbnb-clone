import React from "react";

const ListShimmer = () => {
  const arr = new Array(7).fill("");
  return (
    <div className=" md:mx-[10%] my-[5%]">
      <div className="skeleton h-8 rounded-lg w-full mb-8"></div>
      {arr.map((item, index) => (
        <div
          key={`${item}-${index}`}
          className="p-3 md:p-5 border my-3 rounded-xl flex justify-between items-center"
        >
          <div className="flex">
            <div className=" w-[180px] md:w-[200px] h-[100px] md:h-[150px] bg-gray-300 rounded-xl"></div>
            <div className="flex flex-col justify-center">
              <div className="w-[100px] ml-6 h-[7px] md:h-[10px]  bg-gray-300"></div>
              <div className="w-[80px] ml-6 h-[7px] md:h-[10px] my-3  bg-gray-300"></div>
              <div className="w-[80px] ml-6 h-[7px] md:h-[10px]  bg-gray-300"></div>
              <div className="w-[50px] ml-6 h-[7px] md:h-[10px] mt-3 bg-gray-300"></div>
            </div>
          </div>

          <div className=" hidden md:block w-[200px] h-[15px] bg-gray-300"></div>
          <div className="hidden md:block w-[100px] h-[45px] rounded-xl bg-gray-300"></div>
        </div>
      ))}
    </div>
  );
};

export default ListShimmer;

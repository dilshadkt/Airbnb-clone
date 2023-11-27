import React from "react";

const ListShimmer = () => {
  const arr = new Array(7).fill("");
  return (
    <div className="mx-[10%] my-[5%]">
      {arr.map((item, index) => (
        <div
          key={`${item}-${index}`}
          className="p-5 border my-3 rounded-xl flex justify-between items-center"
        >
          <div className="flex">
            <div className="w-[200px] h-[150px] bg-gray-300 rounded-xl"></div>
            <div className="flex flex-col justify-center">
              <div className="w-[100px] ml-6 h-[10px]  bg-gray-300"></div>
              <div className="w-[80px] ml-6 h-[10px] my-3  bg-gray-300"></div>
              <div className="w-[80px] ml-6 h-[10px]  bg-gray-300"></div>
              <div className="w-[50px] ml-6 h-[10px] mt-3 bg-gray-300"></div>
            </div>
          </div>

          <div className="w-[200px] h-[15px] bg-gray-300"></div>
          <div className="w-[100px] h-[45px] rounded-xl bg-gray-300"></div>
        </div>
      ))}
    </div>
  );
};

export default ListShimmer;

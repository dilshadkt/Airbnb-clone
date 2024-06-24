import { nanoid } from "nanoid";
import React from "react";

const RoomsShimmer = () => {
  return (
    <div className=" animate-pulse">
      <div className="p-5 flex items-center justify-between">
        <div className="skeleton h-8 w-14"></div>
        <div className="skeleton h-8 w-14"></div>
      </div>
      <div className="skeleton h-[300px] w-full my-3"></div>
      <div className="flex px-5 flex-col ">
        <div className="skeleton h-8 w-full  my-3"></div>
        <div className="flex items-center gap-3">
          <div className="skeleton h-8 w-14"></div>
          <div className="skeleton h-8 w-14"></div>
          <div className="skeleton h-8 w-14"></div>
        </div>
      </div>
      <hr className="my-3" />
      <div className="my-3 flex items-center mx-7">
        <div className="skeleton h-16 w-16 shrink-0 rounded-full"></div>
        <div className="skeleton h-4 w-28 ml-3"></div>
      </div>
      <hr className="my-3" />
      <div>
        {new Array(3).fill(" ").map((item) => (
          <div key={nanoid()} className="my-3 flex items-center mx-7">
            <div className="skeleton h-16 w-16 shrink-0 rounded-lg"></div>
            <div className=" ml-3 grid gap-2 w-full">
              <div className="skeleton h-6 w-full"></div>
              <div className="skeleton h-2 w-24"></div>
              <div className="skeleton h-2 w-24"></div>
            </div>
          </div>
        ))}
      </div>
      <hr className="my-3" />
      <div className="mx-7">
        <div className="skeleton h-8 w-48"></div>
        <div className="skeleton h-[230px] my-7 w-[90%]"></div>
        <div className="skeleton h-2 w-[90%] my-2"></div>
        <div className="skeleton h-2 w-[90%] my-2"></div>
        <div className="skeleton h-2 w-[90%] my-2"></div>
        <div className="skeleton h-2 w-[90%] my-2"></div>
        <div className="skeleton h-2 w-[90%] my-2"></div>
      </div>
    </div>
  );
};

export default RoomsShimmer;

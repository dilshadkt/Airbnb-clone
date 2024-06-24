import React from "react";

const Shimmer = () => {
  return (
    <div>
      <div className="skeleton h-14 w-full mb-4"></div>
      <div className="flex flex-col md:flex-row mx-5">
        <div className="flex-initial w-full md:w-[30%] ">
          <div className="flex flex-col items-center justify-center shadow-xl my-3 py-4 rounded-lg">
            <div className="skeleton h-24 w-24 rounded-full mx-auto mb-4"></div>
            <div className="skeleton h-4 w-20"></div>
            <div className="skeleton h-4 w-20 my-2"></div>
          </div>
          <div className="skeleton h-6 w-[60%] mb-2 mt-10"></div>
          <div className="skeleton h-4 w-full mb-4"></div>
          <div className="skeleton h-4 w-full mb-4"></div>
          <div className="skeleton h-4 w-full mb-4"></div>
        </div>
        <div className="flex-1 mt-6 md:mt-0 mx-2 md:mx-0 pb-10 md:pb-0 md:ml-5">
          <div className="skeleton h-6 w-[40%] mb-4"></div>
          <div className="skeleton h-4 w-full mb-4"></div>
          <div className="skeleton h-4 w-full mb-4"></div>
          <div className="skeleton h-10 w-full"></div>
        </div>
      </div>
    </div>
  );
};

export default Shimmer;

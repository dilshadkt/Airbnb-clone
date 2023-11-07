import React from "react";
import bed from "../../../asset/svg/bed.svg";

const PrivacyType = () => {
  return (
    <div className="w-full flex justify-center h-[78vh] overflow-scroll overflow-x-hidden">
      <div className="w-[40%] mt-[3%] ">
        <h1 className="text-3xl font-semibold ">
          What type of place will guests have?
        </h1>
        <div className="my-7">
          <div className="border p-6 rounded-xl flex my-2 hover:border-red-600 ">
            <div className="flex-1  flex flex-col justify-center">
              <h3 className="text-lg font-medium">An entire place</h3>
              <span className=" font-light text-gray-500">
                Guest have all place to themselves
              </span>
            </div>
            <div className="flex-initial w-[17%] flex items-center justify-center ">
              <img src={bed} alt="icons" />
            </div>
          </div>
          <div className="border p-6 rounded-xl flex my-2 hover:border-red-600">
            <div className="flex-1  flex flex-col justify-center">
              <h3 className="text-lg font-medium">An entire place</h3>
              <span className=" font-light text-gray-500">
                Guest have all place to themselves
              </span>
            </div>
            <div className="flex-initial w-[17%] flex items-center justify-center ">
              <img src={bed} alt="icons" />
            </div>
          </div>
          <div className="border p-6 rounded-xl flex my-2 hover:border-red-600 ">
            <div className="flex-1  flex flex-col justify-center">
              <h3 className="text-lg font-medium">An entire place</h3>
              <span className=" font-light text-gray-500">
                Guest have all place to themselves
              </span>
            </div>
            <div className="flex-initial w-[17%] flex items-center justify-center ">
              <img src={bed} alt="icons" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyType;

import React from "react";
import { data } from "../../../asset/amenities/data";
import bed from "../../../asset/svg/bed.svg";

const Structure = () => {
  return (
    <div className="w-full flex justify-center h-[78vh] overflow-scroll overflow-x-hidden">
      <div className="w-[40%] ">
        <h1 className="text-3xl font-semibold w-[70%]">
          Which of these best describes your place?
        </h1>
        <div className="flex flex-wrap justify-between mt-9">
          {data.map((item) =>
            item.items.map((item) => (
              <div className="p-5 border rounded-lg w-[31%] mb-3  hover:border-red-500">
                <img src={bed} alt="icons" className="w-11" />
                <h1 className="font-medium">{item.desc}</h1>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Structure;

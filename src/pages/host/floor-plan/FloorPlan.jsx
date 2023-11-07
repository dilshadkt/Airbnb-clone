import React from "react";
import FloorSlip from "../../../components/FloorPlan/FloorSlip";

const FloorPlan = () => {
  return (
    <div className="w-full flex justify-center h-[78vh] overflow-scroll overflow-x-hidden">
      <div className="w-[40%] ">
        <h1 className="text-3xl font-medium my-4">
          Let's start with the basics
        </h1>
        <div className="my-9">
          <h3 className="font-medium text-lg">
            How many people can stay here?
          </h3>
          <FloorSlip title="Guests" />
          <FloorSlip title="Bedrooms" />
          <FloorSlip title="Beds" />
          <div className="my-9">
            <h3 className="text-lg   font-medium my-5">
              Does every bedroom have a lock?
            </h3>
            <div className="my-4">
              <input type="checkbox" className="rounded-full" id="#room" />
              <span className="ml-3">Yes</span>
            </div>
            <div>
              <input type="checkbox" className="rounded-full" id="#room" />
              <span className="ml-3">Yes</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FloorPlan;

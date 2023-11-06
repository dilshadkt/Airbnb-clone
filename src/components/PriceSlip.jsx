import React from "react";
import room from "../asset/stuff/Rectangle 53.jpg";
import rating from "../asset/svg/rating.svg";

const PriceSlip = () => {
  return (
    <div className="border rounded-lg p-5 h-fit w-[440px] sticky top-32 shadow-xl">
      <div className="pb-5 flex">
        <div className="flex-initial w-[30%] bg-red-400 h-28">
          <img src={room} alt="room " className="w-full object-cover" />
        </div>
        <div className="flex-1  pl-4 flex flex-col justify-between">
          <div>
            <h5 className="text-xs text-gray-500">Entire cottage</h5>
            <h3 className="text-sm">
              Magazine-featured Goan-Style Seaside Cottage
            </h3>
          </div>
          <div className="flex">
            <img src={rating} alt="rating" className="w-3 mr-2" />
            <div>
              4.8<span className="text-xs text-gray-400"> (1208)</span>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="pt-5">
        <h3 className="text-xl font-medium mb-5 ">Price details</h3>
        <div className="flex justify-between my-3 text-gray-400">
          <h5>₹11,085 x 5 nights</h5>
          <span>₹55,425</span>
        </div>
        <div className="flex justify-between my-3 text-gray-400">
          <h5>₹11,085 x 5 nights</h5>
          <span>₹55,425</span>
        </div>
        <hr className="mt-5" />
        <div className="font-medium pt-5">
          <div className="flex justify-between">
            <h5>Total (INR)</h5>
            <span>₹65,401.5</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceSlip;

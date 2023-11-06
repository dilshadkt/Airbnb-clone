import React from "react";
import Buttons from "./Buttons";

const PaymentCard = () => {
  return (
    <div className="border  overflow-hidden h-fit p-5 w-[415px] rounded-lg sticky top-[200px] shadow-2xl bg-white">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-medium">₹14,000 night</h2>
        <span className="underline text-xs text-gray-400">1 reviews</span>
      </div>
      <div className=" border border-collapse w-full my-6 rounded-lg overflow-hidden text-xs">
        <div className="flex border-collapse ">
          <div className="flex-1 border p-3">
            <h3 className="font-medium">CHECK-IN</h3>
            <span>11-12-2033</span>
          </div>
          <div className="flex-1 borde p-3 ">
            <h3 className="font-medium">CHECK-OUT</h3>
            <span>11-12-2033</span>
          </div>
        </div>
        <div className=" border p-3">
          <h3 className="font-medium">GUESTS</h3>
          <span>1 Guest</span>
        </div>
      </div>
      <Buttons
        color="bg-rose-500"
        width="w-full"
        title="Reserve"
        path="book/stay"
      />
      <div className="text-center text-sm my-4">
        <span>You won't be charged yet</span>
      </div>
      <div className="flex justify-between text-sm my-5">
        <h3>₹14,000 x 5 nights</h3>
        <span>₹70,000</span>
      </div>
      <hr />
      <div className="flex justify-between text-sm my-5">
        <h3 className="font-medium">Total before taxes</h3>
        <span>₹70,000</span>
      </div>
    </div>
  );
};

export default PaymentCard;

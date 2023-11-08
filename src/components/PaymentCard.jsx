import React, { useState } from "react";
import Buttons from "./Buttons";

const PaymentCard = ({ night }) => {
  const [checkin, setCheckIn] = useState("");
  const [checkout, setCheckOut] = useState("");
  const [guest, setGuest] = useState("");
  const [nightCount, setnightCount] = useState(1);
  return (
    <div className="border  overflow-hidden h-fit p-5 w-[415px] rounded-lg sticky top-[200px] shadow-2xl bg-white">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-medium">₹{night} night</h2>
        <span className="underline text-xs text-gray-400">1 reviews</span>
      </div>
      <div className=" border border-collapse w-full my-6 rounded-lg overflow-hidden text-xs">
        <div className="flex border-collapse ">
          <div className="flex-1 border p-3">
            <h3 className="font-medium">CHECK-IN</h3>
            <span>
              <input
                type="text"
                placeholder="dd/mm/yy"
                onChange={(e) => setCheckIn(e.target.value)}
              />
            </span>
          </div>
          <div className="flex-1 borde p-3 ">
            <h3 className="font-medium">CHECK-OUT</h3>
            <input
              type="text"
              placeholder="dd/mm/yy"
              onChange={(e) => setCheckOut(e.target.value)}
            />
          </div>
        </div>
        <div className=" border p-3">
          <h3 className="font-medium">GUESTS</h3>
          <span className="w-full">
            <select
              className="w-full py-2"
              onChange={(e) => console.log(setGuest(e.target.value))}
            >
              <option value={0}>guest</option>
              <option value={1}>1 guest</option>
              <option value={2} className="p-3">
                2 guest
              </option>
              <option value={3}>3 guest</option>
              <option value={4}>4 guest</option>
            </select>
          </span>
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
        <h3>
          ₹{Number(night) * guest} x {nightCount} nights
        </h3>
        <span>₹{Number(night) * guest * nightCount}</span>
      </div>
      <div className="flex justify-between text-sm my-5">
        <h3>airbnb taxes</h3>
        <span>₹{(Number(night) * guest * nightCount * 5) / 100}</span>
      </div>
      <hr />
      <div className="flex justify-between text-sm my-5">
        <h3 className="font-medium">Total before taxes</h3>
        <span>
          ₹{Number(night) * guest * 5 + (Number(night) * guest * 5 * 5) / 100}
        </span>
      </div>
    </div>
  );
};

export default PaymentCard;

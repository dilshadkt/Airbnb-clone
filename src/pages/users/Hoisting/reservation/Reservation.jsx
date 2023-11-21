import React from "react";

const Reservation = ({ item }) => {
  return (
    <div className="my-7 ">
      <div className="p-3 border rounded-lg flex hover:bg-slate-100 cursor-pointer">
        <div
          className="flex-initial w-[15%] h-[100px] bg-green-400 overflow-hidden rounded-lg
       "
        >
          <img
            src={item.listingId.images[0]}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div
          className="flex-1  px-3 flex items-center
       "
        >
          <ul className="flex w-full justify-around font-medium text-gray-400">
            <li>{item.checkInDate}</li>
            <li>{item.checkoutDate}</li>
            <li>{item.bookingDate}</li>
            <li className="underline">{item.totalPrice}₹</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Reservation;

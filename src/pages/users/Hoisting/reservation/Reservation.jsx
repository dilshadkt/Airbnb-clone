import React from "react";

const Reservation = ({ item }) => {
  return (
    <div className="my-7 ">
      <div className="p-3 border rounded-lg flex items-center justify-between  hover:bg-slate-100 cursor-pointer">
        <div
          className="flex-initial w-[50%] md:w-[15%] h-[100px] bg-gray-400 overflow-hidden rounded-lg
       "
        >
          <img
            src={item?.listingId?.images?.[0]}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div
          className="flex-1   justify-end px-3 flex  items-center
       "
        >
          <ul className="flex  md:justify-around md:font-medium flex-col md:flex-row text-sm md:text-base font-normal  text-gray-400 sm:text-sm">
            <li>{new Date(JSON.parse(item.checkInDate)).toDateString()}</li>
            <li>{new Date(JSON.parse(item.checkoutDate)).toDateString()}</li>
            <li>{item?.bookingDate}</li>
            <li className="underline font-bold text-gray-600">
              ₹{item?.totalPrice}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Reservation;

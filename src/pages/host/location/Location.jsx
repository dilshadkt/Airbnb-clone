import React from "react";

const Location = () => {
  return (
    <div className="w-full flex justify-center h-[78vh] overflow-scroll overflow-x-hidden">
      <div className="w-[40%] ">
        <h1 className="text-3xl font-medium my-4">
          Where's your place located?
        </h1>
        <span className="text-gray-500 text-lg">
          Your address is only shared with guests after they’ve made a
          reservation.
        </span>
        <div className="flex justify-center my-[5%]">
          <input
            type="search"
            placeholder="Enter your address"
            className="border rounded-full shadow-lg px-5 py-3 text-lg w-[80%]"
          />
        </div>
      </div>
    </div>
  );
};

export default Location;

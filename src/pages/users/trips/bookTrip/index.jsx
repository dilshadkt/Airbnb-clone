import React from "react";
import PrimaryButton from "../../../../components/shared/primaryButton";
import { Link } from "react-router-dom";

const BookTrip = () => {
  return (
    <div className="md:mx-20 pb-8 m-5">
      <h3 className="font-semibold text-lg md:text-4xl py-3 md:py-8 border-b">
        Trips
      </h3>
      <div className=" py-8 flex items-center border-b">
        <div>
          <h5 className="font-medium text-xl md:text-2xl">
            No trips booked ... yet!
          </h5>
          <p className="mt-2 text-sm md:text-base ">
            Time to dust off your bags and start planning your next adventure.
          </p>
          <Link to={"/"}>
            <button className="border-[1.5px] text-xs md:text-base  font-semibold border-black/80 my-4  rounded-lg p-3 px-5 flex items-center justify-center">
              Start Searching
            </button>
          </Link>
        </div>
      </div>
      <p className="mt-4 text-sm md:text-base font-medium">
        Can’t find your reservation here?Visit the Help Centre
      </p>
    </div>
  );
};

export default BookTrip;

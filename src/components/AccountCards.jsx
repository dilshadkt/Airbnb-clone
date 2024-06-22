import React from "react";
import { Link } from "react-router-dom";

const AccountCards = ({ icons, title, description }) => {
  return (
    <div className=" bg-white rounded-xl md:shadow-lg  p-3 md:p-5 md:mb-4 cursor-pointer">
      <Link to={title.split(" ")[0]}>
        <div className=" mb-3">
          <img src={icons} alt="personal info" className="hidden md:block" />
        </div>
        <div className="flex items-center justify-between">
          <div>
            <h4 className="font-medium mb-1"> {title}</h4>
            <p className="text-sm text-gray-500 w-[90%]">{description}</p>
          </div>
          <img src="/assets/svg/right.svg" className="w-4" alt="arrow" />
        </div>
      </Link>
    </div>
  );
};

export default AccountCards;

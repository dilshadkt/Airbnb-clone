import React from "react";
import { Link } from "react-router-dom";

const AccountCards = ({ icons, title, description }) => {
  return (
    <div className="w-[32%] bg-white rounded-xl shadow-lg p-5 mb-4 cursor-pointer">
      <Link to={title.split(" ")[0]}>
        <div className=" mb-3">
          <img src={icons} alt="personal info" />
        </div>
        <div>
          <h4 className="font-medium mb-1"> {title}</h4>
          <p className="text-sm text-gray-500 w-[90%]">{description}</p>
        </div>
      </Link>
    </div>
  );
};

export default AccountCards;

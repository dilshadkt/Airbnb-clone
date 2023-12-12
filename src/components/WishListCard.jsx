import React from "react";
import cancel from "../asset/svg/cancel.svg";

import { useNavigate } from "react-router-dom";

const WishListCard = ({ data, remove }) => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-wrap ">
      {data?.map((item, index) => (
        <div
          key={`${item}-${index}`}
          onClick={() => navigate(`/rooms?id=${item.propertyId}`)}
          className="group w-[20%]  max-h-[250px] overflow-hidden flex flex-col items-center   "
        >
          <div className="w-[95%] h-full border-[7px] border-white   rounded-xl  shadow-md relative ">
            <img
              src={item.images[0]}
              alt="whish list"
              className="object-cover  w-full h-full  rounded-xl"
            />
            <div className="absolute w-full  top-3 pl-3">
              <div
                onClick={(e) => {
                  e.stopPropagation();
                  remove(item.propertyId);
                }}
                className="w-9 h-9 bg-white flex items-center invisible group-hover:visible justify-center rounded-full hover:scale-105"
              >
                <img src={cancel} alt="cancel icon" className="w-4" />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WishListCard;

import React, { useContext } from "react";
import cancel from "../asset/svg/cancel.svg";
import MyContext from "./contex/Mycontex";

const WishListCard = ({ remove }) => {
  const { datas } = useContext(MyContext);
  const filteredData = datas.filter((item) => item.whishlist === true);
  return (
    <div className="flex ">
      {filteredData.map((item) => (
        <div className="group w-[24%]  overflow-hidden flex flex-col items-center  mr-4 ">
          <div className="w-[95%] border-[7px] border-white   rounded-xl  shadow-md relative ">
            <img
              src={item.images[0]}
              alt="whish list"
              className="object-cover  w-full h-full  rounded-xl"
            />
            <div className="absolute w-full  top-3 pl-3">
              <div
                onClick={(e) => {
                  e.stopPropagation();
                  remove(item.id);
                }}
                className="w-9 h-9 bg-white flex items-center invisible group-hover:visible justify-center rounded-full hover:scale-105"
              >
                <img src={cancel} alt="cancel icon" className="w-4" />
              </div>
            </div>
          </div>
          <div className="p-5">
            {" "}
            <h3 className="font-medium text-sm">{item.title}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WishListCard;

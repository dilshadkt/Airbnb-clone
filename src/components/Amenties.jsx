import React from "react";
import cancel from "../asset/svg/cancel.svg";
import bed from "../asset/svg/bed.svg";
import { data } from "../asset/amenities/data";
import { setAmenties } from "../store/slice/User";
import { useDispatch } from "react-redux";

const Amenties = () => {
  const dispatch = useDispatch();

  return (
    <>
      <div className=" bg-black opacity-50 fixed top-0 bottom-0 right-0 left-0  z-10 "></div>
      <div className="w-[50%] h-[600px] bg-white shadow-lg fixed top-[5%] left-0 right-0 m-auto p-5 rounded-xl z-20 overflow-y-scroll">
        <div className="bg-white sticky -top-5 py-2">
          <div
            className="w-9 h-9 rounded-full flex items-center justify-center hover:bg-gray-300  flex-col "
            onClick={() => dispatch(setAmenties())}
          >
            <img src={cancel} alt="cancel" />
          </div>
        </div>

        <div className="my-5">
          <h2 className="text-2xl font-medium">What this place offers</h2>
        </div>

        {/* map aminties */}
        {data.map((item) => (
          <div className="py-5 flex flex-col">
            <h2 className="text-base font-medium">{item.title}</h2>
            {item.items.map((aminity) => (
              <div className="my-2">
                <div className="flex py-3 ">
                  <div className="flex-initial w-[10%] flex items-center justify-start">
                    <img src={aminity.img} alt={bed} />
                  </div>
                  <div className="flex-1   flex items-center">
                    {aminity.desc}
                  </div>
                </div>
                <hr />
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
};

export default Amenties;

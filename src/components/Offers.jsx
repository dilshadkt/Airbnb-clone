import React from "react";
import Buttons from "./Buttons";
import { data } from "../asset/amenities/data";
import { setAmenties } from "../store/slice/User";
import { useDispatch } from "react-redux";
const Offers = () => {
  const dispatch = useDispatch();
  const result = data
    .map((item) => item.items.map((item) => item))
    .flat(1)
    .slice(0, 6);
  const aminitiesCOunt = data.reduce(
    (total, item) => (total += item.items.length),
    0
  );

  return (
    <div className="py-5 h-fit">
      <h3 className="text-xl font-medium">What this place offers</h3>
      <div className="py-5 flex  flex-wrap">
        {result.map((item, index) => (
          <div key={index} className=" w-[45%] my-2 mr-4 flex">
            <img src={item.img} alt="icons" />
            <span className="ml-4">{item.desc}</span>
          </div>
        ))}
      </div>
      <div onClick={() => dispatch(setAmenties())}>
        <Buttons width="w-fit" title={`Show all ${aminitiesCOunt} aminities`} />
      </div>
    </div>
  );
};

export default Offers;

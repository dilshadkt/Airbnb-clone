import React, { useContext } from "react";

import Buttons from "./Buttons";
import MyContext from "./contex/Mycontex";
import { data } from "../asset/amenities/data";
const Offers = () => {
  const result = data
    .map((item) => item.items.map((item) => item))
    .flat(1)
    .slice(0, 6);
  console.log(result);
  const aminitiesCOunt = data.reduce(
    (total, item) => (total += item.items.length),
    0
  );

  const { setIsOpenAmenities } = useContext(MyContext);
  return (
    <div className="py-5 h-fit">
      <h3 className="text-xl font-medium">What this place offers</h3>
      <div className="py-5 flex  flex-wrap">
        {result.map((item) => (
          <div className=" w-[45%] my-2 mr-4 flex">
            <img src={item.img} alt="icons" />
            <span className="ml-4">{item.desc}</span>
          </div>
        ))}
      </div>
      <div onClick={() => setIsOpenAmenities(true)}>
        <Buttons width="w-fit" title={`Show all ${aminitiesCOunt} aminities`} />
      </div>
    </div>
  );
};

export default Offers;

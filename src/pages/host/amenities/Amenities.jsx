import React, { useContext, useEffect, useRef, useState } from "react";
import MyContext from "../../../components/contex/Mycontex";
import { data } from "../../../asset/amenities/data";
import Navigater from "../../../components/host-navigater/Navigater";

const Amenities = () => {
  const { setFormData } = useContext(MyContext);
  const ref = useRef(0);
  const [itmes, setItems] = useState([]);
  const handlechange = (data) => {
    if (itmes.includes(data)) {
      setItems(() => itmes.filter((item) => item !== data));
    } else {
      setItems((prev) => [...prev, data]);
    }
  };
  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      propertyOffer: itmes,
    }));
  }, [itmes, setFormData]);
  return (
    <>
      <div className="w-full flex justify-center h-[78vh] overflow-scroll overflow-x-hidden">
        <div className="w-[40%] ">
          <h1 className="text-3xl font-semibold w-[70%]">
            Tell guests what your place has to offer
          </h1>
          <h4 className="text-gray-500 text-lg">
            You can add more amenities after you publish your listing.
          </h4>
          <div className="flex flex-wrap justify-between mt-9">
            {data.map((item, index) =>
              item.items.map((item, groupIndex) => (
                <div
                  ref={ref}
                  key={`${index}-${groupIndex}`}
                  onClick={() => handlechange(item.desc)}
                  className={`p-5 border rounded-lg w-[31%] mb-3  hover:border-red-500 ${
                    itmes.includes(item.desc) ? `bg-red-400 text-white ` : ``
                  }`}
                >
                  <img src={item.img} alt="icons" className="w-11" />
                  <h1 className="font-medium">{item.desc}</h1>
                </div>
              ))
            )}
          </div>
        </div>
        {itmes.length !== 0 && <Navigater next={"photos"} />}
      </div>
    </>
  );
};

export default Amenities;

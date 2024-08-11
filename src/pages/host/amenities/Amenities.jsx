import React, { useEffect, useRef, useState } from "react";
import { data } from "../../../asset/amenities/data";
import Navigater from "../../../components/host-navigater/Navigater";
import { setForm } from "../../../store/slice/FormSlice";
import { useDispatch } from "react-redux";

const Amenities = () => {
  const dispatch = useDispatch();
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
    dispatch(setForm({ key: "propertyOffer", value: itmes }));
  }, [itmes, dispatch]);
  return (
    <>
      <div className="w-full flex justify-center h-[78vh] overflow-scroll overflow-x-hidden">
        <div className="md:w-[40%] w-full mx-5">
          <h1 className="text-lg md:text-3xl font-semibold w-[70%]">
            Tell guests what your place has to offer
          </h1>
          <h4 className="text-sm text-gray-500 mt-2 md:mt-0 md:text-lg">
            You can add more amenities after you publish your listing.
          </h4>
          <div className="grid grid-cols-3 gap-3 mt-9">
            {data.map((item, index) =>
              item.items.map((item, groupIndex) => (
                <div
                  ref={ref}
                  key={`${index}-${groupIndex}`}
                  onClick={() => handlechange(item.desc)}
                  className={` p-3 md:p-5 border rounded-lg flex flex-col items-center justify-center   hover:border-red-500 ${
                    itmes.includes(item.desc) ? `bg-red-400 text-white ` : ``
                  }`}
                >
                  <img src={item.img} alt="icons" className="w-11" />
                  <h1 className="font-medium  text-[10px] text-center mt-2 md:mt-0 md:text-base">
                    {item.desc}
                  </h1>
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

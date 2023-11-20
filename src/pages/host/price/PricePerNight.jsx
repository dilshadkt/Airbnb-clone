import React, { useContext, useEffect, useState } from "react";
import Navigater from "../../../components/host-navigater/Navigater";
import MyContext from "../../../components/contex/Mycontex";

const PricePerNight = () => {
  const { setFormData } = useContext(MyContext);
  const [price, setPrice] = useState(0);
  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      pricePeNight: price,
    }));
  }, [price, setFormData]);

  return (
    <div className="flex-1 flex flex-col items-center mt-[5%] justify-center">
      <h1 className="text-4xl font-semibold">Price Per Night</h1>
      <div className="my-16">
        <h1 className="text-7xl font-semibold">{price}</h1>
      </div>

      <input
        className="w-[50%]"
        type="range"
        value={price}
        min={0}
        max={20000}
        onChange={(e) => setPrice(parseFloat(e.target.value))}
      />
      {price ? <Navigater next={"finish-setup"} /> : ""}
    </div>
  );
};

export default PricePerNight;

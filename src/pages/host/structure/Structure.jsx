import React, { useState } from "react";
import { data } from "../../../asset/host/data";
import Navigater from "../../../components/host-navigater/Navigater";
import { setForm } from "../../../store/slice/FormSlice";
import { useDispatch, useSelector } from "react-redux";
const Structure = () => {
  const dispatch = useDispatch();
  const form = useSelector((store) => store.formdata.form);
  const [selectedItem, setSelectedITem] = useState(form.propertyType);
  const handlechange = (data) => {
    dispatch(setForm({ key: "propertyType", value: data }));
    setSelectedITem(data);
  };
  return (
    <div className="w-full flex justify-center h-[78vh] overflow-scroll overflow-x-hidden">
      <div className="w-[40%] ">
        <h1 className="text-3xl font-semibold w-[70%]">
          Which of these best describes your place?
        </h1>
        <div className="flex flex-wrap justify-between mt-9">
          {data.map((item, index) => (
            <div
              key={`${index}`}
              onClick={() => handlechange(item.title)}
              className={`p-5 cursor-pointer border rounded-lg w-[31%] mb-3 flex flex-col items-center justify-center  hover:border-red-500 ${
                selectedItem === item.title ? `bg-red-400 text-white ` : ``
              }`}
            >
              {item.img[0]}
              <h1 className="font-medium">{item.title}</h1>
            </div>
          ))}
        </div>
      </div>
      {selectedItem && <Navigater next={"privacy-type"} />}
    </div>
  );
};

export default Structure;

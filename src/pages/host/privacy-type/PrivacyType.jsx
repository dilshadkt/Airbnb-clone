import React, { useContext, useState } from "react";
import bed from "../../../asset/svg/bed.svg";
import MyContext from "../../../components/contex/Mycontex";
import Navigater from "../../../components/host-navigater/Navigater";

const PrivacyType = () => {
  const { setFormData, formData } = useContext(MyContext);
  const [selectd, setSelected] = useState(formData.houseType);
  const handleChange = (data) => {
    setFormData((prev) => ({
      ...prev,
      houseType: data,
    }));
    setSelected(data);
  };
  console.log(formData.houseType);
  const data = [
    {
      title: "An entire place",
      desc: " Guest have all place to themselves",
    },
    {
      title: "a room",
      desc: "Guest have their own room in a home,plus access to shared spaces",
    },
    {
      title: "A shared room",
      desc: "Guest sleep in a room or common area that may be shared with you or others",
    },
  ];
  return (
    <div className="w-full flex justify-center h-[78vh] overflow-scroll overflow-x-hidden">
      <div className="w-[40%] mt-[3%] ">
        <h1 className="text-3xl font-semibold ">
          What type of place will guests have?
        </h1>
        <div className="my-7">
          {data.map((items, index) => (
            <div
              key={`${index}-${items.title}`}
              onClick={() => handleChange(items.title)}
              className={`border p-6 rounded-xl flex my-2 hover:border-red-600 ${
                selectd === items.title ? `bg-red-300 text-white` : ``
              } `}
            >
              <div className="flex-1  flex flex-col justify-center">
                <h3 className="text-lg font-medium">{items.title}</h3>
                <span className=" font-light text-gray-500">{items.desc}</span>
              </div>
              <div className="flex-initial w-[17%] flex items-center justify-center ">
                <img src={bed} alt="icons" />
              </div>
            </div>
          ))}
        </div>
      </div>
      {selectd && <Navigater next={"location"} />}
    </div>
  );
};

export default PrivacyType;

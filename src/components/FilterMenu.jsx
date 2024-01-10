import React, { useState } from "react";
import cancel from "../asset/svg/cancel.svg";
import { useForm } from "react-hook-form";
import axios from "../config/axiosConfig";
import { useDispatch } from "react-redux";
import { setProperty } from "../store/slice/PropertySlice";

const FilterMenu = ({ filter }) => {
  const dispatch = useDispatch();
  const [type, setType] = useState("Any Type");
  const [bedrooms, setBedrooms] = useState("any");
  const [beds, setBeds] = useState("any");
  const [bathroom, setBathroom] = useState("any");
  const roomType = ["Any Type", "a room", "A shared room"];
  const bedroom = ["any", 1, 2, 3, 4, 5, 6, 7, "8+"];
  const { register, watch } = useForm({
    defaultValues: {
      minimum: 200,
      maximum: 800,
    },
  });
  const FilterData = () => {
    const data = watch();
    dispatch(setProperty([]));
    axios
      .get(
        `/listings/filtered?type=${type}&minRange=${data.minimum}&bedroom=${bedrooms}&bathroom=${bathroom}`
      )
      .then((res) => {
        dispatch(setProperty(res.data));
        filter(false);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      {(document.body.style.overflow = "hidden")}
      <div
        className={`w-[50%]  fixed h-[85%] rounded-xl flex flex-col   left-0 right-0 m-auto  top-0 bottom-0 overflow-hidden bg-white shadow-xl border z-40 `}
      >
        <div className="flex-initial h-[10%] items-center px-5  flex">
          <div className="flex-1">
            <div
              onClick={() => filter(false)}
              className="w-8 h-8 hover:bg-gray-300 rounded-full flex items-center justify-center"
            >
              <img src={cancel} className="w-[70%]" alt="cancel icon" />
            </div>
          </div>
          <div className="flex-1 flex justify-center font-semibold">
            Filters
          </div>
          <div className="flex-1"></div>
        </div>
        <hr />
        <div className="flex-1 overflow-y-scroll p-5">
          <h3 className="text-xl font-semibold">Type of place</h3>
          <h5 className="text-sm font-light mt-1">
            Search rooms, entire homes or any type of place.
          </h5>
          <div className="flex items-center justify-center py-6 mx-[8%]">
            <div className=" my-3 flex w-full rounded-2xl ">
              {roomType.map((item) => (
                <div
                  onClick={() => (type === item ? setType([]) : setType(item))}
                  className={`hover:border-red-500 mx-1 flex items-center justify-center rounded-2xl rounded-bl-2xl text-xl font-semibold flex-1 p-6  border ${
                    type === item && `bg-black text-white`
                  }`}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
          <hr />
          <div className="py-5">
            <h3 className="text-xl font-semibold">Price range</h3>
            <h5 className="text-sm font-light mt-1">
              Nightly prices before fees and taxes
            </h5>
            <div className="my-[3%] flex justify-around">
              <div className="border px-2 py-1 rounded-lg w-[48%]">
                <h3 className="text-sm text-gray-400 ">Minimum</h3>
                <div className="flex items-center">
                  ₹
                  <input
                    {...register("minimum")}
                    type="number"
                    min={200}
                    max={100000}
                    className="px-2  outline-none"
                  />
                </div>
              </div>
              <div className="border px-2 py-1 rounded-lg w-[40%]">
                <h3 className="text-sm text-gray-400 ">Maximum</h3>
                <div className="flex items-center">
                  ₹
                  <input
                    {...register("maximum")}
                    type="number"
                    min={800}
                    max={100000}
                    className="px-2  outline-none"
                  />
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="py-[4%]">
            <h3 className="text-xl font-semibold">Rooms and Beds</h3>
            <h5 className="my-[2%] text-lg font-light">Bedrooms</h5>
            <div className=" w-[78%]">
              <div className="flex justify-between ">
                {bedroom.map((item) => (
                  <div
                    onClick={() =>
                      bedrooms === item ? setBedrooms([]) : setBedrooms(item)
                    }
                    className={`p-3 cursor-pointer px-[3.7%] border rounded-2xl ${
                      bedrooms === item && `bg-black text-white`
                    } `}
                  >
                    {item}
                  </div>
                ))}
              </div>
              <h5 className="my-[2%] text-lg font-light">Beds</h5>
              <div className="flex justify-between">
                {bedroom.map((item) => (
                  <div
                    onClick={() =>
                      beds === item ? setBeds([]) : setBeds(item)
                    }
                    className={` p-3 cursor-pointer px-[3.7%] border rounded-2xl ${
                      beds === item && `bg-black text-white`
                    }`}
                  >
                    {item}
                  </div>
                ))}
              </div>
              <h5 className="my-[2%] text-lg font-light">Bathrooms</h5>
              <div></div>

              <div className="flex justify-between">
                {bedroom.map((item) => (
                  <div
                    onClick={() =>
                      bathroom === item ? setBathroom([]) : setBathroom(item)
                    }
                    className={`p-3 cursor-pointer px-[3.7%] border rounded-2xl ${
                      bathroom === item && `bg-black text-white`
                    }`}
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <hr />
        </div>
        <div className="flex-initial h-[13%] px-5 flex items-center ">
          <div className="flex items-center justify-between  w-full">
            <span className="font-medium underline">clear all</span>
            <button
              onClick={() => FilterData()}
              className="bg-black font-semibold px-[5%] py-3 rounded-xl text-white"
            >
              show all
            </button>
          </div>
        </div>
      </div>
      <div
        className={`bg-black opacity-50 fixed top-0 bottom-0 right-0 left-0  z-10`}
      ></div>
    </>
  );
};

export default FilterMenu;

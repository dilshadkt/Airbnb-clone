import React, { useEffect, useState } from "react";

import "react-toastify/dist/ReactToastify.css";
import axios from "../../../config/axiosConfig";
import Navigater from "../../../components/host-navigater/Navigater";
import { useForm } from "react-hook-form";
import { setForm } from "../../../store/slice/FormSlice";
import { useDispatch } from "react-redux";

const Location = () => {
  const dispatch = useDispatch();

  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [iscomplete, setIscomplete] = useState(false);
  const [country, setCountry] = useState([]);

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all?fields=name,flags")
      .then((res) => setCountry(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleChanges = (e) => {
    setIscomplete(true);
    dispatch(setForm({ key: "place", value: watch() }));
  };

  return (
    <div className="w-full flex justify-center h-[78vh] overflow-scroll overflow-x-hidden">
      <div className="md:w-[40%] w-full mx-5 ">
        <h1 className=" text-xl md:text-3xl font-medium my-1 md:my-4">
          Where's your place located?
        </h1>
        <span className="text-gray-500 text-sm md:text-lg">
          Your address is only shared with guests after they’ve made a
          reservation.
        </span>
        <form
          onSubmit={handleSubmit(() => {
            handleChanges();
          })}
          className="text-sm"
        >
          <div className=" justify-center my-[5%]  ">
            <select
              {...register("country")}
              className="w-full border p-4 rounded-xl "
            >
              {country.map((items, index) => (
                <option
                  key={`${index}-${items.country}`}
                  className="text-gray-500"
                >
                  {items.name.common}
                </option>
              ))}
            </select>

            <input
              {...register("house", { required: "house number is required" })}
              type="text"
              placeholder="House ,flate etc"
              className="border w-full p-4 mt-5"
            />
            <p className="text-xs md:text-sm text-red-500 my-1">
              {errors.house?.message}
            </p>
            <input
              {...register("area", { required: "area name is required" })}
              type="text"
              placeholder="Area village"
              className="border w-full p-4 "
            />
            <p className="text-xs md:text-sm text-red-500 my-1">
              {errors.area?.message}
            </p>
            <input
              {...register("street", { required: "street name is erquired" })}
              type="text"
              placeholder="Street address"
              className="border w-full p-4 "
            />
            <p className="text-xs md:text-sm text-red-500 my-1">
              {errors.street?.message}
            </p>
            <input
              {...register("landmark", { required: "landmark is required" })}
              type="text"
              placeholder="Near by landmark"
              className="border w-full p-4 "
            />
            <p className="text-xs md:text-sm text-red-500 my-1">
              {errors.landmark?.message}
            </p>
            <input
              {...register("city", { required: "city name is required" })}
              type="text"
              placeholder="city"
              className="border w-full p-4 "
            />
            <p className="text-xs md:text-sm text-red-500 my-1">
              {errors.city?.message}
            </p>
            <input
              {...register("pincode", { required: "pincode is required" })}
              type="text"
              placeholder="Pincode"
              className="border w-full p-4 "
            />
            <p className="text-xs md:text-sm text-red-500 my-1">
              {errors.pincode?.message}
            </p>
            <input
              {...register("province", { required: "province is required" })}
              type="text"
              placeholder="Province"
              className="border w-full p-4 "
            />
            <p className="text-xs md:text-sm text-red-500 my-1">
              {errors.province?.message}
            </p>
          </div>

          {!iscomplete && (
            <button className="p-3 bg-rose-500 rounded-xl text-white">
              Confirm
            </button>
          )}
        </form>
        {iscomplete && <Navigater next={"floor-plan"} />}
      </div>
    </div>
  );
};

export default Location;

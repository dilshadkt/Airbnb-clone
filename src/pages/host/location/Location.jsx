import React, { useContext, useEffect, useState } from "react";
import MyContext from "../../../components/contex/Mycontex";
import axios from "axios";

const Location = () => {
  const { setFormData, formData } = useContext(MyContext);
  const [country, setCountry] = useState([]);
  const [house, setHouse] = useState("");
  const [Area, setArea] = useState("");
  const [Street, setStreet] = useState("");
  const [landmark, setLandmark] = useState("");
  const [city, setCity] = useState("");
  const [pincode, setPincode] = useState("");
  const [Province, setProvince] = useState("");

  useEffect(() => {
    axios
      .get("https://api.first.org/data/v1/countries")
      .then((res) => setCountry(Object.values(res.data.data)))
      .catch((err) => console.log(err));
  }, []);
  const handleChanges = (e) => {
    setFormData((prev) => ({
      ...prev,
      place: {
        house,
        Area,
        Street,
        landmark,
        city,
        pincode,
        Province,
      },
    }));
  };
  return (
    <div className="w-full flex justify-center h-[78vh] overflow-scroll overflow-x-hidden">
      <div className="w-[40%] ">
        <h1 className="text-3xl font-medium my-4">
          Where's your place located?
        </h1>
        <span className="text-gray-500 text-lg">
          Your address is only shared with guests after they’ve made a
          reservation.
        </span>
        <div className=" justify-center my-[5%]  ">
          <select
            className="w-full border p-4 rounded-xl "
            onChange={(e) => handleChanges(e)}
          >
            {country.map((items, index) => (
              <option
                key={`${index}-${items.country}`}
                className="text-gray-500"
              >
                {items.country} - {items.region}
              </option>
            ))}
          </select>
          <input
            type="text"
            placeholder="House ,flate etc"
            className="border w-full p-4 mt-5"
          />
          <input
            type="text"
            placeholder="Area village"
            className="border w-full p-4 "
          />
          <input
            type="text"
            placeholder="Street address"
            className="border w-full p-4 "
          />
          <input
            type="text"
            placeholder="Near by landmark"
            className="border w-full p-4 "
          />
          <input
            type="text"
            placeholder="city"
            className="border w-full p-4 "
          />
          <input
            type="text"
            placeholder="Pincode"
            className="border w-full p-4 "
          />
          <input
            type="text"
            placeholder="Province"
            className="border w-full p-4 "
          />
        </div>
      </div>
    </div>
  );
};

export default Location;

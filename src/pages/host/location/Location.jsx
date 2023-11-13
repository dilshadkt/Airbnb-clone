import React, { useContext, useEffect, useState } from "react";
import MyContext from "../../../components/contex/Mycontex";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import Navigater from "../../../components/host-navigater/Navigater";

const Location = () => {
  const [iscomplete, setIscomplete] = useState(false);
  const { setFormData, formData } = useContext(MyContext);
  const [country, setCountry] = useState([]);
  const [house, setHouse] = useState(formData.place.house);
  const [Area, setArea] = useState(formData.place.Area);
  const [Street, setStreet] = useState(formData.place.Street);
  const [landmark, setLandmark] = useState(formData.place.landmark);
  const [city, setCity] = useState(formData.place.city);
  const [pincode, setPincode] = useState(formData.place.pincode);
  const [Province, setProvince] = useState(formData.place.Province);
  const notify = () =>
    toast.success("Success Notification !", {
      position: toast.POSITION.TOP_CENTER,
    });
  useEffect(() => {
    axios
      .get("https://api.first.org/data/v1/countries")
      .then((res) => setCountry(Object.values(res.data.data)))
      .catch((err) => console.log(err));
  }, []);

  const handleChanges = (e) => {
    setIscomplete(true);
    e.preventDefault();
    notify();
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
        <form onSubmit={(e) => handleChanges(e)}>
          <div className=" justify-center my-[5%]  ">
            <select className="w-full border p-4 rounded-xl ">
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
              value={house}
              placeholder="House ,flate etc"
              className="border w-full p-4 mt-5"
              required
              onChange={(e) => setHouse(e.target.value)}
            />
            <input
              type="text"
              value={Area}
              placeholder="Area village"
              className="border w-full p-4 "
              required
              onChange={(e) => setArea(e.target.value)}
            />
            <input
              type="text"
              value={Street}
              placeholder="Street address"
              className="border w-full p-4 "
              required
              onChange={(e) => setStreet(e.target.value)}
            />
            <input
              type="text"
              value={landmark}
              placeholder="Near by landmark"
              className="border w-full p-4 "
              required
              onChange={(e) => setLandmark(e.target.value)}
            />
            <input
              type="text"
              value={city}
              placeholder="city"
              required
              className="border w-full p-4 "
              onChange={(e) => setCity(e.target.value)}
            />
            <input
              type="text"
              placeholder="Pincode"
              value={pincode}
              className="border w-full p-4 "
              required
              onChange={(e) => setPincode(e.target.value)}
            />
            <input
              type="text"
              value={Province}
              placeholder="Province"
              className="border w-full p-4 "
              required
              onChange={(e) => setProvince(e.target.value)}
            />
          </div>
          <ToastContainer />
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

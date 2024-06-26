import React, { useEffect, useRef, useState } from "react";
import Axios from "../../config/axiosConfig";
import { Link } from "react-router-dom";
import { fetchCountries } from "../../utility";
import { nanoid } from "nanoid";
const Register = ({ signIn, setGetOtp, setMobileNumber }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const dropdownRef = useRef(null);
  const [selectedCountry, setSelectedCountry] = useState({
    value: "+91",
    lable: "India(+91)",
  });
  const [select, setSelect] = useState(false);
  const [countries, setCountries] = useState([]);
  const sendOtp = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    const formData = new FormData(e.target);
    const phoneNumber = selectedCountry.value + formData.get("phoneNumber");
    setMobileNumber(phoneNumber);
    try {
      const res = await Axios.post("/api/otp/send-otp", { phoneNumber });
      res.status === 200 ? setGetOtp(true) : setGetOtp(false);
    } catch (error) {
      console.log(error);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  // Effect to detect clicks outside the dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setSelect(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  useEffect(() => {
    fetchCountries().then((res) => setCountries(res));
  }, []);
  return (
    <div className="p-7 mt-3">
      <h4 className="text-xl font-semibold ">Welcome to Airbnb</h4>
      <form onSubmit={sendOtp}>
        <div className="flex flex-col w-full h-28 rounded-lg mt-6 border border-gray-400 ">
          <div
            ref={dropdownRef}
            onClick={() => setSelect(!select)}
            className={` ${
              select ? "border-[1.7px] border-black rounded-lg" : "border-b"
            } relative border-gray-400 flex-1 flex items-center justify-between px-3`}
          >
            <div className="grid ">
              <p className="text-xs text-gray-500 font-medium">
                Country/Region
              </p>
              <span className="font-semibold">{selectedCountry?.lable}</span>
            </div>
            <img
              src={"/assets/svg/right.svg"}
              alt="arrow"
              className={`w-4  transition-all duration-300 ${
                select ? "rotate-90" : "rotate-0"
              }`}
            />

            {select && (
              <div className="absolute left-0 right-0 -bottom-[402px] h-[400px] z-20 overflow-y-auto rounded-lg p-4 bg-white border-2 shadow-lg scale-x-[1.01]">
                <ul className="grid gap-2">
                  {countries.map((item) => (
                    <li
                      onClick={() => {
                        setSelectedCountry({
                          value: item.value,
                          lable: item.label,
                        });
                        setSelect(false);
                      }}
                      key={nanoid()}
                      className="cursor-pointer"
                    >
                      {item.label}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div className="flex items-center flex-1">
            <input
              type="number"
              maxLength={15}
              min={10}
              required
              name="phoneNumber"
              className="w-full h-14 px-4 placeholder-gray-500 font-semibold rounded-lg"
              placeholder="Phone number  "
            />
          </div>
        </div>
        {error && (
          <p className="text-sm text-red-500 my-2 ">Invalid phone number </p>
        )}
        <p className="text-xs font-medium text-gray-600 mt-3">
          We’ll call or text you to confirm your number. Standard message and
          data rates apply.{" "}
          <Link className="font-bold underline">Privacy Policy</Link>
        </p>
        <button
          type="submit"
          className={`w-full py-3 ${
            loading ? `bg-gray-400 animate-pulse` : `bg-rose-500`
          }  rounded-lg my-5 text-white font-semibold flex text-center justify-center`}
        >
          {loading ? `Sending ....` : `Continue`}
        </button>
      </form>
      <div className="mt-8 relative">
        <hr />
        <span className="bg-white text-xs h-fit w-12 flex items-center justify-center absolute left-0 right-0 mx-auto top-0 bottom-0 my-auto">
          or
        </span>
      </div>
      <div className="mt-8">
        <button
          onClick={signIn}
          className="border my-6 px-6 border-gray-600 rounded-lg py-3 flex items-center w-full"
        >
          <img src="/assets/svg/google.svg" alt="google" className="w-4" />
          <span className="mx-2 font-semibold text-sm w-full text-center  ">
            Continue with google
          </span>
        </button>
      </div>
    </div>
  );
};

export default Register;

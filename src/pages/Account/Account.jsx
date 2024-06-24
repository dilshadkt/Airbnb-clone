import React, { useEffect, useState } from "react";
import { data } from "../../asset/accounts/data";
import AccountCards from "../../components/AccountCards";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { accountSettings, supportSettings } from "../../constants";
import { setLogin } from "../../store/slice/User";
import { useDispatch } from "react-redux";

const Account = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const details = queryParams.get("detail");
  const [detailed, setDetailed] = useState(details || false);
  const dispatch = useDispatch();
  const naviagate = useNavigate();
  useEffect(() => {
    setDetailed(details || false);
  }, [details]);

  return (
    <>
      <section
        className={`${
          detailed ? `block` : `hidden  md:block`
        }  mx-5 md:mx-[13%] my-[3%] pb-5 md:pb-0`}
      >
        <h1 className="text-3xl font-semibold">Accounts</h1>
        <h3 className="hidden md:block text-lg font-medium my-5">
          Dilshad Kt,
          <span className="font-normal"> hmydilshadkt@gmail.com </span>.
          <Link to={"profile"}>
            <span className="underline">Go to profile</span>
          </Link>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-9">
          {data.map((item, index) => (
            <AccountCards
              key={index}
              icons={item.img}
              title={item.title}
              description={item.desc}
            />
          ))}
        </div>
        <div className="w-full hidden md:flex items-center justify-center p-6 text-gray-400">
          <span>need to deactive your account ?</span>
        </div>
      </section>
      {/* MOBILE VIEW  */}

      <section
        className={`${
          detailed ? "hidden" : `flex md:hidden`
        }  flex-col pb-28  h-full relative overflow-y-auto text-gray-800  mx-5 md:mx-[13%] my-[10%] `}
      >
        <div className="flex items-center justify-between w-full">
          <h4 className="font-semibold text-3xl">Profile</h4>
          <img
            src="/assets/svg/notification.svg"
            alt="notification"
            className="w-6"
          />
        </div>

        <Link to={"/account-settings/profile"}>
          <div className="flex items-center justify-between my-5 mt-9">
            <div className="flex items-center">
              <div className="w-14 h-14 rounded-full bg-black text-white flex items-center justify-center text-2xl">
                D
              </div>
              <div className="grid ml-3">
                <h5 className="font-semibold">Dilshad</h5>
                <span className="text-sm text-gray-500 font-medium">
                  {" "}
                  Show profile
                </span>
              </div>
            </div>
            <img
              src="/assets/svg/right.svg"
              alt="notification"
              className="w-4"
            />
          </div>
        </Link>
        <div className="w-full p-3 mt-2 flex items-center justify-between border border-gray-300/70 shadow-lg bg-white rounded-xl h-[120px]">
          <div className=" ">
            <h5 className="font-semibold text-lg">Airbnb your place</h5>
            <p className="text-sm w-[80%] mt-1">
              It's simple to get set up and start learning.
            </p>
          </div>
          <img src="/assets/home.jpg" alt="home" />
        </div>
        <div className="my-10 flex items-center justify-between w-full">
          <div className="flex items-center">
            <p className="font-semibold">2024 Summer release features</p>
            <span className="bg-red-500 ml-2 font-semibold text-sm rounded-md flex items-center justify-center leading-[18px] text-white px-[2px]">
              New
            </span>
          </div>
          <img src="/assets/svg/right.svg" alt="arrow" className="w-4" />
        </div>
        <div>
          <h4 className="text-xl font-semibold">Account settings</h4>
          <ul>
            {accountSettings.map((item) => (
              <Link key={item.id} to={item.path}>
                <li className="flex my-7 items-center justify-between">
                  <div className="flex items-center">
                    <img
                      src={item.icon}
                      alt={item.titel}
                      className="w-6 opacity-80"
                    />
                    <span className="ml-3 font-medium">{item.titel}</span>
                  </div>
                  <img
                    src={"/assets/svg/right.svg"}
                    alt="arrow"
                    className="w-4"
                  />
                </li>
              </Link>
            ))}
          </ul>
          <hr />
          <div className="mt-8">
            <h4 className="text-xl font-semibold">Support</h4>
            <ul className="mt-7 ">
              {supportSettings.map((item) => (
                <li
                  key={item.id}
                  className="flex my-7 items-center justify-between"
                >
                  <div className="flex items-center">
                    <img
                      src={item.icon}
                      alt={item.titel}
                      className="w-6 opacity-80"
                    />
                    <span className="ml-3 font-medium">{item.titel}</span>
                  </div>
                  <img
                    src={"/assets/svg/right.svg"}
                    alt="arrow"
                    className="w-4"
                  />
                </li>
              ))}
            </ul>
            <hr className="mt-2" />
            <div className="mt-7">
              <div className="flex items-center font-semibold text-sm">
                <img
                  src="/assets/svg/global.svg"
                  className="w-5"
                  alt="global"
                />
                <span className="ml-2">English (IN)</span>
                <span className="ml-4">INR</span>
              </div>
              <button
                onClick={() => {
                  dispatch(setLogin(false));
                  localStorage.clear();
                  naviagate("/");
                }}
                className="w-full rounded-lg border-gray-800 p-3 border font-semibold my-5"
              >
                Log out
              </button>
            </div>
          </div>
        </div>
        <div className="fixed bottom-24 left-0 right-0 mx-auto bg-gray-900 flex items-center justify-between text-white w-fit px-6 py-4 rounded-full">
          <img
            src="/assets/svg/switch.svg"
            alt="switch"
            className="w-4 filter-white"
          />{" "}
          <span className="ml-2 font-semibold"> Switch to hosting</span>
        </div>
      </section>
    </>
  );
};

export default Account;

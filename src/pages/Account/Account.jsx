import React from "react";
import { data } from "../../asset/accounts/data";
import AccountCards from "../../components/AccountCards";
import { Link } from "react-router-dom";

const Account = () => {
  return (
    <>
      <section className="hidden md:block mx-5 md:mx-[13%] my-[3%]">
        <h1 className="text-3xl font-semibold">Accounts</h1>
        <h3 className="text-lg font-medium my-5">
          Dilshad Kt,
          <span className="font-normal"> hmydilshadkt@gmail.com </span>.
          <Link to={"profile"}>
            <span className="underline">Go to profile</span>
          </Link>
        </h3>
        <div className="flex flex-wrap justify-between my-9">
          {data.map((item, index) => (
            <AccountCards
              key={index}
              icons={item.img}
              title={item.title}
              description={item.desc}
            />
          ))}
        </div>
        <div className="w-full flex items-center justify-center p-6 text-gray-400">
          <span>need to deactive your account ?</span>
        </div>
      </section>
      {/* MOBILE VIEW  */}

      <section className="flex flex-col md:hidden mx-5 md:mx-[13%] my-[10%] ">
        <div className="flex items-center justify-between w-full">
          <h4 className="font-semibold text-3xl">Profile</h4>
          <img
            src="/assets/svg/notification.svg"
            alt="notification"
            className="w-6"
          />
        </div>
        <div className="flex items-center justify-between my-5 mt-9">
          <div className="flex items-center">
            <div className="w-14 h-14 rounded-full bg-black"></div>
            <div className="grid ml-3">
              <h5 className="font-semibold">Dilshad</h5>
              <span className="text-sm text-gray-500 font-medium">
                {" "}
                Show profile
              </span>
            </div>
          </div>
          <img src="/assets/svg/right.svg" alt="notification" className="w-4" />
        </div>
        <div className="w-full p-3 mt-2 flex items-center justify-between border border-gray-300/70 shadow-lg bg-white rounded-xl h-[120px]">
          <div className=" ">
            <h5 className="font-semibold text-lg">Airbnb your place</h5>
            <p className="text-sm w-[80%] mt-1">
              It's simple to get set up and start learning.
            </p>
          </div>
          <img src="/assets/home.jpg" alt="home" />
        </div>
      </section>
    </>
  );
};

export default Account;

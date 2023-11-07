import React from "react";
import tick from "../../../asset/svg/tick.svg";
import Buttons from "../../../components/Buttons";

const Profile = () => {
  return (
    <div className="mx-[12%] my-[2%] flex">
      <div className="flex-initial flex flex-col w-[30%] ">
        <div className=" shadow-xl flex flex-col items-center border rounded-xl p-6">
          <div className="w-24 h-24 bg-black rounded-full text-5xl text-white font-bold flex items-center justify-center">
            D
          </div>
          <h4 className="text-2xl font-bold mt-2">Dilshad</h4>
          <span className="font-medium">Guest</span>
        </div>
        <div className="border p-5 my-7 rounded-xl">
          <h3 className="text-xl w-[60%] font-medium">
            Dilshad's confirmed information
          </h3>
          <div className="flex items-center my-5">
            <img src={tick} alt="icons" className="w-6 h-5" />
            <span className="ml-2">Email address</span>
          </div>
          <hr className="my-5" />
          <h3 className="text-xl w-[60%] font-medium">Verify your identity</h3>
          <p className="text-sm my-5">
            Before you book or Host on Airbnb, you’ll need to complete this
            step.
          </p>
          <Buttons title="Get verified" />
        </div>
      </div>
      <div className="flex-1  ml-5 flex items-center justify-center">
        <div className="w-[40%]">
          <h2 className="font-medium text-[22px]">
            It's time to create your profile
          </h2>
          <p className="text-sm font-thin text-gray-500 my-4">
            Your Airbnb profile is an important part of every reservation.
            Create yours to help other Hosts and guests get to know you.
          </p>
          <Buttons color="bg-rose-600" title="Create a profile" />
        </div>
      </div>
    </div>
  );
};

export default Profile;

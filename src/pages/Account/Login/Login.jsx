import React from "react";
import left from "../../../asset/svg/leftArrow.svg";
import { Link } from "react-router-dom";
import roundedLock from "../../../asset/svg/roundedLock.svg";

const Login = () => {
  return (
    <div className="mx-[15%] my-[2%]">
      <div className="flex items-center">
        <Link to={"/account-settings"}>
          <h3 className="hover:underline">Account</h3>
        </Link>
        <img src={left} alt="left icon" className="rotate-180 mx-2 w-3" />
        <h3>Personal info</h3>
      </div>
      <h1 className="text-3xl font-bold py-3">Login & security</h1>
      <div className="my-7 flex">
        <div className="flex-1 mr-[10%]">
          <ul className="flex text-sm font-medium">
            <li className="py-4 mr-5 cursor-pointer">LOGIN</li>
            <li className="py-4 mr-5 cursor-pointer">LOGIN REQUESTED</li>
            <li className="py-4 mr-5 cursor-pointer">SHARED ACCESS</li>
          </ul>
          <hr />
          <div className="py-5">
            <h3 className="font-bold text-xl">Login</h3>
            <div className="my-5 flex">
              <div className="flex-1 ">
                <h3>Password</h3>
                <span className="font-light">Last updated 6 days ago</span>
              </div>
              <div className="flex-initial w-[15%]  flex items-start justify-end">
                <span className=" text-green-600 font-medium">Update</span>
              </div>
            </div>
          </div>
          <hr />
          <div className="py-5">
            <h3 className="font-bold text-xl">Social accounts</h3>
            <div className="my-5 flex">
              <div className="flex-1 ">
                <h3>Facebook</h3>
                <span className="font-medium">not connected</span>
              </div>
              <div className="flex-initial w-[15%]  flex items-start justify-end">
                <span className=" text-green-600 font-medium">Connect</span>
              </div>
            </div>
          </div>
          <hr />
          <div className="py-5">
            <div className="my-5 flex">
              <div className="flex-1 ">
                <h3>Google</h3>
                <span className="font-light">Connected</span>
              </div>
              <div className="flex-initial w-[15%]  flex items-start justify-end">
                <span className=" text-green-600 font-medium">Disconnect</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-initial w-[27%] mt-[5%] h-fit border  rounded-xl px-5 py-6">
          <img src={roundedLock} alt="icon" />
          <h3 className="font-medium text-lg mt-3">
            Let's make your account more secure
          </h3>
          <p className="text-gray-500 py-3">
            We’re always working on ways to increase safety in our community.
            That’s why we look at every account to make sure it’s as secure as
            possible
          </p>
          <hr className="my-7" />
        </div>
      </div>
      <h2 className="font-bold text-xl">Account</h2>
      <div className="flex justify-between my-7">
        <h3>Deactivate your account</h3>
        <span className="text-base text-red-500 cursor-pointer">
          Deactivate
        </span>
      </div>
      <hr />
    </div>
  );
};

export default Login;

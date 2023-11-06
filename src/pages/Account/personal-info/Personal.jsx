import React from "react";
import left from "../../../asset/svg/leftArrow.svg";
import { Link } from "react-router-dom";
import lock from "../../../asset/svg/lock.svg";
import eye from "../../../asset/svg/eye.svg";
import lock2 from "../../../asset/svg/roundedLock.svg";

const Personal = () => {
  return (
    <div className=" mx-[15%] my-[2%] ">
      <div className="flex items-center">
        <Link to={"/account-settings"}>
          <h3 className="hover:underline">Account</h3>
        </Link>
        <img src={left} alt="left icon" className="rotate-180 mx-2 w-3" />
        <h3>Personal info</h3>
      </div>
      <h1 className="text-3xl font-bold py-3">Personal info</h1>
      <div className="my-7 flex text-sm">
        <div className="flex-1 mr-[10%]">
          <div className="py-6 flex ">
            <div className="flex-1 ">
              <div className="text-base">Legal name</div>
              <div className="text-gray-500 font-thin">Dilshad Kt</div>
            </div>
            <div className="flex-initial  flex items-start justify-end w-[15%] ">
              {" "}
              <span className="font-medium underline cursor-pointer">Edit</span>
            </div>
          </div>
          <hr />
          <div className="py-6 flex ">
            <div className="flex-1 ">
              <div className="text-base">Email address</div>
              <div className="text-gray-500 font-thin">h***t@gmail.com</div>
            </div>
            <div className="flex-initial  flex items-start justify-end w-[15%] ">
              {" "}
              <span className="font-medium underline cursor-pointer">Edit</span>
            </div>
          </div>
          <hr />
          <div className="py-6 flex ">
            <div className="flex-1 ">
              <div className="text-base">Phone numbers</div>
              <div className="text-gray-500 font-thin">
                Add a number so confirmed guests and Airbnb can get in touch.
                You can add other numbers and choose how they’re used.
              </div>
            </div>
            <div className="flex-initial  flex items-start justify-end w-[15%] ">
              {" "}
              <span className="font-medium underline cursor-pointer">Add</span>
            </div>
          </div>
          <hr />
          <div className="py-6 flex ">
            <div className="flex-1 ">
              <div className="text-base">Government ID</div>
              <div className="text-gray-500 font-thin">Not provided</div>
            </div>
            <div className="flex-initial  flex items-start justify-end w-[15%] ">
              {" "}
              <span className="font-medium underline cursor-pointer">Add</span>
            </div>
          </div>
          <hr />
          <div className="py-6 flex ">
            <div className="flex-1 ">
              <div className="text-base">Address</div>
              <div className="text-gray-500 font-thin">Not provided</div>
            </div>
            <div className="flex-initial  flex items-start justify-end w-[15%] ">
              {" "}
              <span className="font-medium underline cursor-pointer">Edit</span>
            </div>
          </div>
          <hr />
          <div className="py-6 flex ">
            <div className="flex-1 ">
              <div className="text-base">Emergency contact</div>
              <div className="text-gray-500 font-thin">Not provided</div>
            </div>
            <div className="flex-initial  flex items-start justify-end w-[15%] ">
              {" "}
              <span className="font-medium underline cursor-pointer">Edit</span>
            </div>
          </div>
          <hr />
        </div>
        <div className="flex-initial w-[27%]  border rounded-xl px-5 py-6">
          <div>
            <img src={lock} alt="icon" className="w-[30%]" />
            <h3 className="font-medium text-lg">
              Why isn’t my info shown here?
            </h3>
            <p className="text-gray-500 py-3">
              We’re hiding some account details to protect your identity.
            </p>
            <hr className="my-2" />
          </div>
          <div>
            <img src={eye} alt="icon" className="w-[30%]" />
            <h3 className="font-medium text-lg">
              Which details can be edited?
            </h3>
            <p className="text-gray-500 py-3">
              Contact info and personal details can be edited. If this info was
              used to verify your identity, you’ll need to get verified again
              the next time you book – or to continue hosting.
            </p>
            <hr className="my-2" />
          </div>
          <div>
            <img src={lock2} alt="icon" className="w-[25%] pb-3" />
            <h3 className="font-medium text-lg">
              Why isn’t my info shown here?
            </h3>
            <p className="text-gray-500 py-3">
              We’re hiding some account details to protect your identity.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Personal;

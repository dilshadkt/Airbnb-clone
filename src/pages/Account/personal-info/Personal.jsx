import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import eye from "../../../asset/svg/eye.svg";
import left from "../../../asset/svg/leftArrow.svg";
import lock from "../../../asset/svg/lock.svg";
import lock2 from "../../../asset/svg/roundedLock.svg";
import { AuthContext } from "../../../context/AuthContext";

const Personal = () => {
  const { currentUser } = useContext(AuthContext);
  const [isMobileEdit, setIsMobileEdit] = useState(false);

  return (
    <div className="mx-5 md:mx-[15%] my-[2%] ">
      <div className="hidden  md:flex items-center">
        <Link to={"/account-settings"}>
          <h3 className="hover:underline">Account</h3>
        </Link>
        <img src={left} alt="left icon" className="rotate-180 mx-2 w-3" />
        <h3>Personal info</h3>
      </div>
      <Link to={"/account-settings"}>
        <img
          src="/assets/svg/right.svg"
          className="rotate-180 w-4 mt-5 "
          alt=""
        />
      </Link>
      <h1 className="text-3xl font-bold py-3">Personal info</h1>
      <div className="my-7 flex text-sm">
        <div className="flex-1 md:mr-[10%] relative">
          <div className="py-6 flex ">
            <div className="flex-1 ">
              <div className="text-base font-semibold">Legal name</div>
              <div className="text-gray-500 font-thin">
                {currentUser?.firstName}
              </div>
            </div>
            <div className="flex-initial  flex items-start justify-end w-[15%] ">
              <span className="font-medium underline cursor-pointer">Edit</span>
            </div>
          </div>
          <hr />
          <div className="py-6 flex ">
            <div className="flex-1 ">
              <div className="text-base font-semibold">Email address</div>
              <div className="text-gray-500 font-thin">
                {`${currentUser?.email.slice(
                  0,
                  1
                )}*****${currentUser?.email.slice(9)}`}
              </div>
            </div>
            <div className="flex-initial  flex items-start justify-end w-[15%] ">
              {" "}
              <span className="font-medium underline cursor-pointer">Edit</span>
            </div>
          </div>
          <hr />
          <div className="py-6 relative z-50 ">
            <div className=" flex ">
              <div className="flex-1 ">
                <div className="text-base font-semibold">Phone numbers</div>
                <div className="text-gray-500 font-thin">
                  Add a number so confirmed guests and Airbnb can get in touch.
                  You can add other numbers and choose how they’re used.
                </div>
              </div>
              <div className="flex-initial  flex items-start justify-end w-[15%] ">
                <button
                  onClick={() => setIsMobileEdit(!isMobileEdit)}
                  className="font-medium underline cursor-pointer"
                >
                  Add
                </button>
              </div>
            </div>
            <div className={`py-6  ${isMobileEdit && `hidden`}`}>
              <div className="flex justify-between">
                <h4 className="text-[16px]">Enter a new phone number</h4>
                <button
                  onClick={() => setIsMobileEdit(!isMobileEdit)}
                  className="text-[16px] font-semibold underline"
                >
                  cancel
                </button>
              </div>
              <div className="my-4 border rounded-xl p-2">
                <div>
                  <span className="text-gray-400 font-light text-sm">
                    phone number
                  </span>
                </div>
                <input type="number" className="py-1 outline-none w-full" />
              </div>
              <h4>
                We’ll send you a code to verify your number. Standard message
                and data rates apply.
              </h4>
              <button className="mt-4 px-7 py-4 bg-black text-white font-medium rounded-xl">
                Verfify
              </button>
            </div>
          </div>

          <hr />
          <div className="py-6 flex ">
            <div className="flex-1 ">
              <div className="text-base font-semibold">Government ID</div>
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
              <div className="text-base font-semibold">Address</div>
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
              <div className="text-base font-semibold">Emergency contact</div>
              <div className="text-gray-500 font-thin">Not provided</div>
            </div>
            <div className="flex-initial  flex items-start justify-end w-[15%] ">
              {" "}
              <span className="font-medium underline cursor-pointer">Edit</span>
            </div>
          </div>
          <div
            className={`absolute top-0 bottom-0 right-0 left-0 bg-white opacity-60 z-0 m-auto  ${
              isMobileEdit && `hidden`
            }`}
          ></div>
          <hr />
        </div>
        <div className="hidden md:block flex-initial w-[27%]  border rounded-xl px-5 py-6">
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

import React from "react";
import { Link } from "react-router-dom";
import left from "../../../asset/svg/leftArrow.svg";
import Buttons from "../../../components/Buttons";
import roundedLock from "../../../asset/svg/roundedLock.svg";

const AccountPayment = () => {
  return (
    <div className=" mx-[15%] my-[2%] ">
      <div className="flex items-center">
        <Link to={"/account-settings"}>
          <h3 className="hover:underline">Account</h3>
        </Link>
        <img src={left} alt="left icon" className="rotate-180 mx-2 w-3" />
        <h3>Payments & payouts</h3>
      </div>
      <h1 className="text-3xl font-bold py-3">Payments & payouts</h1>
      <div className="my-7 flex">
        <div className="flex-1 mr-[10%]">
          <ul className="flex text-sm font-medium">
            <li className="py-4 mr-6 cursor-pointer">Payments</li>
            <li className="py-4 mr-6 cursor-pointer">Payouts</li>
            <li className="py-4 mr-6 cursor-pointer">Guest contribution</li>
          </ul>
          <hr />
          <div className="py-6">
            <h2 className="text-2xl font-medium">Your payments</h2>
            <h4 className="font-light text-gray-500 my-3">
              Keep track of all your payments and refunds.
            </h4>
            <div className="my-6">
              {" "}
              <Buttons color="bg-black" title="Manage payments" />
            </div>
          </div>
          <div className="pb-5">
            <h2 className="text-2xl font-medium ">Payment methods</h2>
            <p className="text-gray-500 font-light w-[60%] my-3">
              Add a payment method using our secure payment system, then start
              planning your next trip.
            </p>
          </div>
          <hr />
          <div className="py-7">
            <h2 className="text-2xl font-medium ">Airbnb gift credit</h2>
            <div className="my-6">
              {" "}
              <Buttons color="bg-black" title="Add to gift card" />
            </div>
          </div>
        </div>
        <div className="flex-initial w-[27%] mt-[5%] h-fit border  rounded-xl px-5 py-6">
          <img src={roundedLock} alt="icon" />
          <h3 className="font-medium text-lg mt-3">
            Make all payments through Airbnb
          </h3>
          <p className="text-gray-500 py-3 text-sm">
            Always pay and communicate through Airbnb to ensure you're protected
            under our Terms of Service, Payments Terms of Service, cancellation,
            and other safeguards. Learn more
          </p>
          <hr className="my-7" />
        </div>
      </div>
    </div>
  );
};

export default AccountPayment;

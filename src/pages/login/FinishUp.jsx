import React from "react";
import { Link } from "react-router-dom";

const FinishUp = ({ handleUserData }) => {
  return (
    <section className="p-7 max-w-screen-sm mx-auto ">
      <form onSubmit={handleUserData}>
        <h4 className="font-semibold mt-3">Leagal name</h4>
        <div className="my-2 border-[1px] border-gray-300  mt-4 h-28 rounded-xl grid ">
          <div className="border-b border-gray-300">
            <input
              type="text"
              name="firstName"
              className="rounded-xl h-full w-full  px-3"
              placeholder="First name on ID"
              required
            />
          </div>
          <input
            type="text"
            name="lastName"
            className="rounded-xl px-3"
            placeholder="Last name on ID"
            required
          />
        </div>
        <p className="text-xs text-gray-500">
          Make sure this matches the name on your government ID. If you go by
          another name, you can add a{" "}
          <Link className="font-semibold underline">preferred first name.</Link>
        </p>
        <div className=" mt-5">
          <h4 className="font-semibold">Date of birth</h4>
          <input
            type="text"
            name="dob"
            className="rounded-xl px-3 border border-gray-300 my-2 mt-4 h-14 w-full"
            placeholder="Date of birth"
            required
          />
          <p className="text-xs text-gray-500">
            To sign up, you need to be at least 18. Your birthday won’t be
            shared with other people who use Airbnb.
          </p>
        </div>
        <div className=" mt-5">
          <h4 className="font-semibold">Contact info</h4>
          <input
            type="email"
            name="email"
            className="rounded-xl px-3 border border-gray-300 my-2 mt-4 h-14 w-full"
            placeholder="Email"
            required
          />
          <p className="text-xs text-gray-500 ">
            We'll email you trip confirmations and receipts.
          </p>
          <p className="text-xs text-gray-500 my-5">
            By selecting{" "}
            <span className="font-semibold text-gray-800">
              Agree and continue
            </span>
            , I agree to Airbnb’s{" "}
            <span className="text-blue-600 font-medium underline">
              Terms of Service, Payments Terms of Service
            </span>
            , and Nondiscrimination Policy and acknowledge the
            <span className="text-blue-600 font-medium underline">
              Privacy Policy.
            </span>
          </p>
        </div>
        <button className="h-14 w-full flex items-center justify-center rounded-xl bg-rose-500 text-white font-semibold">
          Agree and continue
        </button>
        <hr className="my-7" />
        <p className="text-xs text-gray-500 ">
          Airbnb will send you members-only deals, inspiration, marketing
          emails, and push notifications. You can opt out of receiving these at
          any time in your account settings or directly from the marketing
          notification.
        </p>
      </form>
    </section>
  );
};

export default FinishUp;

import React, { Fragment, useContext, useState } from "react";
import { profileQuestions, Whether } from "../../constants/index";
import { nanoid } from "nanoid";
import { AuthContext } from "../../context/AuthContext";
const Drawyer = ({ isOpne, setIsOpen, uploadUserImage }) => {
  const { currentUser } = useContext(AuthContext);
  const [prfilePicture, setProfilPicture] = useState(null);

  const HandelUpload = (e) => {
    console.log(e.target.files);
    setProfilPicture(e.target.files);
    setTimeout(() => {
      uploadUserImage(e, prfilePicture);
    }, 10);
  };
  return (
    <>
      <div
        className={` ${
          isOpne ? `block` : `hidden`
        } fixed top-0 bottom-0 left-0 right-0 bg-black/50 z-[500]`}
      ></div>
      <section
        className={`fixed left-0 right-0 ${
          isOpne ? `top-4` : `top-[100%]`
        }   rounded-t-xl mx-auto h-[100vh] pb-4 flex flex-col justify-between  z-[1000] w-full  bg-white transition-all duration-500`}
      >
        <div className="bg-white p-4  rounded-xl">
          <img
            onClick={() => setIsOpen((prev) => !prev)}
            src="/assets/svg/cancel.svg"
            alt=""
            className="w-4"
          />
        </div>
        <div className=" overflow-y-auto h-full ">
          <div className=" relative my-5 flex items-center justify-center ">
            <div className=" w-52 h-52 bg-gray-900 rounded-full text-9xl font-semibold text-white flex items-center justify-center">
              {currentUser.profilePicture ? (
                <img
                  src={currentUser.profilePicture}
                  alt="profile"
                  className="w-52 h-52 rounded-full object-cover"
                />
              ) : (
                <span>{currentUser.firstName[0].toUpperCase()}</span>
              )}
            </div>

            <label className="absolute z-50 w-20 h-5 rounded-full bg-white shadow-lg py-4 justify-center -bottom-3 flex items-center">
              <input
                type="file"
                className="hidden"
                name="photos"
                onChange={(e) => HandelUpload(e)}
              />
              <img src={"/assets/svg/camera.svg"} alt="" className="w-4" />
              <span className="text-black font-semibold text-sm ml-2">Add</span>
            </label>
          </div>
          <div className="p-4 px-5">
            <h4 className="font-bold text-2xl ">Your profile</h4>
            <p className="mt-3 font-medium text-gray-600">
              The information you share will be used across Airbnb to help other
              guests and Hosts get to know you.{" "}
              <span className="underline">Learn more</span>
            </p>
            <div className="mt-7">
              {profileQuestions.map((item) => (
                <Fragment key={nanoid()}>
                  <div className="flex items-center py-3 my-[14px]">
                    <img src={item.icon} alt={item.title} className="w-6" />
                    <p className="ml-3">{item.title}</p>
                  </div>
                  <hr />
                </Fragment>
              ))}
            </div>
            <div className="mt-8">
              <h4 className="font-bold text-2xl my-7 ">About you</h4>
              <div className="w-full p-4  border border-dashed rounded-lg border-gray-400 mb-8">
                <p>Wirte something fun about puchy</p>
                <span className="underline font-semibold">Add intro</span>
              </div>
              <hr />
              <h4 className="font-semibold text-xl mt-7 ">What you're into</h4>
              <p className="mt-3 font-medium text-gray-600">
                Find common ground with other guests and Hosts by adding
                interests to your profile.
              </p>
              <div className="flex my-7 gap-3">
                <img src={"/assets/profile/interest.svg"} alt="add interest" />
                <img src={"/assets/profile/interest.svg"} alt="add interest" />
                <img src={"/assets/profile/interest.svg"} alt="add interest" />
              </div>
              <button className="font-semibold underline text-sm">
                Add interest
              </button>
              <hr className="mt-8" />
            </div>
            <div>
              <div className="flex items-center justify-between  mt-7">
                <h4 className="font-semibold text-xl  ">What you're into</h4>
                <input type="checkbox" value="synthwave" className="toggle  " />
              </div>
              <p className="mt-3 font-medium text-gray-600 text-sm w-[80%]">
                Choose whether other people can see all the places you’ve been
                on Airbnb.
              </p>
            </div>
          </div>
          <div className="flex scrollbar-hide items-center overflow-x-auto w-full my-5">
            {Whether.map((item) => (
              <div className="flex flex-col items-center">
                <img
                  src={item.icon}
                  alt={item.title}
                  className="min-w-[180px] h-[100px] object-contain filter-gray"
                />
                <p className="mt-4 text-gray-600 text-sm">{item.title}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-center p-4 px-6 border-t">
          <button className="w-full h-full bg-black text-white py-3 font-semibold border-none  rounded-lg">
            Done
          </button>
        </div>
      </section>
    </>
  );
};

export default Drawyer;

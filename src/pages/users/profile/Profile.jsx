import React, { useContext, useEffect, useState } from "react";
import tick from "../../../asset/svg/tick.svg";
import Buttons from "../../../components/Buttons";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import axios from "../../../config/axiosConfig";
import cancel from "../../../asset/svg/cancel.svg";
import { Link } from "react-router-dom";

import Drawyer from "../../../components/shared/Drawyer";
import { AuthContext } from "../../../context/AuthContext";

const Profile = () => {
  const [image, setImage] = useState(null);
  const [profile, setProfile] = useState();
  const [isEditOpen, setIsEditOpen] = useState(false);
  const { currentUser } = useContext(AuthContext);
  const data = new FormData();

  const uploadUserImage = (e) => {
    data.append("photos", image[0]);

    axios
      .patch(`user`, data)
      .then((res) => {
        setProfile(res.data);
        setImage(null);
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <div className="  sticky h-14 bg-white w-full  flex md:hidden items-center justify-between px-5 top-0 z-40 ">
        <Link to={"/account-settings"}>
          <img
            src={"/assets/svg/right.svg"}
            alt="arrow"
            className="w-4 rotate-180"
          />
        </Link>
        <span
          onClick={() => setIsEditOpen(!isEditOpen)}
          className="font-semibold underline"
        >
          Edit
        </span>
      </div>
      <div className="mx-5 md:mx-[12%] my-[2%] flex flex-col md:flex-row">
        <div className="flex-initial border-b md:border-b-0 flex flex-col w-full  md:w-[30%] ">
          <div className=" shadow-xl flex flex-col items-center border rounded-xl p-6">
            <div className="relative w-24 h-24 bg-black rounded-full  text-5xl text-white font-bold flex items-center justify-center">
              {currentUser.profilePicture ? (
                <img
                  src={currentUser.profilePicture}
                  alt="profile"
                  className="w-24 h-24 rounded-full  object-cover"
                />
              ) : (
                <span>{currentUser.firstName[0].toUpperCase()}</span>
              )}

              <label className="bg-white text-black border flex items-center justify-center p-1 rounded-full absolute -bottom-2 cursor-pointer right-2">
                <input
                  type="file"
                  className="hidden"
                  name="photos"
                  onChange={(e) => setImage(e.target.files)}
                />
                <CameraAltIcon />
              </label>
            </div>
            <h4 className="text-2xl font-bold mt-2">{currentUser.firstName}</h4>
            <span className="font-medium">Guest</span>
          </div>
          <div className="md:border p-5 my-7 rounded-xl">
            <h3 className="text-xl md:w-[60%] font-medium">
              {currentUser.firstName}'s confirmed information
            </h3>

            <div className="flex items-center my-5">
              <img src={tick} alt="icons" className="w-6 h-5" />
              <span className="ml-2">Email address</span>
            </div>
            <hr className="my-5" />
            <h3 className="text-xl md:w-[60%] font-medium">
              Verify your identity
            </h3>
            <p className="text-sm my-5">
              Before you book or Host on Airbnb, you’ll need to complete this
              step.
            </p>
            <Buttons title="Get verified" />
          </div>
        </div>
        <div className="flex-1  mt-6 md:mt-0 mx-2 md:mx-0 pb-10 md:pb-0 md:ml-5 flex items-center justify-center">
          <div className=" md:w-[40%]">
            <h2 className="font-medium text-[22px]">
              It's time to create your profile
            </h2>
            <p className="text-sm font-thin text-gray-500 my-4">
              Your Airbnb profile is an important part of every reservation.
              Create yours to help other Hosts and guests get to know you.
            </p>
            <Buttons
              color="bg-rose-600"
              title="Create a profile"
              width="w-full"
            />
          </div>
        </div>
        {/* CONFIRMATION ALERT  */}
        {image && (
          <div
            onClick={() => setImage(null)}
            className="fixed top-0 right-0 left-0 border rounded-xl bottom-0 w-[95%] md:w-[40%] bg-white shadow-2xl p-3 h-fit m-auto"
          >
            <div className="rounded-full cursor-pointer hover:bg-gray-200 w-fit p-1">
              <img src={cancel} alt="cancel icon" className="w-5" />
            </div>
            <div className="my-[3%] flex justify-center">
              <h3 className="text-lg text-gray-500">
                Are you sure to change the profile picture ?{" "}
              </h3>
            </div>
            <div className="mt-5 flex justify-end">
              <div
                onClick={() => uploadUserImage()}
                className="cursor-pointer py-2 px-5 bg-red-500 rounded-xl text-white font-medium w-fit"
              >
                ok
              </div>
            </div>
          </div>
        )}
      </div>
      <Drawyer isOpne={isEditOpen} setIsOpen={setIsEditOpen} />
    </>
  );
};

export default Profile;

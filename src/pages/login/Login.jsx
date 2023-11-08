import React from "react";
import cancel from "../../asset/svg/cancel.svg";
import Buttons from "../../components/Buttons";

const Login = () => {
  {
    document.body.style.overflowY = "hidden";
  }
  return (
    <>
      <div className="absolute top-0 bottom-0 left-0 right-0 bg-black opacity-50 z-30 flex items-center justify-center"></div>
      <div className="absolute top-0 left-0 bottom-0 right-0 m-auto bg-white z-40 w-[30%] h-[70%] rounded-2xl  overflow-hidden">
        <div className="flex-intial h-[13%]  flex items-center">
          <div className="px-5 flex justify-between w-full">
            <div className="flex-1">
              <div className=" w-9 h-9 hover:bg-gray-300 rounded-full flex items-center justify-center">
                <img src={cancel} alt="cancel icon" className="w-[50%]" />
              </div>
            </div>

            <div className="flex-1 text-center text-xl font-semibold">
              Login
            </div>
            <div className="flex-1"></div>
          </div>
        </div>
        <div className="p-5">
          <input
            type="text"
            placeholder="username"
            className="w-full p-3 border rounded-lg"
          />
          <input
            type="password"
            placeholder="password"
            className="w-full p-3 border rounded-lg my-3    "
          />
          <div className="mt-5">
            <Buttons color="bg-rose-500" width="w-full" title="Login" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

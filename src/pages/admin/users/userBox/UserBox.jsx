import React from "react";
import cancel from "../../../../asset/svg/cancel.svg";

const UserBox = ({ setUserBox, item }) => {
  return (
    <>
      <div className=" bg-black opacity-50 fixed top-0 bottom-0 right-0 left-0  z-10 "></div>
      <div
        className={`z-50 p-5 absolute w-[30%] h-[60%] top-[20%]  left-0 right-0 m-auto bg-white shadow-2xl rounded-xl`}
      >
        <div
          onClick={() => setUserBox(false)}
          className="flex items-center justify-center rounded-full w-fit p-3 hover:bg-gray-200"
        >
          <img src={cancel} alt="cancel" className="w-5" />
        </div>
        <div className="flex items-center justify-center">
          <div className="w-[30%] min-h-[100px] rounded-full flex items-center justify-center overflow-hidden bg-gray-300">
            <img src="" alt="icon" />
          </div>
        </div>
        <div className="p-5 border rounded-xl mt-4 font-medium">
          <h4 className="my-3">Username : {item?.firstName}</h4>
          <h4 className="my-3 ">
            Email :
            <span className="text-red-500 ml-2 font-normal">{item?.email}</span>
          </h4>
          <h4 className="my-3">
            Phone :<span className=" ml-2 font-normal">859485946778</span>
          </h4>
          <h4 className="my-3">
            Place :<span className=" ml-2 font-normal">malappuram</span>
          </h4>
        </div>
      </div>
    </>
  );
};

export default UserBox;

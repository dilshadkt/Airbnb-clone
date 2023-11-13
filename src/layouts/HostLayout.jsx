import React, { useContext, useState } from "react";
import logo from "../asset/logo/logo.png";
import { Link, Outlet } from "react-router-dom";
import MyContext from "../components/contex/Mycontex";

const HostLayout = () => {
  const { formData } = useContext(MyContext);

  return (
    <>
      <div>
        <nav className="w-full h-20  flex items-center px-6 justify-between sticky top-0">
          <Link to={"/hoisting"}>
            <div>
              <img src={logo} alt="log" className="w-[120px]" />
            </div>
          </Link>

          <div className="flex">
            <div className="px-3 py-2 rounded-full border mr-3">
              Questions ?
            </div>
            <div className="px-3 py-2 rounded-full border">Questions ?</div>
          </div>
        </nav>
        <div>
          <Outlet />
        </div>
        {/* <div className=" h-20 fixed bottom-0 right-0 left-0">
          <div className="flex justify-between px-8 mt-3">
            <div
              onClick={
                count > -1
                  ? () => {
                      setcount((prev) => prev - 1);
                      navigate(paths[count - 1]);
                    }
                  : navigate("/hoisting")
              }
              className="px-4 py-2  font-medium underline cursor-pointer"
            >
              back
            </div>

            <div
              onClick={
                count < paths.length - 1
                  ? () => {
                      gotoNext();
                    }
                  : null
              }
              className={`font-medium text-white px-4 py-2 bg-black rounded-xl cursor-pointer ${
                count === paths.length - 1 && `hidden`
              }`}
            >
              next
            </div>
            {count === paths.length - 1 && (
              <div
                onClick={() => PostData()}
                className="font-medium text-white px-4 py-2 bg-rose-500 rounded-xl cursor-pointer"
              >
                Finish
              </div>
            )}
          </div>
        </div> */}
      </div>
    </>
  );
};

export default HostLayout;

import React, { useContext, useState } from "react";
import logo from "../asset/logo/logo.png";
import { Link, Outlet, useNavigate } from "react-router-dom";
import MyContext from "../components/contex/Mycontex";

const HostLayout = () => {
  const [count, setcount] = useState(0);
  const { progress } = useContext(MyContext);
  const paths = [
    "/become-a-host",
    "structure",
    "privacy-type",
    "location",
    "floor-plan",
  ];
  const navigate = useNavigate();
  console.log(count);
  return (
    <>
      <div>
        <nav className="w-full h-20  flex items-center px-6 justify-between">
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
        <div className=" h-20">
          <div className="w-full h-[5px] bg-gray-500 transition-all duration-75">
            <div
              className={`w-[${
                progress * 10
              }%] h-full bg-red-600 transition-all duration-75`}
            ></div>
          </div>
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
                      setcount((pre) => pre + 1);
                      navigate(paths[count + 1]);
                    }
                  : null
              }
              className=" font-medium text-white px-4 py-2 bg-black rounded-xl cursor-pointer"
            >
              next
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HostLayout;

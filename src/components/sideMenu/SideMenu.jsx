import React, { useContext } from "react";
import { Link } from "react-router-dom";
import MyContext from "../contex/Mycontex";
import { useNavigate } from "react-router-dom";
const SideMenu = () => {
  const naviagate = useNavigate();
  const { setIsMenuOpen, setIsLoginOpen, isLogin, setIsLogin, setSignOpen } =
    useContext(MyContext);

  return (
    <>
      {isLogin ? (
        <>
          <div
            onMouseLeave={() => setIsMenuOpen(false)}
            className="bg-white shadow-md border w-64 rounded-xl py-3 absolute top-11 right-0 z-30"
          >
            <div>
              <ul className="font-medium">
                <li className="py-3 px-4 hover:bg-gray-200">Message</li>
                <li className="py-3 px-4 hover:bg-gray-200">Trips</li>
                <Link to={"/whishlist"}>
                  <li className="py-3 px-4 hover:bg-gray-200">Whishlist</li>
                </Link>
              </ul>
            </div>
            <hr className="my-2" />
            <div>
              <ul className="text-gray-500">
                <li className="py-3 px-4 hover:bg-gray-200">Manage listing</li>
                <Link to={"/account-settings"}>
                  <li className="py-3 px-4 hover:bg-gray-200">Account</li>
                </Link>
              </ul>
            </div>
            <hr className="my-2" />
            <div>
              <ul className="text-gray-500">
                <li className="py-3 px-4 hover:bg-gray-200">Help Centre</li>
                <li
                  onClick={() => {
                    setIsLogin(false);
                    localStorage.clear();
                    naviagate("/");
                  }}
                  className="py-3 px-4 hover:bg-gray-200"
                >
                  Logout
                </li>
              </ul>
            </div>
          </div>
        </>
      ) : (
        <>
          <div
            onMouseLeave={() => setIsMenuOpen(false)}
            className="bg-white shadow-md border w-64 rounded-xl py-3 absolute top-11 right-0 z-30"
          >
            <div>
              <ul className="font-medium">
                <li
                  onClick={() => setIsLoginOpen(true)}
                  className="py-3 px-4 hover:bg-gray-200"
                >
                  Sign Up
                </li>
                <li
                  onClick={() => setSignOpen(true)}
                  className="py-3 px-4 hover:bg-gray-200"
                >
                  Log in
                </li>
              </ul>
            </div>

            <hr className="my-2" />
            <div>
              <ul className="text-gray-500">
                <li className="py-3 px-4 hover:bg-gray-200">Help Centre</li>
              </ul>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default SideMenu;

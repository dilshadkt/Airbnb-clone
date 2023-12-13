import React, { useContext } from "react";
import { Link } from "react-router-dom";
import MyContext from "../contex/Mycontex";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { loginOpen, singInOpen } from "../../store/slice/Auth";
import { setLogin } from "../../store/slice/User";
const SideMenu = () => {
  const dispatch = useDispatch();
  const login = useSelector((store) => store.user.isLogin);
  const naviagate = useNavigate();
  const { setIsMenuOpen } = useContext(MyContext);

  return (
    <>
      {login ? (
        <>
          <div
            onMouseLeave={() => setIsMenuOpen(false)}
            className="bg-white shadow-md border w-64 rounded-xl py-3 absolute top-11 right-0 z-30"
          >
            <div>
              <ul className="font-medium">
                <Link to={"/chats"}>
                  <li className="py-3 px-4 hover:bg-gray-200">Message</li>
                </Link>
                <Link to={"/trips"}>
                  <li className="py-3 px-4 hover:bg-gray-200">Trips</li>
                </Link>
                <Link to={"/whishlist"}>
                  <li className="py-3 px-4 hover:bg-gray-200">Whishlist</li>
                </Link>
              </ul>
            </div>
            <hr className="my-2" />
            <div>
              <ul className="text-gray-500">
                <Link to={"/Manage"}>
                  <li className="py-3 px-4 hover:bg-gray-200">
                    Manage listing
                  </li>
                </Link>
                <Link to={"/account-settings"}>
                  <li className="py-3 px-4 hover:bg-gray-200">Account</li>
                </Link>
              </ul>
            </div>
            <hr className="my-2" />
            <div>
              <ul className="text-gray-500">
                <li className="py-3 px-4 hover:bg-gray-200">Help Centre</li>
                <Link to={"/hoisting"}>
                  <li className="py-3 px-4 hover:bg-gray-200 hidden sm:flex">
                    Switch to hoisting
                  </li>
                </Link>
                <li
                  onClick={() => {
                    dispatch(setLogin(false));
                    localStorage.clear();
                    naviagate("/");
                    window.location.reload();
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
                  onClick={() => dispatch(loginOpen(true))}
                  className="py-3 px-4 hover:bg-gray-200"
                >
                  Log in
                </li>
                <li
                  onClick={() => dispatch(singInOpen(true))}
                  className="py-3 px-4 hover:bg-gray-200"
                >
                  Sign Up
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

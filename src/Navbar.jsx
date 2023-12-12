import React, { useContext } from "react";
import logo from "./asset/logo/logo.png";
import MyContext from "./components/contex/Mycontex";
import SideMenu from "./components/sideMenu/SideMenu";
import Login from "./pages/login/Login";
import SignUp from "./pages/signup/SignUp";
import userIcon from "./asset/svg/user.svg";
import global from "./asset/svg/global.svg";
import threedot from "./asset/svg/threedot.svg";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setSearch } from "./store/slice/SearchSlice";
import { loginOpen } from "./store/slice/Auth";

const Navbar = () => {
  const NewUser = useSelector((store) => store.user.user);
  const login = useSelector((store) => store.user.isLogin);
  const loginBox = useSelector((store) => store.auth.login);
  const signBox = useSelector((store) => store.auth.signin);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isMenuOpen, setIsMenuOpen, notification } = useContext(MyContext);

  return (
    <>
      <nav className=" h-20 flex mx-20 ">
        <div className=" flex-1 flex items-center ">
          <div
            onClick={() => {
              navigate("/");
              window.location.reload();
            }}
          >
            <img alt="logo" src={logo} className="w-32 bg-white " />
          </div>
        </div>
        <div
          className=" flex-1 flex items-center
      justify-center"
        >
          <input
            type="text"
            onChange={(e) => dispatch(setSearch(e.target.value))}
            placeholder="Serach"
            className="shadow-md w-96 h-10 rounded-2xl border flex items-center px-3 relative text-gray-500"
          />
        </div>
        <div className=" flex-1 flex items-center justify-end">
          <div className="flex items-center">
            <span
              onClick={() =>
                login ? navigate("/hoisting") : dispatch(loginOpen(true))
              }
              className="text-sm cursor-pointer font-medium mx-2 hover:bg-gray-200 px-5 py-3 rounded-full"
            >
              Switch to hoisting
            </span>

            <img src={global} alt="icon" />
            <div
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="border px-3 py-2 flex items-center justify-center rounded-3xl ml-2 hover:shadow-md"
            >
              <img src={threedot} alt="icons" />
              <div className="rounded-full w-7 h-7  bg-black flex items-center justify-center ml-2 relative cursor-pointer">
                {login ? (
                  <>
                    <span className="text-white ">
                      {NewUser?.firstName[0]?.toUpperCase()}
                    </span>
                  </>
                ) : (
                  <img src={userIcon} alt="icon" className="rounded-full" />
                )}
                {notification && (
                  <div className="absolute -top-2 -right-2 bg-red-600 w-5 h-5 rounded-full flex items-center justify-center text-white">
                    {notification}
                  </div>
                )}

                {isMenuOpen && <SideMenu />}
              </div>
            </div>
          </div>
        </div>
        {loginBox ? (
          <>
            <Login />
          </>
        ) : (
          <>{(document.body.style.overflowY = "")}</>
        )}
        {signBox ? (
          <>
            <SignUp />
          </>
        ) : (
          ""
        )}
      </nav>
      <hr />
    </>
  );
};

export default Navbar;

import React, { useContext, useEffect, useRef } from "react";
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
import ForgetPassword from "./pages/login/ForgetPassword";
import Category from "./Category";
import SearchIcon from "@mui/icons-material/Search";
const Navbar = () => {
  const NewUser = useSelector((store) => store.user.user);
  const login = useSelector((store) => store.user.isLogin);
  const loginBox = useSelector((store) => store.auth.login);
  const signBox = useSelector((store) => store.auth.signin);
  const forgetPassword = useSelector((store) => store.auth.forgetPassword);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isMenuOpen, setIsMenuOpen, notification } = useContext(MyContext);

  const scroll = useRef(null);
  const input = useRef(null);
  const handleScroll = () => {
    if (window.scrollY > 0) {
      scroll.current.style.height = "0px";
      scroll.current.style.opacity = "0";
      input.current.style.width = "75%";
    }
    if (window.scrollY === 0) {
      scroll.current.style.opacity = "1";
      scroll.current.style.height = "60px";
      input.current.style.width = "150%";
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <div className="sticky top-0 z-50 bg-white">
        <nav className=" py-4 flex items-start mx-20 sm:mx-5 sticky top-0 ">
          <div className=" flex-1 flex items-center sm:hidden ">
            <div
              onClick={() => {
                navigate("/");
                window.location.reload();
              }}
            >
              <img alt="logo" src={logo} className="w-32 bg-white  " />
            </div>
          </div>
          <div
            className=" flex-1 flex items-center flex-col sm:flex-initial sm:w-[70%]
      justify-center"
          >
            <div
              ref={scroll}
              className="  w-full transition-all pb-3 text-[17px] text-gray-500   flex items-center justify-center"
            >
              <div className="px-3">Stays</div>
              <div className="px-3">Experience</div>
              <div className="px-3">Online Experience</div>
            </div>
            <div
              ref={input}
              className="border shadow-sm  items-center justify-between px-[10px] py-3 transition-all flex rounded-full"
            >
              <div className="px-3 cursor-pointer text-[15px] font-medium">
                Any where
              </div>
              <div className=" px-3 cursor-pointer text-[15px] font-medium border-x">
                Any week
              </div>
              <div className="flex cursor-pointer  justify-between items-center text-gray-400 font-light">
                <p className="mr-3">add guest</p>
                <div className="w-7 h-7 bg-red-500 rounded-full text-white flex items-center justify-center">
                  <SearchIcon className="transform scale-75" />
                </div>
              </div>
            </div>
            {/* <input
              ref={input}
              type="text"
              onChange={(e) => dispatch(setSearch(e.target.value))}
              placeholder="Serach"
              className=" shadow-md transition-all delay-100  h-10 rounded-2xl border flex items-center px-3 relative text-gray-500"
            /> */}
          </div>
          <div className=" flex-1 flex items-center justify-end">
            <div className="flex items-center">
              <span
                onClick={() =>
                  login ? navigate("/hoisting") : dispatch(loginOpen(true))
                }
                className="text-sm sm:hidden cursor-pointer font-medium mx-2 hover:bg-gray-200 px-5 py-3 rounded-full"
              >
                Switch to hoisting
              </span>

              <img src={global} alt="icon" className="sm:hidden" />
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
                      <div
                        className={`absolute  ${
                          notification === 0 && `hidden`
                        } -top-2 -right-2 bg-red-600 w-5 h-5 rounded-full flex items-center justify-center text-white`}
                      >
                        {notification}
                      </div>
                    </>
                  ) : (
                    <img src={userIcon} alt="icon" className="rounded-full" />
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
          {signBox && <SignUp />}
          {forgetPassword && <ForgetPassword />}
        </nav>
        <hr />
        <Category />
      </div>
    </>
  );
};

export default Navbar;

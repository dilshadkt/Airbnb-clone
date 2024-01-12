import React, { useContext, useEffect, useRef, useState } from "react";
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
import { useLocation } from "react-router-dom";
const Navbar = () => {
  const NewUser = useSelector((store) => store.user.user);
  const login = useSelector((store) => store.user.isLogin);
  const loginBox = useSelector((store) => store.auth.login);
  const signBox = useSelector((store) => store.auth.signin);
  const forgetPassword = useSelector((store) => store.auth.forgetPassword);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { isMenuOpen, setIsMenuOpen, notification } = useContext(MyContext);
  const [serach, setSearch] = useState(false);
  const scroll = useRef(null);
  const input = useRef(null);
  const fullNav = useRef(null);
  const shortNav = useRef(null);
  const handleScroll = () => {
    if (window.scrollY > 0) {
      scroll.current.style.height = "0px";
      scroll.current.style.opacity = "0";
      input.current.style.width = "75%";
      fullNav.current.style.display = "none";
      shortNav.current.style.display = "flex";
    } else if (window.scrollY === 0) {
      scroll.current.style.opacity = "1";
      scroll.current.style.height = "60px";
      input.current.style.width = "170%";
      fullNav.current.style.display = "flex";
      shortNav.current.style.display = "none";
    }
  };
  useEffect(() => {
    pathname === "/" && window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  return (
    <>
      <div
        className={`${
          pathname === "/" ? `sticky` : `static`
        }  top-0 z-40 bg-white`}
      >
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
      justify-start"
          >
            <div
              ref={scroll}
              className={`${
                pathname === "/" ? `flex` : `hidden`
              } sm:hidden  w-full transition-all pb-3 text-[17px] text-gray-500    items-center justify-center`}
            >
              <div className="px-3">Stays</div>
              <div className="px-3">Experience</div>
              <div className="px-3">Online Experience</div>
            </div>
            <div
              ref={input}
              className="sm:hidden border shadow-md     transition-all  rounded-full"
            >
              <div
                ref={shortNav}
                className="flex items-center justify-between py-3 px-2"
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
              <div ref={fullNav} className=" hidden justify-between text-sm ">
                <div className="flex-1    hover:bg-[rgb(235,235,235)] py-3 rounded-full ">
                  <div className=" pl-[15%] cursor-pointer  border-r hover:border-none">
                    <div className="font-medium">where</div>
                    <div className="text-gray-600 ">Search destination</div>
                  </div>
                </div>

                <div className="cursor-pointer hover:bg-[rgb(235,235,235)]   rounded-full  flex-initial w-[18%] flex flex-col items-center justify-center">
                  <div className="font-medium">Check in</div>
                  <div className="text-gray-600 ">Add dates</div>
                </div>
                <div className="cursor-pointer hover:bg-[rgb(235,235,235)]   rounded-full flex-initial w-[18%] flex flex-col items-center justify-center">
                  <div className="font-medium">check out</div>
                  <div className="text-gray-600 ">Add dates</div>
                </div>
                <div className="cursor-pointer flex hover:bg-[rgb(235,235,235)] px-3   rounded-full flex-1 justify-between items-center">
                  <div className="border-l px-4 hover:border-none">
                    <div className="font-medium">who </div>
                    <div className="text-gray-600 ">Add guest</div>
                  </div>
                  <div className="w-10 h-10 bg-red-500 rounded-full text-white flex items-center justify-center">
                    <SearchIcon className="transform scale-75" />
                  </div>
                </div>
              </div>
            </div>
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

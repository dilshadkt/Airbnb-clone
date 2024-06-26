import CircleIcon from "@mui/icons-material/Circle";
import SearchIcon from "@mui/icons-material/Search";
import React, { useContext, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import Category from "./Category";
import MyContext from "./components/contex/Mycontex";
import Filter from "./components/filter/Filter";
import FullNavbar from "./components/navbar/FullNavbar";
import MobilNav from "./components/navbar/mobileNav/MobilNav";
import SideMenu from "./components/sideMenu/SideMenu";
import ForgetPassword from "./pages/login/ForgetPassword";
import Login from "./pages/login/Login";
import SignUp from "./pages/signup/SignUp";
import { loginOpen } from "./store/slice/Auth";
import { AuthContext } from "./context/AuthContext";
const Navbar = () => {
  const { currentUser } = useContext(AuthContext);
  const login = useSelector((store) => store.user.isLogin);
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
  const [FilterOpen, setFilterOpen] = useState(false);
  const handleScroll = () => {
    if (window.scrollY > 65) {
      scroll.current.style.height = "0px";
      scroll.current.style.opacity = "0";
      input.current.style.width = "350px";
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
      <header
        className={`${pathname === "/" ? `sticky` : `static`}   ${
          ["/"].includes(pathname) ? `block` : `hidden md:block`
        } top-0 z-[1000] bg-white rounded-3xl `}
      >
        <nav className=" py-4 flex items-start max-w-screen-2xl mx-auto px-5  ">
          <div className=" flex-1 md:flex items-center hidden ">
            <div
              onClick={() => {
                navigate("/");
                window.location.reload();
              }}
            >
              <img
                alt="logo"
                src={"/assets/logo.png"}
                className="w-32 bg-white  "
              />
            </div>
          </div>
          <div
            className="hidden md:flex-1 md:flex items-center flex-col flex-initial w-[70%]
      justify-start"
          >
            <div
              ref={scroll}
              className={`${
                pathname === "/" ? `md:flex` : `hidden`
              }  hidden w-full transition-all pb-3 text-[17px] text-gray-500    items-center justify-center`}
            >
              <div className="px-3">Stays</div>
              <div className="px-3">Experience</div>
              <div className="px-3">Online Experience</div>
            </div>
            <div
              ref={input}
              className={` ${
                window.scrollY === 0 ? `w-[170%]` : `w-[75%]]`
              } hidden border shadow-md md:block    transition-all  rounded-full  duration-300 `}
            >
              <div
                ref={shortNav}
                className={`${
                  window.scrollY === 0 ? `hidden` : "flex"
                } items-center justify-between py-3 px-2`}
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
              <FullNavbar fullNav={fullNav} />
            </div>
          </div>
          <div className="flex md:hidden w-full h-full ">
            <button
              onClick={() => setFilterOpen(true)}
              className="w-full rounded-full flex border shadow-xl items-center px-4 py-2"
            >
              <SearchIcon className="scale-125" />
              <div className="grid ml-3  ">
                <h5 className="font-semibold text-sm text-left">Where to?</h5>
                <div className="flex  items-center text-xs text-gray-600 font-medium -translate-y-1">
                  <span className=" ">Any where</span>
                  <CircleIcon className="scale-[0.25] text-gray-500 mt-[1px]" />
                  <span className="">Any week</span>
                  <CircleIcon className="scale-[0.25] text-gray-500 mt-[1px]" />

                  <span>Add guest</span>
                </div>
              </div>
            </button>
          </div>
          {/* FITLER  */}
          <Filter FilterOpen={FilterOpen} setFilterOpen={setFilterOpen} />

          <div className="hidden flex-1 md:flex items-center justify-end">
            <div className="flex items-center">
              <span
                onClick={() =>
                  login ? navigate("/hoisting") : dispatch(loginOpen(true))
                }
                className="text-sm hidden md:flex cursor-pointer font-medium mx-2 hover:bg-gray-200 px-5 py-3 rounded-full"
              >
                Switch to hoisting
              </span>

              <img
                src={"/assets/svg/global.svg"}
                alt="icon"
                className="hidden md:block"
              />

              {/* MENU ICON  */}
              <div
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="border px-3 py-2 flex items-center justify-center rounded-3xl ml-2 hover:shadow-md"
              >
                <img src={"/assets/svg/threedot.svg"} alt="icons" />

                <div className=" rounded-full w-7 h-7  bg-black flex items-center justify-center ml-2 relative cursor-pointer">
                  {currentUser ? (
                    <>
                      {currentUser.profilePicture ? (
                        <img
                          src={currentUser.profilePicture}
                          alt="profile"
                          className="rounded-full w-7 h-7 object-cover"
                        />
                      ) : (
                        <span className="text-white ">
                          {currentUser.firstName[0].toUpperCase()}
                        </span>
                      )}
                      <div
                        className={`absolute  ${
                          notification === 0 && `hidden`
                        } -top-2 -right-2 bg-red-600 w-5 h-5 rounded-full flex items-center justify-center text-white`}
                      >
                        {notification}
                      </div>
                    </>
                  ) : (
                    <img
                      src={"/assets/svg/user.svg"}
                      alt="icon"
                      className="rounded-full"
                    />
                  )}

                  {isMenuOpen && <SideMenu />}
                </div>
              </div>
            </div>
          </div>
          {forgetPassword && <ForgetPassword />}
        </nav>
        <hr />
        <div className="relative -z-10"></div>
      </header>
      <Category />
      <MobilNav />
      <Login />
      <SignUp />
    </>
  );
};

export default Navbar;

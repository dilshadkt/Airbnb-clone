import React, { useEffect, useState } from "react";
import { mobilNav } from "../../../constants";
import { Link, useLocation } from "react-router-dom";

const MobilNav = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const controlNavbar = () => {
      if (window.scrollY > lastScrollY) {
        // if scroll down hide the navbar
        setIsVisible(false);
      } else {
        // if scroll up show the navbar
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY);
    };
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);
  return (
    <div
      className={`${
        ["/rooms", "/account-settings/profile"].includes(location.pathname)
          ? `hidden`
          : `block`
      } fixed bottom-0  z-50 w-full block md:hidden`}
    >
      <div
        className={` bg-white border-t text-gray-800 ${
          isVisible ? "translate-y-0" : "translate-y-[100%]"
        } transition duration-300 ease-in-out`}
      >
        <ul
          className={`flex justify-between  px-5 py-3  text-gray-600 font-semibold`}
        >
          {mobilNav.map((item) => (
            <Link key={item.id} to={item.path}>
              <li className="flex items-center justify-center flex-col">
                <img
                  src={item.icon}
                  alt={item.title}
                  className={`w-6  ${
                    location.pathname === item.path
                      ? `filter-red`
                      : `filter-gray `
                  }`}
                />
                <span
                  className={`${
                    location.pathname === item.path && `text-red-500`
                  } text-[10px] mt-1`}
                >
                  {" "}
                  {item.title}
                </span>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MobilNav;

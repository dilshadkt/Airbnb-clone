import React from "react";
import global from "../asset/svg/global.svg";
import insta from "../asset/svg/insta.svg";
import facebook from "../asset/svg/facebok.svg";
import linkedin from "../asset/svg/linkedin.svg";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();

  return (
    <>
      <div
        className={`bg-gray-100  ${
          ["/whishlist", "/trips", "/account-settings"].includes(
            location.pathname
          ) && `hidden md:block`
        }`}
      >
        <div className="flex md:flex-row flex-col items-center">
          <div className="flex-1 flex items-center justify-start w-full ">
            <div className=" md:mx-20 mx-5 my-14 ">
              <h4 className="font-semibold text-base">Support</h4>
              <ul className="text-sm">
                <li className="mt-2">Help Centre</li>
                <li className="mt-2">Get help with a safety issue</li>
                <li className="mt-2">AirCover</li>
                <li className="mt-2">Anti-discrimination</li>
                <li className="mt-2">Disability support</li>
                <li className="mt-2">Cancellation options</li>
              </ul>
            </div>
          </div>
          <div className="flex-1 flex justify-start  w-full ">
            <div className="md:my-14  w-fit mx-5 md:0">
              <h4 className="font-semibold text-base">Hosting</h4>
              <ul className="text-sm">
                <li className="mt-2">Airbnb your home</li>
                <li className="mt-2">AirCover for Hosts</li>
                <li className="mt-2">Hosting resources</li>
                <li className="mt-2">Community forum</li>
                <li className="mt-2">Hosting responsibly</li>
              </ul>
            </div>
          </div>
          <div className="flex-initial md:w-[40%]  w-full ">
            <div className="my-14  mx-5 md:mx-0 w-fit">
              <h4 className="font-semibold text-base">Airbnb</h4>
              <ul className="text-sm">
                <li className="mt-2">Newsroom</li>
                <li className="mt-2">New features</li>
                <li className="mt-2">Careers</li>
                <li className="mt-2">Investors</li>
                <li className="mt-2">Hosting responsibly</li>
              </ul>
            </div>
          </div>
        </div>

        <hr className="pt-5" />
        <div className="flex md:flex-row flex-col justify-start  md:justify-between  h-16 items-start md:items-center mx-5 md:mx-20">
          <div className="">
            <ul className="flex">
              <li>© 2023 Airbnb, Inc.</li>
              <li>Privacy</li>
              <li>Terms</li>
            </ul>
          </div>
          <div className="flex items-center h-full ">
            <img src={global} alt="global" className="cursor-pointer" />
            <span>English (IN)</span>
            <ul className="flex items-center ml-3">
              <li className="mx-2 cursor-pointer">
                <img src={insta} alt="instagram logo" />
              </li>
              <li className="mx-2 cursor-pointer">
                <img src={facebook} alt="facebook logo" />
              </li>
              <li className="mx-2 cursor-pointer">
                <img src={linkedin} alt="linkedin logo" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;

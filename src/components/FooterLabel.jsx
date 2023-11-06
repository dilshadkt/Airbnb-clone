import React from "react";
import global from "../asset/svg/global.svg";
import insta from "../asset/svg/insta.svg";
import facebook from "../asset/svg/facebok.svg";
import linkedin from "../asset/svg/linkedin.svg";

const FooterLabel = () => {
  return (
    <div className=" h-20 px-48 bg-gray-200 flex items-center">
      <div className="w-full flex justify-between items-center">
        <div>
          <ul className="flex text-xs">
            <li className="mr-2 ">© 2023 Airbnb, Inc.</li>
            <li className="mr-2">Privacy</li>
            <li className="mr-2">Terms</li>
          </ul>
        </div>
        <div>
          <ul className="flex text-xs">
            <li className="  flex items-center cursor-pointer  mr-4">
              <img src={global} alt="global" />
              <h4>English (IN)</h4>
            </li>
            <li className="mr-2  flex items-center cursor-pointer">
              <img src={insta} alt="insta icon" />
            </li>
            <li className="mr-2 flex items-center cursor-pointer">
              <img src={facebook} alt="insta icon" />
            </li>
            <li className="mr-2 flex items-center cursor-pointer">
              <img src={linkedin} alt="insta icon" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FooterLabel;

import React from "react";
import AppsIcon from "@mui/icons-material/Apps";
import MessageIcon from "@mui/icons-material/Message";
import EmailIcon from "@mui/icons-material/Email";
import InventoryIcon from "@mui/icons-material/Inventory";
import PeopleIcon from "@mui/icons-material/People";
import DnsIcon from "@mui/icons-material/Dns";
import { Link } from "react-router-dom";
import HourglassTopIcon from "@mui/icons-material/HourglassTop";
const SideBar = () => {
  return (
    <div className="flex-initial w-[18%] border p-3 flex h-[89vh] sticky left-0 top-[78px]">
      <ul className="pl-5 w-full text-gray-500 group">
        <li className="my-5 hover:bg-gray-200  transition-all cursor-pointer w-full p-2 rounded-lg hover:text-black">
          <AppsIcon className="mr-2" /> Home
        </li>
        <li className="my-5 hover:bg-gray-200  transition-all cursor-pointer w-full p-2 rounded-lg hover:text-black ">
          <MessageIcon className="mr-2" />
          Chat
        </li>
        <li className="my-5 hover:bg-gray-200  transition-all cursor-pointer w-full p-2 rounded-lg hover:text-black">
          <EmailIcon className="mr-2" /> Email
        </li>
        <Link to={"properties"}>
          <li className="my-5 hover:bg-gray-200  transition-all cursor-pointer w-full p-2 rounded-lg hover:text-black">
            <InventoryIcon className="mr-2" /> Properties
          </li>
        </Link>
        <Link to={"users"}>
          <li className="my-5 hover:bg-gray-200  transition-all cursor-pointer w-full p-2 rounded-lg hover:text-black">
            <PeopleIcon className="mr-2" /> Users
          </li>
        </Link>
        <Link to={"whishlist"}>
          <li className="my-5 hover:bg-gray-200  transition-all cursor-pointer w-full p-2 rounded-lg hover:text-black">
            <DnsIcon className="mr-2" /> Whishlist
          </li>
        </Link>
        <li className="my-5 hover:bg-gray-200  transition-all cursor-pointer w-full p-2 rounded-lg hover:text-black">
          <HourglassTopIcon className="mr-2" /> New Property
        </li>
      </ul>
    </div>
  );
};

export default SideBar;

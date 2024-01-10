import axios from "../../../config/axiosConfig";
import React, { useEffect, useState } from "react";
import UserShimmer from "../../../components/shimmer/usreList/UserShimmer";
import UserBox from "./userBox/UserBox";

const UserList = () => {
  const [users, setUsers] = useState(null);
  const [filterd, setFilterd] = useState(users);
  const [details, setDetails] = useState({});
  const [userBox, setUserBox] = useState(false);
  useEffect(() => {
    axios
      .get("admin/allUser")
      .then((res) => {
        setUsers(res.data);
        setFilterd(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  const UserDetails = (details) => {
    setUserBox(!userBox);
    setDetails(details);
  };
  return !users ? (
    <UserShimmer />
  ) : (
    <div className="px-[3%] py-3  relative">
      <div className="grid grid-cols-6 gap-4">
        <div className="font-semibold text-sm cursor-pointer">Users</div>
        <div className="font-semibold text-sm cursor-pointer">Email</div>
        <div className="font-semibold text-sm cursor-pointer">Contact</div>
        <div className="font-semibold text-sm cursor-pointer">City</div>
        <div className="font-semibold text-sm cursor-pointer">Last Active</div>
        <div className="font-semibold text-sm cursor-pointer">Joined</div>
        <div className="col-start-1 col-end-7">
          <hr />
        </div>
        {filterd.slice(0, 10).map((item) => (
          <>
            <div
              onClick={() => UserDetails(item)}
              className="flex items-center p-2"
            >
              <div className="w-7 h-7 rounded-full flex items-center justify-center overflow-hidden bg-gray-600">
                {item.profilePicture && (
                  <img src={item.profilePicture} alt="profile" />
                )}
              </div>
              <span className="hover:underline ml-4 cursor-pointer">
                {item.firstName}
              </span>
            </div>
            <div className=" p-2 text-xs text-red-500">{item.email}</div>
            <div className=" p-2 text-xs font-semibold">859485946778</div>
            <div className=" p-2 text-xs ">malappuram</div>
            <div className=" p-2 text-xs ">4 days ago</div>
            <div className=" p-2 text-xs ">Nov 18</div>
          </>
        ))}
        <div className="col-start-1 col-end-7 px-3">
          <hr />
        </div>

        <div className="text-xs">
          <span className="font-semibold">1 to 10 </span>Items of {users.length}
        </div>
        <div className="col-start-6">
          <div onClick={() => setFilterd(users.slice(11, 20))}>next</div>
        </div>
      </div>
      {userBox && <UserBox setUserBox={setUserBox} item={details} />}
    </div>
  );
};

export default UserList;

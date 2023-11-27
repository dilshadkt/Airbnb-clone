import React from "react";
import UserList from "./UserList.jsx";
import AddIcon from "@mui/icons-material/Add";

const Users = () => {
  return (
    <div>
      <div className="p-[2%]">
        <h2 className="font-semibold text-2xl">Users</h2>
        <div className="my-8 flex justify-between items-center">
          <div className="w-1/4">
            <input
              type="text"
              placeholder="search users "
              className="border p-2 rounded-lg w-full"
            />
          </div>
          <div>
            <button className="py-2 px-4 bg-red-500 text-white rounded-xl">
              <AddIcon /> Add user
            </button>
          </div>
        </div>
      </div>
      <hr />
      <UserList />
    </div>
  );
};

export default Users;

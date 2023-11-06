import React from "react";
import { data } from "../../asset/accounts/data";
import AccountCards from "../../components/AccountCards";
import { Link } from "react-router-dom";

const Account = () => {
  return (
    <div className="mx-[13%] my-[3%]">
      <h1 className="text-3xl font-semibold">Accounts</h1>
      <h3 className="text-lg font-medium my-5">
        Dilshad Kt,<span className="font-normal"> hmydilshadkt@gmail.com </span>
        .
        <Link to={"profile"}>
          <span className="underline">Go to profile</span>
        </Link>
      </h3>
      <div className="flex flex-wrap justify-between my-9">
        {data.map((item, index) => (
          <AccountCards
            key={index}
            icons={item.img}
            title={item.title}
            description={item.desc}
          />
        ))}
      </div>
      <div className="w-full flex items-center justify-center p-6 text-gray-400">
        <span>need to deactive your account ?</span>
      </div>
    </div>
  );
};

export default Account;

import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import MyContext from "../../components/contex/Mycontex";
import LoopIcon from "@mui/icons-material/Loop";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import ListShimmer from "../../components/shimmer/list/ListShimmer";
import Update from "./update/Update";
const ManageLIst = () => {
  const { user } = useContext(MyContext);
  const [list, setList] = useState([]);
  const [isUpdateOpen, setIsUpdateOpen] = useState(false);
  const [data, setData] = useState({});
  useEffect(() => {
    axios
      .get(`/listings/manageList/${user._id}`)
      .then((res) => {
        setList(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, [user._id]);
  function removeEventListener(id) {
    axios
      .delete(`/listings/${id}?userId=${user._id}`)
      .then((res) => {
        setList(res.data);
      })
      .catch((err) => console.log(err));
  }
  return list.length === 0 ? (
    <ListShimmer />
  ) : (
    <div className=" mx-[10%] my-[2%] cursor-pointer">
      <h2 className="text-2xl font-semibold">Your Listing</h2>
      <div className="my-6">
        {list.map((item, index) => (
          <div
            onClick={() => {
              setData(item);
              setIsUpdateOpen(true);
            }}
            key={index}
            className="p-5 border my-4 rounded-xl flex items-center justify-between"
          >
            <div className=" flex-initial w-[40%]   flex ">
              <img
                src={item.images[0]}
                alt="lisitng"
                className="w-[200px] rounded-xl max-h-[150px] object-cover"
              />
              <div className="ml-5 text-gray-400 font-thin flex flex-col justify-center">
                <h3 className="text-lg font-semibold text-gray-600">
                  {item.title}
                </h3>
                <p className="my-2">{item.location}</p>
                <h3>{item.address}</h3>
                <h3 className="mt-2">₹{item.pricePeNight}</h3>
              </div>
            </div>
            <div title="verifying" className="flex items-center justify-center">
              {item.isVefied ? (
                <VerifiedUserIcon className="text-green-500" />
              ) : (
                <LoopIcon className=" animate-spin text-red-500 " />
              )}
            </div>

            <div
              onClick={() => removeEventListener(item._id)}
              className="px-5 py-2 bg-red-500 text-white rounded-xl cursor-pointer"
            >
              Remove
            </div>
          </div>
        ))}
      </div>
      {isUpdateOpen ? (
        <>
          {(document.body.style.overflow = "hidden")}
          <Update list={data} cancelFun={setIsUpdateOpen} />
        </>
      ) : (
        <>{(document.body.style.overflow = "")}</>
      )}
    </div>
  );
};

export default ManageLIst;

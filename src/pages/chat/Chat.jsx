import React, { useEffect, useState } from "react";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import io from "socket.io-client";
import { useSearchParams } from "react-router-dom";

import { useSelector } from "react-redux";
const socket = io.connect("http://localhost:3001");
const Chat = () => {
  const user = useSelector((store) => store.user.user);
  const [searchParms] = useSearchParams();
  console.log(searchParms.get("propertyId"));
  const [currentmsg, setCurrentMsg] = useState("");
  const [msgList, setMsgList] = useState([]);
  const sendMsg = async () => {
    if (currentmsg !== "") {
      const messageData = {
        room:
          searchParms.get("propertyId") !== null
            ? searchParms.get("propertyId")
            : user._id,
        author: user.firstName,
        message: currentmsg,
        time:
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
      };
      await socket.emit("mes_send", messageData);
      setMsgList((pre) => [...pre, messageData]);
    }
  };
  useEffect(() => {
    socket.emit(
      "join-room",
      searchParms.get("propertyId") !== null
        ? searchParms.get("propertyId")
        : user._id
    );
  }, [searchParms, user._id]);
  useEffect(() => {
    socket.on("recieve_msg", (data) => {
      setMsgList((pre) => [...pre, data]);
    });
  }, []);
  return (
    <div className="mx-[12%] sm:mx-5 flex justify-center my-[3%]">
      <div className="bg-white relative rounded-xl shadow-2xl w-2/4 sm:w-full h-[70vh]">
        <div className="border-b p-3 flex justify-between">
          <div className="flex">
            <div>
              <img
                src="data:image/jpeg;base64,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"
                alt="profile icons"
                className="w-[60px]"
              />
            </div>
            <div className="flex flex-col justify-center ml-1 ">
              <h3 className=" font-semibold">Dilshad</h3>
              <p className="text-sm">online</p>
            </div>
          </div>
          <div className=" flex items-center  opacity-50">
            <div className="cursor-pointer">
              <CallOutlinedIcon />
            </div>
            <div className="mx-3 cursor-pointer">
              <VideocamOutlinedIcon />
            </div>
            <div className="cursor-pointer">
              <MoreVertOutlinedIcon />
            </div>
          </div>
        </div>
        <div className=" h-[68%] overflow-scroll">
          {msgList.map((item, index) => (
            <div
              key={index}
              className="w-full flex justify-end overflow-scroll"
            >
              <div className="relative p-2 bg-red-500 z-20 min-w-[70px]  w-fit m-3 rounded-lg text-white max-w-[50%]">
                <div>{item.author}</div>
                <div> {item.message}</div>
                <div className="text-[10px] w-full text-end">{item.time}</div>

                <div
                  className="absolute w-0 h-0 top-0 -z-10 -left-[7px] 
border-l-[50px] border-l-transparent
border-t-[35px] border-t-red-500
border-r-[10px] border-r-transparent  "
                ></div>
              </div>
            </div>
          ))}
        </div>
        <div className="absolute border-t w-full flex p-3 bottom-0">
          <input
            type="text"
            className="border p-3 rounded-xl flex-1 "
            onChange={(e) => setCurrentMsg(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMsg()}
          />
          <div
            onClick={() => sendMsg()}
            className="p-3 cursor-pointer text-white bg-red-500 flex-initial rounded-2xl flex items-center justify-center text-lg ml-3 w-[15%]"
          >
            send
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;

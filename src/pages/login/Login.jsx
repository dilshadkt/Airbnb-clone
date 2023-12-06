import React, { useState } from "react";
import cancel from "../../asset/svg/cancel.svg";
import google from "../../asset/svg/google.svg";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setUser, setLogin } from "../../store/slice/User";
import { loginOpen } from "../../store/slice/Auth";

const Login = () => {
  const dispatch = useDispatch();

  const [userName, setUseName] = useState("");
  const [password, setPassword] = useState("");
  const SignUp = (e) => {
    e.preventDefault();
    axios
      .post("/user/signin", { userName, password })
      .then((res) => {
        dispatch(loginOpen(false));
        dispatch(setUser(res.data.user));
        dispatch(setLogin(true));
        localStorage.setItem("like", JSON.stringify(res.data.propertyId));
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user", JSON.stringify(res.data.user));
        window.location.reload();
      })
      .catch((err) => {
        notify(err.response.data);
      });
  };
  const notify = (err) =>
    toast.warning(err, {
      position: toast.POSITION.TOP_CENTER,
    });
  const goole = () => {
    window.open("http://localhost:8080/auth/google", "_self");
  };

  return (
    <>
      <div className="absolute top-0 bottom-0 left-0 right-0 bg-black opacity-50 z-30 flex items-center justify-center"></div>
      <div className="absolute top-0 left-0 bottom-0 right-0 m-auto bg-white z-40 w-[30%] h-[50%] rounded-2xl  overflow-hidden">
        <div className="flex-intial h-[13%]  flex items-center">
          <div className="px-5 flex justify-between w-full">
            <div className="flex-1">
              <div
                onClick={() => dispatch(loginOpen(false))}
                className=" w-9 h-9 hover:bg-gray-300 rounded-full flex items-center justify-center"
              >
                <img src={cancel} alt="cancel icon" className="w-[50%]" />
              </div>
            </div>

            <div className="flex-1 text-center text-xl font-semibold">
              SignUp
            </div>
            <div className="flex-1"></div>
          </div>
        </div>
        <div className="p-5">
          <form onSubmit={(e) => SignUp(e)}>
            <input
              onChange={(e) => setUseName(e.target.value)}
              type="text"
              required
              placeholder="username"
              className="w-full p-3 border rounded-lg"
            />
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              required
              placeholder="password"
              className="w-full p-3 border rounded-lg my-3    "
            />
            <ToastContainer />

            <button className="mt-5 w-full p-3 bg-rose-500 text-white font-semibold rounded-xl">
              Login
            </button>
          </form>
          <div onClick={goole} className="my-5 cursor-pointer">
            <div className="border p-3 w-full flex items-center rounded-xl">
              <div>
                <img src={google} alt="google icon" />
              </div>
              <div className=" w-full">
                <h3 className="text-center font">Continue with google</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

import React, { useEffect, useState } from "react";
import cancel from "../../asset/svg/cancel.svg";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "../../config/axiosConfig";
import { singInOpen } from "../../store/slice/Auth";
import { useGoogleLogin } from "@react-oauth/google";
import { setLogin, setUser } from "../../store/slice/User";
import { useDispatch } from "react-redux";
const SignUp = () => {
  const dispatch = useDispatch();
  const [googleUser, setGoogleUser] = useState([]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confrimPass, setConfirmPass] = useState("");

  /////////// LOGIN WITH GOOGLE 🚀🚀 //////
  const login = useGoogleLogin({
    onSuccess: (codeResponse) => setGoogleUser(codeResponse),
    onError: (error) => console.log("Login Failed:", error),
  });

  useEffect(() => {
    if (googleUser) {
      axios
        .get(
          `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${googleUser.access_token}`,
          {
            headers: {
              Authorization: `Bearer ${googleUser.access_token}`,
              Accept: "application/json",
            },
          }
        )
        .then((res) => {
          setFirstName(res.data.given_name);
          setLastName(res.data.family_name);
          setEmail(res.data.email);
        })
        .catch((err) => console.log(err));
    }
  }, [googleUser]);
  const RegisterUser = (e) => {
    e.preventDefault();
    if (confrimPass !== password) return notify("password is not match");

    axios
      .post("/user/login", { firstName, lastName, email, password })
      .then((res) => {
        dispatch(singInOpen(false));
        dispatch(setLogin(true));
        dispatch(setUser(res.data.user));
        localStorage.setItem("NewUser", JSON.stringify(res.data.user));
        localStorage.setItem("like", JSON.stringify(res.data.propertyId));
        localStorage.setItem("token", res.data.token);
      })
      .catch((err) => notify(err.response.data));
  };
  const notify = (err) =>
    toast.warning(err, {
      position: toast.POSITION.TOP_CENTER,
    });
  return (
    <>
      <div className="fixed top-0 bottom-0 left-0 right-0 bg-black opacity-50 z-30 flex items-center justify-center"></div>
      <div className="fixed top-0 left-0 bottom-0 right-0 m-auto bg-white z-40 w-[30%] sm:w-[90%] h-fit py-2 rounded-2xl  overflow-hidden">
        <div className="flex-intial h-[13%]  flex items-center">
          <div className="px-5 flex justify-between w-full">
            <div className="flex-1">
              <div
                onClick={() => dispatch(singInOpen(false))}
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
          <form onSubmit={(e) => RegisterUser(e)}>
            <input
              onChange={(e) => setFirstName(e.target.value)}
              value={firstName}
              type="text"
              required
              placeholder="first name"
              className="w-full p-3 border rounded-lg  my-2"
            />
            <input
              onChange={(e) => setLastName(e.target.value)}
              value={lastName}
              type="text"
              required
              placeholder="last name"
              className="w-full p-3 border rounded-lg  my-2"
            />
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              required
              placeholder="email"
              className="w-full p-3 border rounded-lg my-2   "
            />
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              required
              placeholder="password"
              className="w-full p-3 border rounded-lg my-2   "
            />
            <input
              onChange={(e) => setConfirmPass(e.target.value)}
              type="password"
              required
              placeholder="confirm password"
              className="w-full p-3 border rounded-lg my-2   "
            />
            <ToastContainer />
            <button className="mt-5 w-full p-3 bg-rose-500 text-white font-semibold rounded-xl">
              Login
            </button>
            <hr className="mt-[3%]" />
          </form>
          <div>
            <button
              onClick={() => login()}
              className="mt-5 w-full p-3 bg-blue-500 text-white font-semibold rounded-xl"
            >
              Login with email and password 🚀
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;

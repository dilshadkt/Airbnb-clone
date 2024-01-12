import React, { useEffect, useState } from "react";
import cancel from "../../asset/svg/cancel.svg";
import google from "../../asset/svg/google.svg";
import { useGoogleLogin } from "@react-oauth/google";
import "react-toastify/dist/ReactToastify.css";
import axios from "../../config/axiosConfig";
import { useDispatch } from "react-redux";
import { setUser, setLogin } from "../../store/slice/User";
import { loginOpen, forgetOpen, setToken } from "../../store/slice/Auth";
import { setLike } from "../../store/slice/InteractionSlice";
const Login = () => {
  const dispatch = useDispatch();
  const [googleUser, setGoogleUser] = useState([]);
  const [userName, setUseName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  useEffect(() => {
    //////  GOOGLE AUTH AUTHENTICATION 🚀🚀//////////
    const googleSignUp = (data) => {
      axios
        .post("/user/googleAuth", { data })
        .then((res) => {
          dispatch(loginOpen(false));
          dispatch(setUser(res.data.user));
          dispatch(setLogin(true));

          dispatch(setLike(JSON.stringify(res.data.propertyId)));
          console.log(res.data.propertyId);
          // dispatch(setToken(res.data.toke));
          dispatch(setToken(res.data.token));
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("user", JSON.stringify(res.data.user));

          // window.location.reload();
        })
        .catch((err) => console.log(err));
    };
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
          googleSignUp(res.data);
        })
        .catch((err) => console.log(err));
    }
  }, [googleUser, dispatch]);

  ////////// SIGN UP FUNCTION /////////////
  const SignUp = (e) => {
    e.preventDefault();
    axios
      .post("/user/signin", { userName, password })
      .then((res) => {
        window.location.reload();
        dispatch(loginOpen(false));
        dispatch(setUser(res.data.user));
        dispatch(setLogin(true));

        localStorage.setItem("like", JSON.stringify(res.data.propertyId));
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("NewUser", JSON.stringify(res.data.user));
        setError(null);
      })
      .catch((err) => {
        setError(err.response.data);
      });
  };

  ///////////// LOGIN FUNCTION ///////////
  const login = useGoogleLogin({
    onSuccess: (codeResponse) => setGoogleUser(codeResponse),
    onError: (error) => console.log("Login Failed:", error),
  });

  ////////// Forget Password ///////////
  const forgetPassword = () => {
    dispatch(loginOpen(false));
    dispatch(forgetOpen(true));
  };
  return (
    <>
      <div className="fixed top-0 bottom-0 left-0 right-0 bg-black opacity-50 z-50 flex items-center justify-center"></div>
      <div className="fixed top-0 left-0 bottom-0 right-0 m-auto bg-white z-[60] w-[30%] py-5 sm:w-[90%] h-fit rounded-2xl  overflow-hidden">
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
            {error && (
              <>
                <p className="text-red-500 text-sm mb-2"> {error}</p>
                <span
                  onClick={() => forgetPassword()}
                  className="text-sm font-semibold  cursor-pointer"
                >
                  forget Password ?
                </span>
              </>
            )}

            <button className="mt-5 w-full p-3 bg-rose-500 text-white font-semibold rounded-xl">
              Login
            </button>
          </form>

          <div onClick={() => login()} className="my-5 cursor-pointer">
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

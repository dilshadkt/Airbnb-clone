import React, { useContext, useState } from "react";
import { GoogleLogin, useGoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import Axios from "../../config/axiosConfig";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setLogin } from "../../store/slice/User";
import { formatEmail } from "../../utility";
import { AuthContext } from "../../context/AuthContext";
const LoginPage = () => {
  const [user, setUser] = useState(
    localStorage.getItem("user_auth_data")
      ? JSON.parse(localStorage.getItem("user_auth_data"))
      : null
  );
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { updateUser } = useContext(AuthContext);
  const handleSuccess = async (credentialResponse) => {
    try {
      const res = await Axios.get(
        `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${credentialResponse.access_token}`,
        {
          headers: {
            Authorization: `Bearer ${credentialResponse.access_token}`,
            Accept: "application/json",
          },
        }
      );
      localStorage.setItem("user_auth_data", JSON.stringify(res.data));

      const userData = {
        googleId: res.data.id,
        email: res.data.email,
        firstName: res.data.given_name,
        lastName: res.data.family_name,
        profilePicture: res.data.picture,
      };
      const response = await Axios.post("/api/auth/login", userData);
      navigate("/");
      localStorage.setItem("token", response.data.token);
      console.log(response.data.user);
      updateUser(response.data.user);
      dispatch(setLogin(true));
      setUser(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleError = (error) => {
    console.log("Login Failed", error);
  };
  const signIn = useGoogleLogin({
    onSuccess: handleSuccess,
    onError: handleError,
  });
  return (
    <section className=" h-screen flex flex-col">
      <header className="flex items-center justify-center font-semibold h-14 border-b ">
        {user ? `Welcome back ${user.given_name}` : ``}
        {" Log in or sign up"}
      </header>
      {user ? (
        <div className="h-full  flex items-start mt-[20%] justify-center">
          <div className="flex flex-col items-center justify-center w-full mx-7">
            <div className="w-32 h-32 bg-black  rounded-full flex items-center justify-center font-semibold text-white text-5xl">
              {user?.given_name[0]}
            </div>
            <div className="flex items-center mt-5  w-full justify-center">
              <img
                src="/assets/svg/email.svg"
                alt="email"
                className="w-5 opacity-60"
              />
              {formatEmail(user.email)}
            </div>
            <button
              onClick={signIn}
              className="border my-6 px-6 border-gray-600 rounded-lg py-3 flex items-center w-full"
            >
              <img src="/assets/svg/google.svg" alt="google" className="w-4" />
              <span className="mx-2 font-semibold text-sm w-full text-center  ">
                Continue with google
              </span>
            </button>
            <span className="text-sm w-full flex items-center">
              Not you?{" "}
              <Link className="font-semibold underline ml-2">
                Use another account
              </Link>
            </span>
            <button className="underline font-semibold text-sm mt-14">
              Need help ?
            </button>
          </div>
        </div>
      ) : (
        <div className="p-7 mt-3">
          <h4 className="text-xl font-semibold ">Welcome to Airbnb</h4>
          <div className="flex flex-col w-full h-28 rounded-lg mt-6 border border-gray-400 ">
            <div className="border-b border-gray-400 flex-1"></div>
            <div className="flex items-center flex-1">
              <input
                type="text"
                className="w-full h-14 px-4 placeholder-gray-500 font-semibold rounded-lg"
                placeholder="Phone number  "
              />
            </div>
          </div>
          <p className="text-xs font-medium text-gray-600 mt-3">
            We’ll call or text you to confirm your number. Standard message and
            data rates apply.{" "}
            <Link className="font-bold underline">Privacy Policy</Link>
          </p>
          <button className="w-full py-3 bg-rose-500 rounded-lg my-5 text-white font-semibold flex text-center justify-center">
            Continue
          </button>
          <div className="mt-8 relative">
            <hr />
            <span className="bg-white text-xs h-fit w-12 flex items-center justify-center absolute left-0 right-0 mx-auto top-0 bottom-0 my-auto">
              or
            </span>
          </div>
          <div className="mt-8">
            <button
              onClick={signIn}
              className="border my-6 px-6 border-gray-600 rounded-lg py-3 flex items-center w-full"
            >
              <img src="/assets/svg/google.svg" alt="google" className="w-4" />
              <span className="ml-11 font-semibold text-sm">
                Continue with google
              </span>
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default LoginPage;

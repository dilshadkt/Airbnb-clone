import { useGoogleLogin } from "@react-oauth/google";
import React, { useContext, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Axios from "../../config/axiosConfig";
import { AuthContext } from "../../context/AuthContext";
import { setLogin } from "../../store/slice/User";
import { formatEmail } from "../../utility";
import Register from "./Register";
import FinishUp from "./FinishUp";

const LoginPage = () => {
  const [user, setUser] = useState(
    localStorage.getItem("user_auth_data")
      ? JSON.parse(localStorage.getItem("user_auth_data"))
      : null
  );
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [mobileNumber, setMobileNumber] = useState("");
  const [getOtp, setGetOtp] = useState(false);
  const [isOtpvalid, setIsOtpValid] = useState(false);
  const [otp, setOtp] = useState("");
  const { updateUser } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);

  const handleError = (error) => {
    console.log("Login Failed", error);
  };
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
      updateUser(response.data.user);
      dispatch(setLogin(true));
      setUser(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  const signIn = useGoogleLogin({
    onSuccess: handleSuccess,
    onError: handleError,
  });

  //  VALIDATE THE OTP WHEN USER CLICK THE 6 CHARACTER OTP
  useEffect(() => {
    const verifyOtp = async () => {
      try {
        const res = await Axios.post("/api/otp/verify-otp", {
          phoneNumber: mobileNumber,
          code: otp,
        });
        setIsOtpValid(true);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    if (otp.length === 6) {
      setLoading(true);
      verifyOtp();
    }
  }, [otp]);
  // COLLECTION USERS DATA
  const handleUserData = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const inputs = Object.fromEntries(formData);
    try {
      const res = await Axios.post("/api/auth/login", {
        ...inputs,
        phone: mobileNumber,
      });
      console.log(res);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <section className=" h-screen flex flex-col ">
      <header className="flex items-center justify-center font-semibold h-14 border-b ">
        {user
          ? `Welcome back ${user.given_name}`
          : getOtp
          ? isOtpvalid
            ? `Finish sign up`
            : `Confirm your number`
          : ` Log in or sign up`}
      </header>
      {user ? (
        // SIGN UP USER
        <div className="h-full  flex items-start mt-[20%] justify-center">
          <div className="flex flex-col md:max-w-screen-sm md:mx-auto items-center justify-center w-full mx-7">
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
              <Link
                onClick={() => setUser(null)}
                className="font-semibold underline ml-2"
              >
                Use another account
              </Link>
            </span>
            <button className="underline font-semibold text-sm mt-14">
              Need help ?
            </button>
          </div>
        </div>
      ) : (
        <>
          {/* VERIFY OTP  */}
          {getOtp ? (
            <section className="h-full overflow-y-auto scrollbar-hidden">
              {isOtpvalid ? (
                <FinishUp handleUserData={handleUserData} />
              ) : (
                <>
                  <div className="p-7">
                    <h5 className="font-medium mt-3">{`Enter the code we've send via SMS to ${mobileNumber}:`}</h5>
                    <div
                      className={`${loading ? `opacity-30` : `opacity-100`}`}
                    >
                      <input
                        type="text"
                        onChange={(e) => setOtp(e.target.value)}
                        disabled={loading}
                        className="my-5 border-[1.6px] h-14  text-lg space-x-6 tracking-[0.9rem] rounded-lg border-gray-300 w-[185px]  px-6"
                        placeholder="------"
                      />
                    </div>{" "}
                  </div>
                  <hr />
                  <div className="flex items-center justify-between p-7">
                    <button className="font-semibold underline">
                      More options
                    </button>
                    <button className="py-3 font-semibold px-5 bg-black text-white rounded-lg">
                      {loading ? `loading...` : `Continue`}
                    </button>
                  </div>
                  <span className="w-full flex justify-center font-medium underline  text-sm">
                    Need help?
                  </span>
                </>
              )}
            </section>
          ) : (
            // REGISTER NEW USER
            <Register
              signIn={signIn}
              setGetOtp={setGetOtp}
              setMobileNumber={setMobileNumber}
            />
          )}
        </>
      )}
    </section>
  );
};

export default LoginPage;

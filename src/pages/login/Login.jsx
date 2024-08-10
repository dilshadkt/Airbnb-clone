import React, { useContext, useEffect, useState } from "react";
import cancel from "../../asset/svg/cancel.svg";
import google from "../../asset/svg/google.svg";
import { useGoogleLogin } from "@react-oauth/google";
import "react-toastify/dist/ReactToastify.css";
import axios from "../../config/axiosConfig";
import { useDispatch } from "react-redux";
import { setUser, setLogin } from "../../store/slice/User";
import { loginOpen, forgetOpen, setToken } from "../../store/slice/Auth";
import { setLike } from "../../store/slice/InteractionSlice";
import Modal from "../../components/shared/Modal";
import { AuthContext } from "../../context/AuthContext";
import InputField from "../../components/shared/inputField/InputField";
import PrimaryButton from "../../components/shared/primaryButton";
const Login = () => {
  const { updateUser } = useContext(AuthContext);
  const dispatch = useDispatch();
  const [googleUser, setGoogleUser] = useState(null);
  const [userName, setUseName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    //////  GOOGLE AUTH AUTHENTICATION 🚀🚀//////////
    const googleSignUp = (data) => {
      axios
        .post("/user/googleAuth", { data })
        .then((res) => {
          // dispatch(loginOpen(false));
          dispatch(setUser(res.data.user));
          updateUser(res.data.user);
          dispatch(setLogin(true));
          dispatch(setLike(JSON.stringify(res.data.propertyId)));
          dispatch(setToken(res.data.token));
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("user", JSON.stringify(res.data.user));
          document.getElementById("authForm")?.close();
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
        document.getElementById("authForm")?.close();
        dispatch(loginOpen(false));
        dispatch(setUser(res.data.user));
        updateUser(res.data.user);
        dispatch(setLogin(true));
        localStorage.setItem("like", JSON.stringify(res.data.propertyId));
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user", JSON.stringify(res.data.user));
        localStorage.setItem("NewUser", JSON.stringify(res.data.user));
        setError(null);
        window.location.reload();
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
    document.getElementById("authForm")?.close();
    dispatch(forgetOpen(true));
    setError(null);
  };
  return (
    <>
      <Modal modal_id={"authForm"}>
        <div className="py-5  h-fit rounded-2xl  overflow-hidden">
          <div className="flex-intial h-[13%]  flex items-center">
            <div className="px-5 flex justify-between w-full">
              <div className="flex-1">
                <div
                  onClick={() => document.getElementById("authForm")?.close()}
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
              <InputField
                required={true}
                placeholder={"Username"}
                onchange={setUseName}
              />
              <InputField
                type="password"
                required={true}
                placeholder={"Password"}
                onchange={setPassword}
                fieldStyle={"my-3"}
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
              <PrimaryButton title={"Login"} type="submit" />
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
      </Modal>
    </>
  );
};

export default Login;

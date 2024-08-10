import React, { useContext, useEffect, useState } from "react";
import cancel from "../../asset/svg/cancel.svg";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "../../config/axiosConfig";
import { setToken, singInOpen } from "../../store/slice/Auth";
import { useGoogleLogin } from "@react-oauth/google";
import { setLogin, setUser } from "../../store/slice/User";
import { useDispatch } from "react-redux";
import Modal from "../../components/shared/Modal";
import InputField from "../../components/shared/inputField/InputField";
import PrimaryButton from "../../components/shared/primaryButton";
import { AuthContext } from "../../context/AuthContext";
import { setLike } from "../../store/slice/InteractionSlice";
const SignUp = () => {
  const dispatch = useDispatch();
  const { updateUser } = useContext(AuthContext);
  const [googleUser, setGoogleUser] = useState([]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confrimPass, setConfirmPass] = useState("");
  const [error, setError] = useState(null);

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
    setError(null);
    if (confrimPass !== password) return setError("password is not match");

    axios
      .post("/user/login", {
        firstName,
        lastName,
        email,
        password,
        socialType: "",
      })
      .then((res) => {
        console.log(res);
        dispatch(singInOpen(false));
        updateUser(res.data.user);
        dispatch(setLogin(true));
        dispatch(setUser(res.data.user));
        dispatch(setToken(res.data.token));
        // localStorage.setItem("NewUser", JSON.stringify(res.data.user));
        localStorage.setItem("user", JSON.stringify(res.data.user));
        // localStorage.setItem("like", JSON.stringify(res.data.propertyId));
        localStorage.setItem("token", res.data.token);
        // document.getElementById("authForm")?.close();
      })
      .catch((err) => {
        setError(err.response.data);
      });
  };

  return (
    <>
      <Modal modal_id={"signup"}>
        <div className="h-fit py-2 rounded-2xl  overflow-hidden">
          <div className="flex-intial h-[13%]  flex items-center">
            <div className="px-5 flex justify-between w-full">
              <div className="flex-1">
                <div
                  onClick={() => document.getElementById("signup").close()}
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
              <div className="flex flex-col gap-2">
                <InputField
                  required={true}
                  placeholder={"first name"}
                  onchange={setFirstName}
                />

                <InputField
                  required={true}
                  placeholder={"last name"}
                  onchange={setLastName}
                />

                <InputField
                  type="email"
                  required={true}
                  placeholder={"email"}
                  onchange={setEmail}
                />

                <InputField
                  type="password"
                  required={true}
                  placeholder={"password"}
                  onchange={setPassword}
                />

                <InputField
                  type="password"
                  required={true}
                  placeholder={"confirm password"}
                  onchange={setConfirmPass}
                />
                {error && <p className="text-xs text-red-500 mt-2">{error}</p>}
              </div>

              <ToastContainer />
              <PrimaryButton
                title={"Login"}
                type="submit"
                buttonStyle={"mt-7"}
              />

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
      </Modal>
    </>
  );
};

export default SignUp;

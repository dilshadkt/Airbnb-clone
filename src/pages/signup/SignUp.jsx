import React, { useContext, useState } from "react";
import cancel from "../../asset/svg/cancel.svg";
import MyContext from "../../components/contex/Mycontex";
import axios from "axios";

const SignUp = () => {
  const { setSignOpen, setIsLogin } = useContext(MyContext);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confrimPass, setConfirmPass] = useState("");
  const RegisterUser = (e) => {
    e.preventDefault();
    axios
      .post("/user/login", { firstName, lastName, email, password })
      .then((res) => {
        setSignOpen(false);
        setIsLogin(true);
        localStorage.setItem("user", res.data.firstName);
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <div className="absolute top-0 bottom-0 left-0 right-0 bg-black opacity-50 z-30 flex items-center justify-center"></div>
      <div className="absolute top-0 left-0 bottom-0 right-0 m-auto bg-white z-40 w-[30%] h-[70%] rounded-2xl  overflow-hidden">
        <div className="flex-intial h-[13%]  flex items-center">
          <div className="px-5 flex justify-between w-full">
            <div className="flex-1">
              <div
                onClick={() => setSignOpen(false)}
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
              type="text"
              placeholder="first name"
              className="w-full p-3 border rounded-lg  my-2"
            />
            <input
              onChange={(e) => setLastName(e.target.value)}
              type="text"
              placeholder="last name"
              className="w-full p-3 border rounded-lg  my-2"
            />
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="email"
              className="w-full p-3 border rounded-lg my-2   "
            />
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="password"
              className="w-full p-3 border rounded-lg my-2   "
            />
            <input
              onChange={(e) => setConfirmPass(e.target.value)}
              type="password"
              placeholder="confirm password"
              className="w-full p-3 border rounded-lg my-2   "
            />
            <button className="mt-5 w-full p-3 bg-rose-500 text-white font-semibold rounded-xl">
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;

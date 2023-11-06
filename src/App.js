import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomeLayout from "./layouts/Home";
import Home from "./pages/Home/Home";
import Rooms from "./pages/Rooms/Rooms";
import Payment from "./pages/payment/Payment";
import Hoisting from "./pages/Hoisting/Hoisting";
import Account from "./pages/Account/Account";
import MyContext from "./components/contex/Mycontex";
import { useState } from "react";
import WishList from "./pages/whishList/WishList";
import { data } from "./asset/card/data";
import Personal from "./pages/Account/personal-info/Personal";
import Login from "./pages/Account/Login/Login";
import AccountPayment from "./pages/Account/payment/Payment";
import Profile from "./pages/profile/Profile";

function App() {
  const [datas, setDatas] = useState(data);
  const [whilList, setWhishList] = useState("");
  const [isOpenAmenities, setIsOpenAmenities] = useState(false);
  const Pssdata = {
    datas,
    setDatas,
    isOpenAmenities,
    setIsOpenAmenities,
    whilList,
    setWhishList,
  };
  return (
    <>
      <MyContext.Provider value={Pssdata}>
        <Routes>
          <Route path="/" element={<HomeLayout />}>
            <Route index element={<Home />} />
            <Route path="/rooms" element={<Rooms />} />
            <Route path="/hoisting" element={<Hoisting />} />
            <Route path="/account-settings" element={<Account />} />
            <Route path="/whishlist" element={<WishList />} />
            <Route path="/account-settings/personal" element={<Personal />} />
            <Route path="/account-settings/Login" element={<Login />} />
            <Route path="/account-settings/profile" element={<Profile />} />
            <Route
              path="/account-settings/Payment"
              element={<AccountPayment />}
            />
          </Route>
          <Route path="/book/stay" element={<Payment />} />
        </Routes>
      </MyContext.Provider>
    </>
  );
}

export default App;

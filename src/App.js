import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomeLayout from "./layouts/Home";
import Home from "./pages/users/Home/Home";
import Rooms from "./pages/users/Rooms/Rooms";
import Payment from "./pages/users/payment/Payment";
import Hoisting from "./pages/users/Hoisting/Hoisting";
import Account from "./pages/Account/Account";
import MyContext from "./components/contex/Mycontex";
import { useEffect, useState } from "react";
import WishList from "./pages/users/whishList/WishList";
import Personal from "./pages/Account/personal-info/Personal";
import Login from "./pages/Account/Login/Login";
import AccountPayment from "./pages/Account/payment/Payment";
import Profile from "./pages/users/profile/Profile";
import BecomeHost from "./pages/host/BecomeHost";
import HostLayout from "./layouts/HostLayout";
import Structure from "./pages/host/structure/Structure";
import PrivacyType from "./pages/host/privacy-type/PrivacyType";
import Location from "./pages/host/location/Location";
import FloorPlan from "./pages/host/floor-plan/FloorPlan";
import axios from "axios";
import StandOut from "./pages/host/stand-out/StandOut";
import Amenities from "./pages/host/amenities/Amenities";
import Photos from "./pages/host/photos/Photos";
import Title from "./pages/host/title/Title";
import Description from "./pages/host/description/Description";
import FinishUp from "./pages/host/finish-setup/FinishUp";
import PricePerNight from "./pages/host/price/PricePerNight";

axios.defaults.baseURL = "http://localhost:8080";

function App() {
  /////////// fetching data //////////////

  useEffect(() => {
    const userdata = JSON.parse(localStorage.getItem("user"));
    const liked = JSON.parse(localStorage.getItem("like"));
    liked && setIsLliked(liked);
    userdata && setUser(userdata);

    axios
      .get("/listings")
      .then((data) => setDatas(data.data))
      .catch((err) => console.log(err));
  }, []);

  const [search, setsearch] = useState("");
  const [progress, setProgress] = useState(0);
  const [datas, setDatas] = useState([]);
  const [whilList, setWhishList] = useState("");
  const [isOpenAmenities, setIsOpenAmenities] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignOpen, setSignOpen] = useState(false);
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [totalDays, setTotalDays] = useState(1);
  const [guest, setGuest] = useState("");
  const [isLiked, setIsLliked] = useState([]);
  const [currentImage, setCurrentImage] = useState("");
  const [isLogin, setIsLogin] = useState(
    localStorage.getItem("token") ? true : false
  );
  const [user, setUser] = useState("");
  const [formData, setFormData] = useState({
    hostid: "",
    propertyType: "",
    houseType: "",
    place: {
      house: "",
      Area: "",
      Street: "",
      landmark: "",
      city: "",
      pincode: "",
      Province: "",
    },
    aboutPlace: {
      guests: "",
      bedrooms: "",
      beds: "",
      bathrooms: "",
    },
    propertyOffer: [],
    image: [],
    title: "",
    description: "",
    pricePeNight: "",
    discount: "",
    security: [],
  });
  const Pssdata = {
    isSignOpen,
    setSignOpen,
    datas,
    setDatas,
    isOpenAmenities,
    setIsOpenAmenities,
    whilList,
    setWhishList,
    progress,
    setProgress,
    search,
    setsearch,
    isMenuOpen,
    setIsMenuOpen,
    isLoginOpen,
    setIsLoginOpen,
    isLogin,
    setIsLogin,
    formData,
    setFormData,
    user,
    setUser,
    checkIn,
    setCheckIn,
    checkOut,
    setCheckOut,
    totalDays,
    setTotalDays,
    guest,
    setGuest,
    currentImage,
    setCurrentImage,
    isLiked,
    setIsLliked,
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
            <Route path="/book/stay" element={<Payment />} />
          </Route>
          <Route path="/become-a-host" element={<HostLayout />}>
            <Route index element={<BecomeHost />} />
            <Route path="structure" element={<Structure />} />
            <Route path="privacy-type" element={<PrivacyType />} />
            <Route path="location" element={<Location />} />
            <Route path="floor-plan" element={<FloorPlan />} />
            <Route path="stand-out" element={<StandOut />} />
            <Route path="amenities" element={<Amenities />} />
            <Route path="photos" element={<Photos />} />
            <Route path="title" element={<Title />} />
            <Route path="description" element={<Description />} />
            <Route path="price" element={<PricePerNight />} />
            <Route path="finish-setup" element={<FinishUp />} />
          </Route>
        </Routes>
      </MyContext.Provider>
    </>
  );
}

export default App;

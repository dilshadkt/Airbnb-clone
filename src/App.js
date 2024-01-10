import { Route, Routes } from "react-router-dom";
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
import axios from "./config/axiosConfig";
import StandOut from "./pages/host/stand-out/StandOut";
import Amenities from "./pages/host/amenities/Amenities";
import Photos from "./pages/host/photos/Photos";
import Title from "./pages/host/title/Title";
import Description from "./pages/host/description/Description";
import FinishUp from "./pages/host/finish-setup/FinishUp";
import PricePerNight from "./pages/host/price/PricePerNight";
import AdminLayout from "./layouts/Admin";
import Users from "./pages/admin/users/Users";
import Properties from "./pages/admin/properties/Properties";
import WhishList from "./pages/admin/Whishlist/WhishList";
import NewProperty from "./pages/admin/newProperty/NewProperty";
import Listing from "./pages/admin/listing/Listing";
import ManageLIst from "./pages/manage-list/ManageLIst";
import Trips from "./pages/users/trips/Trips";
// import Chat from "./pages/chat/Chat";
import { useDispatch, useSelector } from "react-redux";
import { setProperty } from "./store/slice/PropertySlice";
import { setUser } from "./store/slice/User";
import AdminHome from "./pages/admin/Home/AdminHome";

// axios.defaults.baseURL = "https://airbnb-api-7y1p.onrender.com";

function App() {
  const dispatch = useDispatch();
  /////////// fetching data //////////////

  const user = useSelector((store) => store.user.user);
  const isLogin = useSelector((store) => store.user.isLogin);

  useEffect(() => {
    const userdata = JSON.parse(localStorage.getItem("NewUser"));
    const liked = JSON.parse(localStorage.getItem("like"));
    liked && setIsLliked(liked);
    userdata && dispatch(setUser(userdata));
    isLogin &&
      axios
        .get(`/book/stay`)
        .then((res) => {
          setNotification(res.data.length);
        })
        .catch((err) => console.log(err));

    axios
      .get("/listings")
      .then((data) => {
        dispatch(setProperty(data.data));
      })
      .catch((err) => console.log(err));
  }, [dispatch, user._id, isLogin]);

  const [whilList, setWhishList] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(
    new Date(new Date().getTime() + 24 * 60 * 60 * 1000)
  );
  const [totalDays, setTotalDays] = useState(1);
  const [guest, setGuest] = useState(1);
  const [isLiked, setIsLliked] = useState([]);
  const [notification, setNotification] = useState(0);
  const [isUserBoxOpen, setIsUserBox] = useState(true);

  const Passdata = {
    whilList,
    setWhishList,
    isMenuOpen,
    setIsMenuOpen,
    startDate,
    setStartDate,
    endDate,
    setEndDate,
    totalDays,
    setTotalDays,
    guest,
    setGuest,
    isLiked,
    setIsLliked,
    notification,
    setNotification,
    isUserBoxOpen,
    setIsUserBox,
  };
  return (
    <>
      <MyContext.Provider value={Passdata}>
        <Routes>
          <Route path="/" element={<HomeLayout />}>
            <Route index element={<Home />} />
            <Route path="/rooms" element={<Rooms />} />
            <Route path="/hoisting" element={<Hoisting />} />
            <Route path="/Manage" element={<ManageLIst />} />
            <Route path="/trips" element={<Trips />} />
            {/* <Route path="/chats" element={<Chat />} /> */}
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
          <Route path="/admin" element={<AdminLayout />}>
            <Route path="users" element={<Users />} />
            <Route path="properties" element={<Properties />} />
            <Route path="home" element={<AdminHome />} />
            <Route path="whishlist" element={<WhishList />} />
            <Route path="newProperty" element={<NewProperty />} />
            <Route path="newProperty/listing" element={<Listing />} />
            <Route path="properties/listing" element={<Listing />} />
          </Route>
        </Routes>
      </MyContext.Provider>
    </>
  );
}

export default App;

//TODO: impliment redux store for localstorage

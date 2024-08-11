import { useContext, useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MyContext from "./components/contex/Mycontex";
import axios from "./config/axiosConfig";
import HostLayout from "./layouts/HostLayout";
import Account from "./pages/Account/Account";
import AccountPayment from "./pages/Account/payment/Payment";
import Personal from "./pages/Account/personal-info/Personal";
import BecomeHost from "./pages/host/BecomeHost";
import ManageLIst from "./pages/manage-list/ManageLIst";
import Hoisting from "./pages/users/Hoisting/Hoisting";
import Home from "./pages/users/Home/Home";
import Rooms from "./pages/users/Rooms/Rooms";
import Payment from "./pages/users/payment/Payment";
import Profile from "./pages/users/profile/Profile";
import Trips from "./pages/users/trips/Trips";
import WishList from "./pages/users/whishList/WishList";
// import Chat from "./pages/chat/Chat";
import { useDispatch, useSelector } from "react-redux";
import { AuthHomeLayout, HomeLayout } from "./layouts/Home";
import LoginPage from "./pages/login/LoginPage";
import { setProperty } from "./store/slice/PropertySlice";
import { setUser } from "./store/slice/User";
import Structure from "./pages/host/structure/Structure";
import PrivacyType from "./pages/host/privacy-type/PrivacyType";
import Location from "./pages/host/location/Location";
import FloorPlan from "./pages/host/floor-plan/FloorPlan";
import StandOut from "./pages/host/stand-out/StandOut";
import Amenities from "./pages/host/amenities/Amenities";
import Photos from "./pages/host/photos/Photos";
import Title from "./pages/host/title/Title";
import Description from "./pages/host/description/Description";
import PricePerNight from "./pages/host/price/PricePerNight";
import FinishUp from "./pages/host/finish-setup/FinishUp";
import Login from "./pages/Account/Login/Login";
import { ListContext } from "./context/LIstContext";

function App() {
  const dispatch = useDispatch();
  /////////// fetching data //////////////

  const user = useSelector((store) => store.user.user);
  const isLogin = useSelector((store) => store.user.isLogin);
  const { setList } = useContext(ListContext);
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
        dispatch((setList(data.data), setProperty(data.data)));
      })
      .catch((err) => console.log(err));
  }, [dispatch, user._id, isLogin]);

  // LOCOMOTIVE IS A LTBRARY FOR SMOOTHINING SCROLL
  useEffect(() => {}, [
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })(),
  ]);

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
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/rooms",
          element: <Rooms />,
        },
        {
          path: "/login",
          element: <LoginPage />,
        },
      ],
    },
    {
      path: "/",
      element: <AuthHomeLayout />,
      children: [
        {
          path: "/trips",
          element: <Trips />,
        },
        {
          path: "/account-settings",
          element: <Account />,
        },
        {
          path: "/account-settings/Login",
          element: <Login />,
        },
        {
          path: "/account-settings/profile",
          element: <Profile />,
        },
        {
          path: "/account-settings/personal",
          element: <Personal />,
        },
        {
          path: "/account-settings/Payment",
          element: <AccountPayment />,
        },
        {
          path: "/whishlist",
          element: <WishList />,
        },
        {
          path: "/Manage",
          element: <ManageLIst />,
        },
        {
          path: "/hoisting",
          element: <Hoisting />,
        },
        {
          path: "/book/stay",
          element: <Payment />,
        },
      ],
    },
    {
      path: "/become-a-host",
      element: <HostLayout />,
      children: [
        {
          path: "",
          element: <BecomeHost />,
        },
        {
          path: "structure",
          element: <Structure />,
        },
        {
          path: "privacy-type",
          element: <PrivacyType />,
        },
        {
          path: "location",
          element: <Location />,
        },
        {
          path: "floor-plan",
          element: <FloorPlan />,
        },
        {
          path: "stand-out",
          element: <StandOut />,
        },
        {
          path: "amenities",
          element: <Amenities />,
        },
        {
          path: "photos",
          element: <Photos />,
        },
        {
          path: "title",
          element: <Title />,
        },
        {
          path: "description",
          element: <Description />,
        },
        {
          path: "price",
          element: <PricePerNight />,
        },
        {
          path: "finish-setup",
          element: <FinishUp />,
        },
      ],
    },
  ]);
  return (
    <>
      <MyContext.Provider value={Passdata}>
        <RouterProvider router={router} />
      </MyContext.Provider>
      {/* <MyContext.Provider value={Passdata}>
        <Routes>
          <Route path="/" element={<HomeLayout />}>
            <Route index element={<Home />} />
            <Route path="/rooms" element={<Rooms />} />
            <Route path="/hoisting" element={<Hoisting />} />
            <Route path="/Manage" element={<ManageLIst />} />
            <Route path="/trips" element={<Trips />} />
            <Route path="/login" element={<LoginPage />} />
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
      </MyContext.Provider> */}
    </>
  );
}

export default App;

//TODO: impliment redux store for localstorage

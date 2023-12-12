import React, { useEffect, useState } from "react";
import axios from "axios";
import cancel from "../../../asset/svg/cancel.svg";
import { useNavigate } from "react-router-dom";
import ListShimmer from "../../../components/shimmer/list/ListShimmer";
import { useSelector } from "react-redux";
const Trips = () => {
  const [trips, setTrips] = useState([]);
  const user = useSelector((store) => store.user.user);
  const [qrOpen, SetQrOpen] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(`/book/trip/${user._id}`)
      .then((res) => {
        setTrips(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, [user._id]);
  return trips.length === 0 ? (
    <ListShimmer />
  ) : (
    <div onClick={() => SetQrOpen(!qrOpen)} className="mx-[10%] my-[2%] ">
      <div>
        <h2 className="text-3xl font-semibold ">Trips </h2>
      </div>
      <div>
        <div className="my-6">
          {trips.map((item, index) => (
            <div
              key={index}
              className="p-5 border flex my-4 rounded-xl  items-center justify-between"
            >
              <div
                onClick={() =>
                  navigate(
                    `/rooms?id=${item.listingId._id}&booked=true&tripId=${item._id}`
                  )
                }
                className=" flex-initial w-[40%] cursor-pointer   flex "
              >
                <img
                  src={item?.listingId?.images?.[0]}
                  alt="lisitng"
                  className="w-[200px] rounded-xl max-h-[150px] object-cover"
                />
                <div className="ml-5 text-gray-400 font-thin flex flex-col justify-center sm:hidden">
                  <h3 className="text-lg font-semibold text-gray-600">
                    {item?.listingId?.title}
                  </h3>
                  <p className="my-2">{item?.listingId?.location}</p>
                  <h3>{item.address}</h3>
                  <h3 className="mt-2">₹{item?.listingId?.pricePeNight}</h3>
                </div>
              </div>
              <div>
                <h5 className="text-sm text-gray-400">{item?.checkInDate}</h5>
              </div>
              <div>
                <h5 className="text-sm text-gray-400">{item.checkoutDate}</h5>
              </div>
              <div
                onClick={() => SetQrOpen(!qrOpen)}
                className="cursor-pointer sm:w-[60px]"
              >
                <img
                  src="https://media.istockphoto.com/id/828088276/vector/qr-code-illustration.jpg?s=612x612&w=0&k=20&c=FnA7agr57XpFi081ZT5sEmxhLytMBlK4vzdQxt8A70M="
                  alt="qr-code"
                  className="max-h-[150px]"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div
        className={`fixed ${
          !qrOpen && `hidden`
        }  p-4 top-0 bottom-0 left-0 right-0 m-auto border shadow-2xl bg-white w-[30%]  h-fit`}
      >
        <div>
          <div
            onClick={() => SetQrOpen(!qrOpen)}
            className="w-8 h-8 rounded-full hover:bg-gray-300 p-2"
          >
            <img src={cancel} alt="cancel" />
          </div>
        </div>
        <div className="pt-2">
          <img
            src="https://media.istockphoto.com/id/828088276/vector/qr-code-illustration.jpg?s=612x612&w=0&k=20&c=FnA7agr57XpFi081ZT5sEmxhLytMBlK4vzdQxt8A70M="
            alt="qrcode"
            className="w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Trips;

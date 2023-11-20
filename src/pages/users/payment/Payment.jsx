import React, { useContext } from "react";
// import Navbar from "../../../components/Navbar";
import left from "../../../asset/svg/leftArrow.svg";
// import FooterLabel from "../../../components/FooterLabel";
import PriceSlip from "../../../components/PriceSlip";
import MyContext from "../../../components/contex/Mycontex";
import axios from "axios";
import { useSearchParams } from "react-router-dom";

const Payment = () => {
  const [queryParam] = useSearchParams();
  const { checkIn, guest, user } = useContext(MyContext);

  const reservation = () => {
    const data = {
      guestId: user._id,
      listingId: queryParam.get("propertyId"),
      checkInDate: queryParam.get("checkin"),
      checkoutDate: queryParam.get("chekout"),
      totalPrice: queryParam.get("totalPrice"),
      bookingDate: new Date().toJSON().slice(0, 10),
    };
    console.log(data);
    axios
      .post(`/book/stay/${user._id}`, data)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  return (
    <>
      {/* <Navbar /> */}
      <hr />
      <div className="mx-48 my-8 flex">
        <div className="flex-1  flex flex-col ">
          <div className="flex items-center">
            <img src={left} alt="left arrow" />
            <h1 className="text-3xl ml-4">Confirm and pay</h1>
          </div>
          <div className="p-8">
            <h3 className="text-xl font-medium">Your trip</h3>
            <div className="flex  justify-between  my-5 items-start">
              <div className="flex flex-col  ">
                <h4 className="font-medium">Dates</h4>
                <span className="text-sm">{checkIn ? checkIn : "date"}</span>
              </div>
              <div className="flex items-start    ">
                <span className="font-medium underline cursor-pointer">
                  Edits
                </span>
              </div>
            </div>
            <div className="flex  justify-between  my-5 items-start">
              <div className="flex flex-col  ">
                <h4 className="font-medium">Guests</h4>
                <span className="text-sm">{guest} guest</span>
              </div>
              <div className="flex items-start    ">
                <span className="font-medium underline cursor-pointer">
                  Edits
                </span>
              </div>
            </div>
            <hr className="my-7" />
            <h3 className="text-xl font-medium mb-5">Pay with</h3>
            <select className="border px-5 py-4 rounded-lg my-1 w-full">
              <option>upi</option>
              <option>upi</option>
              <option>upi</option>
            </select>
            <input
              type="text"
              className="border px-5 py-4 rounded-lg  w-full my-1"
              placeholder="Virtual payment address"
            />
            <hr className="my-8" />
            <h3 className="text-xl font-medium ">Required for your trip</h3>
            <div className="py-6">
              <div className="flex  mb-5">
                <div className="flex-1 ">
                  <h3 className="font-medium">
                    Permanent Account Number (PAN)
                  </h3>
                  <span className="text-sm">
                    A valid PAN is required per Reserve Bank of India (RBI)
                    regulations.
                  </span>
                </div>
                <div className="flex-initial w-[15%]  flex justify-end">
                  <button className="border rounded-lg px-4 py-1 w-fit h-fit">
                    ADD
                  </button>
                </div>
              </div>
              <div className="flex  my-3">
                <div className="flex-1 ">
                  <h3 className="font-medium">Phone number</h3>
                  <span className="text-sm">
                    Add and confirm your phone number to get trip updates.
                  </span>
                </div>
                <div className="flex-initial w-[15%]  flex justify-end">
                  <button className="border rounded-lg px-4 py-1 w-fit h-fit">
                    ADD
                  </button>
                </div>
              </div>
            </div>
            <hr />
            <div className="py-6">
              <h3 className="text-xl font-medium mb-2 ">Cancellation policy</h3>
              <h5 className="text-sm">
                This reservation is non-refundable .{" "}
                <span className="font-medium underline">Learn more</span>
              </h5>
            </div>
            <hr />
            <div className="py-6">
              <h3 className="text-xl font-medium mb-2 ">Ground rules</h3>
              <h6 className="text-sm">
                We ask every guest to remember a few simple things about what
                makes a great guest.
              </h6>

              <ul className="mt-3 ml-4 list-disc">
                <li className="text-sm my-2">Follow the house rules</li>
                <li className="text-sm my-2">
                  Treat your Host’s home like your own
                </li>
              </ul>
            </div>
            <hr />
            <div className="py-6">
              <p className="text-xs mb-5">
                By selecting the button below, I agree to the Host's House
                Rules, Ground rules for guests, Airbnb's Rebooking and Refund
                Policy and that Airbnb can charge my payment method if I’m
                responsible for damage.
              </p>
              <div
                onClick={reservation}
                className="bg-rose-500 py-3 cursor-pointer px-5 w-fit rounded-xl  font-medium text-white"
              >
                Confirm and pay
              </div>
            </div>
          </div>
        </div>
        <div className="flex-initial w-[40%] b flex justify-center ">
          <PriceSlip />
        </div>
      </div>
      {/* <FooterLabel /> */}
    </>
  );
};

export default Payment;

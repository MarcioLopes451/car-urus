import { useParams } from "react-router-dom";
import { useState } from "react";
import { carData } from "../../../data/carData";
import CarNav from "../Navbar/CarNav";
import Manual from "../../../images/9081001_manual_gearbox_icon.png";
import Automatic from "../../../images/automatic-transmission.png";
import Seats from "../../../images/9035117_person_icon.png";
import LargeBag from "../../../images/6811947_bag_baggage_journey_luggage_suitcase_icon.png";
import SmallBag from "../../../images/6811939_bag_baggage_duffle bag_journey_luggage_icon.png";
import Miles from "../../../images/medium.png";
import Tick from "../../../images/8541612_check_tick_mark_icon.png";
import Keychain from "../../../images/37052_keychain_password_access_car keys_keys_icon.png";
import TotalPrice from "../TotalPrice/TotalPrice";

export default function SelectedCar() {
  const [state, setState] = useState(false);

  const openReviews = () => {
    setState(!state);
  };

  const { id } = useParams();
  const productData = carData.find((data) => data.id === parseInt(id, 10));
  if (!productData) throw new Error(`404: product not found: ${id}`);
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const currentDate = new Date();
  const dayOfWeek = daysOfWeek[currentDate.getDay()];
  const dayOfMonth = currentDate.getDate();
  const month = months[currentDate.getMonth()];
  const currentTime = currentDate.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <>
      <CarNav />
      <div className="mt-5 font-Inria-Serif">
        <div className="mx-[30px] border-[#D2B48C] border-[6px] rounded-lg flex justify-between items-center p-3">
          <div>
            <h3>London City Airport</h3>
            <div className="flex gap-2">
              <div className="flex gap-2">
                <p>{` ${dayOfMonth} ${month}`}</p>
                <p>at {currentTime} </p>
              </div>
              <div className="flex gap-2">
                <p>{`${dayOfMonth} ${month}`}</p>
                <p>at {currentTime}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-5 mx-[30px]">
          <h2 className="font-bold text-2xl">Your Car deal</h2>
          <div className="flex justify-between items-start flex-col">
            <div>
              <img src={productData.images} className="w-[350px] h-[250px]" />
            </div>
            <div className="bg-[#ebebeb] w-full rounded -mt-2 p-2">
              <h3 className="font-semibold text-xl">{productData.carName}</h3>
              <div className="grid grid-rows-4 grid-cols-2 gap-2">
                <p className="flex gap-2">
                  {" "}
                  {productData.details.gearbox === "Automatic" ? (
                    <img
                      src={Automatic}
                      alt="automatic"
                      className="w-[30px] h-[30px]"
                    />
                  ) : (
                    <img
                      src={Manual}
                      alt="Manual"
                      className="w-[30px] h-[30px]"
                    />
                  )}
                  {productData.details.gearbox}
                </p>
                <p className="flex gap-2">
                  {" "}
                  <img
                    src={Seats}
                    alt="automatic"
                    className="w-[30px] h-[30px]"
                  />
                  {productData.details.seats} Seats
                </p>
                <p className="flex gap-2">
                  {" "}
                  <img
                    src={LargeBag}
                    alt="automatic"
                    className="w-[30px] h-[30px]"
                  />
                  1 Large Bag
                </p>
                <p className="flex gap-2">
                  {" "}
                  <img
                    src={SmallBag}
                    alt="automatic"
                    className="w-[30px] h-[30px]"
                  />
                  1 Small Bag
                </p>
                <p className="flex gap-2">
                  {" "}
                  <img
                    src={Miles}
                    alt="automatic"
                    className="w-[30px] h-[30px]"
                  />
                  Unlimited Miles
                </p>
              </div>
              <div>
                <p className="opacity-70">Price for 1 day</p>
                <p className="font-bold">£{productData.price.perDay}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-5 mx-[30px]">
          <h2 className="font-semibold text-2xl">Perks:</h2>
          <div className="flex justify-between">
            <div className="flex flex-col items-start gap-2">
              {productData.extraDetails.perks.map((perk) => (
                <div key={perk} className="flex gap-2 items-center">
                  <img src={Tick} className="w-[20px] h-[20px]" />
                  <p>{perk}</p>
                </div>
              ))}
            </div>
            <img src={Keychain} className="w-[150px] h-[150px]" />
          </div>
        </div>
        <TotalPrice />
        <div className="mt-5 mx-[30px]">
          <button className="bg-[#0370EF] w-full h-12 rounded-lg text-white font-bold">
            Continue to book
          </button>
        </div>
        <div className="mt-5 mx-[30px]">
          <button
            className="bg-[#0370EF] w-40 h-10 rounded-lg text-white font-bold"
            onClick={openReviews}
          >
            Open Reviews
          </button>
          {state && (
            <div className="flex flex-col items-start gap-3 mt-5">
              {productData.extraDetails.reviews.map((review) => (
                <div key={review}>
                  <p className="font-semibold">{review.user}:</p>
                  <p>{review.comment}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

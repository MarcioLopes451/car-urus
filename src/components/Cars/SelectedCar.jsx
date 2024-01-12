import { useParams } from "react-router-dom";
import { carData } from "../../../data/carData";
import CarNav from "../Navbar/CarNav";
import Manual from "../../../images/9081001_manual_gearbox_icon.png";
import Automatic from "../../../images/automatic-transmission.png";
import Seats from "../../../images/9035117_person_icon.png";
import LargeBag from "../../../images/6811947_bag_baggage_journey_luggage_suitcase_icon.png";
import SmallBag from "../../../images/6811939_bag_baggage_duffle bag_journey_luggage_icon.png";
import Miles from "../../../images/medium.png";

export default function SelectedCar() {
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
            <div className="bg-[#C9C9C9] rounded">
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
      </div>
    </>
  );
}

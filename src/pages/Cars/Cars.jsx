import CarNav from "../../components/Navbar/CarNav";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Manual from "../../../images/9081001_manual_gearbox_icon.png";
import Automatic from "../../../images/automatic-transmission.png";
import Seats from "../../../images/9035117_person_icon.png";
import LargeBag from "../../../images/6811947_bag_baggage_journey_luggage_suitcase_icon.png";
import SmallBag from "../../../images/6811939_bag_baggage_duffle bag_journey_luggage_icon.png";
import Miles from "../../../images/medium.png";
import Hatchback from "../../../images/4047299_automobile_car_hatch_hatchback_side_icon.png";
import Sedan from "../../../images/4047317_auto_automobile_car_sedan_transport_icon.png";
import SUV from "../../../images/4047334_auto_automobile_automotive_car_suv_icon.png";
import Electric from "../../../images/4801291_automobile_car_eco_electric_powered_icon.png";

export default function Cars() {
  const cars = useSelector((state) => state.car.cars);
  const days = useSelector((state) => state.car.day);

  return (
    <>
      <CarNav />
      <div className="mt-5 font-Inria-Serif">
        <div className="mt-5 mx-[30px]">
          <h2 className="font-bold text-2xl">Available Cars : {cars.length}</h2>
          <div className="mt-5">
            <div className="flex justify-between items-center">
              <div className="flex flex-col justify-center items-center">
                <img src={Hatchback} />
                <p>Hatchback</p>
              </div>
              <div className="flex flex-col justify-center items-center">
                <img src={Sedan} />
                <p>Sedan</p>
              </div>
              <div className="flex flex-col justify-center items-center">
                <img src={SUV} />
                <p>SUV</p>
              </div>
              <div className="flex flex-col justify-center items-center">
                <img src={Electric} />
                <p>Electric</p>
              </div>
            </div>
          </div>
          <div className=" mt-5 flex flex-col justify-center items-center gap-5 w-full">
            {cars.map((car) => (
              <div
                key={car.id}
                className="flex justify-between items-start flex-col"
              >
                <div>
                  <img src={car.images} className="w-[350px] h-[250px]" />
                </div>
                <div className="bg-[#ebebeb] w-full rounded -mt-2 p-2">
                  <h3 className="font-semibold text-xl">{car.carName}</h3>
                  <div className="grid grid-rows-4 grid-cols-2 gap-2">
                    <p className="flex gap-2">
                      {" "}
                      {car.details.gearbox === "Automatic" ? (
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
                      {car.details.gearbox}
                    </p>
                    <p className="flex gap-2">
                      {" "}
                      <img
                        src={Seats}
                        alt="automatic"
                        className="w-[30px] h-[30px]"
                      />
                      {car.details.seats} Seats
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
                    <p className="opacity-70">
                      Price for{" "}
                      {days === 1 ? (
                        <span>{days} day</span>
                      ) : (
                        <span>{days} days</span>
                      )}
                    </p>
                    <p className="font-bold">£{car.price.perDay}</p>
                    <Link key={car.id} to={`/car-urus/cars/${car.id}`}>
                      <button className="bg-[#0370EF] w-40 h-10 rounded-lg text-white font-bold">
                        View Deal
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

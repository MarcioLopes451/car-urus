import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  updatePrice,
  updateDay,
  resetPrices,
  updateDropoffDate,
  updatePickupDate,
} from "../../features/carSlice";
import { useState, useEffect } from "react";
import Searching from "../../../images/2931184_normal_regular_zoom_glass_magnifier_icon.png";

export default function Search() {
  const cars = useSelector((state) => state.car.cars);
  const day = useSelector((state) => state.car.day);
  const pickupDate = useSelector((state) => state.car.pickupDate);
  const dropoffDate = useSelector((state) => state.car.dropoffDate);
  const [time, setTime] = useState("10:10");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetPrices());
  }, [pickupDate, dropoffDate, dispatch]);

  useEffect(() => {
    const difference = calculateDateDifference(pickupDate, dropoffDate);
    dispatch(updateDay(difference));
  }, [pickupDate, dropoffDate, dispatch]);

  const calculateDateDifference = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const timeDifference = end - start;
    const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    return daysDifference;
  };
  const updateRent = () => {
    cars.forEach((car) => {
      dispatch(updatePrice({ carId: car.id, days: day }));
    });
  };

  const changePickupDate = (e) => {
    dispatch(updatePickupDate(e.target.value));
  };

  const changeDropoffDate = (e) => {
    dispatch(updateDropoffDate(e.target.value));
  };

  const noDate = !pickupDate || !dropoffDate || day < 0;
  return (
    <div className="-mt-5 z-[2] mx-[40px] md:-mt-16 md:mx-[60px] lg:mx-[70px]">
      <div className="bg-white w-full border-[#D2B48C] border-[6px] rounded-lg">
        <div className="grid grid-rows-3 grid-cols-2 lg:grid-rows-1 lg:grid-cols-6">
          {/*First Row */}
          <div className="row-span-1 col-span-2 bg-light-blue-300 p-4 border-b-[6px] border-[#D2B48C] lg:border-r-[6px]">
            <label className="ml-9" htmlFor="location">
              Pick-up Location
            </label>
            <div className="flex items-center gap-4 mt-3">
              <img src={Searching} className="w-[20px] h-[20px]" />
              <select id="location">
                <option value="city">London City Airport</option>
                <option value="heathrow">London Heathrow Airport</option>
                <option value="gatwick">London Gatwick Airport</option>
              </select>
            </div>
          </div>
          {/* Second Row */}
          <div className="row-span-1 col-span-1 p-4 border-[#D2B48C] border-r-[6px] border-b-[6px]">
            <label className="">Pick-up Date</label>
            <div className="flex items-center gap-4 mt-3">
              <input
                type="date"
                value={pickupDate}
                onChange={changePickupDate}
              />
            </div>
          </div>
          <div className="row-span-1 col-span p-4 border-[#D2B48C] border-b-[6px] lg:border-r-[6px]">
            <label className="">Pick-up Time</label>
            <div className="flex items-center gap-4 mt-3">
              <input
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
              />
            </div>
          </div>
          {/* Third Row */}
          <div className="row-span-1 col-span-1 p-4 border-[#D2B48C] border-r-[6px] lg:border-b-[6px]">
            <label className="">Drop-off Date</label>
            <div className="flex items-center gap-4 mt-3">
              <input
                type="date"
                value={dropoffDate}
                onChange={changeDropoffDate}
              />
            </div>
          </div>
          <div className="row-span-1 col-span-1 p-4 border-[#D2B48C] lg:border-b-[6px]">
            <label className="">Drop-off Time</label>
            <div className="flex items-center gap-4 mt-3">
              <input
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>
      <Link to="/car-urus/cars">
        <button
          className="bg-[#0370EF] w-full h-10 rounded-lg text-white font-semibold mt-4 md:h-20 md:-mt-[5px]"
          onClick={updateRent}
          disabled={noDate}
        >
          {" "}
          Search
        </button>
      </Link>
    </div>
  );
}

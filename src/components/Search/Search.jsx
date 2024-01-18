import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  updatePrice,
  updateDay,
  resetPrices,
  updateDropoffDate,
  updatePickupDate,
} from "../../features/carSlice";
import { useEffect } from "react";

export default function Search() {
  const cars = useSelector((state) => state.car.cars);
  const day = useSelector((state) => state.car.day);
  const pickupDate = useSelector((state) => state.car.pickupDate);
  const dropoffDate = useSelector((state) => state.car.dropoffDate);
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

  return (
    <div className="z-[2] mx-[40px] font-Inria-Serif mt-5">
      <h2>Select how many days to rent out cars</h2>
      <div className="flex">
        <label>Pickup Date:</label>
        <input
          type="date"
          value={pickupDate}
          onChange={changePickupDate}
          className="border rounded-lg border-black p-1 ml-2"
        />
      </div>
      <div className="flex mt-2">
        <label>Drop-off Date:</label>
        <input
          type="date"
          value={dropoffDate}
          onChange={changeDropoffDate}
          className="border rounded-lg border-black p-1 ml-2"
        />
      </div>
      <Link to="/car-urus/cars">
        <button
          className="bg-[#0370EF] w-full h-10 rounded-lg text-white font-semibold mt-4"
          onClick={updateRent}
        >
          {" "}
          Search
        </button>
      </Link>
    </div>
  );
}

import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updatePrice, updateDay, resetPrices } from "../../features/carSlice";
import { useEffect } from "react";

export default function Search() {
  const cars = useSelector((state) => state.car.cars);
  const day = useSelector((state) => state.car.day);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetPrices());
  }, [day, dispatch]);

  const updateRent = () => {
    cars.forEach((car) => {
      dispatch(updatePrice({ carId: car.id, days: day }));
    });
  };

  const changeDay = (e) => {
    const newday = parseInt(e.target.value, 10);
    dispatch(updateDay(newday));
  };

  return (
    <div className="z-[2] mx-[40px] font-Inria-Serif mt-5">
      <h2>Select how many days to rent out cars</h2>
      <input
        type="number"
        placeholder="days"
        className="border rounded-lg border-black p-1"
        value={day}
        onChange={changeDay}
      />

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

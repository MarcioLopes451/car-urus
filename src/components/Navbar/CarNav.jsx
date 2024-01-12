import User from "../../../images/8134625_avatar_person_user_icon.png";
import Car from "../../../images/8665128_car_vehicle_icon.png";
import Hotel from "../../../images/8541880_hotel_icon.png";
import { Link } from "react-router-dom";

export default function CarNav() {
  return (
    <div className="bg-[#9F4A54] w-full text-white font-Inria-Serif z-[1] pb-5">
      <div className="flex justify-between items-center px-[40px] pt-8">
        <h1 className="font-bold text-2xl">Car-Urus</h1>
        <img src={User} className="w-[40px] h-[40px]" />
      </div>
      <div className="mt-5">
        <div className="flex items-center justify-between px-[40px]">
          <Link to="/car-urus/">
            <h3 className="font-semibold text-base flex gap-3 items-center">
              {" "}
              <img src={Car} className="w-[30px] h-[30px]" /> Car Rentals
            </h3>
          </Link>
          <h3 className="font-semibold text-base flex gap-3 items-center">
            {" "}
            <img src={Hotel} className="w-[30px] h-[30px]" />
            Hotels
          </h3>
        </div>
      </div>
    </div>
  );
}

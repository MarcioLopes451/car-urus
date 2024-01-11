import Car from "../../../images/8665128_car_vehicle_icon.png";
import Hotel from "../../../images/8541880_hotel_icon.png";
import Instagram from "../../../images/1161953_instagram_icon (1).png";
import Facebook from "../../../images/4552607_facebook_logo_icon.png";
import X from "../../../images/211919_social_twitter_icon (1).png";

export default function Footer() {
  return (
    <div className="mt-5 w-full bg-[#9F4A54] font-Inria-Serif text-white">
      <div className="px-[40px] pt-8 text-center">
        <h2 className="font-bold text-2xl">Car-Urus</h2>
        <div className="flex items-center justify-between px-[40px] mt-5">
          <h3 className="font-semibold text-base flex gap-3 items-center">
            {" "}
            <img src={Car} className="w-[30px] h-[30px]" /> Car Rentals
          </h3>
          <h3 className="font-semibold text-base flex gap-3 items-center">
            {" "}
            <img src={Hotel} className="w-[30px] h-[30px]" />
            Hotels
          </h3>
        </div>
        <div className="mt-5 flex items-center justify-between px-[32px]">
          <img src={Instagram} />
          <img src={Facebook} />
          <img src={X} />
        </div>
        <p className="mt-5">Copyright © 2024</p>
        <p className="mt-5">Designed & Developed by Marcio Lopes</p>
      </div>
    </div>
  );
}

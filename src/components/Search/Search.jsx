//import React from "react";
import Searching from "../../../images/2931184_normal_regular_zoom_glass_magnifier_icon.png";

export default function Search() {
  const currentDate = new Date().toISOString().split("T")[0];
  const currentDateTime = new Date();
  const currentTime = currentDateTime.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
  return (
    <div className="-mt-10 z-[2] mx-[40px]">
      <div className="bg-white w-full border-[#D2B48C] border-[6px] rounded-lg">
        <div className="grid grid-rows-3 grid-cols-2">
          {/*First Row */}
          <div className="row-span-1 col-span-2 bg-light-blue-300 p-4 border-b-[6px] border-[#D2B48C]">
            <label className="ml-9">Pick-up Location</label>
            <div className="flex items-center gap-4 mt-3">
              <img src={Searching} className="w-[20px] h-[20px]" />
              <input type="text" placeholder="London City Airport" />
            </div>
          </div>
          {/* Second Row */}
          <div className="row-span-1 col-span-1 p-4 border-[#D2B48C] border-r-[6px] border-b-[6px]">
            <label className="">Pick-up Date</label>
            <div className="flex items-center gap-4 mt-3">
              <input type="date" value={currentDate} />
            </div>
          </div>
          <div className="row-span-1 col-span p-4 border-[#D2B48C] border-b-[6px]">
            <label className="">Pick-up Time</label>
            <div className="flex items-center gap-4 mt-3">
              <input type="time" value={currentTime} />
            </div>
          </div>
          {/* Third Row */}
          <div className="row-span-1 col-span-1 p-4 border-[#D2B48C] border-r-[6px]">
            <label className="">Drop-off Date</label>
            <div className="flex items-center gap-4 mt-3">
              <input type="date" value={currentDate} />
            </div>
          </div>
          <div className="row-span-1 col-span-1 p-4 border-[#D2B48C]">
            <label className="">Drop-off Time</label>
            <div className="flex items-center gap-4 mt-3">
              <input type="time" value="10:00" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

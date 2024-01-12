/* eslint-disable react/no-unescaped-entities */
// import React from "react";
// import { carData } from "../../../data/carData";

export default function TotalPrice() {
  return (
    <div className="mt-5 mx-[30px]">
      <div className="w-full border border-black rounded-lg p-2">
        <h2 className="font-semibold">Main Driver's Details</h2>
        <div className="mt-3">
          <label className="font-semibold">Email Address:</label>
          <br />
          <input
            type="text"
            placeholder="Email Address..."
            className="mt-3 border rounded border-black px-2"
          />
          <br />
          <br />
          <label className="font-semibold">First Name:</label>
          <br />
          <input
            type="text"
            placeholder="First Name..."
            className="mt-3 border rounded border-black px-2"
          />
          <br />
          <br />
          <label className="font-semibold">Last Name:</label>
          <br />
          <input
            type="text"
            placeholder="Last Name..."
            className="mt-3 border rounded border-black px-2"
          />
        </div>
      </div>
      <div className="mt-5">
        <div className="border border-black rounded p-2">
          <h2 className="font-semibold">Terms and Conditions</h2>
          <p>
            By clicking 'Book Now', you are confirming that you have downloaded
            (where applicable), read, understood and accepted our Terms of
            service, Policy Terms and the Car-urus rental terms.
          </p>
        </div>
      </div>
      <div className="mt-5">
        <div className="border border-black rounded p-2">
          <h2 className="font-semibold">Total Price:</h2>
          <p>Car Hire charge:</p>
          <p>Insurance:</p>
          <div className="border border-black mt-3"></div>
          <p className="mt-3 font-semibold">Price for 1 Day:</p>
        </div>
      </div>
    </div>
  );
}

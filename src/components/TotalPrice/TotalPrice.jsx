/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { complete } from "../../features/userSlice";
import { Link, useNavigate } from "react-router-dom";

export default function TotalPrice({ price, cars }) {
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const days = useSelector((state) => state.car.day);
  const dispatch = useDispatch();

  const insurance = 50;
  const finalPrice = insurance + parseInt(price, 10);

  const handleContinueToBook = () => {
    dispatch(complete({ email, firstName: first, lastName: last }));
    setTimeout(() => {
      navigate("/car-urus/order-confirmed", { state: { cars, finalPrice } });
    }, 0);
  };

  let emailRegex = /\S+@\S+\.\S+/;

  const isInputsEmpty = !emailRegex.test(email) || !first || !last;
  return (
    <div className="mt-5 mx-[30px] md:mx-[60px] lg:mx-[70px]">
      <div className="w-full border border-black rounded-lg p-2 pb-5 md:w-[300px] lg:w-[450px]">
        <h2 className="font-semibold">Main Driver's Details</h2>
        <div className="mt-3">
          <label className="font-semibold">Email Address:</label>
          <br />
          <input
            type="text"
            placeholder="Email Address..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-3 border rounded border-black px-2"
            required
          />
          <br />
          <br />
          <label className="font-semibold">First Name:</label>
          <br />
          <input
            type="text"
            placeholder="First Name..."
            value={first}
            onChange={(e) => setFirst(e.target.value)}
            className="mt-3 border rounded border-black px-2"
            required
          />
          <br />
          <br />
          <label className="font-semibold">Last Name:</label>
          <br />
          <input
            type="text"
            placeholder="Last Name..."
            value={last}
            onChange={(e) => setLast(e.target.value)}
            className="mt-3 border rounded border-black px-2"
            required
          />
        </div>
      </div>
      <div className="mt-5">
        <div className="border border-black rounded p-2 md:w-[300px] lg:w-[450px]">
          <h2 className="font-semibold">Terms and Conditions</h2>
          <p>
            By clicking 'Book Now', you are confirming that you have downloaded
            (where applicable), read, understood and accepted our Terms of
            service, Policy Terms and the Car-urus rental terms.
          </p>
        </div>
      </div>
      <div className="mt-5">
        <div className="border border-black rounded p-2 md:w-[300px] md:float-right md:-mt-[525px] lg:-mt-[995px]">
          <h2 className="font-bold">Total Price:</h2>
          <p>Car Hire charge: £{price}</p>
          <p>Insurance: £{insurance} </p>
          <div className="border border-black mt-3"></div>
          <p className="mt-3 font-semibold">
            Price for{" "}
            {days === 1 ? <span>{days} day</span> : <span>{days} days</span>}: £
            {finalPrice}
          </p>
        </div>
      </div>
      <div className="mt-5 mx-[30px] md:float-right  md:-mt-[350px] md:mx-0 lg:-mt-[830px]">
        <Link
          to="/car-urus/order-confirmed"
          onClick={() => {
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
          }}
        >
          <button
            className="bg-[#0370EF] w-full h-12 rounded-lg text-white font-bold md:w-[300px] hover:transition ease-in-out hover:opacity-65"
            onClick={handleContinueToBook}
            disabled={isInputsEmpty}
          >
            Book Now
          </button>
        </Link>
      </div>
    </div>
  );
}

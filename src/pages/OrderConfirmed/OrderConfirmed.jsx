import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import CarNav from "../../components/Navbar/CarNav";

export default function OrderConfirmed() {
  const user = useSelector((state) => state.user.value);
  const days = useSelector((state) => state.car.day);
  const location = useLocation();

  const { cars, finalPrice } = location.state || {};

  const redirect = () => {
    window.location.href = "/car-urus/";
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  return (
    <div>
      <CarNav />
      <div className="text-center md:text-start mt-5 mx-[40px] font-Inria-Serif lg:mx-[70px]">
        <h2 className="font-bold text-2xl">Confirm Your Order</h2>
        <p>You have selected the following car for rental:</p>
        {cars && (
          <div className="md:flex items-center justify-center md:mt-10 gap-3">
            <div>
              <img
                src={cars.images}
                alt={cars.carName}
                className="md:w-[500px]"
              />
            </div>
            <div>
              <div className="flex justify-center items-center flex-wrap font-semibold gap-4 md:justify-between">
                <h3>{cars.carName}</h3>
                <p>{cars.type}</p>
                <p>Color: {cars.details.color}</p>
              </div>
              <div className="mt-4">
                <p>
                  Rental Duration:{" "}
                  <span className="font-semibold">
                    {days} {days === 1 ? "day" : "days"}
                  </span>
                </p>
                <p>
                  Price per day:{" "}
                  <span className="font-semibold">£{cars.price.perDay}</span>
                </p>
                <p>
                  Total Price:{" "}
                  <span className="font-semibold">£{finalPrice}</span>
                </p>
              </div>
              <div className="mt-4">
                <p>Thank you for choosing our car rental service!</p>
                <p>Driver Details: </p>
                <p className="mt-1 font-semibold">
                  {user.firstName} {user.lastName}
                </p>
                <p className="font-semibold">{user.email}</p>
                <p className="mt-4">
                  Your order has been confirmed. We will contact you shortly
                  with further details.
                </p>
              </div>
              <button
                className="bg-[#0370EF] w-full h-10 rounded-lg text-white font-semibold mt-4 md:w-[200px]"
                onClick={redirect}
              >
                Go back to home
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

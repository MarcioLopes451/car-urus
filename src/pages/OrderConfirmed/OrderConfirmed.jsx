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
  };
  return (
    <div>
      <CarNav />
      <h2>Confirm Your Order</h2>
      <p>You have selected the following car for rental:</p>
      {cars && (
        <div>
          <div>
            <img src={cars.images} alt={cars.carName} />
            <h3>{cars.carName}</h3>
            <p>{cars.type}</p>
            <p>Color: {cars.details.color}</p>
          </div>
          <div>
            <p>
              Rental Duration: {days} {days === 1 ? "day" : "days"}
            </p>
            <p>Price per day: £{cars.price.perDay}</p>
            <p>Total Price: £{finalPrice}</p>
          </div>
          <div>
            <p>Thank you for choosing our car rental service!</p>
            <p>Driver Details: </p>
            <p>{user.firstName}</p>
            <p>{user.lastName}</p>
            <p>{user.email}</p>
            <p>
              Your order has been confirmed. We will contact you shortly with
              further details.
            </p>
          </div>
        </div>
      )}
      <button className="bg-blue-500 text-red-500" onClick={redirect}>
        Go back to home
      </button>
    </div>
  );
}

import { useSelector } from "react-redux";

export default function ConfirmOrder() {
  const user = useSelector((state) => state.user.value);
  return (
    <div>
      <h2>Confirm Your Order</h2>
      <p>You have selected the following car for rental:</p>
      <p>{user.firstName}</p>
      <div></div>
      <div>
        <p>Rental Duration: </p>

        <p>Total Price: £</p>
      </div>
      <div>
        <p>Thank you for choosing our car rental service!</p>
        <p>
          Your order has been confirmed. We will contact you shortly with
          further details.
        </p>
      </div>
    </div>
  );
}

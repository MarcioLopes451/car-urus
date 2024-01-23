import CarNav from "../../components/Navbar/CarNav";
import ComingSoon from "../../../images/coming soon.gif";

export default function Hotel() {
  return (
    <>
      <CarNav />
      <div className="mt-5 flex justify-center items-start">
        <img src={ComingSoon} alt="coming soon" />
      </div>
    </>
  );
}

import { carData } from "../../../data/carData";
import Automatic from "../../../images/automatic-transmission.png";
import Seats from "../../../images/9035117_person_icon.png";
import LargeBag from "../../../images/6811947_bag_baggage_journey_luggage_suitcase_icon.png";
import SmallBag from "../../../images/6811939_bag_baggage_duffle bag_journey_luggage_icon.png";
import Miles from "../../../images/medium.png";
import FrequentQuestions from "./FrequentQuestions";
import Search from "../Search/Search";
import Navbar from "../Navbar/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <Search />
      <div className="mt-10 mx-[40px] font-Inria-Serif">
        <h2 className="font-bold text-2xl">Popular Cars</h2>
        <div className=" mt-5 flex flex-col justify-center items-center gap-5 w-full">
          {carData
            .filter((a) => a.details.gearbox === "Automatic")
            .map((car) => (
              <div
                key={car}
                className="flex justify-between items-start flex-col"
              >
                <div className="bg-[#C9C9C9] rounded">
                  <img src={car.images} className="w-[350px] h-[250px]" />
                </div>
                <div className="bg-[#ebebeb] w-full rounded -mt-2 p-2">
                  <h3 className="font-semibold text-xl">{car.carName}</h3>
                  <div className="grid grid-rows-4 grid-cols-2 gap-2">
                    <p className="flex gap-2">
                      {" "}
                      <img
                        src={Automatic}
                        alt="automatic"
                        className="w-[30px] h-[30px]"
                      />
                      {car.details.gearbox}
                    </p>
                    <p className="flex gap-2">
                      {" "}
                      <img
                        src={Seats}
                        alt="automatic"
                        className="w-[30px] h-[30px]"
                      />
                      {car.details.seats} Seats
                    </p>
                    <p className="flex gap-2">
                      {" "}
                      <img
                        src={LargeBag}
                        alt="automatic"
                        className="w-[30px] h-[30px]"
                      />
                      1 Large Bag
                    </p>
                    <p className="flex gap-2">
                      {" "}
                      <img
                        src={SmallBag}
                        alt="automatic"
                        className="w-[30px] h-[30px]"
                      />
                      1 Small Bag
                    </p>
                    <p className="flex gap-2">
                      {" "}
                      <img
                        src={Miles}
                        alt="automatic"
                        className="w-[30px] h-[30px]"
                      />
                      Unlimited Miles
                    </p>
                  </div>
                  <div>
                    <p className="opacity-70">Price for 1 day</p>
                    <p className="font-bold">£{car.price.perDay}</p>
                    <button className="bg-[#0370EF] w-40 h-10 rounded-lg text-white font-bold">
                      View Deal
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
        <FrequentQuestions />
      </div>
    </>
  );
}

import "./App.css";
import { carData } from "../data/data";

function App() {
  return (
    <div>
      {carData.map((a, i) => (
        <div key={i}>
          <img src={a.images} className="w-[200px]" />
        </div>
      ))}
    </div>
  );
}

export default App;

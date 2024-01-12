import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Cars from "./components/Cars/Cars";
import SelectedCar from "./components/Cars/SelectedCar";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/car-urus/" element={<Home />} />
        <Route path="/car-urus/cars" element={<Cars />} />
        <Route path="/car-urus/cars/:id" element={<SelectedCar />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

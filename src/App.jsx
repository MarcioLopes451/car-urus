import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Cars from "./pages/Cars/Cars";
import SelectedCar from "./pages/Cars/SelectedCar";

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

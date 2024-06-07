import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Cars from "./pages/Cars/Cars";
import SelectedCar from "./pages/Cars/SelectedCar";
import OrderConfirmed from "./pages/OrderConfirmed/OrderConfirmed";
import Hotel from "./pages/Hotel/Hotel";
function App() {
  return (
    <div className="bg-none">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/hotel" element={<Hotel />} />
        <Route path="/cars/:id" element={<SelectedCar />} />
        <Route path="/order-confirmed" element={<OrderConfirmed />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

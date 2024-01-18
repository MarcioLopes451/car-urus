import { createSlice } from "@reduxjs/toolkit";
import { carData } from "../../data/carData";

export const carSlice = createSlice({
  name: "car",
  initialState: {
    day: 1,
    cars: carData,
    selectedCar: null,
    totalPrice: 50,
  },
  reducers: {
    updatePrice: (state, action) => {
      const { carId, days } = action.payload;
      const car = state.cars.find((c) => c.id === carId);
      if (car) car.price.perDay = newPrice(car.price.perDay, days);
    },
    updateDay: (state, action) => {
      state.day = action.payload;
    },
    resetPrices: (state) => {
      state.cars.forEach((car) => {
        car.price.perDay = carData.find((c) => c.id == car.id).price.perDay;
      });
    },
    selectCar: (state, action) => {
      const selectedCarID = action.payload;
      state.selectedCar = state.cars.find((car) => car.id === selectedCarID);
    },
  },
});

const newPrice = (price, days) => {
  let newPrice = price;
  for (let i = 1; i <= days; i++) {
    newPrice *= 1.2;
  }
  return newPrice.toFixed(2);
};
export const { updatePrice, updateDay, resetPrices, selectCar } =
  carSlice.actions;
export default carSlice.reducer;

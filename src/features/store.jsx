import { configureStore } from "@reduxjs/toolkit";
import carReducer from "./carSlice";
import userReducer from "./userSlice";

export const store = configureStore({
  reducer: {
    car: carReducer,
    user: userReducer,
  },
});

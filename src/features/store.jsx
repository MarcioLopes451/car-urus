import { configureStore } from "@reduxjs/toolkit";
import carReducer from "./carSlice";
import userReducer from "./userSlice";
import locationsReducer from "./locationSlice";

export const store = configureStore({
  reducer: {
    car: carReducer,
    user: userReducer,
    locations: locationsReducer,
  },
});

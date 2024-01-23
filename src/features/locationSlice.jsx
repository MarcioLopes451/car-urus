import { createSlice } from "@reduxjs/toolkit";

export const locationSlice = createSlice({
  name: "location",
  initialState: {
    selectedLocation: null,
    locations: [
      { value: "city", label: "London City Airport" },
      { value: "heathrow", label: "London Heathrow Airport" },
      { value: "gatwick", label: "London Gatwick Airport" },
    ],
  },
  reducers: {
    selectLocation: (state, action) => {
      state.selectedLocation = action.payload;
    },
  },
});

export const { selectLocation } = locationSlice.actions;
export default locationSlice.reducer;

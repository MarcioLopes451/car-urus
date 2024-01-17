import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    value: {
      email: "",
      firstName: "",
      lastName: "",
    },
  },
  reducers: {
    complete: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { complete } = userSlice.actions;
export default userSlice.reducer;

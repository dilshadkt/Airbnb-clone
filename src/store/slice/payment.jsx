import { createSlice } from "@reduxjs/toolkit";

const paymentSlice = createSlice({
  name: "payment",
  initialState: {
    currentImg: "",
  },
  reducers: {
    setImg: (state, action) => {
      state.currentImg = action.payload;
    },
  },
});
export const { setImg } = paymentSlice.actions;
export default paymentSlice.reducer;

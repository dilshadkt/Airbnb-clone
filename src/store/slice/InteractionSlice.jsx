import { createSlice } from "@reduxjs/toolkit";
const interactSlice = createSlice({
  name: "interaction",
  initialState: {
    like: localStorage.getItem("like") || null,
  },
  reducers: {
    setLike: (state, action) => {
      state.like = action.payload;
      localStorage.setItem("like", action.payload);
    },
  },
});

export const { setLike } = interactSlice.actions;
export default interactSlice.reducer;

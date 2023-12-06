import { createSlice } from "@reduxjs/toolkit";
const authSlice = createSlice({
  name: "auth",
  initialState: {
    login: false,
    signin: false,
  },
  reducers: {
    loginOpen: (state, action) => {
      state.login = action.payload;
    },
    singInOpen: (state, action) => {
      state.signin = action.payload;
    },
  },
});
export const { loginOpen, singInOpen } = authSlice.actions;
export default authSlice.reducer;

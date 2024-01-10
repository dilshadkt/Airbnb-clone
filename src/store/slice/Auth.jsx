import { createSlice } from "@reduxjs/toolkit";
const authSlice = createSlice({
  name: "auth",
  initialState: {
    login: false,
    signin: false,
    forgetPassword: false,
    token: localStorage.getItem("token") || null,
  },
  reducers: {
    loginOpen: (state, action) => {
      state.login = action.payload;
    },
    singInOpen: (state, action) => {
      state.signin = action.payload;
    },
    forgetOpen: (state, action) => {
      state.forgetPassword = action.payload;
    },
    setToken: (state, action) => {
      state.token = action.payload;
      localStorage.setItem("token", action.payload);
    },
  },
});
export const { loginOpen, singInOpen, forgetOpen, setToken } =
  authSlice.actions;
export default authSlice.reducer;

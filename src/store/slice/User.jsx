import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    isLogin: localStorage.getItem("token") ? true : false,
    amenties: false,
    user: localStorage.getItem("NewUser")
      ? JSON.parse(localStorage.getItem("NewUser"))
      : {},
  },
  reducers: {
    setLogin: (state, action) => {
      state.isLogin = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
      localStorage.setItem("NewUser", JSON.stringify(action.payload));
    },
    setAmenties: (state, action) => {
      state.amenties = !state.amenties;
    },
  },
});

export const { setUser, setLogin, setAmenties } = userSlice.actions;
export default userSlice.reducer;

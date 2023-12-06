import { createSlice } from "@reduxjs/toolkit";

const propertySice = createSlice({
  name: "property",
  initialState: {
    property: [],
  },
  reducers: {
    setProperty: (state, action) => {
      state.property = action.payload;
    },
  },
});
export const { setProperty } = propertySice.actions;
export default propertySice.reducer;

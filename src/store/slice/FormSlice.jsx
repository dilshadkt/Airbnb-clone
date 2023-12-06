import { createSlice } from "@reduxjs/toolkit";

const FormSlice = createSlice({
  name: "form",
  initialState: {
    form: {
      hostid: "",
      propertyType: "",
      houseType: "",
      place: {},
      aboutPlace: {
        guests: "",
        bedrooms: "",
        beds: "",
        bathrooms: "",
      },
      propertyOffer: [],
      image: {},
      title: "",
      description: "",
      pricePeNight: "",
      discount: "",
      security: [],
    },
  },
  reducers: {
    setForm: (state, action) => {
      const keyValue = action.payload.key;
      console.log(keyValue);
      state.form[keyValue] = action.payload.value;
    },
  },
});
export const { setForm } = FormSlice.actions;
export default FormSlice.reducer;

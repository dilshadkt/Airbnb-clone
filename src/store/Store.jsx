import { configureStore } from "@reduxjs/toolkit";
import SearchSlice from "./slice/SearchSlice";
import PropertySlice from "./slice/PropertySlice";
import AuthSlice from "./slice/Auth";
import PaymentSlice from "./slice/payment";
import User from "./slice/User";
import FormSlice from "./slice/FormSlice";

const store = configureStore({
  reducer: {
    search: SearchSlice,
    property: PropertySlice,
    user: User,
    auth: AuthSlice,
    payment: PaymentSlice,
    formdata: FormSlice,
  },
});
export default store;

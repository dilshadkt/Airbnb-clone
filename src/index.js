import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { Provider } from "react-redux";
import store from "./store/Store";
import { AuthContextProvider } from "./context/AuthContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <GoogleOAuthProvider clientId="919933473029-sjmhspsmdbb5pr29g1h2h0s57unqkom3.apps.googleusercontent.com">
    <AuthContextProvider>
      <Provider store={store}>
        {/* <BrowserRouter> */}
        <App />
        {/* </BrowserRouter> */}
      </Provider>
    </AuthContextProvider>
  </GoogleOAuthProvider>
);

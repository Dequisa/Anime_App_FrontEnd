import { configureStore } from "@reduxjs/toolkit";
import aunthenticationReducer from "../features/authentication/authenticationSlice";

export default configureStore({
  reducer: {
    authentication: aunthenticationReducer,
  },
});

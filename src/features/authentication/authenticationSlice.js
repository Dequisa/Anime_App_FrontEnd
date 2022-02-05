import { createSlice } from "@reduxjs/toolkit";

export const authenticationSlice = createSlice({
  name: "authentication",
  initialState: {
    status: "unknown",
  },

  reducers: {
    userIn: (state) => {
      state.status = "logged in";
    },
    userOut: (state) => {
      state.status = "logged out";
    },
  },
});

export const { userIn, userOut } = authenticationSlice.actions;

export default authenticationSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import {
  createUser,
  loggedInUser,
  loginUser,
  logoutUser,
} from "./authApiSlice";

//create auth slice
const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user"))
      : null,
    error: null,
    message: null,
  },
  reducers: {
    setMessageEmpty: (state, payload) => {
      state.message = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(createUser.rejected, (state, action) => {
      state.error = action.error.message;
    });
    builder.addCase(createUser.fulfilled, (state, action) => {
      state.message = action.payload.message;
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.error = action.error.message;
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.message = action.payload.message;
      state.user = action.payload.user;
      localStorage.setItem("user", JSON.stringify(action.payload.user));
    });
    builder.addCase(logoutUser.rejected, (state, action) => {
      state.error = action.error.message;
    });
    builder.addCase(logoutUser.fulfilled, (state, action) => {
      state.message = action.payload.message;
      state.user = null;
      localStorage.removeItem("user");
    });
    builder.addCase(loggedInUser.rejected, (state, action) => {
      state.error = action.error.message;
      state.user = null;
    });
    builder.addCase(loggedInUser.fulfilled, (state, action) => {
      state.message = action.payload.message;
      state.user = action.payload;
    });
  },
});

//selectors
export const getAuthData = (state) => state.auth;

//actions
export const { setMessageEmpty } = authSlice.actions;

//export
export default authSlice.reducer;

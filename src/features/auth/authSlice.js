import { createSlice } from "@reduxjs/toolkit";
import { createUser, loginUser } from "./authApiSlice";

//create auth slice
const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
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
    });
  },
});

//selectors

//actions
export const { setMessageEmpty } = authSlice.actions;

//export
export default authSlice.reducer;

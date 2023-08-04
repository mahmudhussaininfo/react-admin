import { createSlice } from "@reduxjs/toolkit";
import {
  createPermission,
  deletePermission,
  getAllPermission,
  statusPermissionUpdate,
} from "./userApiSlice";

//create user slice
const userSlice = createSlice({
  name: "user",
  initialState: {
    permission: null,
    role: null,
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
    builder
      .addCase(getAllPermission.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(getAllPermission.fulfilled, (state, action) => {
        state.message = action.payload.message;
        state.permission = action.payload;
      })
      .addCase(createPermission.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(createPermission.fulfilled, (state, action) => {
        state.permission.push(action.payload.permission);
        state.message = action.payload.message;
      })
      .addCase(deletePermission.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(deletePermission.fulfilled, (state, action) => {
        state.permission = state.permission.filter(
          (data) => data._id !== action.payload.permission._id
        );
        state.message = action.payload.message;
      })
      .addCase(statusPermissionUpdate.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(statusPermissionUpdate.fulfilled, (state, action) => {
        state.permission[
          state.permission.findIndex(
            (data) => data._id == action.payload.permission._id
          )
        ] = action.payload.permission;
      });
  },
});

//selectors
export const getAllPrmissionData = (state) => state.user;

//actions
export const { setMessageEmpty } = userSlice.actions;

//export
export default userSlice.reducer;

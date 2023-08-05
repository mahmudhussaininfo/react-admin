import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//get Permission
export const getAllPermission = createAsyncThunk(
  "user/getAllPermission",
  async () => {
    try {
      const response = await axios.get(
        "http://localhost:5050/api/v1/permission",
        {
          withCredentials: true,
        }
      );
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);

//register Permission
export const createPermission = createAsyncThunk(
  "user/createPermission",
  async (data) => {
    try {
      const response = await axios.post(
        "http://localhost:5050/api/v1/permission",
        data,
        {
          withCredentials: true,
        }
      );
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);

//delete Permission
export const deletePermission = createAsyncThunk(
  "user/deletePermission",
  async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:5050/api/v1/permission/${id}`,
        {
          withCredentials: true,
        }
      );
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);

//Status update Permission
export const statusPermissionUpdate = createAsyncThunk(
  "user/statusPermissionUpdate",
  async ({ status, id }) => {
    try {
      const response = await axios.patch(
        `http://localhost:5050/api/v1/permission/status/${id}`,
        { status },
        {
          withCredentials: true,
        }
      );
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);

//get All Roles
export const getAllRole = createAsyncThunk("user/getAllRole", async () => {
  try {
    const response = await axios.get("http://localhost:5050/api/v1/role", {
      withCredentials: true,
    });

    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
});

//Create Roles
export const createRoles = createAsyncThunk(
  "user/createRoles",
  async (data) => {
    try {
      const response = await axios.post(
        "http://localhost:5050/api/v1/role",
        data,
        {
          withCredentials: true,
        }
      );
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);

//delete Role
export const deleteRole = createAsyncThunk("user/deleteRole", async (id) => {
  try {
    const response = await axios.delete(
      `http://localhost:5050/api/v1/role/${id}`,
      {
        withCredentials: true,
      }
    );
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
});

//password change
export const changePass = createAsyncThunk(
  "user/changePass",
  async ({ id, data }) => {
    try {
      const response = await axios.post(
        `http://localhost:5050/api/v1/mamu/password/${id}`,
        data,
        {
          withCredentials: true,
        }
      );
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);

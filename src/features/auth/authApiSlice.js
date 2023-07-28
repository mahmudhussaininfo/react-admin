import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//register user
export const createUser = createAsyncThunk("auth/createUser", async (data) => {
  try {
    const response = await axios.post(
      "http://localhost:5050/api/v1/auth/register",
      data
    );
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
});

//login user
export const loginUser = createAsyncThunk("auth/loginUser", async (data) => {
  try {
    const response = await axios.post(
      "http://localhost:5050/api/v1/auth/login",
      data
    );
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
});

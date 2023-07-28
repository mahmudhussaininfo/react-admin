import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";

//create store
const Store = configureStore({
  reducer: {
    auth: authReducer,
  },
  middleware: (getDefalultMiddlewares) => getDefalultMiddlewares(),
  devTools: true,
});

//export
export default Store;

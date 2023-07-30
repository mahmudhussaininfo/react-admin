import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./router/router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { loggedInUser } from "./features/auth/authApiSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("user")) {
      dispatch(loggedInUser());
    }
  }, [dispatch]);

  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer position="top-center" theme="dark" />
    </>
  );
}

export default App;

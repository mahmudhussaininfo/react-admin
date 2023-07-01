import Forgot from "../pages/Auth/Forgot";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";

//public router
const publicRouter = [
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/forgot",
    element: <Forgot />,
  },
];

//export
export default publicRouter;

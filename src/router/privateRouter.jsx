import { Children } from "react";
import Layout from "../components/Layout/Layout";
import Users from "../components/Users/Users";
import Dashboard from "../pages/Dashboard/Dashboard";
import PrivateGard from "./PrivateGard";

//private router
const privateRouter = [
  {
    element: <Layout />,
    children: [
      {
        element: <PrivateGard />,
        children: [
          {
            path: "/",
            element: <Dashboard />,
          },
          {
            path: "/users",
            element: <Users />,
          },
        ],
      },
    ],
  },
];

//export
export default privateRouter;

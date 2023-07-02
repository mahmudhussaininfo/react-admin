import Layout from "../components/Layout/Layout";
import Users from "../components/Users/Users";
import Dashboard from "../pages/Dashboard/Dashboard";

//private router
const privateRouter = [
  {
    element: <Layout />,
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
];

//export
export default privateRouter;

import Layout from "../components/Layout/Layout";
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
    ],
  },
];

//export
export default privateRouter;

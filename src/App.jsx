import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ListPage from "./pages/listPage/ListPage";
import HomePage from "./pages/homePage/HomePage";
import Layout from "./pages/layout/Layout";
import SinglePage from "./pages/singlePage/SinglePage";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/list",
          element: <ListPage />,
        },
        {
          path: "/:id",
          element: <SinglePage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;

import { Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../layout";
import routes from "./routes";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: Object.entries(routes).map(([, route]) => ({
        ...route,
        key: route.path,
        element: (
          <Suspense fallback={"loading ...."}>
            <route.element />
          </Suspense>
        ),
      })),
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;

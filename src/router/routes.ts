import { lazy } from "react";

const routes = {
  home: { path: "/", element: lazy(() => import("../pages/Home")) },
};

export default routes;

import { createBrowserRouter } from "react-router-dom";

import { routesObject } from "./routesConfig";
import Layout from "@/layout";
import HomePage from "@/pages/home";

// Create a router
export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: routesObject.home.path,
        element: <HomePage />,
      }
    ],
  },
]);

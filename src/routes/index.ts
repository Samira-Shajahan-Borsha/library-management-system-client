import Layout from "@/layout/Layout";
import HomePage from "@/pages/home/HomePage";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      {
        index: true,
        Component: HomePage,
      }
    ],
  },
]);

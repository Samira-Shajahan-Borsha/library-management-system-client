import Layout from "@/layout/Layout";
import AddBookPage from "@/pages/AddBookPage";
import BookDetailPage from "@/pages/BookDetailPage";
import HomePage from "@/pages/HomePage";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      {
        index: true,
        Component: HomePage,
      },
      {
        path: "/book/:bookId",
        Component: BookDetailPage,
      },
      {
        path: "/add-book",
        Component: AddBookPage,
      },
    ],
  },
]);

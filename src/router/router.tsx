import { createBrowserRouter } from "react-router-dom";
import HomePage from "@/pages/HomePage";
import CartPage from "@/pages/CartPage";
import Layout from "@/layout/Layout";

export default createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <HomePage />,
      </Layout>
    ),
  },

  {
    path: "/cart",
    element: (
      <Layout>
        <CartPage />,
      </Layout>
    ),
  },
]);

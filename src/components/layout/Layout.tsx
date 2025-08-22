import Navbar from "../shared/Navbar";
import { Outlet } from "react-router";
import Footer from "../shared/Footer";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;

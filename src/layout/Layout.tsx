
import Footer from "@/components/shared/Footer";
import { Navbar } from "@/components/shared/Navbar";
import { Outlet } from "react-router";

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

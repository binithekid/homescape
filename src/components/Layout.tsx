import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import MobileNavBar from "./MobileNav";

const Layout = ({ children }: any) => {
  return (
    <div className="min-h-screen">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;

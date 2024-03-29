import React from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import Footer from "../components/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;

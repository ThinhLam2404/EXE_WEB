import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import "../assets/css/ajax-loader.gif";
import "../assets/css/bootstrap.min.css";
import "../assets/css/vendor.css";
import "../assets/css/style.css";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet></Outlet>
      <Footer />
    </>
  );
};

export default Layout;

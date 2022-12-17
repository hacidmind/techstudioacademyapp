import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";

const Layout = () => (
  <main className="">
    <Navbar />
    <Outlet />
    <Footer />
  </main>
);

export default Layout;

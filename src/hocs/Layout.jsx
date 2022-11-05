import React from "react";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";

const Layout = (props) => (
  <main className="">
    <Navbar />
    {props.children}
    <Footer />
  </main>
);

export default Layout;

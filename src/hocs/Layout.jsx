import React from "react";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";

const Layout = (props) => (
  <div>
    <Navbar />
    {props.children}
    <Footer />
  </div>
);

export default Layout;

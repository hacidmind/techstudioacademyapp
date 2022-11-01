import React from 'react';
import Navbar from '../components/Navbar';
import Footer from './Footer';
 
const Layout = (props) => (
    <div>
        <Navbar />
        {props.children}
        <Footer />
    </div>
);
 
export default Layout;
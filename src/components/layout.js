import React from "react";

import Footer from '../components/footer';
import Header from '../components/header';

import '../styles/index.scss';

const Layout = ({ children })=> {
    return (
        <div>
            <Header />
            {children}
            <Footer />
        </div>
    )
}


export default Layout;
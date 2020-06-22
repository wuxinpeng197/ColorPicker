import React from 'react';
import Header from '../component/Header';
import Footer from '../component/Footer';

const Layout = (props) => {
    return (
        <div>
            <Header/>
            {props.children}
            <Footer/>
        </div>
    );
}

export default Layout;
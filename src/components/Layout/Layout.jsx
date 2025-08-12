import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header/Header';
//import Sidebar from './Sidebar/Sidebar';
import NavMenu from './NavMenu/NavMenu';
import './Layout.css';

const Layout = () => {
    return (
        <div className="page">
            <div className="sidebar">
                <NavMenu />
            </div>

            <main>
                <div className="top-row px-4">
                    <a href="https://react.dev/" target="_blank" rel="noreferrer">About React</a>
                </div>
                <Header />

                <article className="content px-4">
                    <Outlet />
                </article>
            </main>
        </div>
    );
};

export default Layout;
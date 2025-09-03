import React from 'react';
import { Outlet } from 'react-router-dom';
import AnnouncementBanner from '../AnnouncementBanner/AnnouncementBanner';
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
                <AnnouncementBanner href="https://react.dev/" target="About React ..." />
                <Header />

                <article className="content px-4">
                    <Outlet />
                </article>
            </main>
        </div>
    );
};

export default Layout;
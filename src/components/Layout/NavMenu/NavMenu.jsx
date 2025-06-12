import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../styles/global.css';
import './NavMenu.css'; // Import your CSS file for styling

const NavMenu = () => {
    const toggleNavMenu = () => {
        const element = document.getElementById("NavigationMenu");
        if (element) {
            const isCurrentlyCollapsed = element.classList.contains("collapse");

            // Toggle the "collapse" class
            if (isCurrentlyCollapsed) {
                element.classList.remove("collapse");
            } else if (window.innerWidth < 640.98) {
                element.classList.add("collapse");
            }
        } else {
            console.error("Element with id 'NavigationMenu' not found.");
        }
    };
      
    return (
        <>
            {/* Top Row Navbar */}
            <div className="top-row-nav ps-3 navbar navbar-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" style={{ textAlign: 'center' }} href={`${process.env.PUBLIC_URL}/`}>
                        Mark J. Hogan
                    </a>
                    <button
                        title="Navigation menu"
                        className="navbar-toggler"
                        onClick={toggleNavMenu}
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
            </div>

            {/* Collapsible Navigation Menu */}
            <div id="NavigationMenu" className="nav-scrollable" onClick={toggleNavMenu}>
                <nav className="nav flex-column">
                    <div className="nav-item px-3" style={{ textAlign: 'center' }}>
                        <img
                            src={`${process.env.PUBLIC_URL}/assets/images/MarkJHogan.jpg`} alt="Mark J. Hogan"
                            className="rounded-circle my-image"
                        />
                    </div>
                    <div className="nav-item px-3">
                        <Link className="nav-link" to="/">
                            <span className="bi bi-house-door-fill-nav-menu" aria-hidden="true"></span> Home
                        </Link>
                    </div>
                    <div className="nav-item px-3">
                        <Link className="nav-link" to="/professionalsummary">
                            <span className="bi bi-person-badge-fill-nav-menu" aria-hidden="true"></span> Professional Summary
                        </Link>
                    </div>
                    <div className="nav-item px-3">
                        <Link className="nav-link" to="/myprojects">
                            <span className="bi bi-list-nested-nav-menu" aria-hidden="true"></span> My Projects
                        </Link>
                    </div>
                    <div className="nav-item px-3">
                        <Link className="nav-link" to="/myrecommendations">
                            <span className="bi bi-list-nested-nav-menu" aria-hidden="true"></span> My Recommendations
                        </Link>
                    </div>
                    <div className="nav-item px-3">
                        <Link className="nav-link" to="/myblogs">
                            <span className="bi bi-list-nested-nav-menu" aria-hidden="true"></span> My Blogs
                        </Link>
                    </div>
                    <div className="nav-item px-3">
                        <Link className="nav-link" to="/mycontacts">
                            <span className="bi bi-person-vcard-fill-nav-menu" aria-hidden="true"></span> My Contact Information
                        </Link>
                    </div>
                    <div className="nav-item px-3">
                        <Link className="nav-link" to="/resumes">
                            <span className="bi bi-journal-text-nav-menu" aria-hidden="true"></span> My Resumes
                        </Link>
                    </div>
                    <div className="nav-item px-3">
                        <Link className="nav-link" to="/version">
                            <span className="bi bi-info-circle-fill-nav-menu" aria-hidden="true"></span> Site Information
                        </Link>
                    </div>
                </nav>
                <Footer />
            </div>
        </>
    );
};

export default NavMenu;
import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../styles/global.css';
import './NavMenu.css';

const NavMenu = () => {
    const toggleNavMenu = () => {
        const element = document.getElementById("NavigationMenu");
        if (element) {
            const isCurrentlyCollapsed = element.classList.contains("collapse");
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
                    <a className="navbar-brand text-center" href={`${process.env.PUBLIC_URL}/`}>
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
                    {/* Profile Image */}
                    <div className="nav-item px-3 text-center">
                        <img
                            src={`${process.env.PUBLIC_URL}/assets/images/MarkJHogan.jpg`}
                            alt="Mark J. Hogan"
                            className="rounded-circle my-image"
                        />
                    </div>

                    {/* Core Navigation */}
                    <div className="nav-item px-3">
                        <Link className="nav-link" to="/">
                            <span className="bi bi-house-door-fill-nav-menu"></span> Home
                        </Link>
                    </div>
                    {/* About Dropdown */}
                    <div className="nav-item dropdown px-3">
                        <button
                            className="nav-link dropdown-toggle"
                            id="aboutDropdown"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                            type="button"
                        >
                            <i className="bi bi-person-badge-fill-nav-menu"></i> About
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="aboutDropdown">
                            <li><Link className="dropdown-item" to="professional-summary">Professional Summary</Link></li>
                            <li><Link className="dropdown-item" to="problem-solving-profile">Problem Solving Profile</Link></li>
                            <li><Link className="dropdown-item" to="change-governance">Change Management</Link></li>
                            <li><Link className="dropdown-item" to="strategic-persona">Strategic Engineering Persona</Link></li>
                            <li><Link className="dropdown-item" to="legacy-profile">Legacy Support</Link></li>
                        </ul>
                    </div>

                    {/* Offerings Dropdown */}
                    <div className="nav-item dropdown px-3">
                        <button
                            className="nav-link dropdown-toggle"
                            id="offeringsDropdown"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                            type="button"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="whitesmoke" className="bi bi-boxes" viewBox="0 0 16 16">
                            <path d="M7.752.066a.5.5 0 0 1 .496 0l3.75 2.143a.5.5 0 0 1 .252.434v3.995l3.498 2A.5.5 0 0 1 16 9.07v4.286a.5.5 0 0 1-.252.434l-3.75 2.143a.5.5 0 0 1-.496 0l-3.502-2-3.502 2.001a.5.5 0 0 1-.496 0l-3.75-2.143A.5.5 0 0 1 0 13.357V9.071a.5.5 0 0 1 .252-.434L3.75 6.638V2.643a.5.5 0 0 1 .252-.434zM4.25 7.504 1.508 9.071l2.742 1.567 2.742-1.567zM7.5 9.933l-2.75 1.571v3.134l2.75-1.571zm1 3.134 2.75 1.571v-3.134L8.5 9.933zm.508-3.996 2.742 1.567 2.742-1.567-2.742-1.567zm2.242-2.433V3.504L8.5 5.076V8.21zM7.5 8.21V5.076L4.75 3.504v3.134zM5.258 2.643 8 4.21l2.742-1.567L8 1.076zM15 9.933l-2.75 1.571v3.134L15 13.067zM3.75 14.638v-3.134L1 9.933v3.134z"/>
                            </svg> Offerings
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="offeringsDropdown">
                            <li><Link className="dropdown-item" to="offerings"> Summary</Link></li>
                            <li><Link className="dropdown-item" to="ai-training">AI Training & Services</Link></li>
                            <li><Link className="dropdown-item" to="consulting">Consulting</Link></li>
                            <li><Link className="dropdown-item" to="workflow-modernization">Workflow Modernization</Link></li>
                            <li><Link className="dropdown-item" to="software">Engineering & Automation</Link></li>
                            <li><Link className="dropdown-item" to="it-works">IT Works</Link></li>
                        </ul>
                    </div>

                    {/* Portfolio Dropdown */}
                    <div className="nav-item dropdown px-3">
                        <button
                            className="nav-link dropdown-toggle"
                            id="portfolioDropdown"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                            type="button"
                        >
                            <span className="bi bi-list-nested-nav-menu" aria-hidden="true"></span> Portfolio
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="portfolioDropdown">
                            <li><Link className="dropdown-item" to="myprojects">Projects</Link></li>
                            <li><Link className="dropdown-item" to="myrecommendations">Recommendations</Link></li>
                            <li><Link className="dropdown-item" to="myblogs">Blogs</Link></li>
                        </ul>
                    </div>

                    {/* Resources Dropdown */}
                    <div className="nav-item dropdown px-3">
                        <button
                            className="nav-link dropdown-toggle"
                            id="resourcesDropdown"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                            type="button"
                        >
                            <span className="bi bi-journal-text-nav-menu" aria-hidden="true"></span> Resources
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="resourcesDropdown">
                            <li><Link className="dropdown-item" to="resumes">Resumes</Link></li>
                            <li><Link className="dropdown-item" to="legacy-problem-solving-addenda">PFDs & Addenda</Link></li>
                            <li><Link className="dropdown-item" to="legacy-engineering-texaco">Legacy Engineering at Texaco</Link></li>
                            <li><Link className="dropdown-item" to="curriculum-samples">Cirriculum Samples</Link></li>
                        </ul>
                    </div>

                    {/* Contact Dropdown */}
                    <div className="nav-item dropdown px-3">
                        <button
                            className="nav-link dropdown-toggle"
                            id="contactDropdown"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                            type="button"
                        >
                            <span className="bi bi-person-vcard-fill-nav-menu"></span> Contact
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="contactDropdown">
                            <li><Link className="dropdown-item" to="contact">My Contact Information</Link></li>
                            <li><Link className="dropdown-item" to="connect-collaborate">Connect & Collaborate</Link></li>
                        </ul>
                    </div>

                    <div className="nav-item px-3">
                        <Link className="nav-link" to="version">
                            <span className="bi bi-info-circle-fill-nav-menu"></span> Site Info
                        </Link>
                    </div>
                </nav>
                <Footer />
            </div>
        </>
    );
};

export default NavMenu;
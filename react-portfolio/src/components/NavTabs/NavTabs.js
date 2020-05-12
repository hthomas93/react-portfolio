import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./NavTabs.css"

function NavTabs() {
    const location = useLocation();

    return (
        <div className="navbar-top">
            <ul className="nav nav-tabs">
                {/* Home Nav Item */}
                <li className="nav-item">
                    <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
                        Home
                </Link>
                </li>

                {/* About Nav Item */}
                <li className="nav-item">
                    <Link
                        to="/about"
                        className={location.pathname === "/about" ? "nav-link active" : "nav-link"}>
                        About
                </Link>
                </li>

                {/* Portfolio Nav Item */}
                <li className="nav-item">
                    <Link
                        to="/portfolio"
                        className={location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}>
                        Portfolio
                </Link>
                </li>

                {/* Contact Nav Item */}
                <li className="nav-item">
                    <Link
                        to="/contact"
                        className={location.pathname === "/contact" ? "nav-link active" : "nav-link"}>
                        Contact
                </Link>
                </li>
            </ul>
        </div>
    );
}

export default NavTabs;
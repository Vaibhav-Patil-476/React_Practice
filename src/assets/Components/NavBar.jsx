import React from "react";

function Navbar() {
    return (
        <nav
            className="navbar navbar-expand-lg fixed-top" style={{ backgroundColor: "#e3f2fd" }} data-mdb-theme="light"
        >
            <div className="container-fluid">

                {/* Brand */}
                <a className="navbar-brand" href="#home">
                    MyWebsite
                </a>

                {/* Toggle Button */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Links */}
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className="nav-link active" href="#home">
                                Home
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#about">
                                About
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#gallery">
                                Gallery
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#contact">
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>

            </div>
        </nav>
    );
}

export default Navbar;
import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav
            className="navbar navbar-expand-lg fixed-top" style={{ backgroundColor: "#e3f2fd" }} data-mdb-theme="light"
        >
            <div className="container-fluid">

                {/* Brand */}
                <Link to ={"/"} className="navbar-brand" >
                    MyWebsite
                </Link>

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
                            <Link to ={"/home"} className="nav-link active ">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to ={"/about"} className="nav-link">
                                About
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to ={"/gallery"} className="nav-link">
                                Gallery
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to ={"/contect"} className="nav-link" >
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>

            </div>
        </nav>
    );
}

export default Navbar;
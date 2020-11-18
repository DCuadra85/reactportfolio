import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Navbar() {
    return (
        <nav className="navbar-expand-lg">
            <div>
                <ul className="navbar-main">
                    <li className="navbar-item">
                        <Link to="/aboutme">About Me</Link>
                    </li>
                    <li>
                        <Link to="/portfolio">portfolio</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;
import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import signature from "../../images/signature.png"

var style = {
    backgroundColor: "#BBBBBB",
    borderTop: "1px solid #E7E7E7",
    textAlign: "right",
    left: "0",
    bottom: "0",
    height: "80px",
    width: "100%",
}

var styletwo = {}

function Navbar() {
    return (

        <nav className="navbar-expand-lg" style={style}>
            {/* <Link className="navbar-brand" to="/">
                <img src={signature} className="navSignature " alt="Daniel Cuadra" />
            </Link> */}
            <div>
                <ul className="navbar-nav ml-auto w-100 justify-content-end">
                    <li className="nav-item">
                        <Link to="/aboutme">About Me</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/portfolio">Portfolio</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}




export default Navbar;
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

function Navbar() {
    return (

        <nav className="navbar-expand-lg" >

            <div>

                <ul className="navbar-nav ml-auto w-100 justify-content-end" style={style}>
                    <li className="nav-item">
                        <Link to="/aboutme">About Me</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/portfolio">Portfolio</Link>
                    </li>
                    <Link className="navbar-signature pt-3" to="/">
                        <img src={signature} className="navSignature " alt="Daniel Cuadra" />
                    </Link>
                </ul>
            </div>
        </nav>
    )
}




export default Navbar;
import React from "react";
import "./style.css";
import linkedin from "../../images/linkedinicon.png"

function Footer() {
    return (
        <footer className="footer">
            <div className="info-links">
            <a href="https://www.linkedin.com/in/daniel-cuadra-722968183/" target="_blank">
            <img src={linkedin}></img>
            </a>
            </div>
            <span> Copyright © Daniel Cuadra</span>
        </footer>
    )
}

export default Footer;
import React from "react";
import "./style.css";
import linkedin from "../../images/linkedinicon.png";
import indeed from "../../images/indeedpng.png";
import github from "../../images/githublogo.png";

var style = {
    backgroundColor: "#BBBBBB",
    borderTop: "1px solid #E7E7E7",
    textAlign: "center",
    padding: "20px",
    position: "fixed",
    left: "0",
    bottom: "0",
    height: "120px",
    width: "100%",
}

function Footer() {
    return (
        <footer className="footer" style={style}>
            <div className="info-links">
            <a href="https://www.linkedin.com/in/daniel-cuadra-722968183/" target="_blank">
            <img src={linkedin} alt="linkedin"></img>
            </a>
            <a href="https://my.indeed.com/p/danielmc-qomc3yk">
                <img src={indeed} alt="indeed"></img>
            </a>
            <a href="https://github.com/DCuadra85">
                <img src={github} alt="github"></img>
            </a>

            </div>
            <span> Copyright © Daniel Cuadra</span>
        </footer>
    )
}

export default Footer;
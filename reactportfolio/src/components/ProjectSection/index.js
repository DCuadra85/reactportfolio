import React from "react";
import "./style.css";

function Project(props) {
    return (
        <div className="project-card">
            <a href={props.link}>

                <div className="card col">

                    <h3 className="card-title">{props.title}</h3>
                    <p className="card-text">{props.description}</p>
                    
                    <div className="card-body">
                        <img src={props.image}
                            style={{ width: "200px", height: "200px" }}
                            className="card-img-top project-icons"
                            alt={props.title}
                            target="_blank" />
                    </div>
                </div>
            </a>
        </div>
    )
}

export default Project
import React, { Component } from "react";
import Header from "../components/Header";
import Container from "../components/Container";
import Project from "../components/ProjectSection"
import projects from "../projects.json";

class Portfolio extends Component {
    state ={
        projects
    };

    render () {
        return(
            <div>
                <Header>
                    Portfolio Page
                </Header>

                <Container>
                    {this.state.projects.map(project => (
                        <Project
                        id={project.id}
                        title={project.title}
                        image={project.image}
                        description={project.description}
                        link={project.link}
                        />
                    ))}
                </Container>
            </div>
            );
    }
}

export default Portfolio;
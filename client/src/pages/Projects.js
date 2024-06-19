import React, { useState, useEffect } from 'react';
import '../../src/Projects.css';
import { Helmet } from 'react-helmet';

const Projects = () => {
    const [projectList, setProjectList] = useState([]);

    useEffect(() => {
        fetch('data/Projects/projects.json')
            .then(response => response.json())
            .then(data => setProjectList(data))
            .catch(error => console.error('Error fetching projects:', error));
    }, []);

    return (
        <div className="container my-5">
            <Helmet>
                <title>Projects</title>
            </Helmet>
            <h1 className="section-title text-center mb-4">Projects</h1>
            <div className="d-flex flex-wrap justify-content-center">
                {projectList.map((project, index) => (
                    <div className="card project-card m-3" key={index}>
                        <img src={project.image} alt={project.title} />
                        <div className="card-body">
                            <h5 className="card-title">{project.title}</h5>
                            <p className="card-text">{project.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;

import React, {useEffect, useState} from 'react';
import '../../src/Projects.css';
import {Helmet} from 'react-helmet';

const Projects = () => {
    // Initialize state for the list of projects
    const [projectList, setProjectList] = useState([]);

    // Fetch projects data when the component mounts
    useEffect(() => {
        fetch('data/Projects/projects.json') // Fetch the JSON file
            .then(response => response.json()) // Parse the JSON response
            .then(data => setProjectList(data)) // Update state with the fetched data
            .catch(error => console.error('Error fetching projects:', error)); // Catch and log any errors
    }, []); // Empty dependency array ensures this effect runs only once

    return (
        <div className="container my-5"> {/* Main container for the projects content */}
            <Helmet>
                <title>Projects</title> {/* Set the document title */}
            </Helmet>
            <h1 className="section-title text-center mb-4">Projects</h1> {/* Display section title */}
            <div className="d-flex flex-wrap justify-content-center"> {/* Flex container for project cards */}
                {projectList.map((project, index) => (
                    <div className="card project-card m-3" key={index}> {/* Project card */}
                        <img src={project.image} alt={project.title}/> {/* Project image */}
                        <div className="card-body">
                            <h5 className="card-title">{project.title}</h5> {/* Project title */}
                            <p className="card-text">{project.description}</p> {/* Project description */}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects; // Export the Projects component

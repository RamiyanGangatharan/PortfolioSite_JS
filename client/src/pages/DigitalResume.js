import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../client/src/App.css';
import { Helmet } from "react-helmet";

const DigitalResume = () => {
    // Initialize state for various sections of the resume
    const [contact, setContact] = useState(null);
    const [experience, setExperience] = useState(null);
    const [education, setEducation] = useState(null);
    const [technicalSkills, setTechnicalSkills] = useState(null);
    const [coursework, setCoursework] = useState(null);
    const [projects, setProjects] = useState(null);
    const [home, setHome] = useState(null);

    // Fetch data for all sections when the component mounts
    useEffect(() => {
        Promise.all([
            fetch('data/resumeData/contact.json').then(response => response.json()),
            fetch('data/resumeData/experience.json').then(response => response.json()),
            fetch('data/resumeData/education.json').then(response => response.json()),
            fetch('data/resumeData/skills.json').then(response => response.json()),
            fetch('data/resumeData/coursework.json').then(response => response.json()),
            fetch('data/resumeData/projects.json').then(response => response.json()),
            fetch('data/Home/homepage.json').then(response => response.json())
        ])
            .then(([contactData, experienceData, educationData, skillsData, courseworkData, projectsData, homeData]) => {
                // Set state with the fetched data
                setContact(contactData);
                setExperience(experienceData.experience);
                setEducation(educationData.education);
                setTechnicalSkills(skillsData.technicalSkills);
                setCoursework(courseworkData.coursework);
                setProjects(projectsData.projects);
                setHome(homeData[0]); // Accessing the first object in the array
            })
            .catch(error => console.error('Error fetching data:', error)); // Catch and log any errors
    }, []); // Empty dependency array ensures this effect runs only once

    // Display loading message while data is being fetched
    if (!contact || !experience || !education || !technicalSkills || !coursework || !projects || !home) {
        return <div className="hero">Loading...</div>;
    }

    return (
        <div className="container mt-lg-5"> {/* Main container for the resume content */}
            <Helmet>
                <title>Resume</title> {/* Set the document title */}
            </Helmet>
            <header className="text-center mb-4">
                <h1 className="display-6">{home.name}</h1> {/* Display name from home data */}
                <nav>
                    <ul className="list-inline text-center">
                        {/* Iterate over contact information */}
                        {contact.contact.map((item, index) => (
                            <li className="list-inline-item" key={index}>
                                {item.type === "Phone" ? (
                                    <span className="btn btn-outline-dark">{item.number}</span>
                                ) : (
                                    <Link className="btn btn-outline-dark" to={item.url} target="_blank"
                                          rel="noopener noreferrer">{item.type}</Link>
                                )}
                            </li>
                        ))}
                    </ul>
                </nav>
            </header>

            {/* Experience Section */}
            <section className="mb-5">
                <h2 className="section-title">Experience</h2>
                <div className="section-content">
                    {experience.map((job, index) => (
                        <div className="card mb-3" key={index}>
                            <div className="card-body">
                                <h3 className="card-title">{job.title}</h3>
                                <h4 className="card-subtitle mb-2 text-muted">{job.company} ({job.duration})</h4>
                                <ul>
                                    {job.details.map((detail, i) => (
                                        <li key={i}>{detail}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Education Section */}
            <section className="mb-5">
                <h2 className="section-title">Education</h2>
                <div className="section-content">
                    {education.map((edu, index) => (
                        <div className="card mb-3" key={index}>
                            <div className="card-body">
                                <h3 className="card-title">{edu.institution}</h3>
                                <p className="card-text">Credential: {edu.credential}</p>
                                <p className="card-text">Program: {edu.program}</p>
                                <p className="card-text">Duration: {edu.duration}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Technical Skills Section */}
            <section className="mb-5">
                <h2 className="section-title">Technical Skills</h2>
                <div className="container table-responsive">
                    <table className="table table-bordered table-hover custom-table">
                        <thead className="table-dark">
                        <tr>
                            <th className="p-3">Languages</th>
                            <th className="p-3">Environments</th>
                            <th className="p-3">Frameworks</th>
                        </tr>
                        </thead>
                        <tbody>
                        {technicalSkills.map((skill, index) => (
                            <tr key={index}>
                                <td className="p-3">{skill.languages}</td>
                                <td className="p-3">{skill.environments || 'N/A'}</td>
                                <td className="p-3">{skill.frameworks || 'N/A'}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </section>

            {/* Relevant Coursework Section */}
            <section className="mb-5">
                <h2 className="section-title">Relevant Coursework</h2>
                <div className="section-content">
                    <ul>
                        {coursework.map((course, index) => (
                            <li key={index}>{course}</li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* Featured Projects Section */}
            <section className="mb-5">
                <h2 className="section-title">Featured Projects</h2>
                <div className="section-content">
                    {projects.map((project, index) => (
                        <div className="card mb-3" key={index}>
                            <div className="card-body">
                                <h3 className="card-title">{project.title}</h3>
                                <ul>
                                    {project.details.map((detail, i) => (
                                        <li key={i}>{detail}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <p className="text-center">References Available Upon Request</p>
        </div>
    );
};

export default DigitalResume; // Export the DigitalResume component

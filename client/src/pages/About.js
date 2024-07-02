import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const About = () => {
    // Initialize state for various sections of the about page
    const [introduction, setIntroduction] = useState(null);
    const [experience, setExperience] = useState(null);
    const [education, setEducation] = useState(null);
    const [hobbies, setHobbies] = useState(null);
    const [contact, setContact] = useState(null);

    // Fetch data for all sections when the component mounts
    useEffect(() => {
        Promise.all([
            fetch('./data/About/Introduction.json').then(response => response.json()),
            fetch('./data/About/experience.json').then(response => response.json()),
            fetch('./data/About/education.json').then(response => response.json()),
            fetch('./data/About/hobbies.json').then(response => response.json()),
            fetch('./data/About/contact.json').then(response => response.json())
        ])
            .then(([introData, expData, eduData, hobbiesData, contactData]) => {
                // Set state with the fetched data
                setIntroduction(introData.introduction);
                setExperience(expData.professionalExperience);
                setEducation(eduData.education);
                setHobbies(hobbiesData.hobbiesAndInterests);
                setContact(contactData.contact);
            })
            .catch(error => console.error('Error fetching data:', error)); // Catch and log any errors
    }, []); // Empty dependency array ensures this effect runs only once

    // Display loading message while data is being fetched
    if (!introduction || !experience || !education || !hobbies || !contact) {
        return <div className="hero">Loading...</div>;
    }

    return (
        <div className="container mt-5"> {/* Main container for the about page content */}
            <Helmet>
                <title>About</title> {/* Set the document title */}
            </Helmet>
            <h1>About</h1>
            <div className="accordion accordion-flush" id="aboutAccordion"> {/* Accordion for about page sections */}
                {/* Introduction Section */}
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingOne">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                data-bs-target="#flush-collapseOne" aria-expanded="true"
                                aria-controls="flush-collapseOne">
                            Introduction
                        </button>
                    </h2>
                    <div id="flush-collapseOne" className="accordion-collapse collapse show"
                         aria-labelledby="flush-headingOne" data-bs-parent="#aboutAccordion">
                        <div className="accordion-body text-wrap">
                            <div className="card">
                                <div className="card-body">
                                    {introduction.text.map((paragraph, index) => (
                                        <p className="card-text"
                                           key={index}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{paragraph}</p>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Professional Experience Section */}
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#flush-collapseTwo" aria-expanded="false"
                                aria-controls="flush-collapseTwo">Professional Experience
                        </button>
                    </h2>
                    <div id="flush-collapseTwo" className="accordion-collapse collapse"
                         aria-labelledby="flush-headingTwo" data-bs-parent="#aboutAccordion">
                        <div className="accordion-body text-wrap">
                            {experience.map((experience, index) => (
                                <div className="card mb-3" key={index}>
                                    <div className="card-body">
                                        <h5 className="card-title">{experience.title}</h5>
                                        <p className="card-text">{experience.details}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                {/* Education Section */}
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#flush-collapseThree" aria-expanded="false"
                                aria-controls="flush-collapseThree">Education
                        </button>
                    </h2>
                    <div id="flush-collapseThree" className="accordion-collapse collapse"
                         aria-labelledby="flush-headingThree" data-bs-parent="#aboutAccordion">
                        <div className="accordion-body text-wrap">
                            {education.map((edu, index) => (
                                <div className="card mb-3" key={index}>
                                    <div className="card-body">
                                        <h4 className="card-title">{edu.institution}</h4>
                                        <p><strong>Program:</strong> {edu.program}</p>
                                        <p><strong>Duration:</strong> {edu.duration}</p>
                                        <p><strong>Highlights:</strong></p>
                                        <ul>
                                            {edu.highlights.map((highlight, i) => (
                                                <li key={i}>{highlight}</li>
                                            ))}
                                        </ul>
                                        <p><strong>Courses Completed:</strong></p>
                                        <div className="row">
                                            {Object.keys(edu.courses).map((semester, i) => (
                                                <div className="col-md-6" key={i}>
                                                    <h5>{semester}</h5>
                                                    <ul>
                                                        {edu.courses[semester].map((course, j) => (
                                                            <li key={j}>{course}</li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                {/* Hobbies and Interests Section */}
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingSix">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#flush-collapseSix" aria-expanded="false"
                                aria-controls="flush-collapseSix">Hobbies and Interests
                        </button>
                    </h2>
                    <div id="flush-collapseSix" className="accordion-collapse collapse"
                         aria-labelledby="flush-headingSix" data-bs-parent="#aboutAccordion">
                        <div className="accordion accordion-flush" id="hobbiesAccordion">
                            {hobbies.map((hobby, index) => (
                                <div className="accordion-item" key={index}>
                                    <h2 className="accordion-header" id={`flush-heading${index}`}>
                                        <button className="accordion-button collapsed" type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target={`#flush-collapse${index}`} aria-expanded="false"
                                                aria-controls={`flush-collapse${index}`}>{hobby.title}
                                        </button>
                                    </h2>
                                    <div id={`flush-collapse${index}`} className="accordion-collapse collapse"
                                         aria-labelledby={`flush-heading${index}`} data-bs-parent="#hobbiesAccordion">
                                        <div className="accordion-body">
                                            {Array.isArray(hobby.description) ? (
                                                hobby.description.map((paragraph, i) => (
                                                    <p className="card-text" key={i} style={{textIndent: '2rem'}}>
                                                        {paragraph}
                                                    </p>
                                                ))
                                            ) : (
                                                <p className="card-text" style={{textIndent: '2rem'}}>
                                                    {hobby.description}
                                                </p>
                                            )}
                                            {hobby.academicLiterature && (
                                                <>
                                                    <h4 className="mt-4">Academic Literature</h4>
                                                    <div className="table-responsive mt-3">
                                                        <table className="table table-hover table-striped table-bordered custom-table">
                                                            <thead>
                                                            <tr>
                                                                <th scope="col">Book Name</th>
                                                                <th scope="col">Author</th>
                                                                <th scope="col">Status</th>
                                                            </tr>
                                                            </thead>
                                                            <tbody>
                                                            {hobby.academicLiterature.map((book, i) => (
                                                                <tr key={i}>
                                                                    <td>{book.bookName}</td>
                                                                    <td>{book.author}</td>
                                                                    <td>{book.status}</td>
                                                                </tr>
                                                            ))}
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </>
                                            )}
                                            {hobby.recreationalLiterature && (
                                                <>
                                                    <h4 className="mt-4">Recreational Literature</h4>
                                                    <div className="table-responsive mt-3">
                                                        <table className="table table-hover table-striped table-bordered custom-table">
                                                            <thead>
                                                            <tr>
                                                                <th scope="col">Book Name</th>
                                                                <th scope="col">Author</th>
                                                                <th scope="col">Status</th>
                                                            </tr>
                                                            </thead>
                                                            <tbody>
                                                            {hobby.recreationalLiterature.map((book, i) => (
                                                                <tr key={i}>
                                                                    <td>{book.bookName}</td>
                                                                    <td>{book.author}</td>
                                                                    <td>{book.status}</td>
                                                                </tr>
                                                            ))}
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </>
                                            )}
                                            {hobby.details && (
                                                <>
                                                    {hobby.details.map((detail, i) => (
                                                        <div className="card my-4 shadow-sm" key={i}>
                                                            <div className="card-body">
                                                                <h6 className="card-title">{detail.title}</h6>
                                                                <p className="card-text">{detail.description}</p>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                {/* Contact Section */}
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingSeven">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#flush-collapseSeven" aria-expanded="false"
                                aria-controls="flush-collapseSeven">Get in Touch
                        </button>
                    </h2>
                    <div id="flush-collapseSeven" className="accordion-collapse collapse"
                         aria-labelledby="flush-headingSeven" data-bs-parent="#aboutAccordion">
                        <div className="accordion-body text-wrap">
                            <div className="row justify-content-center">
                                {contact.email && (
                                    <div className="col-auto">
                                        <Link className="btn btn-outline-dark" to={`mailto:${contact.email}`}
                                              target="_blank" rel="noopener noreferrer">Email</Link>
                                    </div>
                                )}
                                {contact.linkedin && (
                                    <div className="col-auto">
                                        <Link className="btn btn-outline-dark" to={contact.linkedin} target="_blank"
                                              rel="noopener noreferrer">LinkedIn</Link>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About; // Export the About component

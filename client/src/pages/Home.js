import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Helmet} from 'react-helmet';

const Home = () => {
    // Initialize state for home data
    const [home, setHome] = useState(null);

    // Fetch home data when the component mounts
    useEffect(() => {
        fetch('data/Home/homepage.json') // Fetch the JSON file
            .then(response => response.json()) // Parse the JSON response
            .then(data => setHome(data[0])) // Update state with the first element of the fetched data
            .catch(error => console.error('Error fetching home data:', error)); // Catch and log any errors
    }, []); // Empty dependency array ensures this effect runs only once

    // Display loading message while data is being fetched
    if (!home) {
        return <div className="hero">Loading...</div>;
    }

    return (
        <div className="container-fluid bg-light text-center py-5"> {/* Main container with background color and padding */}
            <Helmet>
                <title>Home</title> {/* Set the document title */}
            </Helmet>
            <div className="hero"> {/* Hero section */}
                <h1 className="display-4">{home.name}</h1> {/* Display name from home data */}
                <p className="lead">{home.position}</p> {/* Display position from home data */}
                <h6>{home.location}</h6> {/* Display location from home data */}
                <br/>
                <div className="row justify-content-center"> {/* Centered row for links */}
                    <div className="col-auto">
                        <Link className="btn btn-outline-dark" to={home.links.resume} target="_blank"
                              rel="noopener noreferrer">Resume</Link> {/* Resume link */}
                    </div>
                    <div className="col-auto">
                        <a className="btn btn-outline-dark" href={home.links.linkedin} target="_blank"
                           rel="noopener noreferrer">LinkedIn</a> {/* LinkedIn link */}
                    </div>
                    <div className="col-auto">
                        <Link className="btn btn-outline-dark" to={home.links.contact} target="_blank"
                              rel="noopener noreferrer">Contact</Link> {/* Contact link */}
                    </div>
                    <div className="col-auto">
                        <Link className="btn btn-outline-dark" to={home.links.github} target="_blank"
                              rel="noopener noreferrer">GitHub</Link> {/* GitHub link */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home; // Export the Home component

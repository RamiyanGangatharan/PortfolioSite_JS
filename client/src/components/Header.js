import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
    // Initialize state for navbar links with an empty array
    const [navbarLinks, setNavbarLinks] = useState([]);

    // Fetch navbar links data from a JSON file when the component mounts
    useEffect(() => {
        fetch('data/components/header.json')
            // Parse the JSON response
            .then(response => response.json())
            // Update state with the fetched data
            .then(data => setNavbarLinks(data.navbar))
            // Log any errors
            .catch(error => console.error('Error fetching navbar links:', error));
        // Empty dependency array ensures this effect runs only once
    }, []);

    return (
        <header> {/* Header element for the navigation bar */}
            <nav className="navbar navbar-expand-lg navbar-light bg-light"> {/* Bootstrap classes for styling */}
                <div className="container-fluid"> {/* Container for navbar content */}
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                            aria-label="Toggle navigation"> {/* Button for toggling the navbar on small screens */}
                        <span className="navbar-toggler-icon"></span> {/* Icon for the toggler button */}
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav"> {/* Collapsible section of the navbar */}
                        <ul className="navbar-nav"> {/* Unordered list for navbar links */}
                            {navbarLinks.map((link, index) => ( // Iterate over navbar links
                                <li className="nav-item" key={index}> {/* List item for each link */}
                                    <Link className="nav-link" to={link.url}>{link.label}</Link> {/* Link component for navigation */}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header; // Export the Header component

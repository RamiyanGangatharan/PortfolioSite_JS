import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
    // Initialize state for footer data with default values
    const [footerData, setFooterData] = useState({ links: [], copyright: '' });

    // Fetch footer data from a JSON file when the component mounts
    useEffect(() => {
        fetch('data/components/footer.json')
            // Parse the JSON response
            .then(response => response.json())
            // Update state with the fetched data
            .then(data => setFooterData(data.footer))
            // Log any errors
            .catch(error => console.error('Error fetching footer data:', error));
        // Empty dependency array ensures this effect runs only once
    }, []);

    return (
        <footer className="bg-light text-center py-3 mt-auto"> {/* Footer element with Bootstrap classes */}
            <div className="container"> {/* Container for footer content */}
                <ul className="nav justify-content-center mb-3"> {/* Navigation list centered within the container */}
                    {footerData.links.map((link, index) => ( // Iterate over footer links
                        <li className="nav-item" key={index}> {/* List item for each link */}
                            <Link className="nav-link" to={link.url}>{link.label}</Link> {/* Link component for navigation */}
                        </li>
                    ))}
                </ul>
                <hr className="my-2"/> {/* Horizontal line for separation */}
                <p className="mb-0">{footerData.copyright}</p> {/* Copyright text */}
            </div>
        </footer>
    );
};

export default Footer; // Export the Footer component

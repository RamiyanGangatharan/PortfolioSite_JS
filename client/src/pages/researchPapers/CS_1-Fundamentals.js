import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../paper.css'

const CSFundamentals = () => {
    // Initialize state for fetched data and error handling
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    // Fetch data from JSON file when the component mounts
    useEffect(() => {
        fetch('/data/Research/cs1.json')
            // Parse the JSON response
            .then(response => response.json())
            // Update state with the fetched data
            .then(data => setData(data[0]))
            // Catch and set any errors
            .catch(error => setError(error));
        // Empty dependency array ensures this effect runs only once
    }, []);

    // Display error message if there's an error
    if (error) {
        return <div className="container my-5 text-center text-danger">Error: {error.message}</div>;
    }

    // Display loading message while data is being fetched
    if (!data) {
        return <div className="container my-5 text-center">Loading...</div>;
    }

    return (
        <div className="paper"> {/* Main container for the paper content */}
            <div className="page-break-before: always"> {/* Page break for printing */}
                <div className="APA_Title"> {/* Container for the title and author info */}
                    <h1 className="section-title">{data.title}</h1> {/* Title of the paper */}
                    <p className='text-body-secondary'><strong>Author:</strong> {data.author}</p> {/* Author name */}
                    <p className='section-content'><strong>Date of Completion:</strong> {data.date_of_completion}</p> {/* Completion date */}
                </div>
            </div>

            {/* Iterate over sections of the paper */}
            {data.sections.map((section, index) => (
                <div key={index}>
                    <div className="page-break-before: always"> {/* Page break for printing */}
                        <h2 className="section-title">{section.section_title}</h2> {/* Section title */}
                        {/* Check if the content is an array (references) or a string (paragraphs) */}
                        {Array.isArray(section.content) ? (
                            <ul> {/* List of references */}
                                {section.content.map((reference, i) => (
                                    <li key={i} className="section-content text-justify">
                                        {reference.author} ({reference.date}). <em>{reference.title}</em>. {reference.source}. <a
                                        href={reference.link}>{reference.link}</a>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            // Split content into paragraphs and display each one
                            section.content.split('\n').map((paragraph, i) => (
                                <p key={i}
                                   className="section-content text-justify">&nbsp; &nbsp; &nbsp; &nbsp;{paragraph}</p>
                            ))
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CSFundamentals; // Export the CSFundamentals component
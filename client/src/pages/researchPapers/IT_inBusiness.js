import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../paper.css';

const ITBusiness = () => {
    // Initialize state for fetched data and error handling
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    // Fetch data from JSON file when the component mounts
    useEffect(() => {
        // Fetch the JSON file
        fetch('/data/Research/ITBusinessReport.json')
            // Parse the JSON response
            .then(response => response.json())
            .then(data => {
                // Log the data to see what it looks like
                console.log(data);
                // Update state with the first element of the fetched data
                setData(data[0]);
            })
            .catch(error => {
                // Catch and log any errors
                console.error('Error fetching data:', error);
                // Set the error state
                setError(error);
            });
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

    // Filter out the bibliography section to render it separately
    const mainSections = data.sections.filter(section => section.section_title !== "Annotated Bibliography");
    const bibliography = data.sections.find(section => section.section_title === "Annotated Bibliography");

    // Check if the bibliography section exists and has entries
    if (!bibliography || !Array.isArray(bibliography.entries)) {
        return <div className="container my-5 text-center text-warning">Bibliography format error or missing entries</div>;
    }

    return (
        <div className="paper"> {/* Main container for the paper content */}
            <div className="APA_Title"> {/* Page break for printing */}
                <h1>{data.title}</h1> {/* Title of the paper */}
                <p><strong>Author:</strong> {data.author}</p> {/* Author name */}
                <p><strong>Date of Completion:</strong> {data.date_of_completion}</p> {/* Completion date */}
            </div>

            {/* Iterate over main sections of the paper */}
            {mainSections.map((section, index) => (
                <div key={index} className="page-break-before: always"> {/* Page break for printing */}
                    <h2 className="section-title">{section.section_title}</h2> {/* Section title */}
                    {/* Check if the content is a string (paragraphs) */}
                    {typeof section.content === 'string' ?
                        // Split content into paragraphs and display each one
                        section.content.split('\n').map((paragraph, i) => (
                            <p key={i} className="section-content text-justify">{paragraph}</p>
                        )) : <p className="section-content text-justify">{section.content}</p> /* Display single content */
                    }
                </div>
            ))}

            {/* Render the bibliography section at the bottom */}
            <div className="page-break-before: always"> {/* Page break for printing */}
                <h2 className="section-title">{bibliography.section_title}</h2> {/* Bibliography section title */}
                {bibliography.entries.map((entry, index) => (
                    <div key={index} className="section-content"> {/* Container for each bibliography entry */}
                        <p><strong>Author(s):</strong> {entry.author}</p> {/* Entry author */}
                        <p><strong>Title:</strong> {entry.title}</p> {/* Entry title */}
                        <p><strong>Year:</strong> {entry.year}</p> {/* Entry year */}
                        <p><strong>Source:</strong> {entry.source}</p> {/* Entry source */}
                        <p><strong>URL:</strong> <a href={entry.url}>{entry.url}</a></p> {/* Entry URL */}
                        <p><strong>Notes:</strong> {entry.notes}</p> {/* Entry notes */}
                        <br/>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ITBusiness; // Export the IT_Business component


import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../paper.css';

const IT_Business = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('/data/Research/ITBusinessReport.json')
            .then(response => response.json())
            .then(data => {
                console.log(data); // Log the data to see what it looks like
                setData(data[0]); // Assuming the JSON array has one object, and we are taking the first one
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                setError(error);
            });
    }, []);

    if (error) {
        return <div className="container my-5 text-center text-danger">Error: {error.message}</div>;
    }

    if (!data) {
        return <div className="container my-5 text-center">Loading...</div>;
    }

    // Filter out the bibliography section to render it separately
    const mainSections = data.sections.filter(section => section.section_title !== "Annotated Bibliography");
    const bibliography = data.sections.find(section => section.section_title === "Annotated Bibliography");

    if (!bibliography || !Array.isArray(bibliography.entries)) {
        return <div className="container my-5 text-center text-warning">Bibliography format error or missing entries</div>;
    }

    return (
        <div className="paper">
            <div className="page-break-before: always">
                <h1 className="APA_Title">{data.title}</h1>
                <p className='text-body-secondary'><strong>Author:</strong> {data.author}</p>
                <p className='text-body-secondary'><strong>Date of Completion:</strong> {data.date_of_completion}</p>
            </div>

            {mainSections.map((section, index) => (
                <div key={index} className="page-break-before: always">
                    <h2 className="section-title">{section.section_title}</h2>
                    {typeof section.content === 'string' ?
                        section.content.split('\n').map((paragraph, i) => (
                            <p key={i} className="section-content text-justify">{paragraph}</p>
                        )) : <p className="section-content text-justify">{section.content}</p>
                    }
                </div>
            ))}

            {/* Render the bibliography section at the bottom */}
            <div className="page-break-before: always">
                <h2 className="section-title">{bibliography.section_title}</h2>
                {bibliography.entries.map((entry, index) => (
                    <div key={index} className="section-content">
                        <p><strong>Author(s):</strong> {entry.author}</p>
                        <p><strong>Title:</strong> {entry.title}</p>
                        <p><strong>Year:</strong> {entry.year}</p>
                        <p><strong>Source:</strong> {entry.source}</p>
                        <p><strong>URL:</strong> <a href={entry.url}>{entry.url}</a></p>
                        <p><strong>Notes:</strong> {entry.notes}</p>
                        <br/>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default IT_Business;

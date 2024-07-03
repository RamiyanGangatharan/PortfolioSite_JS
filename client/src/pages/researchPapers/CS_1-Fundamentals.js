import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../paper.css'

const CSFundamentals = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('/data/Research/cs1.json')
            .then(response => response.json())
            .then(data => setData(data[0]))  // Assuming the JSON array has one object for CS Fundamentals
            .catch(error => setError(error));
    }, []);

    if (error) {
        return <div className="container my-5 text-center text-danger">Error: {error.message}</div>;
    }

    if (!data) {
        return <div className="container my-5 text-center">Loading...</div>;
    }

    return (
        <div className="paper">
            <div className="page-break-before: always">
                <div className="APA_Title">
                    <h1 className="section-title">{data.title}</h1>
                    <p className='text-body-secondary'><strong>Author:</strong> {data.author}</p>
                    <p className='section-content'><strong>Date of Completion:</strong> {data.date_of_completion}</p>
                </div>
            </div>

            {data.sections.map((section, index) => (
                <div key={index}>
                    <div className="page-break-before: always">
                    <h2 className="section-title">{section.section_title}</h2>
                    {Array.isArray(section.content) ? (
                        <ul>
                            {section.content.map((reference, i) => (
                                <li key={i} className="section-content text-justify">
                                    {reference.author} ({reference.date}). <em>{reference.title}</em>. {reference.source}. <a
                                    href={reference.link}>{reference.link}</a>
                                </li>
                            ))}
                        </ul>
                    ) : (
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

export default CSFundamentals;

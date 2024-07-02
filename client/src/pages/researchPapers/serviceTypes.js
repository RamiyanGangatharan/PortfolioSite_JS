import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../paper.css';

const ServiceTypes = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/data/Research/serviceTypes.json');
                if (!response.ok) {
                    throw new Error('Network response was not ok ' + response.statusText);
                }
                const data = await response.json();
                console.log("Fetched data:", data);
                setData(data[0]);
            } catch (error) {
                console.error("Error fetching the JSON:", error);
                setError(error);
            }
        };

        fetchData();
    }, []);

    if (error) {
        return <div className="container my-5 text-center text-danger">Error: {error.message}</div>;
    }

    if (!data) {
        return <div className="container my-5 text-center">Loading...</div>;
    }

    return (
        <div className="paper">
            <div className="page-break-before always">
                <div className="APA_Title">
                    <h1 className="section-title">{data.title}</h1>
                    <p className="section-content">{data.author}</p>
                    <p className="section-content">{data.institution}</p>
                    <p className="section-content">{data.faculty}</p>
                    <p className="section-content">{data.program}</p>
                    <p className="section-content">{data.course}</p>
                    <p className="section-content">{data.professor}</p>
                    <p className="section-content">{data.date}</p>
                </div>
            </div>
            {data.sections.map((section, index) => (
                <div key={index}>
                    <div className="page-break-before always">
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
                                <p key={i} className="section-content text-justify">
                                    &nbsp; &nbsp; &nbsp; &nbsp;{paragraph}
                                </p>
                            ))
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ServiceTypes;

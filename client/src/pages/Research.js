import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

// Component for displaying the header of the research page
const ResearchHeader = ({ header, subheader }) => (
    <header className="text-center mb-4">
        <h1>{header}</h1>
        <p className="lead">{subheader}</p>
    </header>
);

// Component for displaying the research table
const ResearchTable = ({ researchList }) => (
    <div className="table-responsive">
        <table className="table table-bordered table-striped">
            <thead className="thead-dark">
            <tr>
                <th scope="col">#</th>
                <th scope="col">Title</th>
                <th scope="col">Date</th>
                <th scope="col">Link</th>
            </tr>
            </thead>
            <tbody>
            {researchList.map((paper, index) => (
                <tr key={index}>
                    <th scope="row">{paper.id}</th>
                    <td>{paper.title}</td>
                    <td>{paper.date}</td>
                    <td>
                        <Link to={paper.link} className="text-decoration-none">Read Paper</Link>
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
    </div>
);

// Main Research component
const Research = () => {
    // Initialize state for research list, content, loading status, and error handling
    const [researchList, setResearchList] = useState([]);
    const [researchContent, setResearchContent] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetch data when the component mounts
    useEffect(() => {
        const fetchData = async () => {
            try {
                const researchResponse = await fetch('data/Research/research.json'); // Fetch research list
                const researchData = await researchResponse.json();
                setResearchList(researchData);

                const contentResponse = await fetch('data/Research/research_content.json'); // Fetch research content
                const contentData = await contentResponse.json();
                setResearchContent(contentData);

                setLoading(false); // Set loading to false after data is fetched
            } catch (err) {
                setError(err.message); // Set error message if there's an error
                setLoading(false);
            }
        };

        fetchData(); // Call the fetchData function
    }, []); // Empty dependency array ensures this effect runs only once

    // Display loading message while data is being fetched
    if (loading) {
        return <div className="container my-5 text-center">Loading...</div>;
    }

    // Display error message if there's an error
    if (error) {
        return <div className="container my-5 text-center text-danger">Error: {error}</div>;
    }

    return (
        <div className="container my-5"> {/* Main container for the research content */}
            <Helmet>
                <title>Research</title> {/* Set the document title */}
            </Helmet>
            {/* Map over research content to display each header */}
            {researchContent.map((item, index) => (
                <ResearchHeader key={index} header={item.header} subheader={item.subheader} />
            ))}
            <ResearchTable researchList={researchList} /> {/* Display the research table */}
        </div>
    );
};

export default Research; // Export the Research component
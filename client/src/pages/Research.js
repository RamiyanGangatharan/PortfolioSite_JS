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
                <th scope="col">Type</th>
                <th scope="col">Title</th>
                <th scope="col">Date</th>
                <th scope="col">Link</th>
            </tr>
            </thead>
            <tbody>
            {researchList.map((paper, index) => (
                <tr key={index}>
                    <th scope="row">{paper.id}</th>
                    <td>{paper.type}</td>
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

// Component for displaying the notes
const Notes = ({ note_1, note_2, note_3 }) => (
    <div className="card mb-4">
        <div className="card-body">
            <div className="mb-0 text-body-secondary small text-muted">
                <p className="m-0 p-0">{note_1}</p>
                <p className="m-0 p-0">{note_2}</p>
                <p className="m-0 p-0">{note_3}</p>
            </div>
        </div>
    </div>
);

// Main Research component
const Research = () => {
    const [researchList, setResearchList] = useState([]);
    const [researchContent, setResearchContent] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const researchResponse = await fetch('data/Research/research.json');
                const researchData = await researchResponse.json();
                setResearchList(researchData);

                const contentResponse = await fetch('data/Research/research_content.json');
                const contentData = await contentResponse.json();
                setResearchContent(contentData);

                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return <div className="container my-5 text-center">Loading...</div>;
    }

    if (error) {
        return <div className="container my-5 text-center text-danger">Error: {error}</div>;
    }

    return (
        <div className="container my-5">
            <Helmet>
                <title>Research</title>
            </Helmet>
            {researchContent.map((item, index) => (
                <div key={index}>
                    <ResearchHeader header={item.header} subheader={item.subheader} />
                    <Notes note_1={item.note_1} note_2={item.note_2} note_3={item.note_3} />
                </div>
            ))}
            <ResearchTable researchList={researchList} />
        </div>
    );
};

export default Research;

import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const ResearchHeader = ({ header, subheader }) => (
    <header className="text-center mb-4">
        <h1>{header}</h1>
        <p className="lead">{subheader}</p>
    </header>
);

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
                <ResearchHeader key={index} header={item.header} subheader={item.subheader} />
            ))}
            <ResearchTable researchList={researchList} />
        </div>
    );
};

export default Research;

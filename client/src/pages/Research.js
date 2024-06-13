import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Research = () => {
    const [researchList, setResearchList] = useState([]);

    useEffect(() => {
        fetch('data/Research/research.json')
            .then(response => response.json())
            .then(data => setResearchList(data))
            .catch(error => console.error('Error fetching research papers:', error));
    }, []);

    return (
        <div className="container my-5">
            <header className="text-center mb-4">
                <h1>My Featured Research Papers</h1>
                <p className="lead">Explore the research papers I have completed during my college studies.</p>
            </header>
            <div className="table-responsive">
                <table className="table table-bordered table-striped">
                    <thead className="thead-dark">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Title</th>
                        <th scope="col">Link</th>
                    </tr>
                    </thead>
                    <tbody>
                    {researchList.map((paper, index) => (
                        <tr key={index}>
                            <th scope="row">{paper.id}</th>
                            <td>{paper.title}</td>
                            <td><a href={paper.link} className="text-decoration-none">Read Paper</a></td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Research;

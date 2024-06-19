import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Helmet} from "react-helmet";

const Research = () => {
    const [researchList, setResearchList] = useState([]);
    const [researchcontent, setResearchContent] = useState([]);

    useEffect(() => {
        fetch('data/Research/research.json')
            .then(response => response.json())
            .then(data => setResearchList(data))
            .catch(error => console.error('Error fetching research papers:', error));
    }, []);

    useEffect( () => {
        fetch('data/Research/research_content.json')
            .then(response => response.json())
            .then(data => setResearchContent(data))
            .catch(error => console.error('Error fetching page content:', error));
    }, []);

    return (
        <div className="container my-5">
            <Helmet>
                <title>Research</title>
            </Helmet>
            {researchcontent.map((item) => (
                <header className="text-center mb-4">
                    <h1>{item.header}</h1>
                    <p className="lead">{item.subheader}</p>
                </header>
            ))}
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
// the plan here is to put all my papers I have done at college over here and convert them from word doc to HTML.
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Research = () => {
    return (
        <div className="container my-5">
            <header className="text-center mb-4">
                <h1>My Research Papers</h1>
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
                    <tr>
                        <th scope="row">1</th>
                        <td>Research Paper 1</td>
                        <td><a href="research-papers/paper1.html" className="text-decoration-none">Read Paper</a></td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Research Paper 2</td>
                        <td><a href="research-papers/paper2.html" className="text-decoration-none">Read Paper</a></td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Research Paper 3</td>
                        <td><a href="research-papers/paper3.html" className="text-decoration-none">Read Paper</a></td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Research;


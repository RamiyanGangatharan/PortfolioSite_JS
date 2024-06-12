import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
    return (
        <div className="container-fluid bg-light text-center py-5">
            <div className="hero">
                <h1 className="display-4">Ramiyan Gangatharan</h1>
                <p className="lead">Full Stack Developer</p>
                <h6>Toronto, ON</h6>
                <br/>
                <div className="row justify-content-center">
                    <div className="col-auto">
                        <Link className="btn btn-outline-dark" to="/digitalResume" target="_blank" rel="noopener noreferrer">Resume</Link>
                    </div>
                    <div className="col-auto">
                        <Link className="btn btn-outline-dark" to="https://www.linkedin.com/in/ramiyan-gangatharan/" target="_blank" rel="noopener noreferrer">LinkedIn</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;

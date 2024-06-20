import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Helmet} from 'react-helmet';

const Home = () => {
    const [home, setHome] = useState(null);

    useEffect(() => {
        fetch('data/Home/homepage.json')
            .then(response => response.json())
            .then(data => setHome(data[0]))  // Accessing the first object in the array
            .catch(error => console.error('Error fetching projects:', error));
    }, []);

    if (!home) {
        return <div className="hero">Loading...</div>;
    }

    return (
        <div className="container-fluid bg-light text-center py-5">
            <Helmet>
                <title>Home</title>
            </Helmet>
            <div className="hero">
                <h1 className="display-4">{home.name}</h1>
                <p className="lead">{home.position}</p>
                <h6>{home.location}</h6>
                <br/>
                <div className="row justify-content-center">
                    <div className="col-auto">
                        <Link className="btn btn-outline-dark" to={home.links.resume} target="_blank"
                              rel="noopener noreferrer">Resume</Link>
                    </div>
                    <div className="col-auto">
                        <a className="btn btn-outline-dark" href={home.links.linkedin} target="_blank"
                           rel="noopener noreferrer">LinkedIn</a>
                    </div>
                    <div className="col-auto">
                        <Link className="btn btn-outline-dark" to={home.links.contact} target="_blank"
                              rel="noopener noreferrer">Contact</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;

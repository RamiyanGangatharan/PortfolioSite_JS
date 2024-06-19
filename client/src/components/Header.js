import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
    const [navbarLinks, setNavbarLinks] = useState([]);

    useEffect(() => {
        fetch('data/components/header.json')
            .then(response => response.json())
            .then(data => setNavbarLinks(data.navbar))
            .catch(error => console.error('Error fetching navbar links:', error));
    }, []);

    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            {navbarLinks.map((link, index) => (
                                <li className="nav-item" key={index}>
                                    <Link className="nav-link" to={link.url}>{link.label}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;

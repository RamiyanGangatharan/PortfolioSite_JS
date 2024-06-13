import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
    const [footerData, setFooterData] = useState({ links: [], copyright: '' });

    useEffect(() => {
        fetch('data/components/footer.json')
            .then(response => response.json())
            .then(data => setFooterData(data.footer))
            .catch(error => console.error('Error fetching footer data:', error));
    }, []);

    return (
        <footer className="bg-light text-center py-3 mt-auto">
            <div className="container">
                <ul className="nav justify-content-center mb-3">
                    {footerData.links.map((link, index) => (
                        <li className="nav-item" key={index}>
                            <Link className="nav-link" to={link.url}>{link.label}</Link>
                        </li>
                    ))}
                </ul>
                <hr className="my-2"/>
                <p className="mb-0">{footerData.copyright}</p>
            </div>
        </footer>
    );
};

export default Footer;

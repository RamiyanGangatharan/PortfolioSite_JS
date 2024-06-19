import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Helmet} from "react-helmet";

const Contact = () => {
    const [subject, setSubject] = useState('');
    const [content, setContent] = useState('');
    const [showPopup, setShowPopup] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        window.location.href = `mailto:ramiyan2185@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(content)}`;

        // Show popup
        setShowPopup(true);
        setTimeout(() => setShowPopup(false), 3000); // Hide popup after 3 seconds

        // Clear form fields
        setSubject('');
        setContent('');
    };

    return (
        <div className="container mt-5">
            <Helmet>
                <title>Contact</title>
            </Helmet>
            <h1 className="mb-4 text-center">Contact Page</h1>
            <p className="text-center">Get in touch with me.</p>
            <form className="mx-auto" style={{ maxWidth: '600px' }} onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="subjectHelp" className="form-label">Subject</label>
                    <input
                        type="text"
                        className="form-control"
                        id="subjectHelp"
                        name="subject"
                        placeholder="Type subject here"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="contentHelp" className="form-label">Content</label>
                    <textarea
                        className="form-control"
                        id="contentHelp"
                        name="content"
                        rows="10"
                        placeholder="Type your message here"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        required
                    ></textarea>
                </div>
                <button type="submit" className="btn btn-outline-dark w-100">Contact Me</button>
                <p className="text-center">
                    If this does not work, connect with me on{' '}
                    <a href="https://www.linkedin.com/in/ramiyan-gangatharan/">LinkedIn</a>
                </p>
            </form>
            {showPopup && (
                <div className="alert alert-success mt-4 text-center" role="alert">
                    Message prepared successfully!
                </div>
            )}
        </div>
    );
};

export default Contact;

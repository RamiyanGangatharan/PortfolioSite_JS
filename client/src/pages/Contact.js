import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Helmet} from "react-helmet";

const Contact = () => {
    // Initialize state for form fields and popup visibility
    const [subject, setSubject] = useState('');
    const [content, setContent] = useState('');
    const [showPopup, setShowPopup] = useState(false);

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission behavior

        // Create mailto link with subject and content
        window.location.href = `mailto:ramiyan2185@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(content)}`;

        // Show popup message
        setShowPopup(true);
        setTimeout(() => setShowPopup(false), 3000); // Hide popup after 3 seconds

        // Clear form fields
        setSubject('');
        setContent('');
    };

    return (
        <div className="container mt-5"> {/* Main container for the contact page content */}
            <Helmet>
                <title>Contact</title> {/* Set the document title */}
            </Helmet>
            <div className="row justify-content-center">
                <div className="col-lg-8">
                    <h1 className="mb-4 text-center text-dark">Contact Page</h1>
                    <p className="text-center text-muted">Get in touch with me.</p>
                    <form onSubmit={handleSubmit}> {/* Form submission handler */}
                        <div className="mb-3">
                            <label htmlFor="subjectHelp" className="form-label text-dark">Subject</label>
                            <input
                                type="text"
                                className="form-control border-dark"
                                id="subjectHelp"
                                name="subject"
                                placeholder="Type subject here"
                                value={subject}
                                onChange={(e) => setSubject(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="contentHelp" className="form-label text-dark">Content</label>
                            <textarea
                                className="form-control border-dark"
                                id="contentHelp"
                                name="content"
                                rows="10"
                                placeholder="Type your message here"
                                value={content}
                                onChange={(e) => setContent(e.target.value)}
                                required
                            ></textarea>
                        </div>
                        <button type="submit" className="btn btn-dark w-100">Contact Me</button>
                        <p className="text-center mt-3 text-dark">
                            If this does not work, connect with me on{' '}
                            <a href="https://www.linkedin.com/in/ramiyan-gangatharan/" target="_blank"
                               rel="noopener noreferrer">
                                LinkedIn
                            </a>
                        </p>
                    </form>
                    {showPopup && (
                        <div className="alert alert-success mt-4 text-center" role="alert">
                            Message prepared successfully!
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Contact; // Export the Contact component

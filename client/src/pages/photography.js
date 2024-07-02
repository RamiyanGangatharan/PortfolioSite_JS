import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Helmet} from 'react-helmet';
import '../../src/Photography.css';

const Photography = () => {
    // Initialize state for content, photos, visibility, loading, and error handling
    const [content, setContent] = useState(null);
    const [photos, setPhotos] = useState([]);
    const [visiblePhotos, setVisiblePhotos] = useState(3); // Number of photos to show initially
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetch content and photos data when the component mounts
    useEffect(() => {
        Promise.all([
            fetch('/data/Photography/content.json')
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok ' + response.statusText);
                    }
                    return response.json();
                })
                .then(data => {
                    if (data.length === 0) {
                        throw new Error('Content data is empty');
                    }
                    return data;
                }),
            fetch('/data/Photography/photos.json')
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok ' + response.statusText);
                    }
                    return response.json();
                })
                .then(data => {
                    if (data.length === 0) {
                        throw new Error('Photos data is empty');
                    }
                    return data;
                })
        ])
            .then(([contentData, photosData]) => {
                setContent(contentData[0]);
                setPhotos(photosData);
                setLoading(false);
            })
            .catch(error => {
                console.error("Error fetching data", error);
                setError(error);
                setLoading(false);
            });
    }, []);

    // Load more photos on button click
    const loadMorePhotos = () => {
        setVisiblePhotos(prevVisiblePhotos => prevVisiblePhotos + 3);
    };

    // Display loading message while data is being fetched
    if (loading) {
        return <p>Loading content...</p>;
    }

    // Display error message if there's an error
    if (error) {
        return <p>Error loading content: {error.message}</p>;
    }

    return (
        <div className="container my-5"> {/* Main container for the photography content */}
            <Helmet>
                <title>{content ? content.title : 'Photography'}</title> {/* Set the document title */}
            </Helmet>
            <h1 className="section-title text-center mb-4">{content ? content.title : 'Photography'}</h1> {/* Display title */}
            <h5 className="section-content text-lg-center">{content.subtitle}</h5> {/* Display subtitle */}
            <br/>
            <div className="gallery-container"> {/* Container for the gallery */}
                {photos.slice(0, visiblePhotos).map((photo, index) => (
                    <div key={index} className="gallery-item"> {/* Gallery item for each photo */}
                        <img
                            src={photo.src}
                            alt={photo.alt}
                            className="img-fluid"
                        />
                        <div className="card-body">
                            <p className="card-text">{photo.alt}</p>
                        </div>
                    </div>
                ))}
            </div>
            {visiblePhotos < photos.length && (
                <button className="load-more-btn" onClick={loadMorePhotos}>
                    Load More
                </button>
            )}
        </div>
    );
};

export default Photography; // Export the Photography component
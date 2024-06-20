import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Helmet} from 'react-helmet';
import '../../src/Photography.css'; // Import the new CSS file

const Photography = () => {
    const [content, setContent] = useState(null);
    const [photos, setPhotos] = useState([]);
    const [visiblePhotos, setVisiblePhotos] = useState(3); // Number of photos to show initially
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

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
                setContent(contentData[0]); // Assuming content.json contains an array and you need the first item
                setPhotos(photosData); // Assuming photos.json contains an array of photo objects
                setLoading(false); // Set loading to false once data is fetched
            })
            .catch(error => {
                console.error("Error fetching data", error);
                setError(error);
                setLoading(false); // Set loading to false in case of an error
            });
    }, []);

    const loadMorePhotos = () => {
        setVisiblePhotos(prevVisiblePhotos => prevVisiblePhotos + 3);
    };

    if (loading) {
        return <p>Loading content...</p>;
    }

    if (error) {
        return <p>Error loading content: {error.message}</p>;
    }

    return (
        <div className="container my-5">
            <Helmet>
                <title>{content ? content.title : 'Photography'}</title>
            </Helmet>
            <h1 className="section-title text-center mb-4">{content ? content.title : 'Photography'}</h1>
            <h5 className="section-content text-lg-center">{content.subtitle}</h5>
            <br/>
            <div className="gallery-container">
                {photos.slice(0, visiblePhotos).map((photo, index) => (
                    <div key={index} className="gallery-item">
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

export default Photography;
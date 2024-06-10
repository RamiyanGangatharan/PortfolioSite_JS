import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const About = () => {
    return (
        <div className="container mt-5">
            <h1>About</h1>
            <div className="accordion accordion-flush" id="aboutAccordion">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingOne">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="true" aria-controls="flush-collapseOne">
                            Introduction
                        </button>
                    </h2>
                    <div id="flush-collapseOne" className="accordion-collapse collapse show" aria-labelledby="flush-headingOne" data-bs-parent="#aboutAccordion">
                        <div className="accordion-body">
                            <p>

                            </p>
                        </div>
                    </div>
                </div>

                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                            Professional Experience
                        </button>
                    </h2>
                    <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#aboutAccordion">
                        <div className="accordion-body">
                            <p>

                            </p>
                        </div>
                    </div>
                </div>

                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                            Education
                        </button>
                    </h2>
                    <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#aboutAccordion">
                        <div className="accordion-body">
                            <p>

                            </p>
                        </div>
                    </div>
                </div>

                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingFour">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                            Technical Skills
                        </button>
                    </h2>
                    <div id="flush-collapseFour" className="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#aboutAccordion">
                        <div className="accordion-body">
                            <p>

                            </p>
                        </div>
                    </div>
                </div>

                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingFive">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                            Projects and Achievements
                        </button>
                    </h2>
                    <div id="flush-collapseFive" className="accordion-collapse collapse" aria-labelledby="flush-headingFive" data-bs-parent="#aboutAccordion">
                        <div className="accordion-body">
                            <p>

                            </p>
                        </div>
                    </div>
                </div>

                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingSix">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseSix">
                            Hobbies and Interests
                        </button>
                    </h2>
                    <div id="flush-collapseSix" className="accordion-collapse collapse" aria-labelledby="flush-headingSix" data-bs-parent="#aboutAccordion">
                        <div className="accordion-body">
                            <p>

                            </p>
                        </div>
                    </div>
                </div>

                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingSeven">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSeven" aria-expanded="false" aria-controls="flush-collapseSeven">
                            Get in Touch
                        </button>
                    </h2>
                    <div id="flush-collapseSeven" className="accordion-collapse collapse" aria-labelledby="flush-headingSeven" data-bs-parent="#aboutAccordion">
                        <div className="accordion-body">
                            <p>

                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default About;

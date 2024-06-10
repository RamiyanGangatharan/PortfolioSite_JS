import React from 'react';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../client/src/App.css';

const DigitalResume = () => {
    return (
        <div className="container mt-lg-5">
            <header className="text-center mb-4">
                <h1 className="display-6">Ramiyan Gangatharan</h1>
                <nav>
                    <ul className="list-inline text-center">
                        <li className="list-inline-item">
                            <Link className="btn btn-outline-dark" to="https://www.linkedin.com/in/ramiyan-gangatharan/"
                                  target="_blank" rel="noopener noreferrer">LinkedIn</Link>
                        </li>
                        <li className="list-inline-item">
                            <Link className="btn btn-outline-dark" to="mailto:ramiyan2185@gmail.com">Email</Link>
                        </li>
                        <li className="list-inline-item">
                            <Link className="btn btn-outline-dark"
                                  to="https://github.com/RamiyanGangatharan">GitHub</Link>
                        </li>
                        <li className="list-inline-item">
                            <span className="btn btn-outline-dark">+1 (416) 457-7411</span>
                        </li>
                    </ul>
                </nav>
            </header>

            <section className="mb-5">
                <h2 className="section-title">Experience</h2>
                <div className="section-content">
                    <div className="card mb-3">
                        <div className="card-body">
                            <h3 className="card-title">Shift Leader</h3>
                            <h4 className="card-subtitle mb-2 text-muted">Tim Hortons (May 2023 - Present)</h4>
                            <ul>
                                <li>Oversee daily shift operations, address customer inquiries, and lead a team of ten
                                    members in a fast-paced, dynamic environment.
                                </li>
                                <li>Implemented a waste management system, aligning product production with sales trends
                                    to reduce waste and increasing overall profitability.
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="card mb-3">
                        <div className="card-body">
                            <h3 className="card-title">Team Leader</h3>
                            <h4 className="card-subtitle mb-2 text-muted">Tim Hortons (September 2022 - May 2023)</h4>
                            <ul>
                                <li>Served as an apprentice under managerial guidance, honing social and leadership
                                    skills while overseeing a small team.
                                </li>
                                <li>Refined and adapted leadership techniques through targeted mentorship.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="card mb-3">
                        <div className="card-body">
                            <h3 className="card-title">Counter Staff</h3>
                            <h4 className="card-subtitle mb-2 text-muted">Tim Hortons (November 2021 - September
                                2022)</h4>
                            <ul>
                                <li>Operated a point-of-sale system to manage transactions efficiently.</li>
                                <li>Collaborated with team members to maintain an organized and sanitary work
                                    environment.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="mb-5">
                <h2 className="section-title">Education</h2>
                <div className="section-content">
                    <div className="card mb-3">
                        <div className="card-body">
                            <h3 className="card-title">Durham College</h3>
                            <p className="card-text">Credential: Advanced Diploma</p>
                            <p className="card-text">Program: Computer Programming &amp; Analysis</p>
                            <p className="card-text">Duration: September 2022 - April 2025</p>
                        </div>
                    </div>
                    <div className="card mb-3">
                        <div className="card-body">
                            <h3 className="card-title">Centennial College</h3>
                            <p className="card-text">Credential: Advanced Diploma</p>
                            <p className="card-text">Program: Software Engineering Technology</p>
                            <p className="card-text">Duration: September 2021 - April 2022</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="mb-5">
                <h2 className="section-title">Technical Skills</h2>
                <div className="container table-responsive">
                    <table className="table table-bordered table-hover">
                        <thead className="table-dark">
                        <tr>
                            <th className="p-3">Languages</th>
                            <th className="p-3">Environments</th>
                            <th className="p-3">Frameworks</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td className="p-3">C#</td>
                            <td className="p-3">Visual Studio 2022</td>
                            <td className="p-3">.NET 8.0 &amp; 5.0</td>
                        </tr>
                        <tr>
                            <td className="p-3">Java</td>
                            <td className="p-3">Visual Studio Code</td>
                            <td className="p-3">Selenium</td>
                        </tr>
                        <tr>
                            <td className="p-3">Python</td>
                            <td className="p-3">IntelliJ IDEA</td>
                            <td className="p-3">Unity Engine</td>
                        </tr>
                        <tr>
                            <td className="p-3">HTML</td>
                            <td className="p-3">PyCharm</td>
                            <td className="p-3">ExpressJS</td>
                        </tr>
                        <tr>
                            <td className="p-3">CSS</td>
                            <td className="p-3">SSMS</td>
                            <td className="p-3">Bootstrap</td>
                        </tr>
                        <tr>
                            <td className="p-3">PHP</td>
                            <td className="p-3">IBM Z/OS for Mainframes</td>
                            <td className="p-3">ReactJS</td>
                        </tr>
                        <tr>
                            <td className="p-3">JavaScript</td>
                            <td className="p-3">WebStorm</td>
                            <td className="p-3">jQuery</td>
                        </tr>
                        <tr>
                            <td className="p-3">SQL</td>
                            <td className="p-3"></td>
                            <td className="p-3"></td>
                        </tr>
                        <tr>
                            <td className="p-3">COBOL/JCL</td>
                            <td className="p-3"></td>
                            <td className="p-3"></td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            <section className="mb-5">
                <h2 className="section-title">Relevant Coursework</h2>
                <div className="section-content">
                    <ul>
                        <li>Data Structures &amp; Algorithms</li>
                        <li>Object Oriented Programming</li>
                        <li>Software Requirements &amp; Systems Development</li>
                        <li>Software Design (User Experience &amp; User Interfaces)</li>
                    </ul>
                </div>
            </section>

            <section className="mb-5">
                <h2 className="section-title">Featured Projects</h2>
                <div className="section-content">
                    <div className="card mb-3">
                        <div className="card-body">
                            <h3 className="card-title">BlackJack Game</h3>
                            <ul>
                                <li>Collaborated with a team of five to develop a Blackjack game using the .NET
                                    Framework and C#.
                                </li>
                                <li>Contributed to the design and implementation of the game's logic, user interface,
                                    and features.
                                </li>
                                <li>Ensured robust functionality and seamless user experience through rigorous testing
                                    and iteration.
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="card mb-3">
                        <div className="card-body">
                            <h3 className="card-title">Portfolio Site</h3>
                            <ul>
                                <li>Developed a full-stack web application utilizing modern web technologies.</li>
                                <li>Implemented the front end using JavaScript frameworks and libraries, including
                                    jQuery, React, and Next.js, with HTML5 and CSS (Bootstrap) for styling.
                                </li>
                                <li>Managed server-side operations with ExpressJS, MongoDB, and Passport ensuring
                                    efficient and scalable performance.
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="card mb-3">
                        <div className="card-body">
                            <h3 className="card-title">Student Registration System</h3>
                            <ul>
                                <li>Created an SQL database and a full-scale C# application for a simulated student
                                    registration system.
                                </li>
                                <li>Leveraged the .NET Framework to develop efficient database commands and a
                                    user-friendly interface.
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="card mb-3">
                        <div className="card-body">
                            <h3 className="card-title">Real Estate Brokerage Application</h3>
                            <ul>
                                <li>Designed a data model in star schema adhering to the third normal form (3NF) for a
                                    real estate brokerage application serving owners, renters, and buyers.
                                </li>
                                <li>Utilized Visio to create an Entity Relationship Diagram (ERD) and documented the
                                    model with a detailed report for business users.
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="card mb-3">
                        <div className="card-body">
                            <h3 className="card-title">Car Mechanic Appointment Service</h3>
                            <ul>
                                <li>Designed and developed a C# application using the .NET Framework for a car mechanic
                                    appointment service.
                                </li>
                                <li>Emphasized UI/UX best practices and code reusability to ensure a seamless user
                                    experience.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <p className="text-center">References Available Upon Request</p>
        </div>
    );
};

export default DigitalResume;

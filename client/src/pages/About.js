import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const About = () => {
    return (
        <div className="container mt-5">
            <h1>About</h1>
            <div className="accordion accordion-flush" id="aboutAccordion">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingOne">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                data-bs-target="#flush-collapseOne" aria-expanded="true"
                                aria-controls="flush-collapseOne">
                            Introduction
                        </button>
                    </h2>
                    <div id="flush-collapseOne" className="accordion-collapse collapse show"
                         aria-labelledby="flush-headingOne" data-bs-parent="#aboutAccordion">
                        <div className="accordion-body text-wrap">
                            <div className="card">
                                <div className="card-body">
                                    <p className="card-text">
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        My name is Ramiyan Gangatharan. I am a dedicated programmer with a passion for
                                        creating innovative software solutions. I am currently in the Computer
                                        Programming & Analysis
                                        program at Durham College, with previous experience from a programming boot camp
                                        and two
                                        semesters at Centennial College in the Software Engineering Technology program.
                                        With
                                        this background in computers and software development, I have honed my skills in
                                        various
                                        programming languages including Python, Java, C#, C++, COBOL, JCL, HTML, CSS,
                                        JS, and
                                        SQL. I specialize in creating robust and aesthetic applications and have
                                        extensive
                                        experience working with the MERN stack (MongoDB, Express, React, and Node.js).
                                    </p>
                                    <p className="card-text">
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        Currently, I am creating this website as well as developing a C# application
                                        that tracks
                                        my spending habits through the power of SQL and the .NET framework. I work at
                                        Tim
                                        Hortons and have been there since November 2021, where I am a shift leader for
                                        the
                                        afternoon shift. When I am not working or coding, you can catch me reading a
                                        book,
                                        playing a video game, or watching my favorite shows and movies. I am always
                                        excited to
                                        connect with like-minded professionals and explore new opportunities in the
                                        technological world. Feel free to <a href="./Contact.js">contact me</a> for
                                        collaborations or to hang out if you're in the area.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#flush-collapseTwo" aria-expanded="false"
                                aria-controls="flush-collapseTwo">
                            Professional Experience
                        </button>
                    </h2>
                    <div id="flush-collapseTwo" className="accordion-collapse collapse"
                         aria-labelledby="flush-headingTwo" data-bs-parent="#aboutAccordion">
                        <div className="accordion-body text-wrap">

                            <div className="card">
                                <div className="card-body">
                                    <p>
                                        Professionally, I have been working at Tim Hortons, freelancing in web
                                        development, and
                                        performing IT-related tasks such as fixing laptops, desktops, and assisting with
                                        POS
                                        system repairs at my store. At Tim Hortons, I have progressed through three
                                        different positions: Counter Staff, Team
                                        Leader, and currently, Shift Leader.
                                    </p>
                                </div>
                            </div>
                            <br/>
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Counter Staff</h5>
                                    <ul>
                                        <li>
                                            Learned daily tasks of the restaurant and maintained
                                            store cleanliness and safety.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <br/>
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Team Leader</h5>
                                    <ul>
                                        <li>
                                            Assisted managers, managed small groups of staff, and
                                            learned complex procedures such as closing, handling power outages, and
                                            crowd control. Acted as an apprentice to my manager, covering their duties
                                            during
                                            days off.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <br/>
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Shift Leader</h5>
                                    <ul>
                                        <li>
                                            Trained further to bridge the skill gap between
                                            managing a small team and overseeing an entire shift. This role involves
                                            ensuring
                                            the smooth operation and wellbeing of the restaurant during my shift.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#flush-collapseThree" aria-expanded="false"
                                aria-controls="flush-collapseThree">
                            Education
                        </button>
                    </h2>
                    <div id="flush-collapseThree" className="accordion-collapse collapse"
                         aria-labelledby="flush-headingThree" data-bs-parent="#aboutAccordion">
                        <div className="accordion-body text-wrap">
                            <div className="card mb-3">
                                <div className="card-body">
                                    <h4 className="card-title">Durham College</h4>
                                    <p><strong>Program:</strong> Computer Programming & Analysis</p>
                                    <p><strong>Duration:</strong> September 2022 - April 2025 [Expected]</p>
                                    <p><strong>Highlights:</strong></p>
                                    <ul>
                                        <li>Gained expertise in several mainstream programming languages including
                                            Python, Java, &amp; C#.
                                        </li>
                                        <li>
                                            Worked on projects involving the development of robust and aesthetic
                                            applications using the MERN stack (MongoDB, Express, React, Node.js).
                                        </li>
                                    </ul>
                                    <p><strong>Courses Completed:</strong></p>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <h5>Semester 1</h5>
                                            <ul>
                                                <li>COMM-1100: Communications I</li>
                                                <li>COMP-1116: Computer Systems - Hardware</li>
                                                <li>COSC-1100: Introduction to Programming</li>
                                                <li>INFT-1104: Data Communications & Networking</li>
                                                <li>INFT-1105: Introduction to Databases</li>
                                                <li>MATH-1114: Mathematics for IT</li>
                                            </ul>
                                        </div>
                                        <div className="col-md-6">
                                            <h5>Semester 2</h5>
                                            <ul>
                                                <li>COSC-1200: Object Oriented Programming I</li>
                                                <li>GNED-1304: The Canadian Government</li>
                                                <li>INFT-1206: Web Development Fundamentals</li>
                                                <li>INFT-1207: Software Testing & Automation</li>
                                                <li>MGMT-1223: Systems Development I</li>
                                                <li>MGMT-1224: Business for IT Professionals</li>
                                            </ul>
                                        </div>
                                        <div className="col-md-6">
                                            <h5>Semester 3</h5>
                                            <ul>
                                                <li>INFT-2101: Database Development I</li>
                                                <li>GNED-XXXX: Economics</li>
                                                <li>COMM-2109: IT Career Essentials</li>
                                                <li>COSC-2100: Object Oriented Programming II</li>
                                                <li>MGMT-2107: Systems Development II</li>
                                                <li>INFT-2100: Web Development Intermediate</li>
                                            </ul>
                                        </div>
                                        <div className="col-md-6">
                                            <h5>Semester 4</h5>
                                            <ul>
                                                <li>GNED-1403: A Short History of the World</li>
                                                <li>INFT-2203: Cloud Technology Fundamentals</li>
                                                <li>INFT-2200: Mainframe Development I</li>
                                                <li>COSC-2200: Object Oriented Programming III</li>
                                                <li>INFT-2202: Web Development Client Side Script</li>
                                                <li>INFT-2201: Web Development Enterprise</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="card mb-3">
                                <div className="card-body">
                                    <h4 className="card-title">Centennial College</h4>
                                    <p><strong>Program:</strong> Software Engineering Technology</p>
                                    <p><strong>Duration:</strong> September 2021 - April 2022</p>
                                    <p><strong>Highlights:</strong></p>
                                    <ul>
                                        <li>Completed two semesters focusing on advanced software engineering principles
                                            and practices.
                                        </li>
                                        <li>Developed a solid foundation in software design, development, and testing
                                            methodologies.
                                        </li>
                                    </ul>
                                    <p><strong>Courses Completed:</strong></p>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <h5>Semester 1</h5>
                                            <ul>
                                                <li>COMM-160: Communications I</li>
                                                <li>COMP-100: Programming I</li>
                                                <li>COMP-120: Software Engineering Fundamentals</li>
                                                <li>COMP-213: Web Interface Design</li>
                                                <li>MATH-175: Functions and Number Systems</li>
                                            </ul>
                                        </div>
                                        <div className="col-md-6">
                                            <h5>Semester 2</h5>
                                            <ul>
                                                <li>COMM-170: Communications II</li>
                                                <li>COMP-122: Introduction to Database Concepts</li>
                                                <li>COMP-123: Programming II</li>
                                                <li>COMP-125: Client Side Web Development</li>
                                                <li>COMP-225: Software Requirements Engineering</li>
                                                <li>COMP-301: Unix/Linux Operating Systems</li>
                                                <li>MATH-185: Discrete Mathematics</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="card mb-3">
                                <div className="card-body">
                                    <h4 className="card-title">Clarington Central Secondary School</h4>
                                    <p><strong>Graduation:</strong> 2021</p>
                                    <p><strong>Highlights:</strong></p>
                                    <ul>
                                        <li>Completed high school with a strong interest in computer science and
                                            technology.
                                        </li>
                                        <li>Participated in technology clubs and extracurricular activities related to
                                            programming and IT.
                                        </li>
                                        <li>Relevant coursework: Computer Science, Mathematics, and Physics.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingSix">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#flush-collapseSix" aria-expanded="false"
                                aria-controls="flush-collapseSix">
                            Hobbies and Interests
                        </button>
                    </h2>
                    <div id="flush-collapseSix" className="accordion-collapse collapse"
                         aria-labelledby="flush-headingSix" data-bs-parent="#aboutAccordion">
                        <div className="accordion-body text-wrap">
                            <div className="card mb-3">
                                <div className="card-body">
                                    <h5 className="card-title mb-2">Computers & Programming</h5>
                                    <p className="card-text">
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        My interest in computers began at a young age when I first used a computer in my
                                        elementary school's computer lab in the late 2000s, running Windows XP. From
                                        that moment, I was hooked and started tinkering with computers. By the age of
                                        16, I began dismantling and rebuilding PCs. I did this for two reasons: my old
                                        PC was outdated, and I wanted to experience the process of custom-building a PC.
                                        I found it fascinating to see how all the components fit together.
                                    </p>
                                    <p className="card-text">
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        I started programming in grade 10 with a Java class that introduced me to the
                                        basics of programming, as well as some technical and engineering aspects of
                                        software development, such as gathering requirements from users and converting
                                        ASCII characters to binary. Since high school, I have been experimenting with
                                        Java and other languages like Python and C#. In September 2021, I began my
                                        academic journey at Centennial College, studying in the Software Engineering
                                        Technology program for two semesters before realizing it wasn't the right fit
                                        for me. I then switched to the Computer Programming & Analysis program at Durham
                                        College, where I am now starting my third year. I plan to graduate from this
                                        program and pursue a Bachelor's degree in Computer Science at a reputable
                                        university in Ontario.
                                    </p>
                                    <p className="card-text">
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        My experience over the years has been shaped by a lot of trial and error,
                                        working on incomplete prototypes and learning from mistakes. From 2021 to 2024,
                                        I have created various pieces of software, including websites, games, databases
                                        and their interfaces, surveys, and some minor robotic projects. My colleagues
                                        often say that I have "an eye for design," which has been crucial in creating
                                        user-friendly and aesthetically pleasing software. I am always curious and eager
                                        to learn new concepts, constantly seeking out new challenges and opportunities
                                        to expand my knowledge and skills.
                                    </p>
                                    <p className="card-text">
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        In conclusion, my journey with computers and programming has been driven by a
                                        passion for technology and a relentless curiosity to learn and grow. As I
                                        continue to develop my skills and pursue higher education, I am excited about
                                        the future opportunities and challenges that lie ahead in the field of computer
                                        science.
                                    </p>
                                </div>
                            </div>
                            <div className="card mb-3">
                                <div className="card-body">
                                    <h5 className="card-title mb-2">Reading</h5>
                                </div>
                            </div>
                            <div className="card mb-3">
                                <div className="card-body">
                                    <h5 className="card-title mb-2">Motorsports</h5>
                                </div>
                            </div>
                            <div className="card mb-3">
                                <div className="card-body">
                                    <h5 className="card-title mb-2">Fitness</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingSeven">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#flush-collapseSeven" aria-expanded="false"
                                aria-controls="flush-collapseSeven">
                            Get in Touch
                        </button>
                    </h2>
                    <div id="flush-collapseSeven" className="accordion-collapse collapse"
                         aria-labelledby="flush-headingSeven" data-bs-parent="#aboutAccordion">
                        <div className="accordion-body text-wrap">
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

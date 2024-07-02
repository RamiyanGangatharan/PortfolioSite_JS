import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import DigitalResume from "./pages/DigitalResume";
import Projects from './pages/Projects';
import Photography from "./pages/photography";

import Research from "./pages/Research";
import CSFundamentals from "./pages/researchPapers/CS_1-Fundamentals";
import ITBusiness from "./pages/researchPapers/IT_inBusiness";
import CloudCompared from "./pages/researchPapers/CloudCompared";
import ServiceTypes from "./pages/researchPapers/serviceTypes";
import ProgrammingParadigms from "./pages/researchPapers/programmingParadigms";

import Contact from './pages/Contact';
import Layout from './Layout';
import './App.css';
import './font.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';





const App = () => {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/digitalResume" element={<DigitalResume />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/photography" element={<Photography />} />

                    <Route path="/research" element={<Research/>}/>
                    <Route path="/research/1" element={<CSFundamentals />} />
                    <Route path="/research/2" element={<ProgrammingParadigms/>} />
                    <Route path="/research/2" element={<CloudCompared />} />
                    <Route path="/research/3" element={<ServiceTypes />} />
                    <Route path="/research/4" element={<ITBusiness />} />


                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </Layout>
        </Router>
    );
};

export default App;

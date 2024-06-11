import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import DigitalResume from "./pages/DigitalResume";
import Projects from './pages/Projects';
import Research from "./pages/Research";
import Contact from './pages/Contact';
import Layout from './Layout';
import './App.css';

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
                    <Route path="/research" element={<Research/>}/>
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </Layout>
        </Router>
    );
};

export default App;

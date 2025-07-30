import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { FunctionComponent } from 'react';
import { NavBar } from '../components/NavBar';
import { About } from './About';
import { Experience } from './Experience';
import { Projects } from './Projects';
import { Contact } from './Contact';
import { Home } from './Home';

export const App: FunctionComponent = () => {
    return (
        <Router>
            <NavBar />
            <div className="container">
                <Routes>
                    <Route path="/about" element={<About />} />
                    <Route path="/experience" element={<Experience />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/" element={<Home />} />
                </Routes>    
            </div>
        </Router>
    );
};

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HamburgerMenu } from './HamburgerMenu';

export const NavBar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="nav-bar">
        <Link to="/" className="name">
          Stephen Cheung
        </Link>
        
        <div className="nav-button">
          <HamburgerMenu isOpen={isMenuOpen} onClick={toggleMenu} />
        </div>
      </nav>
      
      <div className={`nav-overlay ${isMenuOpen ? 'open' : ''}`}>
        <div className="nav-overlay-links">
          <Link to="/" onClick={() => setIsMenuOpen(false)}>
            Home
          </Link>
          <Link to="/about" onClick={() => setIsMenuOpen(false)}>
            About
          </Link>
          <Link to="/experience" onClick={() => setIsMenuOpen(false)}>
            Experience
          </Link>
          <Link to="/projects" onClick={() => setIsMenuOpen(false)}>
            Projects
          </Link>
          <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
            Contact
          </Link>
        </div>
      </div>
      
      <div className="nav-spacer"></div>
    </>
  );
};

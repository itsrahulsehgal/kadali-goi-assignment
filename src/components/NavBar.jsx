import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

// Navbar component
const NavBar = () => {
  const [showNavLinks, setShowNavLinks] = useState(false);

  const toggleNavLinks = () => {
    setShowNavLinks(!showNavLinks);
  };

  return (
    <nav className="navbar">
      <div className="company-info">
        <img
          src="https://kadali.my.canva.site/99wala/images/0c0266e15d76ba44735c33bcc0e27c74.svg"
          alt="Company Logo"
          className="logo"
        />
        <div className="company-container">
          <div className="company-name">99 Vala</div>
          <div className="company-tagline">Learn Beyond Boundaries</div>
        </div>
      </div>

      <button className="toggle-button" onClick={toggleNavLinks}>
        <div className={`bar ${showNavLinks ? 'rotate-down' : ''}`}></div>
        <div className={`bar ${showNavLinks ? 'hidden' : ''}`}></div>
        <div className={`bar ${showNavLinks ? 'rotate-up' : ''}`}></div>
      </button>

      <ul className={`nav-links ${showNavLinks ? 'show' : ''}`}>
        <li>
          <Link to="/" onClick={toggleNavLinks}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" onClick={toggleNavLinks}>
            About
          </Link>
        </li>
        <li>
          <Link to="/joinus" onClick={toggleNavLinks}>
            Join Us
          </Link>
        </li>
        <li>
          <Link to="/resources" onClick={toggleNavLinks}>
            Resources
          </Link>
        </li>
        <li>
          <Link to="/explore" onClick={toggleNavLinks}>
            Explore
          </Link>
        </li>
        <li>
          <Link to="/companies" onClick={toggleNavLinks}>
            Companies
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;

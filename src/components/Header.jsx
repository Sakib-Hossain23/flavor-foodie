// Header.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  // State to manage the active link
  const [activeLink, setActiveLink] = useState('/');

  // Function to handle link click
  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <header className="header_section fixed-header">
      <div className="container">
        <nav className="navbar navbar-expand-lg custom_nav-container">
          <Link className="navbar-brand" to="/">
            <span>Fresh Fare</span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className=""></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <Link
                  style={{ color: activeLink === '/' ? '#1dc89b' : '#ffffff' }}
                  className="nav-link"
                  to="/"
                  onClick={() => handleLinkClick('/')}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  style={{ color: activeLink === '/menu' ? '#1dc89b' : '#ffffff' }}
                  className="nav-link"
                  to="/menu"
                  onClick={() => handleLinkClick('/menu')}
                >
                  Menu
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  style={{ color: activeLink === '/about' ? '#1dc89b' : '#ffffff' }}
                  className="nav-link"
                  to="/about"
                  onClick={() => handleLinkClick('/about')}
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  style={{ color: activeLink === '/book' ? '#1dc89b' : '#ffffff' }}
                  className="nav-link"
                  to="/book"
                  onClick={() => handleLinkClick('/book')}
                >
                  Book Table
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;

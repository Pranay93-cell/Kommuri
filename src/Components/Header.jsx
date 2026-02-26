import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="navbar-header">
      <nav className="navbar">

        <div className="logo">
          <img src="src/assets/logo.png"  className="logoimg"/>
          <a> Kommuri Printers</a>
        </div>

        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/gallery">Gallery</Link></li>
          
        </ul>

        <a
          href="tel:+919618015437"
          className="call-btn"
          onClick={() => {
            // fallback in case default link behavior is blocked
            window.location.href = "tel:+919618015437";
          }}
        >
          Call Now
        </a>

        {/* FIXED Mobile Button */}
        <button
          className="menu-btn"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </nav>

      {isOpen && (
        <div className="mobile-menu">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li>Contact</li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
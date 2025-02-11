import React, { useState } from 'react';
import './Navbar.css';
import { FiMenu, FiX } from 'react-icons/fi';
import navimg from "../components/logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="nav-wrapper ">
      
      <div className="nav-content">
        {/* Logo on the left */}
        <img className="logo" src={navimg} alt="Logo" />

        {/* Desktop Navigation (Right Aligned) */}
        <ul className="nav-links">
          <li><a href="#" className="menu-item">Home</a></li>
          <li><a href="#" className="menu-item">Skills</a></li>
          <li><a href="#" className="menu-item">Projects</a></li>
          <li><a href="#" className="menu-item">Contact Me</a></li>
          <button className="contact-btn">Hire Me</button>
        </ul>

        {/* Mobile Menu Button */}
        <button className="menu-btn md:hidden" onClick={toggleMenu}>
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu - Opens when button is clicked */}
      {menuOpen && (
        <ul className="mobile-menu">
          <li><a href="#" className="menu-item">Home</a></li>
          <li><a href="#" className="menu-item">Skills</a></li>
          <li><a href="#" className="menu-item">Projects</a></li>
          <li><a href="#" className="menu-item">Contact Me</a></li>
          <button className="contact-btn">Hire Me</button>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;

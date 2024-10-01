import React, { useState } from 'react';
import { IoFitnessOutline } from 'react-icons/io5';
import { FiMenu } from 'react-icons/fi';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <IoFitnessOutline className="navbar-icon" />
        <h1 className="navbar-title">Therapy</h1>
      </div>
      <div className="menu-icon" onClick={toggleMenu}>
        <FiMenu className="navbar-icon" />
      </div>
      <ul className={`navbar-menu ${isOpen ? 'active' : ''}`}>
        <li className="navbar-item">
          <a href="#home" onClick={toggleMenu}>Home</a>
        </li>
        <li className="navbar-item">
          <a href="#features" onClick={toggleMenu}>Features</a>
        </li>
        <li className="navbar-item">
          <a href="/about" onClick={toggleMenu}>About</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css'; // Corrected import path

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="navbar-logo">Himalayan Cultural Archive</h2>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/mindfulness">Mindfulness</Link></li>
        <li><Link to="/sustainable-living">Sustainable Living</Link></li>
        <li><Link to="/virtual-tourism">Virtual Tourism</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;

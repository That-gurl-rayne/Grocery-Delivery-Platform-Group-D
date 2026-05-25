// src/components/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="navbar-logo">
        <Link to="/">
          <img src="/src/assets/logo.png" alt="Oya Deliver" />
        </Link>
      </div>

      {/* Links */}
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/products">Product</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>

      {/* Icons */}
      <div className="navbar-icons">
        <Link to="/cart">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" stroke="#0F0F0F" strokeWidth="2"/>
            <line x1="3" y1="6" x2="21" y2="6" stroke="#0F0F0F" strokeWidth="2"/>
            <path d="M16 10a4 4 0 01-8 0" stroke="#0F0F0F" strokeWidth="2"/>
          </svg>
        </Link>
        <Link to="/profile">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" stroke="#0F0F0F" strokeWidth="2"/>
            <circle cx="12" cy="7" r="4" stroke="#0F0F0F" strokeWidth="2"/>
          </svg>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
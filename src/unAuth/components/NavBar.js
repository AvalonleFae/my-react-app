import React from 'react';
import './NavBar.css';
import logo from '../../assets/tubev1.png';

function NavBar() {
  return (
    <nav className="nav-bar">
      <div className="nav-container">
        <div className="nav-logo">
          <img src={logo} alt="tubestamp logo" className="logo-img" />
        </div>
        <div className="nav-links">
          <a href="#pricing" className="nav-link">Pricing</a>
          <a href="#blog" className="nav-link">Blog</a>
        </div>
        <button className="nav-button">More Videos</button>
      </div>
    </nav>
  );
}

export default NavBar;


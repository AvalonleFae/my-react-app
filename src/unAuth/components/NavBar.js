import React from 'react';
import './NavBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil, faArrowRight } from '@fortawesome/free-solid-svg-icons';

function NavBar() {
  return (
    <nav className="nav-bar">
      <div className="nav-container">
        <div className="nav-logo">
          <FontAwesomeIcon icon={faPencil} className="logo-icon" />
          <span className="logo-text">
            <span className="logo-tube">tube</span>
            <span className="logo-stamp">stamp</span>
          </span>
        </div>
        <button className="nav-button">
          AI Video Chatbot
          <FontAwesomeIcon icon={faArrowRight} className="button-arrow" />
        </button>
      </div>
    </nav>
  );
}

export default NavBar;


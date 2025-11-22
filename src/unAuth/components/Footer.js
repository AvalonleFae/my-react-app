import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faXTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-column footer-company">
            <h3 className="footer-heading footer-heading-green">#1 AI VIDEO MODEL</h3>
            <p className="footer-description">
              Bump AI will watch any video and deliver insights across all industries.
            </p>
            <div className="footer-social">
              <a href="#" className="social-link" aria-label="LinkedIn">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a href="#" className="social-link" aria-label="X (Twitter)">
                <FontAwesomeIcon icon={faXTwitter} />
              </a>
              <a href="#" className="social-link" aria-label="YouTube">
                <FontAwesomeIcon icon={faYoutube} />
              </a>
            </div>
          </div>

          <div className="footer-column">
            <h4 className="footer-heading">Product</h4>
            <ul className="footer-links">
              <li><a href="#" className="footer-link">News</a></li>
              <li><a href="#" className="footer-link">Pricing</a></li>
              <li><a href="#" className="footer-link">Product Changelog</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4 className="footer-heading">Features</h4>
            <ul className="footer-links">
              <li><a href="#" className="footer-link">Workspaces</a></li>
              <li><a href="#" className="footer-link">Creator Studio</a></li>
              <li><a href="#" className="footer-link">YouTube Videos</a></li>
              <li><a href="#" className="footer-link">Local Videos</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4 className="footer-heading">API</h4>
            <ul className="footer-links">
              <li><a href="#" className="footer-link">Startups</a></li>
              <li><a href="#" className="footer-link">Zapier</a></li>
              <li><a href="#" className="footer-link">Enterprise</a></li>
              <li><a href="#" className="footer-link">API Documentation</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-bottom">
          <p className="footer-copyright">©2025 Bumpups Inc. – All rights reserved.</p>
          <div className="footer-legal">
            <a href="#" className="footer-legal-link">Terms of Service</a>
            <a href="#" className="footer-legal-link">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;


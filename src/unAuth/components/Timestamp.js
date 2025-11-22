import React, { useState } from 'react';
import './Timestamp.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';

function Timestamp() {
  const [url, setUrl] = useState('https://youtu.be/ZV9kmL1s4Al');

  const handleGenerate = () => {
    // Handle generate action
    console.log('Generating timestamps for:', url);
  };

  return (
    <div className="timestamp">
      <div className="timestamp-container">
        <h1 className="timestamp-title">AI YouTube Timestamps</h1>
        <p className="timestamp-description">
          Generates timestamps for a given YouTube video using the bump-1.0 model. This software was built using the AI— watch tutorials how to{' '}
          <a href="#" className="timestamp-link">here</a>.
        </p>
        <div className="timestamp-input-group">
          <div className="timestamp-input-wrapper">
            <FontAwesomeIcon icon={faLink} className="timestamp-input-icon" />
            <input
              type="text"
              className="timestamp-input"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="Enter YouTube URL"
            />
          </div>
          <button className="timestamp-button" onClick={handleGenerate}>
            Generate
          </button>
        </div>
      </div>
    </div>
  );
}

export default Timestamp;


import React, { useState } from 'react';
import './Timestamp.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';

function Timestamp() {
  const [url, setUrl] = useState('https://youtu.be/ZV9kmL1s4Al');
  const [error, setError] = useState('');

  // YouTube URL regex pattern
  const youtubeRegex = /^(https?:\/\/)?(www\.)?(youtube\.com\/(watch\?v=|embed\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;

  const validateYouTubeUrl = (inputUrl) => {
    if (!inputUrl.trim()) {
      setError('Please enter a YouTube URL');
      return false;
    }
    
    if (!youtubeRegex.test(inputUrl)) {
      setError('Please enter a valid YouTube URL');
      return false;
    }
    
    setError('');
    return true;
  };

  const handleUrlChange = (e) => {
    const newUrl = e.target.value;
    setUrl(newUrl);
    // Clear error when user starts typing
    if (error) {
      setError('');
    }
  };

  const handleGenerate = () => {
    if (validateYouTubeUrl(url)) {
      // Handle generate action
      console.log('Generating timestamps for:', url);
    }
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
              className={`timestamp-input ${error ? 'timestamp-input-error' : ''}`}
              value={url}
              onChange={handleUrlChange}
              placeholder="Enter YouTube URL"
            />
          </div>
          <button 
            className="timestamp-button" 
            onClick={handleGenerate}
          >
            Generate
          </button>
        </div>
        {error && <p className="timestamp-error">{error}</p>}
      </div>
    </div>
  );
}

export default Timestamp;


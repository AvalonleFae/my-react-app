import React from 'react';
import './Bumpups.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import {
  faArrowUpFromBracket,
  faComments,
  faVideo,
  faLaptopCode,
  faArrowRight
} from '@fortawesome/free-solid-svg-icons';


function Bumpups() {
  const features = [
    {
      icon: faArrowUpFromBracket,
      title: 'Local Videos',
      description: 'Upload your videos quickly and effortlessly',
      url: "https://bumpups.com/local-feature",
    },
    {
      icon: faComments,
      title: 'Video Chat',
      description: 'Connect with your audience through comments',
      url: "https://bumpups.com/workspace-features",
    },
    {
      icon: faVideo,
      title: 'AI Youtube',
      description: 'Stream your content in high quality',
      url: "https://bumpups.com/creator-feature",
    },
    {
      icon: faLaptopCode,
      title: 'API',
      description: 'Build and customize your channel',
      url: "https://bumpups.com/startup",
    }
  ];

  return (
    <div className="bumpups">
      <div className="bumpups-header">
        <h2 className="bumpups-title">Do more with Bumpups</h2>
        <p className="bumpups-subtitle">Process your videos to deliver insights across all industries.</p>
      </div>
      <div className="bumpups-grid">
        {features.map((feature, index) => (
          <div key={index} className="bumpup-card">
            <div className="bumpup-icon">
              <FontAwesomeIcon icon={feature.icon} />
            </div>
            <h3 className="bumpup-title">{feature.title}</h3>
            <p className="bumpup-description">{feature.description}</p>
            <a href={feature.url} className="bumpup-link">
              Learn more <FontAwesomeIcon icon={faArrowRight} className="arrow-icon" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Bumpups;


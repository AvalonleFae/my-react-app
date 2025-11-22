import React, { useState, useEffect } from 'react';
import './Timestamp.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';

function Timestamp() {
  const [url, setUrl] = useState('https://youtu.be/ZV9kmL1s4Al');
  const [error, setError] = useState('');
  const [videoData, setVideoData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [videoId, setVideoId] = useState(null);

  // YouTube URL regex pattern
  const youtubeRegex = /^(https?:\/\/)?(www\.)?(youtube\.com\/(watch\?v=|embed\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;

  // Extract video ID from YouTube URL
  const extractVideoId = (inputUrl) => {
    const match = inputUrl.match(youtubeRegex);
    return match ? match[5] : null;
  };

  // Check if URL is valid (pure function)
  const isValidYouTubeUrl = (inputUrl) => {
    if (!inputUrl || !inputUrl.trim()) {
      return false;
    }
    return youtubeRegex.test(inputUrl);
  };

  // Fetch video data from YouTube API
  const fetchVideoData = async (videoId) => {
    const apiKey = process.env.REACT_APP_YOUTUBE_API_KEY;
    
    if (!apiKey) {
      setError('YouTube API key is not configured');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=${apiKey}&part=snippet`
      );

      if (!response.ok) {
        throw new Error('Failed to fetch video data');
      }

      const data = await response.json();

      if (data.items && data.items.length > 0) {
        const video = data.items[0];
        const snippet = video.snippet;
        const thumbnails = snippet.thumbnails;

        // Get max resolution thumbnail, fallback to high if not available
        const thumbnail = thumbnails.maxres || thumbnails.high || thumbnails.medium || thumbnails.default;

        setVideoData({
          title: snippet.title,
          thumbnail: thumbnail.url,
        });
        setVideoId(videoId);
      } else {
        setError('Video not found');
        setVideoData(null);
        setVideoId(null);
      }
    } catch (err) {
      console.error('Error fetching video data:', err);
      setError('Failed to load video information. Please check your API key and try again.');
      setVideoData(null);
      setVideoId(null);
    } finally {
      setLoading(false);
    }
  };

  const validateYouTubeUrl = (inputUrl) => {
    if (!inputUrl.trim()) {
      setError('Please enter a YouTube URL');
      return false;
    }
    
    if (!isValidYouTubeUrl(inputUrl)) {
      setError('Please enter a valid YouTube URL');
      return false;
    }
    
    setError('');
    return true;
  };

  const handleUrlChange = (e) => {
    const newUrl = e.target.value;
    setUrl(newUrl);
    // Clear error and video data when user starts typing
    if (error) {
      setError('');
    }
    if (videoData) {
      setVideoData(null);
    }
    if (videoId) {
      setVideoId(null);
    }
  };

  const handleGenerate = () => {
    if (validateYouTubeUrl(url)) {
      const videoId = extractVideoId(url);
      if (videoId) {
        fetchVideoData(videoId);
      }
    }
  };

  // Auto-fetch on initial load if URL is valid
  useEffect(() => {
    if (isValidYouTubeUrl(url)) {
      const videoId = extractVideoId(url);
      if (videoId) {
        fetchVideoData(videoId);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
            disabled={loading}
          >
            {loading ? 'Loading...' : 'Generate'}
          </button>
        </div>
        {error && <p className="timestamp-error">{error}</p>}
        
        {loading && (
          <div className="timestamp-video-preview timestamp-loading">
            <p>Loading video information...</p>
          </div>
        )}

        {videoData && !loading && videoId && (
          <div className="timestamp-video-preview">
            <div className="timestamp-video-wrapper">
              <iframe
                className="timestamp-video-embed"
                src={`https://www.youtube.com/embed/${videoId}`}
                title={videoData.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <h2 className="timestamp-video-title">{videoData.title}</h2>
          </div>
        )}
      </div>
    </div>
  );
}

export default Timestamp;


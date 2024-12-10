import React, { useState } from 'react';
import './media.css';

const Media = () => {
  const [hoveredVideo, setHoveredVideo] = useState('');

  const handleVideoHover = (videoId) => {
    setHoveredVideo(videoId);
  };

  const handleVideoLeave = () => {
    setHoveredVideo('');
  };

  return (
    <div className="frames-section bg-black">
      <div className="frames-section">
        <h1 className="main-heading bg-gradient-to-r from-[#b74b9b] to-white text-transparent bg-clip-text text-2xl font-bold text-center">Social Media</h1>
        <div className="top-row">
          <div
            className="frame"
            onMouseEnter={() => handleVideoHover('Thsq9y05rF4?si=WWoure0KuV7HA-6q')}
            onMouseLeave={handleVideoLeave}
            style={{ padding: '10px' }} 
          >
            <iframe
              title="YouTube Video 1"
              width="100%"
              height="300"
              src={`https://www.youtube.com/embed/${hoveredVideo === 'Thsq9y05rF4?si=WWoure0KuV7HA-6q' ? hoveredVideo : ''}`}
              frameBorder="0"
              allowFullScreen
              style={{
                border: '2px solid #ffffff',
                borderRadius: '12px', 
                boxShadow: '0 0 10px #ffffff', 
              }}
            ></iframe>
          </div>

          <div
            className="frame"
            onMouseEnter={() => handleVideoHover('Thsq9y05rF4?si=WWoure0KuV7HA-6q')}
            onMouseLeave={handleVideoLeave}
            style={{ padding: '10px' }} 
          >
            <iframe
              title="YouTube Video 2"
              width="100%"
              height="300"
              src={`https://www.youtube.com/embed/${hoveredVideo === 'Thsq9y05rF4?si=WWoure0KuV7HA-6q' ? hoveredVideo : ''}`}
              frameBorder="0"
              allowFullScreen
              style={{
                border: '2px solid #ffffff',
                borderRadius: '12px',
                boxShadow: '0 0 10px #ffffff',
              }}
            ></iframe>
          </div>
        </div>

        <div className="bottom-row">
          <div className="frame" style={{ padding: '10px' }}> {/* Adding padding between frames */}
            <iframe
              title="LinkedIn Post 1"
              src="https://www.linkedin.com/embed/feed/update/urn:li:share:7142748555437342721"
              height="400"
              width="100%"
              frameBorder="0"
              allowFullScreen
              style={{
                border: '2px solid #ffffff',
                borderRadius: '12px', // Adding curved borders
                boxShadow: '0 0 10px #ffffff', // Adding a glowing effect
              }}
            ></iframe>
          </div>
          <div className="frame" style={{ padding: '10px' }}> {/* Adding padding between frames */}
            <iframe
              title="LinkedIn Post 2"
              src="https://www.linkedin.com/embed/feed/update/urn:li:share:7142748555437342721"
              height="400"
              width="100%"
              frameBorder="0"
              allowFullScreen
              style={{
                border: '2px solid #ffffff',
                borderRadius: '12px', // Adding curved borders
                boxShadow: '0 0 10px #ffffff', // Adding a glowing effect
              }}
            ></iframe>
          </div>

          <div className="frame" style={{ padding: '10px' }}> {/* Adding padding between frames */}
            <iframe
              title="LinkedIn Post 3"
              src="https://www.linkedin.com/embed/feed/update/urn:li:share:7142748555437342721"
              height="400"
              width="100%"
              frameBorder="0"
              allowFullScreen
              style={{
                border: '2px solid #ffffff',
                borderRadius: '12px', // Adding curved borders
                boxShadow: '0 0 10px #ffffff', // Adding a glowing effect
              }}
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Media;

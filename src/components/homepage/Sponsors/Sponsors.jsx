import React from 'react';
import './Sponsors.css';
import sponsor1Logo from '../../../assets/sponsors.jpg'; // Import sponsor logos accordingly
import sponsor2Logo from '../../../assets/sponsors.jpg' // Import other sponsor logos similarly

const Sponsors = () => {
  return (
    <div className="sponsors-section">
      <h1 className="main-heading bg-gradient-to-r from-[#b74b9b] to-white text-transparent bg-clip-text text-4xl font-bold text-center py-8">Our Sponsors</h1>
      <div className="sponsors-info">
        {/* Sponsor 1 Section */}
        <div className="sponsor">
          <img src={sponsor1Logo} alt="Sponsor 1" className="sponsor-logo floating-animation" />
        </div>

        {/* Sponsor 2 Section */}
        <div className="sponsor">
          <img src={sponsor2Logo} alt="Sponsor 2" className="sponsor-logo floating-animation" />
        </div>

        {/* Add other sponsor sections similarly */}
        <div className="sponsor">
          <img src={sponsor2Logo} alt="Sponsor 2" className="sponsor-logo floating-animation" />
        </div>

        <div className="sponsor">
          <img src={sponsor2Logo} alt="Sponsor 2" className="sponsor-logo floating-animation" />
        </div>

        <div className="sponsor">
          <img src={sponsor2Logo} alt="Sponsor 2" className="sponsor-logo floating-animation" />
        </div>
      </div>
    </div>
  );
};

export default Sponsors;

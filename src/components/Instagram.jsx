import React from 'react';
import './Instagram.css';
import img1 from '../assets/velora_silk_dress.png';
import img2 from '../assets/velora_silver_necklace.png';
import img3 from '../assets/velora_handbag.png';
import img4 from '../assets/velora_structured_blazer.png';
import img5 from '../assets/velora_pearl_earrings.png';

const Instagram = () => {
  return (
    <section className="section instagram-section">
      
      {/* Top Wave Divider */}
      <div className="insta-wave-top">
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path d="M0,120 Q360,0 720,60 T1440,120 L1440,0 L0,0 Z" fill="var(--pure-white)" />
        </svg>
      </div>

      <div className="insta-container">
        
        <div className="insta-header-creative">
          <span className="insta-cursive">Join the Club</span>
          <h2 className="insta-title-new">@VELORA_OFFICIAL</h2>
          <p className="insta-desc-new">
            Tag us to be featured. Discover how our community styles their favorite Velora pieces.
          </p>
          <a href="#" className="insta-link-btn">Follow Us on Instagram</a>
        </div>

        <div className="insta-collage">
          <div className="insta-card card-1">
            <img src={img1} alt="Community Style 1" />
            <div className="insta-overlay">
              <span className="insta-icon">♥</span>
            </div>
          </div>
          <div className="insta-card card-2">
            <img src={img2} alt="Community Style 2" />
            <div className="insta-overlay">
              <span className="insta-icon">♥</span>
            </div>
          </div>
          <div className="insta-card card-3">
            <img src={img3} alt="Community Style 3" />
            <div className="insta-overlay">
              <span className="insta-icon">♥</span>
            </div>
          </div>
          <div className="insta-card card-4">
            <img src={img4} alt="Community Style 4" />
            <div className="insta-overlay">
              <span className="insta-icon">♥</span>
            </div>
          </div>
          <div className="insta-card card-5">
            <img src={img5} alt="Community Style 5" />
            <div className="insta-overlay">
              <span className="insta-icon">♥</span>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Wave Divider */}
      <div className="insta-wave-bottom">
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path d="M0,0 Q360,120 720,60 T1440,0 L1440,120 L0,120 Z" fill="var(--soft-peach)" />
        </svg>
      </div>

    </section>
  );
};

export default Instagram;

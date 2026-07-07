import React from 'react';
import './BrandStory.css';
import imgBack from '../assets/velora_silk_dress.png';
import imgFront from '../assets/velora_statement_ring.png';

const BrandStory = () => {
  return (
    <section id="brand-story" className="section brand-story-section">
      
      {/* Top Half: White Background */}
      <div className="bs-top-half">
        <div className="bs-top-content">
          <span className="cursive-accent top-cursive">Hey there</span>
          <h2 className="bs-top-headline">
            IT'S TIME TO ELEVATE YOUR WARDROBE.<br/>
            ARE YOU READY TO MAKE A STATEMENT?
          </h2>
          <p className="bs-top-desc">
            At Velora, we believe that true luxury is found in the details. From the finest materials to impeccable craftsmanship, every piece is designed to empower you. Welcome to a new era of effortless sophistication and timeless style.
          </p>
        </div>
      </div>

      {/* Bottom Half: Black Background with Overlapping Layout */}
      <div className="bs-bottom-half">
        {/* SVG Curve Divider */}
        <div className="bs-curve-divider">
          <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
            <path d="M0,0 Q720,120 1440,0 L1440,120 L0,120 Z" fill="var(--primary-black)" />
          </svg>
        </div>

        <div className="bs-bottom-container">
          
          {/* Left Side: Overlapping Images */}
          <div className="bs-image-collage">
            <img src={imgBack} alt="Fashion apparel" className="bs-img-back" />
            <img src={imgFront} alt="Fine jewelry" className="bs-img-front" />
          </div>

          {/* Right Side: Text Content */}
          <div className="bs-bottom-content">
            <h3 className="bs-bottom-headline">
              HI, WE ARE VELORA - YOUR PERSONAL CURATORS OF LUXURY!
            </h3>
            <p className="bs-bottom-desc">
              Step into a world where high-fashion meets everyday wearability. We meticulously curate collections that speak to your boldest ambitions. 
              <br/><br/>
              Explore our heritage and discover the passion that goes into every stitch, every gem, and every design we offer.
            </p>
          </div>

        </div>
      </div>

    </section>
  );
};

export default BrandStory;

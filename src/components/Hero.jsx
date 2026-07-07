import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import './Hero.css';
import heroImage from '../assets/velora_hero.png';

const Hero = () => {
  const { isFeminine } = useTheme();

  return (
    <section className="hero">
      <div className="hero-background">
        <img src={heroImage} alt="Luxury fashion and jewelry campaign" />
        <div className="hero-overlay"></div>
      </div>
      
      <div className="hero-content">
        <div className="hero-text-container">
          <h1 className="text-hero animate-slide-up">
            <span className="block">Timeless.</span>
            <span className="block delay-1">Bold.</span>
            <span className="block delay-2">Unforgettable.</span>
          </h1>
          <p className="text-subhero animate-fade-in delay-3">
            Modern fashion and jewelry designed for women who lead with confidence.
          </p>
          <div className="hero-cta animate-fade-in delay-3">
            <Link to="/shop" className="btn-primary" style={{display: 'inline-flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none'}}>Shop Jewelry</Link>
            <Link to="/shop" className="btn-secondary" style={{display: 'inline-flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none'}}>Explore Collection</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

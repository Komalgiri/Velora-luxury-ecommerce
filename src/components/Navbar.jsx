import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useTheme } from '../context/ThemeContext';
import { Moon, Sun } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const { openCart, cartItems } = useCart();
  const { isDarkMode, toggleTheme } = useTheme();
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${(scrolled || !isHome) ? 'scrolled solid' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-left">
          <Link to="/shop" className="nav-link">Shop</Link>
          <Link to="/shop" className="nav-link">Collections</Link>
          <a href="/#brand-story" className="nav-link" style={{ textDecoration: 'none' }}>About</a>
        </div>
        
        <div className="navbar-center">
          <Link to="/" className="logo">VELORA</Link>
        </div>

        <div className="navbar-right">
          <button className="icon-button theme-btn" onClick={toggleTheme} aria-label="Toggle Theme" style={{marginRight: '1rem', transition: 'all 0.3s ease'}}>
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button onClick={() => setSearchOpen(!searchOpen)} className="icon-button">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="11" cy="11" r="8" />
              <path d="M21 21L16.65 16.65" />
            </svg>
          </button>
          <Link to="/profile" className="icon-button">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </Link>
          <button className="icon-button cart-btn" onClick={openCart}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M6 2L3 6V20C3 20.5304 3.21071 21.0391 3.58579 21.4142C3.96086 21.7893 4.46957 22 5 22H19C19.5304 22 20.0391 21.7893 20.4142 21.4142C20.7893 21.0391 21 20.5304 21 20V6L18 2H6Z" />
              <path d="M3 6H21" />
              <path d="M16 10C16 11.0609 15.5786 12.0783 14.8284 12.8284C14.0783 13.5786 13.0609 14 12 14C10.9391 14 9.92172 13.5786 9.17157 12.8284C8.42143 12.0783 8 11.0609 8 10" />
            </svg>
            <span className="cart-count">{cartItems.length}</span>
          </button>
        </div>
      </div>

      {/* Inline Search Bar */}
      {searchOpen && (
        <div className="search-overlay">
          <div className="navbar-search-panel">
            <div className="search-container">
              <div className="search-input-wrapper">
                <svg className="search-icon-large" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="11" cy="11" r="8" />
                  <path d="M21 21L16.65 16.65" />
                </svg>
                <input type="text" placeholder="What are you looking for?" autoFocus />
                <button onClick={() => setSearchOpen(false)} className="close-search">✕</button>
              </div>
              <div className="popular-searches">
                <h4>Popular Searches</h4>
                <div className="search-tags">
                  <span>Pearl Earrings</span>
                  <span>Designer Tote</span>
                  <span>Silk Blouse</span>
                  <span>Evening Wear</span>
                </div>
              </div>
            </div>
          </div>
          <div className="search-backdrop" onClick={() => setSearchOpen(false)}></div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

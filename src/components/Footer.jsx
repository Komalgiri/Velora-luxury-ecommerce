import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <h2 className="footer-logo">VELORA</h2>
            <p className="footer-desc">Modern fashion and jewelry designed for women who lead with confidence.</p>
          </div>
          
          <div className="footer-links">
            <h4 className="footer-heading">Shop</h4>
            <ul>
              <li><a href="#">Jewelry</a></li>
              <li><a href="#">Fashion</a></li>
              <li><a href="#">Accessories</a></li>
            </ul>
          </div>
          
          <div className="footer-links">
            <h4 className="footer-heading">Customer Care</h4>
            <ul>
              <li><a href="#">Shipping</a></li>
              <li><a href="#">Returns</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-links">
            <h4 className="footer-heading">Social Media</h4>
            <ul>
              <li><a href="#">Instagram</a></li>
              <li><a href="#">Pinterest</a></li>
              <li><a href="#">Newsletter</a></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} VELORA. All Rights Reserved.</p>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

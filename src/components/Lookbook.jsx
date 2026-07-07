import React from 'react';
import './Lookbook.css';
import jewelryImg from '../assets/promo_fashion_jewelry.png';
import apparelImg from '../assets/promo_fashion_apparel.png';
import handbagImg from '../assets/velora_handbag.png';

const Lookbook = () => {
  return (
    <section className="promo-banners-section">
      <div className="promo-grid">
        
        {/* Card 1: Jewelry */}
        <div className="promo-card" style={{ backgroundColor: '#DCA496' }}>
          <div className="promo-content">
            <h3 className="promo-title">FINE<br/>JEWELRY</h3>
            <p className="promo-desc">Timeless elegance.<br/>Crafted to perfection.</p>
            <button className="promo-btn">SHOP JEWELRY</button>
          </div>
          <div className="promo-image-wrapper">
            <img src={jewelryImg} alt="Fine Jewelry" className="promo-img" />
          </div>
        </div>

        {/* Card 2: Apparel */}
        <div className="promo-card" style={{ backgroundColor: '#EBDAD0' }}>
          <div className="promo-content">
            <h3 className="promo-title" style={{ color: '#2A2A2A' }}>LUXURY<br/>APPAREL</h3>
            <p className="promo-desc" style={{ color: '#2A2A2A' }}>Minimalist silhouettes.<br/>Premium fabrics.</p>
            <button className="promo-btn light">SHOP APPAREL</button>
          </div>
          <div className="promo-image-wrapper">
            <img src={apparelImg} alt="Luxury Apparel" className="promo-img" />
          </div>
        </div>

        {/* Card 3: Handbags */}
        <div className="promo-card" style={{ backgroundColor: '#A66A65' }}>
          <div className="promo-content">
            <h3 className="promo-title">DESIGNER<br/>HANDBAGS</h3>
            <p className="promo-desc">The ultimate statement.<br/>Everyday luxury.</p>
            <button className="promo-btn">SHOP BAGS</button>
          </div>
          <div className="promo-image-wrapper">
            <img src={handbagImg} alt="Designer Handbags" className="promo-img" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Lookbook;

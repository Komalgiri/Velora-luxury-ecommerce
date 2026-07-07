import React from 'react';
import { Link } from 'react-router-dom';
import './Collections.css';
import jewelryImg from '../assets/velora_jewelry.png';
import apparelImg from '../assets/velora_apparel.png';
import handbagImg from '../assets/velora_handbag.png';
import accessoriesImg from '../assets/velora_accessories.png';

const collectionsData = [
  {
    id: 1,
    title: 'Fine Jewelry',
    count: '124 Products',
    image: jewelryImg,
  },
  {
    id: 2,
    title: 'Luxury Apparel',
    count: '86 Products',
    image: apparelImg,
  },
  {
    id: 3,
    title: 'Handbags',
    count: '42 Products',
    image: handbagImg,
  },
  {
    id: 4,
    title: 'Accessories',
    count: '156 Products',
    image: accessoriesImg,
  },
];

const Collections = () => {
  return (
    <section className="section collections-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Featured Collections</h2>
          <p className="section-subtitle">Curated essentials for the modern wardrobe.</p>
        </div>

        <div className="collections-bento">
          
          {/* Card 1: Large Featured */}
          <div className="bento-card bento-large">
            <div className="bento-image-wrapper">
              <img src={jewelryImg} alt="Fine Jewelry" />
              <div className="bento-overlay">
                <Link to="/shop" className="bento-shop-link" style={{ textDecoration: 'none' }}>Explore Collection</Link>
              </div>
            </div>
            <div className="bento-info">
              <h3 className="bento-title">Fine Jewelry</h3>
              <span className="bento-count">124 Products</span>
            </div>
          </div>

          {/* Card 2: Top Middle (Apparel) */}
          <div className="bento-card bento-apparel">
            <div className="bento-image-wrapper">
              <img src={apparelImg} alt="Luxury Apparel" style={{ objectPosition: 'top center' }} />
              <div className="bento-overlay">
                <Link to="/shop" className="bento-shop-link" style={{ textDecoration: 'none' }}>Explore Collection</Link>
              </div>
            </div>
            <div className="bento-info">
              <h3 className="bento-title">Luxury Apparel</h3>
              <span className="bento-count">86 Products</span>
            </div>
          </div>

          {/* Card 3: Top Right (Accessories) */}
          <div className="bento-card bento-accessories">
            <div className="bento-image-wrapper">
              <img src={accessoriesImg} alt="Accessories" />
              <div className="bento-overlay">
                <Link to="/shop" className="bento-shop-link" style={{ textDecoration: 'none' }}>Explore Accessories</Link>
              </div>
            </div>
            <div className="bento-info">
              <h3 className="bento-title">Everyday Accessories</h3>
              <span className="bento-count">156 Products</span>
            </div>
          </div>

          {/* Card 4: Bottom Middle (Discount) */}
          <div className="bento-card bento-promo">
            <div className="bento-promo-content">
              <span className="promo-badge">Limited Time</span>
              <h3 className="promo-headline">END OF SEASON SALE</h3>
              <p className="promo-sub">Up to 40% off select luxury essentials.</p>
              <Link to="/shop" className="promo-btn-dark" style={{ textDecoration: 'none', display: 'inline-block' }}>Shop Sale</Link>
            </div>
          </div>

          {/* Card 5: Bottom Right (Bag) */}
          <div className="bento-card bento-bag">
            <div className="bento-image-wrapper">
              <img src={handbagImg} alt="Designer Handbags" />
              <div className="bento-overlay">
                <Link to="/shop" className="bento-shop-link" style={{ textDecoration: 'none' }}>Explore Collection</Link>
              </div>
            </div>
            <div className="bento-info">
              <h3 className="bento-title">Designer Bags</h3>
              <span className="bento-count">42 Products</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Collections;

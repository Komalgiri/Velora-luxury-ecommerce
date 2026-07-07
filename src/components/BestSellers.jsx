import React from 'react';
import './BestSellers.css';

// Reusing generated images for the grid
import img1 from '../assets/velora_silver_necklace.png';
import img2 from '../assets/velora_pearl_earrings.png';
import img3 from '../assets/velora_statement_ring.png';
import img4 from '../assets/velora_structured_blazer.png';
import img5 from '../assets/velora_handbag.png';
import img6 from '../assets/velora_silk_dress.png';
import img7 from '../assets/velora_jewelry.png';
import img8 from '../assets/velora_accessories.png';

const bestSellers = [
  { id: 1, name: 'Signature Silver Chain', price: '$450', img: img1, label: 'Best Seller' },
  { id: 2, name: 'Classic Pearl Drops', price: '$220', img: img2, label: 'New' },
  { id: 3, name: 'Oversized Onyx Ring', price: '$310', img: img3, label: '' },
  { id: 4, name: 'Tailored Wool Blazer', price: '$890', img: img4, label: 'Limited Edition' },
  { id: 5, name: 'Minimalist Tote', price: '$1,200', img: img5, label: 'Best Seller' },
  { id: 6, name: 'Evening Silk Gown', price: '$650', img: img6, label: '' },
  { id: 7, name: 'Diamond Tennis Bracelet', price: '$2,400', img: img7, label: 'Limited Edition' },
  { id: 8, name: 'Silk Scarf & Shades', price: '$350', img: img8, label: 'New' },
];

const BestSellers = () => {
  return (
    <section className="section best-sellers-section" style={{ position: 'relative' }}>
      {/* Decorative Graphics */}
      <svg className="decorative-star star-1" viewBox="0 0 24 24" fill="none" stroke="var(--luxury-silver)" strokeWidth="1.5">
        <path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M4.93 19.07L19.07 4.93" />
      </svg>
      <svg className="decorative-star star-2" viewBox="0 0 24 24" fill="none" stroke="var(--luxury-silver)" strokeWidth="1.5">
        <path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M4.93 19.07L19.07 4.93" />
      </svg>
      <svg className="decorative-star star-3" viewBox="0 0 24 24" fill="none" stroke="var(--luxury-silver)" strokeWidth="1">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
      </svg>

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="section-header" style={{ marginBottom: '5rem' }}>
          <h2 className="shop-favorites-title">
            <span className="sparkle">✧</span>
            SHOP OUR <span className="cursive-text">favorites</span>
            <span className="sparkle">✧</span>
          </h2>
        </div>

        <div className="best-sellers-grid">
          {bestSellers.slice(0, 6).map(product => (
            <div key={product.id} className="bs-card">
              <div className="bs-image-container">
                {product.label && (
                  <span className="bs-label">{product.label}</span>
                )}
                <img src={product.img} alt={product.name} className="bs-image" />
                <div className="bs-hover-actions">
                  <button className="bs-quick-add">Quick Add</button>
                </div>
              </div>
              <div className="bs-info">
                <h3 className="bs-name">{product.name}</h3>
                <span className="bs-price">{product.price}</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="bs-view-all">
          <button className="btn-secondary dark">View All Best Sellers</button>
        </div>
      </div>
    </section>
  );
};

export default BestSellers;

import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './NewArrivals.css';
import necklaceImg from '../assets/velora_silver_necklace.png';
import earringsImg from '../assets/velora_pearl_earrings.png';
import ringImg from '../assets/velora_statement_ring.png';
import blazerImg from '../assets/velora_structured_blazer.png';
import handbagImg from '../assets/velora_handbag.png'; // Reused
import dressImg from '../assets/velora_silk_dress.png';

const products = [
  { id: 1, name: 'Silver Chain Necklace', price: '$450', img: necklaceImg },
  { id: 2, name: 'Pearl Drop Earrings', price: '$220', img: earringsImg },
  { id: 3, name: 'Bold Statement Ring', price: '$310', img: ringImg },
  { id: 4, name: 'Structured Wool Blazer', price: '$890', img: blazerImg },
  { id: 5, name: 'Luxury Leather Handbag', price: '$1,200', img: handbagImg },
  { id: 6, name: 'Flowing Silk Dress', price: '$650', img: dressImg },
];

const NewArrivals = () => {
  const { addToCart } = useCart();
  const marqueeItems = [...products, ...products];

  return (
    <section className="section new-arrivals-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">New Arrivals</h2>
          <p className="section-subtitle">The latest pieces added to our collection.</p>
        </div>

        <div className="marquee-container">
          <div className="product-track">
            {marqueeItems.map((product, index) => (
              <div key={`${product.id}-${index}`} className="product-card">
              <div className="product-image-container">
                <img src={product.img} alt={product.name} className="product-image primary-img" />
                {/* For hover swap effect, we duplicate the image and use CSS scaling/filter to mimic an alternate view */}
                <img src={product.img} alt={product.name} className="product-image hover-img" />
                
                <div className="product-actions">
                  <Link to={`/product/${product.id}`} className="action-btn" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    Quick View
                  </Link>
                  <button className="action-icon-btn" aria-label="Add to Wishlist">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                    </svg>
                  </button>
                </div>
                <div className="add-to-cart-container">
                   <button className="add-to-cart-btn" onClick={() => addToCart(product)}>Add to Cart</button>
                </div>
              </div>
              <div className="product-info">
                <h3 className="product-name">{product.name}</h3>
                <span className="product-price">{product.price}</span>
              </div>
            </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;

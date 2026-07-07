import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { SlidersHorizontal, ChevronDown } from 'lucide-react';
import AnimatedPage from '../components/AnimatedPage';
import './Shop.css';

// Reusing generated images for the grid
import img1 from '../assets/velora_silver_necklace.png';
import img2 from '../assets/velora_pearl_earrings.png';
import img3 from '../assets/velora_statement_ring.png';
import img4 from '../assets/velora_structured_blazer.png';
import img5 from '../assets/velora_handbag.png';
import img6 from '../assets/velora_silk_dress.png';
import img7 from '../assets/velora_jewelry.png';
import img8 from '../assets/velora_accessories.png';

const allProducts = [
  { id: 1, name: 'Signature Silver Chain', price: '$450', img: img1, category: 'Jewelry' },
  { id: 2, name: 'Classic Pearl Drops', price: '$220', img: img2, category: 'Jewelry' },
  { id: 3, name: 'Oversized Onyx Ring', price: '$310', img: img3, category: 'Jewelry' },
  { id: 4, name: 'Tailored Wool Blazer', price: '$890', img: img4, category: 'Fashion' },
  { id: 5, name: 'Minimalist Tote', price: '$1,200', img: img5, category: 'Accessories' },
  { id: 6, name: 'Evening Silk Gown', price: '$650', img: img6, category: 'Fashion' },
  { id: 7, name: 'Diamond Tennis Bracelet', price: '$2,400', img: img7, category: 'Jewelry' },
  { id: 8, name: 'Silk Scarf & Shades', price: '$350', img: img8, category: 'Accessories' },
];

const Shop = () => {
  const { addToCart } = useCart();
  const [activeCategory, setActiveCategory] = useState('All');
  const [sortOption, setSortOption] = useState('Featured');
  
  const categories = ['All', 'Jewelry', 'Fashion', 'Accessories'];

  const filteredProducts = activeCategory === 'All' 
    ? allProducts 
    : allProducts.filter(p => p.category === activeCategory);

  return (
    <AnimatedPage>
      <div className="shop-page">
      <div className="shop-header">
        <h1>The Collection</h1>
        <p>Discover our curated selection of luxury pieces.</p>
      </div>

      <div className="shop-container">
        <aside className="shop-sidebar">
          <div className="filter-group">
            <h3 className="filter-title">
              <SlidersHorizontal size={18} /> Filters
            </h3>
          </div>

          <div className="filter-group">
            <h4>Category</h4>
            <ul className="filter-list">
              {categories.map(cat => (
                <li 
                  key={cat} 
                  className={activeCategory === cat ? 'active' : ''}
                  onClick={() => setActiveCategory(cat)}
                >
                  {cat}
                </li>
              ))}
            </ul>
          </div>

          <div className="filter-group">
            <h4>Price Range</h4>
            <ul className="filter-list">
              <li>Under $500</li>
              <li>$500 - $1,000</li>
              <li>Over $1,000</li>
            </ul>
          </div>
        </aside>

        <main className="shop-main">
          <div className="shop-toolbar">
            <div className="results-count">Showing {filteredProducts.length} Results</div>
            <div className="sort-dropdown">
              <span>Sort by: {sortOption}</span>
              <ChevronDown size={16} />
            </div>
          </div>

          <div className="product-grid">
            {filteredProducts.map((product) => (
              <div key={product.id} className="product-card">
                <div className="product-image-container">
                  <Link to={`/product/${product.id}`}>
                    <img src={product.img} alt={product.name} className="product-image primary-img" />
                    <img src={product.img} alt={product.name} className="product-image hover-img" />
                  </Link>
                  <div className="product-actions">
                    <button className="action-btn">Quick View</button>
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
        </main>
      </div>
      </div>
    </AnimatedPage>
  );
};

export default Shop;

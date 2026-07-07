import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { Heart, ZoomIn, Info, ShieldCheck, Truck } from 'lucide-react';
import AnimatedPage from '../components/AnimatedPage';
import './Product.css';

// Reusing generated images for the product page
import img1 from '../assets/velora_silver_necklace.png';
import img2 from '../assets/velora_pearl_earrings.png';
import img3 from '../assets/velora_statement_ring.png';
import img4 from '../assets/velora_structured_blazer.png';

const allProducts = [
  { id: 1, name: 'Signature Silver Chain', price: '$450', img: img1, desc: 'A timeless staple crafted from pure sterling silver. Designed to be worn alone or layered.' },
  { id: 2, name: 'Classic Pearl Drops', price: '$220', img: img2, desc: 'Freshwater pearls delicately suspended from 14k gold-filled hoops.' },
  { id: 3, name: 'Oversized Onyx Ring', price: '$310', img: img3, desc: 'Make a bold statement with this hand-cut onyx centerpiece.' },
  { id: 4, name: 'Tailored Wool Blazer', price: '$890', img: img4, desc: 'Impeccably tailored from premium Italian wool for a sharp, structured fit.' },
];

const Product = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [selectedColor, setSelectedColor] = useState('Silver');
  const [selectedSize, setSelectedSize] = useState('OS');
  const [isZoomed, setIsZoomed] = useState(false);

  // Fallback if ID is not found
  const product = allProducts.find(p => p.id === parseInt(id)) || allProducts[0];

  const handleMouseMove = (e) => {
    if (!isZoomed) return;
    const { left, top, width, height } = e.target.getBoundingClientRect();
    const x = (e.clientX - left) / width * 100;
    const y = (e.clientY - top) / height * 100;
    e.target.style.transformOrigin = `${x}% ${y}%`;
  };

  return (
    <AnimatedPage>
      <div className="product-page">
      <div className="product-container">
        
        <div className="product-gallery">
          <div className="gallery-thumbnails">
            <img src={product.img} alt="Thumb 1" className="active" />
            <img src={product.img} alt="Thumb 2" />
            <img src={product.img} alt="Thumb 3" />
          </div>
          <div 
            className={`main-image-container ${isZoomed ? 'zoomed' : ''}`}
            onClick={() => setIsZoomed(!isZoomed)}
            onMouseMove={handleMouseMove}
            onMouseLeave={() => setIsZoomed(false)}
          >
            <button className="zoom-icon"><ZoomIn size={20}/></button>
            <img src={product.img} alt={product.name} className="main-image" />
          </div>
        </div>

        <div className="product-details">
          <nav className="breadcrumb">Home / Shop / {product.name}</nav>
          
          <h1 className="prod-title">{product.name}</h1>
          <p className="prod-price">{product.price}</p>
          
          <p className="prod-desc">{product.desc}</p>

          <div className="prod-options">
            <div className="option-group">
              <h4>Color: <span>{selectedColor}</span></h4>
              <div className="color-swatches">
                <button className={`swatch ${selectedColor === 'Silver' ? 'active' : ''}`} onClick={() => setSelectedColor('Silver')} style={{background: '#C0C0C0'}}></button>
                <button className={`swatch ${selectedColor === 'Gold' ? 'active' : ''}`} onClick={() => setSelectedColor('Gold')} style={{background: '#D4AF37'}}></button>
              </div>
            </div>

            <div className="option-group">
              <h4>Size: <span>{selectedSize}</span></h4>
              <div className="size-selector">
                {['OS', 'S', 'M', 'L'].map(size => (
                  <button 
                    key={size}
                    className={`size-btn ${selectedSize === size ? 'active' : ''}`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="prod-actions">
            <button className="add-cart-btn" onClick={() => addToCart(product)}>Add to Cart</button>
            <button className="wishlist-btn" aria-label="Add to wishlist"><Heart size={24} /></button>
          </div>

          <div className="prod-accordion">
            <div className="accordion-item">
              <div className="accordion-header">
                <Truck size={18} /> <span>Shipping & Returns</span>
              </div>
              <p className="accordion-content">Complimentary worldwide shipping. Returns accepted within 30 days of purchase.</p>
            </div>
            <div className="accordion-item">
              <div className="accordion-header">
                <ShieldCheck size={18} /> <span>Lifetime Warranty</span>
              </div>
            </div>
            <div className="accordion-item">
              <div className="accordion-header">
                <Info size={18} /> <span>Product Details</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </AnimatedPage>
  );
};

export default Product;

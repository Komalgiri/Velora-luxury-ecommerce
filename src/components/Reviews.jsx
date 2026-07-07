import React from 'react';
import './Reviews.css';
import product1 from '../assets/velora_pearl_earrings.png';
import product2 from '../assets/velora_structured_blazer.png';
import product3 from '../assets/velora_silver_necklace.png';

const reviews = [
  {
    id: 1,
    name: 'Eleanor V.',
    review: 'The craftsmanship of the pearl earrings is unparalleled. They instantly elevate my evening wardrobe.',
    rating: 5,
    image: product1
  },
  {
    id: 2,
    name: 'Sophia L.',
    review: 'My tailored blazer fits immaculately. Velora has completely redefined modern luxury for me.',
    rating: 5,
    image: product2
  },
  {
    id: 3,
    name: 'Isabella M.',
    review: 'Exceptional service and beautiful packaging. The signature silver chain is a piece I wear every day.',
    rating: 5,
    image: product3
  }
];

const Reviews = () => {
  return (
    <section className="section reviews-section">
      <div className="container">
        <div className="reviews-header-minimal">
          <h2 className="reviews-title-minimal">Words from our Clients</h2>
        </div>
        
        <div className="reviews-grid-minimal">
          {reviews.map(review => (
            <div key={review.id} className="review-card-minimal">
              
              {/* Product Image */}
              <div className="review-product-img">
                <img src={review.image} alt="Purchased product" />
              </div>

              {/* Stars */}
              <div className="review-stars-minimal">
                {[...Array(review.rating)].map((_, i) => (
                  <svg key={i} viewBox="0 0 24 24" fill="#111">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                  </svg>
                ))}
              </div>

              {/* Review Content */}
              <p className="review-quote-minimal">"{review.review}"</p>
              
              <h4 className="review-author-minimal">{review.name}</h4>
              <span className="review-verified">Verified Buyer</span>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;

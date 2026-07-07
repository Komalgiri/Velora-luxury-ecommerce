import React from 'react';
import { useCart } from '../context/CartContext';
import AnimatedPage from '../components/AnimatedPage';
import { ShieldCheck, CreditCard } from 'lucide-react';
import './Checkout.css';

const Checkout = () => {
  const { cartItems } = useCart();

  const subtotal = cartItems.reduce((total, item) => {
    const numericPrice = parseFloat(item.price.replace(/[^0-9.-]+/g,""));
    return total + numericPrice * item.quantity;
  }, 0);

  return (
    <AnimatedPage>
      <div className="checkout-page">
        <div className="checkout-container">
          <div className="checkout-form-section">
            <h1 className="checkout-title">Secure Checkout</h1>
            
            <div className="checkout-section">
              <h2>Contact Information</h2>
              <input type="email" placeholder="Email Address" className="checkout-input" />
            </div>

            <div className="checkout-section">
              <h2>Shipping Address</h2>
              <div className="form-row">
                <input type="text" placeholder="First Name" className="checkout-input" />
                <input type="text" placeholder="Last Name" className="checkout-input" />
              </div>
              <input type="text" placeholder="Address" className="checkout-input" />
              <input type="text" placeholder="Apartment, suite, etc. (optional)" className="checkout-input" />
              <div className="form-row">
                <input type="text" placeholder="City" className="checkout-input" />
                <input type="text" placeholder="Postal Code" className="checkout-input" />
              </div>
            </div>

            <div className="checkout-section">
              <h2>Payment Method</h2>
              <div className="payment-box">
                <div className="payment-header">
                  <CreditCard size={20} />
                  <span>Credit Card</span>
                </div>
                <input type="text" placeholder="Card Number" className="checkout-input" />
                <div className="form-row">
                  <input type="text" placeholder="Expiration Date (MM/YY)" className="checkout-input" />
                  <input type="text" placeholder="Security Code" className="checkout-input" />
                </div>
                <input type="text" placeholder="Name on Card" className="checkout-input" />
              </div>
            </div>

            <button className="pay-now-btn">Pay ${subtotal.toFixed(2)}</button>

            <div className="secure-badge">
              <ShieldCheck size={16} />
              <span>Payments are secure and encrypted.</span>
            </div>
          </div>

          <div className="checkout-summary-section">
            <div className="order-summary-box">
              <h2>Order Summary</h2>
              <div className="summary-items">
                {cartItems.length === 0 ? (
                  <p>Your cart is empty.</p>
                ) : (
                  cartItems.map(item => (
                    <div key={item.id} className="summary-item">
                      <img src={item.img} alt={item.name} />
                      <div className="summary-item-info">
                        <h4>{item.name}</h4>
                        <p>Qty: {item.quantity}</p>
                      </div>
                      <span className="summary-item-price">{item.price}</span>
                    </div>
                  ))
                )}
              </div>
              
              <div className="summary-totals">
                <div className="summary-row">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="summary-row">
                  <span>Shipping</span>
                  <span>Free</span>
                </div>
                <div className="summary-row total">
                  <span>Total</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
};

export default Checkout;

import React from 'react';
import avatarImg from '../assets/velora_jewelry.png';
import handbagImg from '../assets/velora_handbag.png';

const Profile = () => {
  return (
    <div style={{ backgroundColor: '#F8F8F8', minHeight: '100vh', paddingTop: '8rem', paddingBottom: '5rem' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 5%' }}>
        
        {/* Profile Header */}
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          backgroundColor: 'white', 
          padding: '3rem', 
          borderRadius: '8px', 
          boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
          marginBottom: '2rem'
        }}>
          <img 
            src={avatarImg} 
            alt="Grayson W." 
            style={{ width: '100px', height: '100px', borderRadius: '50%', objectFit: 'cover', marginRight: '2rem', border: '1px solid #ddd', filter: 'grayscale(50%)' }} 
          />
          <div>
            <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.5rem', marginBottom: '0.5rem', color: '#111' }}>Welcome back, Grayson.</h1>
            <p style={{ fontFamily: 'var(--font-body)', color: '#777', textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.85rem' }}>
              <span style={{ color: '#C6A56E', fontWeight: 'bold' }}>✦ BLACK TIER MEMBER</span> &nbsp;|&nbsp; Member since 2024
            </p>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
          
          {/* Sidebar Menu */}
          <div style={{ flex: '1', minWidth: '250px', backgroundColor: 'white', padding: '2rem', borderRadius: '8px', boxShadow: '0 4px 20px rgba(0,0,0,0.03)' }}>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontFamily: 'var(--font-body)' }}>
              <li style={{ padding: '1rem 0', borderBottom: '1px solid #eee', fontWeight: '600', color: '#111', cursor: 'pointer' }}>Order History</li>
              <li style={{ padding: '1rem 0', borderBottom: '1px solid #eee', color: '#777', cursor: 'pointer' }}>Wishlist (3)</li>
              <li style={{ padding: '1rem 0', borderBottom: '1px solid #eee', color: '#777', cursor: 'pointer' }}>Saved Addresses</li>
              <li style={{ padding: '1rem 0', borderBottom: '1px solid #eee', color: '#777', cursor: 'pointer' }}>Payment Methods</li>
              <li style={{ padding: '1rem 0', color: '#777', cursor: 'pointer' }}>Account Settings</li>
            </ul>
          </div>

          {/* Main Content Area */}
          <div style={{ flex: '3', minWidth: '300px' }}>
            
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', marginBottom: '1.5rem', color: '#111' }}>Recent Orders</h3>
            
            {/* Order Card */}
            <div style={{ backgroundColor: 'white', padding: '2rem', borderRadius: '8px', boxShadow: '0 4px 20px rgba(0,0,0,0.03)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #eee', paddingBottom: '1rem', marginBottom: '1.5rem' }}>
                <div>
                  <p style={{ fontSize: '0.85rem', color: '#777', marginBottom: '0.2rem' }}>Order Number</p>
                  <p style={{ fontWeight: '600' }}>#VLR-98244</p>
                </div>
                <div>
                  <p style={{ fontSize: '0.85rem', color: '#777', marginBottom: '0.2rem' }}>Date placed</p>
                  <p style={{ fontWeight: '600' }}>Oct 12, 2025</p>
                </div>
                <div>
                  <p style={{ fontSize: '0.85rem', color: '#777', marginBottom: '0.2rem' }}>Total amount</p>
                  <p style={{ fontWeight: '600' }}>$1,450.00</p>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <button style={{ backgroundColor: '#111', color: 'white', border: 'none', padding: '8px 16px', borderRadius: '4px', cursor: 'pointer' }}>View Details</button>
                </div>
              </div>
              
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <img src={handbagImg} alt="Designer Bag" style={{ width: '80px', height: '80px', objectFit: 'cover', borderRadius: '4px', marginRight: '1.5rem' }} />
                <div>
                  <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem', marginBottom: '0.2rem' }}>The Signature Tote</h4>
                  <p style={{ color: '#777', fontSize: '0.9rem' }}>Color: Midnight Black</p>
                </div>
                <div style={{ marginLeft: 'auto', fontWeight: 'bold' }}>
                  Delivered
                </div>
              </div>
            </div>

          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Profile;

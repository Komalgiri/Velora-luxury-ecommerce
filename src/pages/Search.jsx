import React from 'react';

const Search = () => {
  return (
    <div style={{ padding: '10rem 5%', textAlign: 'center', minHeight: '60vh' }}>
      <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '3rem', marginBottom: '1rem' }}>Search</h1>
      <input 
        type="text" 
        placeholder="Search for products..." 
        style={{ padding: '1rem 2rem', width: '100%', maxWidth: '500px', fontSize: '1rem', border: '1px solid #ddd', borderRadius: '4px' }}
      />
    </div>
  );
};

export default Search;

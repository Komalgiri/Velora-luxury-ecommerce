import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Product from './pages/Product';
import Checkout from './pages/Checkout';
import CartDrawer from './components/CartDrawer';
import CursorGlow from './components/CursorGlow';

import Profile from './pages/Profile';
import Search from './pages/Search';

function App() {
  return (
    <ThemeProvider>
      <CartProvider>
        <Router>
          <CursorGlow />
        <Navbar />
        <CartDrawer />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
        <Footer />
      </Router>
      </CartProvider>
    </ThemeProvider>
  );
}

export default App;

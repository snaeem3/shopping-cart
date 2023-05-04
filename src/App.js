import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { products } from './products';
import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import Shop from './components/Shop';

const App = () => {
  const [cart, setCart] = useState([]);

  return (
    <BrowserRouter>
      <div className="App">
        <Nav homePath="/" shopPath="/shop" />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop products={products} />} />
          {/* <Route path="/checkout" element={<Checkout cart={cart} />} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;

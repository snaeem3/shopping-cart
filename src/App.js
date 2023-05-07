import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import uniqid from 'uniqid';
import { productData } from './productData';
import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import Shop from './components/Shop';
import ProductDetail from './components/ProductDetail';

const App = () => {
  const [cart, setCart] = useState([]);

  // Give every product a unique ID
  const products = productData.map((obj) => ({
    ...obj,
    id: uniqid(),
  }));
  const numCartProducts = cart.length; // number of unique products in cart

  const addItemToCart = (productName, quantity = 1) => {
    const updatedCart = [...cart];

    // Check if the product ID already exists in the cart
    const index = updatedCart.findIndex(
      (item) => item.productName === productName
    );

    if (index !== -1) {
      // If the product ID already exists, update the quantity
      updatedCart[index].quantity += quantity;
    } else {
      // If the product ID doesn't exist, add a new item to the cart
      updatedCart.push({ productName, quantity });
    }

    setCart(updatedCart);
  };

  return (
    <BrowserRouter>
      <div className="App">
        <Nav homePath="/" shopPath="/shop" numCartProducts={numCartProducts} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/shop"
            exact
            element={<Shop products={products} addItemToCart={addItemToCart} />}
          />
          <Route
            path="/shop/:productName"
            element={
              <ProductDetail
                addItemToCart={addItemToCart}
                products={products}
              />
            }
          />
          {/* <Route path="/checkout" element={<Checkout cart={cart} />} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;

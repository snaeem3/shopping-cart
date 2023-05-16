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
import Cart from './components/Cart';

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

  const deleteItemFromCart = (productName, quantity = -1) => {
    // A received quanity of -1 removes entire product from cart
    const updatedCart = [...cart];

    // Check if the product ID already exists in the cart
    const index = updatedCart.findIndex(
      (item) => item.productName === productName
    );

    if (index !== -1) {
      // If the product ID already exists, update the quantity
      if (quantity < 0) {
        // remove product from cart if negative quantity given
        updatedCart.splice(index, 1);
      } else {
        updatedCart[index].quantity -= quantity;
        if (updatedCart[index].quantity <= 0) {
          // remove product from cart if quantity is 0 or lower
          updatedCart.splice(index, 1);
        }
      }
    } else {
      // product doesn't exist
    }

    setCart(updatedCart);
  };

  const toggleCartView = () => {
    document.querySelector('.cart').classList.toggle('hidden');
  };

  const hideCartView = () => {
    document.querySelector('.cart').classList.add('hidden');
  };

  // document.addEventListener('click', (event) => {
  //   const cartDiv = document.querySelector('.cart');
  //   const isCartHidden = cartDiv.classList.contains('hidden');

  //   if (
  //     !event.target.closest('.cart') &&
  //     !isCartHidden &&
  //     !event.target.classList.contains('cart-toggle')
  //   ) {
  //     cartDiv.classList.add('hidden');
  //   }
  // });

  return (
    <BrowserRouter>
      <div className="App">
        <Nav
          homePath="/"
          shopPath="/shop"
          numCartProducts={numCartProducts}
          toggleCartView={toggleCartView}
        />
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
        <Cart
          cart={cart}
          products={products}
          deleteItemFromCart={deleteItemFromCart}
          addItemToCart={addItemToCart}
          hideCartView={hideCartView}
        />
      </div>
    </BrowserRouter>
  );
};

export default App;

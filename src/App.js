import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  HashRouter,
} from 'react-router-dom';
import uniqid from 'uniqid';
import { productData } from './productData';
import logo from './logo.svg';
// import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import Shop from './components/Shop';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';
import Footer from './components/Footer';

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
    document.querySelector('.overlay').classList.toggle('hidden');
  };

  const hideCartView = () => {
    document.querySelector('.overlay').classList.add('hidden');
  };

  return (
    <HashRouter>
      <Helmet>
        <title>Board Game Hub</title>
      </Helmet>
      <div className="App">
        <Nav
          homePath="/"
          shopPath="/shop"
          numCartProducts={numCartProducts}
          toggleCartView={toggleCartView}
        />
        <Routes>
          <Route path="/" element={<Home shopPath="/shop" />} />
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
                toggleCartView={toggleCartView}
              />
            }
          />
          {/* <Route path="/checkout" element={<Checkout cart={cart} />} /> */}
        </Routes>
        <div className="overlay hidden" onClick={hideCartView}>
          <Cart
            cart={cart}
            products={products}
            deleteItemFromCart={deleteItemFromCart}
            addItemToCart={addItemToCart}
            hideCartView={hideCartView}
          />
        </div>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;

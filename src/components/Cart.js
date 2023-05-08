/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import uniqid from 'uniqid';

const Cart = (props) => {
  const { cart, products } = props;
  function getObjectByName(value, array) {
    return array.find((obj) => obj.name === value);
  }
  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cart.length < 1 ? (
        <p>No products in cart</p>
      ) : (
        <div className="CartProduct-container">
          {cart.map((cartProduct) => (
            <CartProduct
              key={getObjectByName(cartProduct.productName, products).id}
              name={cartProduct.productName}
              imgUrl={getObjectByName(cartProduct.productName, products).imgUrl}
              price={getObjectByName(cartProduct.productName, products).price}
              category={
                getObjectByName(cartProduct.productName, products).category
              }
              quantity={cartProduct.quantity}
            />
          ))}
        </div>
      )}
    </div>
  );
};

const CartProduct = (props) => {
  const { name, imgUrl, price, quantity, category } = props;

  return (
    <div className="cart-product">
      <h3>{name}</h3>
      <img
        src={imgUrl}
        className="product-image cart-product-image"
        alt={name}
      />
      <h4>{category}</h4>
      <h4>{price}</h4>
      <button className="reduce-qty-btn" type="button">
        -
      </button>
      <input type="number" name="qty" id="qty" value={quantity} />
      <button className="increase-qty-btn" type="button">
        +
      </button>
      <h4 className="subtotal">Subtotal: ${quantity * price}</h4>
    </div>
  );
};

export default Cart;

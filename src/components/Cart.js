/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import uniqid from 'uniqid';

const Cart = (props) => {
  const { cart, products, deleteItemFromCart, addItemToCart } = props;
  function getObjectByName(value, array) {
    return array.find((obj) => obj.name === value);
  }
  const getTotalPrice = () => {
    let totalPrice = 0;
    for (const cartProduct of cart) {
      const product = getObjectByName(cartProduct.productName, products);
      totalPrice += product.price * cartProduct.quantity;
    }
    return totalPrice;
  };
  return (
    <div className="cart">
      <h2>Your Cart</h2>
      <h3 className="total-price">Total Price: ${getTotalPrice()}</h3>
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
              deleteItemFromCart={deleteItemFromCart}
              addItemToCart={addItemToCart}
            />
          ))}
        </div>
      )}
    </div>
  );
};

const CartProduct = (props) => {
  const {
    name,
    imgUrl,
    price,
    quantity,
    category,
    deleteItemFromCart,
    addItemToCart,
  } = props;
  const subTotal = price * quantity;

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
      <button
        className="reduce-qty-btn"
        type="button"
        onClick={() => deleteItemFromCart(name, 1)}
      >
        -
      </button>
      <input type="number" name="qty" id="qty" value={quantity} />
      <button
        className="increase-qty-btn"
        type="button"
        onClick={() => addItemToCart(name, 1)}
      >
        +
      </button>
      <h4 className="subtotal">Subtotal: ${subTotal}</h4>
    </div>
  );
};

export default Cart;

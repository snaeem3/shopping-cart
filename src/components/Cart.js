/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import uniqid from 'uniqid';
import addIcon from '../images/add_FILL0_wght400_GRAD0_opsz48.svg';
import subtractIcon from '../images/remove_FILL0_wght400_GRAD0_opsz48.svg';
import closeIcon from '../images/close.svg';

const Cart = (props) => {
  const { cart, products, deleteItemFromCart, addItemToCart, hideCartView } =
    props;
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

  const handleCartClick = (event) => {
    event.stopPropagation();
  };

  return (
    <div className="cart" onClick={handleCartClick}>
      <button
        type="button"
        className="close-cart-btn"
        onClick={() => hideCartView()}
      >
        {/* x */}
        <img className="close icon" src={closeIcon} alt="close icon" />
      </button>
      <h2>Your Cart</h2>
      <h3 className="total-price">
        Total Price: $
        {(((getTotalPrice() + Number.EPSILON) * 100) / 100).toFixed(2)}
      </h3>
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
          <button type="button" className="checkout-btn supporting-icon">
            Checkout
          </button>
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
      <h4 className="dollar-sign">{price.toFixed(2)}</h4>
      <button
        className="reduce-qty-btn"
        type="button"
        onClick={() => deleteItemFromCart(name, 1)}
      >
        {/* - */}
        <img className="icon subtract" src={subtractIcon} alt="subtract icon" />
      </button>
      {/* <input type="number" name="qty" id="qty" value={quantity} /> */}
      <p className="current-qty">{quantity}</p>
      <button
        className="increase-qty-btn"
        type="button"
        onClick={() => addItemToCart(name, 1)}
      >
        {/* + */}
        <img className="icon add" src={addIcon} alt="add icon" />
      </button>
      <button
        className="remove-product-btn supporting-icon"
        type="button"
        onClick={() => deleteItemFromCart(name, quantity)}
      >
        Remove from cart
      </button>
      <h4 className="subtotal">
        Subtotal: $
        {(Math.round((subTotal + Number.EPSILON) * 100) / 100).toFixed(2)}
      </h4>
    </div>
  );
};

export default Cart;

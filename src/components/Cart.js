/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import uniqid from 'uniqid';

const Cart = (props) => {
  const { cart, products } = props;
  return (
    <div className="cart">
      <p>Cart is Empty</p>
    </div>
  );
};

export default Cart;

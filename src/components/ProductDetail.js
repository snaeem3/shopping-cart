/* eslint-disable react/prop-types */
import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

const ProductDetail = (props) => {
  const { productName } = useParams();
  const { addItemToCart, products } = props;
  // Use the productId to fetch and display the appropriate product

  const [quantity, setQuantity] = useState(0);

  const productObj = getObjectByName(productName, products);
  function getObjectByName(value, array) {
    return array.find((obj) => obj.name === value);
  }
  // console.table(productObj);

  return (
    <div className="product-detail">
      {productObj.name}
      {productObj.description}
      {productObj.price.toFixed(2)}
      <label htmlFor="qty-input">Quantity: </label>
      <input
        type="number"
        name="qty-input"
        id="qty-input"
        value={quantity > 0 ? quantity : 1}
        min={1}
        onChange={(e) => setQuantity(parseInt(e.target.value))}
      />
      <button
        className="add-to-cart-btn"
        type="button"
        onClick={() =>
          addItemToCart(
            productObj.name,
            parseInt(document.querySelector('#qty-input').value)
          )
        }
        disabled={!productObj.inStock}
      >
        Add to cart
      </button>
    </div>
  );
};

export default ProductDetail;

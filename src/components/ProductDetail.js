/* eslint-disable react/prop-types */
import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

const ProductDetail = (props) => {
  const { productName } = useParams();
  const { addItemToCart, products, toggleCartView } = props;

  const [quantity, setQuantity] = useState(0);

  const productObj = getObjectByName(productName, products);
  function getObjectByName(value, array) {
    return array.find((obj) => obj.name === value);
  }

  return (
    <div className="product-detail">
      <h1>{productObj.name}</h1>
      <img src={productObj.imgSrc} alt={productObj.name} />
      <div className="product-detail-content">
        <p className="product-description">{productObj.description}</p>
        <strong className="dollar-sign">{productObj.price.toFixed(2)}</strong>
        <div className="qty-container">
          <label htmlFor="qty-input">Quantity: </label>
          <input
            type="number"
            name="qty-input"
            id="qty-input"
            value={quantity > 0 ? quantity : 1}
            min={1}
            onChange={(e) => setQuantity(parseInt(e.target.value))}
          />
        </div>
        <button
          className="add-to-cart-btn"
          type="button"
          onClick={() => {
            addItemToCart(
              productObj.name,
              parseInt(document.querySelector('#qty-input').value)
            );
            toggleCartView();
          }}
          disabled={!productObj.inStock}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;

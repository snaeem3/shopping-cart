/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import uniqid from 'uniqid';
import Product from './Product';

const Shop = (props) => {
  const { products, addItemToCart } = props;

  const [currentCategory, setCurrentCategory] = useState('All');
  const [hideOutOfStock, setHideOutOfStock] = useState(false);

  const categories = getUniqueValues(products);

  // Set an array of the current items to be shown in the shop based on current category
  const currentItems =
    currentCategory === 'All'
      ? products
      : products.filter((item) => item.category === currentCategory);

  function getUniqueValues(array) {
    if (!array) return [];

    const uniqueValues = array.reduce((values, obj) => {
      if (!values.includes(obj.category)) {
        values.push(obj.category);
      }
      return values;
    }, []);

    return uniqueValues;
  }

  return (
    <div>
      <h1>Shop</h1>
      <Sidebar
        currentCategory={currentCategory}
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        setHideOutOfStock={setHideOutOfStock}
      />
      <ProductGrid
        currentCategory={currentCategory}
        items={currentItems}
        hideOutOfStock={hideOutOfStock}
      />
    </div>
  );
};

const Sidebar = (props) => {
  const { currentCategory, categories, setCurrentCategory, setHideOutOfStock } =
    props;

  const handleCheckboxChange = (event) => {
    console.log(event.target);
    setHideOutOfStock(event.target.checked);
  };
  return (
    <div className="sidebar">
      <button
        type="button"
        key={uniqid()}
        onClick={(e) => setCurrentCategory('All')}
      >
        <h2 className="category-header">All Products</h2>
      </button>
      {categories.map((category) => (
        <button
          type="button"
          key={uniqid()}
          onClick={(e) => setCurrentCategory(category)}
        >
          <h2 className="category-header">{category}</h2>
        </button>
      ))}
      <input
        type="checkbox"
        name="hide-out-of-stock"
        id="hide-out-of-stock"
        onClick={(e) => setHideOutOfStock(e.target.checked)}
      />
    </div>
  );
};

const ProductGrid = (props) => {
  const { currentCategory, items, hideOutOfStock } = props;
  const categories = [...new Set(items.map((item) => item.category))]; // get unique categories from items
  // console.table(items);
  return (
    <div className="product-grid">
      {categories.map((category) => (
        <div
          key={category}
          className={`category-container ${
            category === currentCategory || category === 'all'
              ? 'active'
              : 'inactive'
          }`}
        >
          <h2>{category}</h2>
          {items
            .filter((item) => item.category === category)
            .map((item) => {
              if (hideOutOfStock && !item.inStock) {
                return;
              }
              return (
                <Product
                  key={item.id}
                  productId={item.id}
                  name={item.name}
                  price={item.price}
                  category={item.category}
                  inStock={item.inStock}
                  imgUrl={item.imgUrl}
                />
              );
            })}
        </div>
      ))}
    </div>
  );
};

export default Shop;

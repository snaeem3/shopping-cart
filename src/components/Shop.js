/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import uniqid from 'uniqid';
import Product from './Product';

const Shop = (props) => {
  const { products, addItemToCart } = props;

  const [currentCategory, setCurrentCategory] = useState('All');
  const [hideOutOfStock, setHideOutOfStock] = useState(false);
  const [sortMethod, setSortMethod] = useState('A-Z');

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

  const handleSortChange = (event) => {
    // let value = event.target.value;
    setSortMethod(event.target.value);
  };

  return (
    <div>
      <h1>Shop</h1>
      <label htmlFor="sort-select">Sort products by:</label>

      <select
        name="sort-select"
        id="sort-select"
        onChange={(e) => handleSortChange(e)}
      >
        {/* <option value="">--Please choose an option--</option> */}
        <option value="A-Z">Name A-Z</option>
        <option value="Z-A">Name Z-A</option>
        <option value="low-high">Price low-high</option>
        <option value="high-low">Price high-low</option>
      </select>
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
        sortMethod={sortMethod}
      />
    </div>
  );
};

const Sidebar = (props) => {
  const { currentCategory, categories, setCurrentCategory, setHideOutOfStock } =
    props;

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
  const { currentCategory, items, hideOutOfStock, sortMethod } = props;
  const categories = [...new Set(items.map((item) => item.category))]; // get unique categories from items

  const sortedItems = sortArrayOfObjects(items, sortMethod);
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
          {sortedItems
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

  function sortArrayOfObjects(arr, sortMethodString) {
    switch (sortMethodString) {
      case 'A-Z':
        return arr.sort((a, b) => a.name.localeCompare(b.name));
      case 'Z-A':
        return arr.sort((a, b) => b.name.localeCompare(a.name));
      case 'low-high':
        return arr.sort((a, b) => a.price - b.price);
      case 'high-low':
        return arr.sort((a, b) => b.price - a.price);
      default:
        throw new Error('Invalid sort method');
    }
  }
};

export default Shop;

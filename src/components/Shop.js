/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import uniqid from 'uniqid';
import Product from './Product';

const Shop = (props) => {
  const { products, addItemToCart } = props;

  const [currentCategory, setCurrentCategory] = useState('All');
  const [hideOutOfStock, setHideOutOfStock] = useState(false);
  const [searchText, setSearchText] = useState('');
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

    return uniqueValues.sort();
  }

  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleSortChange = (event) => {
    setSortMethod(event.target.value);
  };

  return (
    <main className="shop-container">
      <h1>Shop</h1>
      <div className="shop-controls-container">
        <div className="search-box">
          <label htmlFor="search-bar">Search Products</label>
          <div className="search-bar-wrapper">
            <span className="input" />
            <input
              type="search"
              id="search-bar"
              name="search-bar"
              onChange={(e) => handleSearchChange(e)}
            />
          </div>
        </div>
        <div className="sort-box">
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
        </div>
        <div className="outOfStock-box">
          <label htmlFor="hide-out-of-stock">Hide Out of Stock?</label>
          <input
            type="checkbox"
            name="hide-out-of-stock"
            id="hide-out-of-stock"
            className="toggle box-shadow"
            onClick={(e) => setHideOutOfStock(e.target.checked)}
          />
        </div>
      </div>
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
        searchText={searchText}
        sortMethod={sortMethod}
        addItemToCart={addItemToCart}
      />
    </main>
  );
};

const Sidebar = (props) => {
  const { currentCategory, categories, setCurrentCategory } = props;

  return (
    <ul className="sidebar">
      <li key={uniqid()}>
        <button
          type="button"
          className={`allProducts-btn ${
            currentCategory === 'All' ? 'current-category' : ''
          }`}
          onClick={(e) => setCurrentCategory('All')}
        >
          <h2 className="category-header">All Products</h2>
        </button>
      </li>
      {categories.map((category) => (
        <li key={uniqid()}>
          <button
            type="button"
            className={currentCategory === category ? 'current-category' : ''}
            onClick={(e) => setCurrentCategory(category)}
          >
            <h2 className="category-header">{category}</h2>
          </button>
        </li>
      ))}
    </ul>
  );
};

const ProductGrid = (props) => {
  const {
    currentCategory,
    items,
    hideOutOfStock,
    searchText,
    sortMethod,
    addItemToCart,
  } = props;
  const categories = [...new Set(items.map((item) => item.category))]; // get unique categories from items
  const sortedItems = sortArrayOfObjects(items, sortMethod);

  return (
    <div className="product-grid">
      {categories.map((category) => (
        <section
          key={category}
          className={`category-container ${
            category === currentCategory || category === 'all'
              ? 'active'
              : 'inactive'
          }`}
        >
          <h2>{category}</h2>
          <div className="sorted-products">
            {sortedItems
              .filter((item) => item.category === category)
              .map((item) => {
                if (hideOutOfStock && !item.inStock) {
                  return;
                }
                if (
                  searchText.length > 0 &&
                  !item.name.toLowerCase().includes(searchText.toLowerCase())
                ) {
                  // something is being searched and it does NOT match the search text
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
                    imgSrc={item.imgSrc}
                    addItemToCart={addItemToCart}
                  />
                );
              })}
          </div>
        </section>
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

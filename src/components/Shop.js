/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import uniqid from 'uniqid';
import Product from './Product';

const Shop = (props) => {
  const { products, addItemToCart } = props;

  const [currentCategory, setCurrentCategory] = useState('All');

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
      <Sidebar currentCategory={currentCategory} categories={categories} />
      <ProductGrid currentCategory={currentCategory} items={currentItems} />
    </div>
  );
};

const Sidebar = (props) => {
  const { currentCategory, categories } = props;
  // console.log(categories);

  return (
    <div className="sidebar">
      <h2>All Products</h2>
      {categories.map((category) => (
        <h2 className="category-header" key={uniqid()}>
          {category}
        </h2>
      ))}
    </div>
  );
};

const ProductGrid = (props) => {
  const { currentCategory, items } = props;
  const categories = [...new Set(items.map((item) => item.category))]; // get unique categories from items
  console.log(categories);
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
            .map((item) => (
              <Product
                key={item.id}
                productId={item.id}
                name={item.name}
                price={item.price}
                category={item.category}
                inStock={item.inStock}
                imgUrl={item.imgUrl}
              />
            ))}
        </div>
      ))}
    </div>
  );
};

export default Shop;

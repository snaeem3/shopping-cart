/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import uniqid from 'uniqid';
import Product from './Product';

const Shop = (props) => {
  const { products } = props;

  const [currentCategory, setCurrentCategory] = useState('All');

  const categories = getUniqueValues(products);

  // Set an array of the current items to be shown in the shop based on current category
  const currentItems =
    currentCategory === 'All'
      ? products
      : products.filter((item) => item.category === currentCategory);

  function getUniqueValues(array) {
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
  console.table(items);
  return (
    <div className="product-grid">
      {items.map((item) => (
        <Product
          name={item.name}
          price={item.price}
          category={item.category}
          inStock={item.inStock}
          imgUrl={item.imgUrl}
        />
      ))}
    </div>
  );
};

export default Shop;

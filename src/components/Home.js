/* eslint-disable react/prop-types */
import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { productData } from '../productData';
import SlideShow from './SlideShow';

const Home = (props) => {
  const { shopPath } = props;

  return (
    <main className="home">
      <h1>
        Board Game <span className="hub">Hub</span>
      </h1>
      <SlideShow
        images={productData.map((product) => product.imgSrc)}
        captions={productData.map((product) => product.name)}
      />
      <div className="home-text">
        <p>
          Explore our vast collection of board games, carefully curated to offer
          a diverse range of thrilling experiences. From strategic masterpieces
          to family-friendly classics, we have something for every taste and age
          group. Immerse yourself in captivating narratives, engage in intense
          competition, and forge unforgettable memories with friends and family.
        </p>
        <Link to={shopPath}>
          <button type="button" className="shop-btn box-shadow">
            Shop Now
          </button>
        </Link>
        <h2>Let the games begin!</h2>
      </div>
    </main>
  );
};

export default Home;

/* eslint-disable react/prop-types */
import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { productData } from '../productData';
import SlideShow from './SlideShow';

const Home = (props) => {
  const { shopPath } = props;
  const getImages = 0;

  return (
    <main className="home">
      <h1>
        Board Game <span className="hub">Hub</span>
      </h1>
      <SlideShow
        images={productData.map((product) => product.imgSrc)}
        captions={productData.map((product) => product.name)}
      />
      <p>
        Explore our vast collection of board games, carefully curated to offer a
        diverse range of thrilling experiences. From strategic masterpieces to
        family-friendly classics, we have something for every taste and age
        group. Immerse yourself in captivating narratives, engage in intense
        competition, and forge unforgettable memories with friends and family.
      </p>
      {/* <p>
        At Board Game Hub, we believe in the power of play. We strive to provide
        not only a fantastic selection of games but also an exceptional shopping
        experience. Our user-friendly website makes browsing and finding your
        favorite titles a breeze. Our team of passionate gamers is always on
        hand to offer expert recommendations, ensuring you find the perfect game
        for any occasion.
      </p> */}
      <Link to={shopPath}>
        <button type="button" className="shop-btn">
          Shop Now
        </button>
      </Link>
      <p>Let the games begin!</p>
    </main>
  );
};

export default Home;

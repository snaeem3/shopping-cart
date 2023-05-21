/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import '../styles/SlideShow.css'; // Assuming you have a CSS file for the slideshow styles

const SlideShow = (props) => {
  const { images, captions } = props;
  const interval = 5;

  const [index, setIndex] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setFadeOut(true);
      setTimeout(() => {
        setIndex((currentIndex) => (currentIndex + 1) % images.length);
        setFadeOut(false);
      }, 500); // Wait for 500ms before changing the index
    }, interval * 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [images.length, interval]);

  const activeImage = images[index];
  const activeCaption = captions[index];
  const fadeClass = fadeOut ? 'fade-out' : '';

  return (
    <figure className="slide-show">
      <img
        className={`slide ${fadeClass}`}
        src={activeImage}
        alt="slide show"
      />
      <figcaption className="slide-caption">{activeCaption}</figcaption>
    </figure>
  );
};

export default SlideShow;

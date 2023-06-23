import React, { useState } from 'react';
import './Banner.css';
import banner1 from './image1.svg';
import banner2 from './image2.svg';

function BannerSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const banners = [banner1, banner2];

  const handleNext = () => {
    const nextIndex = (activeIndex + 1) % banners.length;
    setActiveIndex(nextIndex);
  };

  const handlePrev = () => {
    const prevIndex = (activeIndex - 1 + banners.length) % banners.length;
    setActiveIndex(prevIndex);
  };

  return (
    <div className="banner-slider">
      <img src={banners[activeIndex]} alt="banner" />
      <div className="banner-controls">
        <button onClick={handlePrev}>&lt;</button>
        <button onClick={handleNext}>&gt;</button>
      </div>
    </div>
  );
}

export default BannerSlider;

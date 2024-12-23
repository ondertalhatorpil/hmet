import React from 'react';
import '../still.css'



const HeroSection = ({ title, description }) => {
  return (
    <div className='aboutBanner'>
      <div className='aboutBannerDesc'>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default HeroSection;
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './HeroSlider.css';

const HeroSlider = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(timer);
  }, [currentSlide]);

  const nextSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setTimeout(() => setIsTransitioning(false), 500);
    }
  };

  const prevSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
      setTimeout(() => setIsTransitioning(false), 500);
    }
  };

  return (
    <div className="hero-slider">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`slider-slide ${index === currentSlide ? 'active' : ''}`}
          style={{
            backgroundImage: `url(${slide.image})`,
          }}
        >
          <div className="slide-content">
            <div className="slide-title-box">
              <h1>{slide.title}</h1>
              {slide.subtitle && <p>{slide.subtitle}</p>}
            </div>
          </div>
        </div>
      ))}

      <button className="slider-arrow slider-arrow-left" onClick={prevSlide}>
        <ChevronLeft size={30} />
      </button>
      <button className="slider-arrow slider-arrow-right" onClick={nextSlide}>
        <ChevronRight size={30} />
      </button>

      <div className="slider-dots">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`slider-dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
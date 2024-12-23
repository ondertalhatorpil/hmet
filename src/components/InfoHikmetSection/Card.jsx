import React from 'react';
import './Card.css';

const Card = ({ 
  title, 
  description, 
  additionalText,
  mainImage,
}) => {
  return (
    <section className="info-23-section">
      <div className="info-23-container">
        <div className="info-23-content">
          <h2 className="info-23-title">{title}</h2>
          <p className="info-23-description">{description}</p>
          <div className="info-23-additional">{additionalText}</div>
        </div>

        <div className="info-23-images">
          <div className="info-23-main-image">
            <img src={mainImage} alt="Ana Profil" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Card;
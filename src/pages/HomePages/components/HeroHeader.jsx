import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import '../assets/HomePage.css';

const HeroHeader = ({ Logo }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsMenuOpen(false);
    }
  };

  const leftMenuItems = [
    { title: "HAKKIMIZDA", sectionId: "about" },
    { title: "EKİBİMİZ", sectionId: "team" }
  ];

  const rightMenuItems = [
    { title: "S.S.S", sectionId: "sss" },
    { title: "İLETİŞİM", sectionId: "contact" }
  ];

  return (
    <div className="hero-header">
      {/* Desktop Navigation */}
      <ul className="desktop-menu left-menu">
        {leftMenuItems.map((item, index) => (
          <li key={index}>
            <a 
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.sectionId);
              }} 
              href={`#${item.sectionId}`}
            >
              {item.title}
            </a>
          </li>
        ))}
      </ul>

      {/* Logo - Always visible */}
      <div className="logo-container">
        <img src={Logo} alt="Hikmetin İzinde Logo" />
      </div>

      {/* Desktop Right Menu */}
      <ul className="desktop-menu right-menu">
        {rightMenuItems.map((item, index) => (
          <li key={index}>
            <a 
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.sectionId);
              }} 
              href={`#${item.sectionId}`}
            >
              {item.title}
            </a>
          </li>
        ))}
      </ul>

      {/* Hamburger Menu Button */}
      <button 
        className="menu-toggle"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Navigation Overlay */}
      <nav className={`mobile-menu ${isMenuOpen ? 'active' : ''}`}>
        <ul>
          {[...leftMenuItems, ...rightMenuItems].map((item, index) => (
            <li key={index}>
              <a
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.sectionId);
                }}
                href={`#${item.sectionId}`}
              >
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default HeroHeader;
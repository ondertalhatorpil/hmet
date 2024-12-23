import React, { useState } from 'react';
import { Facebook, Twitter, Instagram, MessageCircle, Globe } from 'lucide-react';

const SocialMediaMenu = () => {
  const [isHovered, setIsHovered] = useState(false);

  const socialIcons = [
    { icon: <Instagram size={20} />, color: 'bg-pink-500/40', name: 'Instagram' },
    { icon: <Twitter size={20} />, color: 'bg-blue-400/40', name: 'Twitter' },
    { icon: <Facebook size={20} />, color: 'bg-blue-600/40', name: 'Facebook' },
    { icon: <MessageCircle size={20} />, color: 'bg-green-500/40', name: 'WhatsApp' }
  ];

  return (
    <div className="fixed left-3 top-2/3 -translate-y-1/2 z-50">
      <div 
        className="relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Ana buton */}
        <button 
          className="w-12 h-12 bg-gray-800/50 rounded-lg flex items-center justify-center text-white shadow-lg hover:bg-gray-700/60 transition-all duration-300"
        >
          <Globe size={24} className={`transition-transform duration-300 ${isHovered ? 'rotate-90' : 'rotate-0'}`} />
        </button>

        {/* Sosyal medya butonları - birleşik container */}
        <div className="absolute right-0 top-full mt-2">
          <div 
            className={`flex flex-col transition-all duration-300`}
            style={{
              opacity: isHovered ? 1 : 0,
              transform: isHovered ? 'translateY(0)' : 'translateY(-20px)',
              visibility: isHovered ? 'visible' : 'hidden'
            }}
          >
            {socialIcons.map((item, index) => (
              <button
                key={item.name}
                className={`w-12 h-12 ${item.color} flex items-center justify-center text-white backdrop-blur-sm 
                  ${index === 0 ? 'rounded-t-lg' : ''} 
                  ${index === socialIcons.length - 1 ? 'rounded-b-lg' : ''}
                  hover:bg-opacity-60 transition-colors duration-200`}
              >
                {item.icon}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialMediaMenu;
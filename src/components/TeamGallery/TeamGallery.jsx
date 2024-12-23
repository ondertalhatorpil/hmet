import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';


const styles = `
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes scaleIn {
  from { transform: scale(0.95); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
}

.animate-fadeIn {
  animation: fadeIn 0.2s ease-out;
}

.animate-scaleIn {
  animation: scaleIn 0.2s ease-out;
}

@media (max-width: 640px) {
  .modal-content {
    width: 90%;
    max-height: 90vh;
  }
}

@media (max-width: 1024px) {
  .modal-content {
    width: 85%;
    max-height: 85vh;
  }
}

@media (min-width: 1025px) {
  .modal-content {
    width: 60%;
    max-height: 80vh;
  }
}

.modal-body {
  max-height: calc(80vh - 100px);
  overflow-y: auto;
}
`;

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-3xl modal-content w-full animate-scaleIn relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button with hover effect */}
        <button
          onClick={onClose}
          className="absolute right-6 top-6 p-2 hover:bg-gray-100 rounded-full transition-colors duration-200 group z-10"
          aria-label="Close modal"
        >
          <div className="relative">
            <X className="w-6 h-6 text-gray-500 group-hover:text-gray-700 transition-colors" />
            <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              Kapat
            </span>
          </div>
        </button>

        {/* Modal Header Gradient */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-gray-50 to-transparent pointer-events-none" />

        <div className="modal-body p-8 sm:p-10 overflow-hidden">
          {children}
        </div>
      </div>
    </div>
  );
};

const TeamGallery = ({ title, subtitle, overlineText, members }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedMember, setSelectedMember] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [visibleCards, setVisibleCards] = useState(3);

  useEffect(() => {
    // Add styles to head
    const styleSheet = document.createElement("style");
    styleSheet.innerText = styles;
    document.head.appendChild(styleSheet);

    // Cleanup
    return () => {
      styleSheet.remove();
    };
  }, []);

  useEffect(() => {
    const updateVisibleCards = () => {
      if (window.innerWidth < 640) {
        setVisibleCards(1); // Mobilde 1 kart
      } else if (window.innerWidth < 1024) {
        setVisibleCards(2); // Tablet ve küçük ekranlarda 2 kart
      } else {
        setVisibleCards(3); // Masaüstü için 3 kart
      }
    };

    updateVisibleCards();
    window.addEventListener('resize', updateVisibleCards);
    return () => window.removeEventListener('resize', updateVisibleCards);
  }, []);

  const nextSlide = () => {
    if (currentIndex < members.length - visibleCards) {
      setCurrentIndex(prev => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }
  };

  return (
    <div className="w-full max-w-[1400px] mx-auto px-4 mb-24 sm:px-6 py-12 sm:py-16">
      {/* Header Section */}
      <div className="text-center mb-12 sm:mb-16">
        <p className="text-[#BDA473] font-semibold mb-3 tracking-wide uppercase text-sm">
          {overlineText}
        </p>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-[#BDA473] bg-clip-text text-transparent">
          {title}
        </h2>
        <p className="text-white max-w-2xl mx-auto text-lg">
          {subtitle}
        </p>
      </div>

      {/* Gallery Section */}
      <div className="relative">
        <div className="flex items-center gap-4">
          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            className={`flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-lg hover:shadow-xl transition-all transform hover:scale-105 ${
              currentIndex === 0 ? 'opacity-50 cursor-not-allowed hover:scale-100' : ''
            }`}
            disabled={currentIndex === 0}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Cards Container */}
          <div className="flex-1 overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-out gap-6"
              style={{ 
                transform: `translateX(-${currentIndex * (100 / visibleCards)}%)`,
              }}
            >
              {members.map((member, index) => (
                <div
                  key={index}
                  className="relative flex-shrink-0 w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
                  style={{ scrollSnapAlign: 'start' }}
                >
                  <div className="relative group rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 aspect-[3/4]">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6">
                      <h3 className="text-white text-xl sm:text-2xl font-bold mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        {member.name}
                      </h3>
                      <p className="text-gray-200 text-sm sm:text-base mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                        {member.title}
                      </p>
                      <button
                        onClick={() => {
                          setSelectedMember(member);
                          setShowModal(true);
                        }}
                        className="bg-white/90 hover:bg-white text-black py-2 px-4 rounded-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-150 text-sm sm:text-base font-medium hover:shadow-lg"
                      >
                        Detaylı Bilgi
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            className={`flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-lg hover:shadow-xl transition-all transform hover:scale-105 ${
              currentIndex >= members.length - visibleCards ? 'opacity-50 cursor-not-allowed hover:scale-100' : ''
            }`}
            disabled={currentIndex >= members.length - visibleCards}
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Modal */}
      <Modal 
        isOpen={showModal} 
        onClose={() => setShowModal(false)}
      >
        <div className="relative">
          <div className="flex flex-col items-center text-center sm:text-left sm:flex-row gap-8">
            <div className="relative group">
              <img
                src={selectedMember?.image}
                alt={selectedMember?.name}
                className="w-40 h-40 sm:w-48 sm:h-48 rounded-2xl object-cover shadow-lg ring-4 ring-white"
              />
              <div className="absolute inset-0 rounded-2xl bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="h-full flex items-center justify-center">
                  <span className="text-white text-sm">Profil Fotoğrafı</span>
                </div>
              </div>
            </div>

            <div className="flex-1">
              <h3 className="text-3xl sm:text-4xl font-bold mb-3 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                {selectedMember?.name}
              </h3>
              <p className="text-blue-600 font-medium text-lg mb-6">
                {selectedMember?.title}
              </p>
              <div className="space-y-4">
                <p className="text-gray-600 leading-relaxed text-lg">
                  {selectedMember?.bio}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default TeamGallery;

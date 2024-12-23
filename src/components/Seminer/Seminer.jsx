import React, { useState } from 'react';
import SeminarDetail from './SeminarDetail';
import './SeminerDetails.css';
import './SeminerCard.css';

const SeminerCard = ({
  seminerNo,
  title,
  speakers,
  buttonText = "Detaylara Git",
  detailData,
  image
}) => {
  const [isDetailOpen, setIsDetailOpen] = useState(false);

  const handleDetailClick = (e) => {
    e.stopPropagation();
    setIsDetailOpen(true);
  };

  return (
    <>
      <div className="hi-seminer-card">
       <div className='seminer-top-bar'>
       <div className='seminer-images'>
        {
              speakers.map((speakersimages, index) => (
                <div key={index} className='seminer-image'>
                    <img src={speakersimages.image} alt="Öğretmen Akademisi - Yönetici Akademisi" />
                </div>
              ))
        }
        </div>
       <div className="hi-seminer-icon">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
            <line x1="16" y1="2" x2="16" y2="6"></line>
            <line x1="8" y1="2" x2="8" y2="6"></line>
            <line x1="3" y1="10" x2="21" y2="10"></line>
          </svg>
        </div>
       </div>

        <div className="hi-seminer-number">Seminer {seminerNo}</div>

        <h3 className="hi-seminer-title">{title}</h3>

        <div className="hi-seminer-speakers">
          <div className="hi-speakers-label">Konuşmacılar</div>
          {speakers.map((speaker, index) => (
            <div key={index} className="hi-speaker-info">
              <div className="hi-speaker-name">{speaker.name}</div>
              <div className="hi-speaker-institution">{speaker.institution}</div>
            </div>
          ))}
        </div>

        <button 
          className="hi-seminer-button"
          onClick={handleDetailClick}
        >
          {buttonText}
        </button>
      </div>

      <SeminarDetail
        isOpen={isDetailOpen}
        onClose={() => setIsDetailOpen(false)}
        seminarData={{
          number: seminerNo,
          title: title,
          sessions: detailData?.sessions || [],
          speakers: speakers.map(speaker => ({
            ...speaker,
            image: speaker.image || '/placeholder-avatar.jpg'
          }))
        }}
      />
    </>
  );
};

SeminerCard.defaultProps = {
  speakers: [],
  detailData: {
    sessions: []
  }
};

export default SeminerCard;
import React, { useState, useEffect } from 'react';
import Masonry from 'react-masonry-css';
import SeminerCard from '../../../components/Seminer/Seminer';
import './Seminer.css'

const Seminer = () => {
  const [selectedSeminar, setSelectedSeminar] = useState(null);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash) {
        const seminarNumber = parseInt(hash.replace('#seminar-', ''));
        setSelectedSeminar(seminarNumber);
      } else {
        setSelectedSeminar(null);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const breakpointColumns = {
    default: 3,
    1200: 2,
    768: 1
  };

  const seminerler = [
    {
      seminerNo: 1,
      title: "Affa Karşı Kürek Çekmek: Affın Gelenek Olduğu Bir Ülkede Yönetici Olmak",
      speakers: [
        {
          name: "Prof. Dr. Yaşar BÜLBÜL",
          institution: "İstanbul Medeniyet Üniversitesi Rektör Yardımcısı",
          image: '/images/Yasar Bülbül.png'
        }
      ],
      detailData: {
        sessions: [
          {
            number: 1,
            title: "Affa Karşı Kürek Çekmek: Affın Gelenek Olduğu Bir Ülkede Yönetici Olmak",
            speaker: "Prof. Dr. Yaşar BÜLBÜL",
            startDate: "15 Ocak Çarşamba",
            endDate: "19.00"
          }
        ]
      }
    },
    {
      seminerNo: 2,
      title: "Savaşı Askerler Kazanır Generaller Kaybeder",
      speakers: [
        {
          name: "Mehmet Kürşat ÇAPAR",
          institution: "NEGMAR Teknoloji Grup Başkanı",
          image: '/images/mehmetkursat.png'
        }
      ],
      detailData: {
        sessions: [
          {
            number: 1,
            title: "Savaşı Askerler Kazanır Generaller Kaybeder",
            speaker: "Mehmet Kürşat ÇAPAR",
            startDate: "22 Ocak Çarşamba",
            endDate: "19.00"
          }
        ]
      }
    },
    {
      seminerNo: 3,
      title: "Rutinle Ritim Arasında Yönetici Zihin",
      speakers: [
        {
          name: "Doç. Dr. Özkan ÖZTÜRK",
          institution: "Kartal AİHL Müdürü",
          image: '/images/ozkanozturk.png'
        }
      ],
      detailData: {
        sessions: [
          {
            number: 1,
            title: "Rutinle Ritim Arasında Yönetici Zihin",
            speaker: "Doç. Dr. Özkan ÖZTÜRK",
            startDate: "29 Ocak Çarşamba",
            endDate: "19.00"
          }
        ]
      }
    },
    {
        seminerNo: 4,
        title: "Kararlarımızı Kendimiz mi Alıyoruz? Gruplar İçinde İnsan Davranışı",
        speakers: [
          {
            name: "Doç. Dr. Yasin ÇAKIREL",
            institution: "Kırklareli Üniversitesi, İktisadi ve İdari Bilimler Fakültesi",
            image: '/images/yasinel.png'
          }
        ],
        detailData: {
          sessions: [
            {
              number: 1,
              title: "Kararlarımızı Kendimiz mi Alıyoruz? Gruplar İçinde İnsan Davranışı",
              speaker: "Doç. Dr. Yasin ÇAKIREL",
              startDate: "5 Şubat Çarşamba",
              endDate: "19.00"
            }
          ]
        }
      },
      {
        seminerNo: 5,
        title: "Dönüştürücü Liderlik: Vizyon, İlham ve Değişim",
        speakers: [
          {
            name: "Dr. Sümeyye KUŞAKÇI",
            institution: "İbn Haldun Üniversitesi, Yönetim Bilimleri Fakültesi",
            image: '/images/sumeyyekusakcı.png'
          }
        ],
        detailData: {
          sessions: [
            {
              number: 1,
              title: "Dönüştürücü Liderlik: Vizyon, İlham ve Değişim",
              speaker: "Dr. Sümeyye KUŞAKÇI",
              startDate: "12 Şubat Çarşamba",
              endDate: "19.00"
            }
          ]
        }
      },
      {
        seminerNo: 6,
        title: "Dijital ve Yapay Zeka Lider Rolleri",
        speakers: [
          {
            name: "Dr. Akın BULUT",
            institution: " İbn Haldun Üniversitesi Eğitim Bilimleri Fakültesi",
            image: '/images/Akın Bulut.png'
          }
        ],
        detailData: {
          sessions: [
            {
              number: 1,
              title: "Dijital ve Yapay Zeka Lider Rolleri",
              speaker: "Dr. Akın BULUT",
              startDate: "19 Şubat Çarşamba",
              endDate: "19.00"
            }
          ]
        }
      },
      {
        seminerNo: 7,
        title: "Yöneticiler İçin Kısas-ı Enbiya",
        speakers: [
          {
            name: "Dr. Mustafa ÖZEL",
            institution: "İktisatçı - Yazar",
            image: '/images/mustafaozel.png'
          }
        ],
        detailData: {
          sessions: [
            {
              number: 1,
              title: "Yöneticiler İçin Kısas-ı Enbiya",
              speaker: "Dr. Mustafa ÖZEL",
              startDate: "26 Şubat Çarşamba",
              endDate: "19.00"
            }
          ]
        }
      }
  ];

  return (
    <div className="hi-seminer-page">
      <div className="hi-seminer-container">
        <div className="hi-seminer-header-section">
          <h1 className="hi-seminer-header">Seminerler</h1>
          <p className="hi-seminer-description">
            Farklı Perspektiflerle Derinlemesine Öğrenin
          </p>
        </div>
        
        <Masonry
          breakpointCols={breakpointColumns}
          className="hi-masonry-grid"
          columnClassName="hi-masonry-grid_column"
        >
          {seminerler.map((seminer, index) => (
            <div 
              id={`seminar-${seminer.seminerNo}`} 
              key={seminer.seminerNo + '-' + index}
              className={`seminar-card-wrapper transition-all duration-700 
                ${selectedSeminar === seminer.seminerNo ? 'scale-105' : ''}`}
            >
              <div className={`relative ${
                selectedSeminar === seminer.seminerNo 
                  ? 'ring-4 ring-[#D3BD92] rounded-lg shadow-2xl animate-highlight'
                  : ''}`}
              >
                {selectedSeminar === seminer.seminerNo && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 
                    bg-[#D3BD92] text-black text-sm px-4 py-1 rounded-full 
                    font-medium z-10 whitespace-nowrap animate-bounce">
                    Seçili Seminer
                  </div>
                )}
                <SeminerCard {...seminer} />
              </div>
            </div>
          ))}
        </Masonry>
      </div>

      <style jsx>{`
        .seminar-card-wrapper {
          transition: all 0.5s ease-in-out;
        }

        .animate-highlight {
          animation: highlight 2s ease-in-out infinite;
        }

        @keyframes highlight {
          0% {
            box-shadow: 0 0 0 0 rgba(211, 189, 146, 0.4);
          }
          70% {
            box-shadow: 0 0 0 15px rgba(211, 189, 146, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(211, 189, 146, 0);
          }
        }

        .animate-bounce {
          animation: bounce 1s ease-in-out infinite;
        }

        @keyframes bounce {
          0%, 100% {
            transform: translateY(-5px) translateX(-50%);
          }
          50% {
            transform: translateY(0) translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
};

export default Seminer;
import React from 'react';
import Masonry from 'react-masonry-css';
import SeminerCard from '../../../components/Seminer/Seminer';
import './Seminer.css'


const Seminer = () => {
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
            institution: " İbn Haldun Üniversitesi",
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
            <SeminerCard
              key={seminer.seminerNo + '-' + index}
              {...seminer}
            />
          ))}
        </Masonry>
      </div>
    </div>
  );
};

export default Seminer;
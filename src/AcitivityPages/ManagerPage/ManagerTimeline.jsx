import React, { useRef, useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, Clock } from 'lucide-react';


const seminerler = [
  {
    seminerNo: 1,
    title: "Affa Karşı Kürek Çekmek: Affın Gelenek Olduğu Bir Ülkede Yönetici Olmak",
    speaker: "Prof. Dr. Yaşar BÜLBÜL",
    date: "15 Ocak Çarşamba",
    time: "19.00",
    year: "2025"
  },
  {
    seminerNo: 2,
    title: "Savaşı Askerler Kazanır Generaller Kaybeder",
    speaker: "Mehmet Kürşat ÇAPAR",
    date: "22 Ocak Çarşamba",
    time: "19.00",
    year: "2025"
  },
  {
    seminerNo: 3,
    title: "Rutinle Ritim Arasında Yönetici Zihin",
    speaker: "Doç. Dr. Özkan ÖZTÜRK",
    date: "29 Ocak Çarşamba",
    time: "19.00",
    year: "2025"
  },
  {
    seminerNo: 4,
    title: "Kararlarımızı Kendimiz mi Alıyoruz? Gruplar İçinde İnsan Davranışı",
    speaker: "Doç. Dr. Yasin ÇAKIREL",
    date: "5 Şubat Çarşamba",
    time: "19.00",
    year: "2025"
  },
  {
    seminerNo: 5,
    title: "Dönüştürücü Liderlik: Vizyon, İlham ve Değişim",
    speaker: "Dr. Sümeyye KUŞAKÇI",
    date: "12 Şubat Çarşamba",
    time: "19.00",
    year: "2025"
  },
  {
    seminerNo: 6,
    title: "Dijital ve Yapay Zeka Lider Rolleri",
    speaker: "Dr. Akın BULUT",
    date: "19 Şubat Çarşamba",
    time: "19.00",
    year: "2025"
  },
  {
    seminerNo: 7,
    title: "Yöneticiler İçin Kısas-ı Enbiya",
    speaker: "Dr. Mustafa ÖZEL",
    date: "26 Şubat Çarşamba",
    time: "19.00",
    year: "2025"
  }
];


const SeminarTimeline = () => {
  const scrollContainerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [selectedSeminar, setSelectedSeminar] = useState(null);  // Bunu ekledik
  const currentDate = new Date();

  const scrollToSeminar = (seminerNo) => {
    setSelectedSeminar(seminerNo);
    const seminarElement = document.getElementById(`seminar-${seminerNo}`);
    if (seminarElement) {
      const yOffset = -100;
      const y = seminarElement.getBoundingClientRect().top + window.pageYOffset + yOffset;
      
      window.scrollTo({
        top: y,
        behavior: 'smooth'
      });
      
      // URL'e hash ekle
      window.location.hash = `seminar-${seminerNo}`;
    }
};
  
  const turkishMonthToNumber = (month) => {
    const months = {
      'Ocak': '01', 'Şubat': '02', 'Mart': '03', 'Nisan': '04',
      'Mayıs': '05', 'Haziran': '06', 'Temmuz': '07', 'Ağustos': '08',
      'Eylül': '09', 'Ekim': '10', 'Kasım': '11', 'Aralık': '12'
    };
    return months[month];
  };

  const parseTurkishDate = (dateStr) => {
    const [day, month] = dateStr.split(' ');
    const monthNumber = turkishMonthToNumber(month);
    return new Date(`2025-${monthNumber}-${day.padStart(2, '0')}`);
  };

  const formattedSeminars = seminerler.map(seminer => {
    const seminerDate = parseTurkishDate(seminer.date);
    return {
      ...seminer,
      dateObj: seminerDate,
      isPast: seminerDate < currentDate
    };
  });

  const futureEvents = formattedSeminars.filter(s => !s.isPast);
  const nextEvent = futureEvents.length > 0 
    ? futureEvents.reduce((a, b) => a.dateObj < b.dateObj ? a : b)
    : null;

  useEffect(() => {
    const checkScroll = () => {
      if (scrollContainerRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
        setCanScrollLeft(scrollLeft > 0);
        setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
      }
    };

    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', checkScroll);
      checkScroll();
    }

    return () => {
      if (container) {
        container.removeEventListener('scroll', checkScroll);
      }
    };
  }, []);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const cardWidth = 320;
      const gap = 32;
      const scrollAmount = cardWidth + gap;

      const container = scrollContainerRef.current;
      const newScrollPosition = container.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount);
      
      container.scrollTo({
        left: newScrollPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen p-4 md:p-8">
      <div className="max-w-full mx-auto mt-20 md:mt-40">
        <div className="text-center mb-8 md:mb-16">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#D3BD92] mb-4 md:mb-6">
            2025 Seminer Programı
          </h1>
          
          <div className="max-w-xs sm:max-w-sm md:max-w-xl mx-auto bg-gray-800/30 p-4 md:p-6 rounded-2xl backdrop-blur-sm">
            <div className="flex justify-between text-white mb-2 text-sm md:text-base">
              <span>Program İlerlemesi</span>
              <span>{formattedSeminars.filter(s => s.isPast).length} / {formattedSeminars.length} Program Tamamlandı</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2">
              <div 
                className="bg-[#D3BD92] h-2 rounded-full transition-all duration-1000"
                style={{ width: `${(formattedSeminars.filter(s => s.isPast).length / formattedSeminars.length) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>
        
        <div className="relative">
          {canScrollLeft && (
            <button 
              onClick={() => scroll('left')}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-gray-800/80 p-4 rounded-full text-white hover:bg-gray-700 backdrop-blur-sm transition-all hover:scale-110"
              aria-label="Önceki"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          )}
          
          {canScrollRight && (
            <button 
              onClick={() => scroll('right')}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-gray-800/80 p-4 rounded-full text-white hover:bg-gray-700 backdrop-blur-sm transition-all hover:scale-110"
              aria-label="Sonraki"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          )}

          <div 
            ref={scrollContainerRef}
            className="overflow-x-auto scrollbar-hide pb-8 mx-2 md:mx-16 relative"
            style={{
              scrollSnapType: 'x mandatory',
              WebkitOverflowScrolling: 'touch'
            }}
          >
            <div className="relative min-w-max">
              <div className="absolute h-1 w-full top-24 bg-[#D3BD92]"></div>
              
              <div className="flex gap-4 md:gap-8 pt-8 px-4 md:px-8">
                {formattedSeminars.map((seminer, index) => (
                  <div 
                    key={index} 
                    className="relative w-80 flex-shrink-0 cursor-pointer"
                    style={{ scrollSnapAlign: 'start' }}
                    onClick={() => scrollToSeminar(seminer.seminerNo)}
                  >
                    <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <div className={`w-8 h-8 md:w-12 md:h-12 
                        ${selectedSeminar === seminer.seminerNo ? 'bg-[#8B7355]' : 'bg-[#D3BD92]'}
                        rounded-full flex items-center justify-center shadow-lg
                        transition-all duration-300 hover:scale-110`}>
                        <Clock className="w-4 h-4 md:w-6 md:h-6 text-white" />
                      </div>
                    </div>
                    
                    <div 
                      className={`mt-16 md:mt-20 bg-gray-800/90 backdrop-blur-sm p-4 md:p-6 rounded-2xl shadow-xl 
                        transition-all duration-300 border
                        ${selectedSeminar === seminer.seminerNo 
                          ? 'border-[#8B7355] ring-2 ring-[#8B7355] scale-105'
                          : nextEvent && nextEvent.seminerNo === seminer.seminerNo 
                            ? 'border-[#D3BD92] ring-2 ring-[#D3BD92] scale-105'
                            : 'border-gray-700 hover:scale-105'}
                        group relative`}
                    >
                      {nextEvent && nextEvent.seminerNo === seminer.seminerNo && (
                        <div className="absolute -top-3 right-4 bg-[#D3BD92] text-black text-xs px-3 py-1 rounded-full font-medium animate-pulse">
                          İlk Seminer
                        </div>
                      )}

                      <div className={`${
                        selectedSeminar === seminer.seminerNo
                          ? 'bg-[#8B7355]'
                          : nextEvent && nextEvent.seminerNo === seminer.seminerNo 
                            ? 'bg-gradient-to-br from-[#D3BD92] to-[#B39B6C]'
                            : 'bg-[#D3BD92]'
                        } rounded-lg p-2 md:p-3 -mt-10 md:-mt-12 mx-auto w-24 md:w-28 text-center`}>
                        <div className="text-xl md:text-2xl font-bold text-white">
                          {seminer.date.split(' ')[0]}
                        </div>
                        <div className="text-xs md:text-sm text-white/90">
                          {seminer.date.split(' ')[1]}
                        </div>
                      </div>

                      <h3 className="text-white font-semibold text-base md:text-lg mt-4 text-center group-hover:text-[#D3BD92] transition-colors line-clamp-2">
                        {seminer.title}
                      </h3>

                      <div className="mt-2 text-center text-gray-400 text-sm">
                        {seminer.speaker}
                      </div>

                      <div className="flex items-center justify-center gap-2 text-gray-400 mt-2 text-sm md:text-base">
                        <Clock className="w-4 h-4" />
                        <span>{seminer.time}</span>
                      </div>

                      <div className="text-center text-gray-400 text-xs mt-2">
                        {seminer.year}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeminarTimeline;
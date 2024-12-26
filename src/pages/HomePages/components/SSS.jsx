import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import '../assets/HomePage.css'

const SSS = () => {
  const [selected, setSelected] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );

    const element = document.querySelector('.SSSHomePageRadio');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const faqs = [
    {
      question: 'Hikmetin İzinde programına kimler katılabilir?',
      answer: 'Hikmetin İzinde programı, Türkiye’deki ve yurt dışındaki imam hatip okullarında görev yapan öğretmenlere açıktır. Program, eğitimde kendini geliştirmek isteyen tüm öğretmenlere yönelik zengin içerikli seminerler sunmaktadır.'
    },
    {
      question: 'Seminerlerde hangi konular işlenecek?',
      answer: 'Hikmetin İzinde programında, İslam düşüncesinden eğitime, yapay zekâdan gençlerle iletişime kadar geniş bir yelpazede seminer sunulacaktır. Ayrıca, İslam dünyası, ümmet gündemi ve Filistin gibi önemli başlıklar da seminer programında yer alacaktır.'
    },
    {
      question: 'Seminerlere çevrimiçi katılım mümkün mü?',
      answer: "Evet, seminerler çevrimiçi olarak gerçekleştirilecektir. Türkiye'nin ve dünyanın dört bir yanından öğretmenlerin katılabileceği bu online akademide, öğretmenler uzman hocalardan ders alma fırsatına sahip olacaktır."
    },
    {
      question: 'Hikmetin İzinde programına nasıl başvurabilirim?',
      answer: 'Başvuru yapmak için, menüdeki "Kayıt Ol" butonuna tıklayarak başvuru formunu doldurmanız gerekmektedir. Formu tamamladıktan sonra, kaydınız alınacaktır ve başvuru süreciyle ilgili gerekli bilgiler size iletilecektir.'
    }
  ];
  
  return (
    <section className='SSSHomePage' >
      <div className={`SSSHomePageRadio ${isVisible ? 'visible' : ''}`}>
        <div className='SSSHomeDesc'>
          <span className="overline">YARDIM MERKEZİ</span>
          <h2>Sıkça Sorulan Sorular</h2>
        </div>
        <div className="faq-container">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="faq-wrapper"
              style={{ 
                animationDelay: `${index * 0.1}s` 
              }}
            >
              <div 
                className={`SSSCard ${selected === index ? 'expanded' : ''}`}
                onClick={() => setSelected(selected === index ? null : index)}
              >
                <div className='questionBox'>
                  <span className="question-text">{faq.question}</span>
                  <div 
                    className={`answerBox ${selected === index ? 'expanded' : ''}`}
                  >
                    {faq.answer}
                  </div>
                </div>
                <ChevronDown 
                  className={`icon ${selected === index ? 'rotated' : ''}`} 
                  size={20} 
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SSS;
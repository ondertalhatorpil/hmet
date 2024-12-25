import React, { useState, useEffect } from 'react';

import img1 from '../assets//images/img1.png'

const HomeAbout = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const element = document.querySelector('.HomeAboutCard');
            if (element) {
                const elementTop = element.getBoundingClientRect().top;
                const isVisible = elementTop < window.innerHeight - 100;
                setIsVisible(isVisible);
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Initial check
        
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className='HomePageAboutContainer'>
            <div className='HomePageAboutRadio'>
                <div className={`HomeAboutCard ${isVisible ? 'visible' : ''}`}>
                    <div className='HomeAboutCardDesc'>
                        <span className='about-subtitle'>Gelenekten Geleceğe</span>
                        <h1>HAKKIMIZDA</h1>
                        <div className='about-content'>
                            <p>ÖNDER Öğretmen Akademisi tarafından bu yıl dördüncüsü düzenlenen "Hikmetin İzinde" programının kayıtları başlıyor.
                            Türkiye ve yurt dışındaki imam hatip okullarında görev yapan öğretmenleri, alanlarında yetkin kıymetli hocalarımızla buluşturmayı hedefleyen bu seminerlerde, eğitimdeki bilgi ve becerilerinizi geliştirebilirsiniz.</p>
                            <p>Ayrıca, Yönetici Akademisi ile okul yöneticilerine özel eğitimler de sunulacak. Eğitimde liderlik, yönetim ve öğretim stratejileri üzerine değerli bilgiler edinmeniz için bu fırsatı kaçırmayın.</p>
                            <p>Seminerlere katılmak için kaydınızı zamanında yaptırmayı unutmayın!</p>
                        </div>
                    </div>
                    <div className='HomeAboutImages'>
                        <div className="image-stack">
                            <img src={img1} 
                                alt="Front" 
                                className="image image-front" 
                                loading="lazy"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeAbout;
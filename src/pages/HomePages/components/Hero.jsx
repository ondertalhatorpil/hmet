import React from 'react'
import { Link } from 'react-router-dom'

import '../../HomePages/assets/HomePage.css'
import '../../../pages/asstes/still.css'
import Logo from '../assets//images/logo.svg'

import Button1 from '../assets//images/Öğretmen Akademisi_png.png'
import Button2 from '../assets//images/Yönetici Akademisi_png-01.png'


import YLogo from '../assets//images/Yönetici Logo.png'
import ÖLogo from '../assets//images/Öğretmen Logo.png'

import İşOrtaklarımız from '../assets//images/İş Ortaklarımız.png'
import HeroHeader from './HeroHeader'

const Hero = () => {

    
    return (
        <div className='hero-container'>
            <div className='hero-contianer-radio'>
                <HeroHeader Logo={Logo} />
                <div className='hero-buttons'>
                    <div className='hero-butons-radio'>
                        
                        <Link to='/ögretmen-akademisi' className='hero-button justify-start '>
                            <div className='ö-button-background'>
                                <img src={Button1} alt="Öğretmen Akademisi Logo" />
                            </div>
                            <img className='Ölogo' src={ÖLogo} alt="Öğretmen Akademisi Logo" />
                        </Link>
                        <Link to='/yönetici-akademisi' className='hero-button justify-end yönetBTN'>
                             <div className='y-button-background'>
                                <img src={Button2} alt="Yönetici Akademisi Logo" />
                            </div>
                            <img className='Ylogo' src={YLogo} alt="Yönetici Akademisi Logo" />
                        </Link>
                    </div>
                </div>
                <div className='hero-ortaklarımız'>
                    <img src={İşOrtaklarımız} alt='ÖNDER EKİBİ' />
                </div>
            </div>
        </div>
    )
}

export default Hero
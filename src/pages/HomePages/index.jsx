import React from 'react'
import '../asstes/still.css'
import SSS from './components/SSS'
import Hero from './components/Hero'
import HomeAbout from './components/HomeAbout'
import HomeTeam from './components/HomeTeam'
import HomeContact from './components/HomeContact'
import HomeFooter from './components/HomeFooter'


const index = () => {
  return (
    <div className='main-page-container'>
      <Hero />
      <div id="about">
        <HomeAbout />
      </div>
      <div id="team">
        <HomeTeam />
      </div>
      <div id="sss">
        <SSS />
      </div>
     
        <HomeContact />

      <HomeFooter />
    </div>
  );
};
export default index
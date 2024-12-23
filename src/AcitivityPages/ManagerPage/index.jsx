// Manager/index.jsx
import React from 'react'
import Header from './ManagerHeader'
import Seminer from './ManagerSeminer/ManagerSeminer'
import ManagerTeam from './ManagerTeam'
import Footer from '../../components/PagesFooter'
import './assets/still.css'

import SeminarTimeline from './ManagerTimeline'

const index = () => {
  return (
    <div className='background'>
      <section id="home">
        <div className='ye-akademi'>
          <Header />
          <div className='BannerLogo'>
            <h1>Hikmetin İzinde Yönetici Akademisi</h1>
            <p>İmam Hatip okullarında görev yapan eğitim yöneticilerimize özel olarak tasarlanan ve bu yıl ilk kez düzenlenen Hikmetin İzinde Yönetici Akademisi, liderlik yolculuğunda derinleşmek ve yönetimle ilgili bakış açılarını zenginleştirmek isteyenler için yeni bir kapı aralıyor. Alanında uzman isimler tarafından verilen yedi anlamlı ders, yönetim sanatını hikmet ve bilgelik ışığında yeniden yorumluyor. Program, yöneticilere yalnızca bilgi değil, aynı zamanda ilham ve dönüşüm rehberliği sunuyor. Yöneticilik sorumluluğunu üstlenen veya buna aday olan herkesi bu özel programa katılmaya davet ediyoruz.</p>
          </div>
        </div>
      </section>


      <section>
        <SeminarTimeline />
      </section>


      <section id="seminar">
        <Seminer />
      </section>

      <section id="managers">
        <ManagerTeam />
      </section>

      <Footer />

    </div>
  )
}

export default index
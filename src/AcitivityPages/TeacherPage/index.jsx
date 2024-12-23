import React from 'react'
import Header from './TeacherHeader'
import Seminer from './Seminer/Seminer'
import TeacherTeam from './TeacherTeam'
import TeacherTimeline from './TeacherTimeline'
import Footer from '../../components/PagesFooter'

import './assets/still.css'

const index = () => {
  return (
    <div className='background'>
      <section id="home">
        <div className='ye-akademi'>
          <Header />
          <div className='TeacherBannerDesc'>
            <h1>Hikmetin İzinde Öğretmen Akademisi</h1>
            <p>ÖNDER İmam Hatipliler Derneği olarak, dört yıldır büyük bir özveriyle yürüttüğümüz Hikmetin İzinde Öğretmen Akademisi, İmam Hatip okullarında görev yapan öğretmenlerimizi alanında uzman hocalarla buluşturuyor. Bu program, bilgi ve tecrübe paylaşımıyla mesleki donanımı artırmayı ve eğitimde kaliteyi yükseltmeyi hedefliyor. Tamamen dijital ortamda gerçekleştirilen programda, öğretmenlerimiz ilgilendikleri dersleri seçerek kolayca katılım sağlayabiliyor. Sizleri de bu anlamlı yolculuğa davet ediyoruz.</p>
          </div>
        </div>
      </section>


      <section>
        <TeacherTimeline />
      </section>


      <section id="seminar">
        <Seminer />
      </section>
      

      <section id="teachers">
        <TeacherTeam />
      </section>

      <Footer />

    </div>
  )
}

export default index
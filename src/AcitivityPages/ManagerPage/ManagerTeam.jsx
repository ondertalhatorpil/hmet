import TeamGallery from '../../components/TeamGallery/TeamGallery';

const ManagerTeam = () => {
  const teamMembers = [
    {
      name: "Prof. Dr. Yaşar BÜLBÜL",
      title: "(İstanbul Medeniyet Üniversitesi Rektör Yardımcısı)",
      image: "/images/Yasar Bülbül.png",
      bio: "1968 yılında Rize-Pazar’da doğdu. İstanbul Üniversitesi İktisat Fakültesi İngilizce İktisat Bölümü’nden mezun oldu. Yüksek lisans ve doktorasını Marmara Üniversitesi’nde tamamladı. 2000-2010 yılları arası Kocaeli Üniversitesi İktisadi ve İdari Bilimler Fakültesi İktisat Bölümünde, 2010-2016 yılları arası İstanbul Üniversitesi İktisat Fakültesi İngilizce İktisat Bölümünde öğretim üyesi olarak çalıştı. 2015-2016 yıllarında İstanbul Üniversitesi Çocuk Araştırma ve Uygulama Merkezi müdürü olarak görev yaptı. 2016 yılında Yükseköğretim Denetleme Kurulu üyeliğine seçildi. Bu görevini sürdürmekteyken, 2019 yılında İstanbul Medeniyet Üniversitesi Siyasal Bilgiler Fakültesi İktisat Bölümü öğretim üyeliğine atandı."
    },
    {
      name: "Mehmet Kürşat ÇAPAR",
      title: "(NEGMAR Teknoloji Grup Başkanı)",
      image: "/images/mehmetkursat.png",
      bio: "Yakında Gelecek..."
    },
    {
      name: "Doç. Dr. Özkan ÖZTÜRK",
      title: "(Kartal AİHL Müdürü)",
      image: "/images/ozkanozturk.png",
      bio: "1979 senesinde İstanbul’da doğdu. 1997 yılında Kartal Anadolu İmam Hatip Lisesi’nden mezun oldu. Marmara Üniversitesi İlahiyat Fakültesi’nde lisans eğitimi aldı. Marmara Üniversitesi Sosyal Bilimler Enstitüsü’nde 2007 yılında yüksek lisansını, 2014 yılında doktora çalışmasını tamamladı. 2003-2015 yılları arasında Milli Eğitim Bakanlığı’na bağlı okullarda öğretmenlik ve idarecilik görevlerinde bulundu. 2015 yılında göreve başladığı Tekirdağ Namık Kemal Üniversitesi İlahiyat Fakültesi’nde öğretim üyeliği ve dekan yardımcılığı vazifelerinde bulundu. 2020 yılında Kartal Anadolu İmam Hatip Lisesi Müdürlüğü’ne atandı. Halen Tekirdağ Namık Kemal Üniversitesi İlahiyat Fakültesi’nin Felsefe ve Din Bilimleri Ana Bilim Dalı’nda Dr. Öğretim Üyesi olarak çalışmalarına devam etmektedir."
    },
    {
      name: "Doç. Dr. Yasin ÇAKIREL",
      title: "(Kırklareli Üniversitesi, İktisadi ve İdari Bilimler Fakültesi)",
      image: "/images/yasinel.png",
      bio: "1982 yılında Kırklareli’nde doğdu. 1999 yılında Kırklareli İmam Hatip Lisesi’nden mezun oldu. İstanbul Üniversitesi’nde İşletme Yönetimi ve Organizasyon alanında doktorasını verdi. Halen Kırklareli Üniversitesi İktisadi İdari Bilimler Fakültesi’nde Öğretim Üyesi olarak çalışmalarını sürdürmektedir.  Uluslararası hakemli dergilerde makaleleri ve çeşitli yayınevlerinde kitapları yayınlandı. İyi derecede İngilizce biliyor."
    },
    {
      name: "Dr. Sümeyye KUŞAKÇI",
      title: "(İbn Haldun Üniversitesi, Yönetim Bilimleri Fakültesi)",
      image: "/images/sumeyyekusakcı.png",
      bio: "1983 doğumlu Sümeyye Kuşakcı Elazığ İmam Hatip Lisesi mezunudur. Avrupa’nın en iyi ekonomi üniversiteleri arasında kabul edilen Viyana Ekonomi Üniversitesi’nin İşletme Bölümü’nde birleşik lisans ve yüksek lisans eğitimini 2007 yılında tamamlamıştır. 2008-2015 yılları arasında Uluslararası Saraybosna Üniversitesi Ekonomi ve Yönetim Bilimleri Fakültesi’nde araştırma ve öğretim görevlisi olarak görev yapmıştır. Aynı üniversitede sürdürdüğü doktora çalışmalarını 2017 yılında tamamlamış, Yönetim Bilimleri ve Liderlik alanında doktor unvanını almaya hak kazanmıştır. Islamic Books of Advice: An Aspiration Applicable to Modern Management başlıklı doktora teziyle Türk İslam medeniyetinin kendine has liderlik anlayışını akademik düzlemde tartışmayı hedeflemiştir."
    },
    {
      name: "Dr. Akın BULUT",
      title: "(İbn Haldun Üniversitesi)",
      image: "/images/Akın Bulut.png",
      bio: "1965 Sinop-Türkeli doğumlu, İstanbul'da eğitimini tamamladı. Marmara Üniversitesi İlahiyat Fakültesi mezunu. Nişantaşı Kız Lisesi, Rotary Anadolu Lisesi ve Kabataş Erkek Lisesi gibi okullarda öğretmenlik yaptı. Eğitimde Çaktırmadan Öğretme Metodu'nu geliştirip başarıyla uyguladı. Din öğretimi ve din dili üzerine çalışmalara imza attı. Özülke dergisini kurdu ve Kırknar dergisinin yayın yönetmenliğini yaptı. Birçok dergide yazılar yayımladı, radyo ve televizyonlarda kültür-sanat programları sundu. Sokak Sosyolojisi adlı eseri ile şifahi kültür üzerine çalışmalar yaptı. Hu Dönüşü ile Türkiye Yazarlar Birliği 2014 Deneme Ödülü'nü, Yan Tesir ile Eskader Şiir Ödülü'nü kazandı."
    },
    {
        name: "Dr. Mustafa ÖZEL",
        title: "(İktisatçı - Yazar)",
        image: "/images/mustafaozel.png",
        bio: "Yakında Gelecek..."
    }
  ];
  return (
    <TeamGallery
      title="Hocalarımız"
      subtitle="Hocalarımızla Bilgiye Yolculuk"
      overlineText=""
      members={teamMembers}
      cardWidth={400}
      visibleCards={3}
    />
  );
};

export default ManagerTeam;
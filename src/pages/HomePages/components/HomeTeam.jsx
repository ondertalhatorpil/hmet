import TeamGallery from '../../../components/TeamGallery/TeamGallery'

const HomeTeam = () => {
  const teamMembers = [
    {
      name: "Sinan Özyurt",
      title: "ÖNDER Genel Başk. Yard.",
      image: require("../../../assets/images/Sinan Özyurt-Photoroom.png"),
      bio: "1977 yılında Erzurum’un Hınıs ilçesinde dünyaya geldi. İlk ve ortaöğrenimini memleketi olan Trabzon’un Araklı ilçesinde tamamladı. 1994 yılında Araklı İmam Hatip Lisesinden mezun oldu. Aynı yıl başladığı Marmara Üniversitesi İlahiyat Fakültesini 2000 yılında bitirdi. 1998 – 2002 yılları arasında farklı üniversitelerden arkadaşlarıyla birlikte “Yürüyüş” dergisini çıkardı. 28 Şubat sürecine şahitlik eden ve tavır koyan dergide yayınlanan başörtüsü yasağını eleştiren yazıları nedeniyle zamanın Türk Ceza Kanunun 312. maddesine istinaden 3 ayrı davadan yargılandı ve beraat etti. 2000 yılında başladığı ve ara vermek zorunda kaldığı İslam Mezhepleri Tarihi alanındaki yüksek lisansını 2010 yılında tamamladı. Aynı yıl halen yürütmekte olduğu öğretmenlik görevine başladı. Yazıları; Yürüyüş, Siyer-i Nebi, Cafcaf, CF, Genç Düşünce, Temmuz ve Hancı dergilerinde yayınlandı. Evli ve dört çocuk babasıdır."
    },
    {
      name: "Prof. Dr. Recep Şentürk",
      title: "Akademik Danışman",
      image: require("../../../assets/images/Recep Şentürk-Photoroom.png"),
      bio: "1964’te Çankırı’da doğdu. Lisans eğitimini Marmara Üniversitesi İlahiyat Fakültesinde, yüksek lisansını İstanbul Üniversitesi Edebiyat Fakültesi Sosyoloji Bölümden tamamladı. Aynı bölümde asistanlık yaptı. Columbia Üniversitesi Sosyoloji Bölümünde doktorasını tamamladı. 1998-2007 yılları arasında İSAM’da araştırmacı olarak çalıştı. Fatih Sultan Mehmet Vakıf Üniversitesi Medeniyetler İttifakı Enstitüsü kuruluşunda görev aldı. Atlanta’da Emory Üniversitesi Hukuk Fakültesinde misafir araştırmacı olarak bulundu. Oxford Brookes Üniversitesi Sosyal Bilimler ve Hukuk Fakültesi’nde çalışmalarını yürüttü. 2003 yılında doçent, 2008 yılında profesör oldu. Kurucu rektör olarak atandığı İbn Haldun Üniversitesi’nde 2021 yılına kadar bu görevi yürüttü. Halen Hamad Bin Khalifa üniversitesi İslami İlimler Fakültesi dekanıdır. Türkçe, İngilizce ve Arapça birçok kitap ve makale yayını vardır."
    },
    {
      name: "Doç. Dr. Yasin Çakırel",
      title: "Proje Danışmanı",
      image: require("../../../assets/images/YasinÇ-Photoroom.png"),
      bio: "1982 yılında Kırklareli’nde doğdu. 1999 yılında Kırklareli İmam Hatip Lisesi’nden mezun oldu. İstanbul Üniversitesinde İşletme Yönetimi ve Organizasyon alanında doktorasını verdi. Halen Kırklareli Üniversitesi İktisadi İdari Bilimler Fakültesi’nde öğretim üyesi olarak çalışmalarını sürdürüyor. Uluslararası hakemli dergilerde makaleleri ve çeşitli yayınevlerinde kitapları yayınlandı. İyi derecede İngilizce biliyor."
    },
    // {
    //   name: "Murat Arslan",
    //   title: "Proje Danışmanı",
    //   image: require("../assets/images/HomeTeamİmage/yasin.png"),
    //   bio: "Lorem ipsum dolor sit amet..."
    // },
    {
      name: "Ramazan Aydın",
      title: "Proje Danışmanı",
      image: require("../../../assets/images/Ramazan Aydın-Photoroom.png"),
      bio: "Marmara Üniversitesi İlahiyat Fakültesi’nde İslam Mezhepleri Ana Bilim Dalı’nda 2015 yılında yüksek lisans eğitimini tamamladı. Aynı yıl Anadolu Üniversitesi İktisadi ve İdari Bilimler Fakültesi Uluslararası İlişkiler Bölümü’nden mezun oldu. 2024 yılında ise Marmara Üniversitesi’nden Ortadoğu Siyasi Tarihi ve Uluslararası İlişkiler alanında doktora derecesini aldı. Doktora teziyle ilgili araştırmalar yapmak amacıyla 2023 yılında TÜBİTAK bursiyeri olarak bir yıl boyunca Endonezya’da bulundu. Halen Türkiye Maarif Vakfı Cape Town Okulu’nda okul müdürü olarak görev yapmaktadır."
    },
    {
        name: "Bilal Yıldızlı",
        title: "Proje Ekibi",
        image: require("../../../assets/images/Bilal Yıldızlı-Photoroom.png"),
        bio: "1971 Balıkesir doğumlu. Balıkesir Merkez Teknik Lisesi, İstanbul Üniversitesi MYO Elektrik Programı, Balıkesir Üniversitesi Necatibey Eğitim Fakültesi Fizik Öğretmenliği mezunu. 2000 yılında göreve başladı, 2016 yılında İstanbul’un en başarılı 15 yıllık öğretmeni olarak MEB ödülü aldı. Satranç antrenörlüğü ve izci liderliği yapmakta, çeşitli kitap okuma, dergi, gezi, yazar buluşmaları, tiyatro ve sergi çalışmaları düzenlemekte. IHH’nın Her Sınıfın Bir Yetim Kardeşi Var projesinde örnek olacak çalışmalar yapmakta. ÖNDER Öğretmen Komisyonu üyesi. Okulunda TÜBİTAK çalışmaları ve diğer bilimsel çalışmalarda proje koordinatörlüğü yapmakta."
    },
    {
        name: "Kamil Karakurt",
        title: "Proje Ekibi",
        image: require("../../../assets/images/Kamil Karakurt-Photoroom.png"),
        bio: "1984 yılında Konya’da doğdu. 2002-2011 yılları arasında Konya bölgesi futbol hakemi olarak görev yaptı. 2007 yılında Necmettin Erbakan Üniversitesi Eğitim Fakültesi Fen Bilgisi öğretmenliğinden mezun oldu. 2011 yılında Kamu Personeli Seçme Sınavında kendi branşında Türkiye 25.’si olarak İstanbul Küçükçekmece Yunus Emre Ortaokulu’na ilk ataması gerçekleşti. 2017 yılında İstanbul Üniversitesi Açıktan ve Uzaktan Eğitim Fakültesi Sosyoloji lisans eğitimini, 2019 yılında Anadolu Üniversitesi Açık öğretim Fakültesi Adalet ön lisans bölümünü tamamladı. 2015-2018 yılları arasında önce Bahçelievler Prof. Dr. Osman Öztürk İmam Hatip Ortaokulu’nda sonra Kudret Saraçoğlu İmam Hatip Ortaokulunda müdür yardımcılığı yaptı. Bahçelievler 15 Temmuz Şehitleri Anadolu İmam Hatip Lisesi’nde fen bilimleri öğretmenliğine devam etmektedir"
    },
    // {
    //     name: "Suzan Ören",
    //     title: "Proje Ekibi",
    //     image: require("../../../assets/images/Ramazan Aydın-Photoroom.png"),
    //     bio: "Lorem ipsum dolor sit amet..."
    // }
  ];
  
  return (
    <TeamGallery
      title="Ekibimiz"
      subtitle="Alanlarında uzman"
      overlineText=""
      members={teamMembers}
      cardWidth={400}
      visibleCards={3}
    />
  );
};

export default HomeTeam;
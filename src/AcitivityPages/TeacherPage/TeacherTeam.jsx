import TeamGallery from '../../components/TeamGallery/TeamGallery';

const TeacherTeam = () => {
  const teamMembers = [
    {
      name: "Zahide Tuba Kor",
      title: "(Yazar)",
      image: "/images/zahidekor.png",
      bio: "Marmara Üniversitesi Siyaset Bilimi ve Uluslararası İlişkiler Bölümü'nde 2003 yılında lisansını, 2007 yılında ise Türkiye-Suriye ilişkileri üzerine yazdığı teziyle yüksek lisansını tamamladı. 2004-2010 yılları arasında Anlayış Dergisi’nde yazar ve editör, 2010-2014 yılları arasında da BİSAV Küresel Araştırmalar Merkezi'nde koordinatör yardımcısı olarak çalıştı. Halihazırda yabancı basından Türkiye, Ortadoğu ve dünya siyasetiyle ilgili tercümeler yapmakta ve çeşitli STK'larda Ortadoğu'yla ilgili seminerler vermektedir. Araştırma konuları arasında Ortadoğu, dinler ve mezhepler tarihi bulunmaktadır. Yayınlanmış çok sayıda yazısı, infografiği ve tercümesi vardır."
    },
    {
      name: "Dr. Ömer Kemal Buhari",
      title: "(İstanbul Medeniyet Üniversitesi İslami İlimler Fakültesi )",
      image: "/images/omerkemali.png",
      bio: "1984'te Konya'da doğan akademisyen, İstanbul Erkek Lisesi'nde Almanca ve İngilizce öğrenirken Fransızca, İtalyanca, İspanyolca, Rusça ve Farsça dillerine ilgi duydu. 2003'te Ruprecht-Karls Heidelberg Üniversitesi'nde Felsefe ve Siyaset Bilimi okumaya başladı. Lisans ve yüksek lisans eğitimini tamamladığı süreçte Latince, Yunanca, Japonca ve Çince öğrendi. 2010'da Orta Doğu'ya seyahat ederek Tahran Üniversitesi'nde Farsça, Kahire'de Arapça eğitimi aldı. Doktorasını Malezya Uluslararası İslam Üniversitesi’nde Batı'nın İslam Düşmanlığının Kök Sebepleri konulu teziyle tamamladı. İslam-Batı ilişkileri, bilim felsefesi, tasavvuf, dinler tarihi ve siyaset felsefesi gibi alanlarda çalışmalar yaptı. İstanbul Medeniyet Üniversitesi’nde öğretim üyesidir."
    },
    {
      name: "Peren Birsaygılı Mut",
      title: "(Yazar)",
      image: "/images/Peren Birsaygılı.png",
      bio: "İzmir doğumlu. Yazar, yayıncı ve belgesel metin yazarı. Ortadoğu, özelde Filistin direniş edebiyatıyla ilgili çalışmaları var. Ödülleri: Suriye edebiyatının tanıtımına sağladığı katkı ve Suriye halkının davasına olan adil bakış açısı nedeniyle Global Justice Organization tarafından Nizar Kabbani Nişanı'yla ödüllendirildi (2022). Filistin edebiyatına yönelik çalışmaları ile Türkiye Yazarlar Birliği (TYB) özel ödülü (2023). Kitapları: Zeytin Ağaçlarının Arasında: Filistin Direniş Edebiyatından Portreler, Kalem ve Tüfek Büyük Filistin İsyanı'ndan Portreler, 1936-1939."
  },
  {
    name: "Doç. Dr. Vahdettin Işık",
    title: "(İbn Haldun Üniversitesi, Medeniyetler İttifakı Enstitüsü)",
    image: "/images/vahdettin.png",
    bio: "Lisans eğitimini İstanbul Üniversitesi Sosyoloji Bölümünde tamamladı. Yüksek lisansını “II. Meşrutiyet’te ve Günümüzde Kültürel Yabancılaşma”, doktorasını da “II. Meşrutiyet Dönemi Türk Düşüncesinde Doğu-Batı Algısı: İctihad ve Sırat-ı Müstakim Dergileri Örneği” tezleriyle yaptı. Osmanlı-Türkiye Modernleşme Tecrübesinin Meseleleri, Çağdaş İslam Düşüncesi, Modern Dünyada Din ve Toplum, Medeniyet Meselesi gibi konularda çalışmalarını sürdürmektedir. Yüzyılın İslamcı mirasının en önemli mecralarından birini oluşturan 1908’den 2008’e İslamcı Dergiler Projesi’ni hazırladı. Çok sayıda yayınlanmış kitabı ve makalesi bulunmaktadır. UNESCO Milli Komitesi Kültürlerin Yakınlaşması İhtisas Komitesi ile İstanbul Ticaret Üniversitesi Mütevelli Heyeti üyesidir. İbn Haldun Üniversitesi Medeniyetler İttifakı Enstitü Müdürü olarak görev yapmaktadır."
},
{
  name: "Dr. İbrahim Çağrı Kurt",
  title: "(Boğaziçi Üniversitesi Moleküler Biyoloji ve Genetik)",
  image: "/images/ibrahimkurt.png",
  bio: "İbrahim Çağrı Kurt, Bilkent Üniversitesi Moleküler Biyoloji ve Genetik Bölümü mezunudur. Koç Üniversitesi'nde yüksek lisans ve Harvard Üniversitesi'nde doktorasını tamamlamıştır. Şu anda Boğaziçi Üniversitesi'nde Dr. Öğretim Üyesi olarak görev yapmakta ve aynı zamanda Londra'da CureCraft şirketinin kurucu ortağı olarak çalışmaktadır. CRISPR teknolojileri ve genom düzenleme alanında uzmanlaşmış olup, Nature Biotechnology'de yayınları ve bir uluslararası patenti bulunmaktadır."
},
{
  name: "Abdullah Yıldız",
  title: "(Eğitimci - Yazar)",
  image: "/images/abdullah yıldız.png",
  bio: "1954 yılında Adana/Kozan'da doğdu. İlkokulu köyünde okudu. Adana İmam Hatip Lisesi’ni 1973 yılında bitirdi. Konya Selçuk Eğitim Enstitüsü’nden 1976’da mezun oldu. 1980’den itibaren çeşitli eğitim kurumlarında toplam 23 yıl öğretmenlik yaptı. Yeniden Milli Mücadele, Pınar ve Umran dergilerinde yazdı. Ocak 2001’den bu yana da her Salı günü Yeni Akit gazetesinde yazıyor. 2006’da bir grup yazar arkadaşı ile birlikte kuruluşuna öncülük ettiği Namaz Gönüllüleri Platformu’nun halen devam eden çalışmaları, binlerce insanın namazla buluşmasına ve namaz bilinci kazanmasına vesile oldu. Abdullah Yıldız evli olup, dört çocuğu, dört de torunu vardır."
},
    
    {
      name: "Ramazan Kayan",
      title: "(Eğitimci - Yazar)",
      image: "/images/ramazan kayan.png",
      bio: "1956 yılında Malatyada doğdu. İlkokulu bitirdikten sonra Malatya İmam Hatip lisesine kayıt yaptırdı. İmam Hatip Lisesini 1976da bitirdi. Daha sonra İmam Hatiplik görevine başladı. İmam Hatiplik görevi yaparken İnönü Üniversitesi İktisadi ve Ticari İlimler Akademisine devam etti. 1982 yılında bu okuldan mezun oldu. 1983 yılında İmam Hatiplikten ayrıldı ve serbest ticaretle uğraşmaya başladı. Yazar özellikle İslami ilimler üzerinde araştırmalarını sürdürmektedir. Evli ve üç çocuk babasıdır. Ramazan Kayan, halen radyo programcılığı ve aylık Özgün İrade Dergisinin Genel Yayın Yönetmenliğini yapmaktadır."
  },
  {
    name: "Ahmet Bulut",
    title: "(Eğitimci - Yazar)",
    image: "/images/ahmetbulut.png",
    bio: "1971 yılında Çanakkale’nin Bayramiç ilçesi Karaköy köyünde doğdu. İlkokulu köyde, orta ve liseyi Bayramiç İmam Hatip Lisesi’nde, üniversiteyi Marmara Üniversitesi İlahiyat Fakültesi’nde okudu. Türkiye onu namazla tanıdı. Namaz gönüllülerinin çalışmalarını organize ediyor, konferanslara katılıyor, televizyon ve radyo programları yapıyor. Evli ve dört çocuk babasıdır."
},
{
  name: "Prof. Dr. Kerim Buladı",
  title: "(Yalova Üniversitesi İslami İlimler Fakültesi)",
  image: "/images/Kerim Buladı.png",
  bio: "1966 yılında hafızlığını tamamlayıp, klasik Arapça tahsili neticesinde icazetini aldı. 1977 yılında Trabzon İmam Hatip Lisesinden mezun oldu. 1981 yılında Bursa Yüksek İslam Enstitüsü’nü bitirdi. Aynı yıl Ağrı’nın Diyadin ilçesine, 1983 yılında ise Hatay‘ın Samandağ ilçesine müftü olarak atandı. 1986 yılında Diyanet İşleri Başkanlığı’na bağlı, İstanbul Haseki Eğitim Merkezinde iki buçuk yıl süreli “Müftü ve Vaizler İhtisas Kursu’nu” tamamladıktan sonra Ağrı‘nın Taşlıçay ilçesine müftü olarak atandı. 1987-1993 yılları arasında Almanya’nın Mainz Başkonsolosluğu bünyesinde din görevlisi olarak çalıştır. 1993 yılında Tekirdağ iş vaizliğine atandı. 1995 yılında Marmara Üniversitesi Sosyal Bilimler Enstitüsü’nde “Kıyamet Süresi’nin Tefsir ve Tasvir Ettiği İnsan Karakteri” adlı teziyle yüksek lisansını tamamladıktan sonra doktoraya başladı. Aynı yıl İstanbul il valizliğine atandı. 1999 yılında “Kur’an’a göre Nankörlük Kavramı” konulu teziyle doktor ünvanını aldı. 1999-2010 yılları arasında Zeytinburnu ilçe vaizi olarak görev yaptı."
},
{
  name: "Hüseyin Akın",
  title: "(Eğitimci - Yazar)",
  image: "/images/huseyin akin.png",
  bio: "1965 Sinop-Türkeli doğumlu olan yazar, Marmara Üniversitesi İlahiyat Fakültesi mezunudur. Çeşitli liselerde öğretmenlik yaptı ve kendi geliştirdiği “Çaktırmadan Öğretme Metodu”nu (Ç.Ö.M) eğitimcilerle paylaştı. Din öğretiminde yeni yaklaşımlar ve din dili eğitimi konularında çalıştı. Lise yıllarından itibaren birçok dergide yazıları yayımlandı; Özülke ve Kırknar dergilerinin yayın yönetmenliğini üstlendi. Şiir, deneme, hikâye, biyografi ve inceleme türlerinde kitaplar yazdı. Hu Dönüşü kitabıyla 2014 Türkiye Yazarlar Birliği Deneme Ödülü’ne, Yan Tesir şiir kitabıyla 2017 Eskader Şiir Ödülü’ne layık görüldü. Şiirleri Farsçaya çevrilip yayımlandı. Sokak Sosyolojisi adlı eseriyle şifahi kültüre katkı sundu."
},
{
  name: "Dr. Ramazan Aydın",
  title: "(Türkiye Maarif Vakfı)",
  image: "/images/ramazanaydin.png",
  bio: "Marmara Üniversitesi İlahiyat Fakültesi’nde İslam Mezhepleri Ana Bilim Dalı’nda 2015 yılında yüksek lisans eğitimini tamamladı. Aynı yıl Anadolu Üniversitesi İktisadi ve İdari Bilimler Fakültesi Uluslararası İlişkiler Bölümü’nden mezun oldu. 2024 yılında ise Marmara Üniversitesi’nden Ortadoğu Siyasi Tarihi ve Uluslararası İlişkiler alanında doktora derecesini aldı. Doktora teziyle ilgili araştırmalar yapmak amacıyla 2023 yılında TÜBİTAK bursiyeri olarak bir yıl boyunca Endonezya’da bulundu. Halen Türkiye Maarif Vakfı Cape Town Okulu’nda okul müdürü olarak görev yapmaktadır."
},

{
  name: "Doç. Dr. Fatih Kucur",
  title: "(İstanbul Üniversitesi Sağlık Bilimleri Fakültesi)",
  image: "/images/fatih kucur.png",
  bio: "Fatih Kucur; lisans eğitimini Erzurum Atatürk Üniversitesi İktisadi ve İdari Bilimler Fakültesi İktisat Bölümünde tamamladı. 2003-2008 yılları arasında Almanya’da bulundu ve Bielefeld Üniversitesi’nde bir müddet psikoloji eğitimi aldı. 2015 Yılında İstanbul Üniversitesi İktisat Fakültesi, Çalışma Ekonomisi ve Endüstri İlişkileri Bölümünde doktorasını tamamladı. Hâlen İstanbul Üniversitesi-Cerrahpaşa Sosyal Hizmet Bölümünde öğretim üyesi olarak akademik hayatına devam etmektedir."
},
{
  name: "Fatma Serap Karamollaoğlu",
  title: "(Eğitimci - Yazar)",
  image: "/images/fatmaserap.png",
  bio: "1955 yılında Balıkesir’de doğdu. 1977 yılında Hacettepe Üniversitesi Eczacılık Fakültesinden mezun oldu. Bir süre kamuda hizmet ettikten sonra, bir özel şirkette iş hayatını tamamlayarak emekliye ayrıldı. Hasan Salih hocadan Arapça dersleri, Hüseyin Kutlu’dan Sülüs ve Nesih yazıdan hat icazeti aldı. Arapça, Tefsir ve Kur’ân dersleri verirken bir taraftan da ders kitapları yazdı. İslam alimlerinin tefsir kitaplarını tercüme etti. Hayatını Kur’ân’ı tanıtmaya ve sevdirmeye adadı. Kur’an’da geçen ve Türkçede kullandığımız kelimeler üzerindeki araştırmaları, bu alanda hazırladığı eğitim kitapları ve Kur’ân Seferberliği projesi ile isim yaptı."
},
{
  name: "Dr. Necdet Subaşı",
  title: "(MEB Bakan Müşaviri)",
  image: "/images/necdetsubai.png",
  bio: "1961 Artvin doğumludur. Atatürk Üniversitesi İslâmi İlimler Fakültesi’nde ilahiyat eğitimi aldı. 1995 yılında Din Sosyolojisi alanında doktorasını tamamladı. Akademik çalışmalarını Yüzüncü Yıl, Muğla ve Gazi Üniversitesi’nde sürdürdü. 2009-2011 yılları arasında 60. T.C. Hükümeti’nce başlatılan “Alevi Açılımı”nda genel koordinatör olarak görev ve sorumluluk üstlendi. 2011-2015 yılları arasında Diyanet İşleri Başkanlığı’nda Strateji Geliştirme Başkanı olarak görev yaptı. 2015 yılında atandığı Başbakan Başdanışmanlığı görevini hâlihazırda MEB danışmanı olarak sürdürmektedir. Subaşı, 2020 yılından itibaren tüm dünyayı kuşatan covid-19 salgın sürecinde dijital düzeyde gerçekleştirilen Karantina Sohbetleri’nin daimi moderatörlüğünü üstlendi. Subaşı, evli ve dört çocuk babasıdır.."
},
{
  name: "Doç. Dr. Osman Sezgin",
  title: "(Marmara Üniversitesi Eğitim Fakültesi)",
  image: "/images/osman sezgin.png",
  bio: "Osman Sezgin, Marmara Üniversitesi’nde lisans ve yüksek lisans, İstanbul Üniversitesi’nde doktora eğitimini tamamladı. Akademik kariyerinde Marmara Üniversitesi’nde Eğitim Bilimleri Koordinatörlüğü yaptı ve Millî Eğitim Bakan Yardımcılığı görevinde bulundu. TRT’de gençlik programları ve radyo yayınlarına katıldı, Harp Akademileri ve Emniyet personeline eğitimler verdi. TÜBA Bilim Ödülü’ne layık görülen eserler yazdı, ulusal ve uluslararası pek çok yayına imza attı. 2000 yılında Kalem Vakfı Okulları’nı kurarak özgün eğitim programları geliştirdi. Halen Kalem Vakfı ve Türk Gençlik Vakfı başkanlığı görevlerini yürütmektedir. Evli ve üç çocuk babasıdır."
},
{
  name: "Prof. Dr. Ali Osman Kuşakcı",
  title: "(İbn Haldun Üniversitesi, Yönetim Bilimleri Fakültesi)",
  image: "/images/alikusak.png",
  bio: "Pendik İmam Hatip mensubudur. 2001 yılında ÖNDER bursu ile Viyana'ya gitti. Viyana Teknik Üniversitesi Endüstri Mühendisliği bölümünden 2006 yılında lisans derecesini aldı. Aynı üniversitenin Endüstri Mühendisliği bölümünde Finans Mühendisliği modülünü bitirerek 2007 yılında yüksek mühendis unvanını elde etti. 2008 yılından itibaren Araştırma ve Öğretim Görevlisi olarak çalıştığı Uluslararası Saraybosna Üniversitesi Endüstri Mühendisliği Bölümünde 2013 yılında doktorasını tamamladı. Aynı üniversitede iki yıl AR&GE Merkezi Müdürlüğü yaptı. 2015 yılında Türkiye’ye dönerek İstanbul Ticaret Üniversitesi’nden çalıştı. Akabinde 2017 yılında İbn Haldun Üniversitesi’ne katıldı. Yapay zeka, bulanık mantık ve iş analitiği alanlarında çalışmalar yapmaktadır. ÖNDER’de Yönetim Kurulu üyesidir."
},
{
  name: "Dr. Fahri Güzel",
  title: "(Ağrı İbrahim Çeçen Üniversitesi İslami İlimler Fakültesi)",
  image: "/images/fahriguzel.png",
  bio: "1972 yılında Erzurum ili Uzundere ilçesinde doğdu. İlkokulu ilçede tamamladı. İstanbul’da hafızlığını yaptı ve hafızlık sonrasında klasik Arapça eğitimi aldı. İstanbul İmam Hatip  lisesinde eğitimine devam etti. 1997 yılında Erzurum İlahiyat fakültesinden mezun oldu. 1998 yılında Din Kültürü ve Ahlak Bilgisi Öğretmeni olarak göreve başladı. 21 yıllık öğretmenlik döneminde imam hatip ortaokulu ve imam hatip lisesinde yönetici olarak görev yaptı. 2001 yılında Din Psikolojisi alanında yüksek lisansını, 2023’de doktorasını tamamladı. Şubat 2020’de Ağrı İbrahim Çeçen Üniversitesinde öğretim görevlisi olarak hizmet etmeye başladı.  Şu an Ağrı İbrahim Çeçen Üniversitesi İslami İlimler Fakültesinde Doktor Öğretim Üyesi olarak görev yapmakta olan Fahri GÜZEL, çeşitli Sivil toplum kuruluşlarında da yöneticilik görevleri üstlenmiştir. Fahri GÜZEL, evli ve dört çocuk babasıdır.  "
},
{
  name: "Prof. Dr. Ahmet Türkan",
  title: "(Necmettin Erbakan Üniversitesi İlahiyat Fakültesi)",
  image: "/images/ahmetturkan.png",
  bio: "Yakında Gelecek..."
},
{
  name: "Prof. Dr. Hasan Ayık",
  title: "(Kırgızistan Türkiye Manas Üniversitesi İlahiyat Fakültesi Dekanı)",
  image: "/images/hasan ayık.png",
  bio: "1960 Erzurum doğumlu. 1984’te Marmara Üniversitesi İlahiyat Fakültesi’nden mezun oldu. 1985-1996 yıllarında öğretmenlik yaptı, ardından Rize İlahiyat Fakültesi’nde akademisyenliğe başladı. 1991’de yüksek lisansını, 2002’de doktorasını tamamladı. 2008’de Doçent, 2013’te Profesör unvanını aldı. Diyanet İşleri Başkanlığı Rize Eğitim Merkezi Kurucu Müdürlüğü ve çeşitli üniversitelerde dekanlık yaptı. Halen Kırgızistan Türkiye Manas Üniversitesi İlahiyat Fakültesi Dekanı. “Gazali’nin Filozofları Eleştirisi” ve “Farabî’de Dil-Mantık İlişkisi” gibi eserleriyle tanınır. Evli ve dört çocuk babasıdır."
},
{
  name: "Prof. Dr. Recep Şentürk",
  title: "(Hamad Bin Khalifa Üniversitesi İslami İlimler Fakültesi Dekanı)",
  image: "/images/recepsenturk.png",
  bio: "1964’te Çankırı’da doğdu. Lisans eğitimini Marmara Üniversitesi İlahiyat Fakültesinde, yüksek lisansını İstanbul Üniversitesi Edebiyat Fakültesi Sosyoloji Bölümden tamamladı. Aynı bölümde asistanlık yaptı. Columbia Üniversitesi Sosyoloji Bölümünde doktorasını tamamladı. 1998-2007 yılları arasında İSAM’da araştırmacı olarak çalıştı. Fatih Sultan Mehmet Vakıf Üniversitesi Medeniyetler İttifakı Enstitüsü kuruluşunda görev aldı. Atlanta’da Emory Üniversitesi Hukuk Fakültesinde misafir araştırmacı olarak bulundu. Oxford Brookes Üniversitesi Sosyal Bilimler ve Hukuk Fakültesi’nde çalışmalarını yürüttü. 2003 yılında doçent, 2008 yılında profesör oldu. Kurucu rektör olarak atandığı İbn Haldun Üniversitesi’nde 2021 yılına kadar bu görevi yürüttü. Halen Hamad Bin Khalifa üniversitesi İslami İlimler Fakültesi dekanıdır. Türkçe, İngilizce ve Arapça birçok kitap ve makale yayını vardır."
},
{
  name: "Doç. Dr. Ahmet Ekşi",
  title: "(Kocaeli Üniversitesi İlahiyat Fakültesi)",
  image: "/images/ahmeteksi.png",
  bio: "1972 yılında Erzurum’da doğdu. Bursa Merkez İmam Hatip Lisesi ve Marmara Üniversitesi İlahiyat Fakültesi’nden mezun oldu. İslam Hukuku alanında Yüksek Lisansını tamamladı. Yedi yıl öğretmenlik yaptıktan sonra 2006 yılında Milli Eğitim Bakanlığı Din Öğretimi Genel Müdürlüğü tarafından ders kitapları yazım komisyonunda görevlendirildi. İlköğretim, lise ve Batı Trakya Türklerinin okullarında okutulacak ders kitaplarının hazırlanmasında çalıştı. 2010 Yılında Selçuk Üniversitesi’nde İslam Hukuku alanında doktorasını tamamladı. Yıldız Teknik Üniversitesi DKAB Bölümüne atandı. Ardından Kocaeli Üniversitesi İlahiyat Fakültesine geçti. 2020’de Doçent oldu. Halen Kocaeli üniversitesi İlahiyat Fakültesinde öğretim üyesi olarak görev yapmaktadır. Yazdığı ders kitaplarının yanı sıra birçok kitap ve makalesi bulunmaktadır."
},
{
  name: "Dr. Şule Şahin Ünlü",
  title: "(Öğretmen - Yazar)",
  image: "/images/sulesahin.png",
  bio: "1988 Bayburt doğumlu olan yazar, eğitim hayatına Bayburt'ta başlamıştır. Bayburt Anadolu İmam Hatip Lisesi'nden mezun olduktan sonra, 2006 yılında Marmara Üniversitesi İlahiyat Fakültesi'ni kazanarak akademik yolculuğuna devam etmiştir. Yüksek lisansını Hadis alanında tamamlayıp, İbnü'l-Arabî'nin Tasavvuf Düşüncesinde Kadın başlıklı doktora çalışması ile alanında uzmanlaşmıştır. Milli Eğitim Bakanlığı'nda öğretmen olarak görev yapmakta olan yazar, evli ve üç çocuk annesidir. Metafizik konular üzerine derinlemesine çalışmalar yapmakta, ileri düzeyde Arapça bilmektedir."
},
{
  name: "Dr. Mesut Çakır",
  title: "(FSM Vakıf Üniversitesi İslami İlimler Fakültesi)",
  image: "/images/mesutcakir.png",
  bio: "Tokat’ın Erbaa ilçesinde doğdu. İlk, orta ve lise tahsilini Erbaa’da tamamladı. 2004’de İstanbul Üniversitesi İlahiyat Fakültesinden mezun oldu ve aynı yıl Marmara Üniversitesi Sosyal Bilimler Enstitüsünde Hadis bölümünde yüksek lisansa başladı. 2007’de “Fezâilü’l-Kur’an hadisleri çerçevesinde Kur’an’ın ezberlenmesi ile ilgili rivayetlerin tahrîc ve değerlendirmesi” adlı teziyle yüksek lisansını tamamladı. 2018 senesinde Sakarya Üniversitesi Sosyal Bilimler Enstitüsünde Hadis bölümünde “İmam Birgivî’nin Kitâbu’l-Îmân Adlı Eserinin Tahkik ve Tahlili” adlı tezi ile doktor oldu. 2004-2020 yılları arası  DİB’e bağlı olarak İmam-Hatiplik vazifesinde bulundu.  İlahiyat Fakültesi yıllarında ve sonrasında Merhum M. Emin Saraç Hocaefendinin ders halkasında derslere devam etti. 2020 yılı Kasım ayı itibariyele Fatih Sultan Mehmet Vakıf Üniversitesinde Hadis Ana Bilim Dalında Dr. Öğretim Üyesi olarak çalışmaya başladı. Hali hazırda Öğretim üyeliği yanında İslami İlimler Fakültesi Dekan Yardımcılığı, Fakülte kurulu ve Fakülte yönetim kurulu üyelikleri ile Lisansüstü Eğitim Enstitüsü yönetim kurulu üyeliği görevlerini de yürütmektedir"
},
{
  name: "Dr. Aytaç Ören",
  title: "(Sağlık Bilimleri Üniversitesi Yabancı Diller bölümü)",
  image: "/images/aytacoren.png",
  bio: "Ankara doğumlu Aytaç Ören,1997 yılı Atatürk Üniversitesi Kazım Karabekir Eğitim Fakültesi İngilizce Öğretmenliği Bölümü mezunudur. Samuel Beckett’in Godot’yu Beklerken üzerine yüksek lisans tezi ve David Lodge’un kampüs romanlarında üstkurmaca üzerine doktora çalışması vardır. İngiliz edebiyatının önde gelen isimlerinden David Lodge’un Kurgu Sanatı, Yazıdaki Yaşamlar ve Bilinç ve Roman adlı yapıtlarını, İngiliz edebiyatında farklı bir kimlikle tanınan Graham Greene’in Generali Tanımak adlı eserini ve önemli bir boşluğu dolduracak Kenneth McMillan Newton’un Yirminci Yüzyıl Edebiyat Teorisi’ni Türkçemize kazandırmıştır. Üstkurgu kavramının Türk edebiyatında daha iyi anlaşılması için Üstkurgu/Üstkurmaca Üzerine başlıklı derlemeyi hazırlamıştır. Çağdaş Edebiyatın Kuramsal Seyri adlı çalışmanın editörlüğünü yapmıştır. Roman, roman kuramı, üstkurmaca, postmodern edebiyat teorileri ve karşılaştırmalı edebiyat üzerine çeşitli çalışmaları bulunmaktadır. Farklı kurumlarda çalıştıktan sonra şu an İstanbul’da Sağlık Bilimleri Üniversitesi’nde öğretim üyesi olarak görev yapmaktadır."
},
    {
      name: "Erol Erdoğan",
      title: "(MEB Bakan Danışmanı)",
      image: "/images/erolerdogan.png",
      bio: "1969 Sinop doğumlu olan yazar, ilahiyat lisansı ve sosyoloji yüksek lisansını tamamladı. Siyasi partilerde ve sivil toplum kuruluşlarında yöneticilik yaptı. Nida, Mavikuş, Şehrengiz, Minika gibi dergilerin kurucuları arasında yer aldı; şiirleri ve yazıları pek çok dergide yayımlandı. 'Oyun Kimin' kitabıyla 2023 Türkiye Yazarlar Birliği Fikir Ödülü’nü kazandı. Zeytinburnu Belediyesi Başkan Danışmanlığı, İSMEK Genel Koordinatörlüğü ve ARGETUS Araştırma Danışmanlığı gibi görevlerde bulundu. İstanbul Kültür Çalıştayı ve 3. Kültür Şurası hazırlıklarında yer aldı. Halen çeşitli vakıf ve kuruluşlarda aktif görev yapmaktadır ve Ağustos 2023’ten itibaren MEB Bakan Danışmanıdır."
    },
    {
      name: "Dr. Musa Mert",
      title: "(Eğitimci - Yazar)",
      image: "/images/musa mert.png",
      bio: " Konya’da doğdu. Isparta İmam Hatip Lisesi ve Selçuk Üniversitesi İlahiyat Fakültesinden mezun oldu. Yüksek Lisansını “Rivayet İlimleri ve Tenkit Usulleri Açısından Ebu Musa el-Eş’ari Kökenli Hadisler” teziyle Temel İslam Bilimleri Hadis Bilim Dalında yaptı. Doktorasını “5E Modelinin Din Eğitimine Uyarlanması ve Bilgi Transferine Etkisi Üzerine Bir Araştırma (10. Sınıf Hadis Dersi Öreği) teziyle Felsefe ve Din Bilimleri Anabilim Dalı Din Eğitimi Bilim Dalında tamamladı. Müfredat yazım komisyonu ve kitap yazım komisyonu üyesi olarak çalıştı. Çeşitli alanlarda yetişkinler ve çocuklar için yazılar kaleme aldı. Yazıları musamert.com adlı kişisel sitesinde, Diyanet Çocuk dergisinde, Beyaz Bulut çocuk edebiyat dergisinde ve Konya Çocuk dergisinde yayımladı. Hâlen İstanbul’un Ümraniye’de bir Anadolu İmam Hatip Lisesinde Meslek Dersleri Öğretmeni olarak görev yapmaktadır. Alanında yayınlanmış 11 eseri bulunmaktadır."
    },
    {
        name: "Doç. Dr. Ahmet Kavlak",
        title: "(Iğdır Üniversitesi İlahiyat Fakültesi)",
        image: "/images/ahmet kavlak.png",
        bio: " Samsun Endüstri Meslek Lisesi Elektronik Bölümünü bitirdi. 19 Mayıs Üniversitesi İlahiyat Fakültesinden mezun oldu. Samsun Özel Ar Lisesinde öğretmenlik yaptı, daha sonra Tokat Gazi Osman Paşa Üniversitesi Felsefe Bölümüne araştırma görevlisi olarak girdi. Yüksek lisansını “Ortega Y Gasset’in İnsan Felsefesi” adlı teziyle Gazi Üniversitesinde, doktorasını “Felsefede, Hristiyanlık ’ta ve İslamiyet’te Hermeneutik” adlı teziyle Hacettepe Üniversitesinde bitirdi. Çankırı Karatekin üniversitesi ve Ankara Yıldırım Beyazıt Üniversitesi felsefe bölümlerinde çalıştı. Halen Iğdır Üniversitesi İlahiyat Fakültesinde Felsefe ve Mantık anabilim dalında öğretim üyesi olarak çalışmaktadır"
    },

  ];
  return (
    <TeamGallery
       title="Hocalarımız"
       subtitle="Hocalarımızla Bilgiye Yolculuk"
      // overlineText="OUR TEAM"
      members={teamMembers}
      cardWidth={400}
      visibleCards={3}
    />
  );
};

export default TeacherTeam;
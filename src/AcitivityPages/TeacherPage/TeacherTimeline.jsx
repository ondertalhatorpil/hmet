import React, { useRef, useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, Clock } from 'lucide-react';



const seminerler = [
  {
    seminerNo: 2,
    title: "Varoluşsal Tehcir Yeni Batı ve Dönüştürücü Şiddet",
    speakers: [
      {
        name: "Dr. Ömer Kemal Buhari",
        institution: "İstanbul Medeniyet Üniversitesi Öğretim Üyesi"
      }
    ],
    detailData: {
      sessions: [
        {
          number: 1,
          title: "Varoluşsal Tehcir Yeni Batı ve Dönüştürücü Şiddet",
          speaker: "Dr. Ömer Kemal Buhari",
          startDate: "6 Ocak 2024",
          endDate: "21.00"
        }
      ]
    }
  },
  {
    seminerNo: 22,
    title: "Çocukluktan Gençliğe Eğitim ve Kültür",
    speakers: [
      {
        name: "Erol Erdoğan",
        institution: "MEB Bakan Danışmanı"
      }
    ],
    detailData: {
      sessions: [
        {
          number: 1,
          title: "Aile tipleri bakımından gençler.",
          speaker: "Erol Erdoğan",
          startDate: "8 Şubat Cumartesi",
          endDate: "19.00"
        },
        {
          number: 2,
          title: "Oyunlu ve oyunsuz hayat.",
          speaker: "Erol Erdoğan",
          startDate: "15 Şubat Cumartesi",
          endDate: "19.00"
        },
        {
          number: 3,
          title: "Önyargılar - N'apsak bu gençleri? ",
          speaker: "Erol Erdoğan",
          startDate: "22 Şubat Cumartesi",
          endDate: "19.00"
        },
        {
          number: 4,
          title: "Kültür mü eğitim mi?",
          speaker: "Erol Erdoğan",
          startDate: "26 Şubat Perşembe",
          endDate: "21.00"
        }
      ]
    }
  },
  {
    seminerNo: 7,
    title: "Bana Öğretmenini Söyle",
    speakers: [
      {
        name: "Hüseyin Akın",
        institution: "Marmara Üniversitesi İlahiyat Fakültesi"
      }
    ],
    detailData: {
      sessions: [
        {
          number: 1,
          title: "Gelişen ve Değişen Dünyada Öğretmen Olmak",
          speaker: "Hüseyin Akın",
          startDate: "9 Ocak Perşembe",
          endDate: "19.00"
        },
        {
          number: 2,
          title: "Öğretmenlik ve Entelektüel Birikim",
          speaker: "Hüseyin Akın",
          startDate: "16 Ocak Perşembe",
          endDate: "19.00"
        },
        {
          number: 2,
          title: "Dünden Bugüne Eğitimci Modelleri ve Öğretmen Tiplemeleri",
          speaker: "Hüseyin Akın",
          startDate: "23 Ocak Perşembe",
          endDate: "19.00"
        },
        {
          number: 2,
          title: "Öğrenci ile İletişim Ya Da Öğrenciyi Anlama Usulleri",
          speaker: "Hüseyin Akın",
          startDate: "30 Ocak Perşembe",
          endDate: "19.00"
        }
      ]
    }
  },
  {
    seminerNo: 23,
    title: "Postmodern Çağda Din Eğitimi",
    speakers: [
      {
        name: "Dr. Musa Mert",
        institution: "Eğitimci Yazar"
      }
    ],
    detailData: {
      sessions: [
        {
          number: 1,
          title: "Önder Öğretmenin Dört Temel Özelliği",
          speaker: "Dr. Musa Mert",
          startDate: "10 Şubat Pazartesi",
          endDate: "19.00"
        },
        {
          number: 2,
          title: "Postmodern Çağda Öğretmen Olmak -Sorunlar-Tespitler-Öneriler-",
          speaker: "Dr. Musa Mert",
          startDate: "17 Şubat Pazartesi",
          endDate: "19.00"
        },
        {
          number: 3,
          title: "Önder Öğretmenin Dört Temel İletişim Yolu",
          speaker: "Dr. Musa Mert",
          startDate: "21 Şubat Cuma",
          endDate: "21.00"
        },
        {
          number: 4,
          title: "Postmodern Çağda Otantik Kaynakların Öğretimi - Özel Örnekler & Örnek Ders Sunumları-",
          speaker: "Dr. Musa Mert",
          startDate: "28 Şubat Cuma",
          endDate: "19.00"
        }
      ]
    }
  },
  {
    seminerNo: 8,
    title: "Uluslararası İlişkilerde Yumuşak Güç: Teorik Temeller ve Küresel Uygulamalar",
    speakers: [
      {
        name: "Dr. Ramazan Aydın",
        institution: "Türkiye Maarif Vakfı"
      }
    ],
    detailData: {
      sessions: [
        {
          number: 1,
          title: "Yumuşak Güç: Teorik Temeller ve Uluslararası İlişkilerdeki Önemi",
          speaker: "Dr. Ramazan Aydın",
          startDate: "10 Ocak Cuma",
          endDate: "19.00"
        },
        {
          number: 2,
          title: "Bir Yumuşak Güç Aracı Olarak Eğitim: Küresel Düzeyde Stratejik Kullanımlar ",
          speaker: "Dr. Ramazan Aydın",
          startDate: "17 Ocak Cuma",
          endDate: "19.00"
        },
        {
          number: 3,
          title: "Türkiye'nin Yumuşak Güç Politikaları: Bölgesel ve Küresel Uygulamalar",
          speaker: "Dr. Ramazan Aydın",
          startDate: "24 Ocak Cuma",
          endDate: "19.00"
        },
        {
          number: 4,
          title: "Dinî Bir Yumuşak Güç Aktörü Olarak Suudi Arabistan: Güneydoğu Asya'daki Uygulamalar ve Sonuçlar",
          speaker: "Dr. Ramazan Aydın",
          startDate: "31 Ocak Cuma",
          endDate: "21.00"
        }
      ]
    }
  },
  {
    seminerNo: 14,
    title: "Cumhuriyetin ilk Döneminde Dinî Hayat",
    speakers: [
      {
        name: "Dr. Fahri Güzel",
        institution: "Ağrı İbrahim Çeçen Üniversitesi İslami İlimler Fakültesi"
      }
    ],
    detailData: {
      sessions: [
        {
          number: 1,
          title: "Cumhuriyete Götüren Süreç",
          speaker: "Dr. Fahri Güzel",
          startDate: "20 Ocak Pazartesi",
          endDate: "21.00"
        },
        {
          number: 2,
          title: "Cumhuriyetin kurucu lideri olarak Mustafa Kemal Atatürk 'ün inanç ve düşünce dünyası",
          speaker: "Dr. Fahri Güzel",
          startDate: "27 Ocak Pazartesi",
          endDate: "21.00"
        },
        {
          number: 3,
          title: "Dini hayatı etkileyen devrimler",
          speaker: "Dr. Fahri Güzel",
          startDate: "3 Şubat Pazartesi",
          endDate: "21.00"
        },
        {
          number: 4,
          title: "Devrimlerin psiko-sosyal etkileri",
          speaker: "Dr. Fahri Güzel",
          startDate: "10 Şubat Pazartesi",
          endDate: "21.00"
        }
      ]
    }
  },
  {
    seminerNo: 6,
    title: "Namazla Diriliş",
    speakers: [
      {
        name: "Abdullah Yıldız",
        institution: "Eğitimci - Yazar"
      },
      {
        name: "Ramazan Kayan",
        institution: "Eğitimci - Yazar"
      },
      {
        name: "Ahmet Bulut",
        institution: "Eğitimci - Yazar"
      },
      {
        name: "Prof. Dr. Kerim Buladı",
        institution: "Yalova Üniversitesi İslami İlimler Fakültesi"
      }
    ],
    detailData: {
      sessions: [
        {
          number: 1,
          title: "Namaz Nasıl Anlatılmalı?",
          speaker: "Abdullah Yıldız",
          startDate: "8 Ocak Çarşamba",
          endDate: "21.00"
        },
        {
          number: 2,
          title: "Gazze ve Namaz",
          speaker: "Ramazan Kayan ",
          startDate: "14 Ocak Salı",
          endDate: "21.00"
        },
        {
          number: 3,
          title: "Aile ve Namaz",
          speaker: "Prof. Dr. Kerim Buladı",
          startDate: "30 Ocak Perşembe",
          endDate: "21.00"
        },
        {
          number: 4,
          title: "Gençler ve Namaz",
          speaker: "Ahmet Bulut",
          startDate: "4 Şubat Salı",
          endDate: "21.00"
        }
      ]
    }
  },
  {
    seminerNo: 10,
    title: "Kur'an'da ve Türkçede Ortak Olan Kelimelerle Kolay ve Hızlı Arapça Öğrenme Metodu",
    speakers: [
      {
        name: "Fatma Serap Karamollaoğlu",
        institution: "Eğitimci - Yazar"
      }
    ],
    detailData: {
      sessions: [
        {
          number: 1,
          title: "Arapça öğrenmek gerçekten zor mu?",
          speaker: "Fatma Serap Karamollaoğlu",
          startDate: "11 Ocak Cumartesi",
          endDate: "19.00"
        },
        {
          number: 2,
          title: "Kur'an Okuyarak Arapça Öğrenme Metodu: Kur'an'ın Merkezindeki Türkçe Kelimeler",
          speaker: "Fatma Serap Karamollaoğlu",
          startDate: "18 Ocak Cumartesi",
          endDate: "19.00"
        },
        {
          number: 3,
          title: "Kur'an Okuyarak Arapça Öğrenme Metodu: Kur'an'ı Anlayarak Okuma Rehberi",
          speaker: "Fatma Serap Karamollaoğlu",
          startDate: "27 Ocak",
          endDate: "19.00"
        },
        {
          number: 4,
          title: "Kur'an'ın Harikulade Kelimeleri",
          speaker: "Fatma Serap Karamollaoğlu",
          startDate: "3 Şubat Pazartesi",
          endDate: "19.00"
        }
      ]
    }
  },
  {
    seminerNo: 18,
    title: "Güncel Dinî Meseleler",
    speakers: [
      {
        name: "Doç. Dr. Ahmet Ekşi",
        institution: "Kocaeli Üniversitesi İlahiyat Fakültesi"
      }
    ],
    detailData: {
      sessions: [
        {
          number: 1,
          title: "Güncel Dini Meselelerin Çözümüyle İlgili Temel Yaklaşımlar",
          speaker: "Doç. Dr. Ahmet Ekşi",
          startDate: "31 Ocak Cuma",
          endDate: "19.00"
        },
        {
          number: 2,
          title: "İnsan Bedenine Müdahalenin Sınırları",
          speaker: "Doç. Dr. Ahmet Ekşi",
          startDate: "7 Şubat Cuma",
          endDate: "19.00"
        },
        {
          number: 3,
          title: "Kimsesiz Çocukların Korunmasına Dair Uygulama Modelleri",
          speaker: "Doç. Dr. Ahmet Ekşi",
          startDate: "14 Şubat",
          endDate: "19.00"
        },
        {
          number: 4,
          title: "Gıda Ürünlerinde Helal ve Haram Kriterleri",
          speaker: "Doç. Dr. Ahmet Ekşi",
          startDate: "21 Şubat Cuma",
          endDate: "19.00"
        }
      ]
    }
  },
  {
    seminerNo: 15,
    title: "Kudüs Okumaları",
    speakers: [
      {
        name: "Prof. Dr. Ahmet Türkan",
        institution: "Necmettin Erbakan Üniversitesi İlahiyat Fakültesi"
      }
    ],
    detailData: {
      sessions: [
        {
          number: 1,
          title: "Yahudilikte Kudüs",
          speaker: "Prof. Dr. Ahmet Türkan",
          startDate: "21 Ocak Salı",
          endDate: "19.00"
        },
        {
          number: 2,
          title: "Hıristiyanlıkta Kudüs",
          speaker: "Prof. Dr. Ahmet Türkan",
          startDate: "28 Ocak Salı",
          endDate: "19.00"
        },
        {
          number: 3,
          title: "İslam'da Kudüs'ün Önemi ve Müslüman Yönetimlerde Kudüs",
          speaker: "Prof. Dr. Ahmet Türkan",
          startDate: "4 Şubat Salı",
          endDate: "19.00"
        },
        {
          number: 4,
          title: "Kudüs'e Dair Teopolitik Yaklaşımlar ve Günümüz Kudüs'ü",
          speaker: "Prof. Dr. Ahmet Türkan",
          startDate: "11 Şubat Salı",
          endDate: "19.00"
        }
      ]
    }
  },
  {
    seminerNo: 17,
    title: "Postmodern Eğitim ve Gençlik",
    speakers: [
      {
        name: "Prof. Dr. Recep Şentürk",
        institution: "Hamad Bin Khalifa Üniversitesi İslami İlimler Fakültesi Dekanı"
      }
    ],
    detailData: {
      sessions: [
        {
          number: 1,
          title: "Özgür Birey",
          speaker: "Prof. Dr. Recep Şentürk",
          startDate: "28 Ocak Salı",
          endDate: "21.00"
        },
        {
          number: 2,
          title: "Önce Sen!",
          speaker: "Prof. Dr. Recep Şentürk",
          startDate: "4 Şubat Salı",
          endDate: "21.00"
        },
        {
          number: 3,
          title: "Beden Kıblesi",
          speaker: "Prof. Dr. Recep Şentürk",
          startDate: "11 Şubat Salı",
          endDate: "21.00"
        }
      ]
    }
  },
  {
    seminerNo: 19,
    title: "İbnü'l-Arabî'nin Metafiziğinde Varlık, İbadet ve Kadın",
    speakers: [
      {
        name: "Dr. Şule Şahin Ünlü",
        institution: "Öğretmen - Yazar"
      }
    ],
    detailData: {
      sessions: [
        {
          number: 1,
          title: "İbnü'l-Arabî'de Metafizik Kavramlar",
          speaker: "Dr. Şule Şahin Ünlü",
          startDate: "5 Şubat Çarşamba",
          endDate: "19.00"
        },
        {
          number: 2,
          title: "Alma-Verme Dengesi ve Tasavvufî Perspektif",
          speaker: "Dr. Şule Şahin Ünlü",
          startDate: "12 Şubat Çarşamba",
          endDate: "21.00"
        },
        {
          number: 3,
          title: "İbadetlerin Metafizik Boyutu",
          speaker: "Dr. Şule Şahin Ünlü",
          startDate: "19 Şubat Çarşamba",
          endDate: "21.00"
        },
        {
          number: 4,
          title: "İbnü'l-Arabî'nin Kadın Anlayışı",
          speaker: "Dr. Şule Şahin Ünlü",
          startDate: "25 Şubat Salı",
          endDate: "21.00"
        }
      ]
    }
  },
  {
    seminerNo: 4,
    title: "Medeniyet Mirasımızı Bugünden Okumak",
    speakers: [
      {
        name: "Doç. Dr. Vahdettin Işık",
        institution: "İbn Haldun Üniversitesi, Medeniyetler İttifakı Enstitüsü"
      }
    ],
    detailData: {
      sessions: [
        {
          number: 1,
          title: "Medeniyet Mirasımızı Bugünden Okumak-Oluşum Süreci",
          speaker: "Doç. Dr. Vahdettin Işık",
          startDate: "7 Ocak Salı",
          endDate: "21.00"
        },
        {
          number: 2,
          title: "Medeniyet Mirasımızı Bugünden Okumak-İktidar Dönemi",
          speaker: "Doç. Dr. Vahdettin Işık",
          startDate: "14 Ocak Salı",
          endDate: "19.00"
        },
        {
          number: 3,
          title: "Medeniyet Mirasımızı Bugünden Okumak-Yenilgi ve Arayış Dönemi",
          speaker: "Doç. Dr. Vahdettin Işık",
          startDate: "21 Ocak Salı",
          endDate: "21.00"
        }
      ]
    }
  },
  {
    seminerNo: 3,
    title: "Filistin Direnişinden Öncü Şahsiyetler",
    speakers: [
      {
        name: "Peren Birsaygılı Mut",
        institution: "Yazar"
      }
    ],
    detailData: {
      sessions: [
        {
          number: 1,
          title: "Şehit İzzeddin El-Kassam - Suriye'den Filistin'e Bir Direniş Hikâyesi",
          speaker: "Peren Birsaygılı Mut",
          startDate: "7 Ocak Salı",
          endDate: "19.00"
        },
        {
          number: 2,
          title: "Şehit Nuh İbrahim - Filistin Direnişinin İlk Şehit Şairi",
          speaker: "Peren Birsaygılı Mut",
          startDate: "18 Ocak Cumartesi",
          endDate: "21.00"
        },
        {
          number: 3,
          title: "Şehit Abdurrahim Mahmud - Mescid-i Aksa'ya Veda",
          speaker: "Peren Birsaygılı Mut",
          startDate: "6 Şubat Perşembe",
          endDate: "19.00"
        },
        {
          number: 4,
          title: "Şehit Naci El-Ali - Çizgilerle Direniş",
          speaker: "Peren Birsaygılı Mut",
          startDate: "13 Şubat Perşembe",
          endDate: "19.00"
        }
      ]
    }
  },{
    seminerNo: 9,
    title: "Sosyal Bilimleri Yeniden Düşünmek",
    speakers: [
      {
        name: "Doç. Dr. Fatih Kucur",
        institution: "İstanbul Üniversitesi Sağlık Bilimleri Fakültesi"
      }
    ],
    detailData: {
      sessions: [
        {
          number: 1,
          title: "Sosyal Bilimler Ne İşe Yarar: Arka Plan ve İnşa",
          speaker: "Doç. Dr. Fatih Kucur",
          startDate: "10 Ocak Cuma",
          endDate: "21.00"
        },
        {
          number: 2,
          title: "Sosyal Bilimler Ne İşe Yarar: Kuşatma ve Devrim",
          speaker: "Doç. Dr. Fatih Kucur",
          startDate: "17 Ocak Cuma",
          endDate: "21.00"
        }
      ]
    }
  },
  {
    seminerNo: 21,
    title: "Edebiyatta Kurgu Sanatı",
    speakers: [
      {
        name: "Dr. Aytaç Ören",
        institution: "Sağlık Bilimleri Üniversitesi Yabancı Diller bölümü"
      }
    ],
    detailData: {
      sessions: [
        {
          number: 1,
          title: "Hayal ve Gerçek Arasında Kurmaca: Dünyalar İnşa Etmek ",
          speaker: "Dr. Aytaç Ören",
          startDate: "7 Şubat Cuma",
          endDate: "21.00"
        },
        {
          number: 2,
          title: "Bir Gerçeklik Oyunu: Üstkurmaca ",
          speaker: "Dr. Aytaç Ören",
          startDate: "14 Şubat Cuma",
          endDate: "21.00"
        }
      ]
    }
  },
  {
    seminerNo: 16,
    title: "Aklın Dini Anlama ve Yorumlamadaki Rolü",
    speakers: [
      {
        name: "Prof. Dr. Hasan Ayık",
        institution: "Kırgızistan Türkiye Manas Üniversitesi İlahiyat Fakültesi Dekanı"
      }
    ],
    detailData: {
      sessions: [
        {
          number: 1,
          title: "Ebu Hanife'nin İnanç Sorunları Karşısındaki Tutumu",
          speaker: "Prof. Dr. Hasan Ayık",
          startDate: "25 Ocak Cumartesi",
          endDate: "19.00"
        },
        {
          number: 2,
          title: "İslam Dünyasında Akli İlimlerin Konumu",
          speaker: "Prof. Dr. Hasan Ayık",
          startDate: "1 Şubat Cumartesi",
          endDate: "19.00"
        }
      ]
    }
  },
  {
    seminerNo: 13,
    title: "Yapay Zekâ ve Hayatımıza Yansımaları",
    speakers: [
      {
        name: "Prof. Dr. Ali Osman Kuşakcı",
        institution: "İbn Haldun Üniversitesi, Yönetim Bilimleri Fakültesi"
      }
    ],
    detailData: {
      sessions: [
        {
          number: 1,
          title: "Yapay Zekâ Nedir?",
          speaker: "Prof. Dr. Ali Osman Kuşakcı",
          startDate: "16 Ocak Perşembe",
          endDate: "21.00"
        },
        {
          number: 2,
          title: "Makine Nasıl Öğrenir?",
          speaker: "Prof. Dr. Ali Osman Kuşakcı",
          startDate: "23 Ocak Perşembe",
          endDate: "21.00"
        },
        {
          number: 3,
          title: "Yapay Zekâ ve Etik",
          speaker: "Prof. Dr. Ali Osman Kuşakcı",
          startDate: "15 Şubat Cumartesi",
          endDate: "21.00"
        },
        {
          number: 4,
          title: "Yapay Zekâ Eğitimde Nasıl Kullanılabilir?",
          speaker: "Prof. Dr. Ali Osman Kuşakcı",
          startDate: "24 Şubat Pazartesi",
          endDate: "19.00"
        }
      ]
    }
  },
  {
    seminerNo: 1,
    title: "Geçmişten Günümüze Suriye ve Suriyeliler",
    speakers: [
      {
        name: "Zahide Tuba Kor",
        institution: "Yazar"
      }
    ],
    detailData: {
      sessions: [
        {
          number: 1,
          title: "Suriye'nin genel özellikleri, demografisi, jeopolitiği, sosyolojisi, 20. yüzyıl siyaseti ve Baas Partisi",
          speaker: "Zahide Tuba Kor",
          startDate: "6 Ocak Pazartesi",
          endDate: "19.00"
        },
        {
          number: 2,
          title: "2011'de isyana yol açan koşullar, yerel-bölgesel-küresel üç düzlemde yaşanan savaş",
          speaker: "Zahide Tuba Kor",
          startDate: "13 Ocak Pazartesi",
          endDate: "19.00"
        },
        {
          number: 3,
          title: "Suriye savaşının devlet, toplum ve birey üzerindeki etkileri ve Baas rejiminin yıkılışı",
          speaker: "Zahide Tuba Kor",
          startDate: "20 Ocak Pazartesi",
          endDate: "19.00"
        },
        {
          number: 4,
          title: "Suriyeli mülteciler ve mültecilerle ilgili doğru bilinen yanlışlar",
          speaker: "Zahide Tuba Kor",
          startDate: "25 Ocak Cumartesi",
          endDate: "21.00"
        }
      ]
    }
  },
  {
    seminerNo: 11,
    title: "Yeni İlgiler",
    speakers: [
      {
        name: "Dr. Necdet Subaşı",
        institution: "MEB Bakan Müşaviri"
      }
    ],
    detailData: {
      sessions: [
        {
          number: 1,
          title: "Entelektüel Biyografiler",
          speaker: "Dr. Necdet Subaşı",
          startDate: "11 Ocak Cumartesi",
          endDate: "21.00"
        },
        {
          number: 2,
          title: "Devrim ve Din",
          speaker: "Dr. Necdet Subaşı",
          startDate: "24 Ocak Cuma",
          endDate: "21.00"
        }
      ]
    }
  },
  {
    seminerNo: 12,
    title: "Kaynaştırma mı Bütünleştirme mi?",
    speakers: [
      {
        name: "Doç. Dr. Osman Sezgin",
        institution: "Marmara Üniversitesi Eğitim Fakültesi"
      }
    ],
    detailData: {
      sessions: [
        {
          number: 1,
          title: "Kaynaştırma mı Bütünleştirme mi?",
          speaker: "Doç. Dr. Osman Sezgin",
          startDate: "13 Ocak Pazartesi",
          endDate: "21.00"
        }
      ]
    }
  },
  {
    seminerNo: 20,
    title: "Hadisler ve Biz",
    speakers: [
      {
        name: "Dr. Mesut Çakır",
        institution: "FSM Vakıf Üniversitesi İslami İlimler Fakültesi"
      }
    ],
    detailData: {
      sessions: [
        {
          number: 1,
          title: "Hz. Peygamber'in dindeki konumu",
          speaker: "Dr. Mesut Çakır",
          startDate: "6 Şubat Perşembe",
          endDate: "21.00"
        },
        {
          number: 2,
          title: "Hadislerin güvenilirliği (Hadislerin nakli ve kitaplara girme süreci)",
          speaker: "Dr. Mesut Çakır",
          startDate: "13 Şubat Perşembe",
          endDate: "21.00"
        },
        {
          number: 3,
          title: "Hadis Kitaplarının mahiyeti ve faydalanma usulleri",
          speaker: "Dr. Mesut Çakır",
          startDate: "20 Şubat Perşembe",
          endDate: "21.00"
        },
        {
          number: 4,
          title: "Hadise dair güncel bazı tartışmalar",
          speaker: "Dr. Mesut Çakır",
          startDate: "27 Şubat Perşembe",
          endDate: "21.00"
        }
      ]
    }
  },
  {
    seminerNo: 24,
    title: "Doğru Düşünce ve Doğru İnanç",
    speakers: [
      {
        name: "Prof. Dr. Ahmet Kavlak",
        institution: "Iğdır Üniversitesi İlahiyat Fakültesi"
      }
    ],
    detailData: {
      sessions: [
        {
          number: 1,
          title: "Doğru Düşünce",
          speaker: "Prof. Dr. Ahmet Kavlak",
          startDate: "27 Şubat Perşembe",
          endDate: "19.00"
        },
        {
          number: 2,
          title: "Bilimsel Düşünce",
          speaker: "Prof. Dr. Ahmet Kavlak",
          startDate: "28 Şubat Cuma",
          endDate: "21.00"
        }
      ]
    }
  },
  {
    seminerNo: 5,
    title: "Evrim Serisi",
    speakers: [
      {
        name: "Dr. İbrahim Çağrı Kurt",
        institution: "Boğaziçi Üniversitesi Moleküler Biyoloji ve Genetik"
      }
    ],
    detailData: {
      sessions: [
        {
          number: 1,
          title: "Evren, Samanyolu ve Dünya evrimsel süreçlerle mi yaratıldı?",
          speaker: "Dr. İbrahim Çağrı Kurt",
          startDate: "8 Ocak Çarşamba",
          endDate: "19.00"
        },
        {
          number: 2,
          title: "Mikrop, bitki, hayvan ve Âdemoğlu evrimsel süreçlerle mi yaratıldı?",
          speaker: "Dr. İbrahim Çağrı Kurt",
          startDate: "15 Ocak Çarşamba",
          endDate: "21.00"
        },{
          number: 3,
          title: "Evrim, İslam ile uyumlu mudur? - 1",
          speaker: "Dr. İbrahim Çağrı Kurt",
          startDate: "22 Ocak Çarşamba",
          endDate: "21.00"
        },{
          number: 4,
          title: "Evrim, İslam ile uyumlu mudur? - 2",
          speaker: "Dr. İbrahim Çağrı Kurt",
          startDate: "8 Ocak Çarşamba",
          endDate: "21.00"
        },
      ]
    }
  }
];


const SeminarTimeline = () => {
  const scrollContainerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [selectedSeminar, setSelectedSeminar] = useState(null);
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
    try {
      // "2025" yılını kaldır
      dateStr = dateStr.replace(/\s+2025\s*/, '').trim();
      const [day, month] = dateStr.split(' ');
      const monthNumber = parseInt(turkishMonthToNumber(month)) - 1; // JavaScript'te aylar 0'dan başlar
      return new Date(2025, monthNumber, parseInt(day));
    } catch (error) {
      console.error('Error parsing date:', dateStr, error);
      return new Date();
    }
  };


  // formattedSeminars içindeki sıralama kısmını güncelleyelim
const formattedSeminars = seminerler.map(seminer => {
  const firstSession = seminer.detailData.sessions[0];
  const seminerDate = parseTurkishDate(firstSession.startDate);
  // Saat bilgisini de ekleyelim
  const timeInMinutes = parseInt(firstSession.endDate.split('.')[0]) * 60; // Saati dakikaya çevir
  
  return {
    ...seminer,
    dateObj: seminerDate,
    timeInMinutes, // Saat bilgisini dakika cinsinden saklayalım
    isPast: seminerDate < currentDate,
    firstSession: {
      ...firstSession,
      startDateObj: seminerDate
    },
    totalSessions: seminer.detailData.sessions.length,
    speaker: seminer.speakers[0]
  };
}).sort((a, b) => {
  // Önce tarihleri karşılaştır
  const dateComparison = a.dateObj - b.dateObj;
  
  // Eğer tarihler aynıysa saatleri karşılaştır
  if (dateComparison === 0) {
    return a.timeInMinutes - b.timeInMinutes; // Önce 19:00, sonra 21:00
  }
  
  return dateComparison;
});

  const futureEvents = formattedSeminars.filter(s => !s.isPast);
  const nextEvent = futureEvents.length > 0 ? futureEvents[0] : null;

  // Scroll kontrolü
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

  // Scroll işlevi
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
    <div className="min-h-screen p-4 md:p-8 flex items-center justify-center w-full">
      <div className="max-w-full mt-16 md:mt-32">
        <div className="text-center mb-8 md:mb-16">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#BDA473] mb-4 md:mb-6 bg-gradient-to-r from-[#BDA473] to-[#BDA473] bg-clip-text text-transparent">
            2025 Seminer Programı
          </h1>
          
          <div className="max-w-xs sm:max-w-sm md:max-w-xl mx-auto bg-gray-800/30 p-4 md:p-6 rounded-2xl backdrop-blur-sm">
            <div className="flex justify-between text-white mb-2 text-sm md:text-base">
              <span>Program İlerlemesi</span>
              <span>{formattedSeminars.filter(s => s.isPast).length} / {formattedSeminars.length} Program Tamamlandı</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2">
              <div 
                className="bg-[#BDA473] h-2 rounded-full transition-all duration-1000"
                style={{ width: `${(formattedSeminars.filter(s => s.isPast).length / formattedSeminars.length) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>
        
        <div className="relative">
          {/* Scroll Butonları */}
          {canScrollLeft && (
            <button 
              onClick={() => scroll('left')}
              className="absolute left-0 md:left-8 top-1/2 transform -translate-y-1/2 z-10 bg-gray-800/80 p-4 rounded-full text-white hover:bg-gray-700 backdrop-blur-sm transition-all hover:scale-110"
              aria-label="Önceki"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          )}
          
          {canScrollRight && (
            <button 
              onClick={() => scroll('right')}
              className="absolute right-0 md:right-8 top-1/2 transform -translate-y-1/2 z-10 bg-gray-800/80 p-4 rounded-full text-white hover:bg-gray-700 backdrop-blur-sm transition-all hover:scale-110"
              aria-label="Sonraki"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          )}

          {/* Timeline Kartları */}
          <div 
            ref={scrollContainerRef}
            className="overflow-x-auto scrollbar-hide pb-8 mx-2 md:mx-16 relative"
            style={{ scrollSnapType: 'x mandatory', WebkitOverflowScrolling: 'touch' }}
          >
            <div className="relative min-w-max">
              <div className="absolute h-1 w-full top-24 bg-[#BDA473]"></div>
              
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
                        ${selectedSeminar === seminer.seminerNo ? 'bg-[#8B7355]' : 'bg-[#BDA473]'}
                        rounded-full flex items-center justify-center shadow-lg
                        transition-all duration-300 hover:scale-110`}>
                        <Clock className="w-4 h-4 md:w-6 md:h-6 text-white" />
                      </div>
                    </div>
                    
                    <div 
                      className={`mt-16 md:mt-20 bg-gray-800/90 backdrop-blur-sm p-4 md:p-6 rounded-2xl shadow-xl 
                        transition-all duration-500 border group relative
                        ${selectedSeminar === seminer.seminerNo 
                          ? 'border-[#8B7355] ring-4 ring-[#8B7355]/50 scale-110 shadow-2xl shadow-[#8B7355]/20 animate-pulse'
                          : nextEvent && nextEvent.seminerNo === seminer.seminerNo 
                            ? 'border-[#BDA473] ring-2 ring-[#BDA473] scale-105'
                            : 'border-gray-700 hover:scale-105 hover:shadow-lg hover:border-[#BDA473]/30 hover:bg-gray-800/95'}`}
                    >
                      {nextEvent && nextEvent.seminerNo === seminer.seminerNo && (
                        <div className="absolute -top-3 right-4 bg-[#BDA473] text-white text-xs px-3 py-1 rounded-full font-medium animate-pulse">
                          Yaklaşan Seminer
                        </div>
                      )}

                      <div className={`${
                        selectedSeminar === seminer.seminerNo
                          ? 'bg-[#8B7355]'
                          : nextEvent && nextEvent.seminerNo === seminer.seminerNo 
                            ? 'bg-gradient-to-br from-[#BDA473] to-[#B39B6C]'
                            : 'bg-[#BDA473]'
                        } rounded-lg p-2 md:p-3 -mt-10 md:-mt-12 mx-auto w-24 md:w-28 text-center`}>
                        <div className="text-xl md:text-2xl font-bold text-white">
                          {seminer.firstSession.startDate.split(' ')[0]}
                        </div>
                        <div className="text-xs md:text-sm text-white/90">
                          {seminer.firstSession.startDate.split(' ')[1]}
                        </div>
                      </div>

                      <h3 className="text-white font-semibold text-base md:text-lg mt-4 text-center group-hover:text-[#BDA473] transition-colors line-clamp-2">
                        {seminer.title}
                      </h3>

                      <div className="mt-2 text-center text-gray-400 text-sm line-clamp-1">
                        {seminer.speaker.name}
                      </div>

                      <div className="flex items-center justify-center gap-2 text-gray-400 mt-2 text-sm md:text-base">
                        <Clock className="w-4 h-4" />
                        <span>{seminer.firstSession.endDate}</span>
                      </div>

                      {seminer.totalSessions > 1 && (
                        <div className="text-center text-[#BDA473] text-xs mt-2">
                          {seminer.totalSessions} Oturum
                        </div>
                      )}
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
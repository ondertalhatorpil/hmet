import React, { useRef, useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, Clock } from 'lucide-react';



const seminerler = [
  {
    seminerNo: 1,
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
    seminerNo: 2,
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
    seminerNo: 3,
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
    seminerNo: 4,
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
    seminerNo: 5,
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
    seminerNo: 6,
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
    seminerNo: 7,
    title: "Namazla Diriliş",
    speakers: [
      {
        name: "Abdullah Yıldız",
        institution: "Namaz Gönüllüleri Platformu"
      },
      {
        name: "Ramazan Kayan",
        institution: "Namaz Gönüllüleri Platformu"
      },
      {
        name: "Ahmet Bulut",
        institution: "Namaz Gönüllüleri Platformu"
      },
      {
        name: "Prof. Dr. Kerim Buladı",
        institution: "Namaz Gönüllüleri Platformu"
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
    seminerNo: 8,
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
    seminerNo: 9,
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
    seminerNo: 10,
    title: "Kudüs Okumaları",
    speakers: [
      {
        name: "Prof. Dr. Ahmet Türkan",
        institution: "Necmettin Erbakan Üniversitesi"
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
    seminerNo: 11,
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
    seminerNo: 12,
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
          startDate: "8 Ocak Çarşamba",
          endDate: "19.00"
        },
        {
          number: 2,
          title: "Alma-Verme Dengesi ve Tasavvufî Perspektif",
          speaker: "Dr. Şule Şahin Ünlü",
          startDate: "15 Ocak Çarşamba",
          endDate: "21.00"
        },
        {
          number: 3,
          title: "İbadetlerin Metafizik Boyutu",
          speaker: "Dr. Şule Şahin Ünlü",
          startDate: "22 Ocak Çarşamba",
          endDate: "21.00"
        },
        {
          number: 4,
          title: "İbnü'l-Arabî'nin Kadın Anlayışı",
          speaker: "Dr. Şule Şahin Ünlü",
          startDate: "5 Şubat Çarşamba",
          endDate: "21.00"
        }
      ]
    }
  },
  {
    seminerNo: 13,
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
    seminerNo: 14,
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
    seminerNo: 15,
    title: "Sosyal Bilimleri Yeniden Düşünmek",
    speakers: [
      {
        name: "Doç. Dr. Fatih Kucur",
        institution: "İstanbul Üniversitesi-Cerrahpaşa Öğretim Üyesi"
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
    seminerNo: 16,
    title: "Edebiyatta Kurgu Sanatı",
    speakers: [
      {
        name: "Dr. Aytaç Ören",
        institution: "Sağlık Bilimleri Üniversitesi Öğretim Üyesi"
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
    seminerNo: 17,
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
    seminerNo: 18,
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
    seminerNo: 19,
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
    seminerNo: 20,
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
    seminerNo: 21,
    title: "Kaynaştırma mı Bütünleştirme mi?",
    speakers: [
      {
        name: "Doç. Dr. Osman Sezgin",
        institution: "Rehberlik ve Psikolojik Danışmanlık Anabilim Dalı Öğretim Üyesi"
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
    seminerNo: 22,
    title: "Hadisler ve Biz",
    speakers: [
      {
        name: "Dr. Mesut Çakır",
        institution: "Fatih Sultan Mehmet Vakıf Üniversitesi"
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
    seminerNo: 23,
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
  }
];


const SeminarTimeline = () => {
  const scrollContainerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const currentDate = new Date();
  
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
      const parts = dateStr.split(' ');
      const day = parts[0];
      const month = parts[1];
      return new Date(`2025-${turkishMonthToNumber(month)}-${day.padStart(2, '0')}`);
    } catch (error) {
      console.error('Error parsing date:', error);
      return new Date();
    }
  };

  // Tarihe göre sırala
  const formattedSeminars = seminerler.map(seminer => {
    let dateStr = seminer.detailData.sessions[0].startDate;
    dateStr = dateStr.replace(/\s+\d{4}$/, '');
    
    const seminerDate = parseTurkishDate(dateStr);
    return {
      ...seminer,
      dateObj: seminerDate,
      isPast: false,
      firstSession: {
        ...seminer.detailData.sessions[0],
        startDate: dateStr
      },
      totalSessions: seminer.detailData.sessions.length,
      speaker: seminer.speakers[0]
    };
  }).sort((a, b) => {
    // Önce tarihleri karşılaştır
    const dateComparison = a.dateObj.getTime() - b.dateObj.getTime();
    if (dateComparison !== 0) return dateComparison;
    
    // Eğer tarihler aynıysa, saatleri karşılaştır
    const timeA = parseInt(a.firstSession.endDate.replace('.', ''));
    const timeB = parseInt(b.firstSession.endDate.replace('.', ''));
    return timeA - timeB;
  });

  const futureEvents = formattedSeminars.filter(s => !s.isPast);
  const nextEvent = futureEvents.length > 0 ? futureEvents[0] : null;

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
      // İlk yüklenmede scroll durumunu kontrol et
      checkScroll();
    }

    return () => {
      if (container) {
        container.removeEventListener('scroll', checkScroll);
      }
    };
  }, []);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      // Bir kartın genişliği + gap
      const cardWidth = 340; // md breakpoint'teki kart genişliği
      const gap = 32; // md:gap-8 = 32px
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
    <div className="min-h-screen p-2 sm:p-4 md:p-8 flex items-center justify-center w-full h-full">
      <div className="max-w-full mx-auto mt-16 md:mt-40">
        <div className="text-center mb-6 md:mb-16">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#D3BD92] mb-4 md:mb-6">
            2025 Seminer Programı
          </h1>
          
          <div className="max-w-xs sm:max-w-sm md:max-w-xl mx-auto bg-gray-800/30 p-3 sm:p-4 md:p-6 rounded-2xl backdrop-blur-sm">
            <div className="flex justify-between text-white mb-2 text-xs sm:text-sm md:text-base">
              <span>Program İlerlemesi</span>
              <span>{formattedSeminars.filter(s => s.isPast).length} / {formattedSeminars.length} Program Tamamlandı</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2">
              <div 
                className="bg-[#D3BD92] h-2 rounded-full transition-all duration-1000"
                style={{ width: `${(formattedSeminars.filter(s => s.isPast).length / formattedSeminars.length) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>
        
        <div className="relative">
        {canScrollLeft && (
  <button 
    onClick={() => scroll('left')}
    className="absolute left-2 sm:left-4 md:left-8 top-1/2 transform -translate-y-1/2 z-10 bg-gray-800/80 p-4 rounded-full text-white hover:bg-gray-700 backdrop-blur-sm transition-all hover:scale-110"
    aria-label="Önceki"
  >
    <ChevronLeft className="w-6 h-6" />
  </button>
)}

{canScrollRight && (
  <button 
    onClick={() => scroll('right')}
    className="absolute right-2 sm:right-4 md:right-8 top-1/2 transform -translate-y-1/2 z-10 bg-gray-800/80 p-4 rounded-full text-white hover:bg-gray-700 backdrop-blur-sm transition-all hover:scale-110"
    aria-label="Sonraki"
  >
    <ChevronRight className="w-6 h-6" />
  </button>
)}

          <div 
            ref={scrollContainerRef}
            className="overflow-x-auto pb-8 mx-2 md:mx-16 relative scrollbar-hide"
            style={{
              scrollSnapType: 'x mandatory',
              WebkitOverflowScrolling: 'touch'
            }}
          >
            <div className="relative min-w-max">
              <div className="absolute h-1 w-full top-24 bg-[#D3BD92]"></div>
              
              <div className="flex gap-4 md:gap-8 pt-8 px-4 md:px-8">
                {formattedSeminars.map((seminer, index) => (
                  <div 
                    key={index} 
                    className="relative w-[300px] sm:w-[320px] md:w-[340px] flex-shrink-0"
                    style={{ scrollSnapAlign: 'start' }}
                  >
                    <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <div className={`w-8 h-8 md:w-12 md:h-12 bg-[#D3BD92]
                        rounded-full flex items-center justify-center shadow-lg
                        transition-all duration-300 hover:scale-110`}>
                        <Clock className="w-4 h-4 md:w-6 md:h-6 text-white" />
                      </div>
                    </div>
                    
                    <div 
                      className={`mt-16 md:mt-20 bg-gray-800/90 backdrop-blur-sm p-4 md:p-6 rounded-2xl shadow-xl 
                        transition-all duration-300 border
                        ${nextEvent && nextEvent.seminerNo === seminer.seminerNo 
                          ? 'border-[#D3BD92] ring-2 ring-[#D3BD92] scale-105' 
                          : 'border-gray-700 hover:scale-105'}
                        group relative`}
                    >
                      {nextEvent && nextEvent.seminerNo === seminer.seminerNo && (
                        <div className="absolute -top-3 right-4 bg-[#D3BD92] text-black text-xs px-3 py-1 rounded-full font-medium animate-pulse">
                          Yaklaşan Seminer
                        </div>
                      )}

                      <div className={`${
                        nextEvent && nextEvent.seminerNo === seminer.seminerNo 
                          ? 'bg-gradient-to-br from-[#D3BD92] to-[#B39B6C]'
                          : 'bg-[#D3BD92]'
                        } rounded-lg p-2 md:p-3 -mt-10 md:-mt-12 mx-auto w-24 md:w-28 text-center`}>
                        <div className="text-xl md:text-2xl font-bold text-white">
                          {seminer.firstSession.startDate.split(' ')[0]}
                        </div>
                        <div className="text-xs md:text-sm text-white/90">
                          {seminer.firstSession.startDate.split(' ')[1]}
                        </div>
                      </div>

                      <h3 className="text-white font-semibold text-base md:text-lg mt-4 text-center group-hover:text-[#D3BD92] transition-colors line-clamp-2">
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
                        <div className="text-center text-[#D3BD92] text-xs mt-2">
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
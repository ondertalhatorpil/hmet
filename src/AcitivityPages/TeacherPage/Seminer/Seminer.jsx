import React from 'react';
import Masonry from 'react-masonry-css';
import SeminerCard from '../../../components/Seminer/Seminer';
import './Seminer.css'


const Seminer = () => {
  const breakpointColumns = {
    default: 3,
    1200: 2,
    768: 1
  };

  const seminerler = [
    {
      seminerNo: 1,
      title: "Geçmişten Günümüze Suriye ve Suriyeliler",
      speakers: [
        {
          name: "Zahide Tuba Kor",
          institution: "Yazar",
          image: '/images/zahidekor.png'
        }
      ],
      detailData: {
        sessions: [
          {
            number: 1,
            title: "Suriye'nin genel özellikleri, demografisi, jeopolitiği, sosyolojisi, 20. yüzyıl siyaseti ve Baas Partisi",
            speaker: "Zahide Tuba Kor",
            startDate: "6 Ocak 2025 Pazartesi",
            endDate: "19.00"
          },
          {
            number: 2,
            title: "2011'de isyana yol açan koşullar, yerel-bölgesel-küresel üç düzlemde yaşanan savaş",
            speaker: "Zahide Tuba Kor",
            startDate: "13 Ocak 2025 Pazartesi",
            endDate: "19.00"
          },
          {
            number: 3,
            title: "Suriye savaşının devlet, toplum ve birey üzerindeki etkileri ve Baas rejiminin yıkılışı",
            speaker: "Zahide Tuba Kor",
            startDate: "20 Ocak 2025 Pazartesi", 
            endDate: "19.00"
          },
          {
            number: 4,
            title: "Suriyeli mülteciler ve mültecilerle ilgili doğru bilinen yanlışlar",
            speaker: "Zahide Tuba Kor",
            startDate: "25 Ocak 2025 Cumartesi",
            endDate: "21.00"
          }
        ]
      }
    },
    {
      seminerNo: 2,
      title: "Varoluşsal Tehcir Yeni Batı ve Dönüştürücü Şiddet",
      speakers: [
        {
          name: "Dr. Ömer Kemal Buhari",
          institution: "İstanbul Medeniyet Üniversitesi Öğretim Üyesi",
          image: '/images/omerkemali.png'
        }
      ],
      detailData: {
        sessions: [
          {
            number: 1,
            title: "Varoluşsal Tehcir Yeni Batı ve Dönüştürücü Şiddet",
            speaker: "Dr. Ömer Kemal Buhari",
            startDate: "6 Ocak 2025 Pazartesi",
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
          institution: "Yazar",
          image: '/images/Peren Birsaygılı.png'
        }
      ],
      detailData: {
        sessions: [
          {
            number: 1,
            title: "Şehit İzzeddin El-Kassam - Suriye'den Filistin'e Bir Direniş Hikâyesi",
            speaker: "Peren Birsaygılı Mut",
            startDate: "7 Ocak 2025 Salı",
            endDate: "19.00"
          },
          {
            number: 2,
            title: "Şehit Nuh İbrahim - Filistin Direnişinin İlk Şehit Şairi",
            speaker: "Peren Birsaygılı Mut",
            startDate: "18 Ocak 2025 Cumartesi",
            endDate: "21.00"
          },
          {
            number: 3,
            title: "Şehit Abdurrahim Mahmud - Mescid-i Aksa'ya Veda",
            speaker: "Peren Birsaygılı Mut",
            startDate: "6 Şubat 2025 Perşembe",
            endDate: "19.00"
          },
          {
            number: 4,
            title: "Şehit Naci El-Ali - Çizgilerle Direniş",
            speaker: "Peren Birsaygılı Mut",
            startDate: "13 Şubat 2025 Perşembe",
            endDate: "19.00"
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
          institution: "İbn Haldun Üniversitesi, Medeniyetler İttifakı Enstitüsü",
          image: '/images/vahdettin.png'
        }
      ],
      detailData: {
        sessions: [
          {
            number: 1,
            title: "Medeniyet Mirasımızı Bugünden Okumak-Oluşum Süreci",
            speaker: "Doç. Dr. Vahdettin Işık",
            startDate: "7 Ocak 2025 Salı",
            endDate: "21.00"
          },
          {
            number: 2,
            title: "Medeniyet Mirasımızı Bugünden Okumak-İktidar Dönemi",
            speaker: "Doç. Dr. Vahdettin Işık",
            startDate: "14 Ocak 2025 Salı",
            endDate: "19.00"
          },
          {
            number: 3,
            title: "Medeniyet Mirasımızı Bugünden Okumak-Yenilgi ve Arayış Dönemi",
            speaker: "Doç. Dr. Vahdettin Işık",
            startDate: "21 Ocak 2025 Salı",
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
          institution: "Boğaziçi Üniversitesi Moleküler Biyoloji ve Genetik",
          image: '/images/ibrahimkurt.png'
        }
      ],
      detailData: {
        sessions: [
          {
            number: 1,
            title: "Evren, Samanyolu ve Dünya evrimsel süreçlerle mi yaratıldı?",
            speaker: "Dr. İbrahim Çağrı Kurt",
            startDate: "8 Ocak 2025 Çarşamba",
            endDate: "19.00"
          },
          {
            number: 2,
            title: "Mikrop, bitki, hayvan ve Âdemoğlu evrimsel süreçlerle mi yaratıldı?",
            speaker: "Dr. İbrahim Çağrı Kurt",
            startDate: "15 Ocak 2025 Çarşamba",
            endDate: "21.00"
          },
          {
            number: 3,
            title: "Evrim, İslam ile uyumlu mudur? - 1",
            speaker: "Dr. İbrahim Çağrı Kurt",
            startDate: "22 Ocak 2025 Çarşamba",
            endDate: "21.00"
          },
          {
            number: 4,
            title: "Evrim, İslam ile uyumlu mudur? - 2",
            speaker: "Dr. İbrahim Çağrı Kurt",
            startDate: "29 Ocak 2025 Çarşamba",
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
          institution: "Eğitimci - Yazar",
          image: '/images/abdullah yıldız.png'
        },
        {
          name: "Ramazan Kayan",
          institution: "Eğitimci - Yazar",
          image: '/images/ramazan kayan.png'
        },
        {
          name: "Ahmet Bulut",
          institution: "Eğitimci - Yazar",
          image: '/images/ahmetbulut.png'
        },
        {
          name: "Prof. Dr. Kerim Buladı",
          institution: "Yalova Üniversitesi İslami İlimler Fakültesi",
          image: '/images/Kerim Buladı.png'
        }
      ],
      detailData: {
        sessions: [
          {
            number: 1,
            title: "Namaz Nasıl Anlatılmalı?",
            speaker: "Abdullah Yıldız",
            startDate: "8 Ocak 2025 Çarşamba",
            endDate: "21.00"
          },
          {
            number: 2,
            title: "Gazze ve Namaz",
            speaker: "Ramazan Kayan",
            startDate: "14 Ocak 2025 Salı",
            endDate: "21.00"
          },
          {
            number: 3,
            title: "Aile ve Namaz",
            speaker: "Prof. Dr. Kerim Buladı",
            startDate: "30 Ocak 2025 Perşembe",
            endDate: "21.00"
          },
          {
            number: 4,
            title: "Gençler ve Namaz",
            speaker: "Ahmet Bulut",
            startDate: "4 Şubat 2025 Salı",
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
          institution: "Marmara Üniversitesi İlahiyat Fakültesi",
          image: '/images/huseyin akin.png'
        }
      ],
      detailData: {
        sessions: [
          {
            number: 1,
            title: "Gelişen ve Değişen Dünyada Öğretmen Olmak",
            speaker: "Hüseyin Akın",
            startDate: "9 Ocak 2025 Perşembe",
            endDate: "19.00"
          },
          {
            number: 2,
            title: "Öğretmenlik ve Entelektüel Birikim",
            speaker: "Hüseyin Akın",
            startDate: "16 Ocak 2025 Perşembe",
            endDate: "19.00"
          },
          {
            number: 3,
            title: "Dünden Bugüne Eğitimci Modelleri ve Öğretmen Tiplemeleri",
            speaker: "Hüseyin Akın",
            startDate: "23 Ocak 2025 Perşembe",
            endDate: "19.00"
          },
          {
            number: 4,
            title: "Öğrenci ile İletişim Ya Da Öğrenciyi Anlama Usulleri",
            speaker: "Hüseyin Akın",
            startDate: "30 Ocak 2025 Perşembe",
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
          institution: "Türkiye Maarif Vakfı",
          image: '/images/ramazanaydin.png'
        }
      ],
      detailData: {
        sessions: [
          {
            number: 1,
            title: "Yumuşak Güç: Teorik Temeller ve Uluslararası İlişkilerdeki Önemi",
            speaker: "Dr. Ramazan Aydın",
            startDate: "10 Ocak 2025 Cuma",
            endDate: "19.00"
          },
          {
            number: 2,
            title: "Bir Yumuşak Güç Aracı Olarak Eğitim: Küresel Düzeyde Stratejik Kullanımlar",
            speaker: "Dr. Ramazan Aydın",
            startDate: "17 Ocak 2025 Cuma",
            endDate: "19.00"
          },
          {
            number: 3,
            title: "Türkiye'nin Yumuşak Güç Politikaları: Bölgesel ve Küresel Uygulamalar",
            speaker: "Dr. Ramazan Aydın",
            startDate: "24 Ocak 2025 Cuma",
            endDate: "19.00"
          },
          {
            number: 4,
            title: "Dinî Bir Yumuşak Güç Aktörü Olarak Suudi Arabistan: Güneydoğu Asya'daki Uygulamalar ve Sonuçlar",
            speaker: "Dr. Ramazan Aydın",
            startDate: "31 Ocak 2025 Cuma",
            endDate: "21.00"
          }
        ]
      }
    },
    {
      seminerNo: 9,
      title: "Sosyal Bilimleri Yeniden Düşünmek",
      speakers: [
        {
          name: "Doç. Dr. Fatih Kucur",
          institution: "İstanbul Üniversitesi Sağlık Bilimleri Fakültesi",
          image: '/images/fatih kucur.png'
        }
      ],
      detailData: {
        sessions: [
          {
            number: 1,
            title: "Sosyal Bilimler Ne İşe Yarar: Arka Plan ve İnşa",
            speaker: "Doç. Dr. Fatih Kucur",
            startDate: "10 Ocak 2025 Cuma",
            endDate: "21.00"
          },
          {
            number: 2,
            title: "Sosyal Bilimler Ne İşe Yarar: Kuşatma ve Devrim",
            speaker: "Doç. Dr. Fatih Kucur",
            startDate: "17 Ocak 2025 Cuma",
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
            institution: "Eğitimci - Yazar",
            image: '/images/fatmaserap.png'
          }
        ],
        detailData: {
          sessions: [
            {
              number: 1,
              title: "Arapça öğrenmek gerçekten zor mu?",
              speaker: "Fatma Serap Karamollaoğlu",
              startDate: "11 Ocak 2025 Cumartesi",
              endDate: "19.00"
            },
            {
              number: 2,
              title: "Kur'an Okuyarak Arapça Öğrenme Metodu: Kur'an'ın Merkezindeki Türkçe Kelimeler",
              speaker: "Fatma Serap Karamollaoğlu",
              startDate: "18 Ocak 2025 Cumartesi",
              endDate: "19.00"
            },
            {
              number: 3,
              title: "Kur'an Okuyarak Arapça Öğrenme Metodu: Kur'an'ı Anlayarak Okuma Rehberi",
              speaker: "Fatma Serap Karamollaoğlu",
              startDate: "27 Ocak 2025 Pazartesi",
              endDate: "19.00"
            },
            {
              number: 4,
              title: "Kur'an'ın Harikulade Kelimeleri",
              speaker: "Fatma Serap Karamollaoğlu",
              startDate: "3 Şubat 2025 Pazartesi",
              endDate: "19.00"
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
            institution: "MEB Bakan Müşaviri",
            image: '/images/necdetsubai.png'
          }
        ],
        detailData: {
          sessions: [
            {
              number: 1,
              title: "Entelektüel Biyografiler",
              speaker: "Dr. Necdet Subaşı",
              startDate: "11 Ocak 2025 Cumartesi",
              endDate: "21.00"
            },
            {
              number: 2,
              title: "Devrim ve Din",
              speaker: "Dr. Necdet Subaşı",
              startDate: "24 Ocak 2025 Cuma",
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
            institution: "Marmara Üniversitesi Eğitim Fakültesi",
            image: '/images/osman sezgin.png'
          }
        ],
        detailData: {
          sessions: [
            {
              number: 1,
              title: "Kaynaştırma mı Bütünleştirme mi?",
              speaker: "Doç. Dr. Osman Sezgin",
              startDate: "13 Ocak 2025 Pazartesi",
              endDate: "21.00"
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
            institution: "İbn Haldun Üniversitesi, Yönetim Bilimleri Fakültesi",
            image: '/images/alikusak.png'
          }
        ],
        detailData: {
          sessions: [
            {
              number: 1,
              title: "Yapay Zekâ Nedir?",
              speaker: "Prof. Dr. Ali Osman Kuşakcı",
              startDate: "16 Ocak 2025 Perşembe",
              endDate: "21.00"
            },
            {
              number: 2,
              title: "Makine Nasıl Öğrenir?",
              speaker: "Prof. Dr. Ali Osman Kuşakcı",
              startDate: "23 Ocak 2025 Perşembe",
              endDate: "21.00"
            },
            {
              number: 3,
              title: "Yapay Zekâ ve Etik",
              speaker: "Prof. Dr. Ali Osman Kuşakcı",
              startDate: "15 Şubat 2025 Cumartesi",
              endDate: "21.00"
            },
            {
              number: 4,
              title: "Yapay Zekâ Eğitimde Nasıl Kullanılabilir?",
              speaker: "Prof. Dr. Ali Osman Kuşakcı",
              startDate: "24 Şubat 2025 Pazartesi",
              endDate: "19.00"
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
            institution: "Ağrı İbrahim Çeçen Üniversitesi İslami İlimler Fakültesi",
            image: '/images/fahriguzel.png'
          }
        ],
        detailData: {
          sessions: [
            {
              number: 1,
              title: "Cumhuriyete Götüren Süreç",
              speaker: "Dr. Fahri Güzel",
              startDate: "20 Ocak 2025 Pazartesi",
              endDate: "21.00"
            },
            {
              number: 2,
              title: "Cumhuriyetin kurucu lideri olarak Mustafa Kemal Atatürk 'ün inanç ve düşünce dünyası",
              speaker: "Dr. Fahri Güzel",
              startDate: "27 Ocak 2025 Pazartesi",
              endDate: "21.00"
            },
            {
              number: 3,
              title: "Dini hayatı etkileyen devrimler",
              speaker: "Dr. Fahri Güzel",
              startDate: "3 Şubat 2025 Pazartesi",
              endDate: "21.00"
            },
            {
              number: 4,
              title: "Devrimlerin psiko-sosyal etkileri",
              speaker: "Dr. Fahri Güzel",
              startDate: "10 Şubat 2025 Pazartesi",
              endDate: "21.00"
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
            institution: "Necmettin Erbakan Üniversitesi İlahiyat Fakültesi",
            image: '/images/ahmetturkan.png'
          }
        ],
        detailData: {
          sessions: [
            {
              number: 1,
              title: "Yahudilikte Kudüs",
              speaker: "Prof. Dr. Ahmet Türkan",
              startDate: "21 Ocak 2025 Salı",
              endDate: "19.00"
            },
            {
              number: 2,
              title: "Hıristiyanlıkta Kudüs",
              speaker: "Prof. Dr. Ahmet Türkan",
              startDate: "28 Ocak 2025 Salı",
              endDate: "19.00"
            },
            {
              number: 3,
              title: "İslam'da Kudüs'ün Önemi ve Müslüman Yönetimlerde Kudüs",
              speaker: "Prof. Dr. Ahmet Türkan",
              startDate: "4 Şubat 2025 Salı",
              endDate: "19.00"
            },
            {
              number: 4,
              title: "Kudüs'e Dair Teopolitik Yaklaşımlar ve Günümüz Kudüs'ü",
              speaker: "Prof. Dr. Ahmet Türkan",
              startDate: "11 Şubat 2025 Salı",
              endDate: "19.00"
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
            institution: "Kırgızistan Türkiye Manas Üniversitesi İlahiyat Fakültesi Dekanı",
            image: '/images/hasan ayık.png'
          }
        ],
        detailData: {
          sessions: [
            {
              number: 1,
              title: "Ebu Hanife'nin İnanç Sorunları Karşısındaki Tutumu",
              speaker: "Prof. Dr. Hasan Ayık",
              startDate: "25 Ocak 2025 Cumartesi",
              endDate: "19.00"
            },
            {
              number: 2,
              title: "İslam Dünyasında Akli İlimlerin Konumu",
              speaker: "Prof. Dr. Hasan Ayık",
              startDate: "1 Şubat 2025 Cumartesi",
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
            institution: "Hamad Bin Khalifa Üniversitesi İslami İlimler Fakültesi Dekanı",
            image: '/images/recepsenturk.png'
          }
        ],
        detailData: {
          sessions: [
            {
              number: 1,
              title: "Özgür Birey",
              speaker: "Prof. Dr. Recep Şentürk",
              startDate: "28 Ocak 2025 Salı",
              endDate: "21.00"
            },
            {
              number: 2,
              title: "Önce Sen!",
              speaker: "Prof. Dr. Recep Şentürk",
              startDate: "4 Şubat 2025 Salı",
              endDate: "21.00"
            },
            {
              number: 3,
              title: "Beden Kıblesi",
              speaker: "Prof. Dr. Recep Şentürk",
              startDate: "11 Şubat 2025 Salı",
              endDate: "21.00"
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
            institution: "Kocaeli Üniversitesi İlahiyat Fakültesi",
            image: '/images/ahmeteksi.png'
          }
        ],
        detailData: {
          sessions: [
            {
              number: 1,
              title: "Güncel Dini Meselelerin Çözümüyle İlgili Temel Yaklaşımlar",
              speaker: "Doç. Dr. Ahmet Ekşi",
              startDate: "31 Ocak 2025 Cuma",
              endDate: "19.00"
            },
            {
              number: 2,
              title: "İnsan Bedenine Müdahalenin Sınırları",
              speaker: "Doç. Dr. Ahmet Ekşi",
              startDate: "7 Şubat 2025 Cuma",
              endDate: "19.00"
            },
            {
              number: 3,
              title: "Kimsesiz Çocukların Korunmasına Dair Uygulama Modelleri: Evlat Edinme, Koruyu Aile",
              speaker: "Doç. Dr. Ahmet Ekşi",
              startDate: "14 Şubat 2025 Cuma",
              endDate: "19.00"
            },
            {
              number: 4,
              title: "Gıda Ürünlerinde Helal ve Haram Kriterleri",
              speaker: "Doç. Dr. Ahmet Ekşi",
              startDate: "21 Şubat 2025 Cuma",
              endDate: "19.00"
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
            institution: "Öğretmen - Yazar",
            image: '/images/sulesahin.png'
          }
        ],
        detailData: {
          sessions: [
            {
              number: 1,
              title: "İbnü'l-Arabî'de Metafizik Kavramlar",
              speaker: "Dr. Şule Şahin Ünlü",
              startDate: "5 Şubat 2025 Çarşamba",
              endDate: "21.00"
            },
            {
              number: 2,
              title: "Alma-Verme Dengesi ve Tasavvufî Perspektif",
              speaker: "Dr. Şule Şahin Ünlü",
              startDate: "12 Şubat 2025 Çarşamba",
              endDate: "21.00"
            },
            {
              number: 3,
              title: "İbadetlerin Metafizik Boyutu",
              speaker: "Dr. Şule Şahin Ünlü",
              startDate: "19 Şubat 2025 Çarşamba",
              endDate: "21.00"
            },
            {
              number: 4,
              title: "İbnü'l-Arabî'nin Kadın Anlayışı",
              speaker: "Dr. Şule Şahin Ünlü",
              startDate: "25 Şubat 2025 Salı",
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
            institution: "FSM Vakıf Üniversitesi İslami İlimler Fakültesi",
            image: '/images/mesutcakir.png'
          }
        ],
        detailData: {
          sessions: [
            {
              number: 1,
              title: "Hz. Peygamber'in dindeki konumu",
              speaker: "Dr. Mesut Çakır",
              startDate: "6 Şubat 2025 Perşembe",
              endDate: "21.00"
            },
            {
              number: 2,
              title: "Hadislerin güvenilirliği (Hadislerin nakli ve kitaplara girme süreci)",
              speaker: "Dr. Mesut Çakır",
              startDate: "13 Şubat 2025 Perşembe",
              endDate: "21.00"
            },
            {
              number: 3,
              title: "Hadis Kitaplarının mahiyeti ve faydalanma usulleri",
              speaker: "Dr. Mesut Çakır",
              startDate: "20 Şubat 2025 Perşembe",
              endDate: "21.00"
            },
            {
              number: 4,
              title: "Hadise dair güncel bazı tartışmalar",
              speaker: "Dr. Mesut Çakır",
              startDate: "27 Şubat 2025 Perşembe",
              endDate: "21.00"
            }
          ]
        }
      },
      {
        seminerNo: 21,
        title: "Edebiyat ve Kurgu Sanatı",
        speakers: [
          {
            name: "Dr. Aytaç Ören",
            institution: "Recep Tayyip Erdoğan Üniversitesi Fen Edebiyat Fakültesi",
            image: '/images/aytacoren.png'
          }
        ],
        detailData: {
          sessions: [
            {
              number: 1,
              title: "Hayal ve Gerçek Arasında Kurmaca: Dünyalar İnşa Etmek",
              speaker: "Dr. Aytaç Ören",
              startDate: "7 Şubat 2025 Cuma",
              endDate: "21.00"
            },
            {
              number: 2,
              title: "Bir Gerçeklik Oyunu: Üstkurmaca",
              speaker: "Dr. Aytaç Ören",
              startDate: "14 Şubat 2025 Cuma",
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
            institution: "MEB Bakan Danışmanı",
            image: '/images/erolerdogan.png'
          }
        ],
        detailData: {
          sessions: [
            {
              number: 1,
              title: "Aile tipleri bakımından gençler",
              speaker: "Erol Erdoğan",
              startDate: "8 Şubat 2025 Cumartesi",
              endDate: "19.00"
            },
            {
              number: 2,
              title: "Oyunlu ve oyunsuz hayat",
              speaker: "Erol Erdoğan",
              startDate: "15 Şubat 2025 Cumartesi",
              endDate: "19.00"
            },
            {
              number: 3,
              title: "Önyargılar - N'apsak bu gençleri?",
              speaker: "Erol Erdoğan",
              startDate: "22 Şubat 2025 Cumartesi",
              endDate: "19.00"
            },
            {
              number: 4,
              title: "Kültür mü eğitim mi?",
              speaker: "Erol Erdoğan",
              startDate: "26 Şubat 2025 Çarşamba",
              endDate: "21.00"
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
            institution: "Eğitimci Yazar",
            image: '/images/musa mert.png'
          }
        ],
        detailData: {
          sessions: [
            {
              number: 1,
              title: "Önder Öğretmenin Dört Temel Özelliği",
              speaker: "Dr. Musa Mert",
              startDate: "10 Şubat 2025 Pazartesi",
              endDate: "19.00"
            },
            {
              number: 2,
              title: "Postmodern Çağda Öğretmen Olmak -Sorunlar-Tespitler-Öneriler-",
              speaker: "Dr. Musa Mert",
              startDate: "17 Şubat 2025 Pazartesi",
              endDate: "19.00"
            },
            {
              number: 3,
              title: "Önder Öğretmenin Dört Temel İletişim Yolu",
              speaker: "Dr. Musa Mert",
              startDate: "21 Şubat 2025 Cuma",
              endDate: "21.00"
            },
            {
              number: 4,
              title: "Postmodern Çağda Otantik Kaynakların Öğretimi - Özel Örnekler & Örnek Ders Sunumları-",
              speaker: "Dr. Musa Mert",
              startDate: "28 Şubat 2025 Cuma",
              endDate: "19.00"
            }
          ]
        }
      },
      {
        seminerNo: 24,
        title: "Doğru Düşünce ve Doğru İnanç",
        speakers: [
          {
            name: "Doç. Dr. Ahmet Kavlak",
            institution: "",
            image: '/images/ahmet kavlak.png'
          }
        ],
        detailData: {
          sessions: [
            {
              number: 1,
              title: "Doğru Düşünce",
              speaker: "Doç. Dr. Ahmet Kavlak",
              startDate: "27 Şubat 2025 Perşembe",
              endDate: "19.00"
            },
            {
              number: 2,
              title: "Bilimsel Düşünce",
              speaker: "Doç. Dr. Ahmet Kavlak",
              startDate: "28 Şubat 2025 Cuma",
              endDate: "21.00"
            }
          ]
        }
      }
     ];

  return (
    <div className="hi-seminer-page">
      <div className="hi-seminer-container">
        <div className="hi-seminer-header-section">
          <h1 className="hi-seminer-header">Seminerler</h1>
          <p className="hi-seminer-description">
          Farklı Perspektiflerle Derinlemesine Öğrenin
          </p>
        </div>
        
        <Masonry
          breakpointCols={breakpointColumns}
          className="hi-masonry-grid"
          columnClassName="hi-masonry-grid_column"
        >
          {seminerler.map((seminer, index) => (
            <SeminerCard
              key={seminer.seminerNo + '-' + index}
              {...seminer}
            />
          ))}
        </Masonry>
      </div>
    </div>
  );
};

export default Seminer;
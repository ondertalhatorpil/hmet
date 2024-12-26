import React from 'react';
import backgroundImage from './Background.png';

const KVKK = () => {
  return (
    <div className="min-h-screen bg-cover bg-no-repeat bg-center bg-fixed" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <main className="container mx-auto px-4 sm:px-6 py-12">
        <div className="max-w-4xl mx-auto bg-white/95 backdrop-blur-sm shadow-xl rounded-lg p-8 sm:p-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-8 text-center">
            KİŞİSEL VERİLERİN İŞLENMESİ AYDINLATMA METNİ
          </h1>

          <div className="prose prose-lg max-w-none text-gray-600">
            <p className="mb-8 leading-relaxed">
              İşbu aydınlatma metni, veri sorumlusu tarafından hangi kişisel verilerinizin; hangi amaçla, nasıl ve hangi nedenle işlendiği, 
              kimlerle paylaşıldığı ve ne kadar süreyle saklandığı konularında sizi bilgilendirmek amacıyla hazırlanmıştır. 
              Bilgilendirme, 6698 sayılı Kişisel Verilerin Korunması Kanunu'nun 10'uncu maddesi kapsamında yapılmaktadır.
            </p>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">MADDE 1: VERİ SORUMLUSU</h2>
              <p className="mb-4">
                Kişisel verileriniz, veri sorumlusu sıfatıyla ÖNDER İmam Hatipliler Derneği tarafından aşağıda açıklanan kapsamda işlenebilecektir.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="font-medium mb-2">İletişim Bilgileri:</p>
                <p>E-posta: onder@onder.org.tr</p>
                <p>Adres: Akşemsettin Mh. Şair Fuzuli Sk. No: 22 Fatih – İSTANBUL</p>
              </div>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">MADDE 2: İŞLENEN KİŞİSEL VERİLER</h2>
              <div className="space-y-4">
                <div className="pl-4 border-l-4 border-blue-500">
                  <p>Kişisel bilgiler: İletişim faaliyetlerinin yürütülmesi, komisyon kapsamında görevlendirme yapılması</p>
                </div>
                <div className="pl-4 border-l-4 border-blue-500">
                  <p>İletişim: İletişim faaliyetlerinin yürütülmesi</p>
                </div>
                <div className="pl-4 border-l-4 border-blue-500">
                  <p>İşlem güvenliği: Yetkili kişi, kurum ve kuruluşlara bilgi verilmesi</p>
                </div>
              </div>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">MADDE 3: VERİLERİN SAKLAMA SÜRESİ</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Kişisel Veriler: Kimlik bilgisinin edinilmesinden itibaren 10 yıl</li>
                <li>İletişim: İletişim bilgisinin edinilmesinden itibaren 10 yıl</li>
                <li>İşlem güvenliği: Kişisel verinin işlenmesinden itibaren 10 yıl</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">MADDE 4: KİŞİSEL VERİ TOPLAMA YÖNTEMLERİ</h2>
              <p className="mb-4">
                İletilen kişisel verilerden kimlik ve iletişim bilgileri, ancak bu iş için hazırlanmış formu doldurmaları yoluyla elde edilmektedir.
                Elde edilen bu kişisel verilerden kimlik ve iletişim bilgisi; bilgileri ileten kişinin ÖNDER üyesi olması, derneğin gelişimi için 
                ihtiyaç duyulan desteğin sağlanması, en hızlı şekilde iletişim kurulabilmesi amacıyla formun doldurulması sırasında formu 
                dolduranın açık rızası da alınarak kişisel veri işlenmektedir.
              </p>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default KVKK;
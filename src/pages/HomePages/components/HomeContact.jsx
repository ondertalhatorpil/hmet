import Contact from '../../../components/Contact/Contact';


const HomeContact = () => {
  return (
    <Contact
      title="İLETİŞİM"
      description=""
      contactInfo={{
        phone: "0 (212) 521 19 58",
        email: "akademi@onder.org.tr",
        address: "Akşemsettin Mh. Şair Fuzuli Sk. No: 22 Fatih - İstanbul"
      }}
      socialLinks={{
        instagram: "https://instagram.com/ornek",
        facebook: "https://facebook.com/ornek",
        whatsapp: "https://wa.me/905551234567"
      }}
      boxTitle="Bize Ulaşın"
      boxDescription="Sorularınızı Paylaşın"
    />
  );
};

export default HomeContact
import React, { useState, useEffect, useRef } from 'react';
import { Share, Download} from 'lucide-react';

const CertificateGenerator = () => {
  const [name, setName] = useState('');
  const [generatedImages, setGeneratedImages] = useState([null]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState(null);
  const [progress, setProgress] = useState(0);
  const [assetsLoaded, setAssetsLoaded] = useState(false);

  const canvasRef = useRef(null);
  const backgroundImageSrc = './hatra.jpg';
  const textColor = '#343434';

  const loadAssets = async () => {
    try {
      console.log('Font yükleme başladı');
      await document.fonts.load('900 62px "Montserrat"');
      console.log('Font yüklendi');

      console.log('Görsel yükleme başladı:', backgroundImageSrc);
      const img = new Image();
      await new Promise((resolve, reject) => {
        img.onload = () => {
          console.log('Görsel başarıyla yüklendi');
          resolve();
        };
        img.onerror = (err) => {
          console.error('Görsel yükleme hatası:', err);
          reject(new Error(`Görsel yüklenemedi: ${backgroundImageSrc}`));
        };
        img.src = backgroundImageSrc;
      });

      setAssetsLoaded(true);
      console.log('Tüm assetler yüklendi');
    } catch (err) {
      console.error('Asset yükleme hatası:', err);
      setError('Font veya görseller yüklenemedi. Lütfen sayfayı yenileyiniz.');
    }
  };

  useEffect(() => {
    loadAssets();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim() || !assetsLoaded) return;

    setIsGenerating(true);
    setProgress(0);

    try {
      for (let i = 0; i <= 50; i++) {
        setProgress(i);
        await new Promise(resolve => setTimeout(resolve, 30));
      }

      const canvas = canvasRef.current;
      if (!canvas) throw new Error('Canvas element not found');

      const ctx = canvas.getContext('2d');
      if (!ctx) throw new Error('Unable to get 2D context from canvas');

      const backgroundImage = await new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(img);
        img.onerror = reject;
        img.src = backgroundImageSrc;
      });

      canvas.width = backgroundImage.width;
      canvas.height = backgroundImage.height;
      ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);

      ctx.font = '900 195px "Montserrat"';
      ctx.fillStyle = textColor;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';

      const turkishToUpper = (text) => {
        return text
          .replace(/i/g, 'İ')
          .toUpperCase();
      };

      const decodedName = turkishToUpper(name);
      const words = decodedName.split(' ');

      const fontSize = 62;
      const lineHeight = fontSize * 3.6;

      let lines = words.length >= 3
        ? [words.slice(0, -1).join(' '), words[words.length - 1]]
        : [decodedName];

      const totalTextHeight = lines.length * lineHeight;
      let startY = (canvas.height * 0.77) - (totalTextHeight / 2) + (fontSize / 2);

      lines.forEach((line, i) => {
        const y = startY + (i * lineHeight);
        ctx.fillText(line, canvas.width / 2, y);
      });

      const generatedImage = canvas.toDataURL();

      for (let i = 51; i <= 100; i++) {
        setProgress(i);
        await new Promise(resolve => setTimeout(resolve, 20));
      }

      setGeneratedImages([generatedImage]);
    } catch (err) {
      console.error('Error generating images:', err);
      setError(err.message);
    } finally {
      setIsGenerating(false);
    }
  };

  const shareImage = async () => {
    if (!generatedImages[0]) return;

    try {
      const blob = await (await fetch(generatedImages[0])).blob();
      const file = new File([blob], 'hatira.png', { type: 'image/png' });

      if (navigator.canShare && navigator.canShare({ files: [file] })) {
        await navigator.share({
          files: [file],
          title: 'Ulaştırma Memur-Sen 22. Yıl Hatıra Kartı'
        });
      }
    } catch (error) {
      console.error('Paylaşım sırasında hata oluştu:', error);
    }
  };

  const downloadImage = () => {
    if (!generatedImages[0]) return;
    const link = document.createElement('a');
    link.href = generatedImages[0];
    link.download = 'hatira.png';
    link.click();
  };

  return (
    <div className="min-h-screen" style={{ backgroundImage: "url('./Background.png')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}>
      <div className="min-h-screen bg-black/60 backdrop-blur-sm p-4 md:p-8 flex items-center justify-center">
        <main className="container mx-auto mt-16 md:mt-32">
          <div className="max-w-4xl mx-auto bg-gray-800/90 backdrop-blur-sm rounded-2xl shadow-2xl p-6 md:p-8 border border-[#BDA473]/20">
            <div className="text-center mb-8">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#BDA473] mb-4 bg-gradient-to-r from-[#BDA473] to-[#BDA473] bg-clip-text text-transparent">
                ÖNDER Öğretmen Akademisi
              </h1>
              <span className="text-2xl text-[#BDA473]/80 mt-2 block">Sertifika Oluşturma</span>
            </div>

            <div className="max-w-xl mx-auto bg-gray-800/30 p-4 md:p-6 rounded-2xl backdrop-blur-sm mb-8">
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Adınız Soyadınız"
                  disabled={isGenerating}
                  className="w-full px-6 py-4 bg-black/20 border-2 border-[#BDA473]/20 rounded-xl focus:outline-none focus:border-[#BDA473] text-white placeholder:text-gray-400 text-lg transition-all"
                />
                <button
                  type="submit"
                  disabled={isGenerating || !assetsLoaded}
                  className="w-full px-8 py-4 bg-[#BDA473] text-white rounded-xl hover:bg-[#8B7355] disabled:opacity-50 transition-all hover:scale-105 text-lg font-medium"
                >
                  {isGenerating ? (
                    <div className="flex items-center justify-center gap-2">
                      <span>Oluşturuluyor</span>
                      <div className="w-full bg-black/20 rounded-full h-2 max-w-[100px]">
                        <div
                          className="bg-white h-2 rounded-full transition-all duration-300"
                          style={{ width: `${progress}%` }}
                        />
                      </div>
                    </div>
                  ) : (
                    'Sertifika Oluştur'
                  )}
                </button>
              </form>
            </div>

            <canvas ref={canvasRef} className="hidden" />

            {generatedImages[0] && (
              <div className="mt-8 space-y-6">
                <h2 className="text-2xl md:text-3xl font-bold text-center text-[#BDA473] bg-gradient-to-r from-[#BDA473] to-[#BDA473] bg-clip-text">
                  Sertifikanız Hazır!
                </h2>

                <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-4 md:p-6 shadow-xl border border-[#BDA473]/10">
                  <img
                    src={generatedImages[0]}
                    alt="Sertifika"
                    className="rounded-xl shadow-2xl mx-auto transition-all hover:scale-[1.02] duration-300"
                  />

                  <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
                    <button
                      onClick={shareImage}
                      className="flex items-center justify-center gap-2 px-6 py-3 bg-[#BDA473] text-white rounded-xl hover:bg-[#8B7355] transition-all hover:scale-105 group"
                    >
                      <Share className="w-5 h-5 group-hover:scale-110 transition-transform" />
                      <span>Paylaş</span>
                    </button>
                    <button
                      onClick={downloadImage}
                      className="flex items-center justify-center gap-2 px-6 py-3 bg-gray-800/80 text-white rounded-xl hover:bg-[#BDA473] transition-all hover:scale-105 group border border-[#BDA473]/20"
                    >
                      <Download className="w-5 h-5 group-hover:scale-110 transition-transform" />
                      <span>İndir</span>
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Add this inside the generatedImages conditional render, after the buttons */}
            <div className="mt-6 text-gray-400 text-sm sm:text-base text-center space-y-2">
              <p>Yüksek kalitede indirmek için "İndir" butonunu kullanınız.</p>
              <p className="text-[#BDA473]">Not: İsminizde Türkçe karakter sorunu varsa sayfayı yenileyiniz!</p>
            </div>

            {error && (
              <div className="max-w-xl mx-auto mt-6 bg-red-500/10 backdrop-blur-sm border border-red-500/20 rounded-xl p-6">
                <p className="text-red-300 text-center">{error}</p>
                <div className="text-center mt-4">
                  <button
                    onClick={() => { setError(null); setProgress(0); }}
                    className="px-6 py-3 bg-red-500/80 text-white rounded-xl hover:bg-red-500 transition-all hover:scale-105"
                  >
                    Tekrar Dene
                  </button>
                </div>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default CertificateGenerator;
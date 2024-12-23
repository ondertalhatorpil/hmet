# Node.js Alpine imajını kullan
FROM node:18-alpine

# Çalışma dizinini ayarla
WORKDIR /app

# package.json ve package-lock.json (varsa) kopyala
COPY package*.json ./

# Bağımlılıkları yükle
RUN npm install

# Proje dosyalarını kopyala
COPY . .

# Projeyi build et
RUN npm run build

# Production için gerekli paketleri yükle
RUN npm install -g serve

# Uygulamayı çalıştır
CMD ["serve", "-s", "build", "-l", "80"]
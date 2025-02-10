  FROM node:18-alpine

  WORKDIR /app

  COPY package*.json ./

  RUN npm install

  COPY . .

  RUN npm run build

  RUN npm install -g serve

  CMD ["serve", "-s", "build", "-l", "80"]




  # FROM node:18-alpine

  # WORKDIR /app

  # COPY package*.json ./

  # RUN npm install

  # COPY . .

  # CMD ["sh", "-c", "npm start -- --host 0.0.0.0"]
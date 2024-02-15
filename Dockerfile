FROM node:20 AS development

WORKDIR /app

COPY package*.json ./

RUN npm install glob rimraf

COPY . .

CMD ["node", "app.js"]

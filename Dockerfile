FROM node:14-alpine AS development

WORKDIR /app

COPY package*.json ./

RUN npm install glob rimraf

COPY . .

CMD ["node", "app.js"]

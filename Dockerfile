FROM node:18-alpine

EXPOSE 8002

WORKDIR /app

RUN npm i npm@latest -g

COPY package*.json ./

RUN npm install

COPY . .

CMD [ "node", "index.js" ]
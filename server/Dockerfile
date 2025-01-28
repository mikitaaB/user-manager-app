FROM node:22.13.1-alpine

WORKDIR /server
COPY package*.json ./
RUN npm install
COPY . .

CMD ["node", "server.mjs"]
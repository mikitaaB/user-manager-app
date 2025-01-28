FROM node:22.13.1-alpine

WORKDIR /client
COPY package*.json ./
RUN npm install
COPY . .

CMD [ "npm", "run", "dev" ]
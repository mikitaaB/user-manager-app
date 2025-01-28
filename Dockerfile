FROM node:22.13.1-alpine AS build

WORKDIR /app

COPY server/package*.json ./server/
COPY client/package*.json ./client/

RUN cd server && npm install

RUN cd client && npm install

COPY . .

RUN cd client && npm run build

FROM node:22.13.1-alpine

WORKDIR /app

COPY --from=build /app/server ./server
COPY --from=build /app/client/dist ./client

WORKDIR /app/server
RUN npm install --production

ENV NODE_ENV=production
ENV PORT=8080

EXPOSE 8080

CMD ["node", "server.mjs"]
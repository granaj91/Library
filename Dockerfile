# Build react client
FROM node:15-alpine3.10 as client

WORKDIR /usr/app/client

COPY client/package*.json ./

RUN npm install --silent

COPY client/ ./

RUN npm run build

# Build server
FROM node:15-alpine3.10

WORKDIR /usr/src/app
COPY --from=client /usr/app/client/build/ ./client/build/

WORKDIR /usr/src/app/server/
COPY server/package*.json ./

RUN npm install --silent

COPY server/ ./

EXPOSE 8000

CMD ["npm", "start"]
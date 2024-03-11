# Node Dockerfile
FROM node:16

WORKDIR /usr/src/app

COPY *.json ./

RUN apt-get update && apt-get install -y wget \
    && npm install

COPY . .

EXPOSE 5000

CMD ["node", "index.js"]

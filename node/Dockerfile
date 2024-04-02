# Node Dockerfile
FROM node:16

WORKDIR /usr/src/app
ENV DOCKERIZE_VERSION v0.7.0

COPY *.json ./

RUN apt-get update && apt-get install -y wget \
    && npm install \
    && wget -O - https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz | tar xzf - -C /usr/local/bin \
    && apt-get autoremove -yqq --purge wget && rm -rf /var/lib/apt/lists/*

COPY . ./

EXPOSE 5000

CMD ["node", "index.js"]

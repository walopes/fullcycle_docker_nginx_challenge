FROM nginx:latest

WORKDIR /app
RUN apt-get update && apt-get install vim -y

# RUN rm /etc/nginx/conf.d/default.conf
# COPY default.conf /etc/default/conf.d/
COPY default.conf /etc/nginx/conf.d/default.conf

# COPY html/ /usr/share/nginx/html




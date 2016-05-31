FROM alpine:latest
MAINTAINER Inigo Crespo Bluetab

RUN apk add --update nodejs && \
    npm install mysql && \
    npm install kafka-node

RUN echo "@testing http://dl-4.alpinelinux.org/alpine/edge/testing" >> /etc/apk/repositories
RUN apk update && apk --update add dstat@testing


ADD files/stats_generator.js /root/stats_generator.js
ADD files/dummy-web-server.js /root/dummy-web-server.js
ADD files/start.sh /root/start.sh

RUN chmod +x /root/stats_generator.js
RUN chmod +x /root/dummy-web-server.js
RUN chmod +x /root/start.sh

ENTRYPOINT ["/root/start.sh"]

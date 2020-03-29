FROM node

RUN mkdir /app

ADD . /app

RUN npm i

WORKDIR /app

CMD node server.js --bind 0.0.0.0:$PORT wsgi
FROM node

RUN mkdir /app

ADD . /app


WORKDIR /app

RUN npm i

CMD node server.js --bind 0.0.0.0:$PORT wsgi
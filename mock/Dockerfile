FROM node:latest

USER root

RUN mkdir /app

WORKDIR /app

COPY *.json /app/
COPY .env /app
COPY src /app/src

RUN npm install && \
npm run build && \
npm prune --only=production

EXPOSE 9090

CMD [ "npm", "run","start" ]




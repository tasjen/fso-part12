FROM node:20-bullseye-slim

WORKDIR /usr/src/app

COPY --chown=node:node . /usr/src/app
RUN npm ci --omit=dev

ENV DEBUG=playground:*

USER node
CMD npm start
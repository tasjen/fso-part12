FROM node:16

WORKDIR /usr/src/app

COPY --chown=node:node . /usr/src/app
RUN npm ci --only=production

ENV DEBUG=playground:*

USER node
CMD npm start
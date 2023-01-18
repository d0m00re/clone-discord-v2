FROM node:19.2.0

RUN mkdir -p /usr/src/app && chown -R node:node /usr/src/app

WORKDIR /usr/src/app
USER node

COPY --chown=node:node ./package.json ./
RUN npm install

COPY --chown=node:node ./ .
RUN npm run build

EXPOSE 8000
ENTRYPOINT  ["node", "dist/index.js"]
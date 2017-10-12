FROM node:8

ENV NODE_ENV=production

WORKDIR /home/node/app

COPY package.json .
RUN yarn

COPY public ./public
COPY src ./src
RUN yarn build

COPY api ./api

CMD ["node", "api"]

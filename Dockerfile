FROM node:8

WORKDIR /home/node/app
ENV NODE_ENV=production

COPY package.json .
RUN yarn

COPY public ./public
COPY src ./src
RUN yarn build

COPY api ./api

CMD ["node", "api"]

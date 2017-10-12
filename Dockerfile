FROM node:8

ENV NODE_ENV=production

WORKDIR /home/node/app

COPY package.json .
RUN yarn && yarn build

COPY api .
COPY build ./public

CMD ["node", "main.js"]

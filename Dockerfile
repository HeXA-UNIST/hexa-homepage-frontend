FROM node:18

WORKDIR /app

COPY ./package.json ./package-lock.json ./.eslintrc.json ./tsconfig.json ./

RUN npm ci

COPY . .

CMD ["npm","run","start"]
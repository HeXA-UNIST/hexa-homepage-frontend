FROM node:18

WORKDIR /app

COPY ./package.json ./package-lock.json ./.eslintrc.json ./tsconfig.json ./

RUN npm install
RUN npm install pm2 -g

COPY . .

RUN npm run build  

ENTRYPOINT [ "pm2-runtime", "start", "server.js" ]
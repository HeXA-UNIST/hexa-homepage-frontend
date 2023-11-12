FROM node:18

WORKDIR /app

COPY ./package.json ./package-lock.json ./.eslintrc.json ./tsconfig.json ./

RUN npm install
RUN npm install -g serve

COPY . .

RUN npm run build   

ENTRYPOINT [ "./node_modules/.bin/serve", "-s", "build" ]
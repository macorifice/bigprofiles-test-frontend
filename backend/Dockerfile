FROM node:13

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --silent

EXPOSE 3000

COPY . .

CMD ["node", "bin/www"]
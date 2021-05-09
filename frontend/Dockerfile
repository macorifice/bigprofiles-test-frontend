FROM node:12.9.0-alpine
WORKDIR '/app'
COPY . .
RUN npm install --silent
EXPOSE 4200

CMD ["npm", "start"]
FROM node:alpine

WORKDIR /app

COPY . .

RUN npm install -g nodemon

RUN npm install

EXPOSE 3001

CMD [ "npm", "run", "dev" ]
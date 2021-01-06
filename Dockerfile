FROM node:14
COPY . /app

WORKDIR /app

EXPOSE 8080

RUN npm i
RUN npm run build

CMD ["npm", "run", "start:prod"]
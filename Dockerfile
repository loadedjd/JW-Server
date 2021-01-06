FROM node:14
COPY . .

RUN npm i
RUN npm run build

CMD ["npm", "run", "start:prod"]
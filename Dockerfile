FROM node:14
COPY . .

RUN npm build

CMD ["npm", "run", "start:prod"]